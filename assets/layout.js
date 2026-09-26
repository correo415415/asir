/* =========================================================
   Apuntes ASIR · Disposición radial sin solapamientos
   Módulo sin dependencias del DOM (se usa en el navegador y en tools/test_layout.js).

   1. radialLayout(root, size, opts): anillos por profundidad con radios adaptativos.
      El ángulo que necesita cada subárbol se calcula de abajo arriba a partir del
      ancho real de las tarjetas, de modo que ningún nodo reciba menos arco que su
      ancho + margen. Si el total supera 2π se agrandan los radios.
   2. resolveCollisions(nodes, size, opts): pasada final AABB que separa las tarjetas
      que aún se toquen (empuje por el eje de menor penetración).
   3. countOverlaps(nodes, size, margin): comprobación (0 = correcto).
   ========================================================= */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.ASIR_LAYOUT = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const TAU = Math.PI * 2;
  const WIDTH = { materia: 300, unidad: 270, tema: 230, subtema: 210, ejercicio: 210, glosario: 230, recursos: 230 };

  /** Estimación del tamaño de una tarjeta a partir de su tipo y textos (cuando no se puede medir). */
  function estimateSize(n) {
    const w = WIDTH[n.tipo] || 230;
    const inner = w - 28;
    const charW = n.tipo === 'materia' ? 9.6 : n.tipo === 'unidad' ? 8.1 : 7.3;
    const titleLines = Math.min(4, Math.max(1, Math.ceil(((n.titulo || '').length * charW) / inner)));
    const sumLines = Math.min(n.tipo === 'materia' ? 2 : 3, Math.ceil(((n.resumen || '').length * 6.1) / inner));
    const lineH = n.tipo === 'materia' ? 23.4 : n.tipo === 'unidad' ? 19.5 : 17.6;
    const h = (n.tipo === 'materia' ? 32 : 22) + 14 + titleLines * lineH + 7 + sumLines * 16.7;
    return { w, h: Math.round(h) };
  }

  /**
   * Disposición radial. Asigna n.x, n.y, n.depth a todos los nodos del árbol.
   * @param root   nodo raíz (children[]); si root.virtual no ocupa sitio
   * @param size   fn(node) → {w,h}
   * @param opts   { gap, ringStep, firstRing, startAngle }
   */
  function radialLayout(root, size, opts) {
    opts = opts || {};
    const gap = opts.gap != null ? opts.gap : 36;         // separación mínima entre tarjetas en el mismo anillo
    const ringStep = opts.ringStep || 400;                // separación mínima entre anillos
    const firstRing = opts.firstRing || 480;
    const start = opts.startAngle != null ? opts.startAngle : -Math.PI / 2;

    // Profundidades y anillos
    const byDepth = [];
    (function walk(n, d) { n.depth = d; (byDepth[d] = byDepth[d] || []).push(n); n.children.forEach(c => walk(c, d + 1)); })(root, 0);
    const maxDepth = byDepth.length - 1;
    if (maxDepth === 0) { root.x = 0; root.y = 0; return { radii: [0] }; }

    // Radio mínimo por anillo: suma de anchos / 2π (condición necesaria) y separación mínima entre anillos
    const need1 = n => size(n).w + gap;
    const radii = [0];
    for (let d = 1; d <= maxDepth; d++) {
      const arc = byDepth[d].reduce((a, n) => a + need1(n), 0);
      radii[d] = Math.max(d === 1 ? firstRing : radii[d - 1] + ringStep, arc / TAU + (d === 1 ? 0 : 0));
    }

    // Ángulo necesario por subárbol (de abajo arriba), en función de los radios actuales.
    // Si el total excede 2π se escalan los radios y se repite (converge en 1-3 pasadas).
    const need = new Map();
    const computeNeed = n => {
      const own = n.depth === 0 ? 0 : need1(n) / radii[n.depth];
      const kids = n.children.reduce((a, c) => a + computeNeed(c), 0);
      const v = Math.max(own, kids); need.set(n, v); return v;
    };
    for (let it = 0; it < 8; it++) {
      const total = computeNeed(root);
      if (total <= TAU * 0.999) break;
      const k = total / TAU * 1.01;
      for (let d = 1; d <= maxDepth; d++) radii[d] *= k;
    }

    // Colocación: cada hijo recibe un sector proporcional a su necesidad y se sitúa en el centro
    const place = (n, a0, a1) => {
      const r = radii[n.depth], mid = (a0 + a1) / 2;
      if (n.depth === 0) { n.x = 0; n.y = 0; } else { n.x = Math.cos(mid) * r; n.y = Math.sin(mid) * r; }
      if (!n.children.length) return;
      const total = n.children.reduce((a, c) => a + need.get(c), 0) || 1;
      let a = a0;
      n.children.forEach(c => { const span = (a1 - a0) * (need.get(c) / total); place(c, a, a + span); a += span; });
    };
    place(root, start, start + TAU);
    return { radii };
  }

  /** Cajas con margen. */
  function boxes(nodes, size, margin) {
    return nodes.map(n => { const s = size(n); return { n, x: n.x, y: n.y, hw: s.w / 2 + margin / 2, hh: s.h / 2 + margin / 2 }; });
  }

  /**
   * Separa tarjetas que se solapan (AABB). Devuelve el número de solapes restantes.
   * @param nodes  lista de nodos con x, y (los virtuales se ignoran)
   * @param size   fn(node) → {w,h}
   * @param opts   { gap, iterations, isFixed }
   */
  function resolveCollisions(nodes, size, opts) {
    opts = opts || {};
    const gap = opts.gap != null ? opts.gap : 28;
    const iterations = opts.iterations || 80;
    const isFixed = opts.isFixed || (n => n.depth === 0);
    const bs = boxes(nodes.filter(n => !n.virtual), size, gap);
    let remaining = 0;
    for (let it = 0; it < iterations; it++) {
      remaining = 0;
      for (let i = 0; i < bs.length; i++) {
        const A = bs[i];
        for (let j = i + 1; j < bs.length; j++) {
          const B = bs[j];
          const dx = B.x - A.x, dy = B.y - A.y;
          const ox = A.hw + B.hw - Math.abs(dx), oy = A.hh + B.hh - Math.abs(dy);
          if (ox <= 0 || oy <= 0) continue;
          remaining++;
          const fa = isFixed(A.n), fb = isFixed(B.n);
          const wa = fa ? 0 : fb ? 1 : 0.5, wb = fa ? 1 : fb ? 0 : 0.5;
          // Empuje por el eje de menor penetración; si están casi centrados, empuje radial desde el origen
          if (ox < oy) {
            const s = dx >= 0 ? 1 : -1; const push = ox + 0.5;
            A.x -= s * push * wa; B.x += s * push * wb;
          } else {
            const s = dy >= 0 ? 1 : -1; const push = oy + 0.5;
            A.y -= s * push * wa; B.y += s * push * wb;
          }
        }
      }
      if (!remaining) break;
    }
    bs.forEach(b => { b.n.x = Math.round(b.x); b.n.y = Math.round(b.y); });
    return remaining;
  }

  /** Cuenta pares de tarjetas que se intersectan (con un margen opcional). */
  function countOverlaps(nodes, size, margin) {
    const bs = boxes(nodes.filter(n => !n.virtual), size, margin || 0);
    let c = 0;
    for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) {
      const A = bs[i], B = bs[j];
      if (Math.abs(B.x - A.x) < A.hw + B.hw && Math.abs(B.y - A.y) < A.hh + B.hh) c++;
    }
    return c;
  }

  return { radialLayout, resolveCollisions, countOverlaps, estimateSize, WIDTH };
});
