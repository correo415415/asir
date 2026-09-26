#!/usr/bin/env node
/* Test de disposición: carga todos los ficheros parseados, construye el árbol como la web
   (misma lógica de jerarquía que assets/app.js) y comprueba que ninguna tarjeta se solapa,
   para cada materia por separado y para «Todas las materias».
   Uso: node tools/test_layout.js [--verbose] */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const L = require(path.join(ROOT, 'assets/layout.js'));

// Cargar los parseados en un `window` simulado
global.window = { APUNTES: { materias: {}, unidades: [] } };
eval(fs.readFileSync(path.join(ROOT, 'parseados/manifest.js'), 'utf8'));
for (const f of window.APUNTES_FILES) eval(fs.readFileSync(path.join(ROOT, 'parseados', f), 'utf8'));
const A = window.APUNTES;

function buildTree(materiaId) {
  const byId = new Map(), nodes = [];
  const materias = Object.values(A.materias).filter(m => !materiaId || m.id === materiaId);
  const unidades = A.unidades.filter(u => !materiaId || u.materia === materiaId);
  const mk = m => { const n = { id: 'mat-' + m.id, tipo: 'materia', titulo: (m.abrev ? m.abrev + ' · ' : '') + m.nombre, resumen: m.descripcion || '', children: [], parent: null }; byId.set(n.id, n); return n; };
  let root;
  if (materias.length === 1) { root = mk(materias[0]); nodes.push(root); }
  else { root = { id: '__root', tipo: 'materia', titulo: '', resumen: '', children: [], virtual: true }; byId.set(root.id, root); materias.forEach(m => { const n = mk(m); n.parent = root; root.children.push(n); nodes.push(n); }); }
  unidades.forEach(u => {
    const matNode = byId.get('mat-' + u.materia) || root;
    const hub = u.nodos.find(n => n.tipo === 'unidad') || u.nodos[0];
    u.nodos.forEach(n => { const node = { id: n.id, tipo: n.tipo, titulo: n.titulo, resumen: n.resumen || '', children: [], parent: null }; byId.set(node.id, node); nodes.push(node); });
    const hubNode = byId.get(hub.id); hubNode.parent = matNode; matNode.children.push(hubNode);
    u.nodos.forEach(n => (n.links || []).forEach(l => {
      const child = byId.get(l), parent = byId.get(n.id);
      if (!child || !parent || child === parent) return;
      if (!child.parent && child.tipo !== 'unidad' && child.tipo !== 'tema') { child.parent = parent; parent.children.push(child); }
    }));
    let lastTema = hubNode;
    u.nodos.forEach(n => {
      const node = byId.get(n.id); if (node === hubNode) return;
      if (!node.parent) { const p = (node.tipo === 'tema' || node.tipo === 'glosario' || node.tipo === 'recursos') ? hubNode : lastTema; node.parent = p; p.children.push(node); }
      if (node.tipo === 'tema') lastTema = node;
    });
  });
  return { root, nodes };
}

const verbose = process.argv.includes('--verbose');
const cases = [null, ...Object.keys(A.materias)];
let failed = 0;
for (const mat of cases) {
  const { root, nodes } = buildTree(mat);
  const size = L.estimateSize;
  const { radii, rows } = L.radialLayout(root, size);
  const before = L.countOverlaps(nodes, size, 0);
  const left = L.resolveCollisions(nodes, size, { gap: 24 });
  const after = L.countOverlaps(nodes, size, 0);
  const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
  const w = Math.max(...xs) - Math.min(...xs), h = Math.max(...ys) - Math.min(...ys);
  const ok = after === 0;
  if (!ok) failed++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${(mat || 'todas').padEnd(6)} nodos=${String(nodes.length).padStart(3)} anillos=[${radii.map(r => Math.round(r)).join(',')}] solapes: radial=${before} → final=${after} (pendientes en pasada=${left}) extensión=${Math.round(w)}×${Math.round(h)}`);
  if (verbose && after) {
    const bs = nodes.map(n => ({ n, s: size(n) }));
    for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) {
      const a = bs[i], b = bs[j];
      if (Math.abs(b.n.x - a.n.x) < (a.s.w + b.s.w) / 2 && Math.abs(b.n.y - a.n.y) < (a.s.h + b.s.h) / 2) console.log('   ', a.n.id, '<->', b.n.id);
    }
  }
}
process.exit(failed ? 1 : 0);
