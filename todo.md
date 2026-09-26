# TODO

## Contenido nuevo
- [ ] **FH · Fundamentos de Hardware** (nueva materia, carpeta `fh/`, PDFs rasterizados → OCR con tesseract `glg+spa` en `apuntes/fh/ocr/`)
  - [x] Copiar PDFs originales a `apuntes/fh/`
  - [x] UD1 · Arquitectura de ordenadores → `parseados/fh/ud1.js` (29 nodos, 26 imágenes)
  - [x] UD2 · Representación y medidas de la información → `parseados/fh/ud2.js` (28 nodos, 13 imágenes, 7 nodos de ejercicios resueltos)
  - [ ] UD3 · Elementos internos de un sistema informático → `parseados/fh/ud3.js`
  - [x] Extraer las imágenes relevantes de los PDF (analizarlas antes de incluirlas) a `apuntes/fh/img/udN/` (`tools/extract_pdf_images.py`) — UD1, UD2 hechas; UD3 pendiente
- [x] **XBD · UD2** (`unidad2.html` + `imagenes/`)
  - [x] Copiar original a `apuntes/xbd/ud2/`
  - [x] Parsear a `parseados/xbd/ud2.js` (50 nodos) con las 48 figuras del original (`tools/parse_xbd_ud2.py` + `tools/meta_xbd_ud2.py`)
- [x] Registrar XBD UD2 y FH UD1/UD2 en `parseados/manifest.js` (falta FH UD3)
- [ ] Actualizar README (tabla de materias)

## Web
- [x] Buscador: las **sugerencias del placeholder** cambian según la materia activa
- [x] Al hacer **clic en una tarjeta** se abre automáticamente el panel lateral en ese nodo
- [x] Bug: texto de las tarjetas **borroso** al pasar el ratón (y se queda así) → quitar `transform: scale` / forzar `backface-visibility`, `translateZ(0)` o cambiar la animación de hover
- [x] Filtros del buscador (glosario, ejercicios, temas…, excepto «Todo»): al pulsarlos se **listan todos los resultados** de ese tipo aunque no haya texto, y las tarjetas de ese tipo se **marcan** en el mapa
- [x] Soporte de imágenes en el contenido de los nodos (estilo `figure`/`img` en el panel, click para ampliar)

## Mapa
- [ ] Evitar automáticamente que las tarjetas se **superpongan** cuando hay muchos nodos (p. ej. XBD UD1+UD2 o «Todas las materias»): radios de anillo adaptativos según el número de hojas + resolución de colisiones

## Mantenimiento
- [ ] Commits frecuentes + PR actualizada
