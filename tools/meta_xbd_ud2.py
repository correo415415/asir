# -*- coding: utf-8 -*-
"""Metadatos (resumen, ideas clave, tags) de los nodos de XBD UD2. Los usa tools/parse_xbd_ud2.py."""
UNIDAD = 'xbd-ud2'
MATERIA = ("{ id: 'xbd', nombre: 'Xestión de Bases de Datos', abrev: 'XBD', codigo: 'MP0372', color: '#1d4e89', "
           "descripcion: 'Del dato al SGBD. PostgreSQL y MongoDB sobre la base de datos de prácticas TendaGalicia.', "
           "sugerencias: ['ACID', 'CAP', 'clave primaria', 'entidad', 'cardinalidad', 'normalización', 'JSON', 'PostgreSQL'] }")

META = {
'xbd-ud2': {
  'titulo': 'UD2 · Diseño conceptual y lógico de bases de datos',
  'resumen': 'Del enunciado al esquema relacional: modelo Entidad-Relación (entidades, atributos, relaciones, cardinalidades), E-R extendido, paso a tablas, claves e integridad, grafo relacional y normalización hasta 5FN.',
  'claves': ['Fases: requisitos → conceptual → lógico → físico → implementación → pruebas → mantenimiento',
             'Modelo E-R (Chen, 1976): entidades, atributos, relaciones',
             'Participación (mín,máx) y cardinalidad 1:1 · 1:N · N:M',
             'Entidades débiles: dependencia de identificación y de existencia',
             'E-R extendido: generalización/especialización, agregación, exclusión/inclusión',
             'Modelo relacional (Codd, 1970): tablas, tuplas, dominios',
             'Claves primaria, candidata, alternativa y foránea · integridad de entidad y referencial',
             'Grafo relacional: B:C B:R B:N B:D · M:C M:R M:N M:D',
             'Traducción E-R → relacional: 1:1, 1:N, N:M, débiles, especialización',
             'Normalización: 1FN, 2FN, 3FN, BCNF, 4FN, 5FN',
             "Notaciones: Chen, Crow's Foot, UML"],
  'tags': ['xbd', 'ud2', 'modelo entidad-relación', 'diseño conceptual', 'diseño lógico', 'modelo relacional', 'normalización', 'claves', 'cardinalidad'],
  'contenido': """
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
<p class="muted">Material didáctico · ASIR · IES Aller Ulloa (Lalín) · Autoría: Javier Feijóo López · CC BY-NC-SA 4.0</p>"""
},

# ---------- 1 ----------
'xbd-ud2-1': {
  'resumen': 'Por qué diseñar antes de implementar: una BD robusta, flexible y escalable empieza por un buen diseño conceptual.',
  'claves': ['El diseño de BD es un pilar del desarrollo de aplicaciones', 'Diseño conceptual = primera fase, independiente del SGBD'],
  'tags': ['diseño conceptual', 'introducción', 'diseño de bases de datos']},
'xbd-ud2-1-1': {
  'resumen': 'Siete fases: 0 análisis de requisitos, 1 diseño conceptual (E-R), 2 diseño lógico (tablas), 3 diseño físico, 4 implementación (SQL), 5 pruebas, 6 mantenimiento.',
  'claves': ['0. Requisitos → documento de requisitos', '1. Conceptual → diagrama E-R', '2. Lógico → tablas, PK y FK, normalización', '3. Físico → tipos de datos, índices', '4. Implementación → SQL (tablas, restricciones, triggers, vistas)', '5. Pruebas → CRUD e integridad', '6. Mantenimiento → índices, backups, cambios'],
  'tags': ['fases', 'ciclo de vida', 'análisis de requisitos', 'diseño físico', 'implementación', 'pruebas', 'mantenimiento']},
'xbd-ud2-1-2': {
  'resumen': 'El diseño conceptual organiza la información de forma abstracta: independiente de la tecnología, enfocado en el negocio y con representación gráfica (E-R).',
  'claves': ['Identificar entidades, atributos y relaciones', 'Independiente del SGBD', 'Enfocado en el negocio', 'Representación gráfica con diagramas E-R'],
  'tags': ['diseño conceptual', 'abstracción', 'independencia tecnológica']},
'xbd-ud2-1-3': {
  'resumen': 'El modelo E-R es la herramienta clave del diseño conceptual: claridad, comunicación efectiva y reducción de errores. Elementos: entidades, atributos y relaciones.',
  'claves': ['Ventajas: claridad, comunicación, menos errores', 'Entidades = objetos del mundo real', 'Atributos = características', 'Relaciones = asociaciones entre entidades'],
  'tags': ['modelo E-R', 'ventajas', 'entidad', 'atributo', 'relación']},
'xbd-ud2-ej1': {
  'titulo': 'Ejercicio 1 · Entidades de una app cotidiana',
  'resumen': 'Piensa en una app que uses (mensajería, pedidos…): ¿qué entidades, atributos y relaciones tendría su base de datos?',
  'claves': ['Identificar sustantivos → entidades', 'Propiedades → atributos', 'Verbos → relaciones'],
  'tags': ['ejercicio', 'reflexión', 'entidades', 'atributos', 'relaciones']},

# ---------- 2 ----------
'xbd-ud2-2': {
  'resumen': 'El modelo E-R representa visualmente entidades, atributos y relaciones, independiente del SGBD; es la base para el diseño lógico y físico.',
  'claves': ['Representación visual de la organización de los datos', 'Independiente del SGBD', 'Base de la transformación al diseño lógico'],
  'tags': ['modelo entidad-relación', 'E-R', 'diagrama E-R', 'Chen']},
'xbd-ud2-2-1': {
  'resumen': 'Propuesto por Peter Chen en 1976 para representar datos e interrelaciones de forma clara; sigue siendo crucial en aplicaciones multinivel.',
  'claves': ['Peter Chen, 1976', 'Objetivo: diseño intuitivo y comunicación desarrollador–usuario', 'Evita inconsistencias y redundancias desde el inicio'],
  'tags': ['Peter Chen', '1976', 'historia', 'origen']},
'xbd-ud2-2-2': {
  'resumen': 'Los diagramas E-R son la representación gráfica del modelo conceptual: visión global, detección temprana de errores y comunicación con el equipo y el cliente.',
  'claves': ['Primer paso hacia el diseño lógico y físico', 'Detectan errores antes de implementar', 'Herramienta de comunicación'],
  'tags': ['diagrama E-R', 'representación gráfica', 'comunicación']},
'xbd-ud2-2-3': {
  'resumen': 'Entidad: objeto o concepto del que guardamos información. Fuertes (clave propia, rectángulo) frente a débiles (dependen de otra, doble rectángulo).',
  'claves': ['Entidad fuerte: existencia independiente, clave primaria propia', 'Entidad débil: necesita la clave de la fuerte', 'Rectángulo simple vs doble rectángulo', 'Nombre en mayúsculas'],
  'tags': ['entidad', 'entidad fuerte', 'entidad débil', 'rectángulo']},
'xbd-ud2-2-4': {
  'resumen': 'Atributos: simples/compuestos, multivaluados, derivados, opcionales; y claves primaria, candidata y alternativa. Notación Chen (óvalos) y Piattini (círculos).',
  'claves': ['Simple: no se descompone · Compuesto: dirección → calle, ciudad, CP', 'Multivaluado: doble borde (teléfonos)', 'Derivado: óvalo punteado (edad)', 'Opcional: enlace punteado', 'Clave primaria: única y no nula · candidata · alternativa', 'Piattini: círculo relleno = identificador principal'],
  'tags': ['atributo', 'atributo compuesto', 'multivaluado', 'derivado', 'opcional', 'clave primaria', 'clave candidata', 'clave alternativa', 'notación Chen', 'notación Piattini']},
'xbd-ud2-2-5': {
  'resumen': 'Relación: asociación entre entidades (rombo). Rol de cada entidad, participación (mín,máx) y cardinalidad 1:1, 1:N, N:M a partir de las participaciones máximas.',
  'claves': ['Rombo con el nombre de la relación', 'Rol: función de una entidad (clave en relaciones recursivas)', 'Participación (mín,máx): se escribe en el lado opuesto a la entidad fijada', 'Cardinalidad = participaciones máximas: 1:1 · 1:N · N:M', 'En el SGBD se implementan con claves foráneas'],
  'tags': ['relación', 'interrelación', 'rombo', 'rol', 'participación', 'cardinalidad', '1:1', '1:N', 'N:M']},

# ---------- 3 ----------
'xbd-ud2-3': {
  'resumen': 'Entidad débil: no se identifica solo con sus atributos; tiene clave parcial que se combina con la clave de la entidad fuerte. Ejemplo: Reserva de hotel.',
  'claves': ['Dependencia de otra entidad', 'Identificación dependiente', 'Clave parcial + clave de la fuerte = clave completa', 'Ejemplo: Cliente (fuerte) – Reserva (débil)'],
  'tags': ['entidad débil', 'entidad fuerte', 'clave parcial', 'reserva']},
'xbd-ud2-3-1': {
  'resumen': 'Dependencia de identificación (la débil necesita la clave de la fuerte para identificarse) y de existencia (si se borra la fuerte, se borran las débiles).',
  'claves': ['Identificación: ID_Cliente + Fecha_Reserva', 'Existencia: borrar Factura → borrar Líneas de factura', 'Ejemplos: Factura/Detalle, Reserva/Habitación asignada'],
  'tags': ['dependencia de identificación', 'dependencia de existencia', 'factura', 'línea de factura']},

# ---------- 4 ----------
'xbd-ud2-4': {
  'resumen': 'El E-R extendido (ERE) añade jerarquías (generalización/especialización, supertipos y subtipos), exclusión/inclusión y agregación.',
  'claves': ['Generalización ↔ especialización', 'Supertipo (superclase) y subtipos (subclases) que heredan atributos', 'Disyunción (exclusión) vs conjunción (inclusión)', 'Agregación: una relación tratada como entidad'],
  'tags': ['E-R extendido', 'ERE', 'jerarquía', 'supertipo', 'subtipo', 'herencia']},
'xbd-ud2-4-1': {
  'resumen': 'Generalización agrupa entidades con atributos comunes en un supertipo; especialización divide un supertipo en subtipos. Se clasifican en total/parcial y exclusiva/solapada.',
  'claves': ['Generalización: Empleado Administrativo + Empleado Producción → Empleado', 'Especialización: Empleado → Administrativo (departamento), Producción (turno)', 'Triángulo "ES UN"', 'Total vs parcial: ¿hay ejemplares del supertipo fuera de los subtipos?', 'Exclusiva vs solapada: ¿un ejemplar puede estar en varios subtipos?', 'Dos criterios independientes → 4 combinaciones'],
  'tags': ['generalización', 'especialización', 'ES UN', 'total', 'parcial', 'exclusiva', 'solapamiento', 'jerarquía']},
'xbd-ud2-4-2': {
  'resumen': 'Agregación: tratar una relación entre entidades como una entidad abstracta que participa en otras relaciones. Ejemplo: ENTREVISTA (Empresa–Demandante) genera Oferta de empleo.',
  'claves': ['Relación → entidad de nivel superior', 'Útil para relaciones sobre relaciones', 'Ejemplo ETT: entrevista → oferta de empleo'],
  'tags': ['agregación', 'entrevista', 'ETT', 'relación compleja']},
'xbd-ud2-4-3': {
  'resumen': 'Agregación por composición: compuesto-componente (Coche = Rueda + Motor + Chasis) y miembro-colección (Bosque es colección de Árbol).',
  'claves': ['Compuesto-componente: unión de subtipos', 'Miembro-colección: colección de un mismo subtipo'],
  'tags': ['agregación por composición', 'compuesto-componente', 'miembro-colección']},
'xbd-ud2-4-4': {
  'resumen': 'Interrelaciones reflexivas y las cuatro restricciones entre relaciones: exclusividad, inclusividad, exclusión e inclusión.',
  'claves': ['Reflexiva (unaria): la entidad se relaciona consigo misma con dos roles', 'Exclusividad: E1 con E2 o con E3, no ambas (arco)', 'Inclusividad: para R2 debe darse antes R1 (flecha)', 'Exclusión: E1–E2 por R1 o por R2, no ambas (línea discontinua)', 'Inclusión: R2 exige R1 previa (flecha entre rombos)'],
  'tags': ['reflexiva', 'recursiva', 'exclusividad', 'inclusividad', 'exclusión', 'inclusión', 'restricciones']},

# ---------- 5, 6 ----------
'xbd-ud2-5': {
  'resumen': 'Heurísticas para pasar del enunciado al E-R: sustantivos → entidades, verbos → relaciones, nombres propios → ejemplares; vigilar redundancias en atributos e interrelaciones.',
  'claves': ['Sustantivos con atributos → entidades', 'Verbos → interrelaciones', 'Nombres propios → ejemplares', 'Redundancia en atributos = atributo derivado', 'Redundancia en interrelaciones: ELABORA sobra si PROFESOR–DEPARTAMENTO y PROFESOR–CURSO ya la implican'],
  'tags': ['enunciado', 'análisis', 'sustantivos', 'verbos', 'redundancia', 'método']},
'xbd-ud2-6': {
  'resumen': 'Herramientas para diagramas E-R: MySQL Workbench, Lucidchart, Visio; en el curso se usan DIA y draw.io/diagrams.net.',
  'claves': ['MySQL Workbench (sucesor de DBDesigner)', 'Lucidchart, Microsoft Visio', 'DIA (libre) y draw.io como alternativa web'],
  'tags': ['herramientas', 'DIA', 'draw.io', 'diagrams.net', 'MySQL Workbench', 'Lucidchart', 'Visio']},

# ---------- 7 ----------
'xbd-ud2-7': {
  'resumen': 'El diseño lógico transforma el E-R en un esquema relacional (tablas, columnas, claves) según el modelo de Codd (1970).',
  'claves': ['Codd, 1970: álgebra y cálculo relacional', 'Diseño lógico = fase intermedia entre conceptual y físico'],
  'tags': ['diseño lógico', 'modelo relacional', 'Codd']},
'xbd-ud2-7-1': {
  'resumen': 'Origen (Codd, 1970) y objetivos del modelo relacional: simplicidad, independencia de los datos, consistencia y eliminación de redundancia.',
  'claves': ['Simplicidad: tablas fáciles de entender', 'Independencia de los datos', 'Consistencia mediante normalización e integridad'],
  'tags': ['Codd', '1970', 'objetivos', 'independencia de datos']},
'xbd-ud2-7-2': {
  'resumen': 'E-R (conceptual, abstracto, diagramas) frente a relacional (lógico, tablas y claves): cada entidad → tabla, cada relación → claves foráneas o tabla intermedia.',
  'claves': ['E-R: fase conceptual, visual', 'Relacional: tablas, columnas y claves', 'La transformación preserva la estructura del conceptual'],
  'tags': ['comparativa', 'E-R vs relacional', 'transformación']},
'xbd-ud2-7-3': {
  'resumen': 'Ventajas: uniformidad estructural, independencia física y lógica, integridad y consistencia, consultas complejas (álgebra relacional/SQL) y rigor teórico.',
  'claves': ['Uniformidad estructural', 'Independencia física y lógica', 'Normalización e integridad', 'Consultas con álgebra relacional y SQL', 'Base matemática'],
  'tags': ['ventajas', 'independencia física', 'independencia lógica', 'álgebra relacional', 'SQL']},

# ---------- 8 ----------
'xbd-ud2-8': {
  'resumen': 'Elementos del modelo relacional: relaciones (tablas) con atributos (columnas), dominios y tuplas (filas).',
  'claves': ['Relación = tabla', 'Atributo = columna con dominio', 'Tupla = fila única'],
  'tags': ['modelo relacional', 'relación', 'tabla', 'tupla', 'dominio']},
'xbd-ud2-8-1': {
  'resumen': 'Una relación se representa como tabla: filas (tuplas) son instancias, columnas (atributos) características. Ejemplo: Clientes(ID_Cliente, Nombre, Apellido, Email).',
  'claves': ['Filas = tuplas = registros', 'Columnas = atributos'],
  'tags': ['relación', 'tabla', 'filas', 'columnas']},
'xbd-ud2-8-2': {
  'resumen': 'Atributos atómicos con tipo de dato claro; el dominio define tipo y rango permitido (INT, VARCHAR(50)…).',
  'claves': ['Atributo atómico', 'Dominio = tipo + rango de valores', 'Ejemplo: ID_Cliente INT, Email VARCHAR(50)'],
  'tags': ['atributo', 'dominio', 'tipo de dato', 'atómico']},
'xbd-ud2-8-3': {
  'resumen': 'Tupla: cada fila, única, cumpliendo la integridad. Estructura bidimensional: cada dato tiene una posición exacta (fila × columna).',
  'claves': ['Tupla única', 'Ejemplo: (1, Ana, García, ana@mail.com)', 'Intersección fila–columna'],
  'tags': ['tupla', 'fila', 'estructura bidimensional']},

# ---------- 9 ----------
'xbd-ud2-9': {
  'resumen': 'Claves (primaria, candidata, alternativa, foránea), valores nulos y reglas de integridad de entidad y referencial.',
  'claves': ['Las claves identifican y relacionan registros', 'La integridad garantiza coherencia'],
  'tags': ['claves', 'integridad', 'diseño lógico']},
'xbd-ud2-9-1': {
  'resumen': 'Primaria (única, no nula), candidata (podría ser primaria), alternativa (candidata no elegida) y foránea (referencia a la primaria de otra tabla).',
  'claves': ['Primaria: ID_Cliente', 'Candidatas: Número_Bastidor y Matrícula', 'Alternativa: Matrícula si se elige Bastidor', 'Foránea: Pedidos.ID_Cliente → Clientes.ID_Cliente'],
  'tags': ['clave primaria', 'clave candidata', 'clave alternativa', 'clave foránea', 'primary key', 'foreign key']},
'xbd-ud2-9-2': {
  'resumen': 'NULL = valor desconocido o no aplicable (≠ 0 ≠ cadena vacía). La PK nunca admite nulos; una FK sí si la relación es opcional.',
  'claves': ['NULL no es cero ni vacío', 'PK NOT NULL', 'FK opcional puede ser NULL (ID_Jefe)'],
  'tags': ['NULL', 'valores nulos', 'opcional']},
'xbd-ud2-9-3': {
  'resumen': 'Integridad de entidad (PK única y no nula) e integridad referencial (toda FK apunta a una PK existente). Opciones: cascada, restringir.',
  'claves': ['Entidad: PK sin nulos ni duplicados', 'Referencial: sin referencias huérfanas', 'Eliminar/actualizar en cascada', 'Restringir o denegar'],
  'tags': ['integridad de entidad', 'integridad referencial', 'cascada', 'restringir', 'huérfanas']},

# ---------- 10 ----------
'xbd-ud2-10': {
  'resumen': 'Grafo relacional: tablas en mayúsculas con atributos entre paréntesis; PK subrayada, alternativas en negrita, FK en cursiva con flecha; opciones B:C/R/N/D y M:C/R/N/D.',
  'claves': ['TABLA(atributos)', 'PK subrayada · alternativa negrita · FK cursiva + flecha · nulos con *', 'B:C cascada · B:R restringido · B:N nulos · B:D defecto', 'M:C · M:R · M:N · M:D'],
  'tags': ['grafo relacional', 'notación', 'B:C', 'B:R', 'M:C', 'borrado en cascada', 'modificación']},

# ---------- 11 ----------
'xbd-ud2-11': {
  'resumen': 'Reglas para pasar del E-R al relacional: entidades → tablas, atributos → columnas, relaciones según cardinalidad, débiles y especializaciones.',
  'claves': ['Entidad → tabla', 'Relación → FK o tabla intermedia', 'Se preservan las restricciones'],
  'tags': ['transformación', 'paso a tablas', 'E-R a relacional']},
'xbd-ud2-11-1': {
  'resumen': 'Cada entidad → tabla con sus atributos como columnas y la misma PK. Compuestos se descomponen; multivaluados → tabla aparte (TELEFONO(DNI, teléfono)).',
  'claves': ['CLIENTE(DNI, nombre, apellidos, calle, código_postal, ciudad)', 'Multivaluado → TELEFONO(DNI, teléfono)'],
  'tags': ['entidad a tabla', 'atributo compuesto', 'atributo multivaluado']},
'xbd-ud2-11-2': {
  'resumen': '1:1 → FK en una tabla (o fusionar); 1:N → FK en el lado N (NOT NULL si obligatoria); N:M → tabla intermedia con ambas FK.',
  'claves': ['1:1: FK en cualquiera o una sola tabla', '1:N: FK en el lado muchos', 'Obligatoria → NOT NULL · opcional → NULL', 'N:M: tabla Estudiante_Curso(ID_Estudiante, ID_Curso)'],
  'tags': ['1:1', '1:N', 'N:M', 'tabla intermedia', 'participación obligatoria', 'participación opcional']},
'xbd-ud2-11-3': {
  'resumen': 'Entidad débil → tabla con PK compuesta (clave de la fuerte + clave parcial). Relación con atributos propios → tabla intermedia con esos atributos.',
  'claves': ['Habitación: PK (ID_Hotel, Número_Habitación)', 'Empleado_Proyecto(ID_Empleado, ID_Proyecto, Fecha_Asignación)'],
  'tags': ['entidad débil', 'clave compuesta', 'atributos de la relación']},
'xbd-ud2-11-4': {
  'resumen': 'Las cuatro combinaciones de especialización traducidas a tablas con ejemplos de datos: total/parcial × exclusiva/solapada.',
  'claves': ['Total + exclusiva: tabla por subtipo, o supertipo con campo Tipo + subtablas', 'Parcial + exclusiva: supertipo + subtablas (Vehículo)', 'Total + solapada: supertipo + subtablas, un registro en varias (Material)', 'Parcial + solapada: Persona / Estudiante / Profesor'],
  'tags': ['especialización', 'herencia total', 'herencia parcial', 'exclusión', 'solapamiento', 'subtablas']},

# ---------- 12 ----------
'xbd-ud2-12': {
  'resumen': 'Normalización: organizar las tablas para minimizar redundancias aplicando formas normales sucesivas. Base: la dependencia funcional (A → B).',
  'claves': ['Dependencia funcional: cada valor de A determina un único B', 'Formas normales: 1FN, 2FN, 3FN, BCNF, 4FN, 5FN'],
  'tags': ['normalización', 'dependencia funcional', 'formas normales']},
'xbd-ud2-12-1': {
  'resumen': '1FN: valores atómicos (sin listas) y un solo tipo por columna. Se descomponen las celdas con varios valores en filas.',
  'claves': ['Sin listas ni conjuntos en una celda', 'Pedidos.productos "P1, P2" → dos filas'],
  'tags': ['1FN', 'primera forma normal', 'atómico']},
'xbd-ud2-12-2': {
  'resumen': '2FN: 1FN + sin dependencias parciales (todo atributo no clave depende de la clave completa). Se separan tablas.',
  'claves': ['Solo aplica con PK compuesta', 'nombre_Cliente depende solo de ID_Pedido → Pedidos + Pedido_Detalle'],
  'tags': ['2FN', 'segunda forma normal', 'dependencia parcial']},
'xbd-ud2-12-3': {
  'resumen': '3FN: 2FN + sin dependencias transitivas (ningún atributo no clave depende de otro no clave).',
  'claves': ['ID_Departamento → Nombre_Departamento → Nombre_Jefe es transitiva', 'Empleados + Departamentos'],
  'tags': ['3FN', 'tercera forma normal', 'dependencia transitiva']},
'xbd-ud2-12-4': {
  'resumen': 'BCNF: 3FN + todo determinante es clave candidata. Ejemplo Profesor–Curso–Aula dividido en Profesores_Curso y Curso_Aula.',
  'claves': ['El determinante debe ser clave candidata', 'Curso → Aula pero Curso no es clave'],
  'tags': ['BCNF', 'Boyce-Codd', 'determinante']},
'xbd-ud2-12-5': {
  'resumen': '4FN: BCNF + sin dependencias multivaluadas independientes (alumno–cursos y alumno–actividades en tablas distintas).',
  'claves': ['Dependencia multivaluada: varios valores independientes entre sí', 'Alumnos_Cursos + Alumnos_Actividades'],
  'tags': ['4FN', 'cuarta forma normal', 'dependencia multivaluada']},
'xbd-ud2-12-6': {
  'resumen': '5FN (proyección-join): 4FN + sin dependencias de join; la tabla se reconstruye sin pérdida a partir de proyecciones.',
  'claves': ['Alumno–Curso–Profesor → tres tablas de pares', 'Sin dependencias de join'],
  'tags': ['5FN', 'quinta forma normal', 'dependencia de join', 'proyección']},
'xbd-ud2-12-ej': {
  'titulo': 'Ejemplo completo de normalización hasta BCNF',
  'resumen': 'Tabla de pedidos no normalizada → 1FN → 2FN (Pedidos, Clientes, Detalle_Pedidos) → 3FN → BCNF, paso a paso.',
  'claves': ['Problemas: valores repetidos, grupos repetidos, datos no atómicos', '2FN: dividir en Pedidos, Clientes y Detalle_Pedidos', '3FN y BCNF ya se cumplen tras la división'],
  'tags': ['ejemplo', 'normalización', 'pedidos', 'clientes', 'BCNF']},

# ---------- 13 ----------
'xbd-ud2-13': {
  'resumen': "Notaciones profesionales para el esquema final: Crow's Foot (pata de cuervo, la más usada en herramientas) y UML (diagramas de clases).",
  'claves': ["Chen: didáctica, no la usan las herramientas", "Crow's Foot: compacta, cardinalidades claras (1, N, 1..N)", 'UML: clases con relaciones, usado en desarrollo OO'],
  'tags': ["Crow's Foot", 'pata de cuervo', 'UML', 'notación', 'Chen']},

# ---------- glosario / recursos ----------
'xbd-ud2-glosario': {
  'titulo': 'Glosario UD2',
  'resumen': 'Definiciones breves: entidad, atributo, clave primaria y foránea, cardinalidad, generalización, especialización, entidad débil, dependencia funcional, normalización, integridad referencial, grafo relacional, álgebra relacional.',
  'claves': ['Entidad, atributo, relación', 'Clave primaria y foránea', 'Cardinalidad', 'Entidad débil y fuerte', 'Dependencia funcional', 'Normalización', 'Integridad referencial', 'Grafo relacional', 'Álgebra relacional'],
  'tags': ['glosario', 'definiciones', 'vocabulario']},
'xbd-ud2-recursos': {
  'titulo': 'Bibliografía y recursos UD2',
  'resumen': 'Libros (Mora Rioja, Marqués, Camps Paré), apuntes ISPC, artículos y documentales sobre bases de datos y big data.',
  'claves': ['Bases de datos: Diseño y Gestión (Síntesis)', 'Bases de Datos, Mercedes Marqués (CC)', 'Introducción a las Bases de Datos, UOC (CC)'],
  'tags': ['bibliografía', 'recursos', 'libros', 'documentales']},
}
