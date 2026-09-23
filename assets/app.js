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
  let currentMateria = null; // null = todas las materias
  function resetGraph() { G.nodes = []; G.byId = new Map(); G.edges = []; G.xrefs = []; G.root = null; G.order = []; }

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

  function buildGraph(materiaId) {
    resetGraph();
    const A = window.APUNTES || { materias: {}, unidades: [] };
    const materias = Object.values(A.materias).filter(m => !materiaId || m.id === materiaId);
    const unidades = A.unidades.filter(u => !materiaId || u.materia === materiaId);

    let root;
    if (materias.length === 1) {
      root = makeMateriaNode(materias[0]);
    } else {
      root = { id: '__root', tipo: 'materia', titulo: 'ASIR · Apuntes', resumen: 'Todas las materias', contenido: '', tags: [], claves: [], children: [], virtual: true, ctx: {} };
      G.byId.set(root.id, root);
      materias.forEach(m => { const n = makeMateriaNode(m); n.parent = root; root.children.push(n); G.nodes.push(n); });
    }
    G.root = root;

    unidades.forEach(u => {
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
    nodesEl.innerHTML = ''; edgesEl.innerHTML = ''; nodeEls.clear();
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
    const nMat = G.nodes.filter(n => n.tipo === 'materia').length || 1;
    const nUd = G.nodes.filter(n => n.tipo === 'unidad').length;
    $('#stats').textContent = `${G.nodes.filter(n => !n.virtual && n.tipo !== 'materia').length} nodos · ${nMat} materia(s) · ${nUd} unidad(es)`;
  }

  /* ---------- Selector de materia ---------- */
  const matBtn = $('#mat-btn'), matMenu = $('#mat-menu');
  function materiaOf(nodeId) {
    const A = window.APUNTES || { unidades: [] };
    if (nodeId.startsWith('mat-')) return nodeId.slice(4);
    const u = A.unidades.find(u => u.nodos.some(n => n.id === nodeId));
    return u ? u.materia : null;
  }
  function renderMateriaSwitch() {
    const A = window.APUNTES || { materias: {}, unidades: [] };
    const list = Object.values(A.materias);
    const cur = currentMateria ? A.materias[currentMateria] : null;
    $('.mat-dot', matBtn).style.background = cur ? cur.color : 'linear-gradient(135deg,#2563eb,#7c3aed)';
    $('.mat-name', matBtn).textContent = cur ? (cur.abrev || cur.nombre) : 'Todas las materias';
    $('.mat-sub', matBtn).textContent = cur ? cur.nombre : `${list.length} materias · ${A.unidades.length} unidades`;
    const item = (m, active) => {
      const nUd = m ? A.unidades.filter(u => u.materia === m.id).length : A.unidades.length;
      const nNodos = m ? A.unidades.filter(u => u.materia === m.id).reduce((a, u) => a + u.nodos.length, 0) : A.unidades.reduce((a, u) => a + u.nodos.length, 0);
      return `<button class="mat-item${active ? ' on' : ''}" data-mat="${m ? esc(m.id) : ''}">
        <span class="mat-item-dot" style="background:${m ? m.color : 'linear-gradient(135deg,#2563eb,#7c3aed)'}"></span>
        <span class="mat-item-text">
          <span class="mat-item-title">${m ? esc(m.nombre) : 'Todas las materias'}${m && m.abrev ? ` <b>${esc(m.abrev)}</b>` : ''}</span>
          <span class="mat-item-meta">${m && m.codigo ? esc(m.codigo) + ' · ' : ''}${nUd} unidad${nUd === 1 ? '' : 'es'} · ${nNodos} nodos</span>
          ${m && m.descripcion ? `<span class="mat-item-desc">${esc(m.descripcion)}</span>` : ''}
        </span>
        ${active ? '<span class="mat-check">✓</span>' : ''}
      </button>`;
    };
    matMenu.innerHTML = `<div class="mat-menu-head">Cambiar de materia <kbd>M</kbd></div>` + list.map(m => item(m, currentMateria === m.id)).join('') + `<div class="mat-menu-sep"></div>` + item(null, !currentMateria);
  }
  function toggleMatMenu(force) {
    const on = force != null ? force : matMenu.hidden;
    matMenu.hidden = !on; matBtn.setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  matBtn.addEventListener('click', e => { e.stopPropagation(); toggleMatMenu(); });
  matMenu.addEventListener('click', e => {
    const b = e.target.closest('.mat-item'); if (!b) return;
    toggleMatMenu(false);
    setMateria(b.dataset.mat || null, true);
  });
  document.addEventListener('click', e => { if (!e.target.closest('.mat-switch')) toggleMatMenu(false); });

  function rebuild(materiaId) {
    currentMateria = materiaId || null;
    closePanel(true);
    buildGraph(currentMateria); layout(); render(); renderIndex(); renderMateriaSwitch();
    document.body.style.setProperty('--mat-color', (currentMateria && window.APUNTES.materias[currentMateria] || {}).color || '#2563eb');
  }
  function setMateria(materiaId, animate) {
    if ((materiaId || null) === currentMateria) return;
    rebuild(materiaId);
    try { localStorage.setItem('asir.materia', materiaId || ''); } catch (_) {}
    if (animate) fitAll(); else { const a = freeArea(); cam.s = 0.5; cam.x = a.cx; cam.y = a.cy; applyCam(); fitAll(); }
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
  }
  $('#index-body').addEventListener('click', e => {
    const tw = e.target.closest('.tw');
    if (tw && !tw.classList.contains('leaf')) { tw.closest('li').classList.toggle('collapsed'); return; }
    const row = e.target.closest('.row');
    if (row) openNode(row.dataset.id, true);
  });
  $('#index-expand').onclick = () => $$('#index-body .tree li.collapsed').forEach(l => l.classList.remove('collapsed'));
  $('#index-collapse').onclick = () => $$('#index-body .tree li').forEach(l => { if (l.querySelector('ul') && l.querySelector('.row').classList.contains('d2')) l.classList.add('collapsed'); });
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

  /* ---------- Cámara: pan y zoom ---------- */
  const cam = { x: 0, y: 0, s: 1 };
  const MIN_S = 0.12, MAX_S = 2.5;

  function applyCam() {
    world.style.transform = `translate(${cam.x}px, ${cam.y}px) scale(${cam.s})`;
    const g1 = 200 * cam.s, g2 = 40 * cam.s;
    viewport.style.backgroundSize = `100% 100%, 100% 100%, ${g1}px ${g1}px, ${g1}px ${g1}px, ${g2}px ${g2}px, ${g2}px ${g2}px`;
    viewport.style.backgroundPosition = `0 0, 0 0, ${cam.x}px ${cam.y}px, ${cam.x}px ${cam.y}px, ${cam.x}px ${cam.y}px, ${cam.x}px ${cam.y}px`;
    $('#zoom-label').textContent = Math.round(cam.s * 100) + '%';
  }
  function zoomAt(factor, cx, cy) {
    const ns = Math.min(MAX_S, Math.max(MIN_S, cam.s * factor));
    const k = ns / cam.s;
    cam.x = cx - (cx - cam.x) * k; cam.y = cy - (cy - cam.y) * k; cam.s = ns;
    applyCam();
  }
  let animId = 0;
  function animateTo(tx, ty, ts, dur = 480) {
    cancelAnimationFrame(animId);
    const sx = cam.x, sy = cam.y, ss = cam.s, t0 = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    const step = now => {
      const t = Math.min(1, (now - t0) / dur), e = ease(t);
      cam.x = sx + (tx - sx) * e; cam.y = sy + (ty - sy) * e; cam.s = ss + (ts - ss) * e;
      applyCam(); if (t < 1) animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
  }
  function freeArea() {
    const big = window.innerWidth >= 900;
    const left = big && document.body.classList.contains('index-open') ? 312 : 0;
    const right = big && document.body.classList.contains('panel-open') ? Math.min(612, window.innerWidth) : 0;
    return { left, right, cx: left + (window.innerWidth - left - right) / 2, cy: 56 + (window.innerHeight - 56 - 90) / 2 };
  }
  function centerOn(n, scale) {
    const s = scale || Math.max(cam.s, 0.9);
    const a = freeArea();
    animateTo(a.cx - n.x * s, a.cy - n.y * s, s);
  }
  function fitAll() {
    const vis = G.nodes.filter(n => !n.virtual); if (!vis.length) return;
    const xs = vis.map(n => n.x), ys = vis.map(n => n.y);
    const minX = Math.min(...xs) - 170, maxX = Math.max(...xs) + 170, minY = Math.min(...ys) - 120, maxY = Math.max(...ys) + 120;
    const a = freeArea();
    const w = window.innerWidth - a.left - a.right, h = window.innerHeight - 56 - 100;
    const s = Math.min(MAX_S, Math.max(MIN_S, Math.min(w / (maxX - minX), h / (maxY - minY))));
    animateTo(a.cx - (minX + maxX) / 2 * s, a.cy - (minY + maxY) / 2 * s, s);
  }

  const pointers = new Map();
  let dragging = false, moved = false, start = null, pinchStart = null, lastTap = 0, lastTapId = null;
  viewport.addEventListener('pointerdown', e => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    viewport.setPointerCapture(e.pointerId);
    if (pointers.size === 1) { dragging = true; moved = false; start = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y }; }
    if (pointers.size === 2) { const [p, q] = [...pointers.values()]; pinchStart = { d: Math.hypot(p.x - q.x, p.y - q.y), s: cam.s }; }
    $('#hint').classList.add('hide');
  });
  viewport.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2 && pinchStart) {
      const [p, q] = [...pointers.values()];
      const d = Math.hypot(p.x - q.x, p.y - q.y), mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
      zoomAt((pinchStart.s * d / pinchStart.d) / cam.s, mx, my); moved = true; return;
    }
    if (!dragging || !start) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    if (!moved && Math.hypot(dx, dy) > 4) { moved = true; viewport.classList.add('dragging'); cancelAnimationFrame(animId); }
    if (moved) { cam.x = start.cx + dx; cam.y = start.cy + dy; applyCam(); }
  });
  const endPointer = e => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStart = null;
    if (pointers.size === 0) {
      dragging = false; viewport.classList.remove('dragging');
      if (!moved) {
        const nodeEl = e.target.closest && e.target.closest('.node');
        if (nodeEl) {
          const now = performance.now();
          if (now - lastTap < 350 && lastTapId === nodeEl.dataset.id) centerOn(G.byId.get(nodeEl.dataset.id), 1.3);
          else openNode(nodeEl.dataset.id, true);
          lastTap = now; lastTapId = nodeEl.dataset.id;
        } else if (e.target === viewport || e.target === world || e.target === nodesEl || e.target === edgesEl) closePanel();
      }
    }
  };
  viewport.addEventListener('pointerup', endPointer);
  viewport.addEventListener('pointercancel', endPointer);
  viewport.addEventListener('wheel', e => {
    e.preventDefault();
    zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), e.clientX, e.clientY);
  }, { passive: false });

  $('#zoom-in').onclick = () => zoomAt(1.25, freeArea().cx, freeArea().cy);
  $('#zoom-out').onclick = () => zoomAt(0.8, freeArea().cx, freeArea().cy);
  $('#zoom-fit').onclick = fitAll;

  /* ---------- Panel de detalle ---------- */
  const panel = $('#panel');
  let activeId = null;

  function crumbsOf(n) { const parts = []; let p = n; while (p) { if (!p.virtual) parts.unshift(p); p = p.parent; } return parts; }
  const shortTitle = n => n.tipo === 'materia' ? (n.ctx.materiaAbrev || n.titulo) : n.tipo === 'unidad' ? (n.ctx.unidadCod || n.titulo) : n.titulo;
  function renderCrumbs(n) {
    const c = $('#crumbs'); if (!n) { c.innerHTML = ''; return; }
    const parts = crumbsOf(n);
    c.innerHTML = parts.map((p, i) => i === parts.length - 1
      ? `<span class="cur">${esc(shortTitle(p))}</span>`
      : `<button data-go="${p.id}">${esc(shortTitle(p))}</button><span class="sep">›</span>`).join('');
  }
  $('#crumbs').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) openNode(b.dataset.go, true); });

  const relItem = (n, arrow) => `<button class="rel" data-go="${n.id}"><span class="dot" style="background:${n.color || KIND_COLOR[n.tipo]}"></span><span class="rel-text"><div class="rel-t">${esc(n.titulo)}</div><div class="rel-s">${esc(n.resumen || KIND_LABEL[n.tipo])}</div></span><span class="arrow">${arrow}</span></button>`;

  function openNode(id, center, opts = {}) {
    if (!G.byId.has(id)) {
      // El nodo pertenece a otra materia: cambiar de materia y reintentar
      const m = materiaOf(id);
      if (m && m !== currentMateria) { rebuild(m); try { localStorage.setItem('asir.materia', m); } catch (_) {} }
      if (!G.byId.has(id)) return;
    }
    const n = G.byId.get(id); if (!n || n.virtual) return;
    if (activeId && nodeEls.get(activeId)) nodeEls.get(activeId).classList.remove('active');
    activeId = id; nodeEls.get(id).classList.add('active');
    $$('path.hl', edgesEl).forEach(l => l.classList.remove('hl'));
    $$(`path[data-a="${id}"], path[data-b="${id}"]`, edgesEl).forEach(l => l.classList.add('hl'));

    $('#panel-crumb').innerHTML = [
      n.ctx && n.ctx.materiaAbrev && n.tipo !== 'materia' ? `<b>${esc(n.ctx.materiaAbrev)}</b>` : '',
      n.ctx && n.ctx.unidad && n.tipo !== 'unidad' && n.tipo !== 'materia' ? esc(n.ctx.unidad) : '',
      KIND_LABEL[n.tipo]].filter(Boolean).join('  ›  ');
    $('#panel-title').textContent = n.titulo;
    $('#panel-kind').innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.color || KIND_COLOR[n.tipo]};margin-right:6px;vertical-align:middle"></span>${KIND_LABEL[n.tipo]}`;
    $('#panel-src').innerHTML = n.ctx && n.ctx.fuente ? `<a href="${esc(n.ctx.fuente)}" target="_blank" rel="noopener">Ver apuntes originales</a>` : '';

    const pane = $('#pane-contenido');
    pane.innerHTML = (n.resumen && n.tipo !== 'materia' ? `<p class="lead">${esc(n.resumen)}</p>` : '') + (n.contenido || '');
    const q = $('#search').value.trim(); if (q.length >= 2) highlight(pane, q);

    const claves = n.claves && n.claves.length ? n.claves : [];
    $('#pane-claves').innerHTML = (claves.length ? `<ul class="keys">${claves.map(k => `<li>${esc(k)}</li>`).join('')}</ul>` : '<p class="muted">Este nodo no tiene ideas clave resumidas.</p>')
      + (n.tags && n.tags.length ? `<h4>Etiquetas</h4><div class="tags">${n.tags.map(t => `<span class="tag" data-q="${esc(t)}">${esc(t)}</span>`).join('')}</div>` : '');

    let html = '';
    if (n.parent && !n.parent.virtual) html += `<div class="rel-group"><div class="rel-title">Pertenece a</div><div class="rel-list">${relItem(n.parent, '↑')}</div></div>`;
    if (n.children.length) html += `<div class="rel-group"><div class="rel-title">Contiene (${n.children.length})</div><div class="rel-list">${n.children.map(c => relItem(c, '→')).join('')}</div></div>`;
    const sib = n.parent ? n.parent.children.filter(c => c !== n) : [];
    if (sib.length) html += `<div class="rel-group"><div class="rel-title">Al mismo nivel</div><div class="rel-list">${sib.map(c => relItem(c, '↔')).join('')}</div></div>`;
    const xr = []; G.xrefs.forEach(([a, b]) => { if (a === id) xr.push(G.byId.get(b)); if (b === id) xr.push(G.byId.get(a)); });
    if (xr.length) html += `<div class="rel-group"><div class="rel-title">Referencias cruzadas</div><div class="rel-list">${xr.map(c => relItem(c, '⇢')).join('')}</div></div>`;
    $('#pane-relacionados').innerHTML = html || '<p class="muted">Sin relaciones.</p>';

    if (!opts.keepTab) setTab('contenido');
    $('#panel-body').scrollTop = 0;

    const idx = G.order.indexOf(id);
    $('#panel-prev').disabled = idx <= 0; $('#panel-next').disabled = idx >= G.order.length - 1;

    panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false'); document.body.classList.add('panel-open');
    renderCrumbs(n); syncIndex(id);
    if (center) centerOn(n);
    if (!opts.noHash) history.replaceState(null, '', '#' + id);
  }
  function closePanel(keepHash) {
    panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true'); document.body.classList.remove('panel-open');
    if (activeId && nodeEls.get(activeId)) nodeEls.get(activeId).classList.remove('active');
    $$('path.hl', edgesEl).forEach(l => l.classList.remove('hl'));
    activeId = null; renderCrumbs(null); $$('.tree .row.active').forEach(r => r.classList.remove('active'));
    if (keepHash !== true) history.replaceState(null, '', location.pathname + location.search);
  }
  function setTab(name) {
    $$('.panel-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    $$('.tabpane').forEach(p => p.classList.toggle('active', p.dataset.pane === name));
  }
  $('.panel-tabs').addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) setTab(t.dataset.tab); });
  $('#panel-close').onclick = closePanel;
  $('#panel-center').onclick = () => activeId && centerOn(G.byId.get(activeId), Math.max(cam.s, 1));
  function step(d) { const i = G.order.indexOf(activeId); const nid = G.order[i + d]; if (nid) openNode(nid, true); }
  $('#panel-prev').onclick = () => step(-1);
  $('#panel-next').onclick = () => step(1);
  $('#panel-body').addEventListener('click', e => {
    const b = e.target.closest('[data-go]'); if (b) { openNode(b.dataset.go, true); return; }
    const t = e.target.closest('.tag[data-q]'); if (t) { input.value = t.dataset.q; renderResults(); input.focus(); }
  });

  function highlight(root, q) {
    const terms = q.split(/\s+/).filter(t => t.length >= 2).map(escRe); if (!terms.length) return;
    const re = new RegExp('(' + terms.join('|') + ')', 'gi');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: t => (t.parentNode.closest('pre, code, mark') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
    const texts = []; let t; while ((t = walker.nextNode())) texts.push(t);
    texts.forEach(tn => {
      if (!re.test(tn.nodeValue)) return; re.lastIndex = 0;
      const span = document.createElement('span');
      span.innerHTML = esc(tn.nodeValue).replace(re, '<mark>$1</mark>');
      tn.parentNode.replaceChild(span, tn);
    });
  }

  /* ---------- Buscador ---------- */
  const input = $('#search'), results = $('#search-results');
  let sel = -1, current = [], kindFilter = null;

  $('#search-filters').innerHTML = `<button data-k="" class="on">Todo</button>` + ['tema', 'subtema', 'ejercicio', 'glosario'].map(k => `<button data-k="${k}">${KIND_LABEL[k]}s</button>`).join('');
  $('#search-filters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    kindFilter = b.dataset.k || null;
    $$('#search-filters button').forEach(x => x.classList.toggle('on', x === b));
    renderResults(); input.focus();
  });

  function search(q) {
    const nq = norm(q).trim();
    if (nq.length < 2) return [];
    const terms = nq.split(/\s+/).filter(Boolean);
    const out = [];
    G.nodes.forEach(n => {
      if (n.virtual) return;
      if (kindFilter && n.tipo !== kindFilter) return;
      let score = 0; const tn = norm(n.titulo), rn = norm(n.resumen || ''), tg = norm((n.tags || []).join(' ')), kc = norm((n.claves || []).join(' '));
      for (const t of terms) {
        if (!n.textIndex.includes(t)) { score = 0; break; }
        if (tn.includes(t)) score += 10; if (tg.includes(t)) score += 6; if (kc.includes(t)) score += 4; if (rn.includes(t)) score += 3;
        score += Math.min(5, (n.textIndex.split(t).length - 1) * 0.4);
      }
      if (score > 0) out.push({ n, score });
    });
    out.sort((a, b) => b.score - a.score);
    return out.slice(0, 14);
  }
  function snippet(n, terms) {
    const plain = (n.resumen ? n.resumen + ' — ' : '') + n.plain;
    const np = norm(plain);
    let pos = -1; for (const t of terms) { pos = np.indexOf(t); if (pos >= 0) break; }
    if (pos < 0) pos = 0;
    const a = Math.max(0, pos - 60), b = Math.min(plain.length, pos + 130);
    const s = (a > 0 ? '…' : '') + plain.slice(a, b).replace(/\s+/g, ' ') + (b < plain.length ? '…' : '');
    const re = new RegExp('(' + terms.map(escRe).join('|') + ')', 'gi');
    return esc(s).replace(re, '<mark>$1</mark>');
  }
  function renderResults() {
    const q = input.value; const terms = norm(q).trim().split(/\s+/).filter(Boolean);
    current = search(q);
    nodeEls.forEach(el => el.classList.remove('dim', 'match'));
    edgesEl.classList.remove('dimmed');
    if (norm(q).trim().length < 2) { results.hidden = true; results.innerHTML = ''; return; }
    const ids = new Set(current.map(r => r.n.id));
    nodeEls.forEach((el, id) => el.classList.toggle('dim', !ids.has(id)));
    ids.forEach(id => nodeEls.get(id) && nodeEls.get(id).classList.add('match'));
    edgesEl.classList.add('dimmed');
    results.hidden = false; sel = -1;
    const re = new RegExp('(' + terms.map(escRe).join('|') + ')', 'gi');
    results.innerHTML = current.length ? `<div class="sr-head"><span>${current.length} resultado${current.length === 1 ? '' : 's'}</span><span>↑ ↓ Enter</span></div>` + current.map((r, i) => `
      <div class="sr-item" data-id="${r.n.id}" data-i="${i}">
        <span class="sr-dot" style="background:${r.n.color || KIND_COLOR[r.n.tipo]}"></span>
        <div class="sr-text">
          <div class="sr-title">${esc(r.n.titulo).replace(re, '<mark>$1</mark>')}</div>
          <div class="sr-crumb">${esc([r.n.ctx && r.n.ctx.materiaAbrev, r.n.ctx && r.n.ctx.unidadCod].filter(Boolean).join(' › '))}</div>
          <div class="sr-snip">${snippet(r.n, terms)}</div>
        </div>
        <span class="sr-kind">${KIND_LABEL[r.n.tipo]}</span>
      </div>`).join('') : `<div class="sr-empty">Sin resultados para «${esc(q)}»${kindFilter ? ' en ' + KIND_LABEL[kindFilter] + 's' : ''}</div>`;
  }
  input.addEventListener('input', renderResults);
  input.addEventListener('focus', () => { if (input.value.trim().length >= 2) results.hidden = false; });
  results.addEventListener('click', e => { const it = e.target.closest('.sr-item'); if (it) { openNode(it.dataset.id, true); results.hidden = true; } });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!current.length) return; e.preventDefault();
      sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + current.length) % current.length;
      $$('.sr-item', results).forEach((el, i) => el.classList.toggle('sel', i === sel));
      $$('.sr-item', results)[sel].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (!current.length) return;
      openNode(current[Math.max(0, sel)].n.id, true); results.hidden = true;
    } else if (e.key === 'Escape') {
      if (input.value) { input.value = ''; renderResults(); } else input.blur();
    }
  });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) results.hidden = true; });

  /* ---------- Ayuda ---------- */
  const help = $('#help');
  $('#help-btn').onclick = () => { help.hidden = false; };
  $('#help-close').onclick = () => { help.hidden = true; };
  help.addEventListener('click', e => { if (e.target === help) help.hidden = true; });

  /* ---------- Atajos ---------- */
  document.addEventListener('keydown', e => {
    if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (e.key === '/') { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === 'Escape') { if (!help.hidden) help.hidden = true; else closePanel(); }
    else if (e.key === '+' || e.key === '=') zoomAt(1.2, freeArea().cx, freeArea().cy);
    else if (e.key === '-') zoomAt(0.83, freeArea().cx, freeArea().cy);
    else if (e.key === 'f' || e.key === 'F') fitAll();
    else if (e.key === 'i' || e.key === 'I') toggleIndex();
    else if (e.key === 'm' || e.key === 'M') toggleMatMenu();
    else if (e.key === '?') help.hidden = !help.hidden;
    else if (e.key === 'ArrowLeft' && activeId) step(-1);
    else if (e.key === 'ArrowRight' && activeId) step(1);
  });
  window.addEventListener('resize', applyCam);

  /* ---------- Inicio ---------- */
  loadScripts(window.APUNTES_FILES || [], () => {
    const A = window.APUNTES || { materias: {}, unidades: [] };
    const hash = decodeURIComponent(location.hash.slice(1));
    // Materia inicial: la del nodo del hash > preferencia guardada > primera materia
    let matPref = null; try { matPref = localStorage.getItem('asir.materia'); } catch (_) {}
    const hashMat = hash ? materiaOf(hash) : null;
    let mat;
    if (hashMat) mat = hashMat;                       // el enlace manda
    else if (matPref === '') mat = null;              // el usuario eligió «todas»
    else if (matPref && A.materias[matPref]) mat = matPref;
    else mat = Object.keys(A.materias)[0] || null;
    rebuild(mat);

    let idxPref = '1'; try { idxPref = localStorage.getItem('asir.index') || (window.innerWidth >= 1100 ? '1' : '0'); } catch (_) {}
    toggleIndex(idxPref === '1');

    if (hash && G.byId.has(hash)) {
      const n = G.byId.get(hash);
      cam.s = 1; const a = freeArea(); cam.x = a.cx - n.x; cam.y = a.cy - n.y; applyCam();
      openNode(hash, true);
    } else {
      const a = freeArea(); cam.s = 0.5; cam.x = a.cx; cam.y = a.cy; applyCam();
      fitAll();
    }
    window.addEventListener('hashchange', () => { const h = decodeURIComponent(location.hash.slice(1)); if (h && h !== activeId && (G.byId.has(h) || materiaOf(h))) openNode(h, true); });
  });
})();
