/* ============================================================
 * FH · Fundamentos de Hardware · Unidade 3
 * Elementos internos dun sistema informático
 * ------------------------------------------------------------
 * Fonte: apuntes/fh/ud3-elementos-internos-dun-sistema-informatico.pdf (texto OCR en apuntes/fh/ocr/ud3.txt)
 * Imaxes: apuntes/fh/img/ud3/
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
  id: 'fh-ud3',
  codigo: 'UD3',
  titulo: 'Elementos internos dun sistema informático',
  fuente: 'apuntes/fh/ud3-elementos-internos-dun-sistema-informatico.pdf',
  nodos: [

  /* ---------------- HUB ---------------- */
  {
    id: 'fh-ud3',
    tipo: 'unidad',
    titulo: 'UD3 · Elementos internos dun sistema informático',
    resumen: 'Compoñentes físicos dun microordenador: carcasa, fonte de alimentación (factores de forma, eficiencia 80 PLUS, conectores), placa base (BIOS/UEFI, buses, chipset), procesador (zócolos, Intel/AMD/ARM), refrixeración, memoria RAM, sistemas de almacenamento (HDD, SSD, ópticos), tarxetas de expansión e como facer un orzamento.',
    claves: ['Carcasa: chasis, cuberta, panel frontal/traseiro, baías · tipos por tamaño', 'Fonte de alimentación: 3,3 / 5 / 12 V · ATX, SFX, TFX, Flex ATX, 1U/2U · PFC e 80 PLUS', 'Conectores: ATX 24 pins, ATX 12 V / EPS, Molex, SATA, PCIe 6+2, 12VHPWR', 'Placa base: factores de forma, BIOS/UEFI, buses, ocos de expansión, chipset', 'Procesador: zócolo, criterios de elección, numeración Intel/AMD, ARM', 'Refrixeración: aire, líquida, inmersión, Peltier, software · TDP', 'Memoria RAM: tipos, factores de forma, características', 'Almacenamento: controladoras, HDD, SSD, disquete, CD/DVD, cinta, magnetóptico', 'Tarxetas de expansión: son, gráficas, NIC', 'Orzamento: necesidades, aplicacións, características, prezo'],
    tags: ['fh', 'ud3', 'hardware', 'carcasa', 'fonte de alimentación', 'placa base', 'procesador', 'memoria', 'almacenamento', 'orzamento'],
    contenido: `
<p>Terceira unidade do módulo <strong>Fundamentos de Hardware</strong>. Percorre un por un os compoñentes que conforman fisicamente un microordenador actual, as súas alternativas tecnolóxicas e as incompatibilidades a ter en conta, e remata cos pasos para elaborar un orzamento.</p>
<h4>Sumario</h4>
<ol>
  <li>Introdución</li>
  <li>Carcasa: chasis, cuberta, panel frontal, panel traseiro, baías, tipos</li>
  <li>Fonte de alimentación: cableado, refrixeración, factores de forma, formatos de servidor, eficiencia, conectores, precaucións, fontes modulares, 12VHPWR, comprobación</li>
  <li>Placa base: tipos, conexións, BIOS, UEFI, bus, ocos de expansión, chipset</li>
  <li>Procesador: zócolo, criterios de elección, Intel vs AMD, numeración Intel e AMD, ARM</li>
  <li>Refrixerador: aire, líquida, inmersión, Peltier, software, control de temperatura, TDP</li>
  <li>Memoria: RAM, factores de forma, características, memorias especiais</li>
  <li>Sistemas de almacenamento: controladoras, disco duro, SSD, disquete, DVD, CD, cinta, magnetóptico</li>
  <li>Tarxetas de expansión: son, gráficas, NIC</li>
  <li>Como facer un orzamento</li>
</ol>
<h4>Obxectivos</h4>
<ul>
  <li>Identificar e caracterizar os diferentes compoñentes que conforman fisicamente un microordenador hoxe en día.</li>
  <li>Manexar con habilidade os conceptos básicos relacionados co hardware informático.</li>
  <li>Coñecer diferentes alternativas tecnolóxicas para cada tipo de dispositivo.</li>
  <li>Detectar posibles incompatibilidades entre diferentes elementos de calquera dispositivo.</li>
  <li>Describir dispositivos de almacenamento masivo utilizados en sistemas de computadores, recoñecendo a súa importancia na custodia da información.</li>
  <li>Describir os tipos de memoria utilizados en computadores, analizando os parámetros que as definen e a súa achega ó rendemento do conxunto.</li>
  <li>Entender as características dun orzamento e aprender a realizalo.</li>
</ul>
<div class="box info"><div class="box-title">Nota</div><p>Os apuntamentos orixinais son un PDF en galego (45 páxinas) con texto rasterizado; o contido extraeuse por OCR e revisouse. As figuras do PDF inclúense nos apartados correspondentes.</p></div>`
  },

  /* ---------------- 1 ---------------- */
  {
    id: 'fh-ud3-1',
    tipo: 'tema',
    titulo: '1. Introdución',
    resumen: 'Un equipo consta de partes diferenciables e dependentes entre si: non vale un procesador rapidísimo sen RAM proporcionada, nin un equipo de altísimas prestacións para escribir unhas cartas. Hai que saber escoller as pezas: carcasa, fonte, placa base, refrixerador, procesador…',
    claves: ['Partes diferenciables e dependentes unhas doutras', 'Equilibrio: procesador ↔ memoria RAM', 'Axustar as prestacións ó uso real', 'Escoller cada peza: carcasa, fonte, placa base, refrixerador, procesador'],
    tags: ['introdución', 'montaxe', 'compoñentes', 'equilibrio'],
    contenido: `
<p>Cando nos enfrontamos á montaxe ou desmontaxe dun equipo informático debemos ter en conta que este consta de <strong>partes claramente diferenciables e dependentes unhas doutras</strong>. Así, non vale de nada ter un equipo cun procesador cunha velocidade enorme se non temos proporcionada a memoria RAM, ou un equipo de altísimas prestacións se o que queremos é escribir unhas poucas cartas ó mes.</p>
<p>Logo, é importante <strong>saber escoller as pezas</strong> que comporán o noso equipo, dende a carcasa ata o procesador pasando pola fonte de alimentación, placa base, refrixerador…</p>`
  },

  /* ---------------- 2 ---------------- */
  {
    id: 'fh-ud3-2',
    tipo: 'tema',
    titulo: '2. Carcasa',
    resumen: 'Estrutura metálica ou plástica que alberga e protexe os compoñentes internos (torre, gabinete, caixa, chasis). Determina a disposición mecánica e as posibilidades de ampliación. Compoñentes: chasis, cuberta, panel frontal, interruptores, baías, panel traseiro e, ás veces, ventiladores e fonte.',
    claves: ['Carcasa = estrutura que alberga e protexe os compoñentes internos', 'Sinónimos: torre, gabinete, caixa, chasis', 'Determina a disposición mecánica e a ampliación', 'Indicadores/controis: interruptor xeral, interruptor de chave, LED de control, LED de disco duro', 'Compoñentes: chasis, cuberta, panel frontal, baías, panel traseiro, ventiladores, fonte', 'Orientación: vertical (a máis común) ou horizontal/sobremesa'],
    tags: ['carcasa', 'torre', 'caixa', 'chasis', 'gabinete', 'LED', 'orientación'],
    links: ['fh-ud3-2-1', 'fh-ud3-2-2', 'fh-ud3-2-3', 'fh-ud3-2-4', 'fh-ud3-2-5', 'fh-ud3-2-6'],
    contenido: `
<p>Non está de máis dedicar un pouco de tempo a escoller a carcasa do ordenador, xa que é <strong>determinante na disposición mecánica</strong> de tódolos compoñentes internos e, por conseguinte, tamén nas <strong>posibilidades de ampliación</strong> que ten o equipo.</p>
<div class="box def"><div class="box-title">Carcasa</div><p>Estrutura metálica ou plástica que ten por función <strong>albergar e protexer os compoñentes internos</strong> do equipamento informático.</p></div>
<p>Existen diversos tipos de carcasas (tamén reciben o nome de <em>torre, gabinete, caixa ou chasis</em>), estandarizadas nas dimensións e compoñentes máis característicos, pero sen estar suxeitas a unha normativa xeral.</p>
<p>Habitualmente tódolos indicadores e elementos de control están situados na cara frontal; ademais pode ter un interruptor eléctrico na esquina superior dereita da cara posterior. Entre estes indicadores e controis soen estar:</p>
<ul>
  <li><strong>Interruptor xeral</strong>, normalmente na cara dianteira.</li>
  <li><strong>Interruptor de chave</strong>, para bloquear o ordenador e protexelo de accesos externos.</li>
  <li><strong>LED de control</strong>, indica o estado do ordenador (aceso ou apagado).</li>
  <li><strong>LED de disco duro</strong>, indica se o disco está traballando nese intre.</li>
</ul>
<p>Aínda que non tódalas carcasas son iguais, a maioría teñen os seguintes compoñentes: <strong>chasis, cuberta, panel frontal, interruptores, baías para unidades, panel traseiro</strong> (con aberturas para portos de E/S e tarxetas de expansión) e, nalgúns casos, <strong>ventiladores e fonte de alimentación</strong> como sistema de refrixeración.</p>
<div class="box info"><div class="box-title">Orientación</div>
<p>As carcasas pódense clasificar pola disposición da placa base:</p>
<ul>
  <li><strong>Vertical:</strong> a orientación máis común; a carcasa e a placa base están dispostas verticalmente, coas rañuras de expansión perpendiculares á placa base.</li>
  <li><strong>Horizontal ou sobremesa:</strong> anteriormente era o tipo máis común; hoxe aínda se ve nos PC de oficina. Ás veces son pouco ergonómicas, xa que serven como base para o monitor, elevando a súa altura excesivamente.</li>
</ul></div>
<figure class="small"><img src="apuntes/fh/img/ud3/carcasa-horizontal.png" alt="Carcasa horizontal de sobremesa" loading="lazy"><figcaption>Carcasa horizontal (sobremesa) e carcasa vertical.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-2-1',
    tipo: 'subtema',
    titulo: '2.1 O chasis',
    resumen: 'Esqueleto do ordenador: estrutura metálica (aluminio ou aceiro + plástico) que serve de soporte para montar as demais pezas. Debe ser ríxido e resistente porque os dispositivos non soportan a flexión.',
    claves: ['Esqueleto do ordenador', 'Aluminio ou combinación de aceiro e plástico', 'Ríxido e resistente: os dispositivos non soportan a flexión'],
    tags: ['chasis', 'esqueleto', 'aluminio', 'aceiro'],
    contenido: `
<p>O chasis é o <strong>esqueleto do ordenador</strong>, a estrutura metálica, xeralmente feita de aluminio ou unha combinación de aceiro e plástico, que serve de soporte para montar as outras pezas. Debe ser unha estrutura <strong>ríxida e resistente</strong> que non se poida dobrar porque a maioría dos dispositivos montados nel non poden soportar a flexión.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/chasis.png" alt="Chasis dunha carcasa aberta" loading="lazy"><figcaption><strong>Chasis.</strong> Estrutura interna sobre a que se montan os compoñentes.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-2-2',
    tipo: 'subtema',
    titulo: '2.2 A cuberta',
    resumen: 'Parte exterior da carcasa, unida ó chasis con parafusos (ou sistemas esvarantes/orificios). Materiais: aluminio, fibra de vidro, metacrilato, plástico… Retírase soltando os parafusos, deslizando e levantando.',
    claves: ['Parte exterior, únese ó chasis', 'Fixación: parafusos, sistemas esvarantes ou orificios', 'Materiais: aluminio, fibra de vidro, metacrilato, plástico', 'Retirar: 0 parafusos → 1 deslizar → 2 levantar'],
    tags: ['cuberta', 'tapa', 'parafusos', 'metacrilato'],
    contenido: `
<p>A cuberta forma a <strong>parte exterior</strong> da carcasa e únese ó chasis. A maioría dos ordenadores usan <strong>parafusos</strong> para fixar a cuberta ó chasis. Tamén hai sistemas de fixación esvarantes ou montados con orificios.</p>
<p>Pode estar feita de varios tipos de materiais, como aluminio, fibra de vidro, metacrilato, plástico…</p>
<figure class="small"><img src="apuntes/fh/img/ud3/retirar-cuberta.png" alt="Pasos para retirar a cuberta" loading="lazy"><figcaption><strong>Forma habitual de retirar a cuberta:</strong> retiramos os parafusos, deslizamos a cuberta (1) e levantámola (2).</figcaption></figure>`
  },
  {
    id: 'fh-ud3-2-3',
    tipo: 'subtema',
    titulo: '2.3 O panel frontal',
    resumen: 'Parte frontal, normalmente de plástico, con LED de acendido e de actividade dos discos, botóns de acendido e reinicio e conectores USB. Conéctase á placa base a través do chasis.',
    claves: ['Plástico ou similar', 'LED de acendido + LED de acceso a discos', 'Botóns de acendido e reinicio', 'Conectores USB frontais', 'Cables do panel frontal cara á placa base'],
    tags: ['panel frontal', 'LED', 'botón de acendido', 'reset', 'USB'],
    contenido: `
<p>O panel frontal é a parte frontal da carcasa, normalmente feita de <strong>plástico</strong> ou similar. Ten indicadores ou <strong>LED</strong> que amosan o estado do computador: normalmente un LED de acendido e outro que indica as operacións de acceso ós discos duros. Tamén ten <strong>botóns de acendido e reinicio</strong>, e <strong>conectores USB</strong>.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/conexions-panel-frontal.png" alt="Cables do panel frontal a través do chasis" loading="lazy"><figcaption><strong>Conexións do panel frontal</strong> a través do chasis cara á placa base.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-2-4',
    tipo: 'subtema',
    titulo: '2.4 O panel traseiro',
    resumen: 'Onde se atopan os portos/conectores para os dispositivos externos. A placa traseira (backplate) proporciónaa o fabricante da placa base, porque o número e disposición dos portos varía segundo o modelo.',
    claves: ['Portos ou conectores para dispositivos externos', 'Backplate (placa traseira) fornecida polo fabricante da placa base', 'Número e disposición dos portos varían por modelo'],
    tags: ['panel traseiro', 'backplate', 'portos', 'E/S'],
    contenido: `
<p>É onde se atopan os <strong>portos ou conectores para os dispositivos externos</strong>. Esta placa é proporcionada polo <strong>fabricante da placa base</strong>, xa que o número de portos e a súa disposición varían segundo o modelo.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/backplate.png" alt="Placas traseiras (backplates)" loading="lazy"><figcaption><strong>Placa traseira (backplate).</strong> Cada placa base trae a súa, coas aberturas para os seus portos.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-2-5',
    tipo: 'subtema',
    titulo: '2.5 Baías para unidades',
    resumen: 'Espazos para aloxar unidades de almacenamento (disquete, disco duro, CD-ROM, DVD). Internas: sen acceso dende fóra (discos duros). Externas: accesibles dende o exterior (disquete, CD, DVD, baías extraíbles, dock station).',
    claves: ['Espazos para unidades de almacenamento', 'Internas: completamente dentro, sen acceso exterior (discos duros)', 'Externas: accesibles dende fóra (disquete, CD-ROM, DVD)', 'Baía extraíble / dock station integrada para discos de 3,5" ou 2,5" en quente'],
    tags: ['baías', 'unidades', 'internas', 'externas', 'dock station', 'hot swap'],
    contenido: `
<p>As baías para unidades son <strong>espazos para aloxar unidades de almacenamento</strong>. Úsanse para montar unidades de disquete, discos duros, CD-ROM ou DVD. Pódense clasificar en dous tipos:</p>
<ul>
  <li><strong>Internas:</strong> están completamente dentro da carcasa e non se pode acceder a elas dende o exterior. Úsanse para dispositivos ós que non se accede dende fóra, como os discos duros.</li>
  <li><strong>Externas:</strong> están internas na carcasa e no chasis, pero pódese acceder a elas dende o exterior. Normalmente úsanse para unidades de disquete, CD-ROM e DVD.</li>
</ul>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/baia-extraible.png" alt="Baía extraíble para disco duro" loading="lazy"><figcaption><strong>Baía extraíble.</strong></figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/dock-station.png" alt="Carcasa con dock station superior" loading="lazy"><figcaption><strong>Baía integrada / dock station.</strong> A baía de acoplamento na parte superior facilita a inserción de discos de 3,5" ou 2,5"; permite controlar o acceso e a transferencia de datos sobre a marcha sen instalar fisicamente os discos nin engadir un dock externo.</figcaption></figure>
</div>`
  },
  {
    id: 'fh-ud3-2-6',
    tipo: 'subtema',
    titulo: '2.6 Tipos de carcasas',
    resumen: 'Clasificación por tamaño segundo a placa base que admiten: sobremesa (horizontal, monitor enriba), torre (microtorre 25-32 cm, minitorre 32-37, semitorre 37-45, torre 45-55, gran torre 55-72), servidor, cubo/miniPC (mini-ITX, SFF), barebone (plataforma semiensamblada) e rack.',
    claves: ['Sobremesa: placa horizontal, tarxetas en vertical, 1×3,5" + 1-2×5,25"', 'Microtorre 25–32 cm (microATX/flex-ATX) · Minitorre 32–37 cm · Semitorre 37–45 cm (as máis usadas, ata 6 baías) · Torre 45–55 cm (≥6 baías) · Gran torre 55–72 cm (8 baías externas, servidores de gama baixa)', 'Torre: placa vertical, tarxetas horizontais; a mellor para ampliar', 'Servidor: máis anchas, luces de monitorización, portas con pechadura, discos en quente, fontes redundantes', 'Cubo/miniPC: mini-ITX ou SFF, deseño libre, silenciosos, caros (>200 €), poucas baías externas', 'Barebone: plataforma semiensamblada (carcasa + placa base + refrixeración); compacto e silencioso', 'Rack: servidores en armarios rack (CPD, industria)'],
    tags: ['tipos de carcasas', 'sobremesa', 'torre', 'semitorre', 'minitorre', 'gran torre', 'servidor', 'cubo', 'miniPC', 'barebone', 'rack', 'SFF', 'mini-ITX'],
    contenido: `
<p>A clasificación adoita facerse por <strong>tamaño</strong>, dependendo da placa base que admiten:</p>
<figure><img src="apuntes/fh/img/ud3/tipos-carcasas.png" alt="Carcasas de distintos tamaños" loading="lazy"><figcaption><strong>Tipos de carcasas</strong> (de menor a maior): mini/slim, sobremesa, microtorre, minitorre, semitorre, torre, gran torre, servidor, rack.</figcaption></figure>
<h4>Sobremesa</h4>
<p>É a caixa tradicional, con espazo para unha unidade de 3,5" e unha ou dúas de 5,25". A placa base vai montada en <strong>horizontal</strong>, polo que as tarxetas se montan en vertical. Normalmente pónselle o monitor enriba, para que ocupe menos, o que pode ser un problema ergonómico. ATX ou BTX son factores de forma de Intel que usamos nos ordenadores de sobremesa, e por iso son tan semellantes.</p>
<h4>Torre</h4>
<p>Se se prevé <strong>ampliar</strong> o equipo, é a mellor alternativa. Ó dispor de máis espazo permite dispor os dispositivos con maior claridade e montalos e desmontalos máis facilmente. A placa base móntase en <strong>vertical</strong> e as tarxetas colócanse horizontalmente. Presentan tres ou catro baías de 5,25" e unha ou dúas de 3,5". Segundo o tamaño divídense en:</p>
<table>
<tr><th>Tipo</th><th>Altura</th><th>Baías</th><th>Placas base</th></tr>
<tr><td>Microtorre</td><td>25–32 cm</td><td>1–3 externas, 1–2 internas</td><td>microATX, flex-ATX</td></tr>
<tr><td>Minitorre</td><td>32–37 cm</td><td>3 externas, 1–2 internas</td><td>ATX, microATX, flex-ATX</td></tr>
<tr><td>Semitorre</td><td>37–45 cm</td><td>ata 6</td><td>Tódolos formatos (as máis empregadas)</td></tr>
<tr><td>Torre</td><td>45–55 cm</td><td>polo menos 6</td><td>Todo tipo; boa ventilación</td></tr>
<tr><td>Gran torre</td><td>55–72 cm</td><td>8 externas</td><td>Servidores de gama baixa (ventilación e expansión)</td></tr>
</table>
<figure class="small"><img src="apuntes/fh/img/ud3/torre.png" alt="Carcasa torre" loading="lazy"><figcaption>Carcasa tipo torre con ventilación frontal.</figcaption></figure>
<h4>Servidor</h4>
<p>Úsase en instalacións de servidores ou almacenamento. Adoitan ser <strong>máis anchas</strong>, con luces adicionais para a monitorización de discos ou portas de acceso con pechadura. Teñen moitas baías internas e externas, sistemas como <strong>discos en quente</strong> e orificios de ventilación adicionais. A maioría permiten placas de servidor máis grandes ou <strong>fontes de alimentación redundantes</strong>.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/servidor.png" alt="Carcasa de servidor con baías en quente" loading="lazy"><figcaption>Carcasa de servidor con portas de acceso ás unidades.</figcaption></figure>
<h4>Cubos (miniPC)</h4>
<p>O cubo dispón de liberdade de deseño, o que fixo que crecese rapidamente. Úsanse para factores de forma pequenos como <strong>mini-ITX</strong> ou <strong>SFF</strong> (<em>Small Form Factor</em>), que cumpren poucas indicacións dos estándares de Intel. Podemos atopalos cos sistemas de refrixeración máis extravagantes: pasaron de ser meros ordenadores pequenos a máquinas sen límites de prestacións: pequenos, lixeiros, fiables e moi silenciosos. Tenden a ser <em>descapotables</em> (un eixe permite levantar o frontal para traballar). Desvantaxes: <strong>alto prezo</strong> (é doado que superen os 200 €) e poucas ou ningunha baía externa.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/cubo-minipc.png" alt="Ordenador en formato cubo" loading="lazy"><figcaption>Ordenador en formato cubo (miniPC).</figcaption></figure>
<h4>Barebone</h4>
<p>Non tódolos cubos son barebones nin viceversa; é un <strong>formato comercial</strong>: unha plataforma <strong>semiensamblada</strong> (carcasa en forma de cubo cunha placa base e un sistema de refrixeración sofisticado). Non se poden ensamblar os compoñentes dun xeito convencional; o comprador decídese máis polo deseño que pola ampliación, restrinxida pola placa base inicial. Vantaxes: moi compacto e silencioso. Barebone é unha forma pouco precisa de definir un miniPC en formato cubo.</p>
<h4>Rack</h4>
<p>Úsase para montar servidores en <strong>armarios rack</strong> en instalacións industriais, centros de procesamento de datos…</p>
<figure class="small"><img src="apuntes/fh/img/ud3/rack-nas.png" alt="Carcasa rack/NAS con baías extraíbles" loading="lazy"><figcaption>Carcasa para rack con baías de disco extraíbles.</figcaption></figure>`
  },
