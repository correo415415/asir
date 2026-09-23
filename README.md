# Apuntes ASIR · Mapa de conocimiento

Web **100 % estática** (HTML + CSS + JS de cliente, sin backend ni build) que muestra los apuntes de ASIR como
**nodos sobre una malla infinita**: se arrastra con el ratón o el dedo, se hace zoom con la rueda o pinch y se
busca desde la **barra inferior**. Estilo blanco *glass* profesional. Desplegable directamente en Vercel.

## Estructura

```
index.html            Aplicación (topbar, índice, lienzo, panel de detalle, buscador, ayuda)
assets/
  style.css           Estilos (tema blanco glass)
  app.js              Lógica: grafo, layout radial, pan/zoom, índice, panel, búsqueda
apuntes/              Apuntes ORIGINALES tal y como se reciben, separados por materia
  xbd/                XBD · Xestión de Bases de Datos (MP0372)
    ud1-sistemas-almacenamiento-sgbd.html
  lm/                 LM · Lenguajes de Marcas (sitio MkDocs exportado)
    index.html, tema01/, referencias/, assets/
parseados/            Misma estructura de carpetas, con los apuntes convertidos a nodos
  manifest.js         Lista de ficheros parseados que se cargan
  xbd/
    ud1.js            UD1 parseada (36 nodos)
  lm/
    ud1.js            UD1 parseada (35 nodos)
vercel.json           Configuración de despliegue estático
```

## Formato de un fichero parseado

Cada `parseados/<materia>/<udX>.js` registra la materia (si no existe) y una unidad:

```js
window.APUNTES.materias.xbd = { id:'xbd', nombre:'Xestión de Bases de Datos', abrev:'XBD', codigo:'MP0372', color:'#2563eb', descripcion:'…' };
window.APUNTES.unidades.push({
  materia:'xbd', id:'xbd-ud1', codigo:'UD1', titulo:'…', fuente:'apuntes/xbd/….html',
  nodos: [
    { id:'xbd-ud1',   tipo:'unidad', titulo:'…', resumen:'…', claves:[…], tags:[…], contenido:`<p>HTML…</p>` },
    { id:'xbd-ud1-1', tipo:'tema',   titulo:'1. …', resumen:'…', claves:[…], tags:[…], links:['xbd-ud1-1-1'], contenido:`…` },
    …
  ]
});
```

- `tipo`: `unidad` · `tema` · `subtema` · `ejercicio` · `glosario` · `recursos`
- `resumen`: una frase (se ve en el nodo y como entradilla del panel)
- `claves`: ideas clave para repasar (pestaña *Ideas clave*)
- `tags`: términos para el buscador y etiquetas clicables
- `links`: hijos del nodo (dibujan aristas y definen la jerarquía). Los `tema`/`glosario`/`recursos` sin padre
  cuelgan de la `unidad`; los `subtema`/`ejercicio` sin padre cuelgan del último `tema` anterior.
- `contenido`: HTML completo del apartado (tablas, cajas `.box.def|tip|info|warn|danger|ex`, `<details>` para soluciones)

Para añadir una unidad nueva: copiar el original a `apuntes/<materia>/`, crear `parseados/<materia>/<ud>.js`
y añadir la ruta a `parseados/manifest.js`.

## Uso

| Acción | Cómo |
|---|---|
| Moverse por la malla | Arrastrar el fondo |
| Zoom | Rueda / pinch · `+` `−` · `F` ajusta todo |
| Abrir un nodo | Clic (doble clic centra y acerca) |
| Panel | Pestañas *Contenido · Ideas clave · Relacionados*; `←` `→` nodo anterior/siguiente |
| Índice | Botón ☰ o `I`; árbol expandible sincronizado con el nodo abierto |
| Cambiar de materia | Selector en la barra superior o `M`; muestra una materia o todas a la vez. Se recuerda la elección y los enlaces `#id` cambian de materia automáticamente |
| Buscar | `/` · escribe · `↑ ↓ Enter`; filtros por tipo; resalta coincidencias en el mapa y en el texto |
| Compartir | La URL guarda el nodo abierto (`#xbd-ud1-4-2`) |
| Ayuda | `?` |

## Desarrollo local

```bash
python3 -m http.server 8080   # o cualquier servidor estático
```

## Despliegue en Vercel

Importar el repo en Vercel con *Framework Preset: Other* y sin comando de build. `vercel.json` ya está incluido.

## Materias

| Carpeta | Materia | Unidades parseadas |
|---------|---------|--------------------|
| `xbd`   | XBD · Xestión de Bases de Datos (MP0372) | UD1 |
| `lm`    | LM · Lenguajes de Marcas y Sistemas de Gestión de Información (LMSGI) | UD1 |
