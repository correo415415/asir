# TODO

## Contenido nuevo
- [x] **FH · Fundamentos de Hardware** (nueva materia, carpeta `fh/`, PDFs rasterizados → OCR con tesseract `glg+spa` en `apuntes/fh/ocr/`)
  - [x] Copiar PDFs originales a `apuntes/fh/`
  - [x] UD1 · Arquitectura de ordenadores → `parseados/fh/ud1.js` (29 nodos, 26 imágenes)
  - [x] UD2 · Representación y medidas de la información → `parseados/fh/ud2.js` (28 nodos, 13 imágenes, 7 nodos de ejercicios resueltos)
  - [x] UD3 · Elementos internos de un sistema informático → `parseados/fh/ud3.js` (70 nodos, 123 imágenes)
  - [x] Extraer las imágenes relevantes de los PDF (analizarlas antes de incluirlas) a `apuntes/fh/img/udN/` (`tools/extract_pdf_images.py`, `tools/contact_sheet.py`) — UD1, UD2, UD3 hechas
- [x] **XBD · UD2** (`unidad2.html` + `imagenes/`)
  - [x] Copiar original a `apuntes/xbd/ud2/`
  - [x] Parsear a `parseados/xbd/ud2.js` (50 nodos) con las 48 figuras del original (`tools/parse_xbd_ud2.py` + `tools/meta_xbd_ud2.py`)
- [x] Registrar XBD UD2 y FH UD1/UD2/UD3 en `parseados/manifest.js`
- [ ] Actualizar README (tabla de materias)

## Web
- [x] Buscador: las **sugerencias del placeholder** cambian según la materia activa
- [x] Al hacer **clic en una tarjeta** se abre automáticamente el panel lateral en ese nodo
- [x] Bug: texto de las tarjetas **borroso** al pasar el ratón (y se queda así) → quitar `transform: scale` / forzar `backface-visibility`, `translateZ(0)` o cambiar la animación de hover
- [x] Filtros del buscador (glosario, ejercicios, temas…, excepto «Todo»): al pulsarlos se **listan todos los resultados** de ese tipo aunque no haya texto, y las tarjetas de ese tipo se **marcan** en el mapa
- [x] Soporte de imágenes en el contenido de los nodos (estilo `figure`/`img` en el panel, click para ampliar)

## Mapa
- [ ] **Sistema automático anti-solapamiento de tarjetas** (`layout()` en `assets/app.js`): que las tarjetas nunca se superpongan, sea cual sea el número de nodos (p. ej. XBD UD1+UD2 juntas o «Todas las materias»), sin ajustes manuales por materia
  - [ ] Radios de anillo adaptativos: calcular el radio de cada anillo para que la longitud de arco disponible por nodo sea ≥ ancho de tarjeta + margen (en vez de `RADII` fijos)
  - [ ] Reparto angular proporcional al número de hojas, con ángulo mínimo por nodo según su ancho real (t-materia 300 px, t-unidad 270, tema 230, subtema/ejercicio 210) y alto estimado
  - [ ] Pasada final de resolución de colisiones (AABB): empujar radialmente/tangencialmente las tarjetas que aún choquen hasta que no quede ninguna intersección
  - [ ] Mantener las aristas legibles (padre-hijo cercanos) y el centrado inicial / `fitAll`
  - [ ] Test automático (Playwright o script node) que cargue todas las materias y verifique 0 intersecciones entre tarjetas

## Mantenimiento
- [ ] Commits frecuentes + PR actualizada
