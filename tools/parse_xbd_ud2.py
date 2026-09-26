#!/usr/bin/env python3
"""Convierte apuntes/xbd/ud2/unidad2.html en parseados/xbd/ud2.js (nodos del mapa).

Uso:  python3 tools/parse_xbd_ud2.py
- h2 → nodo `tema`, h3 → nodo `subtema` (los h4 se quedan dentro del contenido).
- callouts → cajas .box (def|tip|info|warn|ex); el ejercicio de reflexión → nodo `ejercicio`.
- figuras → <figure> con la imagen de apuntes/xbd/ud2/imagenes/ (las que faltan en el zip se dejan como nota).
- Glosario y Bibliografía → nodos `glosario` y `recursos`.
Los resúmenes / ideas clave / tags se toman de tools/meta_xbd_ud2.py (escritos a mano).
"""
import re, os, html, sys
sys.path.insert(0, os.path.dirname(__file__))
from meta_xbd_ud2 import META, UNIDAD, MATERIA

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'apuntes/xbd/ud2/unidad2.html')
IMG_DIR = 'apuntes/xbd/ud2/imagenes'
OUT = os.path.join(ROOT, 'parseados/xbd/ud2.js')

raw = open(SRC, encoding='utf-8').read()
body = raw[raw.find('<article>') + 9: raw.find('</article>')]
body = re.sub(r'<style.*?</style>', '', body, flags=re.S)
have_imgs = set(os.listdir(os.path.join(ROOT, IMG_DIR)))

CALLOUT_CLS = {'definicion': 'def', 'tip': 'tip', 'info': 'info', 'aviso': 'warn', 'ejercicio': 'ex'}


def find_div_end(h, start):
    """Índice justo después del </div> que cierra el <div> que empieza en `start`."""
    depth = 0
    for m in re.finditer(r'<div\b[^>]*>|</div>', h[start:]):
        depth += 1 if m.group(0).startswith('<div') else -1
        if depth == 0:
            return start + m.end()
    return len(h)


def conv_callouts(h):
    out, i = [], 0
    for m in re.finditer(r'<div class="callout callout-(\w+)">', h):
        if m.start() < i:
            continue
        end = find_div_end(h, m.start())
        out.append(h[i:m.start()])
        block = h[m.end():end]
        kind = CALLOUT_CLS.get(m.group(1), 'info')
        t = re.search(r'<div class="callout-title">(.*?)</div>', block, flags=re.S)
        title = html.unescape(re.sub('<[^>]+>', '', t.group(1))).strip() if t else ''
        title = re.sub(r'^[^\wÁÉÍÓÚÑáéíóúñ¿¡]+', '', title).strip()
        if title.isupper():
            title = title.capitalize()
        bm = re.search(r'<div class="callout-body">', block)
        if bm:
            bend = find_div_end(block, bm.start())
            bodyh = block[bm.end():bend - 6].strip()
        else:
            bodyh = block
        out.append(f'<div class="box {kind}"><div class="box-title">{html.escape(title, quote=False)}</div>{bodyh}</div>')
        i = end
    out.append(h[i:])
    return ''.join(out)


def conv_figures(h):
    def rep(m):
        block = m.group(0)
        src = re.search(r'src="img/([^"]+)"', block)
        cap = re.search(r'<figcaption>(.*?)</figcaption>', block, flags=re.S)
        capt = cap.group(1).strip() if cap else ''
        alt = re.search(r'alt="([^"]*)"', block)
        altt = alt.group(1) if alt else re.sub('<[^>]+>', '', capt)
        if src and src.group(1) in have_imgs:
            return f'<figure><img src="{IMG_DIR}/{src.group(1)}" alt="{altt}" loading="lazy"><figcaption>{capt}</figcaption></figure>'
        return f'<p class="muted fig-missing">Figura (no incluida en el material original): {capt}</p>' if capt else ''
    return re.sub(r'<figure[^>]*>.*?</figure>', rep, h, flags=re.S)


def clean(h):
    h = conv_callouts(h)
    h = conv_figures(h)
    h = re.sub(r'\s+style="[^"]*"', '', h)
    h = re.sub(r'<hr class="separator">', '', h)
    h = re.sub(r'<(h4)[^>]*>', '<h4>', h)
    h = re.sub(r'<p>\s*</p>', '', h)
    h = re.sub(r'\n{3,}', '\n\n', h)
    return h.strip()


