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
}
