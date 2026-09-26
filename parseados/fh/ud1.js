/* ============================================================
 * FH · Fundamentos de Hardware · Unidade 1
 * Arquitectura de ordenadores
 * ------------------------------------------------------------
 * Fonte: apuntes/fh/ud1-arquitectura-de-ordenadores.pdf (texto OCR en apuntes/fh/ocr/ud1.txt)
 * Imaxes: apuntes/fh/img/ud1/
 * Os apuntamentos orixinais están en galego; mantense o idioma.
 * ============================================================ */
window.APUNTES = window.APUNTES || { materias: {}, unidades: [] };

window.APUNTES.materias.fh = window.APUNTES.materias.fh || {
  id: 'fh',
  nombre: 'Fundamentos de Hardware',
  abrev: 'FH',
  codigo: 'MP0371',
  color: '#8a4b2b',
  descripcion: 'Arquitectura de ordenadores, representación da información e compoñentes internos dun sistema informático.',
  sugerencias: ['von Neumann', 'CISC', 'RISC', 'SoC', 'xeracións', 'neuromórfica', 'binario', 'placa base']
};

window.APUNTES.unidades.push({
  materia: 'fh',
  id: 'fh-ud1',
  codigo: 'UD1',
  titulo: 'Arquitectura de ordenadores',
  fuente: 'apuntes/fh/ud1-arquitectura-de-ordenadores.pdf',
  nodos: [

  /* ---------------- HUB ---------------- */
  {
    id: 'fh-ud1',
    tipo: 'unidad',
    titulo: 'UD1 · Arquitectura de ordenadores',
    resumen: 'Historia e xeracións da informática, CISC fronte a RISC, sistemas informáticos, arquitectura de von Neumann, SoC, novas arquitecturas (óptica, neuromórfica, cuántica) e a IA nos procesadores.',
    claves: ['Informática = información + automática', 'MARK 1 (1944) · ENIAC (1945) · UNIVAC I (1951)', 'Cinco xeracións: válvulas → transistores → circuíto integrado → microprocesador → IA/redes', 'CISC (x86) vs RISC (ARM)', 'Sistema informático = hardware + software', 'Von Neumann (1946): UC, ALU, memoria, E/S + buses', 'SoC: todo nun chip · vantaxes e desvantaxes', 'Novas arquitecturas: óptica, neuromórfica, biomolecular, cuántica', 'IA nos procesadores: machine learning, deep learning, redes neuronais, NPU'],
    tags: ['fh', 'ud1', 'arquitectura', 'historia', 'von neumann', 'cisc', 'risc', 'soc', 'neuromórfica', 'intelixencia artificial'],
    contenido: `
<p>Primeira unidade do módulo <strong>Fundamentos de Hardware</strong>. Percorre a evolución da informática dende as primeiras máquinas ata as arquitecturas actuais e as tendencias de futuro.</p>
<h4>Sumario</h4>
<ol>
  <li>Introdución: que é a informática e que é un ordenador</li>
  <li>Historia da informática</li>
  <li>Xeracións de ordenadores (1.ª a 5.ª)</li>
  <li>Choque de arquitecturas: CISC fronte a RISC</li>
  <li>Sistemas informáticos: programa, aplicación, software, hardware</li>
  <li>Bloques funcionais dun sistema microinformático (arquitectura de von Neumann)</li>
  <li>SoC: System on a Chip</li>
  <li>Novas arquitecturas dos microprocesadores</li>
  <li>A Intelixencia Artificial nos procesadores</li>
</ol>
<h4>Obxectivos</h4>
<ul>
  <li>Coñecer os pasos que se deron na evolución da informática ata chegar ó momento actual.</li>
  <li>Introducir a informática dende o punto de vista dos equipos e sistemas informáticos.</li>
  <li>Coñecer a arquitectura de Von Neumann, os seus elementos funcionais e os seus subsistemas.</li>
  <li>Explicar o funcionamento interno dun ordenador e coñecer como se almacena e usa a información.</li>
  <li>Coñecer as arquitecturas actuais noutro tipo de dispositivos e entender que son os SoC.</li>
  <li>Identificar as novas arquitecturas que se están a implantar nos procesadores.</li>
  <li>Valorar e debater sobre a importancia dos sistemas informáticos na actualidade.</li>
</ul>
<div class="box info"><div class="box-title">Nota</div><p>Os apuntamentos orixinais son un PDF en galego con texto rasterizado; o contido extraeuse por OCR e revisouse. As figuras do PDF inclúense nos apartados correspondentes.</p></div>`
  },

  /* ---------------- 1 ---------------- */
  {
    id: 'fh-ud1-1',
    tipo: 'tema',
    titulo: '1. Introdución',
    resumen: 'Informática = información + automática: ciencia do tratamento racional e automático da información. O ordenador é a máquina electrónica que realiza operacións sobre a información a gran velocidade e precisión.',
    claves: ['Informática: ciencia que estuda o tratamento racional e automático da información', 'Ordenador: máquina de elementos físicos (electrónicos) que opera sobre a información con velocidade e precisión', 'Operacións: lectura, almacenamento, cálculo, comparación, escritura'],
    tags: ['informática', 'ordenador', 'definición', 'información', 'automática'],
    contenido: `
<p>O termo <strong>informática</strong> procede da conxunción de dúas verbas, <em>información</em> e <em>automática</em>. A informática permítenos xestionar a información en forma de datos e instrucións, controlar sistemas de maquinaria, crear e modificar enormes bases de datos, realizar os efectos especiais dunha película, realizar tarefas rutineiras como a confección de documentos, levar a contabilidade dunha empresa...</p>
<div class="box def"><div class="box-title">Informática</div><p>Ciencia que estuda o <strong>tratamento racional e automático da información</strong> ademais da tecnoloxía para mantela conservada e utilizala de maneira eficiente e económica.</p></div>
<p>A principal ferramenta que actualmente nos permite o tratamento automático da información é o <strong>ordenador</strong>.</p>
<div class="box def"><div class="box-title">Ordenador</div><p>Máquina composta de elementos físicos, na súa maioría de orixe electrónica, capaz de realizar diferentes operacións sobre a información a gran velocidade e con gran precisión.</p></div>
<p>Algunhas desas operacións poderían ser lectura, almacenamento, cálculos, comparacións, escritura...</p>`
  },

  /* ---------------- 2 ---------------- */
  {
    id: 'fh-ud1-2',
    tipo: 'tema',
    titulo: '2. Historia da informática',
    resumen: 'MARK 1 (Harvard/IBM, 1944, electromecánica) → ENIAC (1945, primeiro ordenador electrónico, 18 000 válvulas, 160 kW) → UNIVAC I (1951, primeiro ordenador á venda).',
    claves: ['1937–1944: Harvard + IBM constrúen a MARK 1 (calculadora automática de secuencia controlada)', '1945: ENIAC, primeiro ordenador electrónico (18 000 válvulas, 160 kW, 1000× máis rápido que MARK 1)', 'Motivación militar: táboas de traxectoria de proxectís', '1951: UNIVAC I, primeira computadora posta á venda'],
    tags: ['historia', 'MARK 1', 'ENIAC', 'UNIVAC', 'IBM', 'Harvard', '1944', '1945', '1951'],
    contenido: `
<p>En 1937 na universidade de Harvard un equipo de enxeñeiros de IBM comezan a desenvolver un proxecto que en <strong>1944</strong> culmina na primeira computadora electromecánica, denominada <em>calculadora automática de secuencia controlada</em>, aínda que coñecida popularmente como <strong>MARK 1</strong>.</p>
<figure><img src="apuntes/fh/img/ud1/mark1.png" alt="Harvard MARK I" loading="lazy"><figcaption><strong>Harvard MARK I.</strong> Medía 16,6 m de longo e 2,6 m de alto, pesaba 70 toneladas e estaba constituída por 800 000 pezas móbiles. Precisaba de 800 000 metros de cable para sumar dous números en menos dun segundo e multiplicalos en menos de tres. Podía traballar con operandos de ata 23 cifras.</figcaption></figure>
<p>As esixencias militares, concretamente a necesidade de elaborar táboas para o cálculo de traxectoria de proxectís, induciron ós científicos estadounidenses a construír o que é considerado o <strong>primeiro ordenador electrónico</strong>, o <strong>ENIAC</strong> (Electronic Numerical Integrator And Calculator), que entrou en funcionamento en <strong>1945</strong>, e estaba composto por 18 000 válvulas cun consumo de 160 kW. Era mil veces máis rápido que a MARK 1.</p>
<p>En <strong>1951</strong> constrúese a primeira computadora posta á venda, a <strong>UNIVAC I</strong>; a partir de aí disparouse o desenvolvemento de novas máquinas e a súa produción en serie.</p>
<table>
<tr><th>Ano</th><th>Máquina</th><th>Fito</th></tr>
<tr><td>1944</td><td>MARK 1</td><td>Primeira computadora electromecánica (Harvard / IBM)</td></tr>
<tr><td>1945</td><td>ENIAC</td><td>Primeiro ordenador electrónico (18 000 válvulas)</td></tr>
<tr><td>1951</td><td>UNIVAC I</td><td>Primeira computadora comercial</td></tr>
</table>`
  },

  /* ---------------- 3 ---------------- */
  {
    id: 'fh-ud1-3',
    tipo: 'tema',
    titulo: '3. Xeracións de ordenadores',
    resumen: 'Cinco xeracións dende os anos 50: válvulas de baleiro → transistores → circuíto integrado → microprocesador → intelixencia artificial, redes e multimedia.',
    claves: ['1.ª (1940-1955): válvulas, linguaxe máquina, tarxetas perforadas', '2.ª (1955-1964): transistores, memoria de ferrita, soportes magnéticos, ensamblador, COBOL/FORTRAN', '3.ª (1964-1971): circuíto integrado, sistemas operativos, discos magnéticos', '4.ª (1971-1981): microprocesador, PC, disquetes, redes', '5.ª (1981-hoxe): IA, linguaxes naturais, multimedia, Internet'],
    tags: ['xeracións', 'válvulas', 'transistores', 'circuíto integrado', 'microprocesador', 'evolución'],
    links: ['fh-ud1-3-1', 'fh-ud1-3-2', 'fh-ud1-3-3', 'fh-ud1-3-4', 'fh-ud1-3-5'],
    contenido: `
<p>Dende que na primeira parte da década dos cincuenta comezaron a utilizarse os ordenadores con fins comerciais, estes evolucionaron de tal xeito que cabe destacar <strong>cinco xeracións</strong>:</p>
<table>
<tr><th>Xeración</th><th>Período</th><th>Tecnoloxía clave</th><th>Software / soportes</th></tr>
<tr><td>Primeira</td><td>1940-1955</td><td>Válvulas electrónicas de baleiro</td><td>Linguaxe máquina · tarxetas e cinta perforada</td></tr>
<tr><td>Segunda</td><td>1955-1964</td><td>Transistores</td><td>Ensamblador, COBOL, FORTRAN, ALGOL · memoria de ferrita · cinta e tambores magnéticos</td></tr>
<tr><td>Terceira</td><td>1964-1971</td><td>Circuíto integrado</td><td>Sistemas operativos · memorias de semicondutores · discos magnéticos</td></tr>
<tr><td>Cuarta</td><td>1971-1981</td><td>Microprocesador</td><td>Microcomputadores e PC · disquetes · redes</td></tr>
<tr><td>Quinta</td><td>1981-actualidade</td><td>Intelixencia artificial, redes integradas</td><td>Linguaxes naturais · multimedia · Internet</td></tr>
</table>`
  },
  {
    id: 'fh-ud1-3-1',
    tipo: 'subtema',
    titulo: '3.1 Primeira xeración (1940-1955)',
    resumen: 'Válvulas electrónicas de baleiro: tamaño enorme, mantemento complicado, avaría cada media hora. Linguaxe máquina e tarxetas/cinta perforada.',
    claves: ['Válvulas electrónicas de baleiro', 'Tempo medio entre avarías: media hora', 'Cálculo en microsegundos → programas longos tardaban días', 'Linguaxe máquina', 'Tarxetas perforadas ou cinta perforada'],
    tags: ['primeira xeración', 'válvulas', 'linguaxe máquina', 'tarxetas perforadas'],
    contenido: `
<p>Os ordenadores electrónicos da primeira xeración foron deseñados con <strong>válvulas electrónicas de baleiro</strong>. O seu tamaño era enorme, o seu mantemento moi complicado e a fiabilidade escasa: o tempo medio entre dúas avarías era de <strong>media hora</strong>.</p>
<p>Os tempos de cálculo dos seus circuítos eran de varios microsegundos, polo que a execución de programas longos era de varios días. Utilizaban como linguaxe de programación a <strong>linguaxe máquina</strong>. Como único soporte para almacenar a información utilizaban as <strong>tarxetas perforadas</strong> ou a <strong>cinta perforada</strong>.</p>`
  },
  {
    id: 'fh-ud1-3-2',
    tipo: 'subtema',
    titulo: '3.2 Segunda xeración (1955-1964)',
    resumen: 'Transistores: menor tamaño, máis fiabilidade e capacidade, menos consumo. Memoria interna de ferrita, soportes magnéticos, ensamblador e primeiras linguaxes de alto nivel. Spacewar! (1962).',
    claves: ['Válvulas → transistores', 'Uso administrativo e universitario, non só científico-militar', 'Simultanear cálculo con E/S', 'Memoria interna de núcleos de ferrita · cinta e tambores magnéticos', 'Ensamblador · COBOL, FORTRAN, ALGOL', '1962: Spacewar!, primeiro xogo de ordenador (DEC PDP-1, MIT)'],
    tags: ['segunda xeración', 'transistores', 'ferrita', 'ensamblador', 'COBOL', 'FORTRAN', 'Spacewar'],
    contenido: `
<p>As válvulas son substituídas por <strong>transistores</strong>. Tal innovación reduciu considerablemente o tamaño dos ordenadores e aumentou a súa fiabilidade; en consecuencia viuse aumentada a súa capacidade de cálculo e reducido o seu consumo. O seu campo de utilización, ata agora científico e militar, ampliouse ó administrativo e universitario.</p>
<p>Ofrecen a posibilidade de simultanear o cálculo puro con operacións de entrada/saída. Aparece por primeira vez a <strong>memoria interna</strong> a base de núcleos de ferrita e como memoria externa os primeiros <strong>soportes magnéticos</strong> (a cinta magnética e os tambores magnéticos). Aparecen as <strong>linguaxes de programación</strong>, entre elas o <strong>ensamblador</strong>, e algúns de alto nivel (COBOL, FORTRAN, ALGOL...).</p>
<figure><img src="apuntes/fh/img/ud1/spacewar-pdp1.png" alt="Spacewar! no DEC PDP-1" loading="lazy"><figcaption><strong>Spacewar!</strong> Videoxogo de combate espacial desenvolvido en 1962 por Steve Russell en colaboración con Martin Graetz, Wayne Wiitanen, Bob Saunders, Steve Piner e outros. Foi programado para o recén creado minicomputador DEC PDP-1 do MIT.</figcaption></figure>
<p>En 1962 desenvolveuse o primeiro xogo de ordenador, o <em>Spacewar!</em>.</p>`
  },
  {
    id: 'fh-ud1-3-3',
    tipo: 'subtema',
    titulo: '3.3 Terceira xeración (1964-1971)',
    resumen: 'Circuíto integrado: miles de compoñentes nunha pastilla. De miles a millóns de instrucións por segundo. Aparecen os sistemas operativos, memorias de semicondutores e discos magnéticos.',
    claves: ['Circuíto integrado: encapsulamento de moitos compoñentes discretos nunha pastilla', 'De miles a millóns de instrucións por segundo', 'Miniaturización de tódolos circuítos', 'Sistemas operativos', 'Memorias de semicondutores e discos magnéticos'],
    tags: ['terceira xeración', 'circuíto integrado', 'sistemas operativos', 'discos magnéticos'],
    contenido: `
<p>O elemento máis significativo é o <strong>circuíto integrado</strong>, que consiste no encapsulamento dunha gran cantidade de compoñentes electrónicos discretos, conformando un ou varios circuítos cunha función determinada, sobre unha pastilla de plástico.</p>
<p>O tamaño dos ordenadores volveuse reducir unha vez máis, aumentando a súa potencia de cálculo e a súa fiabilidade. Pasouse así de ordenadores capaces de executar <strong>miles</strong> de instrucións por segundo a outros que podían executar <strong>millóns</strong> delas nese mesmo tempo. A miniaturización estendeuse a tódolos circuítos da computadora.</p>
<p>O software evolucionou de forma considerable, coa aparición de varios <strong>sistemas operativos</strong>. Comezaron a utilizarse as memorias de semicondutores e os <strong>discos magnéticos</strong>.</p>`
  },
  {
    id: 'fh-ud1-3-4',
    tipo: 'subtema',
    titulo: '3.4 Cuarta xeración (1971-1981)',
    resumen: 'Nace o microprocesador (1971): toda a CPU nunha pastilla. Microcomputadores e ordenadores persoais, disquetes e redes de transmisión de datos.',
    claves: ['1971: microprocesador — toda a CPU nunha pastilla', 'Moi alta integración, velocidade e fiabilidade', 'Microcomputadores e PC económicos', 'Disquetes (floppy disk)', 'Redes de transmisión de datos', 'Multitude de linguaxes'],
    tags: ['cuarta xeración', 'microprocesador', 'PC', 'disquete', 'redes'],
    contenido: `
<p>En <strong>1971</strong> produciuse unha nova revolución no mundo dos ordenadores, orixinada polo nacemento do <strong>microprocesador</strong>: tecnoloxía de moi alta integración e elevadísima velocidade e fiabilidade, introducindo toda a CPU nunha pastilla.</p>
<p>A tecnoloxía utilizada permitiu a fabricación de microcomputadores e <strong>ordenadores persoais</strong> de alta fiabilidade, velocidade e economía.</p>
<p>Comezan a utilizarse os <strong>disquetes</strong> ou <em>floppy-disk</em> como unidade de almacenamento externo. Aparecen unha multitude de linguaxes de todo tipo e as <strong>redes</strong> de transmisión de datos para conectar ordenadores.</p>`
  },
  {
    id: 'fh-ud1-3-5',
    tipo: 'subtema',
    titulo: '3.5 Quinta xeración (1981-actualidade)',
    resumen: 'Proxecto nado en Xapón: intelixencia artificial en hardware e software, linguaxes naturais, redes integradas, multimedia e Internet. Exemplo de deseño rompedor: o iMac.',
    claves: ['Proxecto xaponés de computadoras con IA', 'Linguaxes de quinta xeración (naturais): tradución automática', 'Redes de ordenadores e dispositivos (redes integradas)', 'Multimedia: datos + imaxes + voz', 'Internet, a rede de redes'],
    tags: ['quinta xeración', 'intelixencia artificial', 'multimedia', 'Internet', 'iMac', 'linguaxes naturais'],
    contenido: `
<p>É un proxecto nado en <strong>Xapón</strong> co obxectivo de desenvolver unha nova clase de computadoras que utilizarían técnicas e tecnoloxías de <strong>intelixencia artificial</strong> tanto no eido do hardware como do software.</p>
<p>Usando a linguaxe serían capaces de resolver problemas complexos, como a tradución automática dunha linguaxe natural a outra (galego a inglés, por exemplo), tentando empregar para o seu desenvolvemento diferentes tipos de arquitecturas e dando lugar á aparición das <strong>linguaxes naturais</strong> (linguaxes de quinta xeración).</p>
<p>Ó aumento constante de velocidade de proceso e á miniaturización dos seus compoñentes hai que engadir a proliferación das <strong>redes</strong> de ordenadores e dispositivos (redes integradas). Intégranse nun mesmo proxecto datos, imaxes e voz, aparecendo o concepto de <strong>multimedia</strong>. Xeneralízase o uso da rede de redes, <strong>Internet</strong>.</p>
<figure class="small"><img src="apuntes/fh/img/ud1/imac.png" alt="iMac G3" loading="lazy"><figcaption><strong>iMac.</strong> Rachou coa monotonía dos PC ofrecendo un deseño en forma de ovo, cunha carcasa transparente que deixaba ver os compoñentes e que se ofrecía en diferentes e divertidas cores, contrastando cos modelos compactos e beige que existían ata ese momento. Tiña unha asa na parte superior que permitía unha mellor mobilidade, e o teclado e rato conectábanse directamente.</figcaption></figure>`
  },
