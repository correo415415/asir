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

  /* ---------------- 4 ---------------- */
  {
    id: 'fh-ud1-4',
    tipo: 'tema',
    titulo: '4. Choque de arquitecturas: CISC fronte a RISC',
    resumen: 'O xogo de instrucións decide o deseño do microprocesador. CISC (IBM, System/360, x86): instrucións complexas e completas. RISC (IBM 801, ARM): instrucións simples e rápidas, favorecen a segmentación e o paralelismo.',
    claves: ['O xogo de instrucións decide o deseño físico e o que pode facer o procesador', 'Tres categorías: operacións con memoria, aritméticas e de control da CPU', 'Ciclo básico: recibir instrución → descodificar → executar → esperar a seguinte', 'CISC: instrucións complexas e lentas que agrupan varias operacións; programas curtos; poucos accesos a memoria; x86 (Intel, AMD)', 'RISC: poucas instrucións moi simples; programas máis longos; segmentación e paralelismo; máis barato; ARM', 'Hoxe ambas adoptan melloras da outra: ARM = eficiencia enerxética, x86 = rendemento'],
    tags: ['CISC', 'RISC', 'xogo de instrucións', 'x86', 'ARM', 'Intel', 'AMD', 'IBM', 'System/360', 'IBM 801', 'microinstrucións'],
    contenido: `
<p>Unha das primeiras decisións á hora de deseñar un microprocesador é decidir cal será o seu <strong>xogo de instrucións</strong>. Hai dúas razóns:</p>
<ul>
  <li>O xogo de instrucións decide o deseño físico do conxunto.</li>
  <li>Calquera operación que se deba executar no microprocesador deberá poder ser descrita pola linguaxe desas instrucións.</li>
</ul>
<p>Existen múltiples tipos de instrucións, que se engloban dentro de tres grandes categorías: <strong>operacións con memoria</strong>, <strong>operacións aritméticas</strong> e <strong>operacións de control</strong> sobre a CPU. A complexidade do set de instrucións é variable e depende enormemente do que os seus deseñadores decidiran no momento da súa creación.</p>

<div class="box ex"><div class="box-title">Algoritmo para fritir un ovo</div>
<ol>
  <li>Pór unha tixola enriba do lume</li><li>Prender o lume</li><li>Pór aceite na tixola</li><li>Esperar a que o aceite estea quente</li><li>Cascar o ovo</li><li><strong>Verter o ovo na tixola</strong></li><li>Coa axuda dunha paleta, botar o aceite por riba do ovo</li><li>Comprobar que o ovo está fritido e, nese caso, sacalo a un prato</li>
</ol>
<p>O paso 6 é, dende a óptica dun procesador, unha instrución <em>complexa</em> que se podería dividir en varias máis sinxelas:</p>
<ul>
  <li>6.1 Colocar o ovo partido sobre a tixola</li><li>6.2 Achegar o ovo partido a un par de centímetros do aceite quente</li><li>6.3 Abrir o ovo partido</li><li>6.4 Verter o contido do ovo partido sobre o aceite</li><li>6.5 Esperar ata que o ovo estea baleiro</li><li>6.6 Retirar a casca da tixola</li><li>6.7 Tirar ó lixo a casca do ovo</li>
</ul>
<p>Estase a realizar a mesma labor con dous xogos de instrucións diferentes: a primeira instrución (paso 6) é máis complexa; as novas (6.x) son máis simples pero moitas máis en cantidade. Empregar unha ou outras dependerá do set de instrucións que admite o procesador.</p></div>

<h4>Orixe</h4>
<p>A mediados do século XX, <strong>IBM</strong> reuniu un grupo de investigadores para estudar de que forma un programa traballase en múltiples computadoras sen cambios importantes, ampliando a compatibilidade do software en diferentes máquinas. O resultado foi a tecnoloxía <strong>CISC</strong> (<em>Complex Instruction Set Computing</em>). Anos máis tarde apareceu outro enfoque, a tecnoloxía <strong>RISC</strong>.</p>
<p>Ambas aproximacións fundaméntanse sobre a mesma base de funcionamento:</p>
<div class="box def"><div class="box-title">Ciclo de instrución</div><p>Un bucle infinito no que, nun mesmo ciclo, un procesador <strong>recibe</strong> unha nova instrución a executar, <strong>descodifícaa</strong>, <strong>execútaa</strong> e <strong>espera</strong> a que chegue a seguinte instrución.</p></div>
<p>...pero son moi diferentes en relación ó tipo de instrución que admiten.</p>
<figure><img src="apuntes/fh/img/ud1/system360.png" alt="IBM System/360" loading="lazy"><figcaption><strong>System/360.</strong> Nos anos 50 tódalas computadoras deseñábanse de forma completamente illada unhas das outras; as instrucións de cada unha eran independentes, polo que un programa escrito para un modelo non se podía executar noutro. O System/360 foi o primeiro ordenador en usar un xogo de instrucións a partir do enfoque CISC, no ano 1964.</figcaption></figure>

<h4>CISC</h4>
<p><strong>CISC</strong> ofrece un conxunto de instrucións bastante completas e lentas de executar, pero que agrupan varias operacións de baixo nivel na mesma instrución. Isto dá lugar a programas pequenos e sinxelos de desenvolver que realizan poucos accesos a memoria (agora é insignificante, pero daquela era vital ante a falta de recursos). No algoritmo do ovo, cun enfoque CISC teriamos unha única instrución: <em>Paso 6. Verter o ovo na tixola</em>.</p>
<p>CISC ten ó <strong>x86</strong> como o seu maior expoñente, con <strong>Intel</strong> e <strong>AMD</strong> á cabeza do seu desenvolvemento: practicamente calquera ordenador de sobremesa ou portátil dende os anos 80 usou un procesador x86.</p>
<div class="box info"><div class="box-title">CISC ou RISC</div><p>A arquitectura CISC ten un conxunto de instrucións caracterizado por ser moi amplo e permitir operacións complexas entre operandos situados na memoria ou nos rexistros internos. Este tipo de arquitectura dificulta o paralelismo entre instrucións, polo que para o alto rendemento implementan un sistema que converte as instrucións complexas en varias instrucións simples do tipo RISC, chamadas polo xeral <strong>microinstrucións</strong>.</p></div>
<figure><img src="apuntes/fh/img/ud1/cisc-risc-microcode.png" alt="CISC: conversión a microcódigo fronte a RISC: execución directa" loading="lazy"><figcaption>Esquerda (CISC): as instrucións máquina convértense en microcódigo e execútanse como microinstrucións. Dereita (RISC): as instrucións máquina execútanse directamente.</figcaption></figure>

<h4>RISC</h4>
<p>Co paso do tempo, os científicos de IBM comprobaron que os deseñadores de software creaban as súas propias instrucións máis sinxelas e precisas. Na década dos 70 empezaron a deseñar unha alternativa que posteriormente se introduciu no mercado baixo o acrónimo <strong>RISC</strong> (<em>Reduced Instruction Set Computing</em>). A súa principal virtude é ter un conxunto de instrucións moi simples que se executan máis rapidamente no procesador.</p>
<p>Existe un catálogo de poucas instrucións e estas son moi sinxelas, o que implica que para tarefas complexas necesitaremos un maior número delas; por isto o programa final terá unha lonxitude maior e accederá en máis ocasións ós datos almacenados na memoria. No algoritmo do ovo, cun enfoque RISC precisaríamos as instrucións 6.1 a 6.7.</p>
<p>O obxectivo de deseñar máquinas con esta arquitectura é posibilitar a <strong>segmentación</strong> e o <strong>paralelismo</strong> na execución de instrucións e reducir os accesos á memoria. Un procesador RISC é máis simple tanto en software (instrucións) como en hardware (rexistros), polo que será un dispositivo <strong>máis barato</strong>. O maior exemplo son os produtos <strong>ARM</strong>, utilizados amplamente en dispositivos móbiles e en supercomputadoras.</p>
<div class="box info"><div class="box-title">IBM 801</div><p>Empezouse a crear en 1975, foi deseñado por John Cocke e considérase o <strong>primeiro procesador RISC</strong> da historia.</p></div>

<h4>Comparativa</h4>
<table>
<tr><th></th><th>CISC</th><th>RISC</th></tr>
<tr><td>Instrucións</td><td>Moitas, complexas, agrupan operacións</td><td>Poucas, simples, execución rápida</td></tr>
<tr><td>Programas</td><td>Curtos, poucos accesos a memoria</td><td>Máis longos, máis accesos a memoria</td></tr>
<tr><td>Paralelismo</td><td>Difícil (usa microinstrucións internas)</td><td>Segmentación e paralelismo</td></tr>
<tr><td>Hardware</td><td>Máis complexo</td><td>Máis simple e barato</td></tr>
<tr><td>Exemplo</td><td>x86 (Intel, AMD)</td><td>ARM, IBM 801</td></tr>
<tr><td>Punto forte hoxe</td><td>Alto rendemento (máis consumo)</td><td>Eficiencia enerxética</td></tr>
</table>
<p>Tanto CISC como RISC evolucionaron de forma moi notable, adoptando melloras provindas do contrario. Ó principio a diferenza era moi ampla debido ás limitacións técnicas da época (tamaño de memoria, velocidade); na informática moderna os límites en capacidade de almacenamento son case inexistentes e os procesadores executan millóns de instrucións por segundo. A gran batalla actual entre <strong>ARM</strong> e <strong>x86</strong> céntrase no que lle importa ós usuarios do século XXI: o punto forte de ARM está na <strong>eficiencia enerxética</strong>, mentres que x86 ten no seu <strong>alto rendemento</strong> a súa gran virtude, a costa de consumir bastante máis enerxía.</p>

<div class="box tip"><div class="box-title">Operacións lóxicas ou booleanas</div>
<p>En computación xogan un papel fundamental as operacións lóxicas ou booleanas, que se implementan mediante dispositivos electrónicos chamados <strong>portas lóxicas</strong>, base dos circuítos de conmutación integrados nun chip que traballan con bits.</p>
<table><tr><th>A</th><th>B</th><th>A AND B</th><th>A OR B</th><th>NOT A</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table></div>`
  },

  /* ---------------- 5 ---------------- */
  {
    id: 'fh-ud1-5',
    tipo: 'tema',
    titulo: '5. Sistemas informáticos',
    resumen: 'Programa → aplicación → software; compoñentes físicos → hardware. Sistema informático = hardware + software para satisfacer as necesidades do usuario. Persoal informático e firmware.',
    claves: ['Programa: conxunto de ordes/instrucións para un proceso', 'Aplicación informática: conxunto de programas (nóminas, préstamos, contabilidade…)', 'Software: instrucións, programas e aplicacións · base (sistema operativo) e de aplicación', 'Hardware: compoñentes físicos', 'Sistema informático = hardware + software para satisfacer necesidades do usuario', 'Persoal informático: quen usa, desenvolve ou mantén', 'Firmware: software gravado nos compoñentes hardware'],
    tags: ['sistema informático', 'programa', 'aplicación', 'software', 'hardware', 'firmware', 'sistema operativo', 'persoal informático'],
    links: ['fh-ud1-5-1'],
    contenido: `
<p>O conxunto de ordes ou instrucións que se introducen nun ordenador para realizar un proceso determinado denomínase <strong>programa</strong>. O conxunto de varios programas denomínase <strong>aplicación informática</strong>. Unha aplicación informática podería ser, por exemplo, un programa bancario, que consta de varios programas, cada un cunha finalidade concreta: nóminas, préstamos, contabilidade...</p>
<p>O conxunto de instrucións, programas e aplicacións informáticas quedan definidos baixo o termo de <strong>software</strong>. Para que estes programas funcionen e poidan xerar a información que o usuario precisa, necesítanse determinados compoñentes físicos, agrupados baixo a denominación de <strong>hardware</strong>.</p>
<div class="box def"><div class="box-title">Sistema informático</div><p>Hardware e software necesario para satisfacer determinadas necesidades do usuario.</p></div>
<p>As persoas que utilizan, desenvolven ou manteñen o hardware e o software reciben o nome de <strong>persoal informático</strong>.</p>
<div class="fig-row">
<figure><img src="apuntes/fh/img/ud1/hardware.png" alt="Compoñentes hardware dun PC" loading="lazy"><figcaption><strong>Hardware.</strong> Compoñentes físicos, como por exemplo monitor, teclado, microprocesador, memoria...</figcaption></figure>
<figure><img src="apuntes/fh/img/ud1/firmware.png" alt="Firmware entre software e hardware" loading="lazy"><figcaption><strong>Firmware.</strong> Parte intanxible dos compoñentes hardware: o software co que se programan e configuran os dispositivos. Cando se grava nun compoñente hardware queda practicamente invariable ó longo da vida deste.</figcaption></figure>
</div>
<div class="box info"><div class="box-title">Software</div><p>É a parte intanxible (programas e aplicacións). Pódese dividir en:</p>
<ul><li><strong>Software base:</strong> parte do software sen a cal o computador non pode funcionar. Tamén se denomina <strong>sistema operativo</strong>.</li>
<li><strong>Software de aplicación:</strong> parte do software que serve para procesar a información.</li></ul></div>`
  },
  {
    id: 'fh-ud1-5-1',
    tipo: 'subtema',
    titulo: '5.1 Programa',
    resumen: 'Un programa é un conxunto de instrucións almacenadas secuencialmente en enderezos sucesivos de memoria que se executan unha tras outra. O ordenador extrae instrucións e operandos da memoria, interprétaos e calcula o resultado.',
    claves: ['A función principal do ordenador é executar programas', 'Instrucións en posicións sucesivas de memoria, executadas unha tras outra', 'Ciclo: extraer instrución → interpretar → extraer operandos → operar → resultado'],
    tags: ['programa', 'instrución', 'operando', 'memoria principal', 'execución'],
    contenido: `
<p>A función principal dun ordenador é <strong>executar programas</strong>, polo que todo o esquema da arquitectura vai encamiñado a iso, co gallo de coñecer o seu funcionamento básico e como interaccionan os distintos bloques entre si.</p>
<div class="box def"><div class="box-title">Programa</div><p>Un programa é un conxunto de <strong>instrucións</strong> que son almacenadas secuencialmente en posicións ou enderezos sucesivos de memoria e que serán executadas unha tras outra.</p></div>
<p>O funcionamento do ordenador consistirá en extraer instrucións da memoria principal, interpretalas, extraer de memoria os datos empregados na operación (chamados <strong>operandos</strong>), envialos á unidade que realiza as operacións e calcular o resultado.</p>`
  },

  /* ---------------- 6 ---------------- */
  {
    id: 'fh-ud1-6',
    tipo: 'tema',
    titulo: '6. Bloques funcionais dun sistema microinformático',
    resumen: 'Arquitectura de von Neumann (1946): programa almacenado e catro bloques —unidade de control, unidade aritmético-lóxica, memoria e entrada/saída— conectados por buses. Máquinas de propósito xeral.',
    claves: ['John von Neumann, 1946: ordenador con programa almacenado (antes: programas cableados)', 'Unidade de control (UC): le instrucións e xera sinais de control; contador de programa', 'Unidade aritmético-lóxica (ALU): sumas, restas, AND, OR, NOT; rexistros temporais', 'Memoria: celas de igual tamaño identificadas por enderezo; puntos de memoria (bits 0/1); datos e instrucións', 'Entrada/saída: memorias auxiliares e periféricos', 'Buses: camiños polos que circulan instrucións e datos', 'Instrucións máquina · propósito xeral'],
    tags: ['von Neumann', 'unidade de control', 'ALU', 'unidade aritmético lóxica', 'memoria', 'entrada/saída', 'buses', 'contador de programa', 'programa almacenado', 'CPU'],
    contenido: `
<p>O modelo básico de arquitectura empregada nos ordenadores foi establecido en <strong>1946</strong> por <strong>John von Neumann</strong>. O seu aporte máis significativo foi construír un ordenador con <strong>programa almacenado</strong>, xa que os existentes ata entón traballaban con programas cableados que se introducían establecendo manualmente as conexións.</p>
<figure><img src="apuntes/fh/img/ud1/estrutura-von-neumann.png" alt="Estrutura funcional dun ordenador: dispositivos de entrada → Unidade de Proceso Central (unidade de control, unidade aritmético-lóxica, unidade de memoria) → dispositivos de saída" loading="lazy"><figcaption>Estrutura funcional dun ordenador segundo von Neumann.</figcaption></figure>
<p>A idea de von Neumann consistía en conectar permanentemente os bloques funcionais dos ordenadores, sendo coordinado o seu funcionamento por un elemento de control. Esta tecnoloxía segue estando vixente na actualidade (con pequenas variacións) e emprégase pola maioría dos fabricantes.</p>
<p>A estrutura xeral dun ordenador segundo a arquitectura de von Neumann componse de <strong>catro bloques básicos</strong>:</p>
<ul>
  <li><strong>Unidade de control (UC):</strong> ten como función ler, unha tras outra, as instrucións máquina almacenadas na memoria principal, e xerar os sinais de control necesarios para que toda a máquina funcione e execute as instrucións lidas. Para coñecer en todo momento a posición de memoria na que está almacenada a seguinte instrución a executar existe un rexistro apuntador chamado <strong>contador de programa</strong>.</li>
  <li><strong>Unidade aritmético-lóxica (ALU):</strong> emprégase para levar a cabo operacións matemáticas elementais como sumas ou restas e operacións lóxicas como AND, OR ou NOT. Os datos sobre os que opera proveñen da memoria principal e poden estar almacenados de forma temporal nalgúns <strong>rexistros</strong> da propia ALU.</li>
  <li><strong>Unidade de memoria:</strong> a memoria principal está formada por un conxunto de <strong>celas</strong> de igual tamaño ou número de bits que se identifican de forma individual a través dun <strong>enderezo</strong> e sobre as que se poden realizar operacións de lectura ou escritura. Cada cela soe estar formada por un conxunto de bits, denominándose <strong>punto de memoria</strong>, que son o elemento básico de información: permiten dous valores, <strong>0</strong> ou <strong>1</strong>, que se corresponden a estados de tensión diferentes. As celas empréganse para almacenar tanto datos como instrucións de máquina.</li>
  <li><strong>Unidade de entrada/saída:</strong> leva a cabo a transferencia de información a través de canles asociadas a unidades externas, que poden estar formadas por <strong>memorias auxiliares ou secundarias</strong> (soporte de almacenamento de gran capacidade) e outras chamadas <strong>periféricos</strong>, que permiten a comunicación entre o sistema e o medio exterior mediante a carga de datos e programas na memoria principal ou a presentación de resultados.</li>
</ul>
<p>Este modelo é capaz de executar unha serie de instrucións elementais que denominou <strong>instrucións máquina</strong>, que deben estar almacenadas na memoria principal co programa almacenado para poder ser lidas e executadas. Que se poidan executar diferentes programas fai que este tipo de máquinas se chamen de <strong>propósito xeral</strong>.</p>
<p>Analizando esta arquitectura observamos como cada elemento ten unha determinada función, sendo totalmente imprescindible, e comunícase con outros elementos do sistema para conseguir o obxectivo: procesar información e levar a cabo a tarefa para a que se programou.</p>
<div class="box warn"><div class="box-title">Quinto compoñente: os buses</div><p>A maiores dos elementos que conforman esta arquitectura precisamos dun quinto compoñente: os <strong>buses</strong>, que son camiños a través dos que as instrucións e os datos circulan entre os distintos bloques do ordenador.</p></div>
<figure class="small"><img src="apuntes/fh/img/ud1/von-neumann.png" alt="John von Neumann" loading="lazy"><figcaption><strong>John von Neumann.</strong> Naceu no ano 1903 en Budapest. Durante a Segunda Guerra Mundial traballaba para o goberno americano e, vendo as limitacións da ENIAC e outras máquinas de computación, definiu un novo sistema lóxico de computación.</figcaption></figure>`
  },

  /* ---------------- 7 ---------------- */
  {
    id: 'fh-ud1-7',
    tipo: 'tema',
    titulo: '7. SoC: System on a Chip',
    resumen: 'Un SoC integra procesador, memoria, E/S e outros módulos nun único chip. Base dos móbiles (ARM), consolas, Raspberry Pi e sistemas embebidos: menos consumo, custo e espazo; máis fiabilidade.',
    claves: ['SoC = tódolos módulos (ou gran parte) dun computador nun único circuíto integrado', 'Requisito: partes que nun PC tradicional irían en chips separados', 'Exemplo: chips ARM dos teléfonos móbiles', 'Menos enerxía, menor custo, máis fiabilidade que sistemas multichip', 'Canto máis preto está a memoria do procesador, máis rápida a resposta'],
    tags: ['SoC', 'System on a Chip', 'ARM', 'sistemas embebidos', 'Exynos', 'smartphone', 'integración'],
    links: ['fh-ud1-7-1', 'fh-ud1-7-2', 'fh-ud1-7-3'],
    contenido: `
<p>Un <strong>sistema nun chip</strong> describe a tendencia de usar tecnoloxías de fabricación que integran tódolos ou unha gran parte dos módulos que compoñen un computador ou calquera outro sistema informático ou electrónico nun único circuíto integrado ou chip.</p>
<div class="box def"><div class="box-title">SoC</div><p>Un SoC é unha integración revolucionaria de múltiples compoñentes esenciais, como o <strong>procesador</strong>, a <strong>memoria</strong> e a <strong>entrada/saída</strong>, nun só chip.</p></div>
<p>O único requirimento é que sexan partes que nunha arquitectura de PC tradicional se atribuirían a un chip aparte, e non ó propio SoC. Este deseño compacto mellora o rendemento de ordenadores portátiles, de sobremesa, tabletas e teléfonos intelixentes. Para potenciar a multitarefa dun portátil ou para optimizar a potencia de procesamento dun teléfono intelixente, o SoC é a pedra angular tecnolóxica que impulsa os avances nos dispositivos informáticos modernos.</p>
<div class="fig-row">
<figure><img src="apuntes/fh/img/ud1/soc-exynos.png" alt="SoC Exynos 4 Quad na placa dun Samsung Galaxy S III" loading="lazy"><figcaption><strong>Smartphone.</strong> Un SoC, o Exynos 4 Quad (4412), na placa dun teléfono intelixente Samsung Galaxy S III.</figcaption></figure>
<figure><img src="apuntes/fh/img/ud1/diagrama-soc.png" alt="Diagrama dun SoC: bloques dixitais (CPU, RAM), sensores MEMS, analóxico e RF" loading="lazy"><figcaption><strong>Diagrama dun SoC.</strong> A memoria nun SoC é como unha guía de referencia rápida para o procesador: almacena os datos que precisa de inmediato. Canto máis preto estea a memoria do procesador no chip, máis rápida será a recuperación, o que mellora a velocidade e a capacidade de resposta do sistema.</figcaption></figure>
</div>
<p>O exemplo máis representativo da aplicación da tecnoloxía SoC son os <strong>sistemas embebidos</strong> que presentan os actuais teléfonos móbiles: chips con arquitectura <strong>ARM</strong> integrando practicamente todo o necesario para o funcionamento do dispositivo, facéndoo todo nun espazo moi pequeno e permitindo a miniaturización existente nos móbiles actuais.</p>
<p>Un SoC normalmente <strong>consome menos enerxía</strong>, ten un <strong>custo inferior</strong> e unha <strong>maior fiabilidade</strong> que os sistemas multichip ós que substitúe: ó cumprir menos pezas para o sistema, os custos de material e ensamblado vense reducidos.</p>
<figure><img src="apuntes/fh/img/ud1/cpu-mcu-mpu-soc-mcm.png" alt="CPU, MCU, MPU, SoC e MCM" loading="lazy"><figcaption>Distintos niveis de integración: CPU (Central Processing Unit), MCU (Micro Computer Unit), MPU (Micro Processing Unit), SoC (System on Chip) e MCM (Multi Chip Module).</figcaption></figure>
<div class="box tip"><div class="box-title">Afecta ó tamaño?</div><p>Ó integrar compoñentes esenciais como o procesador, a memoria e outros nun só chip, os dispositivos vólvense máis elegantes e compactos.</p></div>`
  },
  {
    id: 'fh-ud1-7-1',
    tipo: 'subtema',
    titulo: '7.1 Vantaxes e desvantaxes de usar un SoC',
    resumen: 'Vantaxes: espazo, eficiencia enerxética (PPA), custo, fiabilidade, rendemento. Desvantaxes: punto único de fallo, custo de desenvolvemento, dependencia do fabricante, pouca flexibilidade, analóxico limitado, non actualizable.',
    claves: ['+ Optimización do espazo', '+ Eficiencia enerxética: sen buses externos, métricas PPA (potencia, rendemento, área)', '+ Máis económico · + Fiabilidade (menos conexións) · + Rendemento (sinais no chip)', '− Punto único de fallo (limita actualizacións)', '− Custo de desenvolvemento alto: só rendible con mercado grande', '− Dependencia do fabricante · − Pouca flexibilidade', '− Analóxico/dixital mixto: unha única tecnoloxía de proceso', '− Non idóneo para aplicacións intensivas en consumo · − Non actualizable'],
    tags: ['SoC', 'vantaxes', 'desvantaxes', 'PPA', 'punto único de fallo', 'fiabilidade'],
    contenido: `
<p>Unha vez explicado o concepto de SoC a pregunta que xorde é: que vantaxes e desvantaxes implica o uso dun SoC fronte a ter varios chips separados?</p>
<div class="box tip"><div class="box-title">Vantaxes</div>
<ul>
  <li><strong>Optimización do espazo:</strong> os SoC ocupan menos espazo que varios compoñentes discretos, o que fai posibles deseños de dispositivos máis pequenos e de menor peso ó xuntar varias funcionalidades nun único chip, algo crítico nun teléfono móbil.</li>
  <li><strong>Eficiencia enerxética:</strong> a substitución de compoñentes e circuítos grandes por SoC implica prescindir dos buses de datos e leva a unha redución significativa no consumo de enerxía, conseguindo as métricas <strong>PPA</strong> (potencia, rendemento e área) requiridas.</li>
  <li><strong>Máis económico:</strong> un único chip SoC é máis económico que o conxunto de varios chips separados que doutro xeito serían necesarios.</li>
  <li><strong>Fiabilidade:</strong> un único SoC ten menos conexións e, polo tanto, é significativamente máis fiable que un sistema multiparte conectado a través dun substrato.</li>
  <li><strong>Rendemento:</strong> debido a que os sinais poden permanecer no chip, un SoC pode lograr un maior rendemento e velocidade que unha solución multiparte.</li>
</ul></div>
<div class="box danger"><div class="box-title">Desvantaxes</div>
<ul>
  <li><strong>Punto único de fallo:</strong> con tódolos compoñentes nun só chip, un fallo nun compoñente afecta a todo o sistema (o que tamén limita as actualizacións).</li>
  <li><strong>Custo do desenvolvemento:</strong> o deseño de SoC personalizados require máis coñecementos e ferramentas especializadas, o que supón maior tempo e custos. Só se recuperan se o mercado do SoC é o suficientemente grande.</li>
  <li><strong>Dependencia do fabricante:</strong> se un compoñente é parte do SoC e hai problemas de implementación ou subministro, non se podería cambiar.</li>
  <li><strong>Flexibilidade:</strong> un SoC é ideal para a tarefa á que se destina, pero ten un alcance limitado para calquera outra tarefa.</li>
  <li><strong>Analóxico/dixital mixto:</strong> como tódolos compoñentes se fabrican cunha única tecnoloxía de proceso, non hai opción de usar a tecnoloxía óptima para as seccións analóxicas; os SoC son máis axeitados para aplicacións dixitais.</li>
  <li><strong>Non idoneidade:</strong> poderían non ser idóneos para aplicacións intensivas en consumo enerxético.</li>
  <li><strong>Non actualizables:</strong> os equipos que os integran non soen ser actualizables en hardware, xa que está estreitamente ligado ó deseño do dispositivo.</li>
</ul></div>`
  },
  {
    id: 'fh-ud1-7-2',
    tipo: 'subtema',
    titulo: '7.2 Procesadores de PC, tamén son un SoC?',
    resumen: 'As CPU Intel/AMD integran ponte norte (controlador de memoria, PCIe) e gráficos, pero non a ponte sur nin a RAM, polo que non se consideran SoC. Intel Lakefield foi o intento de SoC para PC (Foveros, big.LITTLE), un fracaso comercial.',
    claves: ['CPU actuais integran northbridge (controlador de memoria + PCIe) e gráficos', 'Falta a ponte sur (USB, SATA…) e a RAM → non son SoC estritos', 'Intel Lakefield: SoC de baixo consumo, empaquetado 3D Foveros, núcleos híbridos big.LITTLE', 'Lakefield: fin de vida en pouco máis dun ano; PCs de 2000 € con rendemento de netbook', 'Sucesores con núcleos híbridos: Alder Lake, Raptor Lake, Meteor Lake', 'Coprocesadores: matemático (coma flotante) e gráfico'],
    tags: ['SoC', 'Intel', 'AMD', 'northbridge', 'ponte norte', 'ponte sur', 'chipset', 'Lakefield', 'Foveros', 'big.LITTLE', 'Alder Lake', 'coprocesador'],
    contenido: `
<p>Tendo en conta a definición de SoC, podemos comprobar ata que punto o é un procesador de PC actual, en particular unha CPU <strong>AMD</strong> ou <strong>Intel</strong>.</p>
<p>Nestas CPU non só temos o procesador propiamente dito no seu interior, senón tamén outras partes que antes ían en chips separados: a <strong>ponte norte</strong> ou <em>northbridge</em>, que integra o controlador de memorias e as liñas PCIe, e que nos equipos máis antigos formaba parte da placa base. Tamén hai que sumar que a maioría destas CPU contan con <strong>gráficos integrados</strong>, outro compoñente tipicamente usado fóra do chip do procesador.</p>
<p>A gran fonte de discrepancia está na ausencia de compoñentes esenciais como a <strong>memoria</strong>. Moitos especialistas consideran que un SoC debería combinar, ademais de CPU, gráficos e ponte norte, tamén a <strong>ponte sur</strong> e a <strong>memoria RAM</strong>. Estas dúas últimas partes non as teñen estes procesadores, ó carecer dos controladores de USB, SATA e demais que forman parte do <em>chipset</em>. Isto provocaría que non puidésemos considerar como SoC un AMD ou un Intel normal e corrente.</p>
<h4>Intel Lakefield</h4>
<p>Intel decidiu apostar polo seu SoC ó que puxo o nome de <strong>Lakefield</strong>, dentro dun proxecto de procesadores de baixo consumo para equipos portátiles bastante arriscado polas súas características, como que tódalas partes do chip constrúense postas unhas enriba das outras.</p>
<figure><img src="apuntes/fh/img/ud1/intel-lakefield-foveros.png" alt="Intel Lakefield: capas DRAM, chiplet de cómputo e die base apilados (Foveros)" loading="lazy"><figcaption><strong>Intel Lakefield.</strong> Unha das CPU máis estrañas e curiosas dos últimos anos no mundo do PC. Reúne varios paradigmas das futuras CPU de Intel: a tecnoloxía de empaquetado <strong>Foveros</strong> e unha configuración de núcleos híbridos coñecida como <strong>big.LITTLE</strong>. Non soe ser habitual que unha CPU chegue ó fin de vida en pouco máis dun ano, pero así foi con Lakefield.</figcaption></figure>
<p>A tecnoloxía Foveros utilizouse en futuros deseños de CPU e GPU da propia Intel, sendo Lakefield unha posta a proba. Tamén foi a primeira CPU de Intel para PC baseada en <strong>núcleos híbridos</strong> ou de diferente potencia. A explicación de Intel para o cese da produción é que a demanda do mercado virou cara outros procesadores da compañía: Intel lanzou <strong>Alder Lake</strong> (continuados por Raptor Lake e Meteor Lake), baseada en núcleos híbridos. En todo caso, Lakefield foi un fracaso comercial: foi parar a ordenadores de máis de 2 000 euros pero cun rendemento dun netbook de 400.</p>
<div class="box info"><div class="box-title">Coprocesadores</div>
<p>Un <strong>coprocesador</strong> é unha unidade especializada que axuda ó procesador en determinadas operacións.</p>
<div class="fig-row">
<figure><img src="apuntes/fh/img/ud1/coprocesador-80387.png" alt="Coprocesador matemático Intel 80387" loading="lazy"><figcaption><strong>Coprocesador matemático.</strong> Ó principio executaban operacións en coma flotante, que son operacións complexas con moitos díxitos.</figcaption></figure>
<figure><img src="apuntes/fh/img/ud1/xeon-phi.png" alt="Intel Xeon Phi Coprocessor" loading="lazy"><figcaption><strong>Coprocesador gráfico.</strong> Hoxe son coprocesadores gráficos que descargan ó procesador principal de operacións de procesamento de imaxes: fotos ou vídeo.</figcaption></figure>
</div></div>`
  },
  {
    id: 'fh-ud1-7-3',
    tipo: 'subtema',
    titulo: '7.3 En que sistemas os podemos encontrar?',
    resumen: 'Sistemas embebidos (maquinaria, caixeiros, aparellos de propósito específico), consolas recentes e Raspberry Pi (ordenadores pequenos e baratos para computación básica, ciencia, automatización e robótica).',
    claves: ['Sistemas embebidos: dispositivo con propósito específico (maquinaria, caixeiros…)', 'Consolas recentes: SoC para reducir tamaño e consumo', 'Raspberry Pi: ordenador de moi pequeno tamaño e baixo custo'],
    tags: ['sistemas embebidos', 'consolas', 'Raspberry Pi', 'robótica', 'automatización'],
    contenido: `
<p>Estes <strong>sistemas embebidos</strong> son os que se empregan dentro dun dispositivo concreto como pode ser un elemento de maquinaria, un caixeiro, ou en xeral calquera aparello que teña un propósito específico e non un uso xeral como un ordenador tradicional.</p>
<p>As <strong>consolas</strong> máis recentes tamén fan uso dun SoC que integra boa parte das funcionalidades nun único chip, algo entendible tendo en conta que buscan ser máis pequenas que un ordenador de sobremesa normal e consumir menos.</p>
<figure class="small"><img src="apuntes/fh/img/ud1/raspberry-pi.png" alt="Raspberry Pi" loading="lazy"><figcaption><strong>Raspberry Pi.</strong> Ordenadores de moi pequeno tamaño e baixo custo destinados a usos relacionados coa computación básica, a ciencia, automatización industrial e robótica.</figcaption></figure>`
  },

  /* ---------------- 8 ---------------- */
  {
    id: 'fh-ud1-8',
    tipo: 'tema',
    titulo: '8. Novas arquitecturas dos microprocesadores',
    resumen: 'Desafíos do deseño (escalada, eficiencia enerxética, multinúcleo, seguridade), arquitecturas híbridas (CPU+GPU+NPU, empaquetados 3D, chiplets) e catro tecnoloxías emerxentes 2025-2030: óptica, neuromórfica, biomolecular e cuántica.',
    claves: ['Os ordenadores fan billóns de operacións/s pero non recoñecen patróns coma un cerebro', 'Desafíos: escalada (calor, interferencias, fugas), eficiencia enerxética, múltiples núcleos (sincronización, latencia), seguridade', 'Arquitecturas híbridas: CPU + GPU + NPU → rendemento optimizado, eficiencia, cargas específicas (GPGPU)', 'Empaquetados 3D e chiplets fronte a deseño monolítico', 'Emerxentes: computación óptica, neuromórfica, fabricación biomolecular, microprocesadores cuánticos'],
    tags: ['novas arquitecturas', 'multicore', 'arquitecturas híbridas', 'GPU', 'NPU', 'GPGPU', 'chiplet', 'die', 'empaquetado 3D', 'eficiencia enerxética', 'seguridade'],
    links: ['fh-ud1-8-1', 'fh-ud1-8-2', 'fh-ud1-8-3', 'fh-ud1-8-4'],
    contenido: `
<p>Na actualidade as computadoras avanzaron moito e poden realizar billóns de operacións por segundo; con todo, non son quen de recoñecer a unha persoa pola súa forma de andar ou de recoñecer patróns ou procesar imaxes tal e como as procesa un cerebro humano.</p>
<div class="fig-row">
<figure><img src="apuntes/fh/img/ud1/cerebro.png" alt="Cerebro humano" loading="lazy"><figcaption><strong>Cerebro humano.</strong> Máis eficiente enerxeticamente · formado por neuronas que activan sinapses entre elas · realiza tarefas de forma máis rápida e eficiente · recoñece facianas ou cheiros de forma intelixente.</figcaption></figure>
<figure><img src="apuntes/fh/img/ud1/procesador.png" alt="Procesador Intel Core" loading="lazy"><figcaption><strong>Procesador.</strong> Menos eficiente enerxeticamente · moi eficiente realizando cálculos · hai tarefas (recoñecer persoas, cheiros, darlle sentido á música…) que non é quen de realizar ou que lle resultan moi custosas en tempo e enerxía.</figcaption></figure>
</div>
<h4>Desafíos actuais do deseño de microprocesadores</h4>
<ul>
  <li><strong>Escalada:</strong> a medida que facemos os microprocesadores máis pequenos enfrontámonos a limitacións físicas e tecnolóxicas. Encoller os transistores provoca problemas de calor, interferencia electromagnética e fugas de corrente. Con todo, as empresas conseguiron simplificar os seus núcleos, un avance para futuros deseños con máis núcleos.</li>
  <li><strong>Eficiencia enerxética:</strong> a demanda de dispositivos móbiles e sistemas de alto rendemento fai crucial reducir o consumo sen comprometer o rendemento: optimizar a arquitectura, administrar enerxía e explorar transistores de baixo consumo.</li>
  <li><strong>Múltiples núcleos:</strong> as arquitecturas <em>multicore</em> traen retos como sincronización, asignación de recursos e latencia. As arquitecturas heteroxéneas ofrecen novas posibilidades.</li>
  <li><strong>Seguridade:</strong> ataques, vulnerabilidades e brechas desafían a protección de datos e a integridade do sistema. Hai que garantir a seguridade dende o deseño, incluíndo ameazas incorporadas nos chips.</li>
</ul>
<h4>Arquitecturas híbridas de procesamento</h4>
<p>Combinan diferentes tipos de unidades de procesamento nun só sistema para aproveitar as fortalezas de cada unha:</p>
<ul>
  <li><strong>Rendemento optimizado:</strong> ó combinar CPU (Unidade Central de Procesamento), GPU (Unidade de Procesamento Gráfico), NPU (Unidade de Procesamento Neuronal)... cada unidade especialízase en tarefas específicas.</li>
  <li><strong>Eficiencia enerxética:</strong> distribúen a carga de traballo; as GPU son eficientes para tarefas altamente paralelas, liberando a CPU.</li>
  <li><strong>Mellor rendemento en cargas específicas:</strong> algunhas cargas con moitos cálculos execútanse mellor nunha GPGPU que nunha CPU xenérica.</li>
  <li><strong>Empaquetados 3D:</strong> encapsulan chips de lóxica e memoria máis próximos entre si, mellorando o rendemento; queda por resolver a disipación de temperatura.</li>
</ul>
<figure><img src="apuntes/fh/img/ud1/gpgpu.png" alt="Tarxeta con varias GPU" loading="lazy"><figcaption><strong>GPGPU</strong> (<em>General-Purpose computing on Graphics Processing Units</em>). Usar varias tarxetas de vídeo ou moitos chips gráficos paraleliza aínda máis o procesamento. Unha canle GPGPU é procesamento paralelo entre unha ou máis GPU e CPU con instrucións aceleradas especiais. Aínda que as GPU funcionan a frecuencias máis baixas, teñen moitas máis unidades de procesamento, polo que procesan moitos máis datos por segundo que unha CPU tradicional. Desenvolvéronse a principios do século XXI.</figcaption></figure>
<div class="fig-row">
<figure><img src="apuntes/fh/img/ud1/chiplet.png" alt="Chiplet: varios chips (CPU, GPU, memoria 3D) nun paquete" loading="lazy"><figcaption><strong>Chiplet.</strong> Paquete que aloxa varios chips baixo un único <em>die</em>. Fronte ós procesadores monolíticos (tódolos chips e núcleos nun único paquete), o deseño de chiplet é máis eficiente, reduce custos e a posibilidade de fallos.</figcaption></figure>
<figure><img src="apuntes/fh/img/ud1/die.png" alt="Die dun circuíto integrado" loading="lazy"><figcaption><strong>Die.</strong> Pequeno bloque de material semicondutor sobre o que se fabrica un circuíto funcional determinado.</figcaption></figure>
</div>
<div class="box warn"><div class="box-title">Desafíos e oportunidades</div>
<ul>
  <li><strong>Complexidade da fabricación:</strong> a integración de chiplets require unha xestión térmica e eléctrica precisa.</li>
  <li><strong>Falta de habilidades:</strong> os enxeñeiros deben dominar novas ferramentas e comprender a criptografía resistente ós ordenadores cuánticos.</li>
  <li><strong>Evolución dos estándares:</strong> fan falta estándares unificados para as interfaces de chiplets e os protocolos de seguridade.</li>
  <li><strong>Preocupacións ambientais:</strong> a eficiencia mellora, pero o consumo total de enerxía aumenta.</li>
  <li><strong>Presións de custos:</strong> precísase un investimento de capital masivo, o que pode limitar a innovación.</li>
</ul></div>
<p>Existen <strong>catro tecnoloxías emerxentes</strong> que prometen redefinir a industria nos vindeiros anos (2025-2030): computación óptica, computación neuromórfica, fabricación biomolecular e microprocesadores cuánticos.</p>`
  },
  {
    id: 'fh-ud1-8-1',
    tipo: 'subtema',
    titulo: '8.1 Computación óptica',
    resumen: 'Substituír sinais eléctricos por luz (fibra óptica) en buses CPU–RAM. O motor de fotónica de silicio 3D Passage acada 100 Gbps/mm². Podería eliminar o pescozo de botella de von Neumann.',
    claves: ['Sinais de luz en lugar de eléctricos (interconexións de fibra óptica)', 'O ruído da optoelectrónica non é obstáculo; pode aproveitarse na IA', 'Passage (fotónica de silicio 3D): 100 Gbps/mm²', 'Elimina o pescozo de botella de von Neumann (procesador ↔ memoria)', 'Desafíos: xestión térmica e consistencia na fabricación'],
    tags: ['computación óptica', 'fotónica', 'fibra óptica', 'pescozo de botella de von Neumann', 'Passage'],
    contenido: `
<p>A computación óptica pode substituír os sinais eléctricos actuais por <strong>sinais de luz</strong> moito máis rápidos a través de interconexións de fibra óptica (por exemplo, para o seu uso en buses entre a CPU e a RAM).</p>
<p>Como resultado de estudos realizados, descubriuse que o ruído inherente á optoelectrónica integrada non é un obstáculo; de feito, pódese aproveitar para mellorar a creatividade da intelixencia artificial.</p>
<p>O <strong>Motor de Fotónica de Silicio en 3D Passage</strong> demostra o potencial dos interconectores ópticos, logrando taxas de datos de <strong>100 Gbps/mm²</strong>.</p>
<div class="box info"><div class="box-title">Pescozo de botella de von Neumann</div><p>Esta tecnoloxía podería eliminar o <em>pescozo da botella de von Neumann</em>, que é a limitación do rendemento tradicional entre procesadores e memoria.</p></div>
<p>Con todo, quedan desafíos na xestión térmica e na consistencia na fabricación.</p>`
  },
  {
    id: 'fh-ud1-8-2',
    tipo: 'subtema',
    titulo: '8.2 A computación neuromórfica',
    resumen: 'Chips que imitan redes neuronais biolóxicas (Intel Loihi) procesando cargas de IA con 1/1000 da enerxía dunha GPU. Hala Point: 1150 millóns de neuronas, 15-300 veces menos enerxía.',
    claves: ['Intel Loihi: desviación radical das arquitecturas tradicionais', 'Imitan redes neuronais biolóxicas: 1/1000 da enerxía das GPU', 'Aplicacións: retinas artificiais, narices artificiais, recoñecemento facial, robótica, sensores', 'Hala Point: primeiro sistema neuromórfico de Intel con 1150 millóns de neuronas', 'Ferramentas de programación e estándares aínda madurando'],
    tags: ['neuromórfica', 'Loihi', 'Hala Point', 'Intel', 'redes neuronais', 'eficiencia'],
    contenido: `
<p>O procesador <strong>Loihi</strong> de Intel representa unha desviación radical das arquitecturas de computación tradicionais. Estes chips imitan as <strong>redes neuronais biolóxicas</strong>, procesando certas cargas de traballo de IA con <strong>1/1000 da enerxía</strong> das GPU convencionais. Esta eficiencia pode facer posible a implantación de microchips en retinas artificiais para persoas con cegueira, narices artificiais que recoñezan cheiros, sistemas de recoñecemento facial...</p>
<figure><img src="apuntes/fh/img/ud1/hala-point.png" alt="Sistema neuromórfico Intel Hala Point" loading="lazy"><figcaption><strong>Hala Point.</strong> O primeiro sistema neuromórfico de Intel de 1 150 millóns de neuronas constrúe un camiño cara a unha IA máis eficiente e escalable. Permitiría manexar tarefas como a computación cognitiva, a IA adaptativa e os datos de detección usando de 15 a 300 veces menos enerxía que os chips actuais de silicio.</figcaption></figure>
<p>As primeiras aplicacións en robótica e procesamento de sensores amosan posibilidades, pero as ferramentas de programación e os estándares aínda están madurando. (Véxase tamén o apartado 9.3, <em>As redes neuronais</em>.)</p>`
  },
  {
    id: 'fh-ud1-8-3',
    tipo: 'subtema',
    titulo: '8.3 Fabricación biomolecular',
    resumen: 'Investigación do MIT: ensamblaxe de transistores guiada por ADN. Podería abaratar e democratizar a fabricación de chips e habilitar circuítos tridimensionais.',
    claves: ['MIT: transistores ensamblados guiados por ADN', 'Reduce potencialmente os custos de fabricación', 'Primeiras etapas; podería democratizar a produción e permitir circuítos 3D'],
    tags: ['biomolecular', 'ADN', 'MIT', 'fabricación de chips'],
    contenido: `
<p>A investigación do <strong>MIT</strong> sobre a ensamblaxe de transistores guiados por <strong>ADN</strong> podería revolucionar a fabricación de chips, reducindo potencialmente os custos de fabricación.</p>
<p>Aínda que está nas primeiras etapas, este enfoque podería democratizar a produción de chips e habilitar novas formas de circuítos tridimensionais.</p>`
  },
  {
    id: 'fh-ud1-8-4',
    tipo: 'subtema',
    titulo: '8.4 Microprocesadores cuánticos',
    resumen: 'Operan con qubits que poden estar en varios estados á vez (superposición) e aproveitan a entrelazación para cálculo paralelo masivo. Retos: coherencia e decoherencia cuántica. Aínda en fase experimental.',
    claves: ['Bits clásicos (0 ou 1) → qubits en múltiples estados (superposición cuántica)', 'Superposición + entrelazación → cálculo paralelo a gran escala', 'Útiles en simulación cuántica, optimización complexa, factorización de números grandes', 'Coherencia cuántica: manter os qubits o tempo suficiente', 'Decoherencia: interacción coa contorna que fai perder as propiedades cuánticas', 'Estado actual: desenvolvemento e experimentación'],
    tags: ['cuántico', 'qubit', 'superposición', 'entrelazación', 'coherencia', 'decoherencia', 'factorización'],
    contenido: `
<p>Un <strong>microprocesador cuántico</strong> é un dispositivo de procesamento de información que opera utilizando principios de mecánica cuántica en lugar da física clásica. A diferenza dos microprocesadores tradicionais, que utilizan bits clásicos (0 ou 1), os cuánticos empregan <strong>qubits</strong> (bits cuánticos) que poden estar en múltiples estados á vez debido ó fenómeno de <strong>superposición cuántica</strong>.</p>
<p>En lugar de realizar cálculos secuencialmente como nas CPU clásicas, aproveitan a superposición e a <strong>entrelazación</strong> para realizar cálculos de maneira paralela a unha escala moito maior. Isto ten o potencial de permitir un rendemento significativamente superior en certos problemas: a simulación de sistemas cuánticos, a optimización complexa e a factorización de números grandes.</p>
<div class="box warn"><div class="box-title">Desafíos</div><p>A <strong>coherencia cuántica</strong> —manter os qubits nun estado cuántico durante o tempo suficiente para calcular— é un obstáculo importante. A <strong>decoherencia</strong>, a interacción dos qubits coa súa contorna que lles fai perder as propiedades cuánticas, pode limitar a súa utilidade en certas aplicacións.</p></div>
<p>Na actualidade os microprocesadores cuánticos están nunha etapa de desenvolvemento e experimentación. Aínda que están lonxe de usarse en aplicacións prácticas a grande escala, amosan un gran potencial para revolucionar a informática e resolver problemas complexos de maneira máis eficiente no futuro.</p>`
  },

  /* ---------------- 9 ---------------- */
  {
    id: 'fh-ud1-9',
    tipo: 'tema',
    titulo: '9. A Intelixencia Artificial nos procesadores',
    resumen: 'A IA axuda a deseñar procesadores e a melloralos (unidades de predición). Arquitecturas híbridas con aceleradores de IA (NPU, motores neuronais). Técnicas: aprendizaxe automática, aprendizaxe profunda e redes neuronais.',
    claves: ['A IA acelera o deseño de microprocesadores', 'Redes neuronais para mellorar unidades de predición (AMD)', 'Aceleradores de IA: NPU, motores neuronais (SoC de Apple)', 'Técnicas: machine learning, deep learning, redes neuronais', 'Capas: IA ⊃ machine learning ⊃ redes neuronais ⊃ deep learning', 'Aprendizaxe supervisada (datos etiquetados) vs non supervisada'],
    tags: ['intelixencia artificial', 'IA', 'NPU', 'motor neuronal', 'machine learning', 'deep learning', 'redes neuronais', 'AMD', 'Apple', 'aprendizaxe supervisada'],
    links: ['fh-ud1-9-1', 'fh-ud1-9-2', 'fh-ud1-9-3', 'fh-ud1-9-4', 'fh-ud1-9-5'],
    contenido: `
<p>A intelixencia artificial non só axudará a deseñar mellores microprocesadores nun período de tempo máis curto; as <strong>redes neuronais artificiais</strong> tamén se poden usar para mellorar certas áreas, como as <strong>unidades de predición</strong>. Isto é algo co que AMD xa leva experimentando para gañar rendemento.</p>
<p>Estas novas arquitecturas serán híbridas, e isto tamén implica que haberá <strong>aceleradores de IA</strong> como as <strong>NPU</strong> ou os motores neuronais que vemos nos SoC de Apple, que cobrarán cada vez máis importancia a medida que as cargas de traballo de IA aumenten.</p>
<p>Actualmente, os procesadores utilizan técnicas de <strong>aprendizaxe automática</strong>, <strong>aprendizaxe profunda</strong> e <strong>redes neuronais</strong>, todas elas disciplinas da intelixencia artificial. Estas técnicas axudan a que a velocidade de procesamento dea un salto cualitativo e os procesadores sexan máis eficientes e rápidos.</p>
<figure class="small"><img src="apuntes/fh/img/ud1/capas-aprendizaxe.png" alt="Capas: Artificial Intelligence ⊃ Machine Learning ⊃ Neural Networks ⊃ Deep Learning" loading="lazy"><figcaption><strong>Capas da aprendizaxe.</strong> A intelixencia artificial engloba a aprendizaxe automática; dentro dela, as redes neuronais; e dentro destas, a aprendizaxe profunda.</figcaption></figure>
<div class="box info"><div class="box-title">Aprendizaxe supervisada e non supervisada</div>
<p>A <strong>aprendizaxe supervisada</strong> é o método máis sinxelo para adestrar un algoritmo: amosar a relación de entrada e saída. Unha vez que un modelo aprende que escoller en diversas situacións, pode tomar decisións en novos casos. Pensa en aprender unha nova lingua: atopamos patróns (a estrutura dun tempo verbal), practicamos con frases de exemplo e despois inferimos o tempo mesmo nunha frase nova.</p>
<p>A <strong>aprendizaxe non supervisada</strong> ensina patróns ás máquinas a partir de datos <em>sen etiquetar</em>. Pensa nun neno pequeno que aprende unha lingua: non sabe o que é un tempo verbal, enténdeo sen ser adestrado con datos etiquetados.</p></div>`
  },
  {
    id: 'fh-ud1-9-1',
    tipo: 'subtema',
    titulo: '9.1 Aprendizaxe automática (machine learning)',
    resumen: 'Uso de datos para crear modelos preditivos e tomar decisións, con regras predefinidas. Non comprende o mundo coma un cerebro. Exemplo: adestrar un detector de caras con imaxes etiquetadas.',
    claves: ['Datos → modelos preditivos → decisións', 'Regras predefinidas e alimentación de datos', 'Non entende o contexto coma un cerebro humano', 'Exemplo: adestrar con imaxes con/sen caras e despois recoñecer en imaxes novas'],
    tags: ['machine learning', 'aprendizaxe automática', 'modelo preditivo', 'adestramento', 'recoñecemento facial'],
    contenido: `
<p>Cando falamos da aprendizaxe automática como unha aplicación da Intelixencia Artificial, referímonos ó uso de <strong>datos</strong> para poder crear <strong>modelos preditivos</strong> e tomar decisións. Está baseada na alimentación de datos e, xeralmente, dispón duns conxuntos de regras predefinidas para poder traballar.</p>
<p>O problema é que a día de hoxe non comprende o concepto do mundo como o fai un cerebro humano: un ordenador pode conectar un evento a algo que sucedeu antes, pero ten moitas dificultades cando ten que pór unha nova conexión ou un novo evento nun contexto determinado.</p>
<div class="box ex"><div class="box-title">Exemplo</div><p>Se deseñamos un sistema que detecte unha cara humana, primeiro haberá que traballar cun conxunto de imaxes, cantas máis mellor, nas que aparecerán caras ou non. Para adestrar ó sistema haberá que lle indicar que imaxes teñen caras humanas e cales non, de forma que, unha vez rematado o adestramento, o sistema sexa quen de recoñecer, con certa eficacia, en novas imaxes se aparece unha cara humana.</p></div>`
  },
  {
    id: 'fh-ud1-9-2',
    tipo: 'subtema',
    titulo: '9.2 Aprendizaxe profunda (deep learning)',
    resumen: 'Parte do machine learning que usa redes neuronais (algoritmos matemáticos a semellanza do cerebro). Execútase en GPU polo seu paralelismo. Os motores neuronais nos chips fan a IA máis eficiente que a forza bruta da CPU/GPU.',
    claves: ['Subconxunto do machine learning que usa redes neuronais', 'Antes non cabía nun smartphone; hoxe si', 'GPU para adestrar e avaliar modelos (traballo paralelo)', 'Motores neuronais nos chips: recoñecemento facial, realidade aumentada, mellora de fotos… sen forza bruta'],
    tags: ['deep learning', 'aprendizaxe profunda', 'DNN', 'GPU', 'motor neuronal', 'realidade aumentada'],
    contenido: `
<p>É unha parte da aprendizaxe automática que utiliza <strong>redes neuronais</strong> nos seus algoritmos. Estas redes son algoritmos matemáticos creados a semellanza do funcionamento dun cerebro.</p>
<p>Ata hai pouco non se podían implementar en dispositivos como os teléfonos intelixentes porque as limitacións do hardware o impedían. A día de hoxe é posible a súa integración e empréganse <strong>GPU</strong> para executar algoritmos de adestramento e avaliación dos modelos, xa que estes compoñentes, ó estar deseñados para traballar de forma paralela, son ideais para este tipo de problemas.</p>
<figure><img src="apuntes/fh/img/ud1/deep-learning.png" alt="Rede neuronal profunda con varias capas ocultas" loading="lazy"><figcaption><strong>Deep learning.</strong> A aprendizaxe profunda ou redes neuronais profundas (DNN) é a última estratexia de recoñecemento para resolver desafíos complexos da IA, como o recoñecemento da fala ou o recoñecemento visual.</figcaption></figure>
<div class="box tip"><div class="box-title">Por que usar IA nos procesadores?</div><p>Para realizar tarefas complexas como o recoñecemento facial, a realidade aumentada ou mellorar as fotos —tarefas moi frecuentes e demandadas polos usuarios— usar <strong>motores neuronais</strong> nos chips fará que moitos procesadores usen a IA dun modo máis eficiente en vez de utilizar a forza bruta coa CPU ou GPU.</p></div>`
  },