# ---------- partir por encabezados ----------
sections = []
for p in re.split(r'(?=<h[23][ >])', body):
    m = re.match(r'<h([23])[^>]*>(.*?)</h\1>(.*)', p, flags=re.S)
    if m:
        sections.append({'level': int(m.group(1)), 'title': html.unescape(re.sub('<[^>]+>', '', m.group(2))).strip(), 'html': m.group(3)})


def num_of(title):
    m = re.match(r'(\d+)(?:\.(\d+))?\.?\s', title)
    return (m.group(1), m.group(2)) if m else (None, None)


nodes, tema_id, ej = [], None, 0
for s in sections:
    n1, n2 = num_of(s['title'])
    h = s['html']
    exm = re.search(r'<div class="callout callout-ejercicio">', h)
    ex_html = None
    if exm:
        ex_html = h[exm.start():find_div_end(h, exm.start())]
        h = h.replace(ex_html, '')
    content = clean(h)
    if s['level'] == 2:
        if s['title'].startswith('Glosario'):
            nid, tipo = f'{UNIDAD}-glosario', 'glosario'
        elif s['title'].startswith('Bibliograf'):
            nid, tipo = f'{UNIDAD}-recursos', 'recursos'
        else:
            nid, tipo = f'{UNIDAD}-{n1}', 'tema'
            tema_id = nid
    else:
        nid = f'{UNIDAD}-{n1}-{n2}' if n2 else f'{tema_id}-ej'
        tipo = 'subtema'
    nodes.append({'id': nid, 'tipo': tipo, 'titulo': s['title'], 'contenido': content, 'parent': tema_id if tipo == 'subtema' else None})
    if ex_html:
        ej += 1
        nodes.append({'id': f'{UNIDAD}-ej{ej}', 'tipo': 'ejercicio', 'titulo': f'Ejercicio {ej} · Reflexión', 'contenido': clean(ex_html), 'parent': nid})

children = {}
for n in nodes:
    if n['parent']:
        children.setdefault(n['parent'], []).append(n['id'])


def js_str(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"
def js_arr(a): return '[' + ', '.join(js_str(x) for x in a) + ']'
def js_tpl(s): return '`' + s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${') + '`'


missing = [n['id'] for n in nodes if n['id'] not in META]
if missing:
    print('FALTA META para:', missing)

hub = META[UNIDAD]
out = [f"""/* ============================================================
 * XBD · Xestión de Bases de Datos (MP0372) · Unidad 2
 * Diseño conceptual y lógico de bases de datos
 * ------------------------------------------------------------
 * Fuente: apuntes/xbd/ud2/unidad2.html (+ imágenes en apuntes/xbd/ud2/imagenes/)
 * Generado con tools/parse_xbd_ud2.py (contenido) + tools/meta_xbd_ud2.py (resúmenes, claves, tags).
 * ============================================================ */
window.APUNTES = window.APUNTES || {{ materias: {{}}, unidades: [] }};

window.APUNTES.materias.xbd = window.APUNTES.materias.xbd || {MATERIA};

window.APUNTES.unidades.push({{
  materia: 'xbd',
  id: '{UNIDAD}',
  codigo: 'UD2',
  titulo: 'Diseño conceptual y lógico de bases de datos',
  fuente: 'apuntes/xbd/ud2/unidad2.html',
  nodos: [

  /* ---------------- HUB ---------------- */
  {{
    id: '{UNIDAD}',
    tipo: 'unidad',
    titulo: {js_str(hub['titulo'])},
    resumen: {js_str(hub['resumen'])},
    claves: {js_arr(hub['claves'])},
    tags: {js_arr(hub['tags'])},
    contenido: {js_tpl(hub['contenido'])}
  }},
"""]
for n in nodes:
    m = META.get(n['id'], {})
    links = children.get(n['id'], [])
    out.append(f"""  {{
    id: '{n['id']}',
    tipo: '{n['tipo']}',
    titulo: {js_str(m.get('titulo', n['titulo']))},
    resumen: {js_str(m.get('resumen', ''))},
    claves: {js_arr(m.get('claves', []))},
    tags: {js_arr(m.get('tags', []))},{(chr(10) + '    links: ' + js_arr(links) + ',') if links else ''}
    contenido: {js_tpl(n['contenido'])}
  }},
""")
out.append("  ]\n});\n")
open(OUT, 'w', encoding='utf-8').write(''.join(out))
print(f'OK → {OUT}: {len(nodes) + 1} nodos')
for n in nodes:
    print(f"  {n['tipo']:9} {n['id']:18} {n['titulo'][:70]}")
