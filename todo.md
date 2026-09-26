# TODO

## Contenido nuevo
- [ ] **FH · Fundamentos de Hardware** (nueva materia, carpeta `fh/`)
  - [ ] Copiar PDFs originales a `apuntes/fh/`
  - [ ] UD1 · Arquitectura de ordenadores → `parseados/fh/ud1.js`
  - [ ] UD2 · Representación y medidas de la información → `parseados/fh/ud2.js`
  - [ ] UD3 · Elementos internos de un sistema informático → `parseados/fh/ud3.js`
  - [ ] Extraer las imágenes relevantes de los PDF (analizarlas antes de incluirlas) a `parseados/fh/img/`
- [ ] **XBD · UD2** (`unidad2.html` + `imagenes/`)
  - [ ] Copiar original a `apuntes/xbd/ud2/`
  - [ ] Parsear a `parseados/xbd/ud2.js` incluyendo las imágenes (analizadas) en `parseados/xbd/img/ud2/`
- [ ] Registrar los ficheros nuevos en `parseados/manifest.js`
- [ ] Actualizar README (tabla de materias)

## Web
- [x] Buscador: las **sugerencias del placeholder** cambian según la materia activa
- [x] Al hacer **clic en una tarjeta** se abre automáticamente el panel lateral en ese nodo
- [x] Bug: texto de las tarjetas **borroso** al pasar el ratón (y se queda así) → quitar `transform: scale` / forzar `backface-visibility`, `translateZ(0)` o cambiar la animación de hover
- [x] Filtros del buscador (glosario, ejercicios, temas…, excepto «Todo»): al pulsarlos se **listan todos los resultados** de ese tipo aunque no haya texto, y las tarjetas de ese tipo se **marcan** en el mapa
- [x] Soporte de imágenes en el contenido de los nodos (estilo `figure`/`img` en el panel, click para ampliar)

## Mantenimiento
- [ ] Commits frecuentes + PR actualizada
