/* ============================================================
 * XBD · Xestión de Bases de Datos (MP0372) · Unidad 2
 * Diseño conceptual y lógico de bases de datos
 * ------------------------------------------------------------
 * Fuente: apuntes/xbd/ud2/unidad2.html (+ imágenes en apuntes/xbd/ud2/imagenes/)
 * Generado con tools/parse_xbd_ud2.py (contenido) + tools/meta_xbd_ud2.py (resúmenes, claves, tags).
 * ============================================================ */
window.APUNTES = window.APUNTES || { materias: {}, unidades: [] };

window.APUNTES.materias.xbd = window.APUNTES.materias.xbd || { id: 'xbd', nombre: 'Xestión de Bases de Datos', abrev: 'XBD', codigo: 'MP0372', color: '#1d4e89', descripcion: 'Del dato al SGBD. PostgreSQL y MongoDB sobre la base de datos de prácticas TendaGalicia.', sugerencias: ['ACID', 'CAP', 'clave primaria', 'entidad', 'cardinalidad', 'normalización', 'JSON', 'PostgreSQL'] };

window.APUNTES.unidades.push({
  materia: 'xbd',
  id: 'xbd-ud2',
  codigo: 'UD2',
  titulo: 'Diseño conceptual y lógico de bases de datos',
  fuente: 'apuntes/xbd/ud2/unidad2.html',
  nodos: [

  /* ---------------- HUB ---------------- */
  {
    id: 'xbd-ud2',
    tipo: 'unidad',
    titulo: 'UD2 · Diseño conceptual y lógico de bases de datos',
    resumen: 'Del enunciado al esquema relacional: modelo Entidad-Relación (entidades, atributos, relaciones, cardinalidades), E-R extendido, paso a tablas, claves e integridad, grafo relacional y normalización hasta 5FN.',
    claves: ['Fases: requisitos → conceptual → lógico → físico → implementación → pruebas → mantenimiento', 'Modelo E-R (Chen, 1976): entidades, atributos, relaciones', 'Participación (mín,máx) y cardinalidad 1:1 · 1:N · N:M', 'Entidades débiles: dependencia de identificación y de existencia', 'E-R extendido: generalización/especialización, agregación, exclusión/inclusión', 'Modelo relacional (Codd, 1970): tablas, tuplas, dominios', 'Claves primaria, candidata, alternativa y foránea · integridad de entidad y referencial', 'Grafo relacional: B:C B:R B:N B:D · M:C M:R M:N M:D', 'Traducción E-R → relacional: 1:1, 1:N, N:M, débiles, especialización', 'Normalización: 1FN, 2FN, 3FN, BCNF, 4FN, 5FN', 'Notaciones: Chen, Crow\'s Foot, UML'],
    tags: ['xbd', 'ud2', 'modelo entidad-relación', 'diseño conceptual', 'diseño lógico', 'modelo relacional', 'normalización', 'claves', 'cardinalidad'],
    contenido: `
<p>Segunda unidad del módulo <strong>MP0372 Xestión de Bases de Datos</strong>. Cubre las dos primeras fases del diseño de una base de datos: el <strong>diseño conceptual</strong> con el modelo Entidad-Relación y el <strong>diseño lógico</strong> con el modelo relacional, incluyendo la transformación entre ambos y la normalización.</p>
<h4>Mapa de la unidad</h4>
<ol>
  <li>Introducción al diseño conceptual (fases del diseño)</li>
  <li>Modelo Entidad-Relación: entidades, atributos, relaciones, participación y cardinalidad</li>
  <li>Entidades débiles y dependencias</li>
  <li>Modelo E-R extendido: generalización/especialización, agregación, inclusión/exclusión</li>
  <li>Del enunciado al modelo E-R</li>
  <li>Herramientas (DIA, draw.io, MySQL Workbench…)</li>
  <li>Introducción al diseño lógico y al modelo relacional</li>
  <li>Elementos del modelo relacional: relación, atributo, dominio, tupla</li>
  <li>Claves y reglas de integridad</li>
  <li>Notación: grafo relacional</li>
  <li>Transformación E-R → relacional</li>
  <li>Normalización (1FN … 5FN) con ejemplo completo</li>
  <li>Notaciones alternativas: Crow's Foot y UML</li>
</ol>
<div class="box info"><div class="box-title">Imágenes</div><p>Los diagramas del original están incluidos en los apartados (clic en una figura para ampliarla). Algunas capturas de tablas de ejemplo no venían en el material recibido; en su lugar se conserva la descripción.</p></div>
<p class="muted">Material didáctico · ASIR · IES Aller Ulloa (Lalín) · Autoría: Javier Feijóo López · CC BY-NC-SA 4.0</p>`
  },
  {
    id: 'xbd-ud2-1',
    tipo: 'tema',
    titulo: '1. Introducción al diseño conceptual de bases de datos',
    resumen: 'Por qué diseñar antes de implementar: una BD robusta, flexible y escalable empieza por un buen diseño conceptual.',
    claves: ['El diseño de BD es un pilar del desarrollo de aplicaciones', 'Diseño conceptual = primera fase, independiente del SGBD'],
    tags: ['diseño conceptual', 'introducción', 'diseño de bases de datos'],
    links: ['xbd-ud2-1-1', 'xbd-ud2-1-2', 'xbd-ud2-1-3'],
    contenido: `<p>El diseño de bases de datos es uno de los pilares fundamentales en el desarrollo de aplicaciones, especialmente cuando hablamos de aplicaciones empresariales que requieren un manejo eficiente de grandes cantidades de datos. Para que las aplicaciones funcionen correctamente y puedan manejar datos de manera eficaz, es necesario diseñar una base de datos que sea robusta, flexible y escalable. Aquí es donde entra en juego el diseño conceptual de bases de datos.</p>`
  },
  {
    id: 'xbd-ud2-1-1',
    tipo: 'subtema',
    titulo: '1.1. Fases del diseño e implementación de una base de datos',
    resumen: 'Siete fases: 0 análisis de requisitos, 1 diseño conceptual (E-R), 2 diseño lógico (tablas), 3 diseño físico, 4 implementación (SQL), 5 pruebas, 6 mantenimiento.',
    claves: ['0. Requisitos → documento de requisitos', '1. Conceptual → diagrama E-R', '2. Lógico → tablas, PK y FK, normalización', '3. Físico → tipos de datos, índices', '4. Implementación → SQL (tablas, restricciones, triggers, vistas)', '5. Pruebas → CRUD e integridad', '6. Mantenimiento → índices, backups, cambios'],
    tags: ['fases', 'ciclo de vida', 'análisis de requisitos', 'diseño físico', 'implementación', 'pruebas', 'mantenimiento'],
    contenido: `<h4>0. Análisis de requisitos</h4>
<p>Identificar las necesidades del sistema, qué datos deben almacenarse y cómo se deben utilizar.</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Reunir información sobre los procesos de negocio.</em></li>
  <li><em>Identificar los datos y las relaciones clave.</em></li>
</ul>
<p><em>Resultado: documento de requisitos que detalla las necesidades del sistema.</em></p>

<h4>1. Diseño conceptual</h4>
<p>Crear un modelo abstracto que represente la estructura lógica de los datos sin preocuparse por la implementación física.</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Crear el modelo Entidad-Relación (E-R).</em></li>
  <li><em>Identificar entidades, relaciones y atributos.</em></li>
  <li><em>Establecer cardinalidades y reglas de integridad.</em></li>
</ul>
<p><em>Resultado: diagrama E-R que muestra la estructura conceptual de la base de datos.</em></p>

<h4>2. Diseño lógico</h4>
<p>Convertir el modelo conceptual en un modelo lógico adaptado al sistema de gestión de bases de datos relacional (SGBD).</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Transformar entidades en tablas y relaciones en claves foráneas.</em></li>
  <li><em>Definir claves primarias, claves foráneas y relaciones entre tablas.</em></li>
  <li><em>Aplicar normalización para eliminar redundancias y asegurar la integridad.</em></li>
</ul>
<p><em>Resultado: modelo lógico con tablas, claves primarias y foráneas.</em></p>

<h4>3. Diseño físico</h4>
<p>Definir cómo se almacenarán físicamente los datos en el SGBD.</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Seleccionar los tipos de datos adecuados para cada columna.</em></li>
  <li><em>Definir índices para mejorar el rendimiento de las consultas.</em></li>
  <li><em>Optimizar el diseño para almacenamiento y acceso rápido a los datos.</em></li>
</ul>
<p><em>Resultado: esquema físico de la base de datos.</em></p>

<h4>4. Implementación</h4>
<p>Crear la base de datos en el SGBD elegido.</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Escribir el código SQL para crear las tablas, claves primarias, foráneas y restricciones.</em></li>
  <li><em>Insertar datos iniciales (si es necesario).</em></li>
  <li><em>Implementar procedimientos almacenados, triggers y vistas.</em></li>
</ul>
<p><em>Resultado: base de datos operativa en el SGBD.</em></p>

<h4>5. Pruebas</h4>
<p>Verificar que la base de datos cumple con los requisitos y funciona correctamente.</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Probar las consultas y operaciones CRUD (crear, leer, actualizar, eliminar).</em></li>
  <li><em>Verificar que las reglas de integridad referencial se aplican correctamente.</em></li>
</ul>
<p><em>Resultado: base de datos funcional y lista para su uso.</em></p>

<h4>6. Mantenimiento</h4>
<p>Mantener el rendimiento y la integridad de la base de datos a lo largo del tiempo.</p>
<p><em>Acciones:</em></p>
<ul>
  <li><em>Optimizar consultas y añadir nuevos índices si es necesario.</em></li>
  <li><em>Realizar copias de seguridad periódicas.</em></li>
  <li><em>Modificar la estructura de la base de datos para adaptarse a nuevos requisitos.</em></li>
</ul>
<p><em>Resultado: base de datos optimizada y actualizada de manera continua.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe1.png" alt="Diagrama de las fases del desarrollo de una base de datos" loading="lazy"><figcaption>Diagrama de las fases del desarrollo de una base de datos: análisis de requisitos → diseño conceptual → diseño lógico → diseño físico → implementación → pruebas → mantenimiento.</figcaption></figure>`
  },
  {
    id: 'xbd-ud2-1-2',
    tipo: 'subtema',
    titulo: '1.2. ¿Qué es el diseño conceptual?',
    resumen: 'El diseño conceptual organiza la información de forma abstracta: independiente de la tecnología, enfocado en el negocio y con representación gráfica (E-R).',
    claves: ['Identificar entidades, atributos y relaciones', 'Independiente del SGBD', 'Enfocado en el negocio', 'Representación gráfica con diagramas E-R'],
    tags: ['diseño conceptual', 'abstracción', 'independencia tecnológica'],
    contenido: `<p>El diseño conceptual de bases de datos es la primera fase en el proceso de creación de una base de datos. Durante esta fase, se define cómo se organizará la información de manera abstracta, sin preocuparse todavía por el tipo de sistema de gestión de bases de datos (SGBD) que se usará.</p>
<p>El objetivo principal es identificar los objetos (entidades), sus propiedades (atributos) y las relaciones que existen entre ellos. Este proceso ayuda a comprender la estructura lógica de los datos antes de pensar en cómo se implementarán físicamente.</p>
<p>Características del diseño conceptual:</p>
<ul>
  <li><strong>Independiente de la tecnología:</strong> no nos preocupamos por qué SGBD vamos a usar (PostgreSQL, MySQL, Oracle, etc.). Solo definimos cómo se relacionan los datos.</li>
  <li><strong>Enfocado en el negocio:</strong> nos centramos en los datos y las relaciones que son importantes para resolver un problema o cumplir con los requisitos de una aplicación.</li>
  <li><strong>Representación gráfica:</strong> utilizamos diagramas como el modelo Entidad-Relación (E-R) para representar visualmente los datos, facilitando la comprensión y comunicación entre desarrolladores y analistas de negocio.</li>
</ul>`
  },
  {
    id: 'xbd-ud2-1-3',
    tipo: 'subtema',
    titulo: '1.3. Importancia del modelo Entidad-Relación (E-R) en el diseño de bases de datos',
    resumen: 'El modelo E-R es la herramienta clave del diseño conceptual: claridad, comunicación efectiva y reducción de errores. Elementos: entidades, atributos y relaciones.',
    claves: ['Ventajas: claridad, comunicación, menos errores', 'Entidades = objetos del mundo real', 'Atributos = características', 'Relaciones = asociaciones entre entidades'],
    tags: ['modelo E-R', 'ventajas', 'entidad', 'atributo', 'relación'],
    links: ['xbd-ud2-ej1'],
    contenido: `<p>El modelo Entidad-Relación (E-R) es la herramienta clave para el diseño conceptual de bases de datos. Este modelo permite representar los datos de una manera comprensible tanto para los desarrolladores como para los usuarios del negocio, antes de pasar a las etapas de diseño lógico y físico.</p>

<p><u>Ventajas del modelo E-R:</u></p>
<ul>
  <li><strong>Claridad:</strong> facilita la comprensión del sistema de información al representar gráficamente las entidades y sus relaciones.</li>
  <li><strong>Comunicación efectiva:</strong> ayuda a desarrolladores y analistas a comunicar cómo deben organizarse los datos para cumplir con los requisitos de la aplicación.</li>
  <li><strong>Reducción de errores:</strong> identificar problemas en el diseño conceptual evita errores en etapas posteriores, como la implementación física, donde corregirlos puede ser más costoso.</li>
</ul>

<p><u>Elementos clave del modelo E-R:</u></p>
<ul>
  <li><strong>Entidades:</strong> representan objetos del mundo real, como "Cliente", "Producto", "Pedido".</li>
  <li><strong>Atributos:</strong> son las características de las entidades, como el nombre de un cliente o el precio de un producto.</li>
  <li><strong>Relaciones:</strong> describen cómo se asocian las entidades entre sí. Por ejemplo, un cliente realiza un pedido, o un producto pertenece a una categoría.</li>
</ul>`
  },
  {
    id: 'xbd-ud2-ej1',
    tipo: 'ejercicio',
    titulo: 'Ejercicio 1 · Entidades de una app cotidiana',
    resumen: 'Piensa en una app que uses (mensajería, pedidos…): ¿qué entidades, atributos y relaciones tendría su base de datos?',
    claves: ['Identificar sustantivos → entidades', 'Propiedades → atributos', 'Verbos → relaciones'],
    tags: ['ejercicio', 'reflexión', 'entidades', 'atributos', 'relaciones'],
    contenido: `<div class="box ex"><div class="box-title">Ejercicio de reflexión</div><p>Piensa en una aplicación que uses habitualmente (una app de mensajería, un sistema de pedidos en línea, etc.). ¿Qué entidades podrías identificar en la base de datos que utiliza esa aplicación? ¿Qué atributos tendrían esas entidades? ¿Cómo se relacionan entre ellas?</p></div>`
  },
  {
    id: 'xbd-ud2-2',
    tipo: 'tema',
    titulo: '2. Modelo Entidad-Relación (E-R)',
    resumen: 'El modelo E-R representa visualmente entidades, atributos y relaciones, independiente del SGBD; es la base para el diseño lógico y físico.',
    claves: ['Representación visual de la organización de los datos', 'Independiente del SGBD', 'Base de la transformación al diseño lógico'],
    tags: ['modelo entidad-relación', 'E-R', 'diagrama E-R', 'Chen'],
    links: ['xbd-ud2-2-1', 'xbd-ud2-2-2', 'xbd-ud2-2-3', 'xbd-ud2-2-4', 'xbd-ud2-2-5'],
    contenido: `<p>El modelo Entidad-Relación (E-R) es una herramienta fundamental en el diseño conceptual de bases de datos. Este modelo permite representar de manera visual cómo se organizan los datos en una base de datos, definiendo las entidades, sus atributos y las relaciones entre ellas. Es independiente de cualquier SGBD y sirve como base para la transformación al diseño lógico y, posteriormente, al físico.</p>`
  },
  {
    id: 'xbd-ud2-2-1',
    tipo: 'subtema',
    titulo: '2.1. Historia y origen del modelo E-R',
    resumen: 'Propuesto por Peter Chen en 1976 para representar datos e interrelaciones de forma clara; sigue siendo crucial en aplicaciones multinivel.',
    claves: ['Peter Chen, 1976', 'Objetivo: diseño intuitivo y comunicación desarrollador–usuario', 'Evita inconsistencias y redundancias desde el inicio'],
    tags: ['Peter Chen', '1976', 'historia', 'origen'],
    contenido: `<p>El modelo Entidad-Relación fue propuesto por Peter Chen en 1976 como una forma de representar de manera clara y comprensible los datos y sus interrelaciones dentro de una base de datos. El objetivo era hacer el diseño de bases de datos más intuitivo, facilitando la comunicación entre desarrolladores y usuarios del sistema.</p>
<p>Hoy en día, el modelo E-R sigue siendo una herramienta crucial en el desarrollo de software, incluidas las aplicaciones que reparten su lógica entre varios niveles (cliente web, aplicación móvil, servidor). Es una forma eficiente de garantizar que los datos que utilizarán las distintas partes del sistema estén bien organizados desde el inicio, evitando inconsistencias y redundancias.</p>`
  },
  {
    id: 'xbd-ud2-2-2',
    tipo: 'subtema',
    titulo: '2.2. Diagramas Entidad-Relación',
    resumen: 'Los diagramas E-R son la representación gráfica del modelo conceptual: visión global, detección temprana de errores y comunicación con el equipo y el cliente.',
    claves: ['Primer paso hacia el diseño lógico y físico', 'Detectan errores antes de implementar', 'Herramienta de comunicación'],
    tags: ['diagrama E-R', 'representación gráfica', 'comunicación'],
    contenido: `<p>Los diagramas Entidad-Relación (E-R) son representaciones gráficas del modelo conceptual de una base de datos. Permiten visualizar las entidades, sus atributos y las relaciones entre ellas, facilitando la comprensión y comunicación del diseño tanto para los desarrolladores como para los clientes o analistas.</p>
<p>Un diagrama E-R es una herramienta visual utilizada para representar de manera clara la estructura de una base de datos en su fase conceptual. Los diagramas E-R son el primer paso hacia el diseño lógico y físico de la base de datos, y permiten detectar errores o inconsistencias en la estructura antes de implementar el sistema.</p>
<p>Los diagramas E-R ayudan a obtener una visión global del sistema de información, asegurando que las distintas partes de una aplicación manejen los mismos datos de forma consistente. Son también una buena forma de comunicarse con otros miembros del equipo de desarrollo, analistas o incluso con los clientes, para que todos comprendan la estructura de la base de datos. Un buen diagrama E-R simplifica la transformación al modelo lógico (tablas) y físico (índices, particiones, etc.) en un SGBD.</p>`
  },
  {
    id: 'xbd-ud2-2-3',
    tipo: 'subtema',
    titulo: '2.3. Las entidades',
    resumen: 'Entidad: objeto o concepto del que guardamos información. Fuertes (clave propia, rectángulo) frente a débiles (dependen de otra, doble rectángulo).',
    claves: ['Entidad fuerte: existencia independiente, clave primaria propia', 'Entidad débil: necesita la clave de la fuerte', 'Rectángulo simple vs doble rectángulo', 'Nombre en mayúsculas'],
    tags: ['entidad', 'entidad fuerte', 'entidad débil', 'rectángulo'],
    contenido: `<p>Una entidad es cualquier objeto del mundo real o concepto que tiene existencia dentro del sistema que estamos modelando y del cual necesitamos almacenar información.</p>
<p><em>Ejemplos de entidades:</em></p>
<ul>
  <li><em>En una aplicación de comercio electrónico: "Cliente", "Producto", "Pedido".</em></li>
  <li><em>En una aplicación de mensajería: "Usuario", "Mensaje", "Chat".</em></li>
</ul>

<h4>Tipos de entidades: fuertes y débiles</h4>
<ul>
  <li><strong>Entidades fuertes:</strong> tienen una existencia independiente. Tienen una clave primaria que las identifica de manera única.</li>
</ul>
<p><em>Ejemplo: "Cliente" es una entidad fuerte, porque puede identificarse por su "ID de Cliente" de manera única, sin depender de ninguna otra entidad.</em></p>
<p>Las entidades suelen representarse gráficamente como <u>rectángulos</u> en un diagrama E-R, con el nombre dentro en mayúsculas.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/entidad.png" alt="representación de una entidad fuerte" loading="lazy"><figcaption>Ejemplo de representación de una entidad fuerte: un rectángulo con el nombre en mayúsculas.</figcaption></figure>

<ul>
  <li><strong>Entidades débiles:</strong> no pueden existir sin estar relacionadas con una entidad fuerte. Dependen de otra entidad para su identificación y existencia.</li>
</ul>
<p><em>Ejemplo: un "Detalle de Pedido" es una entidad débil, ya que solo tiene sentido en el contexto de un "Pedido". No puede existir sin estar asociado a un pedido concreto.</em></p>
<p>Las entidades débiles se representan con un <u>doble rectángulo</u> y dependen de una interrelación de identificación con una entidad fuerte.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/entidad_debil.png" alt="representación de una entidad débil" loading="lazy"><figcaption>Ejemplo de representación de una entidad débil: un doble rectángulo.</figcaption></figure>

<h4>Para diferenciar entre entidades fuertes y débiles</h4>
<ul>
  <li><strong>Independencia:</strong> las entidades fuertes existen por sí mismas, mientras que las débiles dependen de otra entidad.</li>
  <li><strong>Clave primaria:</strong> una entidad fuerte tiene su propia clave primaria; una entidad débil necesita la clave de la entidad fuerte para poder identificarse.</li>
</ul>
<p>Las entidades débiles dependen de las entidades fuertes de dos maneras: por <strong>dependencia de identificación</strong> y por <strong>dependencia de existencia</strong>. Ambas se desarrollan en detalle en el apartado 3.</p>`
  },
  {
    id: 'xbd-ud2-2-4',
    tipo: 'subtema',
    titulo: '2.4. Atributos',
    resumen: 'Atributos: simples/compuestos, multivaluados, derivados, opcionales; y claves primaria, candidata y alternativa. Notación Chen (óvalos) y Piattini (círculos).',
    claves: ['Simple: no se descompone · Compuesto: dirección → calle, ciudad, CP', 'Multivaluado: doble borde (teléfonos)', 'Derivado: óvalo punteado (edad)', 'Opcional: enlace punteado', 'Clave primaria: única y no nula · candidata · alternativa', 'Piattini: círculo relleno = identificador principal'],
    tags: ['atributo', 'atributo compuesto', 'multivaluado', 'derivado', 'opcional', 'clave primaria', 'clave candidata', 'clave alternativa', 'notación Chen', 'notación Piattini'],
    contenido: `<p>Un atributo es una característica o propiedad que describe una entidad. Los atributos son los campos o columnas de una tabla cuando transformamos el diseño conceptual en un diseño lógico.</p>
<p>En algunos diseños podemos encontrar los atributos con un óvalo (<strong>notación de Chen</strong>) y el nombre dentro, o con un círculo con el nombre del atributo al lado (<strong>notación Piattini</strong>).</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe4.png" alt="Comparativa de notaciones: Chen y Piattini" loading="lazy"><figcaption>Comparativa de notaciones: óvalo con nombre dentro (Chen) frente a círculo con nombre al lado (Piattini).</figcaption></figure>

<h4>Atributos simples y compuestos</h4>
<ul>
  <li><strong>Atributo simple:</strong> no se puede descomponer en partes más pequeñas.</li>
</ul>
<p><em>Ejemplo: el "Nombre" de un cliente es un atributo simple. Se representan con óvalos conectados a la entidad; en los casos generales se denominan atributos descriptores.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe5.png" alt="atributo simple conectado a una entidad" loading="lazy"><figcaption>Ejemplo de atributo simple conectado a una entidad mediante un óvalo.</figcaption></figure>

<ul>
  <li><strong>Atributo compuesto:</strong> puede descomponerse en varios atributos más pequeños.</li>
</ul>
<p><em>Ejemplo: "Dirección" puede descomponerse en "Calle", "Ciudad" y "Código Postal". Se muestran como un óvalo que se conecta a varios subóvalos, o con un campo que cruza los simples.</em></p>

<div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe6.png" alt="Atributo compuesto: variante con subóvalos colgando del óvalo principal" loading="lazy"><figcaption>Atributo compuesto: variante con subóvalos colgando del óvalo principal.</figcaption></figure>
</div><div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe7.png" alt="Atributo compuesto: variante alternativa con campo que cruza los atributos simples" loading="lazy"><figcaption>Atributo compuesto: variante alternativa con un campo que cruza los atributos simples.</figcaption></figure>
</div>

<h4>Atributos multivaluados, derivados y opcionales</h4>
<ul>
  <li><strong>Atributo multivaluado:</strong> puede tener más de un valor.</li>
</ul>
<p><em>Ejemplo: "Teléfonos" de un cliente, que puede tener varios números. Se dibuja como un óvalo con doble borde. También se puede indicar la cardinalidad mínima y máxima.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe8.png" alt="Representación de un atributo multivaluado: óvalo de doble contorno." loading="lazy"><figcaption>Representación de un atributo multivaluado: óvalo de doble contorno.</figcaption></figure>

<ul>
  <li><strong>Atributo derivado:</strong> su valor se puede calcular a partir de otros atributos.</li>
</ul>
<p><em>Ejemplo: "Edad" de un cliente, derivable a partir de la fecha de nacimiento. Se representa con un óvalo punteado.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe9.png" alt="Representación de un atributo derivado: óvalo de contorno discontinuo." loading="lazy"><figcaption>Representación de un atributo derivado: óvalo de contorno discontinuo.</figcaption></figure>

<ul>
  <li><strong>Atributo opcional:</strong> un atributo que una entidad puede tener o no. Se representa como un atributo normal, pero con el enlace punteado.</li>
</ul>

<h4>Claves: primarias, candidatas y alternativas</h4>
<ul>
  <li><strong>Clave primaria:</strong> atributo o conjunto de atributos que identifican de manera única una entidad. En una base de datos, la clave primaria no puede tener valores nulos.</li>
</ul>
<p><em>Ejemplo: en la entidad "Cliente", el "ID de Cliente" es la clave primaria.</em></p>
<ul>
  <li><strong>Clave candidata:</strong> conjunto de atributos que también podrían identificar de manera única una entidad, pero no se eligen como clave primaria.</li>
</ul>
<p><em>Ejemplo: el "DNI" de un cliente podría ser una clave candidata.</em></p>
<ul>
  <li><strong>Clave alternativa:</strong> si hay más de una clave candidata, las que no se usan como clave primaria se denominan claves alternativas.</li>
</ul>
<p>Se suelen representar con un círculo relleno o con el nombre dentro del óvalo subrayado.</p>

<div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe10.png" alt="Notación de clave candidata/alternativa: círculo relleno." loading="lazy"><figcaption>Notación de clave candidata/alternativa: círculo relleno.</figcaption></figure>
</div><div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe11.png" alt="Notación de clave candidata/alternativa: nombre subrayado dentro del óvalo." loading="lazy"><figcaption>Notación de clave candidata/alternativa: nombre subrayado dentro del óvalo.</figcaption></figure>
</div>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe12.png" alt="Resumen visual de los tipos de atributos y claves aplicados sobre una entidad completa." loading="lazy"><figcaption>Resumen visual de los tipos de atributos y claves aplicados sobre una entidad completa.</figcaption></figure>`
  },
  {
    id: 'xbd-ud2-2-5',
    tipo: 'subtema',
    titulo: '2.5. Relaciones entre entidades',
    resumen: 'Relación: asociación entre entidades (rombo). Rol de cada entidad, participación (mín,máx) y cardinalidad 1:1, 1:N, N:M a partir de las participaciones máximas.',
    claves: ['Rombo con el nombre de la relación', 'Rol: función de una entidad (clave en relaciones recursivas)', 'Participación (mín,máx): se escribe en el lado opuesto a la entidad fijada', 'Cardinalidad = participaciones máximas: 1:1 · 1:N · N:M', 'En el SGBD se implementan con claves foráneas'],
    tags: ['relación', 'interrelación', 'rombo', 'rol', 'participación', 'cardinalidad', '1:1', '1:N', 'N:M'],
    contenido: `<p>Una relación es una asociación entre dos o más entidades. En el modelo E-R, las relaciones nos ayudan a entender cómo interactúan las entidades entre sí. En un SGBD, estas relaciones se implementarán a través de claves foráneas que unen dos o más tablas.</p>
<p>Cada relación tiene un nombre que describe su función. Las relaciones se representan gráficamente mediante rombos y su nombre aparece en el interior. Normalmente se le pone de nombre la primera o primeras letras de las entidades que relaciona, o la función que realiza. Las entidades involucradas en una relación se denominan entidades participantes.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe13.png" alt="Ejemplo de interrelación representada con un rombo entre dos entidades." loading="lazy"><figcaption>Ejemplo de interrelación representada con un rombo entre dos entidades.</figcaption></figure>

<h4>2.5.1. El papel o rol de una entidad en una relación</h4>
<p>Se denomina así a la función que tiene una entidad en una relación. Se especifican los papeles o roles cuando se quiere aclarar el significado de una entidad en una relación (por ejemplo, en una interrelación recursiva, donde la misma entidad participa dos veces con un papel distinto cada vez).</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe15.png" alt="Ejemplo de interrelación 1:1 (Empleado - Coche asignado)" loading="lazy"><figcaption>Ejemplo de interrelación con los roles etiquetados junto a cada línea de conexión.</figcaption></figure>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe16.png" alt="Ejemplo de interrelación 1:1 (Empleado - Coche asignado)" loading="lazy"><figcaption>Segundo ejemplo de interrelación con roles.</figcaption></figure>

<h4>2.5.2. La participación</h4>
<p>La participación de una entidad en una interrelación indica cuántas veces puede aparecer cada ocurrencia de esa entidad en la interrelación. Para obtenerla, se fija una ocurrencia concreta de una entidad y se averigua cuántas ocurrencias de la otra entidad le corresponden como mínimo y como máximo; después se repite en el otro sentido.</p>
<p>Estas ocurrencias mínimas y máximas (la participación de una entidad) se representan entre paréntesis y con letras minúsculas en el lado de la relación opuesto a la entidad cuyas ocurrencias se fijan.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe14.png" alt="Ejemplo de notación de participación (mínimo, máximo) junto a cada entidad." loading="lazy"><figcaption>Ejemplo de notación de participación (mínimo, máximo) junto a cada entidad.</figcaption></figure>

<h4>2.5.3. Cardinalidad en las relaciones</h4>
<div class="box info"><div class="box-title">ℹ️ INFO</div><p>La <strong>cardinalidad de la relación</strong> se obtiene tomando las <strong>participaciones máximas de ambas entidades</strong> (apartado anterior) y se representa con letras mayúsculas separadas por dos puntos junto al símbolo de la relación: por ejemplo, 1:1, 1:N o N:M.</p></div>
<p>La cardinalidad indica el número de ocurrencias de una entidad que pueden estar relacionadas con una ocurrencia de otra entidad. Según el resultado obtenido a partir de las participaciones máximas, distinguimos tres casos:</p>
<ul>
  <li><strong>Relaciones uno a uno (1:1):</strong> una entidad A se relaciona con una sola entidad B, y viceversa.</li>
</ul>
<p><em>Ejemplo: un empleado puede tener un solo coche asignado, y cada coche solo puede ser asignado a un empleado.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe19.png" alt="Ejemplo de interrelación 1:1 (Empleado - Coche asignado)" loading="lazy"><figcaption>Ejemplo de interrelación 1:1 (Empleado - Coche asignado).</figcaption></figure>

<ul>
  <li><strong>Relaciones uno a muchos (1:N):</strong> una entidad A se relaciona con varias entidades B, pero cada entidad B solo se relaciona con una entidad A.</li>
</ul>
<p><em>Ejemplo: un cliente puede realizar varios pedidos, pero cada pedido solo pertenece a un cliente.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe18.png" alt="Ejemplo de interrelación 1:1 (Empleado - Coche asignado)" loading="lazy"><figcaption>Ejemplo de interrelación 1:N (Cliente - Pedido).</figcaption></figure>

<ul>
  <li><strong>Relaciones muchos a muchos (N:M):</strong> varias entidades A pueden estar relacionadas con varias entidades B.</li>
</ul>
<p><em>Ejemplo: un estudiante puede estar inscrito en varios cursos, y un curso puede tener varios estudiantes.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe17.png" alt="Ejemplo de interrelación 1:1 (Empleado - Coche asignado)" loading="lazy"><figcaption>Ejemplo de interrelación N:M (Estudiante - Curso).</figcaption></figure>`
  },
  {
    id: 'xbd-ud2-3',
    tipo: 'tema',
    titulo: '3. Entidades débiles y dependencias de identificación',
    resumen: 'Entidad débil: no se identifica solo con sus atributos; tiene clave parcial que se combina con la clave de la entidad fuerte. Ejemplo: Reserva de hotel.',
    claves: ['Dependencia de otra entidad', 'Identificación dependiente', 'Clave parcial + clave de la fuerte = clave completa', 'Ejemplo: Cliente (fuerte) – Reserva (débil)'],
    tags: ['entidad débil', 'entidad fuerte', 'clave parcial', 'reserva'],
    links: ['xbd-ud2-3-1'],
    contenido: `<p>En el modelo Entidad-Relación (E-R), no todas las entidades tienen la misma capacidad de ser identificadas de manera independiente. Algunas entidades dependen de otras para poder existir o ser identificadas. Estas entidades se denominan entidades débiles y juegan un papel fundamental en el diseño conceptual, ya que reflejan escenarios donde una entidad no tiene sentido sin su entidad asociada.</p>
<p>Una entidad débil es una entidad que no puede identificarse de manera única solo con sus propios atributos. Depende de otra entidad, denominada entidad fuerte, para su existencia y, lo más importante, para su identificación.</p>

<p><u>Características clave de las entidades débiles:</u></p>
<ul>
  <li><strong>Dependencia de otra entidad:</strong> las entidades débiles dependen de una entidad fuerte para ser identificadas.</li>
  <li><strong>Identificación dependiente:</strong> para identificar una instancia de una entidad débil, se necesita incluir un identificador de la entidad fuerte a la que está asociada.</li>
  <li><strong>Clave parcial:</strong> una entidad débil no tiene una clave primaria completa propia. En su lugar, tiene una clave parcial, que debe combinarse con la clave primaria de la entidad fuerte para formar una clave completa.</li>
</ul>

<div class="box def"><div class="box-title">Ejemplo práctico: reserva de hotel</div><p>La entidad "Cliente" tiene atributos como "ID de Cliente", "Nombre" y "Teléfono". La entidad "Reserva" tiene atributos como "Fecha de Reserva" y "Número de Días".</p>
    <p>"Reserva" es una entidad débil porque necesita estar asociada a un cliente: no puede existir una reserva sin un cliente que la haya realizado. Para identificar de manera única una reserva, hace falta combinar el "ID de Cliente" (clave de la entidad fuerte) con la "Fecha de Reserva" (clave parcial de la entidad débil).</p></div>`
  },
  {
    id: 'xbd-ud2-3-1',
    tipo: 'subtema',
    titulo: '3.1. Dependencias de identificación y de existencia',
    resumen: 'Dependencia de identificación (la débil necesita la clave de la fuerte para identificarse) y de existencia (si se borra la fuerte, se borran las débiles).',
    claves: ['Identificación: ID_Cliente + Fecha_Reserva', 'Existencia: borrar Factura → borrar Líneas de factura', 'Ejemplos: Factura/Detalle, Reserva/Habitación asignada'],
    tags: ['dependencia de identificación', 'dependencia de existencia', 'factura', 'línea de factura'],
    contenido: `<p>Las entidades débiles dependen de las entidades fuertes de dos maneras:</p>

<h4>Dependencia de identificación</h4>
<p>Se refiere al hecho de que una entidad débil no puede identificarse sin la clave de la entidad fuerte. Para crear una clave única para la entidad débil, se utiliza la clave primaria de la entidad fuerte junto con la clave parcial de la entidad débil.</p>
<p><em>Ejemplo: en la Reserva de hotel, la entidad fuerte es "Cliente". La entidad débil "Reserva" necesita el "ID de Cliente" como parte de su clave. La combinación de "ID de Cliente" y "Fecha de Reserva" da una clave única para identificar la reserva.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe21.png" alt="Diagrama de ejemplo: la entidad débil Reserva identificada mediante la entidad fuerte Cliente (dependencia de identificación)" loading="lazy"><figcaption>Diagrama de ejemplo: la entidad débil Reserva identificada mediante la entidad fuerte Cliente (dependencia de identificación).</figcaption></figure>

<h4>Dependencia de existencia</h4>
<p>Implica que una entidad débil no puede existir sin una instancia de la entidad fuerte asociada. Si se borra una entidad fuerte, todas las entidades débiles asociadas deben eliminarse también.</p>
<p><em>Ejemplo: si borramos una factura del sistema (entidad fuerte), todas sus líneas de factura (entidades débiles) deben eliminarse, ya que no tienen sentido sin una factura asociada.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe22.png" alt="Diagrama de ejemplo: dependencia de existencia entre Factura (entidad fuerte) y Línea de factura (entidad débil)" loading="lazy"><figcaption>Diagrama de ejemplo: dependencia de existencia entre Factura (entidad fuerte) y Línea de factura (entidad débil).</figcaption></figure>

<p><strong><em>Ejemplos adicionales de entidades débiles y su relación con entidades fuertes</em></strong></p>

<p><u>Ejemplo 1: detalles de una factura</u></p>
<p><em>En una aplicación de gestión de facturas:</em></p>
<ul>
  <li><em>Factura: entidad fuerte con "Número de Factura", "Fecha", "Cliente", entre otros atributos.</em></li>
  <li><em>Detalle de Factura: entidad débil que almacena los productos o servicios asociados a una factura, con campos como "Cantidad", "Precio" y "Descripción", pero que necesita el "Número de Factura" para identificarse de manera única.</em></li>
</ul>
<p><em>El "Detalle de Factura" depende de la entidad fuerte "Factura" para identificarse, y si una factura se elimina, todos sus detalles deben eliminarse también.</em></p>

<p><u>Ejemplo 2: habitaciones asignadas a una reserva</u></p>
<p><em>En una aplicación de reserva de hoteles:</em></p>
<ul>
  <li><em>Reserva: entidad fuerte con "ID de Reserva", "Fecha de Check-in", "ID de Cliente", entre otros.</em></li>
  <li><em>Habitación Asignada: entidad débil que almacena qué habitaciones se han asignado a una reserva. No tiene sentido por sí sola, ya que siempre está asociada a una reserva.</em></li>
</ul>
<p><em>Para identificar una habitación asignada de manera única, se necesita el "ID de Reserva" y un identificador para la "Habitación".</em></p>`
  },
  {
    id: 'xbd-ud2-4',
    tipo: 'tema',
    titulo: '4. Modelo E-R extendido',
    resumen: 'El E-R extendido (ERE) añade jerarquías (generalización/especialización, supertipos y subtipos), exclusión/inclusión y agregación.',
    claves: ['Generalización ↔ especialización', 'Supertipo (superclase) y subtipos (subclases) que heredan atributos', 'Disyunción (exclusión) vs conjunción (inclusión)', 'Agregación: una relación tratada como entidad'],
    tags: ['E-R extendido', 'ERE', 'jerarquía', 'supertipo', 'subtipo', 'herencia'],
    links: ['xbd-ud2-4-1', 'xbd-ud2-4-2', 'xbd-ud2-4-3', 'xbd-ud2-4-4'],
    contenido: `<p>El modelo Entidad-Relación (E-R) se puede expandir para manejar conceptos más avanzados que permiten representar relaciones jerárquicas, también conocidas como generalización y especialización. Este tipo de modelado es especialmente útil cuando necesitamos organizar datos en categorías o jerarquías dentro de una base de datos. Estas técnicas, conocidas como modelo E-R extendido (ERE), proporcionan una manera más flexible de representar entidades que comparten características comunes pero que también tienen atributos específicos.</p>

<p><u>Principales conceptos que incluye el ERE:</u></p>
<ol>
  <li><strong>Generalización y especialización:</strong> la generalización combina varias entidades similares en una entidad más general o de nivel superior; la especialización es el proceso inverso, donde una entidad se subdivide en subtipos más específicos.</li>
  <li><strong>Jerarquías de entidades:</strong> en el ERE, las entidades se pueden organizar en una jerarquía donde las entidades más específicas heredan atributos de entidades más generales.</li>
  <li><strong>Subtipos y supertipos:</strong> los subtipos son entidades que heredan atributos de una entidad más general o supertipo. Por ejemplo, en una jerarquía, Vehículo sería el supertipo, y Coche y Camión serían subtipos que heredan atributos como matrícula o modelo, pero tienen también sus propios atributos específicos.</li>
  <li><strong>Disyunción (exclusión) y conjunción (inclusión):</strong> un caso de exclusión es cuando una instancia solo puede pertenecer a uno de los subtipos de una especialización; un caso de inclusión es cuando una instancia puede pertenecer a varios subtipos al mismo tiempo.</li>
  <li><strong>Atributos multivaluados, derivados y compuestos</strong> (ya vistos en el apartado 2.4), que también pueden aparecer en las entidades del modelo extendido.</li>
</ol>`
  },
  {
    id: 'xbd-ud2-4-1',
    tipo: 'subtema',
    titulo: '4.1. Generalización y especialización',
    resumen: 'Generalización agrupa entidades con atributos comunes en un supertipo; especialización divide un supertipo en subtipos. Se clasifican en total/parcial y exclusiva/solapada.',
    claves: ['Generalización: Empleado Administrativo + Empleado Producción → Empleado', 'Especialización: Empleado → Administrativo (departamento), Producción (turno)', 'Triángulo "ES UN"', 'Total vs parcial: ¿hay ejemplares del supertipo fuera de los subtipos?', 'Exclusiva vs solapada: ¿un ejemplar puede estar en varios subtipos?', 'Dos criterios independientes → 4 combinaciones'],
    tags: ['generalización', 'especialización', 'ES UN', 'total', 'parcial', 'exclusiva', 'solapamiento', 'jerarquía'],
    contenido: `<h4>4.1.1. Generalización</h4>
<p>La generalización es el proceso de combinar entidades específicas en una entidad más general. Se utiliza cuando varias entidades tienen un conjunto de atributos en común, lo que permite agruparlas en una categoría más amplia.</p>
<div class="box def"><div class="box-title">Definición</div><p>Consiste en agrupar varias entidades en una entidad más general que contiene los atributos comunes.</p></div>
<p><em>Ejemplo: en una aplicación para gestionar empleados, podríamos tener dos entidades: "Empleado Administrativo" y "Empleado de Producción". Ambos comparten atributos comunes como "Nombre", "DNI" y "Salario". Usando generalización, podemos crear una entidad más general llamada Empleado, que representa a ambos tipos.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe23.png" alt="Ejemplo de generalización" loading="lazy"><figcaption>Ejemplo de generalización: Empleado Administrativo y Empleado de Producción se agrupan en la entidad general Empleado.</figcaption></figure>

<h4>4.1.2. Especialización</h4>
<p>La especialización es el proceso inverso a la generalización. Consiste en dividir una entidad más general en entidades más específicas, donde cada subentidad tiene atributos adicionales o comportamientos únicos. Cada subentidad hereda los atributos de la entidad general, pero también puede tener atributos propios.</p>
<div class="box def"><div class="box-title">Definición</div><p>Proceso de crear subcategorías a partir de una entidad general, donde las subcategorías heredan los atributos comunes, pero añaden características específicas.</p></div>
<p><em>Ejemplo: a partir de la entidad "Empleado", podemos especializar en dos subentidades: Empleado Administrativo (con el atributo específico "Departamento") y Empleado de Producción (con el atributo específico "Turno de Trabajo").</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe24.png" alt="Ejemplo de especialización: la entidad Empleado se divide en Empleado Administrativo y Empleado de Producción" loading="lazy"><figcaption>Ejemplo de especialización: la entidad Empleado se divide en Empleado Administrativo y Empleado de Producción, cada uno con atributos propios.</figcaption></figure>

<p>En ambos casos, la entidad que se obtiene al generalizar, o la entidad que se especializa, se llama <strong>supertipo</strong> (superclase), y las entidades en las que se divide son los <strong>subtipos</strong> (subclase).</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe25.png" alt="Notación gráfica del supertipo y los subtipos en una especialización/generalización" loading="lazy"><figcaption></figcaption></figure>

<h4>4.1.3. Interrelaciones jerárquicas</h4>
<p>Una especialización se clasifica según dos criterios independientes:</p>
<ul>
  <li><strong>Total o parcial</strong>, dependiendo de si pueden existir o no ejemplares del tipo de entidad general (supertipo) que no pertenezcan a ninguno de los subtipos de entidad.</li>
</ul>

<div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe27.png" alt="Símbolo de especialización total" loading="lazy"><figcaption>Símbolo de especialización total.</figcaption></figure>
</div><div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe28.png" alt="Símbolo de especialización parcial" loading="lazy"><figcaption>Símbolo de especialización parcial.</figcaption></figure>
</div>

<ul>
  <li><strong>Con solapamiento o sin solapamiento (exclusiva)</strong>, dependiendo de si pueden existir o no ejemplares del supertipo que se relacionen con ejemplares de más de un subtipo distinto.</li>
</ul>

<div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe29.png" alt="Símbolo de especialización con solapamiento." loading="lazy"><figcaption>Símbolo de especialización con solapamiento.</figcaption></figure>
</div><div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe30.png" alt="Símbolo de especialización exclusiva (sin solapamiento)" loading="lazy"><figcaption>Símbolo de especialización exclusiva (sin solapamiento).</figcaption></figure>
</div>

<p>Resumiendo, sobre si <u>existen o no ejemplares de la entidad supertipo</u> fuera de los subtipos:</p>
<ul>
  <li><strong>Total:</strong> no existen ejemplares del tipo entidad general (supertipo) que queden fuera de los subtipos.</li>
</ul>
<p><em>Subdividimos la entidad Empleado en Ingeniero, Secretario y Técnico, y en nuestra base de datos no hay ningún otro empleado que no pertenezca a uno de estos tres tipos.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe31.png" alt="Ejemplo de especialización total: todo empleado es Ingeniero, Secretario o Técnico" loading="lazy"><figcaption>Ejemplo de especialización total: todo empleado es Ingeniero, Secretario o Técnico.</figcaption></figure>

<ul>
  <li><strong>Parcial:</strong> pueden existir ejemplares del tipo entidad general (supertipo) que no pertenezcan a ningún subtipo.</li>
</ul>
<p><em>Subdividimos la entidad Empleado en Ingeniero, Secretario y Técnico, pero en nuestra base de datos puede haber empleados que no pertenezcan a ninguno de estos tres tipos.</em></p>

<p>Y sobre si <u>pueden existir ejemplares relacionados con más de un subtipo</u>:</p>
<ul>
  <li><strong>Solapamiento:</strong> pueden existir ejemplares del supertipo que se relacionen con ejemplares de más de un subtipo distinto.</li>
</ul>
<p><em>Subdividimos la entidad Empleado en Ingeniero, Secretario y Técnico, y en nuestra base de datos puede haber empleados que sean a la vez Ingenieros y Secretarios, o Secretarios y Técnicos, etc.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe32.png" alt="Ejemplo de especialización total: todo empleado es Ingeniero, Secretario o Técnico" loading="lazy"><figcaption>Ejemplo de especialización con solapamiento: un empleado puede ser Ingeniero y Secretario a la vez.</figcaption></figure>

<ul>
  <li><strong>Exclusiva:</strong> no pueden existir ejemplares del supertipo que se relacionen con ejemplares de más de un subtipo distinto.</li>
</ul>
<p><em>Subdividimos la entidad Empleado en Ingeniero, Secretario y Técnico. En nuestra base de datos, ningún empleado pertenece a más de una subentidad.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe33.png" alt="Ejemplo de especialización total: todo empleado es Ingeniero, Secretario o Técnico" loading="lazy"><figcaption>Ejemplo de especialización exclusiva: ningún empleado pertenece a más de un subtipo a la vez.</figcaption></figure>

<div class="box warn"><div class="box-title">Aviso</div><p>Total/parcial y solapamiento/exclusiva son dos criterios <strong>independientes</strong> entre sí: se combinan libremente, dando las cuatro combinaciones ya vistas en el Anexo I de la UD2 (total-exclusiva, parcial-exclusiva, total-solapada, parcial-solapada). No conviene asociar "total" únicamente con "solapamiento", ni "parcial" únicamente con "solapamiento": cada especialización concreta se clasifica en ambos ejes por separado.</p></div>`
  },
  {
    id: 'xbd-ud2-4-2',
    tipo: 'subtema',
    titulo: '4.2. Agregación',
    resumen: 'Agregación: tratar una relación entre entidades como una entidad abstracta que participa en otras relaciones. Ejemplo: ENTREVISTA (Empresa–Demandante) genera Oferta de empleo.',
    claves: ['Relación → entidad de nivel superior', 'Útil para relaciones sobre relaciones', 'Ejemplo ETT: entrevista → oferta de empleo'],
    tags: ['agregación', 'entrevista', 'ETT', 'relación compleja'],
    contenido: `<p>Es una técnica utilizada para representar relaciones complejas entre entidades y sus interacciones con otras relaciones. Específicamente, la agregación permite tratar una relación entre entidades como si fuera una entidad abstracta que puede participar en otras relaciones. Es útil cuando la relación en sí misma tiene un significado o importancia particular, más allá de solo conectar entidades.</p>
<p>La agregación es el proceso mediante el cual una relación entre entidades se considera como una entidad de nivel superior que puede estar implicada en otras relaciones. Esto es útil cuando se necesita modelar una relación compleja entre varias entidades y luego usar esa relación dentro de otra relación.</p>

<h4>4.2.1. Ejemplo de agregación</h4>
<p>El siguiente modelo E-R almacena las entrevistas organizadas entre demandantes de empleo y empresas en una Empresa de Trabajo Temporal (ETT).</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe35.png" alt="Modelo E-R de partida: interrelación Entrevista entre Demandante de empleo y Empresa, en una ETT." loading="lazy"><figcaption>Modelo E-R de partida: interrelación Entrevista entre Demandante de empleo y Empresa, en una ETT.</figcaption></figure>

<p><strong>Situación de agregación</strong></p>
<p><em>Algunas entrevistas dan lugar a ofertas de empleo y otras no. ¿Cómo se modela esto?</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe36.png" alt="Resolución mediante agregación: la interrelación Entrevista se trata como una entidad abstracta para poder relacionarse" loading="lazy"><figcaption>Resolución mediante agregación: la interrelación Entrevista se trata como una entidad abstracta para poder relacionarse, a su vez, con Oferta de empleo.</figcaption></figure>`
  },
  {
    id: 'xbd-ud2-4-3',
    tipo: 'subtema',
    titulo: '4.3. Agregación por composición',
    resumen: 'Agregación por composición: compuesto-componente (Coche = Rueda + Motor + Chasis) y miembro-colección (Bosque es colección de Árbol).',
    claves: ['Compuesto-componente: unión de subtipos', 'Miembro-colección: colección de un mismo subtipo'],
    tags: ['agregación por composición', 'compuesto-componente', 'miembro-colección'],
    contenido: `<p>Permiten representar tipos de entidad compuestos que se forman como agregación de otros más simples. Se pueden clasificar en:</p>
<ul>
  <li><strong>Agregación compuesto-componente:</strong> el supertipo de entidad se obtiene por la unión de los subtipos.</li>
</ul>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe37.png" alt="Ejemplo de agregación compuesto-componente" loading="lazy"><figcaption>Ejemplo de agregación compuesto-componente.</figcaption></figure>

<ul>
  <li><strong>Agregación miembro-colección:</strong> el supertipo de entidad es una colección de elementos de un mismo subtipo.</li>
</ul>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe38.png" alt="Ejemplo de agregación miembro-colección" loading="lazy"><figcaption>Ejemplo de agregación miembro-colección.</figcaption></figure>

<p>La agregación ("aggregation") se usa cuando se desea representar una relación entre entidades que necesita ser tratada como una entidad abstracta dentro de otra relación.</p>`
  },
  {
    id: 'xbd-ud2-4-4',
    tipo: 'subtema',
    titulo: '4.4. Inclusión y exclusión',
    resumen: 'Interrelaciones reflexivas y las cuatro restricciones entre relaciones: exclusividad, inclusividad, exclusión e inclusión.',
    claves: ['Reflexiva (unaria): la entidad se relaciona consigo misma con dos roles', 'Exclusividad: E1 con E2 o con E3, no ambas (arco)', 'Inclusividad: para R2 debe darse antes R1 (flecha)', 'Exclusión: E1–E2 por R1 o por R2, no ambas (línea discontinua)', 'Inclusión: R2 exige R1 previa (flecha entre rombos)'],
    tags: ['reflexiva', 'recursiva', 'exclusividad', 'inclusividad', 'exclusión', 'inclusión', 'restricciones'],
    contenido: `<div class="box def"><div class="box-title">Interrelaciones reflexivas</div><p>Son tipos de interrelación en las que interviene un único tipo de entidad (unarias): la propia entidad se relaciona consigo misma, normalmente con dos roles distintos (como vimos con CATEGORIA PERTENCE_A CATEGORIA en el Anexo I de la UD2).</p></div>

<div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe39.png" alt="Ejemplo de interrelación reflexiva (unaria)" loading="lazy"><figcaption>Ejemplo de interrelación reflexiva (unaria).</figcaption></figure>
</div><div class="ph-inline">
<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe40.png" alt="Otro ejemplo de interrelación reflexiva, con los roles etiquetados" loading="lazy"><figcaption>Otro ejemplo de interrelación reflexiva, con los roles etiquetados.</figcaption></figure>
</div>

<p><strong>En lo relativo a inclusión y exclusión existen cuatro casuísticas:</strong></p>
<ul>
  <li>Restricción de exclusividad</li>
  <li>Restricción de inclusividad</li>
  <li>Restricción de exclusión</li>
  <li>Restricción de inclusión</li>
</ul>

<h4>Restricción de exclusividad</h4>
<p>Entre dos tipos de relaciones R1 y R2 respecto a la entidad E1: significa que E1 está relacionada, o bien con E2, o bien con E3, pero no pueden darse ambas relaciones simultáneamente.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe41.png" alt="Notación de la restricción de exclusividad entre dos interrelacione" loading="lazy"><figcaption>Notación de la restricción de exclusividad entre dos interrelaciones.</figcaption></figure>

<p><em>Ejemplo: un producto puede darse de alta directamente desde el fabricante o desde un proveedor, pero no ambos a la vez.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe42.png" alt="Ejemplo de restricción de exclusividad aplicado al alta de un producto" loading="lazy"><figcaption>Ejemplo de restricción de exclusividad aplicado al alta de un producto.</figcaption></figure>

<h4>Restricción de inclusividad</h4>
<p>Entre dos tipos de relaciones R1 y R2 respecto a la entidad E1: para que la entidad E1 participe en la relación R2 debe participar previamente en la relación R1.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe43.png" alt="Notación de la restricción de inclusividad entre dos interrelaciones" loading="lazy"><figcaption>Notación de la restricción de inclusividad entre dos interrelaciones.</figcaption></figure>

<p><em>Ejemplo: para que un profesor pueda impartir un curso, antes debe haber recibido al menos un curso de formación.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe44.png" alt="Ejemplo de restricción de inclusividad aplicado a la formación de un profesor." loading="lazy"><figcaption>Ejemplo de restricción de inclusividad aplicado a la formación de un profesor.</figcaption></figure>

<h4>Restricción de exclusión</h4>
<p>Entre dos tipos de relaciones R1 y R2: significa que E1 está relacionada con E2 bien mediante R1, o bien mediante R2, pero no pueden darse ambas relaciones simultáneamente.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe45.png" alt="Ejemplo de agregación compuesto-componente" loading="lazy"><figcaption>Notación de la restricción de exclusión entre dos interrelaciones.</figcaption></figure>

<p><em>Ejemplo: los empleados, o reciben cursos o los imparten; no pueden hacer ambas cosas al mismo tiempo.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe46.png" alt="Ejemplo de restricción de exclusión aplicado" loading="lazy"><figcaption>Ejemplo de restricción de exclusión aplicado a empleados que reciben o imparten cursos.</figcaption></figure>

<h4>Restricción de inclusión</h4>
<p>Entre dos tipos de relaciones R1 y R2: para que la entidad E1 participe en la relación R2 con E2, debe participar previamente en la relación R1.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe47.png" alt="Notación de la restricción de inclusión entre dos interrelaciones" loading="lazy"><figcaption>Notación de la restricción de inclusión entre dos interrelaciones.</figcaption></figure>

<p><em>Ejemplo: para que un profesor imparta un tipo de curso, debe haberse formado antes en ese mismo tipo de curso.</em></p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe48.png" alt="Ejemplo de restricción de inclusión" loading="lazy"><figcaption>Ejemplo de restricción de inclusión aplicado a la formación e impartición de un tipo de curso.</figcaption></figure>`
  },
  {
    id: 'xbd-ud2-5',
    tipo: 'tema',
    titulo: '5. Modelo E-R a partir de un enunciado de problema',
    resumen: 'Heurísticas para pasar del enunciado al E-R: sustantivos → entidades, verbos → relaciones, nombres propios → ejemplares; vigilar redundancias en atributos e interrelaciones.',
    claves: ['Sustantivos con atributos → entidades', 'Verbos → interrelaciones', 'Nombres propios → ejemplares', 'Redundancia en atributos = atributo derivado', 'Redundancia en interrelaciones: ELABORA sobra si PROFESOR–DEPARTAMENTO y PROFESOR–CURSO ya la implican'],
    tags: ['enunciado', 'análisis', 'sustantivos', 'verbos', 'redundancia', 'método'],
    contenido: `<ul>
  <li>Los tipos de entidad son objetos (sustantivos; nombres o complementos directos) que tienen por atributos a otros sustantivos además de su propio nombre. Se diferencian de los atributos en que suelen participar en más de un tipo de interrelación.</li>
  <li>Los tipos de interrelación son verbos que relacionan entre sí dos o más tipos de entidad (hacen posible la selección de ejemplares de un tipo de entidad refiriéndose a atributos de otros tipos de entidad).</li>
  <li>Los nombres propios suelen ser ejemplares de algún tipo de entidad.</li>
  <li><strong>Control de redundancia:</strong> es aconsejable vigilar y eliminar las posibles redundancias en la creación del modelo. Pueden ser de dos tipos:
    <ul>
      <li><strong>Redundancia en atributos:</strong> cuando un atributo se puede calcular a partir de otro o de una combinación de varios (esto es lo que ya conocemos como atributo derivado).</li>
      <li><strong>Redundancia en interrelaciones:</strong> cuando la existencia de un tipo de interrelación viene implícita por la existencia de otro u otros tipos de interrelación diferentes.</li>
    </ul>
  </li>
</ul>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe51.png" alt="Ejemplo de redundancia en interrelaciones" loading="lazy"><figcaption>Ejemplo de redundancia en interrelaciones: Profesor-Departamento-Curso, donde una de las interrelaciones (ELABORA o ADSCRITO) resulta redundante.</figcaption></figure>

<p><em>Ejemplo: como un profesor pertenece a un único departamento y un curso lo imparte un único profesor, ya sabemos qué departamento ha elaborado el curso. Sobraría el tipo de interrelación ELABORA (entre Departamento y Curso) o, de la misma manera, el tipo de interrelación ADSCRITO (entre Profesor y Departamento): con las otras dos interrelaciones ya se puede deducir la tercera.</em></p>`
  },
  {
    id: 'xbd-ud2-6',
    tipo: 'tema',
    titulo: '6. Herramientas para modelos conceptuales',
    resumen: 'Herramientas para diagramas E-R: MySQL Workbench, Lucidchart, Visio; en el curso se usan DIA y draw.io/diagrams.net.',
    claves: ['MySQL Workbench (sucesor de DBDesigner)', 'Lucidchart, Microsoft Visio', 'DIA (libre) y draw.io como alternativa web'],
    tags: ['herramientas', 'DIA', 'draw.io', 'diagrams.net', 'MySQL Workbench', 'Lucidchart', 'Visio'],
    contenido: `<p>En la actualidad, existen diversas herramientas gráficas que facilitan la creación y edición de diagramas E-R. Estas herramientas permiten realizar el diseño conceptual de bases de datos de manera visual, y muchas de ellas incluso permiten exportar el diagrama en forma de script SQL para implementarlo directamente en un SGBD.</p>
<ul>
  <li><strong>MySQL Workbench:</strong> herramienta gratuita (edición Community de código abierto) para diseñar bases de datos, con generación de diagramas E-R y de scripts SQL. Es el sucesor activo de la antigua DBDesigner, que dejó de mantenerse.</li>
  <li><strong>Lucidchart:</strong> herramienta en línea que permite crear diagramas E-R de manera rápida y colaborativa, ideal para equipos distribuidos.</li>
  <li><strong>Microsoft Visio:</strong> herramienta de diagramación ampliamente utilizada en el entorno empresarial, que incluye plantillas para diagramas E-R.</li>
</ul>
<div class="box tip"><div class="box-title">Tip</div><p>En el curso emplearemos principalmente <strong>DIA</strong>, software libre y de código abierto (<a href="http://dia-installer.de/index.html.es" target="_blank" rel="noopener">dia-installer.de</a>), y <strong>draw.io / diagrams.net</strong> como alternativa web sin instalación. Ambas herramientas se presentan con más detalle en el apartado 6 de los apuntes principales de la UD2.</p></div>`
  },
  {
    id: 'xbd-ud2-7',
    tipo: 'tema',
    titulo: '7. Introducción al diseño lógico y al modelo relacional',
    resumen: 'El diseño lógico transforma el E-R en un esquema relacional (tablas, columnas, claves) según el modelo de Codd (1970).',
    claves: ['Codd, 1970: álgebra y cálculo relacional', 'Diseño lógico = fase intermedia entre conceptual y físico'],
    tags: ['diseño lógico', 'modelo relacional', 'Codd'],
    links: ['xbd-ud2-7-1', 'xbd-ud2-7-2', 'xbd-ud2-7-3'],
    contenido: ``
  },
  {
    id: 'xbd-ud2-7-1',
    tipo: 'subtema',
    titulo: '7.1. Origen y objetivos del modelo relacional en el diseño lógico',
    resumen: 'Origen (Codd, 1970) y objetivos del modelo relacional: simplicidad, independencia de los datos, consistencia y eliminación de redundancia.',
    claves: ['Simplicidad: tablas fáciles de entender', 'Independencia de los datos', 'Consistencia mediante normalización e integridad'],
    tags: ['Codd', '1970', 'objetivos', 'independencia de datos'],
    contenido: `<p><strong>Origen del modelo relacional.</strong> Propuesto por Edgar F. Codd en 1970, el modelo relacional revolucionó la forma de organizar y manipular datos en bases de datos. Basado en el álgebra y el cálculo relacional, este modelo se centró en simplificar la estructura de datos y proporcionar una base teórica sólida para su manipulación.</p>
<p><strong>Objetivo del diseño lógico.</strong> El diseño lógico es una fase intermedia en el desarrollo de una base de datos. Su propósito es transformar el modelo conceptual (generalmente representado mediante un diagrama Entidad-Relación) en una estructura lógica precisa y detallada que pueda implementarse en un sistema de gestión de bases de datos (SGBD) relacional.</p>
<p><strong>Objetivos específicos del modelo relacional en el diseño lógico:</strong></p>
<ul>
  <li><strong>Simplicidad de uso:</strong> los datos se organizan en tablas (o relaciones) que son fáciles de entender y manipular.</li>
  <li><strong>Independencia de los datos:</strong> facilita que la base de datos pueda cambiar en su estructura interna sin afectar a los programas que acceden a ella.</li>
  <li><strong>Consistencia y eliminación de redundancia:</strong> a través de la normalización y la implementación de reglas de integridad, el modelo relacional asegura que los datos estén organizados de manera eficiente y sin duplicados innecesarios.</li>
</ul>`
  },
  {
    id: 'xbd-ud2-7-2',
    tipo: 'subtema',
    titulo: '7.2. Comparativa con el modelo Entidad-Relación (E-R)',
    resumen: 'E-R (conceptual, abstracto, diagramas) frente a relacional (lógico, tablas y claves): cada entidad → tabla, cada relación → claves foráneas o tabla intermedia.',
    claves: ['E-R: fase conceptual, visual', 'Relacional: tablas, columnas y claves', 'La transformación preserva la estructura del conceptual'],
    tags: ['comparativa', 'E-R vs relacional', 'transformación'],
    contenido: `<ul>
  <li><strong>Modelo Entidad-Relación (E-R):</strong> se utiliza en la fase de diseño conceptual para representar las entidades (objetos principales) y las relaciones entre ellas en un sistema. Utiliza diagramas E-R para facilitar una representación visual clara, que permite a los analistas y diseñadores comprender los requisitos de datos a un alto nivel sin preocuparse por los detalles de implementación.</li>
  <li><strong>Modelo relacional en el diseño lógico:</strong> transforma el modelo conceptual E-R en un conjunto de tablas, columnas y claves. Mientras que en el modelo E-R se definen entidades y relaciones a nivel abstracto, en el modelo relacional cada entidad se convierte en una tabla, y las relaciones se traducen en claves foráneas o tablas adicionales.</li>
</ul>
<p><strong>Proceso de transformación:</strong> cada entidad y relación del diagrama E-R se convierte en tablas y claves en el modelo relacional, preservando la estructura y los requisitos de datos del diseño conceptual. Este proceso incluye definir atributos, identificar claves primarias y foráneas, y descomponer entidades o relaciones complejas si es necesario.</p>`
  },
  {
    id: 'xbd-ud2-7-3',
    tipo: 'subtema',
    titulo: '7.3. Ventajas del modelo relacional para el diseño lógico',
    resumen: 'Ventajas: uniformidad estructural, independencia física y lógica, integridad y consistencia, consultas complejas (álgebra relacional/SQL) y rigor teórico.',
    claves: ['Uniformidad estructural', 'Independencia física y lógica', 'Normalización e integridad', 'Consultas con álgebra relacional y SQL', 'Base matemática'],
    tags: ['ventajas', 'independencia física', 'independencia lógica', 'álgebra relacional', 'SQL'],
    contenido: `<ul>
  <li><strong>Uniformidad estructural:</strong> la base de datos se organiza en tablas, que permiten un esquema uniforme donde cada relación almacena datos de manera independiente, facilitando el acceso y la manipulación de la información. Esta uniformidad permite que las relaciones entre tablas sean claras y consistentes, especialmente útil al trabajar con grandes volúmenes de datos.</li>
  <li><strong>Independencia de los datos:</strong>
    <ul>
      <li><u>Independencia física:</u> las modificaciones en el almacenamiento físico de la base de datos no afectan la estructura lógica, permitiendo que los administradores optimicen el rendimiento sin alterar las aplicaciones que usan los datos.</li>
      <li><u>Independencia lógica:</u> cambios en la estructura lógica, como la adición de nuevas columnas, no afectan las aplicaciones o vistas definidas, siempre que se mantenga la estructura relacional principal.</li>
    </ul>
  </li>
  <li><strong>Consistencia y control de la integridad de los datos:</strong> mediante la normalización, se eliminan las redundancias y se estructuran las tablas de forma que cada dato se almacene una única vez, asegurando su exactitud. Las reglas de integridad (de entidad y referencial) permiten definir restricciones, como la obligación de que cada tupla tenga un identificador único, o que las claves foráneas correspondan a valores válidos en otras tablas.</li>
  <li><strong>Facilidad para realizar consultas complejas:</strong> el modelo relacional, a través de operaciones del álgebra relacional (selección, proyección, combinación, etc.) y de lenguajes de consulta como SQL, permite realizar consultas complejas y obtener información detallada de los datos, sin necesidad de preocuparse por el formato de almacenamiento físico.</li>
  <li><strong>Rigor teórico:</strong> el modelo relacional se basa en conceptos matemáticos y proporciona un marco sistemático para diseñar y evaluar bases de datos de manera precisa, lo que facilita la verificación de la consistencia y la integridad de los datos, además de simplificar la optimización y el mantenimiento a largo plazo.</li>
</ul>`
  },
  {
    id: 'xbd-ud2-8',
    tipo: 'tema',
    titulo: '8. Elementos fundamentales del modelo relacional',
    resumen: 'Elementos del modelo relacional: relaciones (tablas) con atributos (columnas), dominios y tuplas (filas).',
    claves: ['Relación = tabla', 'Atributo = columna con dominio', 'Tupla = fila única'],
    tags: ['modelo relacional', 'relación', 'tabla', 'tupla', 'dominio'],
    links: ['xbd-ud2-8-1', 'xbd-ud2-8-2', 'xbd-ud2-8-3'],
    contenido: `<p>En el diseño lógico, el modelo relacional organiza los datos en relaciones (tablas) con atributos y valores definidos, asegurando que la información sea consistente y fácilmente accesible. Cada uno de los elementos fundamentales del modelo relacional tiene un rol específico en esta estructura, facilitando la conversión de un modelo conceptual a un modelo relacional lógico.</p>`
  },
  {
    id: 'xbd-ud2-8-1',
    tipo: 'subtema',
    titulo: '8.1. Concepto de relación (o tabla)',
    resumen: 'Una relación se representa como tabla: filas (tuplas) son instancias, columnas (atributos) características. Ejemplo: Clientes(ID_Cliente, Nombre, Apellido, Email).',
    claves: ['Filas = tuplas = registros', 'Columnas = atributos'],
    tags: ['relación', 'tabla', 'filas', 'columnas'],
    contenido: `<p>En el modelo relacional, <strong>una relación se representa mediante una tabla</strong>. Cada relación contiene datos sobre una entidad o un tipo de objeto específico, como Clientes o Productos.</p>
<p>Estructura de una tabla:</p>
<ul>
  <li><strong>Filas (tuplas):</strong> cada fila representa una instancia individual de la entidad, es decir, un registro único en la tabla.</li>
  <li><strong>Columnas (atributos):</strong> cada columna describe una característica de la entidad o relación y almacena un tipo específico de dato.</li>
</ul>
<p><em>Ejemplo: la tabla Clientes contiene información sobre cada cliente de una empresa.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Captura de ejemplo de la tabla Clientes, con columnas ID_Cliente, Nombre, Apellido y Email.</p>

<p><em>ID_Cliente, Nombre, Apellido y Email son los atributos de la relación Clientes, y cada fila es un cliente.</em></p>`
  },
  {
    id: 'xbd-ud2-8-2',
    tipo: 'subtema',
    titulo: '8.2. Atributos y dominios de los atributos',
    resumen: 'Atributos atómicos con tipo de dato claro; el dominio define tipo y rango permitido (INT, VARCHAR(50)…).',
    claves: ['Atributo atómico', 'Dominio = tipo + rango de valores', 'Ejemplo: ID_Cliente INT, Email VARCHAR(50)'],
    tags: ['atributo', 'dominio', 'tipo de dato', 'atómico'],
    contenido: `<p>Los <strong>atributos</strong> son las columnas de una tabla que representan las propiedades de la entidad. Cada atributo debe ser atómico (sin listas o conjuntos de valores) y tener un tipo de dato claro.</p>
<p><strong>Dominios de los atributos.</strong> Un dominio define el tipo y el rango de valores permitidos para un atributo. Por ejemplo, el atributo Email puede tener el dominio VARCHAR con una longitud máxima definida, mientras que ID_Cliente puede estar restringido al dominio INT.</p>
<p><em>Ejemplo: en la tabla Clientes, el dominio de ID_Cliente puede definirse como INT (números enteros) y el de Email como VARCHAR(50) para almacenarlo en formato de texto.</em></p>`
  },
  {
    id: 'xbd-ud2-8-3',
    tipo: 'subtema',
    titulo: '8.3. Tuplas y estructura bidimensional de las relaciones',
    resumen: 'Tupla: cada fila, única, cumpliendo la integridad. Estructura bidimensional: cada dato tiene una posición exacta (fila × columna).',
    claves: ['Tupla única', 'Ejemplo: (1, Ana, García, ana@mail.com)', 'Intersección fila–columna'],
    tags: ['tupla', 'fila', 'estructura bidimensional'],
    contenido: `<p><strong>Una tupla es cada fila de una tabla</strong>, que representa una instancia única de la entidad o relación. En el diseño lógico, cada tupla debe ser única dentro de la tabla y debe cumplir con las reglas de integridad definidas (por ejemplo, no debe haber duplicados en la clave primaria).</p>
<p>La estructura bidimensional de una tabla, en la que las filas representan registros individuales y las columnas representan atributos, permite que cada dato tenga una ubicación exacta (intersección entre una columna y una fila).</p>
<p><em>Ejemplo de tupla: en la tabla Clientes, la tupla (1, Ana, García, ana@mail.com) representa un registro único de un cliente con el ID 1.</em></p>`
  },
  {
    id: 'xbd-ud2-9',
    tipo: 'tema',
    titulo: '9. Claves y reglas de integridad en el diseño lógico',
    resumen: 'Claves (primaria, candidata, alternativa, foránea), valores nulos y reglas de integridad de entidad y referencial.',
    claves: ['Las claves identifican y relacionan registros', 'La integridad garantiza coherencia'],
    tags: ['claves', 'integridad', 'diseño lógico'],
    links: ['xbd-ud2-9-1', 'xbd-ud2-9-2', 'xbd-ud2-9-3'],
    contenido: `<p>En el diseño lógico, las claves y reglas de integridad son esenciales para garantizar que los datos sean únicos, consistentes y cumplan con las restricciones de la base de datos. Las claves permiten identificar y relacionar registros en diferentes tablas, mientras que las reglas de integridad aseguran que los datos sean válidos y que las relaciones entre tablas se mantengan coherentes.</p>`
  },
  {
    id: 'xbd-ud2-9-1',
    tipo: 'subtema',
    titulo: '9.1. Tipos de claves',
    resumen: 'Primaria (única, no nula), candidata (podría ser primaria), alternativa (candidata no elegida) y foránea (referencia a la primaria de otra tabla).',
    claves: ['Primaria: ID_Cliente', 'Candidatas: Número_Bastidor y Matrícula', 'Alternativa: Matrícula si se elige Bastidor', 'Foránea: Pedidos.ID_Cliente → Clientes.ID_Cliente'],
    tags: ['clave primaria', 'clave candidata', 'clave alternativa', 'clave foránea', 'primary key', 'foreign key'],
    contenido: `<h4>Clave primaria</h4>
<p>La clave primaria es un atributo o conjunto de atributos que identifica de manera única cada registro en una tabla. En el diseño lógico, <strong>cada tabla debe tener una clave primaria para asegurar que cada tupla sea única</strong>.</p>
<div class="box def"><div class="box-title">Regla de integridad de entidad</div><p>La clave primaria no debe contener valores nulos ni duplicados, ya que debe ser única para cada registro.</p></div>
<p><em>Ejemplo: en una tabla Clientes, el atributo ID_Cliente actúa como clave primaria porque cada cliente tiene un identificador único.</em></p>

<h4>Clave candidata</h4>
<p>Son atributos que también pueden identificar de manera única cada registro en una tabla, pero no se eligen como clave primaria. Cada clave candidata es una posible clave primaria; sin embargo, solo una de ellas se selecciona para cumplir esta función.</p>
<p><em>Ejemplo: en una tabla Vehículos, tanto Número_Bastidor como Matrícula podrían ser claves candidatas, ya que ambas identifican de manera única cada vehículo.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de tabla Vehículos con dos claves candidatas: Número_Bastidor y Matrícula.</p>

<h4>Clave alternativa</h4>
<p>Una clave alternativa es una clave candidata que no se selecciona como clave primaria. Las claves alternativas también aseguran la unicidad en la tabla, aunque no se utilizan para identificar el registro principal.</p>
<p><em>Ejemplo: si en la tabla Vehículos se elige Número_Bastidor como clave primaria, Matrícula se convierte en una clave alternativa.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de tabla Vehículos con Número_Bastidor como clave primaria y Matrícula como clave alternativa.</p>

<h4>Clave foránea</h4>
<p>Las claves foráneas son atributos en una tabla que hacen referencia a la clave primaria de otra tabla, estableciendo una relación entre ambas. En el diseño lógico, las claves foráneas son cruciales para modelar relaciones entre tablas y asegurar la integridad referencial.</p>
<p><em>Ejemplo: en una tabla Pedidos, ID_Cliente actúa como clave foránea que se refiere a ID_Cliente en la tabla Clientes, estableciendo una relación entre el pedido y el cliente que lo realizó.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de clave foránea: ID_Cliente en la tabla Pedidos referenciando a ID_Cliente en la tabla Clientes.</p>`
  },
  {
    id: 'xbd-ud2-9-2',
    tipo: 'subtema',
    titulo: '9.2. Manejo de valores nulos',
    resumen: 'NULL = valor desconocido o no aplicable (≠ 0 ≠ cadena vacía). La PK nunca admite nulos; una FK sí si la relación es opcional.',
    claves: ['NULL no es cero ni vacío', 'PK NOT NULL', 'FK opcional puede ser NULL (ID_Jefe)'],
    tags: ['NULL', 'valores nulos', 'opcional'],
    contenido: `<p>Un valor nulo indica la ausencia de un dato en un atributo específico. Es importante destacar que un valor nulo no es lo mismo que cero o una cadena vacía: simplemente representa un valor desconocido o no aplicable.</p>
<p>En el diseño lógico, es fundamental definir si un atributo puede o no contener valores nulos, especialmente en el caso de las claves. La clave primaria no debe permitir valores nulos, mientras que las claves foráneas pueden permitirlos si la relación es opcional.</p>
<p><em>Ejemplo: en una tabla Empleados, si un empleado no tiene asignado un ID_Jefe porque no reporta a nadie, el campo ID_Jefe puede tener un valor nulo. Sin embargo, ID_Empleado, como clave primaria, no puede ser nulo.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de valores nulos: la tabla Empleados con el campo ID_Jefe nulo para quien no tiene jefe asignado.</p>`
  },
  {
    id: 'xbd-ud2-9-3',
    tipo: 'subtema',
    titulo: '9.3. Reglas de integridad: de entidad y referencial',
    resumen: 'Integridad de entidad (PK única y no nula) e integridad referencial (toda FK apunta a una PK existente). Opciones: cascada, restringir.',
    claves: ['Entidad: PK sin nulos ni duplicados', 'Referencial: sin referencias huérfanas', 'Eliminar/actualizar en cascada', 'Restringir o denegar'],
    tags: ['integridad de entidad', 'integridad referencial', 'cascada', 'restringir', 'huérfanas'],
    contenido: `<p>Las reglas de integridad en el modelo relacional son fundamentales para asegurar que los datos almacenados sean coherentes y que las relaciones entre ellos se mantengan sin errores. Estas reglas son parte esencial del diseño lógico.</p>

<h4>Integridad de entidad</h4>
<p>Asegura que cada registro en una tabla pueda identificarse de manera única. La clave primaria debe estar presente y ser única en cada registro: no puede haber valores nulos ni duplicados en la clave primaria de ninguna tabla.</p>
<p><em>Ejemplo: en una tabla Productos, ID_Producto debe ser único y no puede ser nulo, ya que actúa como clave primaria.</em></p>

<h4>Integridad referencial</h4>
<p>Garantiza que una clave foránea en una tabla siempre haga referencia a un valor existente en la clave primaria de otra tabla. Esto asegura que los registros relacionados entre tablas sean válidos y que no existan referencias "huérfanas" (referencias que apunten a registros inexistentes).</p>
<p><em>Ejemplo: en la tabla Pedidos, el campo ID_Cliente es una clave foránea que se refiere a ID_Cliente en la tabla Clientes. No puede haber un ID_Cliente en Pedidos que no exista en Clientes.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de integridad referencial entre las tablas Pedidos y Clientes.</p>

<p><strong>Opciones de integridad referencial.</strong> Al eliminar o actualizar registros en la tabla referenciada, es importante definir cómo reaccionarán las claves foráneas en las tablas relacionadas:</p>
<ul>
  <li><strong>Eliminar en cascada:</strong> elimina también todos los registros que dependen de un registro eliminado.</li>
  <li><strong>Actualizar en cascada:</strong> actualiza automáticamente los valores de las claves foráneas cuando se modifica la clave primaria referenciada.</li>
  <li><strong>Restringir o denegar:</strong> impide la eliminación o actualización de un registro si existen claves foráneas que lo referencian.</li>
</ul>`
  },
  {
    id: 'xbd-ud2-10',
    tipo: 'tema',
    titulo: '10. Notación: grafo relacional',
    resumen: 'Grafo relacional: tablas en mayúsculas con atributos entre paréntesis; PK subrayada, alternativas en negrita, FK en cursiva con flecha; opciones B:C/R/N/D y M:C/R/N/D.',
    claves: ['TABLA(atributos)', 'PK subrayada · alternativa negrita · FK cursiva + flecha · nulos con *', 'B:C cascada · B:R restringido · B:N nulos · B:D defecto', 'M:C · M:R · M:N · M:D'],
    tags: ['grafo relacional', 'notación', 'B:C', 'B:R', 'M:C', 'borrado en cascada', 'modificación'],
    contenido: `<p>El grafo relacional es una notación que permite representar un modelo relacional. Se trata de un grafo dirigido cuyos nodos son las relaciones (tablas) con sus atributos. Las restricciones de clave ajena se representan mediante arcos entre las relaciones. En cada arco se añaden también las opciones de borrado y modificación que permiten mantener la integridad referencial.</p>
<p>Convenciones utilizadas para representar este grafo:</p>
<ul>
  <li>El nombre de las tablas se representa en mayúsculas.</li>
  <li>Primero aparece el nombre de la relación y a continuación sus atributos entre paréntesis.</li>
  <li>Las claves primarias aparecen subrayadas.</li>
  <li>Las claves alternativas aparecen en negrita.</li>
  <li>Las claves ajenas se representan en cursiva y referencian a la relación en la que son clave primaria mediante una flecha.</li>
  <li>Los atributos que pueden tomar valores nulos aparecen con un asterisco.</li>
</ul>

<table>
  <colgroup><col><col><col></colgroup>
  <thead><tr><th>Operación</th><th>Código</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td rowspan="4">Borrado</td><td>B:C</td><td>Borrado en cascada.</td></tr>
    <tr><td>B:R</td><td>Borrado restringido.</td></tr>
    <tr><td>B:N</td><td>Borrado con puesta a nulos.</td></tr>
    <tr><td>B:D</td><td>Borrado con puesta a valor por defecto.</td></tr>
    <tr><td rowspan="4">Modificación</td><td>M:C</td><td>Modificación en cascada.</td></tr>
    <tr><td>M:R</td><td>Modificación restringida.</td></tr>
    <tr><td>M:N</td><td>Modificación con puesta a nulos.</td></tr>
    <tr><td>M:D</td><td>Modificación con puesta a valor por defecto.</td></tr>
  </tbody>
</table>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de notación de grafo relacional: claves primarias subrayadas, claves foráneas en cursiva con flecha hacia la tabla referenciada, y opciones de borrado/modificación junto al arco.</p>`
  },
  {
    id: 'xbd-ud2-11',
    tipo: 'tema',
    titulo: '11. Transformación del modelo conceptual (E-R) al modelo relacional',
    resumen: 'Reglas para pasar del E-R al relacional: entidades → tablas, atributos → columnas, relaciones según cardinalidad, débiles y especializaciones.',
    claves: ['Entidad → tabla', 'Relación → FK o tabla intermedia', 'Se preservan las restricciones'],
    tags: ['transformación', 'paso a tablas', 'E-R a relacional'],
    links: ['xbd-ud2-11-1', 'xbd-ud2-11-2', 'xbd-ud2-11-3', 'xbd-ud2-11-4'],
    contenido: `<p>El paso del modelo conceptual Entidad-Relación (E-R) al modelo relacional es fundamental en el diseño lógico de bases de datos. Este proceso convierte entidades, relaciones y atributos definidos en el diagrama E-R en tablas, claves y relaciones en el modelo relacional, listas para implementarse en un SGBD relacional.</p>`
  },
  {
    id: 'xbd-ud2-11-1',
    tipo: 'subtema',
    titulo: '11.1. Traducción de entidades a tablas y atributos',
    resumen: 'Cada entidad → tabla con sus atributos como columnas y la misma PK. Compuestos se descomponen; multivaluados → tabla aparte (TELEFONO(DNI, teléfono)).',
    claves: ['CLIENTE(DNI, nombre, apellidos, calle, código_postal, ciudad)', 'Multivaluado → TELEFONO(DNI, teléfono)'],
    tags: ['entidad a tabla', 'atributo compuesto', 'atributo multivaluado'],
    contenido: `<p><strong>Conversión de entidades en tablas.</strong> Cada entidad en el modelo E-R se convierte en una tabla en el modelo relacional. Los atributos de la entidad se convierten en columnas en la tabla correspondiente. La clave primaria de la entidad en el modelo E-R también se define como clave primaria de la tabla.</p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de conversión de la entidad CLIENTE en una tabla del modelo relacional.</p>

<pre>CLIENTE(<u>DNI</u>, nombre, apellidos, dirección, teléfonos)</pre>

<p><strong>Conversión de atributos compuestos y multivaluados:</strong></p>
<ul>
  <li><strong>Compuestos:</strong> se dividen en atributos más simples para cumplir con las reglas de atomicidad del modelo relacional.</li>
  <li><strong>Multivaluados:</strong> se crean tablas separadas para almacenar estos valores en el modelo relacional.</li>
</ul>
<pre>CLIENTE(<u>DNI</u>, nombre, apellidos, calle, código_postal, ciudad)
TELEFONO(<u>DNI, teléfono</u>)</pre>`
  },
  {
    id: 'xbd-ud2-11-2',
    tipo: 'subtema',
    titulo: '11.2. Conversión de cardinalidades y tipos de participación en relaciones',
    resumen: '1:1 → FK en una tabla (o fusionar); 1:N → FK en el lado N (NOT NULL si obligatoria); N:M → tabla intermedia con ambas FK.',
    claves: ['1:1: FK en cualquiera o una sola tabla', '1:N: FK en el lado muchos', 'Obligatoria → NOT NULL · opcional → NULL', 'N:M: tabla Estudiante_Curso(ID_Estudiante, ID_Curso)'],
    tags: ['1:1', '1:N', 'N:M', 'tabla intermedia', 'participación obligatoria', 'participación opcional'],
    contenido: `<p>El modelo E-R establece relaciones con diferentes cardinalidades (uno a uno, uno a muchos, muchos a muchos) y participaciones (opcional u obligatoria). En el modelo relacional, estas relaciones se implementan de diferentes maneras para preservar la estructura del modelo conceptual.</p>

<h4>Relación uno a uno (1:1)</h4>
<p>Si la relación entre dos entidades es uno a uno, la relación puede implementarse mediante una clave foránea en cualquiera de las dos tablas o en ambas. Si la relación es obligatoria en ambos lados, se suele optar por una sola tabla, combinando ambas entidades.</p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de traducción de una interrelación 1:1 al modelo relacional.</p>

<h4>Relación uno a muchos (1:N)</h4>
<p>En una relación uno a muchos, el lado "muchos" de la relación incluye una clave foránea que hace referencia a la clave primaria del lado "uno".</p>
<p><em>Ejemplo: si un Departamento tiene varios Empleados, se añadiría un campo código_departamento en la tabla Empleado, que actúa como clave foránea apuntando al código en la tabla Departamento.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de traducción de una interrelación 1:N al modelo relacional (Departamento-Empleado).</p>

<ul>
  <li><strong>Participación obligatoria:</strong> la clave foránea en la tabla relacionada no permite valores nulos, indicando que cada instancia debe estar relacionada.</li>
  <li><strong>Participación opcional:</strong> permite valores nulos en la clave foránea, indicando que la relación es opcional.</li>
</ul>
<p><em>Ejemplo: si un Empleado debe estar asignado a un Departamento, el campo ID_Departamento en Empleado no permite valores nulos. Si la asignación es opcional, ID_Departamento puede permitir nulos.</em></p>

<h4>Relación muchos a muchos (N:M)</h4>
<p>Las relaciones muchos a muchos no pueden representarse directamente en el modelo relacional y, por lo tanto, se convierten en una <u>tabla intermedia</u> que contiene claves foráneas de ambas entidades relacionadas.</p>
<p><em>Ejemplo: si Estudiante tiene una relación muchos a muchos con Curso, se crea una tabla Estudiante_Curso con ID_Estudiante y ID_Curso como claves foráneas.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de traducción de una interrelación N:M al modelo relacional, con la tabla intermedia Estudiante_Curso.</p>`
  },
  {
    id: 'xbd-ud2-11-3',
    tipo: 'subtema',
    titulo: '11.3. Manejo de entidades débiles y relaciones con atributos propios',
    resumen: 'Entidad débil → tabla con PK compuesta (clave de la fuerte + clave parcial). Relación con atributos propios → tabla intermedia con esos atributos.',
    claves: ['Habitación: PK (ID_Hotel, Número_Habitación)', 'Empleado_Proyecto(ID_Empleado, ID_Proyecto, Fecha_Asignación)'],
    tags: ['entidad débil', 'clave compuesta', 'atributos de la relación'],
    contenido: `<p><strong>Entidades débiles.</strong> Una entidad débil es aquella que no tiene una clave primaria propia y depende de otra entidad para su identificación. En el modelo relacional, una entidad débil se convierte en una tabla cuya clave primaria incluye tanto su identificador parcial como la clave primaria de la entidad de la que depende.</p>
<p><em>Ejemplo: si Habitación es una entidad débil dependiente de Hotel, su clave primaria será una combinación de ID_Hotel y Número_Habitación.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de traducción de una entidad débil al modelo relacional (Hotel-Habitación).</p>

<p><strong>Relaciones con atributos propios.</strong> Si una relación en el modelo E-R tiene atributos propios (información relevante solo para esa relación), se crea una tabla intermedia que incluye los atributos de la relación y las claves foráneas de las entidades relacionadas.</p>
<p><em>Ejemplo: si existe una relación entre Empleado y Proyecto con un atributo Fecha_Asignación, se crea una tabla Empleado_Proyecto con ID_Empleado, ID_Proyecto y Fecha_Asignación.</em></p>

<p class="muted fig-missing">Figura (no incluida en el material original): Ejemplo de traducción de una interrelación con atributos propios al modelo relacional (Empleado-Proyecto-Fecha_Asignación).</p>`
  },
  {
    id: 'xbd-ud2-11-4',
    tipo: 'subtema',
    titulo: '11.4. Especialización',
    resumen: 'Las cuatro combinaciones de especialización traducidas a tablas con ejemplos de datos: total/parcial × exclusiva/solapada.',
    claves: ['Total + exclusiva: tabla por subtipo, o supertipo con campo Tipo + subtablas', 'Parcial + exclusiva: supertipo + subtablas (Vehículo)', 'Total + solapada: supertipo + subtablas, un registro en varias (Material)', 'Parcial + solapada: Persona / Estudiante / Profesor'],
    tags: ['especialización', 'herencia total', 'herencia parcial', 'exclusión', 'solapamiento', 'subtablas'],
    contenido: `<p>Recuerda del apartado 4.1.3 que una especialización se clasifica según dos ejes independientes: total/parcial y exclusiva/solapada. Veamos las cuatro combinaciones traducidas al modelo relacional, cada una con un ejemplo completo de datos.</p>

<h4>Especialización con herencia total y exclusión</h4>
<p>Todos los registros de la entidad general deben pertenecer a una de las subentidades, y un registro solo puede pertenecer a una de ellas.</p>
<p><em>Ejemplo: una entidad Empleado se divide en Empleado_Hora y Empleado_Fijo. Cada empleado es o bien Empleado_Hora o bien Empleado_Fijo, sin posibilidad de pertenecer a ambas.</em></p>

<p><strong>Opción 1:</strong> crear una tabla para cada subentidad (Empleado_Hora, Empleado_Fijo) que incluya sus atributos específicos y los atributos heredados de Empleado.</p>
<p><em>Tabla Empleado_Hora</em></p>
<table>
  <thead><tr><th>ID_Empleado</th><th>Nombre</th><th>Tarifa_Hora</th><th>Horas_Trabajadas</th></tr></thead>
  <tbody><tr><td>1</td><td>Ana</td><td>15</td><td>40</td></tr></tbody>
</table>
<p><em>Tabla Empleado_Fijo</em></p>
<table>
  <thead><tr><th>ID_Empleado</th><th>Nombre</th><th>Salario</th><th>Fecha_Contratación</th></tr></thead>
  <tbody><tr><td>2</td><td>Luis</td><td>3000</td><td>2023-02-01</td></tr></tbody>
</table>

<p><strong>Opción 2:</strong> mantener la tabla Empleado con un campo de tipo (Tipo_Empleado), y crear tablas separadas para Empleado_Hora y Empleado_Fijo que solo contengan los atributos específicos de cada tipo.</p>
<p><em>Tabla Empleado</em></p>
<table>
  <thead><tr><th>ID_Empleado</th><th>Nombre</th><th>Tipo</th></tr></thead>
  <tbody><tr><td>1</td><td>Ana</td><td>Hora</td></tr><tr><td>2</td><td>Luis</td><td>Fijo</td></tr></tbody>
</table>
<p><em>Tabla Empleado_Hora</em></p>
<table>
  <thead><tr><th><em>ID_Empleado</em></th><th>Tarifa_Hora</th><th>Horas_Trabajadas</th></tr></thead>
  <tbody><tr><td>1</td><td>15</td><td>40</td></tr></tbody>
</table>
<p><em>Tabla Empleado_Fijo</em></p>
<table>
  <thead><tr><th><em>ID_Empleado</em></th><th>Salario</th><th>Fecha_Contratación</th></tr></thead>
  <tbody><tr><td>2</td><td>3000</td><td>2023-02-01</td></tr></tbody>
</table>

<h4>Especialización con herencia parcial y exclusión</h4>
<p>Algunos registros de la entidad general no pertenecen a ninguna subentidad, y cada registro pertenece a solo una subentidad o a ninguna.</p>
<p><em>Ejemplo: una entidad Vehículo, de la cual solo algunos vehículos son Vehículo_Comercial o Vehículo_Personal. Otros vehículos pueden no clasificarse en ninguna de estas subentidades.</em></p>
<p><strong>Representación:</strong> tabla Vehículo para la entidad general, más tablas adicionales Vehículo_Comercial y Vehículo_Personal con sus atributos específicos.</p>
<p><em>Tabla Vehículo</em></p>
<table>
  <thead><tr><th>ID_Vehículo</th><th>Marca</th><th>Modelo</th></tr></thead>
  <tbody><tr><td>1</td><td>Ford</td><td>F-150</td></tr><tr><td>2</td><td>Toyota</td><td>Corolla</td></tr></tbody>
</table>
<p><em>Tabla Vehículo_Comercial</em></p>
<table>
  <thead><tr><th>ID_Vehículo</th><th>Capacidad_Carga</th></tr></thead>
  <tbody><tr><td>1</td><td>2000 kg</td></tr></tbody>
</table>
<p><em>Tabla Vehículo_Personal</em></p>
<table>
  <thead><tr><th>ID_Vehículo</th><th>Tipo_Propietario</th></tr></thead>
  <tbody><tr><td>2</td><td>Persona Física</td></tr></tbody>
</table>
<p>En este caso, un vehículo que no sea ni comercial ni personal solo aparecería en la tabla Vehículo.</p>

<h4>Especialización con herencia total y superposición (solapamiento)</h4>
<p>Todos los registros de la entidad general deben pertenecer a al menos una subentidad, y un registro puede pertenecer a varias subentidades a la vez.</p>
<p><em>Ejemplo: en una biblioteca, una entidad Material puede especializarse en Libro, Revista y Material_Audiovisual, y un material puede clasificarse en varias subentidades (por ejemplo, un "libro con DVD" es tanto Libro como Material_Audiovisual).</em></p>
<p><strong>Representación:</strong> tabla Material con los atributos comunes, más una tabla para cada subentidad (Libro, Revista, Material_Audiovisual).</p>
<p><em>Tabla Material</em></p>
<table>
  <thead><tr><th>ID_Material</th><th>Título</th></tr></thead>
  <tbody><tr><td>1</td><td>Enciclopedia Educativa</td></tr><tr><td>2</td><td>Guía de Matemáticas</td></tr></tbody>
</table>
<p><em>Tabla Libro</em></p>
<table>
  <thead><tr><th><em>ID_Material</em></th><th>Autor</th><th>ISBN</th></tr></thead>
  <tbody><tr><td>1</td><td>Varios</td><td>978-1234567</td></tr></tbody>
</table>
<p><em>Tabla Material_Audiovisual</em></p>
<table>
  <thead><tr><th><em>ID_Material</em></th><th>Formato</th></tr></thead>
  <tbody><tr><td>1</td><td>DVD</td></tr></tbody>
</table>
<p>El material con ID_Material = 1 aparece tanto en Libro como en Material_Audiovisual, reflejando que es un libro y un material audiovisual a la vez.</p>

<h4>Especialización con herencia parcial y superposición (solapamiento)</h4>
<p>Algunos registros de la entidad general no pertenecen a ninguna subentidad, y otros pueden pertenecer a varias subentidades.</p>
<p><em>Ejemplo: una entidad Persona en la que algunas personas son Estudiante, Profesor o ambos, y otras no pertenecen a ninguna de estas categorías.</em></p>
<p><strong>Representación:</strong> tabla Persona y tablas separadas para Estudiante y Profesor.</p>
<p><em>Tabla Persona</em></p>
<table>
  <thead><tr><th>ID_Persona</th><th>Nombre</th></tr></thead>
  <tbody><tr><td>1</td><td>Ana</td></tr><tr><td>2</td><td>Luis</td></tr><tr><td>3</td><td>María</td></tr></tbody>
</table>
<p><em>Tabla Estudiante</em></p>
<table>
  <thead><tr><th><em>ID_Persona</em></th><th>Carrera</th></tr></thead>
  <tbody><tr><td>1</td><td>Ingeniería</td></tr><tr><td>3</td><td>Medicina</td></tr></tbody>
</table>
<p><em>Tabla Profesor</em></p>
<table>
  <thead><tr><th><em>ID_Persona</em></th><th>Departamento</th></tr></thead>
  <tbody><tr><td>2</td><td>Matemáticas</td></tr><tr><td>3</td><td>Biología</td></tr></tbody>
</table>
<p>María (ID_Persona = 3) aparece en ambas tablas (Estudiante y Profesor); Ana solo aparece en Estudiante y Luis solo en Profesor. Ana no aparece en ninguna subtabla porque pertenece únicamente a la entidad general Persona.</p>`
  },
  {
    id: 'xbd-ud2-12',
    tipo: 'tema',
    titulo: '12. Normalización para el diseño lógico',
    resumen: 'Normalización: organizar las tablas para minimizar redundancias aplicando formas normales sucesivas. Base: la dependencia funcional (A → B).',
    claves: ['Dependencia funcional: cada valor de A determina un único B', 'Formas normales: 1FN, 2FN, 3FN, BCNF, 4FN, 5FN'],
    tags: ['normalización', 'dependencia funcional', 'formas normales'],
    links: ['xbd-ud2-12-1', 'xbd-ud2-12-2', 'xbd-ud2-12-3', 'xbd-ud2-12-4', 'xbd-ud2-12-5', 'xbd-ud2-12-6', 'xbd-ud2-12-ej'],
    contenido: `<p>La normalización es el proceso mediante el cual organizamos los datos en tablas para minimizar redundancias y asegurar la integridad. Este proceso consta de varias formas normales, que son reglas que aplicamos paso a paso para optimizar el diseño lógico.</p>
<div class="box def"><div class="box-title">Dependencia funcional</div><p>Un atributo B depende funcionalmente de un atributo A si cada valor de A está asociado con un único valor de B. Este concepto es esencial en el proceso de normalización, ya que ayuda a identificar dependencias entre atributos.</p></div>`
  },
  {
    id: 'xbd-ud2-12-1',
    tipo: 'subtema',
    titulo: '12.1. Primera Forma Normal (1FN)',
    resumen: '1FN: valores atómicos (sin listas) y un solo tipo por columna. Se descomponen las celdas con varios valores en filas.',
    claves: ['Sin listas ni conjuntos en una celda', 'Pedidos.productos "P1, P2" → dos filas'],
    tags: ['1FN', 'primera forma normal', 'atómico'],
    contenido: `<p>Para que una tabla esté en 1FN debe cumplir:</p>
<ul>
  <li>Todos los atributos deben tener valores atómicos (sin listas ni conjuntos de valores).</li>
  <li>Cada columna debe contener un solo tipo de dato.</li>
</ul>
<p><em>Ejemplo: una tabla Pedidos donde cada pedido puede incluir varios productos en una lista:</em></p>
<table>
  <thead><tr><th>ID_Pedido</th><th>fecha</th><th>productos</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>2024-10-10</td><td>Producto1, Producto2</td></tr>
    <tr><td>2</td><td>2024-10-11</td><td>Producto3</td></tr>
  </tbody>
</table>
<p><em>Esta estructura no cumple 1FN porque productos contiene una lista de valores. Solución: descomponemos productos para que cada fila tenga un solo valor:</em></p>
<table>
  <thead><tr><th>ID_Pedido</th><th>fecha</th><th>productos</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>2024-10-10</td><td>Producto1</td></tr>
    <tr><td>1</td><td>2024-10-10</td><td>Producto2</td></tr>
    <tr><td>2</td><td>2024-10-11</td><td>Producto3</td></tr>
  </tbody>
</table>`
  },
  {
    id: 'xbd-ud2-12-2',
    tipo: 'subtema',
    titulo: '12.2. Segunda Forma Normal (2FN)',
    resumen: '2FN: 1FN + sin dependencias parciales (todo atributo no clave depende de la clave completa). Se separan tablas.',
    claves: ['Solo aplica con PK compuesta', 'nombre_Cliente depende solo de ID_Pedido → Pedidos + Pedido_Detalle'],
    tags: ['2FN', 'segunda forma normal', 'dependencia parcial'],
    contenido: `<p>Para que una tabla esté en 2FN debe:</p>
<ul>
  <li>Cumplir la 1FN.</li>
  <li>Todos los atributos que no forman parte de la clave primaria deben depender completamente de ella, eliminando dependencias parciales.</li>
</ul>
<p><em>Ejemplo: una tabla Pedidos con clave primaria compuesta por ID_Pedido e ID_Producto. También almacena nombre_Cliente, que depende solo de ID_Pedido, no de toda la clave:</em></p>
<table>
  <thead><tr><th>ID_Pedido</th><th>ID_Producto</th><th>nombre_Cliente</th><th>cantidad</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>101</td><td>Juan</td><td>10</td></tr>
    <tr><td>1</td><td>102</td><td>Juan</td><td>5</td></tr>
    <tr><td>2</td><td>103</td><td>María</td><td>3</td></tr>
  </tbody>
</table>
<p><em>nombre_Cliente depende solo de ID_Pedido, no de la clave completa: viola la 2FN por dependencia parcial. Solución: dividimos en dos tablas:</em></p>
<p><em>Tabla Pedidos (solo información del pedido)</em></p>
<table>
  <thead><tr><th>ID_Pedido</th><th>nombre_Cliente</th></tr></thead>
  <tbody><tr><td>1</td><td>Juan</td></tr><tr><td>2</td><td>María</td></tr></tbody>
</table>
<p><em>Tabla Pedido_Detalle (detalles de los productos en cada pedido)</em></p>
<table>
  <thead><tr><th>ID_Pedido</th><th>ID_Producto</th><th>cantidad</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>101</td><td>10</td></tr>
    <tr><td>1</td><td>102</td><td>5</td></tr>
    <tr><td>2</td><td>103</td><td>3</td></tr>
  </tbody>
</table>`
  },
  {
    id: 'xbd-ud2-12-3',
    tipo: 'subtema',
    titulo: '12.3. Tercera Forma Normal (3FN)',
    resumen: '3FN: 2FN + sin dependencias transitivas (ningún atributo no clave depende de otro no clave).',
    claves: ['ID_Departamento → Nombre_Departamento → Nombre_Jefe es transitiva', 'Empleados + Departamentos'],
    tags: ['3FN', 'tercera forma normal', 'dependencia transitiva'],
    contenido: `<p>Para que una tabla esté en 3FN:</p>
<ul>
  <li>Debe cumplir la 2FN.</li>
  <li>No debe haber dependencias transitivas: ningún atributo no clave debe depender de otro atributo no clave.</li>
</ul>
<p><em>Ejemplo: una tabla Empleados en la que ID_Departamento determina Nombre_Departamento, y Nombre_Departamento determina Nombre_Jefe. Esto crea una dependencia transitiva:</em></p>
<table>
  <thead><tr><th>ID_Empleado</th><th>Nombre</th><th>ID_Departamento</th><th>Nombre_Departamento</th><th>Nombre_Jefe</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Ana</td><td>10</td><td>Ventas</td><td>Lucía</td></tr>
    <tr><td>2</td><td>Luis</td><td>20</td><td>Compras</td><td>Carlos</td></tr>
  </tbody>
</table>
<p><em>Solución: dividimos la tabla en dos para eliminar la dependencia transitiva.</em></p>
<p><em>Tabla Empleados</em></p>
<table>
  <thead><tr><th>ID_Empleado</th><th>Nombre</th><th><em>ID_Departamento</em></th></tr></thead>
  <tbody><tr><td>1</td><td>Ana</td><td>10</td></tr><tr><td>2</td><td>Luis</td><td>20</td></tr></tbody>
</table>
<p><em>Tabla Departamentos</em></p>
<table>
  <thead><tr><th>ID_Departamento</th><th>Nombre_Departamento</th><th>Nombre_Jefe</th></tr></thead>
  <tbody><tr><td>10</td><td>Ventas</td><td>Lucía</td></tr></tbody>
</table>`
  },
  {
    id: 'xbd-ud2-12-4',
    tipo: 'subtema',
    titulo: '12.4. Forma Normal de Boyce-Codd (BCNF)',
    resumen: 'BCNF: 3FN + todo determinante es clave candidata. Ejemplo Profesor–Curso–Aula dividido en Profesores_Curso y Curso_Aula.',
    claves: ['El determinante debe ser clave candidata', 'Curso → Aula pero Curso no es clave'],
    tags: ['BCNF', 'Boyce-Codd', 'determinante'],
    contenido: `<p>Es una versión más estricta de la 3FN. Para cumplir BCNF, una tabla debe estar en 3FN y, además, cualquier determinante (un atributo que determina otro) debe ser una clave candidata.</p>
<p><em>Ejemplo: una tabla Asignaciones donde cada profesor solo enseña un curso, pero cada curso puede impartirse en varias aulas. Curso determina Aula, pero Curso no es clave primaria:</em></p>
<table>
  <thead><tr><th>Profesor</th><th>curso</th><th>aula</th></tr></thead>
  <tbody>
    <tr><td>Laura</td><td>Matemáticas</td><td>101</td></tr>
    <tr><td>Laura</td><td>Matemáticas</td><td>102</td></tr>
    <tr><td>Carlos</td><td>Historia</td><td>101</td></tr>
  </tbody>
</table>
<p><em>Solución: dividimos la tabla en dos.</em></p>
<p><em>Tabla Profesores_Curso</em></p>
<table>
  <thead><tr><th>Profesor</th><th><em>Curso</em></th></tr></thead>
  <tbody><tr><td>Laura</td><td>Matemáticas</td></tr><tr><td>Carlos</td><td>Historia</td></tr></tbody>
</table>
<p><em>Tabla Curso_Aula</em></p>
<table>
  <thead><tr><th>Curso</th><th>aula</th></tr></thead>
  <tbody><tr><td>Matemáticas</td><td>101</td></tr><tr><td>Matemáticas</td><td>102</td></tr><tr><td>Historia</td><td>101</td></tr></tbody>
</table>`
  },
  {
    id: 'xbd-ud2-12-5',
    tipo: 'subtema',
    titulo: '12.5. Cuarta Forma Normal (4FN)',
    resumen: '4FN: BCNF + sin dependencias multivaluadas independientes (alumno–cursos y alumno–actividades en tablas distintas).',
    claves: ['Dependencia multivaluada: varios valores independientes entre sí', 'Alumnos_Cursos + Alumnos_Actividades'],
    tags: ['4FN', 'cuarta forma normal', 'dependencia multivaluada'],
    contenido: `<p>Se ocupa de eliminar dependencias multivaluadas: ocurren cuando un atributo tiene varios valores independientes de otros valores en la misma tabla. Para 4FN, la tabla debe cumplir BCNF y no tener dependencias multivaluadas.</p>
<p><em>Ejemplo: una tabla Alumnos_Cursos_Actividades donde cada alumno está inscrito en cursos y, además, en actividades extraescolares independientes de los cursos:</em></p>
<table>
  <thead><tr><th>ID_Alumno</th><th>Curso</th><th>Actividad</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Matemáticas</td><td>Fútbol</td></tr>
    <tr><td>1</td><td>Matemáticas</td><td>Pintura</td></tr>
    <tr><td>1</td><td>Historia</td><td>Fútbol</td></tr>
    <tr><td>2</td><td>Física</td><td>Pintura</td></tr>
    <tr><td>2</td><td>Química</td><td>Ajedrez</td></tr>
  </tbody>
</table>
<p><em>Solución: descomponemos en dos tablas, separando las relaciones de ID_Alumno con Curso y con Actividad.</em></p>
<p><em>Tabla Alumnos_Cursos</em></p>
<table>
  <thead><tr><th><em>ID_Alumno</em></th><th>Curso</th></tr></thead>
  <tbody><tr><td>1</td><td>Matemáticas</td></tr><tr><td>1</td><td>Historia</td></tr><tr><td>2</td><td>Física</td></tr><tr><td>2</td><td>Química</td></tr></tbody>
</table>
<p><em>Tabla Alumnos_Actividades</em></p>
<table>
  <thead><tr><th>ID_Alumno</th><th>Actividad</th></tr></thead>
  <tbody><tr><td>1</td><td>Fútbol</td></tr><tr><td>1</td><td>Pintura</td></tr><tr><td>2</td><td>Pintura</td></tr><tr><td>2</td><td>Ajedrez</td></tr></tbody>
</table>`
  },
  {
    id: 'xbd-ud2-12-6',
    tipo: 'subtema',
    titulo: '12.6. Quinta Forma Normal (5FN)',
    resumen: '5FN (proyección-join): 4FN + sin dependencias de join; la tabla se reconstruye sin pérdida a partir de proyecciones.',
    claves: ['Alumno–Curso–Profesor → tres tablas de pares', 'Sin dependencias de join'],
    tags: ['5FN', 'quinta forma normal', 'dependencia de join', 'proyección'],
    contenido: `<p>La 5FN (o forma de proyección-join) asegura que no existan dependencias de join que permitan reconstruir la tabla original sin pérdida de información a partir de varias tablas más pequeñas. Para 5FN, la tabla debe cumplir 4FN y no tener dependencias de join.</p>
<p><em>Ejemplo: una tabla Inscripciones que relaciona Alumno, Curso y Profesor, donde cada par de atributos puede combinarse para reconstruir la tabla original sin que haya una relación directa entre Profesor y Curso (dependencia de join):</em></p>
<table>
  <thead><tr><th>Alumno</th><th>Curso</th><th>Profesor</th></tr></thead>
  <tbody>
    <tr><td>Ana</td><td>Matemáticas</td><td>García</td></tr>
    <tr><td>Ana</td><td>Matemáticas</td><td>Pérez</td></tr>
    <tr><td>Luis</td><td>Historia</td><td>García</td></tr>
    <tr><td>Luis</td><td>Física</td><td>Pérez</td></tr>
  </tbody>
</table>
<p><em>Descomposición en 5FN:</em></p>
<p><em>Tabla Alumnos_Cursos</em></p>
<table>
  <thead><tr><th>Alumno</th><th>Curso</th></tr></thead>
  <tbody><tr><td>Ana</td><td>Matemáticas</td></tr><tr><td>Luis</td><td>Historia</td></tr><tr><td>Luis</td><td>Física</td></tr></tbody>
</table>
<p><em>Tabla Cursos_Profesores</em></p>
<table>
  <thead><tr><th>Curso</th><th>Profesor</th></tr></thead>
  <tbody><tr><td>Matemáticas</td><td>García</td></tr><tr><td>Matemáticas</td><td>Pérez</td></tr><tr><td>Historia</td><td>García</td></tr><tr><td>Física</td><td>Pérez</td></tr></tbody>
</table>
<p><em>Tabla Alumnos_Profesores</em></p>
<table>
  <thead><tr><th>Alumno</th><th>Profesor</th></tr></thead>
  <tbody><tr><td>Ana</td><td>García</td></tr><tr><td>Ana</td><td>Pérez</td></tr><tr><td>Luis</td><td>García</td></tr><tr><td>Luis</td><td>Pérez</td></tr></tbody>
</table>
<p><em>Con esta descomposición eliminamos las dependencias de join: la tabla cumple 5FN, sin redundancias ni dependencias adicionales.</em></p>`
  },
  {
    id: 'xbd-ud2-12-ej',
    tipo: 'subtema',
    titulo: 'Ejemplo completo de normalización hasta BCNF',
    resumen: 'Tabla de pedidos no normalizada → 1FN → 2FN (Pedidos, Clientes, Detalle_Pedidos) → 3FN → BCNF, paso a paso.',
    claves: ['Problemas: valores repetidos, grupos repetidos, datos no atómicos', '2FN: dividir en Pedidos, Clientes y Detalle_Pedidos', '3FN y BCNF ya se cumplen tras la división'],
    tags: ['ejemplo', 'normalización', 'pedidos', 'clientes', 'BCNF'],
    contenido: `<p><em>Tabla inicial (no normalizada) de pedidos de clientes:</em></p>
<table>
  <colgroup><col><col><col><col><col><col><col><col></colgroup>
  <thead><tr><th>Pedido_ID</th><th>Cliente_ID</th><th>Nombre_Cliente</th><th>Dirección</th><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Fecha_Pedido</th></tr></thead>
  <tbody>
    <tr><td>101</td><td>1</td><td>Ana Pérez</td><td>Calle Mayor 12</td><td>Laptop</td><td>1</td><td>1200</td><td>2023-01-10</td></tr>
    <tr><td>101</td><td>1</td><td>Ana Pérez</td><td>Calle Mayor 12</td><td>Mouse</td><td>2</td><td>25</td><td>2023-01-10</td></tr>
    <tr><td>102</td><td>2</td><td>Carlos Díaz</td><td>Avenida Libertad 45</td><td>Teclado</td><td>1</td><td>50</td><td>2023-01-12</td></tr>
    <tr><td>102</td><td>2</td><td>Carlos Díaz</td><td>Avenida Libertad 45</td><td>Monitor</td><td>1</td><td>300</td><td>2023-01-12</td></tr>
    <tr><td>103</td><td>1</td><td>Ana Pérez</td><td>Calle Mayor 12</td><td>Teclado</td><td>1</td><td>50</td><td>2023-01-15</td></tr>
    <tr><td>103</td><td>1</td><td>Ana Pérez</td><td>Calle Mayor 12</td><td>Monitor</td><td>1</td><td>300</td><td>2023-01-15</td></tr>
  </tbody>
</table>

<p><strong>Problemas de la tabla inicial:</strong></p>
<ul>
  <li><strong>Valores repetidos:</strong> Cliente_ID, Nombre_Cliente y Dirección se repiten para cada producto de cada pedido.</li>
  <li><strong>Grupos repetidos:</strong> un mismo pedido puede tener varios productos, generando duplicación.</li>
  <li><strong>Datos no atómicos:</strong> si un cliente tuviera más de una dirección, habría que guardar varias en una sola columna o duplicar filas.</li>
</ul>

<p><strong>Paso 1: 1FN.</strong> Eliminar grupos repetidos (cada pedido y cada producto en su propia fila) y valores atómicos. Como la tabla original no tiene celdas con múltiples valores, ya está en 1FN.</p>

<p><strong>Paso 2: 2FN.</strong> La clave primaria parece ser la combinación de Pedido_ID y Producto. Sin embargo, Nombre_Cliente y Dirección dependen solo de Cliente_ID, no de la combinación completa: hay una dependencia parcial. Dividimos en tres tablas:</p>
<p><em>Tabla Pedidos</em></p>
<table>
  <thead><tr><th>Pedido_ID</th><th><em>Cliente_ID</em></th><th>Fecha_Pedido</th></tr></thead>
  <tbody><tr><td>101</td><td>1</td><td>2023-01-10</td></tr><tr><td>102</td><td>2</td><td>2023-01-12</td></tr><tr><td>103</td><td>1</td><td>2023-01-15</td></tr></tbody>
</table>
<p><em>Tabla Clientes</em></p>
<table>
  <thead><tr><th>Cliente_ID</th><th>Nombre_Cliente</th><th>Dirección</th></tr></thead>
  <tbody><tr><td>1</td><td>Ana Pérez</td><td>Calle Mayor 12</td></tr><tr><td>2</td><td>Carlos Díaz</td><td>Avenida Libertad 45</td></tr></tbody>
</table>
<p><em>Tabla Detalle_Pedidos</em></p>
<table>
  <thead><tr><th>Pedido_ID</th><th>Producto</th><th>Cantidad</th><th>Precio</th></tr></thead>
  <tbody>
    <tr><td>101</td><td>Laptop</td><td>1</td><td>1200</td></tr>
    <tr><td>101</td><td>Mouse</td><td>2</td><td>25</td></tr>
    <tr><td>102</td><td>Teclado</td><td>1</td><td>50</td></tr>
    <tr><td>102</td><td>Monitor</td><td>1</td><td>300</td></tr>
    <tr><td>103</td><td>Teclado</td><td>1</td><td>50</td></tr>
    <tr><td>103</td><td>Monitor</td><td>1</td><td>300</td></tr>
  </tbody>
</table>
<p>Ahora cada tabla está en 2FN: todos los atributos dependen completamente de la clave primaria de su tabla.</p>

<p><strong>Paso 3: 3FN.</strong> En Detalle_Pedidos, todos los atributos dependen directamente de la clave compuesta (Pedido_ID, Producto). En Clientes y Pedidos, cada atributo depende solo de la clave primaria de su tabla. Las tres tablas ya están en 3FN.</p>

<p><strong>Paso 4: BCNF.</strong> En Clientes, la clave candidata es Cliente_ID y todos los atributos dependen de ella. En Pedidos, la clave candidata es Pedido_ID. En Detalle_Pedidos, la clave compuesta (Pedido_ID, Producto) es la única clave candidata, y todos los atributos dependen completamente de ella. Las tres tablas cumplen BCNF.</p>

<div class="box tip"><div class="box-title">Resumen</div><p><strong>1FN:</strong> eliminamos grupos repetidos y aseguramos valores atómicos.</p>
    <p><strong>2FN:</strong> eliminamos dependencias parciales descomponiendo las tablas para que cada columna dependa completamente de la clave primaria.</p>
    <p><strong>3FN:</strong> eliminamos dependencias transitivas, asegurando que cada columna dependa directamente de la clave primaria sin intermediar otra dependencia.</p>
    <p><strong>BCNF:</strong> confirmamos que todas las dependencias funcionales tienen como determinante una clave candidata.</p></div>`
  },
  {
    id: 'xbd-ud2-13',
    tipo: 'tema',
    titulo: '13. Representación final: notaciones alternativas',
    resumen: 'Notaciones profesionales para el esquema final: Crow\'s Foot (pata de cuervo, la más usada en herramientas) y UML (diagramas de clases).',
    claves: ['Chen: didáctica, no la usan las herramientas', 'Crow\'s Foot: compacta, cardinalidades claras (1, N, 1..N)', 'UML: clases con relaciones, usado en desarrollo OO'],
    tags: ['Crow\'s Foot', 'pata de cuervo', 'UML', 'notación', 'Chen'],
    contenido: `<div class="box info"><div class="box-title">ℹ️ INFO</div><p>Ya tenemos el modelo relacional completo y normalizado (apartados 11 y 12). Antes de pasar a la implementación en el SGBD, toca representarlo con la notación gráfica que se usa realmente en la industria: no la de Chen (útil para razonar durante el diseño conceptual, apartados 1 a 6), sino una notación más compacta pensada para mostrar tablas ya cerradas.</p></div>
<p>Existen varias formas de representar gráficamente un esquema ya construido. La notación de Chen (rectángulos, óvalos y rombos) es la más didáctica para el diseño conceptual, pero casi ninguna herramienta profesional la usa para presentar el resultado final. Las dos notaciones siguientes son las más habituales en entornos profesionales para esa presentación final.</p>

<h4>Crow's Foot Notation (notación de pata de cuervo)</h4>
<p>Es una de las notaciones más comunes en la actualidad para diagramas E-R. Se utiliza para representar las relaciones de manera más compacta que la notación de Chen, especialmente las cardinalidades. Es más fácil de leer y más clara cuando se trabaja con diagramas E-R complejos. Se desarrolla en profundidad, con el diagrama completo de un caso práctico, en el Anexo IV de esta unidad.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe100.jpg" alt="Ejemplo de diagrama en notación Crow's Foot" loading="lazy"><figcaption>Ejemplo de diagrama en notación Crow's Foot.</figcaption></figure>

<h4>UML (Lenguaje de Modelado Unificado)</h4>
<p>Aunque UML se utiliza principalmente para modelar sistemas orientados a objetos, también se puede usar para representar bases de datos, combinando diagramas de clases con relaciones entre entidades. Permite a los desarrolladores de software <strong>trabajar con un solo diagrama</strong> tanto para el diseño de la base de datos como para el diseño de la lógica de la aplicación.</p>

<figure><img src="apuntes/xbd/ud2/imagenes/Imaxe101.jpg" alt="Ejemplo de diagrama UML" loading="lazy"><figcaption>Ejemplo de diagrama de clases UML aplicado al modelado de datos.</figcaption></figure>`
  },
  {
    id: 'xbd-ud2-glosario',
    tipo: 'glosario',
    titulo: 'Glosario UD2',
    resumen: 'Definiciones breves: entidad, atributo, clave primaria y foránea, cardinalidad, generalización, especialización, entidad débil, dependencia funcional, normalización, integridad referencial, grafo relacional, álgebra relacional.',
    claves: ['Entidad, atributo, relación', 'Clave primaria y foránea', 'Cardinalidad', 'Entidad débil y fuerte', 'Dependencia funcional', 'Normalización', 'Integridad referencial', 'Grafo relacional', 'Álgebra relacional'],
    tags: ['glosario', 'definiciones', 'vocabulario'],
    contenido: `<ul>
  <li><strong>Base de datos:</strong> conjunto de datos organizados y estructurados de manera que puedan ser fácilmente accesibles, gestionados y actualizados.</li>
  <li><strong>Entidad:</strong> objeto o concepto del mundo real que tiene relevancia para el sistema que se está modelando. Ejemplos: Cliente, Producto, Empleado.</li>
  <li><strong>Atributo:</strong> propiedad o característica de una entidad. Cada atributo describe una propiedad de la entidad. Ejemplos: Nombre, DNI, Fecha de Nacimiento.</li>
  <li><strong>Clave primaria (Primary Key):</strong> atributo o conjunto de atributos que identifican de manera única a cada instancia de una entidad. Ejemplo: ID_Cliente en la entidad Cliente.</li>
  <li><strong>Clave foránea (Foreign Key):</strong> atributo en una entidad que se refiere a la clave primaria de otra entidad, estableciendo una relación entre ambas.</li>
  <li><strong>Relación:</strong> asocia dos o más entidades. Define cómo interactúan o están relacionadas entre sí. Ejemplos: un cliente realiza un pedido, un estudiante se inscribe en un curso.</li>
  <li><strong>Cardinalidad:</strong> número de instancias de una entidad que pueden estar relacionadas con instancias de otra entidad.</li>
  <li><strong>Diagrama Entidad-Relación (E-R):</strong> representación gráfica que muestra entidades, atributos y relaciones entre ellas. Es una herramienta para modelar los datos de un sistema.</li>
  <li><strong>Generalización:</strong> proceso de agrupar varias entidades específicas en una entidad más general. Ejemplo: agrupar Coche y Camión en Vehículo.</li>
  <li><strong>Especialización:</strong> proceso inverso a la generalización. Divide una entidad general en subtipos más específicos. Ejemplo: dividir Empleado en Empleado Administrativo y Empleado de Producción.</li>
  <li><strong>Entidad débil:</strong> entidad que no puede identificarse de manera única solo por sus atributos, y necesita la clave primaria de otra entidad (entidad fuerte) para formar su clave primaria.</li>
  <li><strong>Entidad fuerte:</strong> entidad que tiene una clave primaria que la identifica de manera única sin depender de ninguna otra entidad.</li>
  <li><strong>Dependencia de identidad:</strong> relación entre una entidad fuerte y una entidad débil. La entidad débil depende de la entidad fuerte para su existencia.</li>
  <li><strong>Modelo relacional:</strong> estructura para organizar datos en tablas o relaciones, permitiendo su manipulación y consulta eficiente mediante álgebra relacional. Es el resultado del diseño lógico.</li>
  <li><strong>Dependencia funcional:</strong> relación en la que un atributo B depende de otro atributo A (el determinante), de forma que cada valor de A está asociado a un único valor de B. Es la base de las reglas de normalización.</li>
  <li><strong>Normalización:</strong> proceso para organizar los datos de una base de datos eliminando redundancias y dependencias, mediante la aplicación sucesiva de formas normales (1FN, 2FN, 3FN, BCNF, 4FN, 5FN).</li>
  <li><strong>Integridad referencial:</strong> regla que asegura que las claves foráneas siempre apunten a valores válidos en las claves primarias correspondientes, evitando referencias "huérfanas".</li>
  <li><strong>Grafo relacional:</strong> notación textual que representa las tablas de un modelo relacional junto con sus atributos, claves y las opciones de integridad referencial (borrado y modificación) entre ellas.</li>
  <li><strong>Álgebra relacional:</strong> conjunto de operaciones (selección, proyección, combinación, unión, intersección, diferencia, agrupación) que permite manipular y consultar datos en el modelo relacional.</li>
</ul>`
  },
  {
    id: 'xbd-ud2-recursos',
    tipo: 'recursos',
    titulo: 'Bibliografía y recursos UD2',
    resumen: 'Libros (Mora Rioja, Marqués, Camps Paré), apuntes ISPC, artículos y documentales sobre bases de datos y big data.',
    claves: ['Bases de datos: Diseño y Gestión (Síntesis)', 'Bases de Datos, Mercedes Marqués (CC)', 'Introducción a las Bases de Datos, UOC (CC)'],
    tags: ['bibliografía', 'recursos', 'libros', 'documentales'],
    contenido: `<ul>
  <li>Libro <em>Bases de datos: Diseño y Gestión</em>. Arturo Mora Rioja. Editorial Síntesis. <a href="https://www.sintesis.com/libro/bases-de-datos-diseno-y-gestion" target="_blank" rel="noopener">sintesis.com</a></li>
  <li>Libro PDF (CC) <em>Bases de Datos</em>, Mercedes Marqués. <a href="https://bdigital.uvhm.edu.mx/wp-content/uploads/2020/05/Bases-de-Datos.pdf" target="_blank" rel="noopener">bdigital.uvhm.edu.mx</a></li>
  <li>Libro PDF (CC) <em>Introducción a las Bases de Datos</em>, UOC, Rafael Camps Paré. <a href="https://www.uoc.edu/pdf/masters/oficiales/img/913.pdf" target="_blank" rel="noopener">uoc.edu</a></li>
  <li>Apuntes ISPC Bases de Datos. <a href="https://apuntes-de-base-de-datos-ispc.readthedocs.io/es/latest/" target="_blank" rel="noopener">apuntes-de-base-de-datos-ispc.readthedocs.io</a></li>
  <li>IT Explained: Bases de datos. <a href="https://www.paessler.com/es/it-explained/database" target="_blank" rel="noopener">paessler.com</a></li>
  <li>Oracle: ¿Qué es una base de datos? <a href="https://www.oracle.com/es/database/what-is-database/" target="_blank" rel="noopener">oracle.com</a></li>
  <li>Documental "Big Data: el valor de nuestra información", de Modesto Sierra. <a href="https://www.youtube.com/watch?v=xDlV1jCW7n0" target="_blank" rel="noopener">YouTube</a></li>
  <li>Documental "Amazon, Jeff Bezos y la colección de datos" (DW Documental). <a href="https://www.youtube.com/watch?v=UzGemfwaTT8" target="_blank" rel="noopener">YouTube</a></li>
</ul>`
  },
  ]
});
