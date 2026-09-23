/* =========================================================
   Apuntes ASIR · Mapa de conocimiento
   Lógica del lienzo, grafo, índice, panel y buscador.
   100 % estático (sin backend): apto para Vercel / GitHub Pages.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const norm = s => (s || '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const stripHtml = html => { const d = document.createElement('div'); d.innerHTML = html || ''; return d.textContent || ''; };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const KIND_LABEL = { materia: 'Materia', unidad: 'Unidad', tema: 'Tema', subtema: 'Apartado', ejercicio: 'Ejercicio', glosario: 'Glosario', recursos: 'Recursos' };
  const KIND_COLOR = { materia: '#2563eb', unidad: '#d97706', tema: '#2563eb', subtema: '#059669', ejercicio: '#db2777', glosario: '#7c3aed', recursos: '#0891b2' };
  const KINDS = ['unidad', 'tema', 'subtema', 'ejercicio', 'glosario', 'recursos'];
  const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

  /* ---------- Carga de los ficheros parseados ---------- */
  function loadScripts(files, done) {
    let i = 0;
    (function next() {
      if (i >= files.length) return done();
      const s = document.createElement('script');
      s.src = 'parseados/' + files[i++];
      s.onload = next;
      s.onerror = () => { console.warn('No se pudo cargar', s.src); next(); };
      document.head.appendChild(s);
    })();
  }

  /* ---------- Construcción del grafo ---------- */
  const G = { nodes: [], byId: new Map(), edges: [], xrefs: [], root: null, order: [] };

  function makeMateriaNode(m) {
    const n = {
      id: 'mat-' + m.id, tipo: 'materia', titulo: (m.abrev ? m.abrev + ' · ' : '') + m.nombre, resumen: m.descripcion || '',
      tags: [m.id, m.abrev || '', m.codigo || ''].filter(Boolean),
      claves: [],
      contenido: `<p class="lead">${esc(m.nombre)}${m.codigo ? ' · ' + esc(m.codigo) : ''}</p><p>${esc(m.descripcion || '')}</p><p class="muted">Abre las unidades desde la pestaña <strong>Relacionados</strong> o desde el índice lateral.</p>`,
      children: [], parent: null, color: m.color, ctx: { materia: m.nombre, materiaAbrev: m.abrev || m.nombre, unidad: '' }
    };
    n.textIndex = norm(n.titulo + ' ' + n.resumen + ' ' + n.tags.join(' '));
    n.plain = stripHtml(n.contenido);
    G.byId.set(n.id, n);
    return n;
  }

  function buildGraph() {
    const A = window.APUNTES || { materias: {}, unidades: [] };
    const materias = Object.values(A.materias);

    let root;
    if (materias.length === 1) {
      root = makeMateriaNode(materias[0]);
    } else {
      root = { id: '__root', tipo: 'materia', titulo: 'ASIR · Apuntes', resumen: 'Todas las materias', contenido: '', tags: [], claves: [], children: [], virtual: true, ctx: {} };
      G.byId.set(root.id, root);
      materias.forEach(m => { const n = makeMateriaNode(m); n.parent = root; root.children.push(n); });
    }
    G.root = root;

    A.unidades.forEach(u => {
      const matNode = G.byId.get('mat-' + u.materia) || root;
      const mat = A.materias[u.materia] || {};
      const hub = u.nodos.find(n => n.tipo === 'unidad') || u.nodos[0];
      const ctx = { materia: mat.nombre || u.materia, materiaAbrev: mat.abrev || u.materia, unidad: u.codigo + ' · ' + u.titulo, unidadCod: u.codigo, unidadId: u.id, materiaId: u.materia, fuente: u.fuente };

      u.nodos.forEach(n => {
        const node = Object.assign({ claves: [], tags: [] }, n, { children: [], parent: null, ctx });
        node.plain = stripHtml(n.contenido);
        node.textIndex = norm([n.titulo, n.resumen, (n.claves || []).join(' '), (n.tags || []).join(' '), node.plain].join(' \n '));
        G.byId.set(node.id, node);
        G.nodes.push(node);
      });

      const hubNode = G.byId.get(hub.id);
      hubNode.parent = matNode; matNode.children.push(hubNode);

      // Jerarquía a partir de `links`
      u.nodos.forEach(n => (n.links || []).forEach(l => {
        const child = G.byId.get(l), parent = G.byId.get(n.id);
        if (!child || !parent || child === parent) return;
        if (!child.parent && child.tipo !== 'unidad' && child.tipo !== 'tema') { child.parent = parent; parent.children.push(child); }
        else G.xrefs.push([parent.id, child.id]);
      }));

      // Huérfanos: temas/glosario/recursos → hub; resto → último tema visto
      let lastTema = hubNode;
      u.nodos.forEach(n => {
        const node = G.byId.get(n.id);
        if (node === hubNode) return;
        if (!node.parent) {
          const p = (node.tipo === 'tema' || node.tipo === 'glosario' || node.tipo === 'recursos') ? hubNode : lastTema;
          node.parent = p; p.children.push(node);
        }
        if (node.tipo === 'tema') lastTema = node;
      });
    });

    (function walk(n) { if (!n.virtual) G.order.push(n.id); n.children.forEach(c => { G.edges.push([n.id, c.id]); walk(c); }); })(root);
    if (!root.virtual) G.nodes.unshift(root);
  }

  /* ---------- Disposición radial ---------- */
  const RADII = [0, 520, 1080, 1560, 1980];
  function layout() {
    const leaves = n => n.children.length ? n.children.reduce((a, c) => a + leaves(c), 0) : 1;
    const place = (n, a0, a1, depth) => {
      const mid = (a0 + a1) / 2, r = RADII[Math.min(depth, RADII.length - 1)];
      n.x = Math.cos(mid) * r; n.y = Math.sin(mid) * r; n.depth = depth;
      if (!n.children.length) return;
      const total = leaves(n); let a = a0;
      n.children.forEach(c => { const span = (a1 - a0) * (leaves(c) / total); place(c, a, a + span, depth + 1); a += span; });
    };
    const root = G.root; root.x = 0; root.y = 0; root.depth = 0;
    const total = leaves(root); let a = -Math.PI / 2;
    root.children.forEach(c => { const span = Math.PI * 2 * (leaves(c) / total); place(c, a, a + span, 1); a += span; });
  }

  /* ---------- Render de nodos y aristas ---------- */
  const world = $('#world'), nodesEl = $('#nodes'), edgesEl = $('#edges'), viewport = $('#viewport');
  const nodeEls = new Map();

  function render() {
    const frag = document.createDocumentFragment();
    G.nodes.forEach(n => {
      if (n.virtual) return;
      const el = document.createElement('div');
      el.className = 'node t-' + n.tipo; el.dataset.id = n.id;
      el.style.left = n.x + 'px'; el.style.top = n.y + 'px';
      if (n.color) el.style.setProperty('--nc', n.color);
      const kind = KIND_LABEL[n.tipo] || n.tipo;
      const ctxTag = n.ctx && n.ctx.unidadCod && n.tipo !== 'unidad' ? ' · ' + esc(n.ctx.unidadCod) : '';
      el.innerHTML = `<div class="n-kind"><i></i>${kind}${ctxTag}</div><div class="n-title">${esc(n.titulo)}</div><div class="n-sum">${esc(n.resumen || '')}</div>`;
      frag.appendChild(el); nodeEls.set(n.id, el);
    });
    nodesEl.appendChild(frag);

    const NS = 'http://www.w3.org/2000/svg';
    const draw = (a, b, cls) => {
      const A = G.byId.get(a), B = G.byId.get(b);
      if (!A || !B || A.virtual || B.virtual) return;
      const p = document.createElementNS(NS, 'path');
      const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
      const dx = B.x - A.x, dy = B.y - A.y, k = 0.18;
      p.setAttribute('d', `M${A.x},${A.y} Q${mx - dy * k},${my + dx * k} ${B.x},${B.y}`);
      if (cls) p.setAttribute('class', cls);
      p.dataset.a = a; p.dataset.b = b;
      edgesEl.appendChild(p);
    };
    G.edges.forEach(([a, b]) => draw(a, b, G.byId.get(b).depth <= 2 ? 'strong' : ''));
    G.xrefs.forEach(([a, b]) => draw(a, b, 'xref'));

    $('#legend').innerHTML = KINDS.map(k => `<span><i style="background:${KIND_COLOR[k]}"></i>${KIND_LABEL[k]}</span>`).join('');
    const A = window.APUNTES || { materias: {}, unidades: [] };
    $('#stats').textContent = `${G.nodes.filter(n => !n.virtual && n.tipo !== 'materia').length} nodos · ${Object.keys(A.materias).length} materia(s) · ${A.unidades.length} unidad(es)`;
  }

  /* ---------- Índice (árbol) ---------- */
  function renderIndex() {
    const body = $('#index-body');
    const build = (n, depth) => {
      const kids = n.children.filter(c => !c.virtual);
      const li = document.createElement('li');
      li.dataset.id = n.id;
      if (depth >= 2 && kids.length) li.classList.add('collapsed');
      const row = document.createElement('div');
      row.className = 'row d' + Math.min(depth, 2); row.dataset.id = n.id;
      row.innerHTML = `<span class="tw${kids.length ? '' : ' leaf'}">${CHEV}</span><span class="dot" style="background:${n.color || KIND_COLOR[n.tipo]}"></span><span class="lbl" title="${esc(n.titulo)}">${esc(n.titulo)}</span>${kids.length ? `<span class="cnt">${kids.length}</span>` : ''}`;
      li.appendChild(row);
      if (kids.length) { const ul = document.createElement('ul'); kids.forEach(c => ul.appendChild(build(c, depth + 1))); li.appendChild(ul); }
      return li;
    };
    const tree = document.createElement('div'); tree.className = 'tree';
    const ul = document.createElement('ul');
    (G.root.virtual ? G.root.children : [G.root]).forEach(t => ul.appendChild(build(t, 0)));
    tree.appendChild(ul); body.innerHTML = ''; body.appendChild(tree);

    body.addEventListener('click', e => {
      const tw = e.target.closest('.tw');
      if (tw && !tw.classList.contains('leaf')) { tw.closest('li').classList.toggle('collapsed'); return; }
      const row = e.target.closest('.row');
      if (row) openNode(row.dataset.id, true);
    });
    $('#index-expand').onclick = () => $$('.tree li.collapsed', body).forEach(l => l.classList.remove('collapsed'));
    $('#index-collapse').onclick = () => $$('.tree li', body).forEach(l => { if (l.querySelector('ul') && l.querySelector('.row').classList.contains('d2')) l.classList.add('collapsed'); });
  }
  function syncIndex(id) {
    $$('.tree .row.active').forEach(r => r.classList.remove('active'));
    const row = $(`.tree .row[data-id="${id}"]`);
    if (!row) return;
    row.classList.add('active');
    let li = row.closest('li');
    while (li) { li.classList.remove('collapsed'); li = li.parentElement.closest('li'); }
    row.scrollIntoView({ block: 'nearest' });
  }
  const toggleIndex = force => {
    const on = force != null ? force : !document.body.classList.contains('index-open');
    document.body.classList.toggle('index-open', on);
    try { localStorage.setItem('asir.index', on ? '1' : '0'); } catch (_) {}
  };
  $('#toggle-index').onclick = () => toggleIndex();

  /* __PART2__ */
})();
