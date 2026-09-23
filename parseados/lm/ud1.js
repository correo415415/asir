/* ============================================================
 * LM · Lenguajes de Marcas y Sistemas de Gestión de Información · Unidad 1
 * Reconocimiento de las características de los lenguajes de marcas
 * ------------------------------------------------------------
 * Fuente: apuntes/lm/tema01/ (sitio MkDocs)
 * Parseado a nodos para el mapa de apuntes.
 * Cada nodo: { id, titulo, tipo, resumen, claves[], contenido(HTML), tags[], links[] }
 * tipo ∈ unidad | tema | subtema | ejercicio | glosario | recursos
 * ============================================================ */
window.APUNTES = window.APUNTES || { materias: {}, unidades: [] };

window.APUNTES.materias.lm = window.APUNTES.materias.lm || {
  id: 'lm',
  nombre: 'Lenguajes de Marcas',
  abrev: 'LM',
  codigo: 'LMSGI',
  color: '#7c3aed',
  descripcion: 'Lenguajes de marcas y sistemas de gestión de información: HTML, XML, JSON, YAML, documentos bien formados, espacios de nombres y transformación de datos.'
};

window.APUNTES.unidades.push({
  materia: 'lm',
  id: 'lm-ud1',
  codigo: 'UD1',
  titulo: 'Reconocimiento de las características de los lenguajes de marcas',
  fuente: 'apuntes/lm/tema01/index.html',
  nodos: [

  /* ---------------- HUB ---------------- */
  {
    id: 'lm-ud1',
    tipo: 'unidad',
    titulo: 'UD1 · Características de los lenguajes de marcas',
    resumen: 'Qué son las marcas, cómo se clasifican los lenguajes (HTML, XML, JSON, YAML, SVG, RSS, LaTeX), sintaxis XML, editores, documentos bien formados y espacios de nombres.',
    claves: ['Marca → etiqueta → elemento', 'SGML (ISO 8879:1986) es el metalenguaje antecesor', 'Marcas ≠ programación: describir vs ejecutar', 'Procedimiento / presentación / descriptivo', 'Texto plano, interoperabilidad, independencia, flexibilidad', 'XML: una raíz, cierre, comillas, case-sensitive', 'Bien formado ≠ válido', 'Espacios de nombres: xmlns + prefijo + URI'],
    tags: ['lm', 'ud1', 'lenguajes de marcas', 'xml', 'html', 'json', 'yaml', 'sgml', 'ra1'],
    contenido: `
<p>Unidad introductoria del módulo <strong>Lenguajes de Marcas y Sistemas de Gestión de Información (LMSGI)</strong>. Los lenguajes de marcas permiten describir información, organizarla y facilitar su tratamiento por personas y aplicaciones. Aquí conoceremos sus características principales, sus usos y las reglas para construir documentos estructurados correctamente.</p>

<div class="box def"><div class="box-title">Resultado de aprendizaje</div>
<p><strong>RA1.</strong> Reconoce las características de los lenguajes de marcas analizando e interpretando fragmentos de código.</p></div>

<h4>Criterios de evaluación</h4>
<table>
<thead><tr><th>CA</th><th>Criterio</th><th>Dónde se trabaja</th></tr></thead>
<tbody>
<tr><td><strong>CA1.1</strong></td><td>Identificar las características generales de los lenguajes de marcas</td><td>Apartados 1 y 2</td></tr>
<tr><td><strong>CA1.2</strong></td><td>Reconocer las ventajas en el tratamiento de la información</td><td>Apartado 2 (características)</td></tr>
<tr><td><strong>CA1.3</strong></td><td>Clasificar los lenguajes de marcas e identificar los más relevantes</td><td>Apartado 2</td></tr>
<tr><td><strong>CA1.4</strong></td><td>Diferenciar sus ámbitos de aplicación</td><td>Apartado 2</td></tr>
<tr><td><strong>CA1.5</strong></td><td>Reconocer la necesidad de un lenguaje de marcas de propósito general</td><td>Apartado 2 (XML / JSON / YAML)</td></tr>
<tr><td><strong>CA1.6</strong></td><td>Analizar las características propias de XML</td><td>Apartado 3</td></tr>
<tr><td><strong>CA1.7</strong></td><td>Identificar la estructura de un documento XML y sus reglas sintácticas</td><td>Apartados 3 y 5</td></tr>
<tr><td><strong>CA1.8</strong></td><td>Contrastar la necesidad de documentos XML bien formados y su influencia en el procesamiento</td><td>Apartado 5</td></tr>
<tr><td><strong>CA1.9</strong></td><td>Identificar las ventajas de los espacios de nombres</td><td>Apartado 6</td></tr>
</tbody></table>

<h4>Mapa de la unidad</h4>
<ol>
  <li>Introducción: marcas, etiquetas, elementos; HTML, XML, LaTeX; SGML; marcas vs programación</li>
  <li>Clasificación, características e identificación de ámbitos de uso</li>
  <li>Estructura y sintaxis de un documento (XML)</li>
  <li>Herramientas de edición (Bloc de notas, gedit, Notepad++ y otros)</li>
  <li>Elaboración de documentos bien formados</li>
  <li>Utilización de espacios de nombres</li>
</ol>

<h4>Mapa conceptual</h4>
<ul>
  <li><strong>Finalidad</strong>: organizar información · crear documentos estructurados · facilitar el procesamiento.</li>
  <li><strong>Clasificación y ámbitos</strong>: presentación (HTML · Markdown) · datos estructurados (XML · JSON · YAML) · vocabularios específicos (SVG · RSS) · web y documentación · intercambio y almacenamiento · configuración de sistemas.</li>
  <li><strong>Construcción del documento</strong>: sintaxis (elementos y etiquetas, atributos, jerarquía y anidamiento) · documento bien formado (reglas sintácticas, comprobación y validación).</li>
  <li><strong>Herramientas</strong>: editores e IDE · navegadores · validadores.</li>
  <li><strong>Espacios de nombres</strong>: identificar vocabularios · evitar colisiones · usar prefijos.</li>
</ul>
<p class="muted">El recorrido empieza por la utilidad de las marcas y termina combinando vocabularios sin ambigüedades mediante espacios de nombres.</p>
<p class="muted">Material docente de elaboración propia del módulo LMSGI · ASIR. Libro de referencia: Moreno Pérez y González Ruíz, <em>Lenguajes de marcas y sistemas de gestión de información</em>, Síntesis (3.ª ed., 2026).</p>`
  },

  /* ---------------- 1. Introducción ---------------- */
  {
    id: 'lm-ud1-1',
    tipo: 'tema',
    titulo: '1. Introducción a los lenguajes de marcas',
    resumen: 'Los lenguajes de marcas organizan información mediante marcas y reglas sintácticas para que distintos programas puedan interpretarla. Están en páginas web, documentos técnicos y archivos de configuración.',
    claves: ['Marca = señal que indica función/significado de una parte del contenido', 'Etiqueta = marca que abre o cierra un elemento (entre < y >)', 'Elemento = apertura + contenido + cierre', 'La etiqueta NO es el dato: describe qué representa el dato', 'Imprescindibles para intercambiar información entre equipos y aplicaciones distintos'],
    tags: ['introduccion', 'marca', 'etiqueta', 'elemento', 'html', 'xml', 'latex'],
    links: ['lm-ud1-1-1', 'lm-ud1-1-2', 'lm-ud1-1-3', 'lm-ud1-1-4', 'lm-ud1-1-5', 'lm-ud1-1-6'],
    contenido: `
<p>Los lenguajes de marcas son fundamentales en la informática actual y, en particular, en muchas tareas propias de la <strong>administración de sistemas</strong>. Permiten organizar información mediante marcas y reglas sintácticas para que diferentes programas puedan interpretarla.</p>
<p>Internet conecta aplicaciones y equipos muy distintos, por lo que intercambiar información de forma ordenada resulta imprescindible. También es habitual encontrar lenguajes de marcas en <strong>páginas web</strong>, <strong>documentos técnicos</strong> y <strong>archivos de configuración</strong>.</p>

<h4>Contenido del apartado</h4>
<ol>
  <li>Marcas, etiquetas y elementos</li>
  <li>Primeros ejemplos: HTML, XML y LaTeX</li>
  <li>Un poco de historia: SGML</li>
  <li>Lenguaje de marcas y lenguaje de programación</li>
  <li>Lenguajes que trabajan juntos (XML + Python, HTML + PHP)</li>
  <li>Un documento HTML completo y el navegador</li>
</ol>`
  },

  {
    id: 'lm-ud1-1-1',
    tipo: 'subtema',
    titulo: '1.1 Marcas, etiquetas y elementos',
    resumen: 'Marca: señal que indica la función de una parte del contenido. Etiqueta: marca que abre o cierra un elemento. Elemento: apertura + contenido + cierre.',
    claves: ['Marca: señal incluida en el documento para indicar función o significado', 'Etiqueta: marca que identifica el comienzo o el final de un elemento', 'En XML y HTML las etiquetas van entre < y >', 'La barra / distingue la etiqueta de cierre', 'Una etiqueta no es el dato: es la marca que lo identifica'],
    tags: ['marca', 'etiqueta', 'elemento', 'apertura', 'cierre', 'contenido'],
    contenido: `
<div class="box def"><div class="box-title">Definiciones</div>
<p>Una <strong>marca</strong> es una señal incluida en un documento para indicar la función o el significado de una parte de su contenido. Las marcas forman parte de la sintaxis del lenguaje y permiten distinguir los <em>datos</em> de las <em>indicaciones que los describen</em>.</p>
<p>Una <strong>etiqueta</strong> es un tipo de marca que identifica el comienzo o el final de un elemento. En XML y HTML, las etiquetas se escriben entre los signos <code>&lt;</code> y <code>&gt;</code>.</p></div>

<h4>Ejemplo sencillo</h4>
<pre><code>&lt;nombre&gt;servidor-web&lt;/nombre&gt;</code></pre>
<p>Este fragmento contiene:</p>
<table>
<thead><tr><th>Parte</th><th>Qué es</th></tr></thead>
<tbody>
<tr><td><code>&lt;nombre&gt;</code></td><td><strong>Etiqueta de apertura</strong>; señala dónde comienza el nombre.</td></tr>
<tr><td><code>servidor-web</code></td><td><strong>Contenido</strong> o dato almacenado.</td></tr>
<tr><td><code>&lt;/nombre&gt;</code></td><td><strong>Etiqueta de cierre</strong>; señala dónde termina el nombre. La barra <code>/</code> permite distinguirla de la de apertura.</td></tr>
<tr><td><code>&lt;nombre&gt;servidor-web&lt;/nombre&gt;</code></td><td><strong>Elemento completo</strong>, formado por las dos etiquetas y su contenido.</td></tr>
</tbody></table>

<div class="box tip"><div class="box-title">Idea clave</div>
<p>Una etiqueta <strong>no es el dato</strong>: es la marca que ayuda a identificar qué representa ese dato.</p></div>`
  },

  {
    id: 'lm-ud1-1-2',
    tipo: 'subtema',
    titulo: '1.2 Primeros ejemplos: HTML, XML y LaTeX',
    resumen: 'No todos los lenguajes usan las mismas marcas: HTML estructura páginas, XML describe datos y LaTeX usa comandos con barra invertida para componer documentos.',
    claves: ['HTML: etiquetas para estructurar páginas web (<h1> = encabezado principal)', 'XML: etiquetas para describir datos (qué representa cada dato, no cómo se muestra)', 'LaTeX: comandos que empiezan por \\ (\\section, \\textbf), basado en TeX', 'LaTeX se usa en documentos técnicos y científicos'],
    tags: ['html', 'xml', 'latex', 'tex', 'ejemplos', 'h1'],
    contenido: `
<p>No todos los lenguajes utilizan las mismas marcas. Los siguientes ejemplos muestran tres formas sencillas de describir contenido.</p>

<h4>HTML</h4>
<p>HTML utiliza etiquetas para estructurar las páginas web:</p>
<pre><code>&lt;h1&gt;servidor-web&lt;/h1&gt;</code></pre>
<p>La etiqueta <code>&lt;h1&gt;</code> indica que <code>servidor-web</code> es un <strong>encabezado principal</strong>. El navegador interpreta esta estructura y representa el texto como un título.</p>

<h4>XML</h4>
<p>XML también utiliza etiquetas, pero suele emplearse para <strong>describir datos</strong>:</p>
<pre><code>&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;ip&gt;192.168.10.20&lt;/ip&gt;
&lt;/equipo&gt;</code></pre>
<p>Las etiquetas indican que el elemento <code>equipo</code> contiene un nombre y una dirección IP. XML describe <em>qué representa</em> cada dato, pero <em>no cómo</em> debe mostrarse en pantalla.</p>

<h4>LaTeX</h4>
<p>LaTeX es un sistema de composición de documentos basado en <strong>TeX</strong>. Utiliza comandos que comienzan por una barra invertida:</p>
<pre><code>\\documentclass{article}

\\begin{document}
\\section{Servidor web}

La dirección IP del servidor es \\textbf{192.168.10.20}.
\\end{document}</code></pre>
<p>El comando <code>\\section</code> crea una sección y <code>\\textbf</code> indica que una parte del texto debe aparecer en negrita. LaTeX se utiliza especialmente en <strong>documentos técnicos y científicos</strong>.</p>

<table>
<thead><tr><th>Lenguaje</th><th>Tipo de marca</th><th>Para qué</th></tr></thead>
<tbody>
<tr><td>HTML</td><td>Etiquetas predefinidas <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>…</td><td>Estructurar páginas web</td></tr>
<tr><td>XML</td><td>Etiquetas definidas por el autor</td><td>Describir datos</td></tr>
<tr><td>LaTeX</td><td>Comandos <code>\\section</code>, <code>\\textbf</code>…</td><td>Componer documentos técnicos</td></tr>
</tbody></table>`
  },

  {
    id: 'lm-ud1-1-3',
    tipo: 'subtema',
    titulo: '1.3 Un poco de historia: SGML',
    resumen: 'SGML (Standard Generalized Markup Language) es un metalenguaje: no impone etiquetas, da reglas para crear otros lenguajes. Procede de GML (IBM) y es el estándar ISO 8879:1986. HTML fue una aplicación de SGML y XML una simplificación.',
    claves: ['SGML = Standard Generalized Markup Language', 'Es un METALENGUAJE: reglas para crear otros lenguajes de marcas', 'Procede de GML, desarrollado en IBM', 'Estándar ISO 8879:1986 (8879 = número, 1986 = año)', 'HTML nació como aplicación de SGML; XML como simplificación para intercambio', 'ISO viene del griego isos («igual»), no es un acrónimo'],
    tags: ['sgml', 'gml', 'ibm', 'iso 8879', 'metalenguaje', 'historia', 'doctype', 'element'],
    contenido: `
<p>Uno de los antecedentes más importantes de los lenguajes de marcas actuales es <strong>SGML</strong> (<em>Standard Generalized Markup Language</em>).</p>
<div class="box def"><div class="box-title">Metalenguaje</div>
<p>SGML es un <strong>metalenguaje</strong> porque no impone unas etiquetas concretas: proporciona <strong>reglas para crear otros lenguajes de marcas</strong>.</p></div>

<h4>Cronología</h4>
<table>
<thead><tr><th>Hito</th><th>Detalle</th></tr></thead>
<tbody>
<tr><td><strong>GML</strong></td><td>Desarrollado en IBM. Origen de SGML.</td></tr>
<tr><td><strong>SGML · ISO 8879:1986</strong></td><td>Estándar internacional. <em>ISO</em> es la organización que elaboró la norma, <code>8879</code> es su número identificador y <code>1986</code> indica el año de publicación.</td></tr>
<tr><td><strong>HTML</strong></td><td>Se definió inicialmente como una <em>aplicación</em> de SGML.</td></tr>
<tr><td><strong>XML</strong></td><td>Nació posteriormente como una <em>simplificación</em> de SGML orientada al intercambio de información.</td></tr>
</tbody></table>

<div class="box info"><div class="box-title">Historia de los lenguajes de marcas</div>
<p>Vídeo recomendado para conocer más sobre la historia: <a href="https://youtu.be/Ea9Awg4kKuw?si=5Kx6FucBfk7_hYOZ" target="_blank" rel="noopener">youtu.be/Ea9Awg4kKuw</a></p></div>

<h4>Ejemplo sencillo de SGML</h4>
<p>En SGML se puede definir primero <strong>qué elementos admite</strong> un tipo de documento y después emplearlos para representar información:</p>
<pre><code>&lt;!DOCTYPE equipo [
    &lt;!ELEMENT equipo - - (nombre, ip)&gt;
    &lt;!ELEMENT nombre - - (#PCDATA)&gt;
    &lt;!ELEMENT ip - - (#PCDATA)&gt;
]&gt;

&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;ip&gt;192.168.10.20&lt;/ip&gt;
&lt;/equipo&gt;</code></pre>
<p>Las declaraciones <code>&lt;!ELEMENT ...&gt;</code> establecen que un <code>equipo</code> debe contener un <code>nombre</code> y una <code>ip</code>. La parte inferior utiliza ese vocabulario para describir un servidor concreto.</p>

<div class="box tip"><div class="box-title">Dato curioso</div>
<p>La propia norma de SGML se preparó utilizando SGML. Además, el nombre <strong>ISO</strong> se inspira en la palabra griega <em>isos</em>, que significa «igual»; <strong>no es realmente un acrónimo</strong>.</p></div>`
  },

  {
    id: 'lm-ud1-1-4',
    tipo: 'subtema',
    titulo: '1.4 Lenguaje de marcas vs lenguaje de programación',
    resumen: 'Un lenguaje de marcas describe y organiza información; un lenguaje de programación expresa instrucciones que el ordenador ejecuta. El documento no decide qué hacer con sus datos: lo hace el programa.',
    claves: ['Marcas: representar y estructurar información (HTML, XML, Markdown)', 'Programación: definir acciones y algoritmos (Python, Java, JavaScript)', 'Marcas: datos acompañados de marcas → se interpreta/procesa', 'Programación: instrucciones, variables, control → se ejecuta', 'El documento de marcas no decide qué hacer con los datos: eso es tarea del programa'],
    tags: ['programacion', 'python', 'java', 'javascript', 'comparativa', 'diferencias'],
    contenido: `
<p>Aunque ambos se escriben mediante texto y siguen unas reglas sintácticas, <strong>no cumplen la misma función</strong>.</p>
<div class="box def"><div class="box-title">Dos conceptos</div>
<p>Un <strong>lenguaje de marcas</strong> describe y organiza información. Las marcas indican qué representa cada dato o cómo se estructura dentro de un documento.</p>
<p>Un <strong>lenguaje de programación</strong> expresa instrucciones que un ordenador debe ejecutar. Permite realizar cálculos, tomar decisiones, repetir operaciones, consultar documentos o comunicarse con otros sistemas. Python, Java y JavaScript son lenguajes de programación.</p></div>

<table>
<thead><tr><th>Aspecto</th><th>Lenguaje de marcas</th><th>Lenguaje de programación</th></tr></thead>
<tbody>
<tr><td><strong>Finalidad principal</strong></td><td>Representar y estructurar información</td><td>Definir acciones y algoritmos</td></tr>
<tr><td><strong>Contenido habitual</strong></td><td>Datos acompañados de marcas</td><td>Instrucciones, variables y estructuras de control</td></tr>
<tr><td><strong>Ejemplos</strong></td><td>HTML, XML, Markdown</td><td>Python, Java, JavaScript</td></tr>
<tr><td><strong>Tratamiento</strong></td><td>Normalmente se <em>interpreta o procesa</em></td><td>Sus instrucciones se <em>ejecutan</em></td></tr>
</tbody></table>

<div class="box warn"><div class="box-title">Una diferencia importante</div>
<p>Un documento de marcas puede contener datos que después utiliza un programa. <strong>El documento no decide qué hacer con ellos</strong>: esa tarea corresponde al programa que los procesa.</p></div>`
  },

  {
    id: 'lm-ud1-1-5',
    tipo: 'subtema',
    titulo: '1.5 Lenguajes que trabajan juntos: XML + Python, HTML + PHP',
    resumen: 'Marcas y programación colaboran: XML representa los datos y Python los consulta (ElementTree); PHP genera HTML en el servidor y el navegador solo recibe el HTML resultante.',
    claves: ['XML organiza los datos; no contiene instrucciones para buscarlos o mostrarlos', 'Python (xml.etree.ElementTree) recorre el XML: parse, getroot, findall, findtext', 'HTML estructura el contenido; PHP inserta valores', 'PHP se procesa en el servidor: el navegador recibe solo el HTML resultante'],
    tags: ['python', 'elementtree', 'php', 'xml', 'html', 'colaboracion', 'servidor'],
    contenido: `
<p>Los lenguajes de marcas y los lenguajes de programación tienen finalidades diferentes, pero pueden <strong>colaborar</strong> para resolver una tarea.</p>

<h4>XML y Python</h4>
<p>Este XML amplía el ejemplo anterior con varios equipos y añade su estado. Podría guardarse como <code>equipos.xml</code>:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;equipos&gt;
    &lt;equipo&gt;
        &lt;nombre&gt;servidor-web&lt;/nombre&gt;
        &lt;ip&gt;192.168.10.20&lt;/ip&gt;
        &lt;estado&gt;activo&lt;/estado&gt;
    &lt;/equipo&gt;
    &lt;equipo&gt;
        &lt;nombre&gt;servidor-copias&lt;/nombre&gt;
        &lt;ip&gt;192.168.10.30&lt;/ip&gt;
        &lt;estado&gt;mantenimiento&lt;/estado&gt;
    &lt;/equipo&gt;
&lt;/equipos&gt;</code></pre>
<p>XML organiza los datos, pero no contiene instrucciones para buscarlos o mostrarlos. El siguiente programa Python consulta el archivo y muestra solo los equipos cuyo estado es <code>activo</code>:</p>
<pre><code>import xml.etree.ElementTree as ET

arbol = ET.parse("equipos.xml")
raiz = arbol.getroot()

for equipo in raiz.findall("equipo"):
    if equipo.findtext("estado") == "activo":
        nombre = equipo.findtext("nombre")
        ip = equipo.findtext("ip")
        print(f"{nombre}: {ip}")</code></pre>
<p>La salida será:</p>
<pre><code>servidor-web: 192.168.10.20</code></pre>
<div class="box tip"><div class="box-title">Reparto de papeles</div>
<p><strong>XML representa los datos</strong> y <strong>Python contiene las instrucciones que los consultan</strong>.</p></div>

<h4>HTML y PHP</h4>
<p>En el desarrollo web también es habitual generar HTML mediante un lenguaje de programación. HTML estructura el contenido y PHP inserta el nombre del servidor:</p>
<pre><code>&lt;?php
$servidor = "servidor-web";
?&gt;

&lt;h1&gt;Estado del sistema&lt;/h1&gt;
&lt;p&gt;Servidor: &lt;?php echo $servidor; ?&gt;&lt;/p&gt;</code></pre>
<p>El código PHP se procesa <strong>en el servidor</strong>. El navegador no recibe esas instrucciones, sino el HTML resultante:</p>
<pre><code>&lt;h1&gt;Estado del sistema&lt;/h1&gt;
&lt;p&gt;Servidor: servidor-web&lt;/p&gt;</code></pre>`
  },

  {
    id: 'lm-ud1-1-6',
    tipo: 'subtema',
    titulo: '1.6 Un documento HTML completo y el navegador',
    resumen: 'Estructura real de un archivo HTML: <!DOCTYPE html>, <html lang>, <head> (metadatos, charset, title), <body> (header, main, h1/h2, p, ul/li). El navegador interpreta las etiquetas y muestra el resultado.',
    claves: ['<!DOCTYPE html>: HTML moderno, modo estándar del navegador', '<html lang="es">: contiene todo; idioma principal', '<head>: metadatos (charset UTF-8, viewport, title de la pestaña)', '<body>: lo que se ve; <header> cabecera, <main> contenido principal', '<h1>/<h2> encabezados, <p> párrafo, <ul>+<li> lista', 'Navegador: obtiene, interpreta y muestra; las etiquetas no aparecen como texto'],
    tags: ['html', 'doctype', 'head', 'body', 'header', 'main', 'navegador', 'firefox', 'chrome', 'edge', 'safari'],
    contenido: `
<p>Los fragmentos anteriores permiten observar etiquetas aisladas. Un archivo HTML real necesita una estructura más completa:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Estado de los servidores&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header&gt;
            &lt;h1&gt;Estado de los servidores&lt;/h1&gt;
            &lt;p&gt;Resumen de los equipos de la red local.&lt;/p&gt;
        &lt;/header&gt;

        &lt;main&gt;
            &lt;h2&gt;Equipos disponibles&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;servidor-web: activo&lt;/li&gt;
                &lt;li&gt;servidor-copias: mantenimiento&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/main&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h4>Interpretación de la estructura</h4>
<table>
<thead><tr><th>Etiqueta</th><th>Función</th></tr></thead>
<tbody>
<tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Identifica el documento como HTML moderno y permite que el navegador utilice su <strong>modo estándar</strong>.</td></tr>
<tr><td><code>&lt;html lang="es"&gt;</code></td><td>Contiene todo el documento; el atributo <code>lang</code> indica que su idioma principal es el español.</td></tr>
<tr><td><code>&lt;head&gt;</code></td><td>Metadatos y otra información sobre la página: codificación de caracteres y título de la pestaña.</td></tr>
<tr><td><code>&lt;body&gt;</code></td><td>Información que se representa en el <strong>área visible</strong>.</td></tr>
<tr><td><code>&lt;header&gt;</code> / <code>&lt;main&gt;</code></td><td>Cabecera de la página / agrupa el contenido principal.</td></tr>
<tr><td><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code></td><td>Encabezados.</td></tr>
<tr><td><code>&lt;p&gt;</code></td><td>Párrafo.</td></tr>
<tr><td><code>&lt;ul&gt;</code> + <code>&lt;li&gt;</code></td><td>Lista no ordenada y sus elementos.</td></tr>
</tbody></table>

<h4>¿Qué es un navegador?</h4>
<div class="box def"><div class="box-title">Navegador web</div>
<p>Aplicación capaz de <strong>obtener, interpretar y mostrar</strong> contenidos web. Firefox, Chromium, Google Chrome, Microsoft Edge y Safari son algunos ejemplos.</p></div>
<p>Cuando recibe un documento HTML, el navegador lee sus etiquetas, construye una representación de la estructura y presenta el resultado en pantalla. <strong>Las etiquetas no aparecen como texto</strong>: se utilizan para determinar la función de cada contenido.</p>

<div class="box ex"><div class="box-title">Prueba el documento</div>
<p>Copia el código en un archivo llamado <code>servidores.html</code> y ábrelo con un navegador. En la pestaña aparecerá <strong>Estado de los servidores</strong> y en la página se mostrarán el encabezado, el párrafo y la lista de equipos.</p>
<p class="muted">Resultado en el navegador: <a href="apuntes/lm/tema01/imagenes/prueba_navegador.png" target="_blank" rel="noopener">ver captura</a>.</p></div>`
  },
