/* ============================================================
 * XBD · Xestión de Bases de Datos (MP0372) · Unidad 1
 * Sistemas de almacenamiento y SGBD
 * ------------------------------------------------------------
 * Fuente: apuntes/xbd/ud1-sistemas-almacenamiento-sgbd.html
 * Parseado a nodos para el mapa de apuntes.
 * Cada nodo: { id, titulo, tipo, resumen, claves[], contenido(HTML), tags[], links[] }
 * tipo ∈ unidad | tema | subtema | ejercicio | glosario | recursos
 * ============================================================ */
window.APUNTES = window.APUNTES || { materias: {}, unidades: [] };

window.APUNTES.materias.xbd = window.APUNTES.materias.xbd || {
  id: 'xbd',
  nombre: 'Xestión de Bases de Datos',
  abrev: 'XBD',
  codigo: 'MP0372',
  color: '#1d4e89',
  descripcion: 'Del dato al SGBD. PostgreSQL y MongoDB sobre la base de datos de prácticas TendaGalicia.'
};

window.APUNTES.unidades.push({
  materia: 'xbd',
  id: 'xbd-ud1',
  codigo: 'UD1',
  titulo: 'Sistemas de almacenamiento y SGBD',
  fuente: 'apuntes/xbd/ud1-sistemas-almacenamiento-sgbd.html',
  nodos: [

  /* ---------------- HUB ---------------- */
  {
    id: 'xbd-ud1',
    tipo: 'unidad',
    titulo: 'UD1 · Sistemas de almacenamiento y SGBD',
    resumen: 'Del dato al SGBD: por qué nacen las bases de datos, qué es un SGBD, ACID, ANSI/SPARC, formatos, clasificación, CAP, PostgreSQL vs MongoDB y el esquema TendaGalicia.',
    claves: ['Dato → información → conocimiento', 'Ficheros: redundancia e inconsistencia', 'Codd (1970): modelo relacional', 'SGBD, componentes y ACID', 'ANSI/SPARC: 3 niveles', 'CSV / JSON / XML', 'Teorema CAP', 'PostgreSQL vs MongoDB'],
    tags: ['xbd', 'ud1', 'sgbd', 'bases de datos', 'postgresql', 'mongodb', 'tendagalicia'],
    contenido: `
<p>Unidad introductoria del módulo <strong>MP0372 Xestión de Bases de Datos</strong>. Recorre el camino completo desde el concepto de <em>dato</em> hasta el esquema relacional de prácticas <strong>TendaGalicia</strong>.</p>
<h4>Mapa de la unidad</h4>
<ol>
  <li>Dato, información y conocimiento</li>
  <li>Limitaciones de los sistemas de ficheros</li>
  <li>Evolución de los modelos de datos (jerárquico → red → relacional → NoSQL)</li>
  <li>Qué es un SGBD: componentes y propiedades ACID</li>
  <li>Arquitectura ANSI/SPARC e independencia de datos</li>
  <li>Formatos de almacenamiento: CSV, JSON, XML y otros</li>
  <li>Clasificación de las BD y teorema CAP</li>
  <li>PostgreSQL vs MongoDB</li>
  <li>Ciclo de vida de una base de datos</li>
  <li>Esquema de TendaGalicia</li>
</ol>
<p class="muted">Material didáctico · ASIR · IES Aller Ulloa (Lalín) · Autoría: Javier Feijóo López · CC BY-NC-SA 4.0</p>`
  },

  /* ---------------- 1 ---------------- */
  {
    id: 'xbd-ud1-1',
    tipo: 'tema',
    titulo: '1. Dato, información y conocimiento',
    resumen: 'Dato = valor bruto; Información = dato con contexto; Conocimiento = información + experiencia + reglas de negocio.',
    claves: ['Dato: valor bruto sin contexto ("59.80")', 'Información: dato interpretado ("pedido #100 → 59,80 €")', 'Conocimiento: información + reglas de negocio ("VIP si ticket > 50 €")'],
    tags: ['dato', 'información', 'conocimiento', 'jerarquía'],
    links: ['xbd-ud1-1-1'],
    contenido: `
<p>Antes de hablar de bases de datos hay que entender qué gestionamos. Los tres conceptos son distintos aunque se confunden en el lenguaje cotidiano.</p>
<div class="box def"><div class="box-title">📚 Definiciones</div>
<ul>
  <li><strong>Dato:</strong> valor bruto sin contexto. Solo tiene existencia física. Ej.: <code>59.80</code>.</li>
  <li><strong>Información:</strong> dato interpretado con contexto. Ej.: «el pedido nº 100 de TendaGalicia tiene un total de 59,80 €».</li>
  <li><strong>Conocimiento:</strong> información combinada con experiencia y reglas de negocio que permite tomar decisiones. Ej.: «los clientes con ticket medio superior a 50 € son clientes VIP».</li>
</ul></div>
<h4>Jerarquía dato → información → conocimiento</h4>
<table>
<tr><th>DATO</th><th>INFORMACIÓN</th><th>CONOCIMIENTO</th></tr>
<tr><td>Valor bruto sin contexto<br><code>"59.80"</code><br><small>tipo: NUMERIC(10,2)</small></td>
<td>Dato con contexto y significado<br>«Pedido #100 → 59,80 €»<br><small>tabla: pedidos, columna: total</small></td>
<td>Información aplicada + experiencia<br>«Clientes VIP: ticket &gt; 50 €»<br><small>consulta + regla de negocio</small></td></tr>
</table>`
  },
  {
    id: 'xbd-ud1-1-1',
    tipo: 'subtema',
    titulo: '1.1 Importancia del nombre y del tipo de campo',
    resumen: 'Un dato necesita un nombre (qué representa) y un tipo (qué valores admite). Ejemplos de tipos y restricciones en PostgreSQL.',
    claves: ['Nombre: qué representa', 'Tipo: qué valores admite', 'NUMERIC(10,2) para dinero', 'CHECK, UNIQUE, NOT NULL, DEFAULT'],
    tags: ['tipo de dato', 'numeric', 'varchar', 'check', 'unique', 'default', 'restricción'],
    contenido: `
<p>Un dato no transmite nada por sí solo. Para que sea útil necesita dos atributos mínimos: un <strong>nombre</strong> que diga qué representa y un <strong>tipo</strong> que defina qué valores admite.</p>
<table>
<tr><th>Campo</th><th>Tipo PostgreSQL</th><th>Restricción</th><th>Por qué importa</th></tr>
<tr><td><code>prezo</code></td><td><code>NUMERIC(10,2)</code></td><td><code>CHECK (prezo &gt;= 0)</code></td><td>Impide precios negativos; conserva exactitud decimal en dinero</td></tr>
<tr><td><code>email</code></td><td><code>VARCHAR(120)</code></td><td><code>UNIQUE NOT NULL</code></td><td>Garantiza unicidad; el SGBD rechaza duplicados automáticamente</td></tr>
<tr><td><code>stock</code></td><td><code>INTEGER</code></td><td><code>CHECK (stock &gt;= 0)</code></td><td>Stock no puede ser fraccionario ni negativo</td></tr>
<tr><td><code>data_pedido</code></td><td><code>DATE</code></td><td><code>DEFAULT CURRENT_DATE</code></td><td>Formato estándar; evita "13/32/2024"</td></tr>
<tr><td><code>puntuacion</code></td><td><code>SMALLINT</code></td><td><code>CHECK (puntuacion BETWEEN 1 AND 5)</code></td><td>Solo valores válidos para una valoración</td></tr>
</table>`
  },

  /* ---------------- 2 ---------------- */
  {
    id: 'xbd-ud1-2',
    tipo: 'tema',
    titulo: '2. Limitaciones de los sistemas de ficheros',
    resumen: 'Redundancia, inconsistencia, dependencia datos/programas, concurrencia sin control, sin seguridad granular, sin integridad automática.',
    claves: ['Redundancia: el mismo dato en varios ficheros', 'Inconsistencia: valores distintos tras actualizar a medias', 'Dependencia datos/programas', 'Concurrencia sin control', 'Sin seguridad granular', 'Sin integridad automática'],
    tags: ['ficheros', 'csv', 'redundancia', 'inconsistencia', 'concurrencia', 'integridad', 'dependencia'],
    links: ['xbd-ud1-ej1'],
    contenido: `
<p>Antes de los SGBD, cada aplicación gestionaba sus propios ficheros independientes. TendaGalicia tenía tres: <code>clientes.csv</code>, <code>pedidos.csv</code> y <code>facturacion.csv</code>, uno por departamento. Ese enfoque provocó problemas bien documentados:</p>
<table>
<tr><th>Problema</th><th>Descripción con ejemplo en TendaGalicia</th></tr>
<tr><td><strong>Redundancia</strong></td><td>El nombre del cliente aparece en pedidos, envíos y facturación. Un cambio de dirección hay que hacerlo en tres sitios.</td></tr>
<tr><td><strong>Inconsistencia</strong></td><td>Si la actualización falla a medias, el cliente tiene dos direcciones distintas en ficheros diferentes.</td></tr>
<tr><td><strong>Dependencia datos/programas</strong></td><td>Añadir una columna al fichero obliga a modificar todos los programas que lo leen.</td></tr>
<tr><td><strong>Concurrencia sin control</strong></td><td>Dos empleados modifican el mismo fichero simultáneamente y pueden sobrescribirse mutuamente.</td></tr>
<tr><td><strong>Sin seguridad granular</strong></td><td>No hay control de quién lee o escribe qué parte del fichero.</td></tr>
<tr><td><strong>Sin integridad automática</strong></td><td>Nada impide guardar un precio negativo o una fecha inválida salvo que el programa lo valide explícitamente.</td></tr>
</table>`
  },
  {
    id: 'xbd-ud1-ej1',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 1 · Identifica el problema',
    resumen: 'Ana Fernández se muda de Vigo a Santiago y solo se actualiza pedidos.csv → redundancia + inconsistencia.',
    claves: ['Redundancia + inconsistencia', 'Consecuencias: envíos a dirección antigua, facturas erróneas (RGPD)', 'Solución: dato único en clientes + FK id_cliente'],
    tags: ['ejercicio', 'redundancia', 'inconsistencia', 'clave foránea'],
    contenido: `
<div class="box ex"><div class="box-title">✍️ Enunciado</div>
<p>Ana Fernández se mudó de Vigo a Santiago. Su nombre y ciudad estaban repetidos en <code>pedidos.csv</code>, <code>envios.csv</code> y <code>facturacion.csv</code>. Solo se actualizó en <code>pedidos.csv</code>.</p>
<p>(a) Identifica el problema con su nombre técnico. (b) Dos consecuencias prácticas. (c) Cómo lo resuelve un SGBD.</p></div>
<details><summary>Solución</summary>
<p><strong>(a)</strong> <strong>Redundancia</strong> (el dato está repetido en tres ficheros) e <strong>inconsistencia</strong> (tras actualizar solo uno, el mismo dato tiene valores distintos según el fichero).</p>
<p><strong>(b)</strong> Los envíos se entregan en Vigo (dirección antigua de <code>envios.csv</code>): coste de reenvío y reclamación. Las facturas salen con la dirección incorrecta de <code>facturacion.csv</code>: posible incumplimiento del RGPD.</p>
<p><strong>(c)</strong> El SGBD almacena la dirección una única vez en la tabla <code>clientes</code>. Pedidos, envíos y facturas referencian al cliente por <code>id_cliente</code> (clave foránea). Un solo <code>UPDATE</code> propaga el cambio a todo el sistema.</p>
</details>`
  },

  /* ---------------- 3 ---------------- */
  {
    id: 'xbd-ud1-3',
    tipo: 'tema',
    titulo: '3. Evolución de los modelos de datos',
    resumen: 'De los modelos jerárquico y en red (años 60-70) al relacional de Codd (1970), SQL estándar (1986) y el auge NoSQL (2000-hoy).',
    claves: ['60-70: jerárquico (IBM IMS) y en red (CODASYL)', '1970: Codd, modelo relacional', '1986: SQL norma ISO/ANSI', '2000-hoy: NoSQL (MongoDB, Cassandra)'],
    tags: ['modelos de datos', 'historia', 'jerárquico', 'red', 'relacional', 'nosql', 'codd'],
    links: ['xbd-ud1-3-1', 'xbd-ud1-3-2', 'xbd-ud1-3-3', 'xbd-ud1-3-4', 'xbd-ud1-3-5', 'xbd-ud1-3-6', 'xbd-ud1-ej2'],
    contenido: `
<p>Antes de ver qué es exactamente un SGBD, conviene entender de dónde viene el <strong>modelo relacional</strong> que usaremos todo el curso: no apareció de la nada, sino como respuesta a los límites de las soluciones anteriores. Entenderlo ayuda también a entender por qué, décadas después, aparecieron los modelos <strong>NoSQL</strong>.</p>
<h4>Línea de tiempo</h4>
<table>
<tr><th>Años 60-70</th><th>1970</th><th>1986</th><th>2000-hoy</th></tr>
<tr><td><strong>Jerárquico y en red</strong><br>Estructura fija en árbol o grafo<br><small>IBM IMS, CODASYL</small></td>
<td><strong>Modelo relacional</strong><br>Codd separa el qué del cómo<br><small>Tablas, filas y columnas</small></td>
<td><strong>SQL se estandariza</strong><br>Lenguaje declarativo común<br><small>Norma ISO/ANSI</small></td>
<td><strong>Auge de NoSQL</strong><br>Escala y esquemas flexibles<br><small>MongoDB, Cassandra…</small></td></tr>
</table>`
  },
  {
    id: 'xbd-ud1-3-1',
    tipo: 'subtema',
    titulo: '3.1 Antes del relacional: jerárquico y en red',
    resumen: 'Jerárquico = árbol (un padre); En red = grafo (varios padres). La forma de acceder estaba grabada en la estructura.',
    claves: ['Jerárquico: árbol, un solo padre (IBM IMS, 1966)', 'En red: grafo, varios padres (CODASYL)', 'Problema: el acceso está grabado en la estructura'],
    tags: ['jerárquico', 'en red', 'ibm ims', 'codasyl', 'árbol', 'grafo'],
    contenido: `
<p>En los años 60 y 70, cuando las empresas empezaron a informatizar grandes volúmenes de datos, los primeros sistemas organizaban la información de dos formas:</p>
<table>
<tr><th>Modelo</th><th>Cómo organiza los datos</th><th>Ejemplo real</th></tr>
<tr><td><strong>Jerárquico</strong></td><td>En forma de árbol: cada registro tiene un único "padre" y puede tener varios "hijos".</td><td>IBM IMS (1966), todavía en uso en algunos sistemas bancarios heredados</td></tr>
<tr><td><strong>En red</strong></td><td>Como un grafo: un registro puede tener varios "padres", no solo uno.</td><td>Sistemas CODASYL (finales de los 60)</td></tr>
</table>
<div class="box warn"><div class="box-title">⚠️ El problema de fondo</div>
<p>En ambos modelos, la <strong>forma de acceder a los datos estaba grabada en la propia estructura</strong>. Si al diseñar TendaGalicia hubiéramos decidido que los pedidos "cuelgan" de los clientes, preguntar «¿qué clientes compraron el producto X?» habría obligado a recorrer todo el árbol cliente a cliente, o a rediseñar la estructura entera. Cada nueva pregunta no prevista era un problema.</p></div>`
  },
  {
    id: 'xbd-ud1-3-2',
    tipo: 'subtema',
    titulo: '3.2 La gran idea de Codd: separar el qué del cómo',
    resumen: 'Codd (IBM, 1970): toda la información como tablas (relaciones). El usuario dice qué quiere, no cómo recorrer la estructura.',
    claves: ['Edgar F. Codd, IBM, 1970', 'Todo son tablas = relaciones', 'Qué se pide vs cómo se resuelve', 'Base matemática: conjuntos y álgebra relacional'],
    tags: ['codd', 'relacional', 'álgebra relacional', 'declarativo', '1970'],
    contenido: `
<p>En 1970, <strong>Edgar F. Codd</strong>, investigador de IBM, publicó <em>"A Relational Model of Data for Large Shared Data Banks"</em>. Su propuesta partía de una idea simple pero radical para la época:</p>
<div class="box def"><div class="box-title">📚 La idea de Codd</div>
<p>Representar <strong>toda la información, sin excepción, como tablas</strong> (a las que Codd llamó formalmente <em>relaciones</em>, de ahí el nombre del modelo). El usuario no necesita saber cómo están organizados los datos físicamente en el disco, ni por qué camino se llega hasta ellos: basta con decir <strong>qué</strong> se quiere consultar, no <strong>cómo</strong> recorrer la estructura para encontrarlo.</p></div>
<p>Esta separación entre "qué pido" y "cómo se resuelve" es el germen de la <strong>arquitectura ANSI/SPARC</strong> y de la <strong>independencia de datos</strong>. Codd le dio además una base matemática sólida (teoría de conjuntos y <strong>álgebra relacional</strong>), lo que permitió demostrar formalmente qué operaciones son posibles y garantizar resultados consistentes.</p>`
  },
  {
    id: 'xbd-ud1-3-3',
    tipo: 'subtema',
    titulo: '3.3 Cómo se organiza la información en una tabla',
    resumen: 'Tabla, fila (registro/tupla), columna (campo/atributo), tipo de dato y clave primaria: las piezas de todo lo que haremos en PostgreSQL.',
    claves: ['Tabla: colección de elementos del mismo tipo', 'Fila = registro = tupla', 'Columna = campo = atributo', 'Tipo de dato por columna', 'Clave primaria: identifica cada fila sin ambigüedad'],
    tags: ['tabla', 'fila', 'columna', 'tupla', 'atributo', 'clave primaria', 'registro', 'campo'],
    contenido: `
<p>Podemos entender la idea central del modelo relacional con una analogía cotidiana: una agenda de contactos o una hoja de cálculo.</p>
<table>
<tr><td><strong>Tabla</strong></td><td>Una colección de elementos del mismo tipo. Por ejemplo, todos los clientes de TendaGalicia.</td></tr>
<tr><td><strong>Fila</strong></td><td>Un elemento individual de esa colección: un cliente concreto. También se llama <em>registro</em> o <em>tupla</em>.</td></tr>
<tr><td><strong>Columna</strong></td><td>Una característica que todas las filas comparten: nombre, email, ciudad. También se llama <em>campo</em> o <em>atributo</em>.</td></tr>
<tr><td><strong>Tipo de dato</strong></td><td>Cada columna admite solo cierta clase de valores (texto, número, fecha). Evita guardar "quince euros" en una columna pensada para precios numéricos.</td></tr>
<tr><td><strong>Clave primaria</strong></td><td>La columna (o combinación) que identifica sin ambigüedad cada fila, igual que un DNI identifica a una persona. Dos clientes pueden llamarse igual; nunca comparten clave primaria.</td></tr>
</table>
<h4>Fragmento conceptual de <code>clientes</code></h4>
<table>
<tr><th>id_cliente (PK)</th><th>nome</th><th>email</th><th>cidade</th></tr>
<tr><td>1</td><td>Ana Fernández</td><td>ana@correo.gal</td><td>Santiago</td></tr>
<tr><td>2</td><td>Breogán Souto</td><td>breogan@correo.gal</td><td>Lugo</td></tr>
</table>
<div class="box tip"><div class="box-title">💡 Todavía no toca escribir SQL</div>
<p>Esta tabla es solo la forma de organizar los datos. Cómo se crea y cómo se le hacen preguntas mediante SQL lo veremos en unidades posteriores. Lo importante: <strong>tabla, fila, columna, tipo de dato y clave primaria</strong> son las piezas con las que está construido todo lo que haremos con PostgreSQL.</p></div>`
  },
  {
    id: 'xbd-ud1-3-4',
    tipo: 'subtema',
    titulo: '3.4 Línea de tiempo de los modelos de datos',
    resumen: 'Años 60-70 jerárquico/red · 1970 relacional (Codd) · 1986 SQL ISO/ANSI · 2000-hoy NoSQL.',
    claves: ['60-70 · Jerárquico y en red', '1970 · Modelo relacional', '1986 · SQL estándar ISO/ANSI', '2000-hoy · NoSQL'],
    tags: ['historia', 'cronología', 'sql 1986', 'nosql'],
    contenido: `
<ol>
  <li><strong>Años 60-70 · Jerárquico y en red.</strong> Estructura fija en árbol o grafo. IBM IMS, CODASYL.</li>
  <li><strong>1970 · Modelo relacional.</strong> Codd separa el qué del cómo. Tablas, filas y columnas.</li>
  <li><strong>1986 · SQL se estandariza.</strong> Lenguaje declarativo común. Norma ISO/ANSI.</li>
  <li><strong>2000-hoy · Auge de NoSQL.</strong> Escala y esquemas flexibles. MongoDB, Cassandra…</li>
</ol>
<p class="muted">De las estructuras rígidas de los años 60 a la explosión de modelos NoSQL de las últimas dos décadas.</p>`
  },
  {
    id: 'xbd-ud1-3-5',
    tipo: 'subtema',
    titulo: '3.5 Por qué triunfó el modelo relacional',
    resumen: 'Simplicidad conceptual (todo son tablas), lenguaje estándar (SQL ISO 1986) y consistencia fuerte (ACID).',
    claves: ['Simplicidad: todo son tablas', 'SQL estándar ISO (1986): PostgreSQL, Oracle, MySQL, SQL Server', 'Consistencia fuerte: ACID'],
    tags: ['relacional', 'sql', 'acid', 'ventajas'],
    contenido: `
<p>Durante más de treinta años, el modelo relacional fue prácticamente la única opción seria para gestionar datos de empresa. Tres razones lo explican:</p>
<ul>
  <li><strong>Simplicidad conceptual:</strong> todo son tablas. No hace falta pensar en árboles ni en grafos para diseñar ni para consultar.</li>
  <li><strong>Un lenguaje estándar:</strong> SQL se convirtió en norma ISO en 1986. Aprenderlo una vez permite usarlo, con pequeñas variaciones, en PostgreSQL, Oracle, MySQL o SQL Server.</li>
  <li><strong>Consistencia fuerte:</strong> las propiedades ACID garantizan que los datos nunca quedan a medias, algo crítico en bancos, hospitales o tiendas online.</li>
</ul>`
  },
  {
    id: 'xbd-ud1-3-6',
    tipo: 'subtema',
    titulo: '3.6 Después del relacional: por qué aparece NoSQL',
    resumen: 'Google, Amazon, Facebook (2000+): miles de millones de filas distribuidas y esquemas cambiantes. NoSQL no sustituye, amplía.',
    claves: ['Contexto: miles de millones de filas, servidores distribuidos, esquemas cambiantes', 'El relacional no falló: era otro contexto', 'NoSQL amplía, no sustituye: conviven'],
    tags: ['nosql', 'escala', 'documental', 'clave-valor', 'columnar', 'grafos'],
    contenido: `
<p>A partir de los años 2000, empresas como Google, Amazon o Facebook se enfrentaron a un problema distinto: no cientos de miles de filas, sino <strong>miles de millones</strong>, repartidas por servidores de todo el mundo y cambiando constantemente de estructura. El modelo relacional no "falló": simplemente estaba pensado para otro contexto, con volúmenes menores y esquemas más estables.</p>
<div class="box tip"><div class="box-title">💡 No es una sustitución, es una ampliación</div>
<p>Las bases NoSQL (documentales, clave-valor, columnares, de grafos) no vinieron a "reemplazar" al modelo relacional: nacieron para resolver problemas concretos de escala y flexibilidad. Hoy conviven ambos enfoques, y elegir uno u otro depende del problema.</p></div>`
  },
  {
    id: 'xbd-ud1-ej2',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 2 · De ficheros a tablas',
    resumen: 'Dos clientes con el mismo nombre se confunden en clientes.csv → clave primaria. Fila vs columna. Qué vs cómo.',
    claves: ['Clave primaria resuelve la ambigüedad de nombres', 'Fila = un cliente; columna = una característica común', 'Codd: decir qué se quiere, no cómo buscarlo'],
    tags: ['ejercicio', 'clave primaria', 'fila', 'columna', 'codd'],
    contenido: `
<div class="box ex"><div class="box-title">✍️ Enunciado</div>
<p>TendaGalicia guardaba antes sus clientes en <code>clientes.csv</code>, con un problema: dos clientes distintos podían llamarse igual y el sistema los confundía al buscar por nombre.</p>
<p>(a) ¿Qué elemento del modelo relacional resuelve exactamente este problema? (b) Explica la diferencia entre una fila y una columna usando la tabla <code>clientes</code>. (c) ¿Por qué decimos que Codd separó "el qué" del "cómo"?</p></div>
<details><summary>Solución</summary>
<p><strong>(a)</strong> La <strong>clave primaria</strong> (<code>id_cliente</code>): un número único por cliente que no depende del nombre, así que dos "Ana García" nunca se confunden.</p>
<p><strong>(b)</strong> Una <strong>fila</strong> es un cliente concreto (todos los datos de Ana Fernández en una única línea). Una <strong>columna</strong> es una característica que comparten todos los clientes (la columna <code>cidade</code> existe para todas las filas, aunque cada una tenga un valor distinto).</p>
<p><strong>(c)</strong> Porque antes de Codd había que saber <em>cómo</em> estaban físicamente organizados los datos para poder preguntarles algo. Con el modelo relacional basta con decir <em>qué</em> se quiere obtener ("los clientes de Lugo"); el sistema decide cómo ir a buscarlo.</p>
</details>`
  },

  /* ---------------- 4 ---------------- */
  {
    id: 'xbd-ud1-4',
    tipo: 'tema',
    titulo: '4. Qué es un SGBD',
    resumen: 'Software intermediario entre usuarios/aplicaciones y los datos físicos: define, crea, mantiene y controla el acceso de forma segura, eficiente y consistente.',
    claves: ['SGBD = intermediario entre usuarios/apps y datos', 'Define, crea, mantiene y controla el acceso', 'Componentes internos comunes', 'Contrato ACID'],
    tags: ['sgbd', 'dbms', 'definición', 'intermediario'],
    links: ['xbd-ud1-4-1', 'xbd-ud1-4-2'],
    contenido: `
<div class="box def"><div class="box-title">📚 Definición</div>
<p><strong>SGBD (Sistema Gestor de Bases de Datos):</strong> software que actúa como intermediario entre los usuarios o aplicaciones y los datos almacenados físicamente. Su función es <strong>definir, crear, mantener y controlar el acceso</strong> a la base de datos de forma segura, eficiente y consistente.</p></div>
<p>Se compone de una serie de bloques internos comunes a todos los fabricantes (parser, optimizador, motor de almacenamiento, gestor de transacciones, concurrencia, seguridad, diccionario de datos y recuperación) y ofrece a sus usuarios el contrato <strong>ACID</strong>.</p>`
  },
  {
    id: 'xbd-ud1-4-1',
    tipo: 'subtema',
    titulo: '4.1 Componentes principales de un SGBD',
    resumen: 'Parser, optimizador, motor de almacenamiento, gestor de transacciones, concurrencia (MVCC), seguridad, diccionario de datos y recuperación (WAL). Flujo de una consulta en PostgreSQL.',
    claves: ['Parser: sintaxis', 'Optimizador: plan más barato (EXPLAIN ANALYZE)', 'Motor de almacenamiento: páginas de 8 KB, heap', 'Transacciones: BEGIN/COMMIT/ROLLBACK', 'Concurrencia: MVCC', 'Seguridad: roles, privilegios, RLS', 'Diccionario: information_schema, pg_catalog', 'Recuperación: WAL'],
    tags: ['parser', 'optimizador', 'explain analyze', 'motor de almacenamiento', 'heap', 'mvcc', 'wal', 'diccionario de datos', 'pg_catalog', 'information_schema', 'rls', 'rewriter', 'ejecutor'],
    contenido: `
<p>Todos los SGBD modernos comparten los mismos bloques internos, aunque cada fabricante los nombre de forma ligeramente diferente.</p>
<table>
<tr><th>Componente</th><th>Función</th></tr>
<tr><td><strong>Parser</strong> (analizador sintáctico)</td><td>Primera parada de una consulta SQL. Comprueba que la sintaxis es correcta. Si falta una coma o una palabra reservada está mal escrita, la rechaza.</td></tr>
<tr><td><strong>Optimizador de consultas</strong></td><td>Analiza los posibles planes de ejecución y elige el más eficiente. Decide si usar un índice o un escaneo secuencial (Seq Scan). En PostgreSQL se visualiza con <code>EXPLAIN ANALYZE</code>.</td></tr>
<tr><td><strong>Motor de almacenamiento</strong></td><td>Gestiona cómo se guardan y recuperan los datos en disco. PostgreSQL organiza los datos en páginas de <strong>8 KB</strong> y usa el método de acceso <em>heap</em> por defecto.</td></tr>
<tr><td><strong>Gestor de transacciones</strong></td><td>Garantiza ACID. Controla <code>BEGIN</code>, <code>COMMIT</code> y <code>ROLLBACK</code>.</td></tr>
<tr><td><strong>Gestor de concurrencia</strong></td><td>Controla el acceso simultáneo. PostgreSQL usa <strong>MVCC</strong> (Multiversion Concurrency Control): cada transacción ve una instantánea consistente sin bloquear a las demás.</td></tr>
<tr><td><strong>Gestor de seguridad</strong></td><td>Quién accede a qué y con qué permisos (roles, privilegios, RLS: Row Level Security).</td></tr>
<tr><td><strong>Diccionario de datos</strong></td><td>Catálogo de metadatos: tablas, columnas, tipos, restricciones, índices, vistas. En PostgreSQL: <code>information_schema</code> y <code>pg_catalog</code>.</td></tr>
<tr><td><strong>Gestor de recuperación</strong></td><td>Escribe el <strong>WAL</strong> (Write-Ahead Log) antes de modificar los datos en disco. Si el sistema falla, al reiniciar lee el WAL y rehace o deshace operaciones para volver a un estado consistente.</td></tr>
</table>
<div class="box tip"><div class="box-title">💡 Flujo de una consulta en PostgreSQL</div>
<p>Al ejecutar <code>SELECT * FROM clientes WHERE cidade = 'Vigo'</code>:</p>
<ol>
  <li><strong>Parser:</strong> verifica la sintaxis SQL.</li>
  <li><strong>Rewriter:</strong> expande reglas y vistas.</li>
  <li><strong>Optimizador:</strong> calcula el plan más barato: ¿hay índice sobre <code>cidade</code>? ¿merece la pena usarlo?</li>
  <li><strong>Ejecutor:</strong> lanza el plan usando el motor de almacenamiento.</li>
  <li><strong>Resultado:</strong> las filas llegan al cliente a través del protocolo PostgreSQL.</li>
</ol>
<pre><code>EXPLAIN ANALYZE SELECT * FROM clientes WHERE cidade = 'Vigo';</code></pre></div>`
  },
  {
    id: 'xbd-ud1-4-2',
    tipo: 'subtema',
    titulo: '4.2 Propiedades ACID',
    resumen: 'Atomicidad (todo o nada), Consistencia (estado válido → válido), Aislamiento (MVCC), Durabilidad (WAL). Ejemplos con pedidos de TendaGalicia.',
    claves: ['A · Atomicidad: todo o nada', 'C · Consistencia: restricciones (CHECK, FK, UNIQUE) siempre se cumplen', 'I · Aislamiento: transacciones no se interfieren (MVCC)', 'D · Durabilidad: tras COMMIT persiste (WAL)'],
    tags: ['acid', 'atomicidad', 'consistencia', 'aislamiento', 'durabilidad', 'transacción', 'mvcc', 'wal', 'commit', 'rollback'],
    contenido: `
<p>ACID es el contrato que un SGBD transaccional ofrece a sus usuarios. Garantiza que las operaciones son fiables incluso ante fallos del sistema, errores de red o acceso concurrente.</p>
<table>
<tr><th></th><th>Propiedad</th><th>Definición</th><th>TendaGalicia</th></tr>
<tr><td><strong>A</strong></td><td><strong>Atomicidad</strong></td><td>La transacción se ejecuta completamente o no se ejecuta en absoluto. No hay estados intermedios persistentes.</td><td>Al procesar un pedido se descuenta el stock Y se registra la línea. Si el servidor cae entre los dos pasos, el SGBD revierte el descuento.</td></tr>
<tr><td><strong>C</strong></td><td><strong>Consistencia</strong></td><td>La BD pasa de un estado válido a otro válido. Todas las restricciones (CHECK, FK, UNIQUE) se cumplen antes y después.</td><td>No puede existir una <code>linha_pedido</code> que referencie un <code>id_produto</code> inexistente. La FK lo impide.</td></tr>
<tr><td><strong>I</strong></td><td><strong>Aislamiento</strong></td><td>Las transacciones concurrentes no se interfieren. Cada una ve los datos como si fuera la única. PostgreSQL lo implementa con <strong>MVCC</strong>.</td><td>Dos clientes compran el último producto en stock simultáneamente: solo uno tendrá éxito; el otro recibe error de concurrencia.</td></tr>
<tr><td><strong>D</strong></td><td><strong>Durabilidad</strong></td><td>Una vez confirmada (<code>COMMIT</code>), los cambios persisten aunque el sistema falle inmediatamente después. El <strong>WAL</strong> lo garantiza.</td><td>Si el servidor se apaga justo tras el COMMIT de un pedido, el pedido sigue ahí al reiniciar.</td></tr>
</table>`
  },

  /* ---------------- 5 ---------------- */
  {
    id: 'xbd-ud1-5',
    tipo: 'tema',
    titulo: '5. Arquitectura ANSI/SPARC',
    resumen: 'Tres niveles (1975): Externo (vistas), Conceptual (esquema lógico), Interno (almacenamiento físico). Independencia física y lógica.',
    claves: ['1975, comité ANSI/SPARC', 'Externo: vistas por usuario/app', 'Conceptual: esquema lógico global (tablas, PK, FK, restricciones)', 'Interno: ficheros, páginas 8 KB, índices B-tree, WAL', 'Independencia física y lógica'],
    tags: ['ansi/sparc', 'nivel externo', 'nivel conceptual', 'nivel interno', 'independencia de datos', 'vistas', 'esquema'],
    links: ['xbd-ud1-ej3'],
    contenido: `
<p>En 1975 el comité <strong>ANSI/SPARC</strong> (American National Standards Institute · Standards Planning and Requirements Committee) propuso separar la descripción de una base de datos en <strong>tres niveles independientes</strong>. Los usuarios trabajan con los datos sin conocer cómo están almacenados, y el administrador puede cambiar la estructura interna sin afectar a las aplicaciones.</p>
<table>
<tr><th>Nivel</th><th>Qué describe</th><th>Ejemplo en TendaGalicia</th></tr>
<tr><td><strong>Externo</strong> (vistas)</td><td>Lo que ve cada usuario o aplicación. Pueden existir múltiples vistas del mismo conjunto de datos.</td><td>Vista <code>pedidos_activos</code> para logística; <code>kpis_mensuales</code> para dirección; la app móvil solo ve catálogo y stock.</td></tr>
<tr><td><strong>Conceptual</strong> (esquema lógico global)</td><td>Visión global de todos los datos: tablas, relaciones y restricciones, sin detalles físicos.</td><td>Esquema completo: <code>clientes</code>, <code>pedidos</code>, <code>linhas_pedido</code>, <code>produtos</code>, <code>provedores</code>, <code>categorias</code>.</td></tr>
<tr><td><strong>Interno</strong> (almacenamiento físico)</td><td>Cómo se almacenan los datos en disco: ficheros, páginas, índices B-tree, WAL.</td><td>Ficheros en <code>/var/lib/postgresql</code> dentro del contenedor Docker; páginas de 8 KB; índice B-tree sobre <code>clientes.email</code>.</td></tr>
</table>
<div class="box info"><div class="box-title">ℹ️ Independencia de datos</div>
<ul>
  <li><strong>Independencia física:</strong> si el DBA cambia el almacenamiento físico (otro disco, nuevo índice, tamaño de página), el esquema conceptual no cambia y las aplicaciones no se ven afectadas.</li>
  <li><strong>Independencia lógica:</strong> si el DBA añade una tabla o columna al esquema conceptual, las vistas existentes del nivel externo no necesitan cambiar (siempre que los datos que muestran sigan disponibles).</li>
</ul></div>`
  },
  {
    id: 'xbd-ud1-ej3',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 3 · Identifica el nivel ANSI/SPARC',
    resumen: 'Clasificar índice, vista, esquema completo, ficheros base/16384 y CHECK en Externo / Conceptual / Interno.',
    claves: ['Índice → Interno', 'Vista de departamento → Externo', 'Esquema completo → Conceptual', 'Ficheros en disco → Interno', 'CHECK → Conceptual'],
    tags: ['ejercicio', 'ansi/sparc', 'índice', 'vista', 'check'],
    contenido: `
<div class="box ex"><div class="box-title">✍️ Enunciado</div>
<p>Clasifica cada elemento en Externo, Conceptual o Interno:</p>
<ol>
  <li><code>CREATE INDEX idx_email ON clientes(email);</code></li>
  <li>Vista <code>pedidos_pendientes</code> del departamento de logística.</li>
  <li>Esquema relacional completo de TendaGalicia.</li>
  <li>Ficheros <code>base/16384/</code> en el directorio de datos de PostgreSQL.</li>
  <li>La restricción <code>CHECK (stock &gt;= 0)</code> en la tabla <code>produtos</code>.</li>
</ol></div>
<details><summary>Solución</summary>
<ol>
  <li><strong>Interno:</strong> los índices son estructuras físicas de acceso.</li>
  <li><strong>Externo:</strong> visión parcial personalizada para un perfil de usuario.</li>
  <li><strong>Conceptual:</strong> estructura lógica global de todos los datos.</li>
  <li><strong>Interno:</strong> ficheros en disco gestionados por el motor de almacenamiento.</li>
  <li><strong>Conceptual:</strong> las restricciones de integridad forman parte de la definición lógica del esquema.</li>
</ol></details>`
  },

  /* ---------------- 6 ---------------- */
  {
    id: 'xbd-ud1-6',
    tipo: 'tema',
    titulo: '6. Formatos de almacenamiento',
    resumen: 'CSV (tabla en texto plano), JSON (objetos y listas anidadas), XML (etiquetas). Cómo representan el mismo dato y otros formatos (texto, Excel, Parquet).',
    claves: ['CSV: cabecera + filas separadas por comas', 'JSON: llaves { } y pares clave: valor', 'XML: etiquetas que se abren y cierran bajo una raíz', 'Otros: texto plano, Excel, Parquet'],
    tags: ['formatos', 'csv', 'json', 'xml', 'parquet', 'intercambio de datos'],
    links: ['xbd-ud1-6-1', 'xbd-ud1-6-2', 'xbd-ud1-6-3', 'xbd-ud1-6-4', 'xbd-ud1-6-5', 'xbd-ud1-ej4'],
    contenido: `
<p>Antes de que un dato llegue a vivir dentro de una tabla relacional, es habitual encontrarlo en un fichero de texto con algún formato: alguien tiene que exportarlo, enviarlo a otro sistema o recibirlo de un proveedor externo. Los tres formatos más frecuentes son <strong>CSV</strong>, <strong>JSON</strong> y <strong>XML</strong>.</p>
<div class="box tip"><div class="box-title">💡 ¿Cómo se reconocen a simple vista?</div>
<ul>
  <li><strong>CSV:</strong> una fila de cabecera y filas de datos separadas por comas; ningún símbolo de agrupación.</li>
  <li><strong>JSON:</strong> llaves <code>{ }</code>, cada valor con su clave entre comillas seguida de dos puntos.</li>
  <li><strong>XML:</strong> etiquetas <code>&lt;...&gt;</code> que se abren y se cierran, anidadas dentro de una etiqueta raíz.</li>
</ul></div>`
  },
  {
    id: 'xbd-ud1-6-1',
    tipo: 'subtema',
    titulo: '6.1 CSV: la tabla en texto plano',
    resumen: 'Comma-Separated Values. Cabecera + filas separadas por comas. Sin tipos, sin anidamiento, estructura fija.',
    claves: ['Primera línea = cabecera', 'Sin tipos de datos (todo texto)', 'Sin anidamiento', 'Estructura fija: mismas columnas, mismo orden'],
    tags: ['csv', 'texto plano', 'copy'],
    contenido: `
<p><strong>CSV</strong> (Comma-Separated Values) es la forma más simple de representar una tabla en un fichero de texto: la primera línea es la cabecera con los nombres de columna, y cada línea siguiente es una fila, con los valores separados por comas.</p>
<pre><code>id,nome,prezo,categoria
7,Mochila outdoor,45.90,Deporte</code></pre>
<div class="box def"><div class="box-title">📚 Características de CSV</div>
<ul>
  <li><strong>Sin tipos de datos:</strong> todo se guarda como texto, aunque represente un número.</li>
  <li><strong>Sin anidamiento:</strong> no puede haber una lista u objeto dentro de una celda sin inventar un truco (p. ej., separar varios valores con otro símbolo).</li>
  <li><strong>Estructura fija:</strong> todas las filas deben tener las mismas columnas, en el mismo orden.</li>
</ul></div>`
  },
  {
    id: 'xbd-ud1-6-2',
    tipo: 'subtema',
    titulo: '6.2 JSON: objetos, listas y anidamiento',
    resumen: 'JavaScript Object Notation: pares clave:valor entre llaves; los valores pueden ser listas [ ] u objetos anidados.',
    claves: ['Pares clave: valor entre { }', 'Listas entre [ ]', 'Objetos anidados', 'Resuelve las listas dentro de un registro sin duplicar'],
    tags: ['json', 'jsonb', 'anidamiento', 'listas', 'clave valor'],
    contenido: `
<p><strong>JSON</strong> (JavaScript Object Notation) representa los datos como pares <code>clave: valor</code> dentro de llaves <code>{ }</code>. A diferencia de CSV, un valor puede ser a su vez una lista (entre corchetes <code>[ ]</code>) o incluso otro objeto anidado.</p>
<pre><code>{
  "id": 7,
  "nome": "Mochila outdoor",
  "prezo": 45.90,
  "categoria": "Deporte",
  "tallas": ["S", "M", "L"]
}</code></pre>
<div class="box tip"><div class="box-title">💡 La diferencia clave con CSV</div>
<p>El campo <code>tallas</code> es una <strong>lista de valores dentro del mismo registro</strong>. En CSV habría que crear una columna por cada talla posible, o repetir una fila por cada combinación producto-talla. JSON lo resuelve de forma natural, sin inventar columnas ni duplicar datos.</p></div>`
  },
  {
    id: 'xbd-ud1-6-3',
    tipo: 'subtema',
    titulo: '6.3 XML: etiquetas que se abren y se cierran',
    resumen: 'eXtensible Markup Language: cada dato entre etiqueta de apertura y cierre, todo bajo una raíz; listas repitiendo etiquetas.',
    claves: ['Etiqueta de apertura y cierre por dato', 'Una única etiqueta raíz', 'Listas = etiqueta repetida', 'Más extenso que JSON'],
    tags: ['xml', 'etiquetas', 'raíz', 'markup'],
    contenido: `
<p><strong>XML</strong> (eXtensible Markup Language) envuelve cada dato entre una etiqueta de apertura y una de cierre (<code>&lt;nome&gt;...&lt;/nome&gt;</code>). Todo el documento cuelga de una única etiqueta raíz. Admite anidamiento y listas, aunque de forma más extensa que JSON: una lista se representa repitiendo una etiqueta tantas veces como elementos tenga.</p>
<pre><code>&lt;produto&gt;
  &lt;id&gt;7&lt;/id&gt;
  &lt;nome&gt;Mochila outdoor&lt;/nome&gt;
  &lt;prezo&gt;45.90&lt;/prezo&gt;
  &lt;categoria&gt;Deporte&lt;/categoria&gt;
  &lt;tallas&gt;
    &lt;talla&gt;S&lt;/talla&gt;
    &lt;talla&gt;M&lt;/talla&gt;
    &lt;talla&gt;L&lt;/talla&gt;
  &lt;/tallas&gt;
&lt;/produto&gt;</code></pre>`
  },
  {
    id: 'xbd-ud1-6-4',
    tipo: 'subtema',
    titulo: '6.4 La misma información, tres formatos',
    resumen: 'El producto "Bota de monte" (id 3, 74.50) representado en CSV, JSON y XML lado a lado.',
    claves: ['Mismo dato, tres sintaxis', 'CSV: 2 líneas', 'JSON: objeto con 3 claves', 'XML: raíz <produto> con 3 hijos'],
    tags: ['csv', 'json', 'xml', 'comparación'],
    contenido: `
<p>El siguiente producto de TendaGalicia aparece representado a la vez en los tres formatos. Es exactamente el mismo dato, solo cambia la forma de escribirlo.</p>
<table>
<tr><th>CSV</th><th>JSON</th><th>XML</th></tr>
<tr>
<td><pre><code>id,nome,prezo
3,Bota de monte,74.50</code></pre></td>
<td><pre><code>{ "id": 3,
  "nome": "Bota de monte",
  "prezo": 74.50 }</code></pre></td>
<td><pre><code>&lt;produto&gt;
  &lt;id&gt;3&lt;/id&gt;
  &lt;nome&gt;Bota de monte&lt;/nome&gt;
  &lt;prezo&gt;74.50&lt;/prezo&gt;
&lt;/produto&gt;</code></pre></td>
</tr></table>`
  },
  {
    id: 'xbd-ud1-ej4',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 4 · Convierte y decide',
    resumen: 'Representar un cliente en JSON con una lista "intereses" y explicar por qué es complicado en CSV.',
    claves: ['JSON con lista "intereses"', 'CSV: una celda = un valor → columnas extra o filas duplicadas'],
    tags: ['ejercicio', 'json', 'csv', 'listas'],
    contenido: `
<div class="box ex"><div class="box-title">✍️ Enunciado</div>
<p>Fila de la tabla <code>clientes</code>: <code>id_cliente=9, nome="Xurxo Bastos", email="xurxo@correo.gal", cidade="Pontevedra"</code></p>
<p>(a) Represéntala en JSON, añadiendo un campo <code>intereses</code> con una lista de al menos dos valores. (b) ¿Por qué ese campo sería complicado de representar en CSV?</p></div>
<details><summary>Solución</summary>
<pre><code>{
  "id_cliente": 9,
  "nome": "Xurxo Bastos",
  "email": "xurxo@correo.gal",
  "cidade": "Pontevedra",
  "intereses": ["Deporte", "Fogar"]
}</code></pre>
<p><strong>(b)</strong> En CSV cada celda admite un único valor. Para guardar varios intereses habría que crear una columna por cada interés posible (con "sí"/"no") o repetir una fila por cada combinación cliente-interés, duplicando el resto de datos. JSON lo resuelve con una lista dentro del mismo registro.</p>
</details>`
  },
  {
    id: 'xbd-ud1-6-5',
    tipo: 'subtema',
    titulo: '6.5 Otros formatos y su relación con PostgreSQL',
    resumen: 'Texto plano (logs), Excel (informes), Parquet (data lakes). En PostgreSQL: CSV con COPY, JSON/JSONB en columnas, XML para sistemas heredados.',
    claves: ['Texto plano: logs y configuración', 'Excel: informes de negocio', 'Parquet: columnar, data lakes (Spark, Pandas)', 'PostgreSQL: COPY (CSV), JSON/JSONB, XML heredado'],
    tags: ['parquet', 'excel', 'texto plano', 'copy', 'jsonb', 'logs', 'data lake'],
    contenido: `
<table>
<tr><th>Formato</th><th>Ventajas</th><th>Limitaciones</th><th>Cuándo usarlo</th></tr>
<tr><td><strong>Texto plano</strong></td><td>Universal, sin dependencias</td><td>Sin estructura, sin tipos</td><td>Logs, configuración</td></tr>
<tr><td><strong>Excel</strong></td><td>Fácil para usuarios finales, gráficos</td><td>Formato cerrado, difícil de versionar</td><td>Informes para negocio</td></tr>
<tr><td><strong>Parquet</strong></td><td>Columnar, muy comprimido</td><td>No legible directamente</td><td>Data lakes, análisis con Spark o Pandas</td></tr>
</table>
<h4>Relación con PostgreSQL</h4>
<table>
<tr><th>Formato</th><th>Uso típico en PostgreSQL</th></tr>
<tr><td><strong>CSV</strong></td><td>Importación y exportación masiva de filas con la orden <code>COPY</code></td></tr>
<tr><td><strong>JSON</strong></td><td>Columnas de tipo <code>JSON</code> o <code>JSONB</code> para datos semiestructurados dentro de una tabla relacional</td></tr>
<tr><td><strong>XML</strong></td><td>Integración con sistemas heredados que exigen ese formato por normativa</td></tr>
</table>`
  },

  /* ---------------- 7 ---------------- */
  {
    id: 'xbd-ud1-7',
    tipo: 'tema',
    titulo: '7. Clasificación de las bases de datos',
    resumen: 'Por modelo de datos (relacional, documental, clave-valor, columnar, grafos, series temporales), por ubicación (centralizada, distribuida, nube, embebida) y el teorema CAP.',
    claves: ['Por modelo: relacional, documental, clave-valor, columnar, grafos, series temporales', 'Por ubicación: centralizada, distribuida, nube, embebida', 'Teorema CAP: solo 2 de 3'],
    tags: ['clasificación', 'nosql', 'relacional', 'documental', 'clave-valor', 'columnar', 'grafos', 'series temporales', 'cap'],
    links: ['xbd-ud1-7-1', 'xbd-ud1-7-2', 'xbd-ud1-7-3', 'xbd-ud1-ej5'],
    contenido: `
<p>Las bases de datos se pueden clasificar según <strong>el modelo de datos</strong> que utilizan, según <strong>dónde se ubican</strong> los datos y, en el caso de los sistemas distribuidos, según qué propiedades priorizan del <strong>teorema CAP</strong>.</p>
<ul>
  <li><strong>7.1 Por modelo de datos:</strong> relacional, documental, clave-valor, columnar, grafos, series temporales.</li>
  <li><strong>7.2 Por ubicación:</strong> centralizada, distribuida, en la nube, embebida.</li>
  <li><strong>7.3 Teorema CAP:</strong> Consistencia, Disponibilidad, Tolerancia a particiones: solo 2 de 3.</li>
</ul>`
  },
  {
    id: 'xbd-ud1-7-1',
    tipo: 'subtema',
    titulo: '7.1 Clasificación por modelo de datos',
    resumen: 'Relacional (PostgreSQL), Documental (MongoDB), Clave-valor (Redis), Columnar (Cassandra), Grafos (Neo4j), Series temporales (InfluxDB, TimescaleDB).',
    claves: ['Relacional: PostgreSQL, MariaDB, Oracle', 'Documental: MongoDB, CouchDB', 'Clave-valor: Redis, Memcached', 'Columnar: Cassandra, Redshift', 'Grafos: Neo4j, Neptune', 'Series temporales: InfluxDB, TimescaleDB'],
    tags: ['relacional', 'documental', 'clave-valor', 'columnar', 'grafos', 'series temporales', 'postgresql', 'mongodb', 'redis', 'cassandra', 'neo4j', 'influxdb', 'timescaledb', 'mariadb', 'oracle'],
    contenido: `
<table>
<tr><th>Modelo</th><th>Descripción</th><th>Ejemplos</th></tr>
<tr><td><strong>Relacional</strong></td><td>Tablas, filas, columnas. SQL estándar. Claves foráneas.</td><td>PostgreSQL, MariaDB, Oracle</td></tr>
<tr><td><strong>Documental</strong></td><td>Colecciones de documentos JSON/BSON. Esquema flexible.</td><td>MongoDB, CouchDB</td></tr>
<tr><td><strong>Clave-valor</strong></td><td>Pares clave-valor. Máxima velocidad para datos simples.</td><td>Redis, Memcached</td></tr>
<tr><td><strong>Columnar</strong></td><td>Almacenamiento por columnas. Eficiente para analítica.</td><td>Cassandra, Redshift</td></tr>
<tr><td><strong>Grafos</strong></td><td>Nodos y aristas. Relaciones complejas.</td><td>Neo4j, Amazon Neptune</td></tr>
<tr><td><strong>Series temporales</strong></td><td>Optimizado para métricas y sensores IoT.</td><td>InfluxDB, TimescaleDB</td></tr>
</table>`
  },
  {
    id: 'xbd-ud1-7-2',
    tipo: 'subtema',
    titulo: '7.2 Clasificación por ubicación',
    resumen: 'Centralizada (un servidor), Distribuida (varios nodos, aplica CAP), En la nube (PaaS: RDS, Supabase), Embebida (SQLite).',
    claves: ['Centralizada: un servidor (PostgreSQL en Docker)', 'Distribuida: nodos coordinados, aplica CAP', 'Nube: PaaS (RDS, Supabase, Railway)', 'Embebida: dentro de la app (SQLite)'],
    tags: ['centralizada', 'distribuida', 'nube', 'paas', 'embebida', 'sqlite', 'rds', 'supabase', 'docker'],
    contenido: `
<table>
<tr><th>Tipo</th><th>Descripción</th><th>Ejemplo en el módulo</th></tr>
<tr><td><strong>Centralizada</strong></td><td>Todos los datos en un único servidor</td><td>PostgreSQL en un contenedor Docker</td></tr>
<tr><td><strong>Distribuida</strong></td><td>Datos repartidos entre nodos coordinados. Aplica el teorema CAP.</td><td>Clúster PostgreSQL con replicación (fuera del alcance de esta UD)</td></tr>
<tr><td><strong>En la nube</strong></td><td>Servicio PaaS gestionado por un proveedor</td><td>Amazon RDS for PostgreSQL, Supabase, Railway</td></tr>
<tr><td><strong>Embebida</strong></td><td>Motor integrado dentro de la aplicación, sin servidor separado</td><td>SQLite (móviles, escritorio)</td></tr>
</table>`
  },
  {
    id: 'xbd-ud1-7-3',
    tipo: 'subtema',
    titulo: '7.3 El teorema CAP',
    resumen: 'Brewer (2000): un sistema distribuido solo puede garantizar 2 de 3: Consistencia, Disponibilidad, Tolerancia a particiones. Sistemas CP vs AP. Consistencia CAP ≠ Consistencia ACID.',
    claves: ['Brewer 2000; demostrado por Gilbert y Lynch 2002', 'C: todos los nodos devuelven el mismo dato', 'A: siempre responde', 'P: sigue funcionando con la red partida', 'Las particiones son inevitables → elegir C o A', 'CP: PostgreSQL síncrono, HBase, Zookeeper', 'AP: MongoDB, Cassandra, CouchDB, DynamoDB, Redis cluster', 'Consistencia CAP (global) ≠ Consistencia ACID (local)'],
    tags: ['cap', 'brewer', 'consistencia', 'disponibilidad', 'availability', 'partición', 'partition tolerance', 'cp', 'ap', 'ca', 'consistencia eventual', 'hbase', 'zookeeper', 'cassandra', 'dynamodb', 'redis cluster'],
    contenido: `
<p>En el año 2000, <strong>Eric Brewer</strong> propuso el teorema CAP (teorema de Brewer). Demostrado formalmente por Gilbert y Lynch en 2002, establece que un sistema de bases de datos <strong>distribuido</strong> no puede garantizar simultáneamente las tres propiedades; como máximo dos de las tres:</p>
<table>
<tr><th></th><th>Propiedad</th><th>Definición</th><th>Ejemplo</th></tr>
<tr><td><strong>C</strong></td><td><strong>Consistencia</strong> (Consistency)</td><td>Todos los nodos devuelven siempre el mismo dato en el mismo momento. Una lectura tras una escritura correcta siempre devuelve el último valor escrito, sea cual sea el nodo.</td><td>Si actualizas el stock de un produto en el nodo A, el nodo B devuelve inmediatamente el mismo stock actualizado.</td></tr>
<tr><td><strong>A</strong></td><td><strong>Disponibilidad</strong> (Availability)</td><td>El sistema siempre responde aunque algunos nodos hayan caído. Cada petición recibe respuesta (no necesariamente con el dato más reciente).</td><td>Aunque el nodo B esté caído, el sistema responde con el último valor almacenado en el nodo A.</td></tr>
<tr><td><strong>P</strong></td><td><strong>Tolerancia a Particiones</strong> (Partition tolerance)</td><td>El sistema sigue funcionando aunque se pierda la comunicación entre nodos (la red divide el clúster en dos mitades incomunicadas).</td><td>Si la red entre el centro de datos de Vigo y el de Madrid se corta, cada mitad sigue atendiendo peticiones.</td></tr>
</table>
<h4>Triángulo de Brewer</h4>
<table>
<tr><th>Lado</th><th>Sistemas</th></tr>
<tr><td><strong>CP</strong> (Consistencia + Partición)</td><td>PostgreSQL (clúster síncrono), HBase, Zookeeper</td></tr>
<tr><td><strong>AP</strong> (Disponibilidad + Partición)</td><td>MongoDB, Cassandra, CouchDB, DynamoDB</td></tr>
<tr><td><strong>CA</strong> (Consistencia + Disponibilidad)</td><td>Sistemas locales (sin partición real)</td></tr>
</table>
<div class="box danger"><div class="box-title">🚨 Lo que el teorema CAP dice en realidad</div>
<p>En un sistema distribuido real, <strong>las particiones de red son inevitables</strong> (cables cortados, switches que fallan, latencias). La pregunta práctica no es "C, A o P" sino <strong>"¿qué hacemos cuando hay una partición: priorizamos C o A?"</strong>.</p>
<ul>
  <li><strong>Sistemas CP:</strong> ante una partición, dejan de responder antes que devolver datos inconsistentes. Priorizan la corrección. PostgreSQL en modo síncrono, HBase, Zookeeper.</li>
  <li><strong>Sistemas AP:</strong> ante una partición, siguen respondiendo aunque la respuesta pueda estar desactualizada. Priorizan la disponibilidad. MongoDB (por defecto), Cassandra, CouchDB, DynamoDB.</li>
</ul>
<p>Los sistemas <strong>CA</strong> solo son posibles en redes locales perfectas: prácticamente inexistentes en entornos distribuidos reales. <strong>PostgreSQL en una sola máquina no entra en el dominio del teorema CAP</strong>: es un sistema centralizado.</p></div>
<table>
<tr><th>SGBD</th><th>CAP</th><th>Por qué</th></tr>
<tr><td>PostgreSQL (clúster síncrono)</td><td><strong>CP</strong></td><td>Replicación síncrona: bloquea la escritura hasta que todas las réplicas confirman. Consistente pero puede dejar de responder si un nodo cae.</td></tr>
<tr><td>MongoDB (replica set por defecto)</td><td><strong>AP</strong></td><td>El primario acepta escrituras y replica en segundo plano. Ante partición, los secundarios pueden servir datos algo desactualizados.</td></tr>
<tr><td>Apache Cassandra</td><td><strong>AP</strong></td><td>Consistencia eventual: todos los nodos convergen al mismo valor, pero no de forma instantánea. Maximiza disponibilidad y escritura masiva.</td></tr>
<tr><td>HBase</td><td><strong>CP</strong></td><td>Basado en HDFS. Prefiere bloquear operaciones antes que devolver datos inconsistentes.</td></tr>
<tr><td>Redis (modo cluster)</td><td><strong>AP</strong></td><td>Acepta lecturas de secundarios (posiblemente desactualizadas) para maximizar disponibilidad.</td></tr>
</table>
<div class="box info"><div class="box-title">🔄 Consistencia en CAP vs. Consistencia en ACID</div>
<ul>
  <li><strong>ACID → C:</strong> la BD cumple todas sus restricciones de integridad después de cada transacción (CHECK, FK, UNIQUE). Propiedad <em>local</em> a un solo nodo.</li>
  <li><strong>CAP → C:</strong> todos los nodos del sistema distribuido devuelven el mismo dato en el mismo instante. Propiedad <em>global</em> entre nodos.</li>
</ul>
<p>Un sistema puede tener ACID-Consistencia sin tener CAP-Consistencia, y viceversa.</p></div>`
  },
  {
    id: 'xbd-ud1-ej5',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 5 · CAP en casos reales',
    resumen: 'PostgreSQL en un contenedor (CAP no aplica), clúster MongoDB de catálogo (AP), banco con HBase que bloquea transferencias (CP).',
    claves: ['Un solo nodo → CAP no aplica', 'Catálogo MongoDB que sigue sirviendo → AP', 'Banco HBase que bloquea → CP'],
    tags: ['ejercicio', 'cap', 'cp', 'ap', 'mongodb', 'hbase'],
    contenido: `
<div class="box ex"><div class="box-title">✍️ Enunciado</div>
<p>Clasifica cada escenario según el teorema CAP y razona tu respuesta:</p>
<ol>
  <li>TendaGalicia despliega su BD en un único contenedor PostgreSQL en un servidor.</li>
  <li>Se añade un clúster de tres nodos MongoDB para el catálogo. Ante una partición, sigue sirviendo páginas aunque el stock pueda estar desactualizado unos segundos.</li>
  <li>Un sistema bancario usa HBase y bloquea todas las transferencias durante una partición de red para evitar inconsistencias de saldo.</li>
</ol></div>
<details><summary>Solución</summary>
<ol>
  <li><strong>CAP no aplica</strong> a sistemas centralizados (un solo nodo). No hay distribución ni partición posible. PostgreSQL en un contenedor es un sistema ACID centralizado fuera del dominio CAP.</li>
  <li><strong>AP:</strong> prioriza disponibilidad (sigue respondiendo) sobre consistencia inmediata (stock ligeramente desactualizado). MongoDB por defecto es AP.</li>
  <li><strong>CP:</strong> prioriza consistencia (saldos siempre correctos) sobre disponibilidad (bloquea operaciones durante la partición). Elección correcta para un sistema financiero.</li>
</ol></details>`
  },

  /* ---------------- 8 ---------------- */
  {
    id: 'xbd-ud1-8',
    tipo: 'tema',
    titulo: '8. PostgreSQL vs. MongoDB',
    resumen: 'Relacional vs documental; esquema rígido vs flexible; SQL vs MQL; ACID completo vs ACID por documento; CP vs AP; licencia libre vs SSPL; escalado vertical vs horizontal.',
    claves: ['Relacional (tablas) vs documental (JSON/BSON)', 'Esquema rígido (DDL) vs flexible', 'SQL vs MQL', 'ACID completo vs multi-documento desde v4.0', 'CP vs AP', 'PostgreSQL License vs SSPL (no OSI)', 'Escala vertical vs horizontal (sharding)'],
    tags: ['postgresql', 'mongodb', 'comparativa', 'sql', 'mql', 'sspl', 'sharding', 'escalabilidad', 'licencia'],
    contenido: `
<p>Los dos SGBD del módulo representan los dos modelos más extendidos: relacional y documental.</p>
<table>
<tr><th>Criterio</th><th>PostgreSQL 18</th><th>MongoDB 7</th></tr>
<tr><td>Modelo</td><td>Relacional (tablas, filas, columnas)</td><td>Documental (colecciones JSON/BSON)</td></tr>
<tr><td>Estructura</td><td>Esquema rígido definido con DDL</td><td>Esquema flexible (schema-less)</td></tr>
<tr><td>Lenguaje</td><td>SQL estándar ISO/ANSI</td><td>MQL (MongoDB Query Language)</td></tr>
<tr><td>Transacciones ACID</td><td>ACID completo desde siempre</td><td>ACID en documento; multi-documento desde v4.0</td></tr>
<tr><td>Clasificación CAP</td><td>CP (en clúster síncrono)</td><td>AP (por defecto en replica set)</td></tr>
<tr><td>Licencia</td><td>PostgreSQL License (libre, estilo MIT)</td><td>SSPL 1.0: código disponible, no open source según la OSI</td></tr>
<tr><td>Escalabilidad</td><td>Vertical (más CPU/RAM)</td><td>Horizontal (sharding entre nodos)</td></tr>
<tr><td>Caso de uso ideal</td><td>Datos relacionales con integridad estricta</td><td>Documentos variables; prototipado rápido</td></tr>
</table>
<div class="box warn"><div class="box-title">⚠️ Licencia de MongoDB</div>
<p>Desde octubre de 2018 (versión 4.0) MongoDB Community Server se distribuye bajo la <strong>SSPL</strong> (Server Side Public License), no bajo la antigua AGPL. La OSI no la reconoce como open source, por lo que se describe como «código disponible» (<em>source-available</em>). La licencia impone condiciones a quien ofrezca MongoDB como servicio en la nube sin acuerdo comercial, pero <strong>no afecta al uso educativo, de estudio o interno</strong>, que es gratuito.</p></div>`
  },

  /* ---------------- 9 ---------------- */
  {
    id: 'xbd-ud1-9',
    tipo: 'tema',
    titulo: '9. Ciclo de vida de una base de datos',
    resumen: 'Seis fases: Análisis (UD1) → Diseño E/R (UD2) → Diseño relacional (UD2) → Normalización (UD2) → Diseño físico (UD3) → Implementación (UD3).',
    claves: ['1 Análisis de requisitos (UD1)', '2 Diseño E/R (UD2)', '3 Diseño relacional (UD2)', '4 Normalización 1FN/2FN/3FN (UD2)', '5 Diseño físico (UD3)', '6 Implementación DDL (UD3)'],
    tags: ['ciclo de vida', 'análisis de requisitos', 'diseño e/r', 'diseño relacional', 'normalización', '1fn', '2fn', '3fn', 'diseño físico', 'implementación', 'ddl'],
    links: ['xbd-ud1-ej6'],
    contenido: `
<p>Crear una base de datos de calidad sigue un proceso estructurado que garantiza un resultado correcto, eficiente y mantenible. Lo recorreremos a lo largo de todo el módulo.</p>
<table>
<tr><th>#</th><th>Fase</th><th>Qué se hace</th><th>UD</th></tr>
<tr><td>1</td><td><strong>Análisis de requisitos</strong></td><td>Qué datos necesita el negocio</td><td>UD1</td></tr>
<tr><td>2</td><td><strong>Diseño E/R</strong></td><td>Modelo conceptual: entidades y relaciones</td><td>UD2</td></tr>
<tr><td>3</td><td><strong>Diseño relacional</strong></td><td>Tablas, PKs, FKs</td><td>UD2</td></tr>
<tr><td>4</td><td><strong>Normalización</strong></td><td>Eliminar redundancias: 1FN, 2FN, 3FN</td><td>UD2</td></tr>
<tr><td>5</td><td><strong>Diseño físico</strong></td><td>Tipos, índices</td><td>UD3</td></tr>
<tr><td>6</td><td><strong>Implementación</strong></td><td>Crear la BD real con DDL PostgreSQL</td><td>UD3</td></tr>
</table>`
  },
  {
    id: 'xbd-ud1-ej6',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 6 · Ciclo de vida aplicado a TendaGalicia',
    resumen: 'Una tarea concreta de TendaGalicia por cada fase del ciclo de vida.',
    claves: ['Análisis: clientes, catálogo, pedidos, valoraciones', 'E/R: Cliente, Produto, Pedido, Linha, Categoría', 'Relacional: tablas con PK/FK', 'Normalización: sin dependencias parciales', 'Físico: NUMERIC(10,2), índices', 'Implementación: S3_script_TendaGalicia.sql'],
    tags: ['ejercicio', 'ciclo de vida', 'tendagalicia'],
    contenido: `
<div class="box ex"><div class="box-title">✍️ Enunciado</div><p>Indica una tarea concreta de TendaGalicia para cada fase del ciclo.</p></div>
<details><summary>Solución</summary>
<ul>
  <li><strong>Análisis:</strong> el negocio necesita gestionar clientes, catálogo con stock, pedidos con líneas y valoraciones.</li>
  <li><strong>Diseño E/R:</strong> diagramar entidades Cliente, Produto, Pedido, Linha, Categoría con sus atributos y relaciones.</li>
  <li><strong>Diseño relacional:</strong> transformar el E/R en tablas con PKs, FKs y restricciones.</li>
  <li><strong>Normalización:</strong> verificar que no hay dependencias parciales; el nombre del produto no se repite en <code>linhas_pedido</code>.</li>
  <li><strong>Diseño físico:</strong> <code>NUMERIC(10,2)</code> para precios, índices sobre <code>email</code> e <code>id_produto</code>.</li>
  <li><strong>Implementación:</strong> ejecutar el script <code>S3_script_TendaGalicia.sql</code> en PostgreSQL.</li>
</ul></details>`
  },

  /* ---------------- 10 ---------------- */
  {
    id: 'xbd-ud1-10',
    tipo: 'tema',
    titulo: '10. El esquema de TendaGalicia',
    resumen: 'BD de prácticas: 7 tablas (categorias, provedores, produtos, clientes, pedidos, linhas_pedido, valoracions). Volúmenes S3 (reducido) y S4 (~20.000 líneas).',
    claves: ['7 tablas: categorias, provedores, produtos, clientes, pedidos, linhas_pedido, valoracions', 'produtos → categorias, provedores', 'pedidos → clientes', 'linhas_pedido → pedidos, produtos', 'valoracions → clientes, produtos', 'S3 reducido · S4 ~20.000 líneas'],
    tags: ['tendagalicia', 'esquema', 'categorias', 'provedores', 'produtos', 'clientes', 'pedidos', 'linhas_pedido', 'valoracions', 'pk', 'fk', 'serial', 's3', 's4'],
    contenido: `
<p><strong>TendaGalicia</strong> es la base de datos de prácticas del módulo: una plataforma gallega de comercio electrónico simulada. Dos volúmenes de datos: <strong>S3</strong> (datos reducidos para aprendizaje) y <strong>S4</strong> (~20.000 filas en <code>linhas_pedido</code> para optimización y rendimiento).</p>
<table>
<tr><th>Tabla</th><th>Columnas</th></tr>
<tr><td><strong>categorias</strong></td><td><code>PK id_categoria SERIAL</code> · <code>nome VARCHAR(60) NOT NULL</code> · <code>descripcion TEXT</code></td></tr>
<tr><td><strong>provedores</strong></td><td><code>PK id_provedor SERIAL</code> · <code>nome VARCHAR(120)</code> · <code>pais VARCHAR(60)</code> · <code>email VARCHAR(120)</code></td></tr>
<tr><td><strong>produtos</strong></td><td><code>PK id_produto SERIAL</code> · <code>nome VARCHAR(120)</code> · <code>prezo NUMERIC(10,2)</code> · <code>stock INTEGER &gt;= 0</code> · <code>FK id_categoria</code> · <code>FK id_provedor</code></td></tr>
<tr><td><strong>clientes</strong></td><td><code>PK id_cliente SERIAL</code> · <code>nome VARCHAR(120)</code> · <code>email VARCHAR(120) UNIQUE</code> · <code>cidade VARCHAR(80)</code> · <code>data_rexistro DATE</code></td></tr>
<tr><td><strong>pedidos</strong></td><td><code>PK id_pedido SERIAL</code> · <code>FK id_cliente</code> · <code>data_pedido DATE</code> · <code>estado VARCHAR(20)</code> · <code>total NUMERIC(10,2)</code></td></tr>
<tr><td><strong>linhas_pedido</strong></td><td><code>PK id_linha SERIAL</code> · <code>FK id_pedido</code> · <code>FK id_produto</code> · <code>cantidade INTEGER &gt; 0</code> · <code>prezo_unitaria NUMERIC</code></td></tr>
<tr><td><strong>valoracions</strong></td><td><code>PK id_valoracion SERIAL</code> · <code>FK id_cliente</code> · <code>FK id_produto</code> · <code>puntuacion 1..5</code> · <code>comentario TEXT</code></td></tr>
</table>
<h4>Relaciones (FK → PK)</h4>
<ul>
  <li><code>produtos.id_categoria → categorias</code> · <code>produtos.id_provedor → provedores</code></li>
  <li><code>pedidos.id_cliente → clientes</code></li>
  <li><code>linhas_pedido.id_pedido → pedidos</code> · <code>linhas_pedido.id_produto → produtos</code></li>
  <li><code>valoracions.id_cliente → clientes</code> · <code>valoracions.id_produto → produtos</code></li>
</ul>
<div class="box info"><div class="box-title">Leyenda y volúmenes</div>
<p><strong>PK</strong> = clave primaria (identifica de forma única cada fila) · <strong>FK</strong> = clave foránea (referencia a otra tabla).</p>
<p><strong>S3:</strong> ~20 clientes, ~20 productos, ~20 pedidos · <strong>S4:</strong> ~1.000 clientes, ~5.000 pedidos, ~20.000 linhas_pedido.</p>
<p>Los identificadores en gallego (<code>produtos</code>, <code>provedores</code>, <code>linhas_pedido</code>, <code>valoracions</code>) se conservan como nombres de objeto SQL.</p></div>`
  },

  /* ---------------- GLOSARIO ---------------- */
  {
    id: 'xbd-ud1-glosario',
    tipo: 'glosario',
    titulo: 'Glosario UD1',
    resumen: 'ACID, ANSI/SPARC, CAP, FK, consistencia eventual, DBA, DDL, DML, DQL, MVCC, MQL, WAL, sharding, transacción…',
    claves: ['21 términos clave de la unidad'],
    tags: ['glosario', 'acid', 'ansi/sparc', 'cap', 'clave foránea', 'consistencia eventual', 'dba', 'ddl', 'dml', 'dql', 'metadato', 'mql', 'mvcc', 'optimizador', 'parser', 'redundancia', 'sharding', 'sgbd', 'sql', 'transacción', 'wal'],
    contenido: `
<dl>
<dt>ACID</dt><dd>Conjunto de propiedades que garantizan la fiabilidad de las transacciones: Atomicidad, Consistencia, Aislamiento y Durabilidad.</dd>
<dt>ANSI/SPARC</dt><dd>Arquitectura de tres niveles (Externo, Conceptual, Interno) que describe cómo se organiza lógicamente un SGBD.</dd>
<dt>CAP</dt><dd>Teorema de Brewer: un sistema distribuido no puede garantizar simultáneamente Consistencia, Disponibilidad y Tolerancia a Particiones.</dd>
<dt>Clave foránea (FK)</dt><dd>Columna que referencia la clave primaria de otra tabla para garantizar integridad referencial.</dd>
<dt>Consistencia eventual</dt><dd>Propiedad de los sistemas AP: todos los nodos convergen al mismo valor, pero no de forma instantánea.</dd>
<dt>DBA</dt><dd>Database Administrator: responsable de instalar, configurar, monitorizar y mantener el SGBD.</dd>
<dt>DDL</dt><dd>Data Definition Language: sentencias SQL para crear y modificar estructuras (CREATE, ALTER, DROP).</dd>
<dt>DML</dt><dd>Data Manipulation Language: sentencias SQL para manipular datos (INSERT, UPDATE, DELETE).</dd>
<dt>DQL</dt><dd>Data Query Language: sentencias SQL para consultar datos (SELECT).</dd>
<dt>Gestor de concurrencia</dt><dd>Componente del SGBD que controla el acceso simultáneo. PostgreSQL usa MVCC.</dd>
<dt>Metadato</dt><dd>Dato que describe a otros datos. El diccionario de datos almacena metadatos.</dd>
<dt>MQL</dt><dd>MongoDB Query Language: lenguaje de consulta nativo de MongoDB basado en filtros JSON.</dd>
<dt>MVCC</dt><dd>Multiversion Concurrency Control: mecanismo de PostgreSQL para aislar transacciones sin bloqueos de lectura.</dd>
<dt>Optimizador de consultas</dt><dd>Componente del SGBD que elige el plan de ejecución más eficiente.</dd>
<dt>Parser</dt><dd>Analizador sintáctico: verifica que una sentencia SQL es gramaticalmente correcta.</dd>
<dt>Redundancia</dt><dd>Repetición del mismo dato en múltiples lugares, fuente de inconsistencias.</dd>
<dt>Sharding</dt><dd>Técnica de escalado horizontal: los datos se dividen entre varios nodos según una clave de partición.</dd>
<dt>SGBD</dt><dd>Sistema Gestor de Bases de Datos: software intermediario entre usuarios y datos.</dd>
<dt>SQL</dt><dd>Structured Query Language: lenguaje estándar ISO/ANSI para bases de datos relacionales.</dd>
<dt>Transacción</dt><dd>Unidad lógica de trabajo que se ejecuta completamente o no se ejecuta (BEGIN / COMMIT / ROLLBACK).</dd>
<dt>WAL</dt><dd>Write-Ahead Log: fichero de registro de PostgreSQL que garantiza la Durabilidad (D de ACID).</dd>
</dl>`
  },

  /* ---------------- RECURSOS ---------------- */
  {
    id: 'xbd-ud1-recursos',
    tipo: 'recursos',
    titulo: 'Recursos UD1',
    resumen: 'Documentación oficial PostgreSQL y MongoDB, DB-Engines Ranking, artículo "CAP Twelve Years Later" (Brewer, 2012).',
    claves: ['Docs PostgreSQL', 'Docs MongoDB', 'DB-Engines Ranking', 'CAP Twelve Years Later (Brewer, 2012)'],
    tags: ['recursos', 'documentación', 'postgresql', 'mongodb', 'db-engines', 'brewer'],
    contenido: `
<ul>
  <li><a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener">Documentación oficial de PostgreSQL</a></li>
  <li><a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener">Documentación oficial de MongoDB</a></li>
  <li><a href="https://db-engines.com/en/ranking" target="_blank" rel="noopener">DB-Engines Ranking</a> · ranking actualizado de SGBD</li>
  <li><a href="https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/" target="_blank" rel="noopener">CAP Twelve Years Later</a> (Brewer, 2012)</li>
</ul>
<p class="muted">Material didáctico · MP0372 Xestión de Bases de Datos · ASIR · IES Aller Ulloa (Lalín) · Curso 2026-2027<br>
Autoría: Javier Feijóo López · Licencia CC BY-NC-SA 4.0<br>
Contenido elaborado con apoyo de inteligencia artificial y revisado por el docente antes de su publicación.</p>`
  }
  ]
});
