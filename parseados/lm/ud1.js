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

  /* ---------------- 2. Clasificación y ámbitos ---------------- */
  {
    id: 'lm-ud1-2',
    tipo: 'tema',
    titulo: '2. Clasificación, características y ámbitos de uso',
    resumen: 'No todos los lenguajes de marcas sirven para lo mismo. Se clasifican por la función de sus marcas (procedimiento, presentación, descriptivo) y por su ámbito (intercambio de datos, documentación web, especializados). Cómo elegir y qué características comparten.',
    claves: ['Dos preguntas: ¿qué indican sus marcas? ¿en qué ámbito se usa?', 'Las clasificaciones son orientativas: una tecnología puede estar en varios grupos', 'JSON y YAML son formatos de serialización de datos (sin etiquetas) pero se estudian junto a los lenguajes de marcas', 'RSS es un vocabulario basado en XML', 'Características: texto plano, interoperabilidad, independencia, flexibilidad'],
    tags: ['clasificacion', 'ambitos', 'html', 'markdown', 'xml', 'json', 'yaml', 'svg', 'rss'],
    links: ['lm-ud1-2-1', 'lm-ud1-2-2', 'lm-ud1-2-3', 'lm-ud1-2-4', 'lm-ud1-2-5', 'lm-ud1-2-6'],
    contenido: `
<p>Los lenguajes de marcas no se utilizan todos para lo mismo. Algunos ayudan a componer documentos, otros estructuran páginas web y otros describen datos que serán intercambiados entre aplicaciones. Para elegir una tecnología conviene preguntarse dos cosas:</p>
<ol>
  <li><strong>¿Qué indican sus marcas?</strong></li>
  <li><strong>¿En qué ámbito se va a utilizar?</strong></li>
</ol>
<p>Las clasificaciones que estudiaremos son <em>orientativas</em>. Una misma tecnología puede pertenecer a más de un grupo dependiendo del uso que se haga de ella.</p>

<div class="box info"><div class="box-title">Lenguajes de marcas y formatos de datos</div>
<p>HTML, XML, Markdown y SVG utilizan marcas de forma clara. <strong>JSON y YAML</strong> se consideran, con mayor precisión, <strong>formatos de serialización de datos</strong>: no emplean etiquetas, pero se estudian junto con los lenguajes de marcas porque también representan información estructurada. <strong>RSS</strong>, por su parte, es un vocabulario basado en XML.</p></div>

<h4>Contenido del apartado</h4>
<ol>
  <li>Tecnologías habituales y para qué se utilizan</li>
  <li>Clasificación según la función de las marcas (procedimiento · presentación · descriptivo)</li>
  <li>Clasificación según el ámbito de uso (propósito general · documentación web · especializados)</li>
  <li>Cómo elegir un lenguaje o formato genérico</li>
  <li>Características generales (texto plano, interoperabilidad, independencia, flexibilidad)</li>
  <li>Resumen</li>
</ol>`
  },

  {
    id: 'lm-ud1-2-1',
    tipo: 'subtema',
    titulo: '2.1 Tecnologías habituales y para qué se utilizan',
    resumen: 'Tabla de reconocimiento: HTML (<h1>, <p>), Markdown (#, *, []()), XML (etiquetas propias), JSON ({} [] clave-valor), YAML (sangrado clave: valor), SVG (<circle>, <path>), RSS (<channel>, <item>).',
    claves: ['HTML → estructurar páginas web', 'Markdown → documentación, apuntes, README', 'XML → intercambiar, almacenar y configurar información estructurada', 'JSON → intercambiar datos en API y aplicaciones web', 'YAML → archivos de configuración legibles', 'SVG → gráficos vectoriales escalables', 'RSS → publicar y distribuir novedades de un sitio'],
    tags: ['html', 'markdown', 'xml', 'json', 'yaml', 'svg', 'rss', 'tabla', 'reconocer'],
    contenido: `
<table>
<thead><tr><th>Tecnología</th><th>Cómo se reconoce</th><th>Uso habitual</th></tr></thead>
<tbody>
<tr><td><strong>HTML</strong></td><td>Etiquetas como <code>&lt;h1&gt;</code> o <code>&lt;p&gt;</code></td><td>Estructurar el contenido de páginas web</td></tr>
<tr><td><strong>Markdown</strong></td><td>Símbolos sencillos como <code>#</code>, <code>*</code> o <code>[]()</code></td><td>Escribir documentación, apuntes y archivos README</td></tr>
<tr><td><strong>XML</strong></td><td>Etiquetas definidas según las necesidades</td><td>Intercambiar, almacenar y configurar información estructurada</td></tr>
<tr><td><strong>JSON</strong></td><td>Objetos <code>{}</code>, listas <code>[]</code> y pares clave-valor</td><td>Intercambiar datos en API y aplicaciones web</td></tr>
<tr><td><strong>YAML</strong></td><td>Sangrado y pares <code>clave: valor</code></td><td>Crear archivos de configuración legibles</td></tr>
<tr><td><strong>SVG</strong></td><td>Elementos XML como <code>&lt;circle&gt;</code> o <code>&lt;path&gt;</code></td><td>Describir gráficos vectoriales escalables</td></tr>
<tr><td><strong>RSS</strong></td><td>Elementos XML como <code>&lt;channel&gt;</code> e <code>&lt;item&gt;</code></td><td>Publicar y distribuir novedades de un sitio web</td></tr>
</tbody></table>
<div class="box tip"><div class="box-title">Ejemplo integrador</div>
<p>Una aplicación de monitorización podría ofrecer sus datos mediante <strong>JSON</strong>, guardar su configuración en <strong>YAML</strong>, generar una interfaz en <strong>HTML</strong> y mostrar un esquema de red en <strong>SVG</strong>.</p></div>`
  },

  {
    id: 'lm-ud1-2-2',
    tipo: 'subtema',
    titulo: '2.2 Clasificación según la función de las marcas',
    resumen: 'Procedimiento (qué operación realizar: TeX/LaTeX), presentación (cómo se organiza o muestra: HTML, Markdown) y descriptivo o semántico (qué significa el dato: XML).',
    claves: ['Procedimiento: marcas que indican QUÉ OPERACIÓN realizar (LaTeX \\section, \\textbf) → composición', 'Presentación: CÓMO se organiza o muestra (HTML, Markdown)', 'Descriptivo/semántico: QUÉ SIGNIFICA cada dato (XML)', 'HTML moderno también aporta semántica (<header>, <nav>, <main>); el aspecto lo controla CSS', 'LaTeX: pdflatex archivo.tex; Overleaf online; fuerte en fórmulas'],
    tags: ['procedimiento', 'presentacion', 'descriptivo', 'semantico', 'latex', 'tex', 'pdflatex', 'overleaf', 'html', 'xml', 'css'],
    contenido: `
<p>Esta clasificación se fija en <strong>lo que expresan las marcas</strong> dentro del documento.</p>

<h4>Lenguajes de procedimiento</h4>
<p>Las marcas de procedimiento indican <strong>qué operación debe realizar</strong> una herramienta sobre el contenido: comenzar una sección, aplicar un estilo, insertar un salto o generar un documento final. Están relacionadas con el proceso de <em>composición</em>.</p>
<p><strong>TeX</strong> y <strong>LaTeX</strong> son ejemplos habituales. Los comandos <code>\\section</code> y <code>\\textbf</code> indican operaciones que el procesador debe aplicar:</p>
<pre><code>\\documentclass{article}

\\begin{document}
\\section{Informe del servidor}

Estado: \\textbf{activo}.
\\end{document}</code></pre>
<p>Guárdalo como <code>procedimiento.tex</code> y, si tienes una distribución de LaTeX, compílalo con:</p>
<pre><code>pdflatex procedimiento.tex</code></pre>
<p>Sin instalar nada, se puede probar en línea en <a href="https://www.sarmate.net/demo/mathpad_tex_edit.php" target="_blank" rel="noopener">sarmate.net/demo/mathpad_tex_edit.php</a> o con editores como <a href="https://www.overleaf.com/" target="_blank" rel="noopener">Overleaf</a>. Este tipo de lenguaje se utiliza sobre todo para redactar <strong>trabajos de investigación</strong> y documentos de matemáticas, física o química. Uno de sus puntos fuertes es que <strong>facilita la escritura de fórmulas complejas</strong>.</p>

<h4>Lenguajes de presentación</h4>
<p>Ayudan a indicar <strong>cómo se organiza o se muestra</strong> el contenido. <strong>HTML</strong> y <strong>Markdown</strong> se utilizan con frecuencia para presentar documentación, especialmente en la Web. Ejemplo con título, párrafo y lista:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;title&gt;Estado de la red&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Estado de la red&lt;/h1&gt;
        &lt;p&gt;Equipos comprobados:&lt;/p&gt;
        &lt;ul&gt;
            &lt;li&gt;servidor-web: activo&lt;/li&gt;
            &lt;li&gt;servidor-copias: mantenimiento&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Guárdalo como <code>presentacion.html</code> y ábrelo con un navegador. <strong>No necesita un servidor web</strong> para esta prueba (<a href="apuntes/lm/assets/examples/tema01/presentacion.html" target="_blank" rel="noopener">abrir el ejemplo</a>).</p>
<div class="box info"><div class="box-title">HTML también aporta significado</div>
<p>Esta clasificación no es absoluta. HTML moderno no se limita a definir la presentación: etiquetas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> o <code>&lt;main&gt;</code> describen también la <strong>función semántica</strong> del contenido. El aspecto visual se controla principalmente mediante <strong>CSS</strong>.</p></div>

<h4>Lenguajes descriptivos o semánticos</h4>
<p>Las marcas descriptivas indican <strong>qué significa cada dato</strong> y cómo se relaciona con los demás. No ordenan directamente cómo debe aparecer en pantalla ni qué operación debe ejecutarse. <strong>XML</strong> es el ejemplo más representativo:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;ip&gt;192.168.10.20&lt;/ip&gt;
    &lt;estado&gt;activo&lt;/estado&gt;
&lt;/equipo&gt;</code></pre>
<p>El archivo no muestra ni modifica el servidor: <strong>solo representa información sobre él</strong>. Puede abrirse en un navegador o procesarse mediante un programa.</p>

<h4>Resumen de la clasificación</h4>
<table>
<thead><tr><th>Tipo</th><th>Pregunta a la que responde</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td><strong>Procedimiento</strong></td><td>¿Qué operación debe realizarse?</td><td>LaTeX: <code>\\textbf{activo}</code></td></tr>
<tr><td><strong>Presentación</strong></td><td>¿Cómo se organiza o muestra?</td><td>HTML: <code>&lt;h1&gt;Estado&lt;/h1&gt;</code></td></tr>
<tr><td><strong>Descriptivo o semántico</strong></td><td>¿Qué significa el dato?</td><td>XML: <code>&lt;estado&gt;activo&lt;/estado&gt;</code></td></tr>
</tbody></table>`
  },

  {
    id: 'lm-ud1-2-3',
    tipo: 'subtema',
    titulo: '2.3 Clasificación según el ámbito de uso',
    resumen: 'Propósito general e intercambio de datos (XML, JSON, YAML), documentación y presentación web (HTML, Markdown) y lenguajes específicos o especializados (SVG, RSS).',
    claves: ['Propósito general/intercambio: XML (vocabularios propios), JSON (API, compacto), YAML (configuración, legible)', 'La misma información se puede representar en XML, JSON o YAML: cambia la sintaxis, no el contenido', 'YAML: la sangría importa; no mezclar tabuladores y espacios', 'Documentación web: HTML estructura, Markdown se transforma en HTML (Markdown → MkDocs → HTML → navegador)', 'Especializados: SVG (gráficos vectoriales), RSS (titulares/noticias); ambos usan sintaxis XML con etiquetas de significado predefinido'],
    tags: ['xml', 'json', 'yaml', 'html', 'markdown', 'mkdocs', 'svg', 'rss', 'api', 'configuracion', 'intercambio'],
    contenido: `
<p>También podemos clasificar estas tecnologías según el <strong>entorno o el problema</strong> en el que se utilizan.</p>

<h4>Propósito general e intercambio de datos</h4>
<p>Representan información que puede ser almacenada o enviada entre programas diferentes:</p>
<ul>
  <li><strong>XML</strong> permite crear vocabularios propios mediante etiquetas.</li>
  <li><strong>JSON</strong> es muy habitual en API y aplicaciones web por su sintaxis compacta.</li>
  <li><strong>YAML</strong> se utiliza especialmente en configuración y automatización por su legibilidad.</li>
</ul>
<p>Los tres formatos pueden representar un servidor. <strong>Cambia la sintaxis, pero la información es equivalente</strong>:</p>
<table>
<thead><tr><th>XML</th><th>JSON</th><th>YAML</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;servidor&gt;
  &lt;nombre&gt;servidor-web&lt;/nombre&gt;
  &lt;activo&gt;true&lt;/activo&gt;
&lt;/servidor&gt;</code></pre></td>
<td><pre><code>{
  "nombre": "servidor-web",
  "activo": true
}</code></pre></td>
<td><pre><code>nombre: servidor-web
activo: true</code></pre></td>
</tr></tbody></table>
<div class="box warn"><div class="box-title">La sangría importa en YAML</div>
<p>Los espacios indican la jerarquía de los datos. <strong>No se deben mezclar tabuladores y espacios.</strong></p></div>

<h4>Documentación y presentación web</h4>
<p>Tecnologías pensadas para publicar o redactar contenido que leerán las <em>personas</em>:</p>
<ul>
  <li><strong>HTML</strong> estructura páginas y aplicaciones web.</li>
  <li><strong>Markdown</strong> permite escribir documentación con una sintaxis más sencilla y suele transformarse después en HTML.</li>
</ul>
<p>Este fragmento Markdown se convierte en un encabezado y una lista:</p>
<pre><code># Estado de la red

- servidor-web: activo
- servidor-copias: mantenimiento</code></pre>
<p>Esta misma cadena de transformación se utiliza en los apuntes originales:</p>
<p><code>Archivo Markdown</code> → <code>MkDocs</code> → <code>Documento HTML</code> → <code>Navegador</code></p>

<h4>Lenguajes específicos o especializados</h4>
<p>Un lenguaje especializado utiliza un vocabulario diseñado para una tarea concreta. Dos ejemplos basados en XML:</p>
<ul>
  <li><strong>SVG</strong>, destinado a representar gráficos vectoriales.</li>
  <li><strong>RSS</strong>, destinado a distribuir titulares, noticias o actualizaciones.</li>
</ul>
<p>Este SVG dibuja un indicador verde que representa un servidor activo:</p>
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" width="240" height="70"&gt;
    &lt;circle cx="35" cy="35" r="18" fill="green" /&gt;
    &lt;text x="65" y="42" font-family="sans-serif" font-size="18"&gt;
        servidor-web
    &lt;/text&gt;
&lt;/svg&gt;</code></pre>
<p>Un lector RSS, en cambio, procesaría elementos como estos:</p>
<pre><code>&lt;item&gt;
    &lt;title&gt;Mantenimiento completado&lt;/title&gt;
    &lt;link&gt;https://ejemplo.test/avisos/mantenimiento&lt;/link&gt;
    &lt;description&gt;El servidor vuelve a estar disponible.&lt;/description&gt;
&lt;/item&gt;</code></pre>
<p>Aunque SVG y RSS utilizan la sintaxis de XML, <strong>sus etiquetas tienen significados predefinidos</strong> para un ámbito concreto.</p>`
  },

  {
    id: 'lm-ud1-2-4',
    tipo: 'subtema',
    titulo: '2.4 Cómo elegir un lenguaje o formato genérico',
    resumen: 'Cinco criterios: sintaxis y estructura, flexibilidad, propósito o ámbito, compatibilidad y estandarización. No basta con la sintaxis más atractiva: hay que pensar en quién crea, qué programa procesa y cuánto tiempo se conserva.',
    claves: ['Sintaxis/estructura: JSON compacto; YAML cómodo para personas (cuidar sangría); XML extenso pero claro y con validación potente', 'Flexibilidad: XML permite etiquetas propias, pero exige acordar vocabulario y reglas', 'Propósito: HTML web · Markdown docs · JSON API · YAML config · SVG gráficos · RSS novedades', 'Compatibilidad: qué leen/generan las aplicaciones; versiones, codificación, bibliotecas', 'Estandarización: especificación pública → menos diferencias entre aplicaciones', 'Elegir el formato cuya estructura represente los datos sin ambigüedades, no el que ocupe menos líneas'],
    tags: ['criterios', 'eleccion', 'sintaxis', 'flexibilidad', 'proposito', 'compatibilidad', 'estandarizacion', 'json', 'yaml', 'xml'],
    contenido: `
<p>Cuando varias tecnologías pueden representar la misma información, no basta con escoger la que tenga una sintaxis más atractiva. Hay que valorar <strong>quién creará el documento</strong>, <strong>qué programa lo procesará</strong> y <strong>durante cuánto tiempo deberá conservarse</strong>.</p>

<h4>1 · Sintaxis y estructura</h4>
<p>La sintaxis determina cómo se escriben los datos y la estructura establece cómo se organizan y relacionan.</p>
<ul>
  <li><strong>JSON</strong> resulta compacto para objetos y listas.</li>
  <li><strong>YAML</strong> suele ser cómodo para archivos que editarán personas, aunque hay que cuidar la sangría.</li>
  <li><strong>XML</strong> es más extenso, pero distingue claramente cada elemento y dispone de mecanismos potentes para validar estructuras complejas.</li>
</ul>
<div class="box tip"><div class="box-title">Regla</div><p>No debe elegirse solamente el formato que ocupe menos líneas, sino aquel cuya estructura <strong>represente los datos sin ambigüedades</strong>.</p></div>

<h4>2 · Flexibilidad</h4>
<p>Un formato es flexible cuando permite adaptarse a necesidades nuevas. XML, por ejemplo, permite crear etiquetas propias:</p>
<pre><code>&lt;servidor&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;servicio puerto="443"&gt;https&lt;/servicio&gt;
&lt;/servidor&gt;</code></pre>
<p>Podrían añadirse después elementos como <code>&lt;sistema-operativo&gt;</code> o <code>&lt;ubicacion&gt;</code>. Esta libertad es útil, pero tiene un <strong>riesgo</strong>: dos personas podrían crear estructuras diferentes para representar la misma información. Por ello suele ser necesario <strong>acordar un vocabulario y unas reglas comunes</strong>.</p>

<h4>3 · Propósito o ámbito de aplicación</h4>
<p>La tecnología debe encajar con la tarea:</p>
<ul>
  <li>HTML es adecuado para estructurar una página web.</li>
  <li>Markdown simplifica la redacción de documentación.</li>
  <li>JSON es habitual en la respuesta de una API.</li>
  <li>YAML es frecuente en archivos de configuración.</li>
  <li>SVG describe gráficos vectoriales y RSS distribuye actualizaciones.</li>
</ul>
<p>Aunque sea técnicamente posible utilizar un formato para otra finalidad, no siempre será práctico. Por ejemplo, se podría almacenar una configuración sencilla en HTML, pero <strong>las herramientas no esperan encontrarla en ese formato</strong>.</p>

<h4>4 · Compatibilidad</h4>
<p>Antes de elegir hay que comprobar qué formatos pueden leer y generar las aplicaciones implicadas. Si una API solo entrega JSON, utilizar XML obligaría a añadir una conversión. Si una herramienta de automatización espera YAML, ese formato será normalmente la opción más directa.</p>
<p>También deben considerarse las <strong>versiones admitidas</strong>, la <strong>codificación de caracteres</strong> y la <strong>disponibilidad de bibliotecas</strong> para procesar el formato.</p>

<h4>5 · Estandarización</h4>
<p>Un formato estandarizado cuenta con una <strong>especificación pública</strong> que establece cómo debe interpretarse. Esto reduce las diferencias entre aplicaciones y evita depender de las decisiones particulares de un único programa.</p>

<div class="box ex"><div class="box-title">Una elección razonada</div>
<p>Para una configuración que editará el administrador podría elegirse <strong>YAML</strong> por su legibilidad. Para enviar el estado del sistema mediante una API podría escogerse <strong>JSON</strong> por su compatibilidad con aplicaciones web. Si se necesita una validación documental más estricta o combinar vocabularios, <strong>XML</strong> puede resultar más apropiado.</p></div>

<h4>Resumen: preguntas prácticas</h4>
<table>
<thead><tr><th>Criterio</th><th>Pregunta práctica</th></tr></thead>
<tbody>
<tr><td>Sintaxis y estructura</td><td>¿Representa claramente los datos que necesito?</td></tr>
<tr><td>Flexibilidad</td><td>¿Podré ampliar la estructura sin rehacerla por completo?</td></tr>
<tr><td>Propósito</td><td>¿Está pensado para esta tarea?</td></tr>
<tr><td>Compatibilidad</td><td>¿Lo entienden todas las herramientas implicadas?</td></tr>
<tr><td>Estandarización</td><td>¿Existen reglas públicas y suficientemente estables?</td></tr>
</tbody></table>`
  },

  {
    id: 'lm-ud1-2-5',
    tipo: 'subtema',
    titulo: '2.5 Características generales de los lenguajes de marcas',
    resumen: 'Se basan en texto plano (extensión ≠ contenido; bytes y UTF-8), favorecen la interoperabilidad, son independientes del programa y la plataforma, y son flexibles y fáciles de crear.',
    claves: ['Texto plano: se lee con cualquier editor; facilita búsquedas, copias de seguridad y Git', 'El contenido determina qué es el documento; la extensión indica cómo se espera tratarlo', 'En la Web el servidor informa del tipo de contenido (text/html, application/json)', 'UTF-8: 1 a 4 bytes por carácter. "Hola" = 4 bytes; "José" = 5 bytes (é = C3 A9)', '<ip>192.168.1.10</ip> = 21 bytes (todo ASCII)', 'Salto de línea +1/+2 bytes; BOM UTF-8 +3 bytes; tamaño ≠ espacio en disco (bloques)', 'Interoperabilidad: sistemas distintos intercambian y usan la información; requiere acordar sintaxis Y significado', 'Independencia: no ligados a un SO o aplicación propietaria (no absoluta)', 'Flexibles: fácil de crear ≠ cualquier estructura es correcta'],
    tags: ['texto plano', 'extension', 'utf-8', 'bytes', 'ascii', 'bom', 'interoperabilidad', 'independencia', 'flexibilidad', 'mime', 'text/html', 'application/json', 'git'],
    contenido: `
<p>Los conceptos de <strong>texto plano</strong>, <strong>interoperabilidad</strong>, <strong>independencia</strong> y <strong>flexibilidad</strong> explican por qué los lenguajes de marcas resultan útiles para almacenar e intercambiar información.</p>

<h4>1 · Se basan en texto plano</h4>
<div class="box def"><div class="box-title">Texto plano</div>
<p>Un archivo de <strong>texto plano</strong> almacena caracteres que pueden leerse con un editor de texto, sin necesitar el programa concreto que lo creó. Un documento XML, HTML o Markdown puede abrirse con Visual Studio Code, Notepad++ o un editor básico.</p></div>
<p>Esto no significa que el documento carezca de estructura o formato visual. El <em>código fuente</em> es texto plano, pero una aplicación interpreta sus marcas y puede generar una página web, un gráfico o un documento con formato.</p>
<p>El texto plano también facilita las <strong>búsquedas</strong>, las <strong>copias de seguridad</strong> y la <strong>comparación de cambios</strong> mediante sistemas de control de versiones como <strong>Git</strong>.</p>

<h5>Si todos son texto plano, ¿para qué sirve la extensión?</h5>
<p><strong>Texto plano</strong> describe cómo se almacena el contenido, mientras que la <strong>extensión</strong> ayuda a reconocer con qué reglas debe interpretarse. Los archivos <code>pagina.html</code>, <code>equipo.xml</code>, <code>datos.json</code>, <code>configuracion.yaml</code> y <code>apuntes.md</code> contienen caracteres, pero emplean sintaxis y tienen finalidades diferentes.</p>
<p>La extensión sirve como <em>pista</em> para las personas, el sistema operativo y las aplicaciones: un editor puede aplicar el coloreado adecuado y el sistema puede proponer un programa para abrir el archivo (<code>.html</code> → navegador, <code>.xml</code> → herramientas XML).</p>
<p>Cambiar <code>equipo.xml</code> por <code>equipo.txt</code> <strong>no modifica su contenido</strong>: si conserva sus etiquetas, continúa siendo XML escrito como texto plano, aunque algunas herramientas podrían dejar de reconocerlo automáticamente. Del mismo modo, usar la extensión <code>.json</code> no convierte cualquier texto en JSON:</p>
<pre><code>Esto no es JSON.</code></pre>
<p>Un analizador JSON rechazará ese contenido aunque el archivo se llame <code>datos.json</code>.</p>
<div class="box tip"><div class="box-title">Regla de oro</div>
<p><strong>El contenido determina qué es realmente el documento y la extensión indica cómo se espera que sea tratado.</strong></p></div>
<div class="box info"><div class="box-title">En la Web también existe el tipo de contenido</div>
<p>Cuando un servidor envía un archivo, puede informar de su formato mediante un tipo como <code>text/html</code> o <code>application/json</code>. El navegador utiliza esta información para decidir cómo procesar la respuesta; <strong>no depende únicamente de la extensión</strong> del nombre.</p></div>

<h5>Del texto a los bytes</h5>
<p>Aunque veamos letras y símbolos, un archivo almacena <strong>bytes</strong>. Una <strong>codificación de caracteres</strong> establece qué bytes representan cada carácter. <strong>UTF-8</strong> es una de las más utilizadas y emplea <strong>entre uno y cuatro bytes por carácter</strong>.</p>
<p>El texto <code>Hola</code> ocupa cuatro bytes en UTF-8:</p>
<table>
<thead><tr><th>Carácter</th><th>Valor hexadecimal</th><th>Tamaño</th></tr></thead>
<tbody>
<tr><td><code>H</code></td><td><code>48</code></td><td>1 byte</td></tr>
<tr><td><code>o</code></td><td><code>6F</code></td><td>1 byte</td></tr>
<tr><td><code>l</code></td><td><code>6C</code></td><td>1 byte</td></tr>
<tr><td><code>a</code></td><td><code>61</code></td><td>1 byte</td></tr>
</tbody></table>
<pre><code>Texto:  Hola
Bytes:  48 6F 6C 61
Tamaño: 4 bytes</code></pre>
<p>En cambio, la letra <code>é</code> necesita <strong>dos bytes</strong> en UTF-8. Por eso <code>José</code>, aunque tiene cuatro caracteres, ocupa cinco bytes:</p>
<pre><code>Texto:  José
Bytes:  4A 6F 73 C3 A9
Tamaño: 5 bytes</code></pre>
<p>Un fragmento XML también es una secuencia de caracteres codificados. Guardado en UTF-8, sin salto de línea ni marca BOM, este contenido ocupa <strong>21 bytes</strong>:</p>
<pre><code>&lt;ip&gt;192.168.1.10&lt;/ip&gt;</code></pre>
<p>Los signos <code>&lt;</code>, <code>&gt;</code>, <code>/</code>, las letras, los puntos y los números pertenecen al conjunto <strong>ASCII</strong> y cada uno ocupa un byte en UTF-8.</p>
<div class="box warn"><div class="box-title">El tamaño puede variar</div>
<p>Un salto de línea puede añadir uno o dos bytes según el sistema, y una marca <strong>BOM</strong> de UTF-8 añade tres bytes al principio. Además, el <strong>tamaño del archivo</strong> y el <strong>espacio ocupado en disco</strong> pueden ser distintos, porque el sistema de archivos reserva el almacenamiento en bloques.</p></div>

<h4>2 · Favorecen la interoperabilidad</h4>
<div class="box def"><div class="box-title">Interoperabilidad</div>
<p>Capacidad de sistemas diferentes para <strong>intercambiar información y utilizarla correctamente</strong>. Un servidor Linux puede generar XML y una aplicación ejecutada en Windows puede procesarlo porque ambos conocen las mismas reglas.</p></div>
<div class="box warn"><div class="box-title">Intercambiar no siempre significa entender</div>
<p>Compartir una sintaxis no garantiza por sí solo la interoperabilidad. Dos aplicaciones pueden leer XML, pero deben acordar también <strong>qué significan las etiquetas</strong> y <strong>qué estructura</strong> tendrá el documento.</p></div>

<h4>3 · Son independientes del programa y de la plataforma</h4>
<p>La información no suele quedar ligada a un único sistema operativo o a una aplicación propietaria. El mismo archivo puede copiarse y procesarse en distintos equipos siempre que exista una herramienta compatible con el estándar.</p>
<p>Esta independencia <strong>no es absoluta</strong>: el programa receptor necesita conocer la sintaxis, el vocabulario y la codificación empleados. La ventaja es que esas reglas pueden documentarse y aplicarse en plataformas diferentes.</p>

<h4>4 · Son flexibles y fáciles de crear</h4>
<p>Muchos lenguajes de marcas pueden escribirse con cualquier editor de texto y no requieren herramientas costosas. Además, algunos permiten crear estructuras adaptadas al problema, como las etiquetas <code>&lt;servidor&gt;</code>, <code>&lt;ip&gt;</code> o <code>&lt;servicio&gt;</code> de un inventario propio.</p>
<p>«Fácil de crear» <strong>no significa que cualquier estructura sea correcta</strong>. Cuanto más crece un documento, más importantes son las reglas de sintaxis, la validación y la documentación del vocabulario utilizado.</p>`
  },

  {
    id: 'lm-ud1-2-6',
    tipo: 'subtema',
    titulo: '2.6 Resumen del apartado 2',
    resumen: 'Cinco ideas para recordar sobre elección de formato, texto plano, interoperabilidad, independencia y flexibilidad.',
    claves: ['La elección depende de sintaxis, flexibilidad, propósito, compatibilidad y estandarización', 'El texto plano facilita edición, búsqueda y control de versiones', 'Interoperabilidad: intercambio entre sistemas si comparten sintaxis Y significado', 'Independencia: menos vinculación con un programa o plataforma', 'Flexibilidad: adaptar el documento, pero definir reglas para mantener la consistencia'],
    tags: ['resumen', 'repaso'],
    contenido: `
<ul>
  <li>La <strong>elección</strong> depende de la sintaxis, la flexibilidad, el propósito, la compatibilidad y el grado de estandarización.</li>
  <li>El <strong>texto plano</strong> facilita la edición, la búsqueda y el control de versiones.</li>
  <li>La <strong>interoperabilidad</strong> permite intercambiar datos entre sistemas, siempre que estos compartan tanto la sintaxis como el significado.</li>
  <li>La <strong>independencia</strong> reduce la vinculación con un programa o una plataforma concreta.</li>
  <li>La <strong>flexibilidad</strong> facilita adaptar el documento, pero exige definir reglas para mantener su consistencia.</li>
</ul>`
  },

  /* ---------------- 3. Estructura y sintaxis ---------------- */
  {
    id: 'lm-ud1-3',
    tipo: 'tema',
    titulo: '3. Estructura y sintaxis de un documento XML',
    resumen: 'Partes de un documento XML (declaración, raíz, elementos, anidamiento, contenido, atributos) y sus reglas sintácticas básicas. Comparación XML vs HTML en mayúsculas/minúsculas.',
    claves: ['Declaración XML: <?xml version="1.0" encoding="UTF-8"?> (habitual, no siempre obligatoria; no es la raíz)', 'Exactamente UN elemento raíz que contiene todo', 'Anidamiento: jerarquía en árbol (padre/hijo/hermanos); el último que se abre es el primero que se cierra', 'Contenido: texto, otros elementos o vacío (<x /> ≡ <x></x>)', 'Atributos: nombre="valor" en la etiqueta de apertura, con comillas, sin repetir', 'XML es case-sensitive; HTML no'],
    tags: ['xml', 'sintaxis', 'estructura', 'raiz', 'elemento', 'atributo', 'anidamiento', 'declaracion'],
    links: ['lm-ud1-3-1', 'lm-ud1-3-2', 'lm-ud1-3-3'],
    contenido: `
<p>En este apartado utilizaremos <strong>XML</strong> para conocer las partes de un documento estructurado y sus reglas sintácticas básicas. XML permite crear etiquetas adaptadas a la información que se desea representar, por lo que resulta útil para observar con claridad la raíz, los elementos, los atributos y las relaciones jerárquicas.</p>
<p>Partiremos del siguiente inventario de equipos:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;inventario&gt;
    &lt;equipo id="srv01"&gt;
        &lt;nombre&gt;servidor-web&lt;/nombre&gt;
        &lt;ip&gt;192.168.10.20&lt;/ip&gt;
        &lt;servicios&gt;
            &lt;servicio puerto="80"&gt;HTTP&lt;/servicio&gt;
            &lt;servicio puerto="443"&gt;HTTPS&lt;/servicio&gt;
        &lt;/servicios&gt;
    &lt;/equipo&gt;
&lt;/inventario&gt;</code></pre>
<div class="box def"><div class="box-title">Declaración XML</div>
<p>La primera línea es la <strong>declaración XML</strong>. Informa de la <strong>versión</strong> utilizada y de la <strong>codificación de caracteres</strong>. Es habitual incluirla, aunque no siempre es obligatoria.</p></div>

<h4>Contenido del apartado</h4>
<ol>
  <li>Estructura de un documento XML: raíz, elementos y anidamiento, contenido</li>
  <li>Reglas sintácticas básicas: etiquetas, atributos, unicidad de la raíz, mayúsculas/minúsculas</li>
  <li>Comparación final entre XML y HTML</li>
</ol>`
  },

  {
    id: 'lm-ud1-3-1',
    tipo: 'subtema',
    titulo: '3.1 Estructura: raíz, elementos, anidamiento y contenido',
    resumen: 'El elemento raíz contiene todo (exactamente uno). Los elementos se anidan formando un árbol: padre, hijos y hermanos. El contenido puede ser texto, otros elementos o vacío.',
    claves: ['Un documento XML tiene exactamente UN elemento raíz; su nombre lo elige el autor', 'Declaración y raíz no son lo mismo: <?xml …?> no es la raíz', 'Elemento = apertura + contenido + cierre', 'Anidamiento → árbol: inventario (raíz) > equipo > nombre, ip, servicios > servicio', 'Hermanos = comparten padre', 'El último elemento que se abre debe ser el primero que se cierra', 'Contenido: texto · otros elementos · vacío (<mantenimiento /> ≡ <mantenimiento></mantenimiento>)'],
    tags: ['raiz', 'root', 'elemento', 'anidamiento', 'arbol', 'padre', 'hijo', 'hermano', 'contenido', 'elemento vacio'],
    contenido: `
<h4>Elemento raíz</h4>
<p>El <strong>elemento raíz</strong> contiene todos los demás elementos del documento. En el ejemplo, la raíz comienza con <code>&lt;inventario&gt;</code> y termina con <code>&lt;/inventario&gt;</code>:</p>
<pre><code>&lt;inventario&gt;
    &lt;!-- El resto de los elementos se encuentra dentro --&gt;
&lt;/inventario&gt;</code></pre>
<p>Un documento XML debe tener <strong>exactamente un elemento raíz</strong>. Su nombre puede elegirse según la información representada: <code>&lt;inventario&gt;</code>, <code>&lt;configuracion&gt;</code> o <code>&lt;usuarios&gt;</code>, por ejemplo.</p>
<div class="box warn"><div class="box-title">Declaración y raíz no son lo mismo</div>
<p><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</code> aporta información sobre el documento, pero <strong>no es su elemento raíz</strong>. La raíz del ejemplo es <code>&lt;inventario&gt;</code>.</p></div>

<h4>Elementos y anidamiento</h4>
<p>Un <strong>elemento</strong> está formado normalmente por una etiqueta de apertura, un contenido y una etiqueta de cierre:</p>
<pre><code>&lt;nombre&gt;servidor-web&lt;/nombre&gt;</code></pre>
<p>Los elementos pueden contener otros elementos. Esta relación se denomina <strong>anidamiento</strong> y crea una estructura jerárquica semejante a un <strong>árbol</strong>:</p>
<pre><code>inventario
└── equipo
    ├── nombre
    ├── ip
    └── servicios
        ├── servicio (HTTP)
        └── servicio (HTTPS)</code></pre>
<p>En esta jerarquía:</p>
<ul>
  <li><code>inventario</code> es el elemento <strong>raíz</strong> y <strong>padre</strong> de <code>equipo</code>.</li>
  <li><code>equipo</code> es <strong>hijo</strong> de <code>inventario</code> y padre de <code>nombre</code>, <code>ip</code> y <code>servicios</code>.</li>
  <li>Los dos elementos <code>servicio</code> son <strong>hermanos</strong> porque comparten el mismo padre.</li>
</ul>
<p>El anidamiento debe respetar el orden de apertura. <strong>El último elemento que se abre debe ser el primero que se cierre</strong>:</p>
<table>
<thead><tr><th>Anidamiento correcto</th><th>Anidamiento incorrecto</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
&lt;/equipo&gt;</code></pre></td>
<td><pre><code>&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/equipo&gt;
&lt;/nombre&gt;</code></pre></td>
</tr></tbody></table>

<h4>Contenido</h4>
<p>El <strong>contenido</strong> es la información situada entre las etiquetas de apertura y cierre. Puede adoptar distintas formas:</p>
<table>
<thead><tr><th>Texto</th><th>Otros elementos</th><th>Elemento vacío</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;nombre&gt;servidor-web&lt;/nombre&gt;</code></pre></td>
<td><pre><code>&lt;equipo&gt;
  &lt;nombre&gt;servidor-web&lt;/nombre&gt;
  &lt;ip&gt;192.168.10.20&lt;/ip&gt;
&lt;/equipo&gt;</code></pre></td>
<td><pre><code>&lt;mantenimiento /&gt;</code></pre></td>
</tr></tbody></table>
<p>Un <strong>elemento vacío</strong> no contiene texto ni elementos hijos. La forma abreviada <code>&lt;mantenimiento /&gt;</code> equivale a escribir <code>&lt;mantenimiento&gt;&lt;/mantenimiento&gt;</code>.</p>`
  },

  {
    id: 'lm-ud1-3-2',
    tipo: 'subtema',
    titulo: '3.2 Reglas sintácticas básicas de XML',
    resumen: 'Etiquetas con cierre (o vacías), nombres sin espacios y sin empezar por número, atributos nombre="valor" entre comillas y sin repetir, una única raíz y distinción de mayúsculas/minúsculas.',
    claves: ['Toda etiqueta de apertura tiene su cierre, salvo elementos vacíos <x />', 'El nombre al abrir y cerrar debe coincidir exactamente', 'Nombres: sin espacios, no empiezan por número', 'Atributos: nombre="valor" dentro de la etiqueta de apertura; comillas simples o dobles obligatorias; no repetir el mismo atributo', '¿Elemento o atributo? Elementos para datos principales; atributos para información breve que describe/identifica', 'Todo dentro de una única raíz (dos raíces = incorrecto)', 'XML es case-sensitive: <equipo>, <Equipo> y <EQUIPO> son distintos'],
    tags: ['reglas', 'sintaxis', 'etiquetas', 'atributos', 'comillas', 'raiz unica', 'case-sensitive', 'mayusculas', 'minusculas'],
    contenido: `
<div class="box def"><div class="box-title">Sintaxis</div>
<p>La <strong>sintaxis</strong> es el conjunto de reglas que establece cómo debe escribirse un documento. Si no se respetan, el procesador XML no podrá interpretarlo correctamente.</p></div>

<h4>Etiquetas</h4>
<p>Cada etiqueta de apertura debe tener su correspondiente etiqueta de cierre, salvo que se utilice la forma abreviada de elemento vacío:</p>
<pre><code>&lt;nombre&gt;servidor-web&lt;/nombre&gt;
&lt;mantenimiento /&gt;</code></pre>
<p>El nombre utilizado al abrir y cerrar debe <strong>coincidir exactamente</strong>. Los nombres <strong>no pueden contener espacios</strong> y <strong>no deben comenzar por un número</strong>.</p>
<div class="box danger"><div class="box-title">Incorrecto: falta la etiqueta de cierre</div>
<pre><code>&lt;nombre&gt;servidor-web</code></pre></div>

<h4>Atributos</h4>
<p>Los <strong>atributos</strong> añaden información a un elemento y se escriben dentro de la etiqueta de apertura mediante pares <code>nombre="valor"</code>:</p>
<pre><code>&lt;servicio puerto="443" protocolo="tcp"&gt;HTTPS&lt;/servicio&gt;</code></pre>
<p>Aquí <code>puerto</code> y <code>protocolo</code> son atributos. Sus valores deben estar <strong>entre comillas simples o dobles</strong>. Un mismo atributo <strong>no puede repetirse</strong> dentro de la misma etiqueta.</p>
<div class="box danger"><div class="box-title">Incorrecto: valor sin comillas</div>
<pre><code>&lt;servicio puerto=443&gt;HTTPS&lt;/servicio&gt;</code></pre></div>
<div class="box tip"><div class="box-title">¿Elemento o atributo?</div>
<p>Como primera aproximación, utiliza <strong>elementos para los datos principales</strong> y <strong>atributos para información breve</strong> que describa o identifique al elemento. La decisión también dependerá del vocabulario XML utilizado.</p></div>

<h4>Unicidad de la raíz</h4>
<p>Todo el contenido debe quedar dentro de un <strong>único elemento raíz</strong>:</p>
<table>
<thead><tr><th>Correcto</th><th>Incorrecto (dos raíces)</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;inventario&gt;
    &lt;equipo id="srv01" /&gt;
    &lt;equipo id="srv02" /&gt;
&lt;/inventario&gt;</code></pre></td>
<td><pre><code>&lt;equipo id="srv01" /&gt;
&lt;equipo id="srv02" /&gt;</code></pre></td>
</tr></tbody></table>

<h4>Mayúsculas y minúsculas</h4>
<p>XML distingue entre mayúsculas y minúsculas: es <strong>sensible a mayúsculas y minúsculas</strong> (<em>case-sensitive</em>). Por tanto, <code>&lt;equipo&gt;</code>, <code>&lt;Equipo&gt;</code> y <code>&lt;EQUIPO&gt;</code> son nombres diferentes.</p>
<table>
<thead><tr><th>Correcto</th><th>Incorrecto (los nombres no coinciden)</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;Equipo&gt;
    &lt;Nombre&gt;servidor-web&lt;/Nombre&gt;
&lt;/Equipo&gt;</code></pre></td>
<td><pre><code>&lt;Equipo&gt;
    &lt;Nombre&gt;servidor-web&lt;/nombre&gt;
&lt;/Equipo&gt;</code></pre></td>
</tr></tbody></table>
<p>En el segundo fragmento se abre <code>&lt;Nombre&gt;</code>, pero se intenta cerrar con <code>&lt;/nombre&gt;</code>. Un procesador XML <strong>detendrá el análisis y comunicará un error</strong>.</p>`
  },

  {
    id: 'lm-ud1-3-3',
    tipo: 'subtema',
    titulo: '3.3 Comparación XML vs HTML: mayúsculas y minúsculas',
    resumen: 'En XML los nombres de apertura y cierre deben coincidir exactamente; en HTML las etiquetas no distinguen mayúsculas, aunque se recomienda escribirlas en minúsculas. XHTML procesado como XML sí distingue.',
    claves: ['XML: <Nombre>…</nombre> es un error', 'HTML: <HTML>…</html>, <H1>…</h1> se interpreta igualmente', 'Recomendación: etiquetas HTML en minúsculas, consistentes → legibilidad y compatibilidad con XHTML', 'XHTML procesado como XML sí es case-sensitive'],
    tags: ['xml', 'html', 'xhtml', 'case-sensitive', 'mayusculas', 'minusculas', 'comparacion'],
    contenido: `
<p>XML y HTML utilizan etiquetas delimitadas por <code>&lt;</code> y <code>&gt;</code>, pero <strong>no aplican las mismas reglas</strong> sobre mayúsculas y minúsculas.</p>

<h4>XML: los nombres deben coincidir exactamente</h4>
<p>Este documento XML está bien formado porque conserva las mismas mayúsculas en las etiquetas de apertura y cierre:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;Servidor&gt;
    &lt;Nombre&gt;servidor-web&lt;/Nombre&gt;
    &lt;Estado&gt;activo&lt;/Estado&gt;
&lt;/Servidor&gt;</code></pre>
<p>Cambiar <code>&lt;/Nombre&gt;</code> por <code>&lt;/nombre&gt;</code> <strong>provocaría un error</strong>.</p>

<h4>HTML: las etiquetas no distinguen entre mayúsculas y minúsculas</h4>
<p>Cuando un documento se procesa como HTML, los nombres de sus etiquetas no distinguen entre mayúsculas y minúsculas. Un navegador puede interpretar este ejemplo aunque combine distintas formas:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;HTML lang="es"&gt;
    &lt;HEAD&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;TITLE&gt;Estado del servidor&lt;/title&gt;
    &lt;/head&gt;
    &lt;BODY&gt;
        &lt;H1&gt;servidor-web&lt;/h1&gt;
        &lt;P&gt;Estado: activo&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
<p><a href="apuntes/lm/assets/examples/tema01/mayusculas-html.html" target="_blank" rel="noopener">Abrir el ejemplo HTML</a></p>
<div class="box tip"><div class="box-title">Recomendación</div>
<p>Aunque el navegador lo admita, escribe las etiquetas HTML <strong>en minúsculas de forma consistente</strong>. El código resulta más legible y se evitan errores al trabajar posteriormente con XHTML u otras tecnologías basadas en XML.</p></div>
<div class="box warn"><div class="box-title">HTML no siempre se comporta igual</div>
<p>Esta tolerancia corresponde a documentos procesados como HTML. Si se utiliza sintaxis <strong>XHTML</strong> y el documento se procesa como XML, los nombres <strong>sí distinguen</strong> entre mayúsculas y minúsculas.</p></div>

<table>
<thead><tr><th></th><th>XML</th><th>HTML</th></tr></thead>
<tbody>
<tr><td>Mayúsculas/minúsculas</td><td>Distingue (case-sensitive)</td><td>No distingue</td></tr>
<tr><td>Etiqueta mal emparejada</td><td>Error fatal, se detiene el análisis</td><td>El navegador lo tolera</td></tr>
<tr><td>Buenas prácticas</td><td>Coincidencia exacta</td><td>Minúsculas consistentes</td></tr>
</tbody></table>`
  },

  /* ---------------- 4. Herramientas de edición ---------------- */
  {
    id: 'lm-ud1-4',
    tipo: 'tema',
    titulo: '4. Herramientas de edición',
    resumen: 'Los documentos de marcas son texto plano: valen con cualquier editor, pero uno especializado reduce errores. Comparativa de Bloc de notas, gedit y Notepad++, y otras opciones (VS Code, Kate, Sublime, Nano, Vim).',
    claves: ['Un editor debe permitir: extensión adecuada, codificación UTF-8, números de línea, sangría, buscar/reemplazar, resaltado de sintaxis, varios documentos', 'Colorear NO es validar: un editor puede colorear un XML mal cerrado', 'Bloc de notas: básico, cuidado con servidor.xml.txt', 'gedit (GNOME): pestañas, resaltado, UTF-8, complementos', 'Notepad++ (Windows, libre): plegado, regex, codificación, macros, portátil', 'Otros: VS Code (recomendado), Kate, Sublime Text, Nano/Vim (terminal, SSH)'],
    tags: ['editores', 'bloc de notas', 'notepad', 'gedit', 'notepad++', 'vscode', 'kate', 'sublime', 'nano', 'vim', 'resaltado', 'validacion'],
    links: ['lm-ud1-4-1', 'lm-ud1-4-2', 'lm-ud1-4-3', 'lm-ud1-ej1'],
    contenido: `
<p>Los documentos HTML, XML, JSON, YAML o Markdown son <strong>archivos de texto plano</strong>. Por esta razón pueden crearse con un editor sencillo, aunque un editor especializado ofrece ayudas que <strong>reducen errores y facilitan el trabajo</strong>.</p>
<p>En este apartado compararemos tres herramientas: el <strong>Bloc de notas</strong> de Windows, <strong>gedit</strong> en Linux y <strong>Notepad++</strong>. Las tres permiten modificar texto, pero no ofrecen el mismo nivel de asistencia.</p>

<h4>¿Qué debe aportar un editor?</h4>
<p>Para escribir lenguajes de marcas conviene que el editor permita:</p>
<ul>
  <li>guardar archivos con la <strong>extensión adecuada</strong>, como <code>.xml</code> o <code>.html</code>;</li>
  <li>seleccionar una <strong>codificación</strong>, preferiblemente UTF-8;</li>
  <li>mostrar <strong>números de línea</strong>;</li>
  <li>controlar la <strong>sangría</strong> y visualizar la jerarquía;</li>
  <li><strong>buscar y reemplazar</strong> texto;</li>
  <li><strong>resaltar la sintaxis</strong> para diferenciar etiquetas, atributos y contenido;</li>
  <li>trabajar con <strong>varios documentos</strong>.</li>
</ul>
<div class="box warn"><div class="box-title">Colorear no es validar</div>
<p>El resaltado de sintaxis ayuda a leer el documento, pero <strong>no demuestra que sea correcto</strong>. Un editor puede colorear un XML que tenga etiquetas mal cerradas. Para comprobar sus reglas se necesita una función o herramienta de <strong>validación</strong>.</p></div>

<h4>Comparativa rápida</h4>
<table>
<thead><tr><th></th><th>Bloc de notas</th><th>gedit</th><th>Notepad++</th></tr></thead>
<tbody>
<tr><td>Sistema</td><td>Windows</td><td>Linux (GNOME)</td><td>Windows (libre)</td></tr>
<tr><td>Resaltado de sintaxis</td><td>No (muy limitado)</td><td>Sí</td><td>Sí, muchos lenguajes</td></tr>
<tr><td>Pestañas</td><td>Limitado</td><td>Sí</td><td>Sí + vistas divididas</td></tr>
<tr><td>Plegado de bloques</td><td>No</td><td>Con complementos</td><td>Sí</td></tr>
<tr><td>Regex en buscar/reemplazar</td><td>No</td><td>Sí</td><td>Sí</td></tr>
<tr><td>Codificación</td><td>Selección al guardar</td><td>UTF-8</td><td>Selección y conversión</td></tr>
<tr><td>Valida XML</td><td>No</td><td>No</td><td>No (resaltado ≠ validador)</td></tr>
</tbody></table>

<h4>Contenido del apartado</h4>
<ol>
  <li>Bloc de notas de Windows</li>
  <li>gedit en Linux</li>
  <li>Notepad++ y otras opciones</li>
  <li>Tarea 1: comparación de editores</li>
</ol>`
  },

  {
    id: 'lm-ud1-4-1',
    tipo: 'subtema',
    titulo: '4.1 Bloc de notas de Windows',
    resumen: 'Editor básico incluido en Windows. Sirve para crear un XML sin instalar nada, pero ofrece poca ayuda. Cuidado con las extensiones ocultas (servidor.xml.txt).',
    claves: ['Pasos: escribir → Archivo → Guardar como → servidor.xml → UTF-8', 'Comprobar que no se guardó como servidor.xml.txt', 'Ventajas: disponible, sencillo, suficiente para cambios pequeños', 'Limitaciones: poca ayuda para XML; difícil ver la estructura; editar ≠ validar', 'Activar la visualización de extensiones en el Explorador'],
    tags: ['bloc de notas', 'notepad', 'windows', 'utf-8', 'extensiones ocultas', 'txt'],
    contenido: `
<p>El <strong>Bloc de notas</strong> es el editor de texto incluido en Windows. Puede utilizarse para crear un documento de marcas sin instalar software adicional.</p>
<h4>Crear un archivo XML</h4>
<ol>
  <li>Abre el Bloc de notas.</li>
  <li>Escribe el contenido del documento.</li>
  <li>Selecciona <strong>Archivo → Guardar como</strong>.</li>
  <li>Escribe el nombre <code>servidor.xml</code>.</li>
  <li>Selecciona <strong>UTF-8</strong> como codificación si la versión utilizada muestra esa opción.</li>
  <li>Comprueba que el archivo <strong>no se haya guardado como <code>servidor.xml.txt</code></strong>.</li>
</ol>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;servidor&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;estado&gt;activo&lt;/estado&gt;
&lt;/servidor&gt;</code></pre>
<h4>Ventajas</h4>
<ul>
  <li>Está disponible en Windows.</li>
  <li>Su interfaz es sencilla.</li>
  <li>Es suficiente para cambios pequeños o para comprobar que un documento es realmente texto plano.</li>
</ul>
<h4>Limitaciones</h4>
<ul>
  <li>Ofrece poca ayuda específica para XML y otros lenguajes.</li>
  <li>En comparación con un editor de código, resulta más difícil reconocer la estructura de documentos largos.</li>
  <li>No debe confundirse la edición del archivo con su validación.</li>
</ul>
<div class="box warn"><div class="box-title">Cuidado con las extensiones ocultas</div>
<p>Si el Explorador de archivos oculta las extensiones conocidas, un archivo llamado aparentemente <code>servidor.xml</code> podría ser en realidad <code>servidor.xml.txt</code>. Conviene <strong>activar la visualización de extensiones</strong>.</p></div>`
  },

  {
    id: 'lm-ud1-4-2',
    tipo: 'subtema',
    titulo: '4.2 gedit en Linux',
    resumen: 'Editor del entorno GNOME. Interfaz sencilla con pestañas, números de línea, búsqueda/reemplazo, resaltado de sintaxis y UTF-8. Reconoce .xml y aplica colores automáticamente.',
    claves: ['gedit: editor relacionado con GNOME', 'Funciones: pestañas, números de línea, buscar/reemplazar, resaltado, UTF-8', 'Reconoce la extensión .xml → esquema de colores automático', 'Los colores no forman parte del archivo: son ayuda visual del editor', 'Ampliable con complementos', 'Limitaciones: no es un IDE completo; depende de la distribución/escritorio', 'GNOME Text Editor es otra aplicación distinta que sustituye a gedit en algunas distros'],
    tags: ['gedit', 'linux', 'gnome', 'text editor', 'resaltado', 'pestañas', 'complementos'],
    contenido: `
<p><strong>gedit</strong> es un editor de texto relacionado con el entorno de escritorio <strong>GNOME</strong>. Mantiene una interfaz sencilla, pero incorpora funciones útiles para editar código y lenguajes de marcas: pestañas, números de línea, búsqueda y reemplazo, resaltado de sintaxis y compatibilidad con UTF-8.</p>
<p>Cuando gedit reconoce la extensión <code>.xml</code>, puede aplicar automáticamente un esquema de colores. Así resulta más fácil distinguir las etiquetas del contenido y detectar visualmente algunos errores.</p>
<pre><code>&lt;servicio puerto="443"&gt;
    HTTPS
&lt;/servicio&gt;</code></pre>
<p>En un editor con resaltado, <code>&lt;servicio&gt;</code>, el atributo <code>puerto</code> y el texto <code>HTTPS</code> se representan con colores diferentes. <strong>Los colores no forman parte del archivo</strong>: son una ayuda visual proporcionada por el editor.</p>
<h4>Ventajas</h4>
<ul>
  <li>Es sencillo y adecuado para el escritorio Linux.</li>
  <li>Reconoce la sintaxis de XML, HTML, Markdown y otros lenguajes.</li>
  <li>Permite trabajar con varios archivos mediante pestañas.</li>
  <li>Puede ampliarse mediante complementos.</li>
</ul>
<h4>Limitaciones</h4>
<ul>
  <li>No ofrece por defecto todas las funciones propias de un entorno de desarrollo.</li>
  <li>Su disponibilidad depende de la distribución y del escritorio instalados.</li>
</ul>
<div class="box info"><div class="box-title">gedit y Editor de texto de GNOME</div>
<p>Algunas distribuciones recientes incluyen <strong>Editor de texto de GNOME</strong> como editor predeterminado en lugar de gedit. Son aplicaciones diferentes, aunque ambas sirven para editar texto y ofrecen resaltado de sintaxis.</p></div>`
  },

  {
    id: 'lm-ud1-4-3',
    tipo: 'subtema',
    titulo: '4.3 Notepad++ y otras opciones',
    resumen: 'Notepad++: editor libre para Windows con resaltado, plegado, regex, codificación, macros y versión portátil. Otras opciones: Visual Studio Code, Kate, Sublime Text, Nano y Vim/Neovim.',
    claves: ['Notepad++: libre, Windows, más funciones que un editor básico sin ser un IDE', 'Funciones: resaltado, plegado de bloques, números de línea y guías de sangría, pestañas/vistas divididas, regex, codificación, macros y complementos', 'Ventajas: ligero, rápido, versión portátil', 'Limitaciones: nativo solo Windows; resaltado ≠ validador; cuidar complementos', 'VS Code: multiplataforma, proyectos, terminal, Git, extensiones → recomendado para el curso', 'Kate (KDE, multiplataforma) · Sublime Text (comercial) · Nano y Vim/Neovim (terminal, ideal por SSH)', 'Conocer un editor gráfico + lo básico de uno de terminal'],
    tags: ['notepad++', 'vscode', 'visual studio code', 'kate', 'sublime text', 'nano', 'vim', 'neovim', 'ssh', 'plegado', 'regex', 'portable'],
    contenido: `
<h4>Notepad++</h4>
<p><strong>Notepad++</strong> es un editor de texto y código <strong>libre para Windows</strong>. Está orientado a usuarios que necesitan más funciones que las disponibles en un editor básico, pero sin utilizar un entorno de desarrollo completo.</p>
<p>Entre sus funciones más útiles:</p>
<ul>
  <li>resaltado de sintaxis para numerosos lenguajes;</li>
  <li><strong>plegado de bloques</strong> para ocultar temporalmente partes del documento;</li>
  <li>números de línea y guías de sangría;</li>
  <li>edición de varios archivos en pestañas o vistas divididas;</li>
  <li>búsqueda y reemplazo mediante <strong>expresiones regulares</strong>;</li>
  <li>selección y conversión de la codificación;</li>
  <li>macros y complementos.</li>
</ul>
<p>En un documento XML extenso, el plegado permite ocultar elementos completos y concentrarse en la zona que se está modificando:</p>
<pre><code>&lt;inventario&gt;
    &lt;equipo id="srv01"&gt;
        &lt;nombre&gt;servidor-web&lt;/nombre&gt;
        &lt;estado&gt;activo&lt;/estado&gt;
    &lt;/equipo&gt;
    &lt;equipo id="srv02"&gt;
        &lt;nombre&gt;servidor-copias&lt;/nombre&gt;
        &lt;estado&gt;mantenimiento&lt;/estado&gt;
    &lt;/equipo&gt;
&lt;/inventario&gt;</code></pre>
<table>
<thead><tr><th>Ventajas</th><th>Limitaciones</th></tr></thead>
<tbody><tr>
<td><ul><li>Consume pocos recursos y se inicia rápidamente.</li><li>Facilita la lectura de documentos estructurados.</li><li>Incluye herramientas avanzadas de búsqueda y edición.</li><li>Puede utilizarse mediante una versión portátil.</li></ul></td>
<td><ul><li>Su versión nativa está dirigida a Windows.</li><li>El resaltado de sintaxis no sustituye a un validador XML.</li><li>Los complementos deben seleccionarse y mantenerse con cuidado.</li></ul></td>
</tr></tbody></table>

<h4>Otras opciones</h4>
<table>
<thead><tr><th>Editor</th><th>Descripción</th></tr></thead>
<tbody>
<tr><td><strong>Visual Studio Code</strong></td><td>Editor multiplataforma con gestión de proyectos, terminal, control de versiones y extensiones. <strong>Opción recomendable para el curso</strong> con HTML, XML, JSON, YAML y Markdown.</td></tr>
<tr><td><strong>Kate</strong></td><td>Editor libre (KDE) para Linux, Windows y macOS. Resaltado, panel de proyecto, terminal y complementos.</td></tr>
<tr><td><strong>Sublime Text</strong></td><td>Multiplataforma, rápido y con interfaz sencilla. Aplicación <em>comercial</em>, aunque puede evaluarse antes de adquirir licencia.</td></tr>
<tr><td><strong>Nano y Vim/Neovim</strong></td><td>Editores de <strong>terminal</strong>. Especialmente útiles para modificar archivos de configuración en un <strong>servidor remoto mediante SSH</strong>.</td></tr>
</tbody></table>
<div class="box tip"><div class="box-title">Consejo</div>
<p>No es necesario dominar todos estos editores. Lo importante es <strong>conocer uno con interfaz gráfica</strong> y <strong>aprender las operaciones básicas de algún editor de terminal</strong>.</p></div>`
  },

  {
    id: 'lm-ud1-ej1',
    tipo: 'ejercicio',
    titulo: 'Tarea 1 · Comparación de editores',
    resumen: 'Abrir un XML con errores en varios editores, localizar los fallos (<nombre>…</Nombre>, comillas sin cerrar), corregirlo como servidor.xml y razonar por qué el resaltado no equivale a validar.',
    claves: ['Objetivo: comparar ayudas de los editores y distinguir resaltado de validación', 'Error 1: <nombre> se cierra con </Nombre> (case-sensitive)', 'Error 2: activo="si sin cerrar las comillas', 'Entrega: servidor.xml corregido + respuestas a las actividades 5 y 6'],
    tags: ['tarea', 'ejercicio', 'editores', 'errores', 'servidor.xml', 'resaltado', 'validacion'],
    contenido: `
<h4>Objetivo</h4>
<p>Comparar las ayudas que ofrecen distintos editores al trabajar con un documento XML y <strong>distinguir el resaltado de sintaxis de la validación</strong>.</p>
<h4>Documento de partida</h4>
<p>Copia este documento <em>incorrecto</em> y ábrelo con varios de los editores estudiados:</p>
<pre><code>&lt;servidor&gt;
    &lt;nombre&gt;servidor-web&lt;/Nombre&gt;
    &lt;estado activo="si&gt;disponible&lt;/estado&gt;
&lt;/servidor&gt;</code></pre>
<h4>Actividades</h4>
<ol>
  <li>Observa qué partes colorea cada editor.</li>
  <li>Localiza la diferencia entre <code>&lt;nombre&gt;</code> y <code>&lt;/Nombre&gt;</code>.</li>
  <li>Busca el atributo cuyo valor no tiene las comillas correctamente cerradas.</li>
  <li>Corrige todos los errores y guarda el resultado como <code>servidor.xml</code>.</li>
  <li>Anota qué editor facilita más la detección de cada problema.</li>
  <li>Explica por qué el resaltado no equivale a validar el documento.</li>
</ol>
<h4>Entrega</h4>
<p>Entrega el archivo <code>servidor.xml</code> corregido y un breve documento con las respuestas a las actividades 5 y 6.</p>
<details><summary>Solución orientativa</summary>
<p>Errores del documento:</p>
<ul>
  <li><strong>Línea 2</strong>: se abre <code>&lt;nombre&gt;</code> y se cierra con <code>&lt;/Nombre&gt;</code>. XML distingue mayúsculas y minúsculas, así que los nombres no coinciden.</li>
  <li><strong>Línea 3</strong>: el atributo <code>activo="si</code> no cierra las comillas. El procesador interpreta el resto de la línea como parte del valor.</li>
</ul>
<p>Documento corregido:</p>
<pre><code>&lt;servidor&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;estado activo="si"&gt;disponible&lt;/estado&gt;
&lt;/servidor&gt;</code></pre>
<p><strong>Resaltado ≠ validación</strong>: el coloreado solo aplica reglas visuales por patrones (todo lo que va entre <code>&lt;</code> y <code>&gt;</code> se pinta como etiqueta). No construye el árbol del documento ni comprueba que cada apertura tenga su cierre, que los nombres coincidan o que las comillas estén emparejadas. Eso solo lo hace un <strong>analizador/validador XML</strong> (por ejemplo, un navegador o XML Copy Editor). Un editor con buen resaltado (Notepad++, gedit, VS Code) ayuda a <em>ver</em> el problema de las comillas porque el color «se desborda» hasta la siguiente comilla; el Bloc de notas no ofrece esa pista.</p>
</details>`
  },

  /* ---------------- 5. Documentos bien formados ---------------- */
  {
    id: 'lm-ud1-5',
    tipo: 'tema',
    titulo: '5. Elaboración de documentos bien formados',
    resumen: 'Un XML está bien formado cuando respeta todas las reglas sintácticas básicas; así cualquier procesador puede construir su árbol sin ambigüedad. Lista de comprobación, ejemplo completo y cómo comprobarlo (navegador, XML Copy Editor).',
    claves: ['Bien formado = cumple la sintaxis general de XML', 'El procesador construye un árbol en memoria; una etiqueta sin cerrar es un ERROR FATAL: se detiene', 'Ventajas: interpretación uniforme, intercambio previsible, localizar errores, evitar estructuras ambiguas', 'Bien formado ≠ válido: válido además cumple una DTD o esquema', 'Checklist: declaración, una raíz, marcado correcto, atributos con comillas, nombres permitidos, comentarios fuera de las etiquetas'],
    tags: ['bien formado', 'well-formed', 'valido', 'dtd', 'esquema', 'xml', 'procesador', 'error fatal'],
    links: ['lm-ud1-5-1', 'lm-ud1-5-2', 'lm-ud1-5-3', 'lm-ud1-ej2'],
    contenido: `
<div class="box def"><div class="box-title">Documento bien formado</div>
<p>Un documento XML está <strong>bien formado</strong> cuando respeta <strong>todas las reglas sintácticas básicas</strong> de XML. Esta condición permite que cualquier procesador XML pueda construir su estructura sin tener que adivinar qué quiso escribir el autor.</p></div>
<p>Las etiquetas, los atributos, el anidamiento y la raíz ya se presentaron en el apartado 3. Aquí los reuniremos como una <strong>lista de comprobación</strong> y los aplicaremos a un documento completo.</p>

<h4>¿Por qué debe estar bien formado?</h4>
<p>Un procesador XML lee el documento y construye en memoria una estructura de <strong>árbol</strong>. Para hacerlo necesita identificar sin ambigüedad dónde empieza y termina cada elemento, qué elementos dependen de otros y qué atributos les pertenecen.</p>
<p>Si encuentra, por ejemplo, una etiqueta sin cerrar, no puede determinar con seguridad qué contenido pertenece a cada elemento. La especificación XML trata estas situaciones como <strong>errores fatales</strong>: el procesador debe comunicar el problema y <strong>no puede continuar</strong> procesando el documento como si fuese correcto.</p>
<p>Esta exigencia aporta varias ventajas:</p>
<ul>
  <li>evita que distintas aplicaciones interpreten de manera diferente el mismo archivo;</li>
  <li>permite intercambiar datos entre sistemas con resultados previsibles;</li>
  <li>facilita la localización de errores;</li>
  <li>impide trabajar con una estructura incompleta o ambigua.</li>
</ul>
<div class="box warn"><div class="box-title">Bien formado no significa válido</div>
<p>Un documento <strong>bien formado</strong> cumple la sintaxis general de XML. Un documento <strong>válido</strong>, además, cumple las reglas particulares definidas en una <strong>DTD</strong> o en un <strong>esquema</strong>, por ejemplo qué elementos son obligatorios o en qué orden deben aparecer. La validez se estudiará con más profundidad posteriormente.</p></div>

<h4>Contenido del apartado</h4>
<ol>
  <li>Lista de comprobación (6 reglas)</li>
  <li>Ejemplo completo bien formado</li>
  <li>Cómo comprobar el documento: navegador y XML Copy Editor</li>
  <li>Práctica: provocar y localizar errores</li>
</ol>`
  },

  {
    id: 'lm-ud1-5-1',
    tipo: 'subtema',
    titulo: '5.1 Lista de comprobación de un XML bien formado',
    resumen: 'Seis reglas: declaración XML al principio, una única raíz con jerarquía coherente, marcado y delimitación correctos, atributos entre comillas y sin repetir, nombres permitidos (sin espacios, no empezar por número, sin xml ni :), comentarios fuera de otras marcas.',
    claves: ['1. Declaración <?xml version="1.0" encoding="UTF-8"?> al principio (recomendable, no obligatoria)', '2. Una sola raíz; hijos dentro de su padre', '3. Apertura y cierre con el mismo nombre, anidados en orden, respetando mayúsculas', '4. Atributos: valor entre comillas; sin repetir en la misma etiqueta', '5. Nombres: empiezan por letra o _; luego letras, números, -, ., _; sin espacios; no empezar por número; reservados los que empiezan por xml; no usar :', '6. Comentarios <!-- --> fuera de las etiquetas; no pueden contener --'],
    tags: ['checklist', 'declaracion', 'raiz', 'atributos', 'nombres', 'comentarios', 'xml', 'reservado', 'pcdata'],
    contenido: `
<h4>1 · Declaración XML</h4>
<p>El W3C indica que los documentos XML <em>deberían</em> comenzar con una declaración que identifique la versión utilizada:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</code></pre>
<p><code>version="1.0"</code> indica la versión de XML y <code>encoding="UTF-8"</code> declara la codificación del archivo. <strong>Si se incluye, debe aparecer al principio</strong> del documento. La declaración es recomendable, pero su ausencia no hace que todos los documentos XML sean automáticamente incorrectos.</p>

<h4>2 · Jerarquía coherente y una única raíz</h4>
<p>Todo documento debe tener <strong>un solo elemento raíz</strong> que contenga el resto de la estructura. Los elementos hijos deben quedar dentro de su elemento padre.</p>
<pre><code>&lt;inventario&gt;
    &lt;equipo&gt;
        &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;/equipo&gt;
&lt;/inventario&gt;</code></pre>
<p><code>inventario</code> es la raíz, <code>equipo</code> es hijo de <code>inventario</code> y <code>nombre</code> es hijo de <code>equipo</code>.</p>

<h4>3 · Marcado y delimitación correctos</h4>
<p>Las etiquetas de apertura y cierre deben tener el <strong>mismo nombre</strong> y estar <strong>anidadas en el orden adecuado</strong>:</p>
<table>
<thead><tr><th>Correcto</th><th>Incorrecto</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
&lt;/equipo&gt;</code></pre></td>
<td><pre><code>&lt;equipo&gt;
    &lt;nombre&gt;servidor-web&lt;/equipo&gt;
&lt;/nombre&gt;</code></pre></td>
</tr></tbody></table>
<p>XML distingue entre mayúsculas y minúsculas. <code>&lt;nombre&gt;</code> y <code>&lt;Nombre&gt;</code> son etiquetas diferentes, por lo que también deben coincidir al abrir y cerrar.</p>

<h4>4 · Atributos correctamente escritos</h4>
<p>Los atributos aportan información adicional o <em>metadatos</em> sobre un elemento. Sus valores deben aparecer <strong>entre comillas simples o dobles</strong>:</p>
<pre><code>&lt;equipo id="srv01" entorno="produccion"&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
&lt;/equipo&gt;</code></pre>
<p>Cada atributo debe tener un nombre y <strong>no puede repetirse</strong> dentro de la misma etiqueta.</p>
<div class="box danger"><div class="box-title">Incorrecto</div>
<pre><code>&lt;equipo id=srv01 id="principal" /&gt;</code></pre>
<p class="muted">Dos fallos: valor sin comillas y atributo <code>id</code> repetido.</p></div>

<h4>5 · Nombres permitidos</h4>
<p>Los nombres de elementos y atributos <strong>no pueden contener espacios ni comenzar por un número</strong>. Como regla práctica, pueden comenzar por una <strong>letra</strong> o por <code>_</code> y continuar con letras, números, guiones, puntos o guiones bajos.</p>
<table>
<thead><tr><th>Nombres adecuados</th><th>Nombres incorrectos</th></tr></thead>
<tbody><tr>
<td><pre><code>&lt;servidor_web&gt;
    &lt;ip-principal&gt;192.168.10.20&lt;/ip-principal&gt;
&lt;/servidor_web&gt;</code></pre></td>
<td><pre><code>&lt;1servidor /&gt;
&lt;direccion ip /&gt;</code></pre></td>
</tr></tbody></table>
<div class="box warn"><div class="box-title">Nombres reservados</div>
<p>Los nombres que empiezan por cualquier combinación de las letras <code>xml</code>, como <code>xmlDatos</code> o <code>XMLconfiguracion</code>, están <strong>reservados</strong> para su estandarización. Para evitar conflictos, tampoco se debe utilizar <code>:</code> al crear nombres propios, ya que se reserva para trabajar con <strong>espacios de nombres</strong>.</p></div>

<h4>6 · Comentarios fuera de otras marcas</h4>
<p>Los comentarios comienzan con <code>&lt;!--</code> y terminan con <code>--&gt;</code>. Pueden situarse antes o después de un elemento, o entre los elementos de su contenido:</p>
<pre><code>&lt;!-- Equipo que publica la aplicación web --&gt;
&lt;equipo id="srv01"&gt;
    &lt;nombre&gt;servidor-web&lt;/nombre&gt;
    &lt;!-- La dirección pertenece a la red interna --&gt;
    &lt;ip&gt;192.168.10.20&lt;/ip&gt;
&lt;/equipo&gt;</code></pre>
<p>Un comentario <strong>no puede introducirse dentro de una etiqueta</strong>, porque interrumpiría su marcado:</p>
<div class="box danger"><div class="box-title">Incorrecto</div>
<pre><code>&lt;equipo &lt;!-- servidor principal --&gt; id="srv01"&gt;</code></pre></div>
<p>Además, el texto de un comentario <strong>no puede contener la secuencia <code>--</code></strong>.</p>`
  },

  {
    id: 'lm-ud1-5-2',
    tipo: 'subtema',
    titulo: '5.2 Ejemplo completo bien formado',
    resumen: 'Inventario del aula de sistemas que reúne todas las reglas: declaración, comentario, raíz única con atributo fecha, equipo con id y entorno, elemento vacío <sistema … />, servicios anidados.',
    claves: ['Comienza con declaración XML', 'Única raíz: inventario (con atributo fecha)', 'Jerarquía coherente: inventario > equipo > nombre, ip, sistema, servicios > servicio', 'Todas las etiquetas cerradas y bien anidadas; elemento vacío <sistema operativo="Debian" version="13" />', 'Respeta mayúsculas/minúsculas', 'Todos los valores de atributo entre comillas', 'Comentario fuera de las etiquetas'],
    tags: ['ejemplo', 'inventario', 'debian', 'bien formado', 'xml'],
    contenido: `
<p>El siguiente documento reúne las reglas anteriores:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!-- Inventario simplificado del aula de sistemas --&gt;
&lt;inventario fecha="2026-09-02"&gt;
    &lt;equipo id="srv01" entorno="produccion"&gt;
        &lt;nombre&gt;servidor-web&lt;/nombre&gt;
        &lt;ip&gt;192.168.10.20&lt;/ip&gt;
        &lt;sistema operativo="Debian" version="13" /&gt;
        &lt;servicios&gt;
            &lt;servicio puerto="80"&gt;HTTP&lt;/servicio&gt;
            &lt;servicio puerto="443"&gt;HTTPS&lt;/servicio&gt;
        &lt;/servicios&gt;
    &lt;/equipo&gt;
&lt;/inventario&gt;</code></pre>
<p>El documento está bien formado porque:</p>
<ul>
  <li>comienza con una <strong>declaración XML</strong>;</li>
  <li>contiene una <strong>única raíz</strong>, <code>inventario</code>;</li>
  <li>conserva una <strong>jerarquía coherente</strong>;</li>
  <li>todas las etiquetas están <strong>cerradas y correctamente anidadas</strong> (incluido el elemento vacío <code>&lt;sistema … /&gt;</code>);</li>
  <li>respeta las <strong>mayúsculas y minúsculas</strong>;</li>
  <li>todos los valores de los atributos están <strong>entre comillas</strong>;</li>
  <li>el <strong>comentario</strong> se encuentra fuera de las etiquetas.</li>
</ul>
<h4>Árbol resultante</h4>
<pre><code>inventario [fecha="2026-09-02"]
└── equipo [id="srv01", entorno="produccion"]
    ├── nombre = "servidor-web"
    ├── ip = "192.168.10.20"
    ├── sistema [operativo="Debian", version="13"]   (vacío)
    └── servicios
        ├── servicio [puerto="80"]  = "HTTP"
        └── servicio [puerto="443"] = "HTTPS"</code></pre>`
  },

  {
    id: 'lm-ud1-5-3',
    tipo: 'subtema',
    titulo: '5.3 Cómo comprobar el documento',
    resumen: 'Con un navegador (Firefox, Chrome, Edge): comprobación rápida de formación, muestra error y línea aproximada. Con XML Copy Editor: aplicación especializada que además valida con DTD, XML Schema o RELAX NG. Cuidado con validadores online y datos sensibles.',
    claves: ['Navegador: abrir el .xml → si está bien formado muestra contenido/estructura; si no, mensaje de error con posición aproximada', 'El navegador NO valida contra DTD/esquema ni comprueba vocabularios', 'XML Copy Editor: resaltado, completado, comprobación; valida con DTD, XML Schema, RELAX NG (xml-copy-editor.sourceforge.io)', 'Validadores online: no usar con configuraciones reales, credenciales ni IP internas (se envían a un servicio externo)', 'Para clase: jsonformatter.org/xml-editor o xml.onlineviewer.net'],
    tags: ['comprobar', 'navegador', 'firefox', 'chrome', 'edge', 'xml copy editor', 'validador', 'dtd', 'xml schema', 'relax ng', 'privacidad', 'online'],
    contenido: `
<h4>Con un navegador</h4>
<ol>
  <li>Descarga o copia el ejemplo en un archivo con extensión <code>.xml</code>.</li>
  <li>Ábrelo con Firefox, Chrome, Edge…</li>
  <li>Si está bien formado, el navegador mostrará su contenido o su estructura.</li>
  <li>Modifica <code>&lt;/nombre&gt;</code> por <code>&lt;/Nombre&gt;</code> y vuelve a cargar el archivo.</li>
  <li>El navegador mostrará un <strong>mensaje de error</strong> e indicará aproximadamente dónde se interrumpió el análisis.</li>
</ol>
<div class="box info"><div class="box-title">Alcance del navegador</div>
<p>El navegador es útil para una <strong>comprobación rápida de formación</strong>, pero <strong>no garantiza</strong> que el contenido cumpla un vocabulario concreto ni valida normalmente el documento contra una DTD o un esquema XML.</p></div>

<h4>Con XML Copy Editor</h4>
<p><strong>XML Copy Editor</strong> es una aplicación de escritorio especializada en XML. Ofrece resaltado, completado y comprobación de documentos, y puede <strong>validar mediante DTD, XML Schema o RELAX NG</strong>. Disponible en <a href="https://xml-copy-editor.sourceforge.io/" target="_blank" rel="noopener">xml-copy-editor.sourceforge.io</a>.</p>
<ol>
  <li>Abre <code>inventario-bien-formado.xml</code> en XML Copy Editor.</li>
  <li>Ejecuta la opción de <strong>comprobar que el documento está bien formado</strong>.</li>
  <li>Observa que no se muestran errores.</li>
  <li>Elimina una comilla o cambia el nombre de una etiqueta de cierre.</li>
  <li>Repite la comprobación y utiliza la <strong>línea indicada</strong> para localizar el error.</li>
</ol>

<div class="box danger"><div class="box-title">Privacidad en los validadores en línea</div>
<p>También existen editores y comprobadores XML en la Web. <strong>No deben utilizarse con configuraciones reales, credenciales, direcciones internas ni otros datos sensibles</strong>, porque el contenido se envía a un servicio externo.</p></div>
<p>No obstante, aunque no se deben usar esos servicios dentro de una empresa privada o administración pública, para los ejemplos de clase se puede hacer uso de herramientas online como <a href="https://jsonformatter.org/xml-editor" target="_blank" rel="noopener">jsonformatter.org/xml-editor</a> o <a href="https://xml.onlineviewer.net/" target="_blank" rel="noopener">xml.onlineviewer.net</a>.</p>

<table>
<thead><tr><th>Herramienta</th><th>Comprueba bien formado</th><th>Valida (DTD/esquema)</th><th>Observaciones</th></tr></thead>
<tbody>
<tr><td>Navegador</td><td>Sí</td><td>No</td><td>Rápido; indica línea aproximada</td></tr>
<tr><td>XML Copy Editor</td><td>Sí</td><td>Sí (DTD, XSD, RELAX NG)</td><td>Escritorio, especializado</td></tr>
<tr><td>Validadores online</td><td>Sí</td><td>Según servicio</td><td>Solo para ejemplos sin datos sensibles</td></tr>
</tbody></table>`
  },

  {
    id: 'lm-ud1-ej2',
    tipo: 'ejercicio',
    titulo: 'Práctica · Romper y arreglar un XML bien formado',
    resumen: 'A partir del inventario bien formado, introducir errores uno a uno (cierre distinto, comilla eliminada, segunda raíz, comentario dentro de etiqueta) y observar cómo reaccionan el navegador y XML Copy Editor.',
    claves: ['Cada error debe provocar un error fatal en el procesador', 'Anotar el mensaje y la línea que indica cada herramienta', 'Volver a dejar el documento bien formado tras cada prueba'],
    tags: ['practica', 'ejercicio', 'errores', 'navegador', 'xml copy editor', 'bien formado'],
    contenido: `
<p>Partiendo del <strong>ejemplo completo bien formado</strong> del apartado 5.2 (guárdalo como <code>inventario-bien-formado.xml</code>), realiza estas pruebas y anota en cada caso qué mensaje da el navegador y qué línea señala XML Copy Editor:</p>
<ol>
  <li>Cambia <code>&lt;/nombre&gt;</code> por <code>&lt;/Nombre&gt;</code>.</li>
  <li>Elimina la comilla final de <code>puerto="80"</code>.</li>
  <li>Añade un segundo <code>&lt;inventario&gt;…&lt;/inventario&gt;</code> después del primero.</li>
  <li>Escribe un comentario dentro de una etiqueta: <code>&lt;equipo &lt;!-- principal --&gt; id="srv01"&gt;</code>.</li>
  <li>Renombra <code>&lt;ip&gt;</code> como <code>&lt;1ip&gt;</code>.</li>
  <li>Cambia <code>&lt;servicios&gt;</code> por <code>&lt;xmlServicios&gt;</code> (¿da error el navegador? ¿por qué conviene evitarlo igualmente?).</li>
</ol>
<details><summary>Qué debería ocurrir</summary>
<table>
<thead><tr><th>Prueba</th><th>Regla incumplida</th><th>Resultado esperado</th></tr></thead>
<tbody>
<tr><td>1</td><td>Marcado: nombres de apertura y cierre no coinciden (case-sensitive)</td><td>Error fatal («etiqueta no coincidente»)</td></tr>
<tr><td>2</td><td>Atributos: valor sin comilla de cierre</td><td>Error fatal; el analizador «se traga» el resto hasta la siguiente comilla</td></tr>
<tr><td>3</td><td>Unicidad de la raíz</td><td>Error fatal: «basura después del elemento raíz»</td></tr>
<tr><td>4</td><td>Comentario dentro de una etiqueta</td><td>Error fatal en la etiqueta <code>equipo</code></td></tr>
<tr><td>5</td><td>Nombres: no pueden empezar por número</td><td>Error fatal</td></tr>
<tr><td>6</td><td>Nombres reservados que empiezan por <code>xml</code></td><td>Muchos procesadores lo aceptan, pero está reservado para estandarización: debe evitarse</td></tr>
</tbody></table>
</details>`
  },

  /* ---------------- 6. Espacios de nombres ---------------- */
  {
    id: 'lm-ud1-6',
    tipo: 'tema',
    titulo: '6. Utilización de espacios de nombres',
    resumen: 'Un espacio de nombres XML identifica a qué vocabulario pertenece cada elemento o atributo. Se declara con xmlns, se identifica por una URI y se usa mediante un prefijo. Evita colisiones al combinar vocabularios (inventario vs incidencias, SVG).',
    claves: ['Espacio de nombres: identifica a qué vocabulario pertenece un elemento o atributo', 'Se identifica con una URI (identificador único y estable; no tiene que ser una web)', 'Prefijo:nombreLocal → inv:nombre (inv = prefijo, nombre = nombre local)', 'Declaración: xmlns:prefijo="URI" en un elemento (normalmente la raíz)', 'El procesador identifica cada elemento por URI + nombre local; los prefijos son intercambiables', 'xmlns sin prefijo = espacio de nombres por defecto (ej. SVG)', 'Sirven para: combinar vocabularios sin colisiones, indicar procedencia, procesar solo lo conocido, reutilizar estándares'],
    tags: ['espacios de nombres', 'namespaces', 'xmlns', 'prefijo', 'uri', 'urn', 'svg', 'colision', 'vocabulario'],
    links: ['lm-ud1-6-1', 'lm-ud1-6-2', 'lm-ud1-ej3'],
    contenido: `
<div class="box def"><div class="box-title">Espacio de nombres XML</div>
<p>Permite <strong>identificar a qué vocabulario pertenece</strong> un elemento o atributo. Es especialmente útil cuando un documento combina información de aplicaciones diferentes que utilizan <strong>etiquetas con el mismo nombre</strong>.</p></div>
<p>Cada espacio de nombres se identifica mediante una <strong>URI</strong> y puede asociarse a un <strong>prefijo</strong> corto:</p>
<pre><code>&lt;inv:nombre&gt;servidor-web&lt;/inv:nombre&gt;</code></pre>
<p>Aquí, <code>inv</code> es el <strong>prefijo</strong> y <code>nombre</code> es el <strong>nombre local</strong> del elemento.</p>
<div class="box info"><div class="box-title">La URI funciona como identificador</div>
<p>La URI <strong>no tiene por qué conducir a una página web</strong>. Su función principal es proporcionar un identificador <strong>único y estable</strong> para el vocabulario.</p></div>

<h4>¿Para qué sirven?</h4>
<ul>
  <li><strong>Combinar vocabularios</strong> XML sin colisiones.</li>
  <li>Indicar la <strong>procedencia</strong> de cada elemento.</li>
  <li>Facilitar que una aplicación <strong>procese solo el vocabulario que conoce</strong>.</li>
  <li><strong>Reutilizar estándares</strong> junto con vocabularios propios.</li>
</ul>

<h4>Espacio de nombres predeterminado: el caso de SVG</h4>
<p>SVG ofrece un ejemplo habitual de espacio de nombres <strong>por defecto</strong>:</p>
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" width="100" height="60"&gt;
    &lt;circle cx="30" cy="30" r="20" fill="green" /&gt;
&lt;/svg&gt;</code></pre>
<p>Al declararse con <code>xmlns</code> <strong>y sin prefijo</strong>, el espacio de nombres se aplica por defecto a los elementos contenidos en <code>svg</code>.</p>

<h4>Contenido del apartado</h4>
<ol>
  <li>Documento 1: el problema sin espacios de nombres</li>
  <li>Documento 2: la solución con espacios de nombres</li>
  <li>Ejercicio: combinar vocabularios</li>
</ol>`
  },

  {
    id: 'lm-ud1-6-1',
    tipo: 'subtema',
    titulo: '6.1 El problema sin espacios de nombres',
    resumen: 'Un informe combina un inventario y un sistema de incidencias, ambos con <nombre> y <estado>. El documento está bien formado, pero una aplicación podría confundir el estado operativo del servidor con el estado de tramitación de la incidencia.',
    claves: ['Dos vocabularios distintos usan las mismas etiquetas: nombre y estado', 'El documento está bien formado, pero es ambiguo', 'Riesgo: confundir estado operativo (activo) con estado de tramitación (abierta)'],
    tags: ['colision', 'ambiguedad', 'informe', 'inventario', 'incidencias', 'sin namespaces'],
    contenido: `
<p>Supongamos que una aplicación reúne información de un <strong>inventario</strong> y de un sistema de <strong>incidencias</strong>. Ambos utilizan las etiquetas <code>nombre</code> y <code>estado</code>:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;informe&gt;
    &lt;servidor&gt;
        &lt;nombre&gt;servidor-web&lt;/nombre&gt;
        &lt;estado&gt;activo&lt;/estado&gt;
    &lt;/servidor&gt;
    &lt;incidencia&gt;
        &lt;nombre&gt;Error de conexión&lt;/nombre&gt;
        &lt;estado&gt;abierta&lt;/estado&gt;
    &lt;/incidencia&gt;
&lt;/informe&gt;</code></pre>
<p>El documento <strong>está bien formado</strong>, pero las etiquetas no indican por sí mismas a qué vocabulario pertenecen. Una aplicación podría <strong>confundir</strong> el estado operativo de un servidor (<code>activo</code>) con el estado de tramitación de una incidencia (<code>abierta</code>).</p>
<div class="box warn"><div class="box-title">Bien formado, pero ambiguo</div>
<p>La sintaxis es correcta; el problema es <strong>semántico</strong>: dos <code>&lt;estado&gt;</code> con significados distintos y ninguna marca que los diferencie.</p></div>`
  },

  {
    id: 'lm-ud1-6-2',
    tipo: 'subtema',
    titulo: '6.2 La solución con espacios de nombres',
    resumen: 'Se declara cada vocabulario con xmlns:inv="urn:lmsgi:inventario" y xmlns:inc="urn:lmsgi:incidencias" en la raíz y se prefijan los elementos: inv:estado es el estado operativo, inc:estado el de tramitación. El procesador identifica cada elemento por URI + nombre local.',
    claves: ['xmlns:inv="urn:lmsgi:inventario" → prefijo inv → Inventario de sistemas', 'xmlns:inc="urn:lmsgi:incidencias" → prefijo inc → Gestión de incidencias', 'inv:estado = estado operativo; inc:estado = estado de tramitación', 'Identidad real = URI + nombre local; el prefijo es solo un alias legible', 'Los prefijos podrían cambiarse si siguen asociados a las mismas URI'],
    tags: ['xmlns', 'prefijo', 'urn', 'uri', 'inv', 'inc', 'declaracion', 'con namespaces'],
    contenido: `
<p>En el segundo documento se identifica cada vocabulario mediante una declaración <code>xmlns</code>:</p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;informe
    xmlns:inv="urn:lmsgi:inventario"
    xmlns:inc="urn:lmsgi:incidencias"&gt;
    &lt;inv:servidor&gt;
        &lt;inv:nombre&gt;servidor-web&lt;/inv:nombre&gt;
        &lt;inv:estado&gt;activo&lt;/inv:estado&gt;
    &lt;/inv:servidor&gt;
    &lt;inc:incidencia&gt;
        &lt;inc:nombre&gt;Error de conexión&lt;/inc:nombre&gt;
        &lt;inc:estado&gt;abierta&lt;/inc:estado&gt;
    &lt;/inc:incidencia&gt;
&lt;/informe&gt;</code></pre>
<p>Las declaraciones relacionan los prefijos con sus identificadores:</p>
<table>
<thead><tr><th>Declaración</th><th>Prefijo</th><th>Vocabulario</th></tr></thead>
<tbody>
<tr><td><code>xmlns:inv="urn:lmsgi:inventario"</code></td><td><code>inv</code></td><td>Inventario de sistemas</td></tr>
<tr><td><code>xmlns:inc="urn:lmsgi:incidencias"</code></td><td><code>inc</code></td><td>Gestión de incidencias</td></tr>
</tbody></table>
<p>Ahora <strong>no existe ambigüedad</strong>:</p>
<ul>
  <li><code>inv:estado</code> es el estado <strong>operativo</strong> de un servidor.</li>
  <li><code>inc:estado</code> es el estado de <strong>tramitación</strong> de una incidencia.</li>
</ul>
<div class="box tip"><div class="box-title">Cómo lo ve el procesador</div>
<p>El procesador identifica realmente cada elemento mediante la <strong>combinación de la URI y el nombre local</strong>. Los prefijos facilitan la lectura y <strong>podrían cambiarse por otros</strong> si continuaran asociados a las mismas URI. Es decir, <code>{urn:lmsgi:inventario}estado</code> y <code>{urn:lmsgi:incidencias}estado</code> son dos elementos diferentes.</p></div>

<h4>Anatomía de un nombre cualificado</h4>
<pre><code>xmlns:inv="urn:lmsgi:inventario"
      ───            ─────────────────────
    prefijo                 URI (identificador del vocabulario)

&lt;inv:estado&gt;
  ─── ──────
prefijo  nombre local</code></pre>`
  },

  {
    id: 'lm-ud1-ej3',
    tipo: 'ejercicio',
    titulo: 'Ejercicio · Combinar vocabularios con espacios de nombres',
    resumen: 'Construir un documento XML que combine el inventario de equipos con un vocabulario propio de copias de seguridad, usando prefijos y URIs, e incrustar un SVG con su espacio de nombres por defecto.',
    claves: ['Declarar dos prefijos en la raíz con URIs urn:', 'Cada elemento lleva el prefijo de su vocabulario', 'SVG usa espacio de nombres por defecto (xmlns sin prefijo)', 'Comprobar que sigue bien formado en el navegador'],
    tags: ['ejercicio', 'namespaces', 'xmlns', 'svg', 'urn', 'practica'],
    contenido: `
<h4>Enunciado</h4>
<ol>
  <li>Crea <code>informe-copias.xml</code> con raíz <code>&lt;informe&gt;</code>.</li>
  <li>Declara el vocabulario de inventario con prefijo <code>inv</code> y URI <code>urn:lmsgi:inventario</code>, y un vocabulario de copias de seguridad con prefijo <code>bak</code> y URI <code>urn:lmsgi:copias</code>.</li>
  <li>Describe un servidor (<code>inv:servidor</code> con <code>inv:nombre</code> e <code>inv:estado</code>) y una copia (<code>bak:copia</code> con <code>bak:nombre</code>, <code>bak:fecha</code> y <code>bak:estado</code>).</li>
  <li>Añade dentro del informe un pequeño <code>&lt;svg&gt;</code> con un círculo verde, usando el espacio de nombres por defecto de SVG.</li>
  <li>Ábrelo en el navegador y comprueba que está bien formado. ¿Qué pasa si eliminas la declaración <code>xmlns:bak</code>?</li>
</ol>
<details><summary>Solución</summary>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;informe
    xmlns:inv="urn:lmsgi:inventario"
    xmlns:bak="urn:lmsgi:copias"&gt;
    &lt;inv:servidor&gt;
        &lt;inv:nombre&gt;servidor-web&lt;/inv:nombre&gt;
        &lt;inv:estado&gt;activo&lt;/inv:estado&gt;
    &lt;/inv:servidor&gt;
    &lt;bak:copia&gt;
        &lt;bak:nombre&gt;copia-diaria&lt;/bak:nombre&gt;
        &lt;bak:fecha&gt;2026-09-02&lt;/bak:fecha&gt;
        &lt;bak:estado&gt;completada&lt;/bak:estado&gt;
    &lt;/bak:copia&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"&gt;
        &lt;circle cx="30" cy="30" r="20" fill="green" /&gt;
    &lt;/svg&gt;
&lt;/informe&gt;</code></pre>
<p>Si se elimina <code>xmlns:bak</code>, el prefijo <code>bak</code> queda <strong>sin declarar</strong> y el procesador comunica un error de espacio de nombres: un prefijo debe estar siempre asociado a una URI antes de usarse. Observa también que <code>inv:estado</code> y <code>bak:estado</code> comparten nombre local pero son elementos distintos gracias a sus URI.</p>
</details>`
  },

  /* ---------------- Glosario ---------------- */
  {
    id: 'lm-ud1-glosario',
    tipo: 'glosario',
    titulo: 'Glosario · UD1 Lenguajes de marcas',
    resumen: 'Términos clave de la unidad: marca, etiqueta, elemento, atributo, raíz, anidamiento, SGML, metalenguaje, bien formado, válido, DTD, espacio de nombres, prefijo, URI, texto plano, UTF-8, interoperabilidad…',
    claves: ['Marca / etiqueta / elemento / atributo', 'Raíz, anidamiento, padre-hijo-hermano', 'SGML, metalenguaje, ISO 8879:1986', 'Bien formado vs válido (DTD, esquema)', 'Espacio de nombres, xmlns, prefijo, URI/URN', 'Texto plano, UTF-8, BOM, ASCII', 'Interoperabilidad, independencia, flexibilidad'],
    tags: ['glosario', 'definiciones', 'vocabulario', 'terminos'],
    contenido: `
<table>
<thead><tr><th>Término</th><th>Definición</th></tr></thead>
<tbody>
<tr><td><strong>Marca</strong></td><td>Señal incluida en un documento para indicar la función o el significado de una parte de su contenido. Distingue los datos de las indicaciones que los describen.</td></tr>
<tr><td><strong>Etiqueta</strong></td><td>Tipo de marca que identifica el comienzo (<code>&lt;x&gt;</code>) o el final (<code>&lt;/x&gt;</code>) de un elemento. En XML/HTML va entre <code>&lt;</code> y <code>&gt;</code>.</td></tr>
<tr><td><strong>Elemento</strong></td><td>Etiqueta de apertura + contenido + etiqueta de cierre. Puede estar vacío: <code>&lt;x /&gt;</code>.</td></tr>
<tr><td><strong>Contenido</strong></td><td>Información entre las etiquetas de apertura y cierre: texto, otros elementos o nada (elemento vacío).</td></tr>
<tr><td><strong>Atributo</strong></td><td>Par <code>nombre="valor"</code> dentro de la etiqueta de apertura que añade información al elemento. Valor entre comillas; no se repite.</td></tr>
<tr><td><strong>Elemento raíz</strong></td><td>Elemento único que contiene a todos los demás en un documento XML.</td></tr>
<tr><td><strong>Declaración XML</strong></td><td><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</code>. Indica versión y codificación. Va al principio; no es la raíz.</td></tr>
<tr><td><strong>Anidamiento</strong></td><td>Inclusión de elementos dentro de otros, formando un árbol (padre, hijo, hermanos). El último que se abre es el primero que se cierra.</td></tr>
<tr><td><strong>Case-sensitive</strong></td><td>Sensible a mayúsculas y minúsculas. XML lo es (<code>&lt;Equipo&gt;</code> ≠ <code>&lt;equipo&gt;</code>); HTML no.</td></tr>
<tr><td><strong>Comentario</strong></td><td><code>&lt;!-- texto --&gt;</code>. Fuera de las etiquetas; no puede contener <code>--</code>.</td></tr>
<tr><td><strong>Documento bien formado</strong></td><td>Documento XML que cumple todas las reglas sintácticas básicas (una raíz, cierre, anidamiento, comillas, nombres, case).</td></tr>
<tr><td><strong>Documento válido</strong></td><td>Documento bien formado que además cumple las reglas de una DTD o esquema (elementos obligatorios, orden, tipos).</td></tr>
<tr><td><strong>DTD</strong></td><td><em>Document Type Definition</em>: define qué elementos y atributos admite un tipo de documento (<code>&lt;!ELEMENT …&gt;</code>).</td></tr>
<tr><td><strong>Esquema (XML Schema, RELAX NG)</strong></td><td>Lenguajes para definir la estructura y los tipos de datos permitidos en un documento XML; usados en la validación.</td></tr>
<tr><td><strong>Error fatal</strong></td><td>Situación en que el procesador XML debe detenerse y comunicar el problema (p. ej. etiqueta sin cerrar).</td></tr>
<tr><td><strong>Procesador / analizador XML</strong></td><td>Programa que lee el documento y construye su árbol en memoria.</td></tr>
<tr><td><strong>Espacio de nombres</strong></td><td>Mecanismo para identificar a qué vocabulario pertenece un elemento o atributo, evitando colisiones de nombres.</td></tr>
<tr><td><strong>xmlns</strong></td><td>Atributo que declara un espacio de nombres: <code>xmlns:prefijo="URI"</code> o <code>xmlns="URI"</code> (por defecto).</td></tr>
<tr><td><strong>Prefijo / nombre local</strong></td><td>En <code>inv:nombre</code>, <code>inv</code> es el prefijo (alias de la URI) y <code>nombre</code> el nombre local.</td></tr>
<tr><td><strong>URI / URN</strong></td><td>Identificador único y estable de un vocabulario (p. ej. <code>urn:lmsgi:inventario</code>, <code>http://www.w3.org/2000/svg</code>). No tiene que ser una web accesible.</td></tr>
<tr><td><strong>SGML</strong></td><td><em>Standard Generalized Markup Language</em>. Metalenguaje estándar ISO 8879:1986, derivado de GML (IBM). Origen de HTML y XML.</td></tr>
<tr><td><strong>Metalenguaje</strong></td><td>Lenguaje que proporciona reglas para definir otros lenguajes (SGML, XML).</td></tr>
<tr><td><strong>HTML</strong></td><td>Lenguaje de marcas para estructurar páginas web; etiquetas predefinidas, no case-sensitive.</td></tr>
<tr><td><strong>XML</strong></td><td><em>Extensible Markup Language</em>. Lenguaje descriptivo para representar datos con etiquetas propias; simplificación de SGML.</td></tr>
<tr><td><strong>XHTML</strong></td><td>HTML escrito con sintaxis XML; procesado como XML es case-sensitive.</td></tr>
<tr><td><strong>Markdown</strong></td><td>Sintaxis ligera (<code>#</code>, <code>*</code>, <code>[]()</code>) para documentación; se transforma en HTML.</td></tr>
<tr><td><strong>JSON</strong></td><td>Formato de serialización de datos con objetos <code>{}</code>, listas <code>[]</code> y pares clave-valor. Habitual en API.</td></tr>
<tr><td><strong>YAML</strong></td><td>Formato de serialización legible basado en sangrado y <code>clave: valor</code>. Habitual en configuración.</td></tr>
<tr><td><strong>SVG</strong></td><td>Vocabulario XML para gráficos vectoriales escalables.</td></tr>
<tr><td><strong>RSS</strong></td><td>Vocabulario XML para distribuir novedades (<code>&lt;channel&gt;</code>, <code>&lt;item&gt;</code>).</td></tr>
<tr><td><strong>LaTeX / TeX</strong></td><td>Sistema de composición de documentos con marcas de procedimiento (<code>\\section</code>, <code>\\textbf</code>).</td></tr>
<tr><td><strong>Lenguaje de procedimiento</strong></td><td>Sus marcas indican qué operación realizar sobre el contenido (LaTeX).</td></tr>
<tr><td><strong>Lenguaje de presentación</strong></td><td>Sus marcas indican cómo se organiza o muestra el contenido (HTML, Markdown).</td></tr>
<tr><td><strong>Lenguaje descriptivo / semántico</strong></td><td>Sus marcas indican qué significa cada dato (XML).</td></tr>
<tr><td><strong>Texto plano</strong></td><td>Archivo formado solo por caracteres legibles con cualquier editor, sin formato binario propietario.</td></tr>
<tr><td><strong>Extensión</strong></td><td>Sufijo del nombre de archivo (<code>.xml</code>, <code>.json</code>) que sugiere cómo tratarlo. No determina el contenido.</td></tr>
<tr><td><strong>Tipo de contenido (MIME)</strong></td><td>Información que envía un servidor sobre el formato (<code>text/html</code>, <code>application/json</code>).</td></tr>
<tr><td><strong>Codificación de caracteres</strong></td><td>Correspondencia entre caracteres y bytes. <strong>UTF-8</strong>: 1–4 bytes por carácter; ASCII ocupa 1 byte.</td></tr>
<tr><td><strong>BOM</strong></td><td><em>Byte Order Mark</em>: marca opcional de 3 bytes al inicio de un archivo UTF-8.</td></tr>
<tr><td><strong>Interoperabilidad</strong></td><td>Capacidad de sistemas distintos para intercambiar información y usarla correctamente (sintaxis + significado).</td></tr>
<tr><td><strong>Resaltado de sintaxis</strong></td><td>Coloreado que aplica el editor para distinguir etiquetas, atributos y contenido. No valida.</td></tr>
<tr><td><strong>Validación</strong></td><td>Comprobación de que un documento cumple las reglas sintácticas (bien formado) o de un esquema (válido).</td></tr>
<tr><td><strong>Plegado de bloques</strong></td><td>Función del editor para ocultar temporalmente partes del documento.</td></tr>
<tr><td><strong>Navegador web</strong></td><td>Aplicación que obtiene, interpreta y muestra contenidos web (Firefox, Chrome, Edge, Safari).</td></tr>
</tbody></table>`
  },

  /* ---------------- Recursos ---------------- */
  {
    id: 'lm-ud1-recursos',
    tipo: 'recursos',
    titulo: 'Recursos, herramientas y bibliografía · UD1',
    resumen: 'Libro de referencia (Síntesis), especificaciones W3C (XML 1.0, Namespaces, HTML), norma ISO 8879 (SGML), documentación de editores (Notepad++, gedit, VS Code, Kate, Sublime, Neovim, XML Copy Editor), vídeo de historia y herramientas online.',
    claves: ['Libro: Moreno Pérez y González Ruíz, Lenguajes de marcas y SGI, Síntesis, 3.ª ed. 2026, ISBN 978-84-1357-481-3', 'W3C: XML 1.0 (5.ª ed.), Namespaces in XML 1.0 (3.ª ed.), HTML 2.0, historia de la Web', 'ISO 8879:1986 (SGML)', 'Editores: Notepad++, gedit, VS Code, Kate, Sublime Text, Neovim, XML Copy Editor', 'Online (solo ejemplos de clase): jsonformatter.org/xml-editor, xml.onlineviewer.net, Overleaf'],
    tags: ['recursos', 'bibliografia', 'w3c', 'iso', 'enlaces', 'herramientas', 'sintesis'],
    contenido: `
<p class="muted">Los apuntes originales son material docente de elaboración propia. Las fuentes recogidas sirven para contrastar conceptos y orientar la progresión del temario; su inclusión no implica autoría ni respaldo editorial.</p>

<h4>Libro de referencia</h4>
<div class="box info"><div class="box-title">Bibliografía principal</div>
<p>Moreno Pérez, Juan Carlos, y González Ruíz, Sergio Luis. <em>Lenguajes de marcas y sistemas de gestión de información</em>. Editorial Síntesis.</p>
<ul>
  <li>Año: 2026 · Tercera edición · España</li>
  <li>ISBN: 978-84-1357-481-3</li>
</ul></div>

<h4>Especificaciones y estándares</h4>
<ul>
  <li>ISO. <a href="https://www.iso.org/standard/16387.html" target="_blank" rel="noopener">ISO 8879:1986 — Standard Generalized Markup Language (SGML)</a></li>
  <li>ISO. <a href="https://www.iso.org/about" target="_blank" rel="noopener">Información general sobre ISO</a></li>
  <li>W3C. <a href="https://www.w3.org/2012/08/history-of-the-web/origins.htm" target="_blank" rel="noopener">Web History Primer: Origins of the Web</a></li>
  <li>W3C. <a href="https://www.w3.org/TR/xml/" target="_blank" rel="noopener">Extensible Markup Language (XML) 1.0, quinta edición</a></li>
  <li>W3C. <a href="https://www.w3.org/TR/xml-names/" target="_blank" rel="noopener">Namespaces in XML 1.0, tercera edición</a></li>
  <li>W3C. <a href="https://www.w3.org/MarkUp/html-spec/tex-experiment/html-spec.html" target="_blank" rel="noopener">Hypertext Markup Language 2.0 (especificación)</a></li>
</ul>

<h4>Editores y herramientas</h4>
<ul>
  <li>Microsoft Support. <a href="https://support.microsoft.com/en-us/windows/help-in-notepad-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c" target="_blank" rel="noopener">Ayuda del Bloc de notas de Windows</a></li>
  <li>Proyecto gedit. <a href="https://gedit-text-editor.org/features.html" target="_blank" rel="noopener">Funciones principales de gedit</a></li>
  <li>Notepad++. <a href="https://npp-user-manual.org/docs/" target="_blank" rel="noopener">Manual de usuario</a></li>
  <li>Microsoft. <a href="https://code.visualstudio.com/docs/languages/overview" target="_blank" rel="noopener">Lenguajes y funciones de edición de Visual Studio Code</a></li>
  <li>Proyecto KDE. <a href="https://kate-editor.org/about-kate/" target="_blank" rel="noopener">Características del editor Kate</a></li>
  <li>Sublime HQ. <a href="https://www.sublimetext.com/" target="_blank" rel="noopener">Sublime Text</a></li>
  <li>Proyecto Neovim. <a href="https://neovim.io/doc/user/" target="_blank" rel="noopener">Documentación de Neovim</a></li>
  <li>XML Copy Editor. <a href="https://xml-copy-editor.sourceforge.io/html/features.html" target="_blank" rel="noopener">Características del editor</a></li>
</ul>

<h4>Herramientas en línea (solo para ejemplos sin datos sensibles)</h4>
<ul>
  <li><a href="https://jsonformatter.org/xml-editor" target="_blank" rel="noopener">jsonformatter.org/xml-editor</a> — editor/comprobador XML</li>
  <li><a href="https://xml.onlineviewer.net/" target="_blank" rel="noopener">xml.onlineviewer.net</a> — visor XML</li>
  <li><a href="https://www.overleaf.com/" target="_blank" rel="noopener">Overleaf</a> — LaTeX en línea</li>
  <li><a href="https://www.sarmate.net/demo/mathpad_tex_edit.php" target="_blank" rel="noopener">sarmate.net mathpad</a> — prueba rápida de TeX</li>
</ul>

<h4>Vídeo</h4>
<ul>
  <li><a href="https://youtu.be/Ea9Awg4kKuw?si=5Kx6FucBfk7_hYOZ" target="_blank" rel="noopener">Historia de los lenguajes de marcas</a></li>
</ul>

<h4>Ejemplos de los apuntes</h4>
<ul>
  <li><a href="apuntes/lm/assets/examples/tema01/presentacion.html" target="_blank" rel="noopener">presentacion.html</a> — HTML de presentación</li>
  <li><a href="apuntes/lm/assets/examples/tema01/mayusculas-html.html" target="_blank" rel="noopener">mayusculas-html.html</a> — HTML con mayúsculas mezcladas</li>
  <li><a href="apuntes/lm/tema01/imagenes/prueba_navegador.png" target="_blank" rel="noopener">prueba_navegador.png</a> — resultado en el navegador</li>
  <li><a href="apuntes/lm/index.html" target="_blank" rel="noopener">Sitio original de los apuntes (MkDocs)</a></li>
</ul>`
  }

  ]
});
