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

  /* ---------------- 3 ---------------- */
  {
    id: 'fh-ud3-3',
    tipo: 'tema',
    titulo: '3. Fonte de alimentación',
    resumen: 'Converte a corrente alterna da rede en continua a 3,3, 5 e 12 V para a placa base e os dispositivos. Caixa metálica con ventilador e cableado de cores estandarizado. Potencias de 180 a 2000 W (as máis vendidas 500–850 W). Achega estabilidade, determina a expansión, inflúe na refrixeración e no consumo (Energy Star).',
    claves: ['CA da rede → CC a 3,3 / 5 / 12 V', 'Caixa metálica rectangular con ventilador e cableado de cores estandarizado', 'Mercado: 180–2000 W · máis vendidas 500–850 W · habituais 350–500 W', 'Debe cubrir os compoñentes actuais e futuros ampliacións', 'Servidores: dúas fontes (redundancia, tensión máis estable)', 'Papel: estabilidade · expansión (W e conectores) · refrixeración · consumo (Energy Star)', 'Cables externos: AK-5012 (Schuko → IEC320-C13), AK-50242 (Schuko → C5 trevo), AK-5030 (C13 ↔ C14)'],
    tags: ['fonte de alimentación', 'PSU', 'voltios', 'watts', 'corrente alterna', 'corrente continua', 'Energy Star', 'IEC320', 'Schuko'],
    links: ['fh-ud3-3-1', 'fh-ud3-3-2', 'fh-ud3-3-3', 'fh-ud3-3-4', 'fh-ud3-3-5', 'fh-ud3-3-6', 'fh-ud3-3-7', 'fh-ud3-3-8', 'fh-ud3-3-9', 'fh-ud3-3-10', 'fh-ud3-3-11'],
    contenido: `
<p>A enerxía subminístraselle á placa base a través das <strong>fontes de alimentación</strong>, que fornecen <strong>3,3, 5 ou 12 voltios</strong> á placa dependendo do dispositivo que a use.</p>
<p>Está situada dentro da carcasa; é unha <strong>caixa metálica rectangular equipada cun ventilador</strong>. Dela sae cableado de diferentes cores que permite alimentar os dispositivos da carcasa; estes conectores están <strong>estandarizados</strong>. Unha fonte debe proporcionar suficiente enerxía tanto para os compoñentes instalados como para permitir engadir compoñentes futuros.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/fonte-alimentacion.png" alt="Fonte de alimentación ATX co seu cableado" loading="lazy"><figcaption><strong>Fonte de alimentación.</strong> Algunhas carcasas inclúen unha, pero non forma parte da carcasa. O seu propósito é converter a corrente alterna da rede en corrente continua que o ordenador pode usar. Á beira do conector de alimentación pode haber un interruptor.</figcaption></figure>
<p>As fontes do mercado oscilan entre os <strong>180 W e os 2000 W</strong> (moi pouco común). As máis vendidas oscilan entre os <strong>500 W e os 850 W</strong> e aplícanse á maioría dos PC, de gama baixa, media ou alta. Se a fonte non ten potencia suficiente (o normal é 350–500 W) para tódolos compoñentes, o equipo dará problemas.</p>
<p>En ordenadores de tipo <strong>servidor</strong>, que funcionan de forma permanente, sóense pór <strong>dúas fontes</strong> para que a tensión sexa máis estable e regular.</p>
<h4>Papel no sistema informático</h4>
<ul>
  <li><strong>Estabilidade:</strong> unha fonte de alta calidade con potencia suficiente é unha garantía; unha sobrecargada e de baixa calidade causa problemas difíciles de detectar (funcionamento incorrecto, discos con sectores defectuosos…).</li>
  <li><strong>Posibilidades de expansión:</strong> a súa potencia en watts e o número de conectores (placa base 20/24 pins; Molex 4 pins, mini-Molex Berg, SATA 15 pins) determinan a ampliación.</li>
  <li><strong>Refrixeración:</strong> o seu tamaño e ventilador inflúen no sistema de refrixeración.</li>
  <li><strong>Consumo de enerxía:</strong> hoxe inclúen consumo intelixente asociado á actividade; case todas cumpren <strong>Energy Star</strong>, que identifica os produtos enerxeticamente eficientes.</li>
</ul>
<div class="box info"><div class="box-title">Cables de alimentación externos</div>
<ul>
  <li><strong>AK-5012:</strong> conecta un monitor, un ordenador ou outro dispositivo á rede. Schuko macho ↔ IEC320-C13 femia.</li>
  <li><strong>AK-50242:</strong> conecta portátiles, fontes externas e transformadores. Schuko macho ↔ IEC320-C5 femia (forma de trevo).</li>
  <li><strong>AK-5030:</strong> conecta a saída da fonte á entrada dun monitor. IEC320-C13 ↔ IEC320-C14.</li>
</ul>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/cable-ak5012.png" alt="Cable AK-5012" loading="lazy"><figcaption>AK-5012 (Schuko → C13)</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/cable-ak50242.png" alt="Cable AK-50242" loading="lazy"><figcaption>AK-50242 (Schuko → C5 trevo)</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/cable-ak5030.png" alt="Cable AK-5030" loading="lazy"><figcaption>AK-5030 (C13 ↔ C14)</figcaption></figure>
</div></div>
<div class="box warn"><div class="box-title">Sobretensión</div><p>Un compoñente no que nunca debes escatimar é a fonte de alimentación: non só subministra enerxía, senón que actúa como <strong>dispositivo de protección</strong> para que ningún compoñente reciba máis electricidade da que necesita. Protexe todo o hardware de sobretensións e caídas transitorias debidas a cortes de enerxía ou incidencias da rede eléctrica.</p></div>
<div class="box tip"><div class="box-title">Capacidade recomendada</div><p>Recoméndase que a capacidade da fonte sexa polo menos o <strong>dobre do consumo estimado</strong> do ordenador: así funcionará a unha carga do <strong>40–60 %</strong>, o rango onde é máis eficiente e as perdas por calor son menores. Levar ó límite os requisitos pode acabar custando moito máis que unha solución de calidade dende o principio.</p></div>`
  },
  {
    id: 'fh-ud3-3-1',
    tipo: 'subtema',
    titulo: '3.1 Clasificación segundo o seu cableado',
    resumen: 'Semimodular: certos cables fixos (ATX + CPU) e conexións modulares opcionais (SATA, PCIe). Modular: tódalas conexións son modulares, só se usan as necesarias.',
    claves: ['Semimodular: cables fixos vitais + modulares opcionais (SATA, PCIe)', 'Modular: todos os cables desconectables; varios cables na caixa', '(Non modular ou cableada: todos fixos, as máis baratas)'],
    tags: ['modular', 'semimodular', 'cableado', 'cables'],
    contenido: `
<p>Poden ser de dous tipos:</p>
<ul>
  <li><strong>Semimodular:</strong> fontes que inclúen certos <strong>cables fixos</strong>, pero que ofrecen a opción de usar conexións modulares opcionais, especialmente <strong>SATA e PCIe</strong>.</li>
  <li><strong>Modular:</strong> <strong>tódalas conexións son modulares</strong>, o que permite usar só as que necesitas; para iso terás varios cables na caixa da fonte.</li>
</ul>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/fonte-modular.png" alt="Panel de conectores dunha fonte modular" loading="lazy"><figcaption><strong>Fonte modular.</strong></figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/fonte-semimodular.png" alt="Fonte semimodular con cables fixos" loading="lazy"><figcaption><strong>Fonte semimodular.</strong></figcaption></figure>
</div>`
  },
  {
    id: 'fh-ud3-3-2',
    tipo: 'subtema',
    titulo: '3.2 Clasificación segundo a súa refrixeración',
    resumen: 'Activas: as máis comúns, con ventilador para expulsar a calor. Pasivas: arrefrían por convección, sen ventilador, moi silenciosas; só recomendables con boa ventilación na caixa.',
    claves: ['Activas: ventilador (as máis comúns)', 'Pasivas: convección, sen ventilador, silenciosas', 'Pasivas só con ventilación axeitada do PC: risco de sobrequentamento'],
    tags: ['refrixeración', 'activa', 'pasiva', 'ventilador', 'convección'],
    contenido: `
<p>Poden ser de dous tipos:</p>
<ul>
  <li><strong>Activas:</strong> as máis comúns, veñen equipadas cun <strong>ventilador</strong> para expulsar a calor.</li>
  <li><strong>Pasivas:</strong> arrefríanse por <strong>convección</strong>, non teñen ventilador e son moi silenciosas. Só son recomendables se o PC ten unha ventilación axeitada, xa que a fonte podería sobrequentarse durante procesos moi esixentes.</li>
</ul>`
  },
  {
    id: 'fh-ud3-3-3',
    tipo: 'subtema',
    titulo: '3.3 Propósito do factor de forma dunha fonte',
    resumen: 'Un factor de forma define dimensións e puntos de montaxe para caixas concretas. Ter varios factores estandarizados evita fontes propietarias caras e permite cubrir necesidades distintas. Non confundir o estándar ATX (comportamento eléctrico, controlado por Intel) co factor de forma ATX (dimensións).',
    claves: ['Factor de forma = dimensións definidas + puntos de montaxe', 'Sen estándares: fontes propietarias, caras e de calidade dubidosa', 'Un só factor tampouco serviría: necesidades distintas (SFF vs alta potencia)', 'Estándar ATX (eléctrico: voltaxes, proteccións; controlado por Intel) ≠ factor de forma ATX (dimensións)'],
    tags: ['factor de forma', 'ATX', 'estándar', 'Intel', 'dimensións'],
    contenido: `
<p>Cando unha fonte ten un factor de forma específico, significa que ten <strong>dimensións definidas e puntos de montaxe específicos</strong> para caixas de PC concretas.</p>
<p>A existencia de factores de forma sólidos e definidos é realmente positiva. Imaxina un mercado onde cada chasis usa a súa propia fonte: limitaría a usar caixas con fontes incluídas e substitucións exclusivas e caras, ou obrigaría a mercar fontes específicas do fabricante que poderían non ser de boa calidade. Un desastre.</p>
<p>Por outra banda, se só houbese un factor de forma tamén sería desastroso: non todos teñen as mesmas necesidades. Unha fonte de chasis normal/grande permite modelos de maior potencia con menos problemas de refrixeración, pero non lle atraerá a alguén que constrúa un sistema pequeno de menos de 600 W.</p>
<div class="box warn"><div class="box-title">Estándar ATX vs factor de forma ATX</div><p>A maioría das fontes, especialmente as de uso doméstico, empregan o estándar ATX. Cómpre distinguir o <strong>estándar ATX</strong> (normas de <em>comportamento eléctrico</em>: como se debe alimentar, que voltaxes, que proteccións debe incluír…) do <strong>factor de forma ATX</strong> (<em>dimensións</em> definidas). Curiosamente, este estándar está totalmente desenvolvido e controlado por <strong>Intel</strong>.</p></div>`
  },
  {
    id: 'fh-ud3-3-4',
    tipo: 'subtema',
    titulo: '3.4 O factor de forma nas fontes de alimentación',
    resumen: 'ATX (PS/2: 150×140×86 mm, obrigatorios 150 de ancho e 86 de alto; ata >2000 W). SFX (125×100×63,5 mm; SFX-L 125×130×63,5; para SFF; máximo 600–800 W, menos oferta, máis caras). TFX (85×175×65 mm, carcasas slim, ≤400 W). Comprobar compatibilidade nas follas de especificacións.',
    claves: ['ATX PS/2: 150×140×86 mm (ancho×fondo×alto) · PS/3 máis curta 150×100×86', 'ATX: obrigatorios 150 mm ancho e 86 mm alto; fondo 140–160 (≤750 W), 180–200 (moi alta capacidade)', 'SFX: 125×100×63,5 mm · SFX-L 125×130×63,5 (ventilador maior) · para SFF', 'SFX: máx. 600–700 W (800 SFX-L), pouca oferta, máis caras → ATX superior en son, refrixeración, prezo, potencia', 'Adaptador SFX/ATX para montar SFX en caixas ATX', 'TFX: 85×175×65 mm, alongado, carcasas slim, ≤400 W', 'Compatibilidade: follas de especificacións; medir e comparar; evitar conectores propietarios'],
    tags: ['ATX', 'SFX', 'SFX-L', 'TFX', 'PS/2', 'PS/3', 'SFF', 'factor de forma', 'dimensións', 'overclocking'],
    contenido: `
<p>Os tipos de fontes que podemos atopar ó abrir un PC dependen do factor de forma do dispositivo e de se é un clon ou dunha marca propietaria. É unha das características máis importantes ó mercar equipos, xa que as <strong>incompatibilidades</strong> poden causar problemas graves.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/comparativa-sfx-atx-tfx.png" alt="Comparativa de tamaño SFX, ATX e TFX" loading="lazy"><figcaption><strong>Comparativa de tamaño</strong> SFX / ATX / TFX.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/fontes-atx-tfx-sfx.png" alt="Fontes ATX, TFX e SFX" loading="lazy"><figcaption>Fontes ATX, TFX e SFX.</figcaption></figure>
</div>
<h4>ATX</h4>
<p>As fontes ATX úsanse na maioría dos ordenadores actuais, evolucionando coas novas incorporacións de conectores. <strong>ATX PS/2</strong>, o máis común, mide <strong>150×140×86 mm</strong> (ancho × fondo × altura), aínda que as de maior potencia poden ser máis longas; a variante <strong>ATX PS/3</strong> é máis curta (150×100×86 mm). As dimensións obrigatorias son <strong>150 mm de ancho e 86 mm de alto</strong>; a profundidade depende do modelo: ata 650–750 W miden 140–160 mm, as de moi alta capacidade 180–200 mm, aínda que hai un impulso por ofrecer fondos compactos.</p>
<h4>SFX</h4>
<p>O segundo formato máis empregado, o máis común nos PC ultracompactos ou <strong>Small Form Factor (SFF)</strong>: mide <strong>125×100×63,5 mm</strong>, con variantes como a <strong>SFX-L</strong> (125×130×63,5 mm) que permite ventiladores de maior diámetro con mellor sonoridade e ventilación. Abarrotar gran potencia nun espazo pequeno require máis traballo de refrixeración e deseño (cada milímetro importa). Consecuencias:</p>
<ul>
  <li>Potencias máximas de <strong>600–700 W</strong> (ata 800 W con SFX-L), lonxe dos máis de 2000 W de ATX.</li>
  <li>Deseño máis difícil e mercado máis pequeno → <strong>dispoñibilidade limitada</strong>.</li>
  <li>Unha SFX <strong>custa máis</strong> que unha ATX de capacidade similar.</li>
</ul>
<p>Conclusión: con fontes de boa calidade, o formato ATX é superior en calidade de son, refrixeración, prezo, potencia e probablemente durabilidade.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/adaptador-sfx-atx.png" alt="Adaptador SFX a ATX" loading="lazy"><figcaption><strong>Adaptador SFX/ATX.</strong> As fontes SFX/SFX-L pódense montar en caixas ATX mediante un soporte; algunhas fontes xa o inclúen.</figcaption></figure>
<h4>TFX</h4>
<p>Factor de forma <strong>extremadamente raro</strong> no mercado de compoñentes, con algo máis de presenza en sistemas prefabricados. Fisicamente moi alongado (<strong>85×175×65 mm</strong>), deseñado para ordenadores de dimensións reducidas, especialmente carcasas tipo <strong>slim</strong>. Nalgúns casos teñen 5 mm adicionais de altura no lado do ventilador. As limitacións de potencia, dispoñibilidade e prezo son aínda maiores: a TFX máis potente de consumo non supera os <strong>400 W</strong>.</p>
<div class="box tip"><div class="box-title">Como comprobar que formato de fonte é compatible co meu PC</div>
<ul>
  <li><strong>Caixa e fonte escollidas por pezas:</strong> nas follas de especificacións de cada compoñente vese o formato da fonte e os compatibles coa caixa.</li>
  <li><strong>Sistema preconstruído:</strong> igual, consultar as follas de especificacións.</li>
  <li><strong>Sen información do modelo de PC/carcasa/PSU:</strong> debe haber unha etiqueta nalgún lugar; como moito, medir, comparar con factores de forma estándar e mirar os soportes de montaxe con fotos de internet. Asegurarse de que <strong>non haxa conectores propietarios</strong>.</li>
</ul></div>
<div class="box info"><div class="box-title">Overclocking</div><p>Para aumentar as frecuencias do procesador ou da GPU hai que asegurarse de que a fonte proporcione a <strong>máxima estabilidade a 12 V</strong>. Canto máis estable sexa a tensión, menos probable será que o overclocking sexa inestable. Subir lixeiramente a tensión non dá problema; levar o sistema ó límite, si.</p></div>
<figure class="small"><img src="apuntes/fh/img/ud3/overclocking.png" alt="Ilustración de overclocking" loading="lazy"><figcaption>O overclocking esixe unha fonte estable.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-3-5',
    tipo: 'subtema',
    titulo: '3.5 Formatos para servidores e PC premontados',
    resumen: 'Flex ATX (81,5×150×40,5 mm; barebones e mini-ITX; ≤250 W; ventiladores de 4 cm ruidosos). Rack 1U (100×40,5 mm) e 2U (100×70 mm), U = 44,5 mm; fontes redundantes comúns. Outros formatos de fabricante (Shuttle) e formato personalizado (o máis usado en servidores).',
    claves: ['Flex ATX: 81,5×150×40,5 mm · barebones, caixas mini-ITX · moi baixa capacidade (~250 W) · ventiladores de 4 cm', '"Factor de forma mini-ITX" non existe para fontes', 'U (unidade de rack) = 44,50 mm', '1U: 100 mm ancho × 40,5 mm alto · 2U: 100 × 70 mm · fondo variable, altura fixa', '1U comparte altura con Flex ATX pero é máis estreito', 'Fontes redundantes: 1U divididas en horizontal, 2U en vertical/horizontal', 'Formatos de empresa (Shuttle) e formato personalizado (servidores)'],
    tags: ['Flex ATX', 'rack', '1U', '2U', 'servidor', 'redundante', 'Shuttle', 'personalizado'],
    contenido: `
<p>Existen outros formatos empregados principalmente en servidores e en certos sistemas premontados; son os menos habituais no mercado doméstico.</p>
<h4>Flex ATX</h4>
<p>Úsase principalmente en sistemas premontados como certos <strong>barebones</strong> ou caixas de placas base <strong>mini-ITX</strong> (ás veces chámaselle erroneamente "factor de forma mini-ITX", que en realidade non existe). Dimensións comúns: <strong>81,5×150×40,5 mm</strong>, con profundidade variable. Só se usa en modelos de moi baixa capacidade (~250 W) e require ventiladores de <strong>4 cm</strong>, que moven pouco aire e fan moito ruído.</p>
<h4>Montaxe en rack: 1U, 2U…</h4>
<p>Deseñados unicamente para <strong>rack</strong>, a carcasa dos servidores. <strong>U</strong> refírese á <em>unidade de rack</em>, equivalente a <strong>44,50 mm</strong>. As fontes adoitan ser de 1U ou 2U e encaixan en carcasas da mesma altura:</p>
<table>
<tr><th>Formato</th><th>Ancho</th><th>Alto</th><th>Fondo</th></tr>
<tr><td>1U</td><td>100 mm</td><td>40,5 mm</td><td>variable</td></tr>
<tr><td>2U</td><td>100 mm</td><td>70 mm</td><td>variable</td></tr>
</table>
<p>1U comparte a altura de Flex ATX, pero este é máis estreito, polo que non son o mesmo factor de forma. A lonxitude pode variar; <strong>a altura sempre se mantén</strong>. Neste tipo de equipos as <strong>fontes redundantes</strong> son moi comúns: en 1U divídense horizontalmente en dúas e en 2U vertical/horizontalmente.</p>
<h4>Outros formatos</h4>
<p>Hai formatos de empresas específicas, como os barebones <strong>Shuttle</strong>: para cambialos hai que buscar especificacións desas empresas ou facer bricolaxe.</p>
<h4>Formato personalizado</h4>
<p>É o formato máis empregado nos servidores… mellor dito, non é un formato que exista como tal: tamaños, formas e sistemas de montaxe completamente <strong>personalizados</strong> que varían dunha fonte a outra.</p>`
  },
  {
    id: 'fh-ud3-3-6',
    tipo: 'subtema',
    titulo: '3.6 Eficiencia enerxética: PFC e 80 PLUS',
    resumen: 'Factor de potencia = relación entre a potencia real da toma e a que a fonte pode usar (ideal 1). Sen PFC ≈ 0,65. PFC pasivo (indutores/condensadores) ≈ 0,85. PFC activo (circuítos con MOSFET, obrigatorio na UE dende 2001) ≈ 0,99. Certificación 80 PLUS: eficiencia ≥80 % ó 10/20/50/100 % de carga, factor ≥0,9; niveis Standard, Bronze, Silver, Gold, Platinum, Titanium, Ruby.',
    claves: ['Factor de potencia: potencia real subministrada / potencia que a fonte pode usar; ideal = 1', 'A corrente non é unha sinusoide perfecta: picos corrixidos nos transformadores internos', 'Sen PFC: 0,65 → a toma debe dar un 35 % máis', 'PFC pasivo: indutores e condensadores, económico, ata ~0,85', 'PFC activo: circuítos integrados con MOSFET, obrigatorio na UE dende 2001, ~0,99', 'Coñecer o PFC: documentación do fabricante ou certificación enerxética', '80 PLUS: eficiencia ≥ 80 % ó 10, 20, 50 e 100 % de carga con factor de potencia ≥ 0,9', 'Sete niveis: Standard → Bronze → Silver → Gold → Platinum → Titanium → Ruby', 'Sen certificación: mellor esquecerse dela'],
    tags: ['eficiencia', 'PFC', 'factor de potencia', '80 PLUS', 'Bronze', 'Gold', 'Platinum', 'Titanium', 'Ruby', 'MOSFET'],
    contenido: `
<div class="box def"><div class="box-title">Factor de potencia</div><p>Relación entre a <strong>potencia real subministrada pola toma de corrente</strong> e a <strong>potencia que a fonte é capaz de usar</strong>. Nun circuíto ideal sería 1: toda a tensión e corrente da toma poderían ser utilizadas. Adoita ser un decimal entre 0 e 1.</p></div>
<p>A corrente eléctrica non viaxa polos cables formando unha onda sinusoidal perfecta, senón con pequenos picos de tensión, que se corrixen nos transformadores internos da fonte para crear a corrente continua que requiren os compoñentes.</p>
<h4>Tipos de corrección do factor de potencia (PFC)</h4>
<p>Se o PFC non está regulado, o factor de potencia resultante adoita ser de <strong>0,65</strong>: só se usa o 65 % da potencia subministrada, ou dito doutro xeito, a toma debe subministrar un 35 % máis da que solicita a fonte. Resólvese de dúas maneiras:</p>
<ul>
  <li><strong>PFC pasivo:</strong> emprega <strong>indutores e condensadores</strong>. Moi económico, pero non resolve o problema por completo: corrección máxima arredor de <strong>0,85</strong>.</li>
  <li><strong>PFC activo:</strong> <strong>obrigatorio na Unión Europea dende 2001</strong>. A corrección realízase mediante circuítos integrados con <strong>MOSFET</strong>. Factor de potencia resultante <strong>0,99</strong>: case toda a enerxía entrante se transforma en útil.</li>
</ul>
<p>Incluír un dos dous tipos de PFC é esencial: non tería sentido ser altamente eficiente na saída se a fonte consome moita máis enerxía da necesaria na entrada. A combinación de PFC e eficiencia interna fai que as fontes actuais consuman moito menos que as de hai 10 anos.</p>
<h4>Que PFC ten unha fonte?</h4>
<p>O máis sinxelo é acceder á <strong>documentación do fabricante</strong>. Se non o amosa, podemos descubrilo pola súa <strong>certificación enerxética</strong>: as fontes usan o PFC para aumentar a eficiencia, o que está asociado á certificación <strong>80 PLUS</strong>.</p>
<div class="box def"><div class="box-title">Programa de certificación 80 PLUS</div><p>Programa de especificación de rendemento e certificación para fontes internas (PSU). Require que as fontes de ordenadores e servidores teñan unha <strong>eficiencia do 80 % ou superior ó 10 %, 20 %, 50 % e 100 % da carga nominal</strong> cun factor de potencia real de <strong>0,9 ou superior</strong>. Ofrece <strong>sete niveis</strong> con eficiencias crecentes, dende Standard ata Ruby.</p></div>
<figure><img src="apuntes/fh/img/ud3/niveis-80plus.png" alt="Logos dos niveis 80 PLUS" loading="lazy"><figcaption>Niveis 80 PLUS: Standard, Bronze, Silver, Gold, Platinum, Titanium e Ruby.</figcaption></figure>
<table>
<tr><th>Nivel (230 V EU interna non redundante)</th><th>10 %</th><th>20 %</th><th>50 %</th><th>100 %</th></tr>
<tr><td>80 PLUS</td><td>—</td><td>82 %</td><td>85 %</td><td>82 %</td></tr>
<tr><td>80 PLUS Bronze</td><td>—</td><td>85 %</td><td>88 %</td><td>85 %</td></tr>
<tr><td>80 PLUS Silver</td><td>—</td><td>87 %</td><td>90 %</td><td>87 %</td></tr>
<tr><td>80 PLUS Gold</td><td>—</td><td>90 %</td><td>92 %</td><td>89 %</td></tr>
<tr><td>80 PLUS Platinum</td><td>—</td><td>92 %</td><td>94 %</td><td>90 %</td></tr>
<tr><td>80 PLUS Titanium</td><td>90 %</td><td>94 %</td><td>96 %</td><td>94 %</td></tr>
<tr><td>80 PLUS Ruby</td><td>—</td><td>—</td><td>≈96,5 %</td><td>—</td></tr>
</table>
<figure><img src="apuntes/fh/img/ud3/tabla-80plus.png" alt="Táboa oficial de eficiencias 80 PLUS" loading="lazy"><figcaption>Táboa oficial de requisitos 80 PLUS (230 V EU interna non redundante e redundante).</figcaption></figure>
<div class="box warn"><div class="box-title">Sen certificación?</div><p>Se a fonte non inclúe ningún tipo de certificación, o mellor é esquecerse dela por completo e mercar outro modelo que a teña, sempre que non esteas disposto a malgastar enerxía.</p></div>`
  },
  {
    id: 'fh-ud3-3-7',
    tipo: 'subtema',
    titulo: '3.7 Conectores',
    resumen: 'O estándar ATX (Advanced Technology Extended) controla o tamaño dos compoñentes e as súas conexións. Conectores internos: ATX 24 pins (principal, raís 3,3/5/12 V, antes 20 → 20+4), ATX 12 V (4 ou 8 pins EPS, só 12 V para a CPU), Molex 4 pins (5 e 12 V, >100 W, periféricos antigos), SATA (15/16 pins, 3,3/5/12 V), PCI Express (6 pins 75 W, 8 pins 150 W, 6+2) e EPS (192 W en 4 pins, 336 W en 8).',
    claves: ['ATX = Advanced Technology Extended: estándar de sobremesa (tamaño + conexións)', 'ATX 24 pins: principal placa base; raís 3,3 / 5 / 12 V + control (acendido, apagado, suspensión); antes 20 pins → hoxe 20+4 (desde ATX 2.0)', 'ATX 12 V: 4 pins (placas normais) ou 8 pins (EPS, servidores); só 12 V → a placa converte a 3,3 e 5 V (máis eficiencia, placas máis complexas)', 'Molex 4 pins: 5 e 12 V, >100 W; disqueteiras, IDE, CD/DVD antigos; hoxe en desuso', 'SATA alimentación: 15 pins, máis ancho que o de datos, 3,3/5/12 V; versión reducida de 6 pins a 5 V en portátiles', 'PCIe: 6 pins = 75 W, 8 pins = 150 W (12 V); 6+2 substitúe ó de 8; o de 6 encaixa no de 8 pero pode danar', 'EPS: dous conectores de 4 → 8 pins; 192 W (4 pins) / 336 W (8 pins); parécese ó PCIe 8 pero non é equivalente'],
    tags: ['conectores', 'ATX 24 pins', 'ATX 12V', 'EPS', 'Molex', 'SATA', 'PCI Express', 'PCIe', '6+2', 'raís'],
    contenido: `
<p>A que voltaxe deberiamos converter a electricidade? Que especificacións necesitará a fonte para funcionar co resto de compoñentes? Para solucionar estes problemas desenvolvéronse varios estándares, entre os que destaca o <strong>estándar ATX</strong> (<em>Advanced Technology Extended</em>), o estándar para ordenadores de sobremesa domésticos e profesionais (con alternativas en servidores e sistemas industriais).</p>
<p>Este estándar está presente nas fontes pero tamén nas placas base. O estándar ATX controla principalmente dúas variables: o <strong>tamaño dos compoñentes</strong> e as <strong>conexións</strong> que terán entre si, garantindo que non haxa limitacións entre marcas e modelos.</p>
<figure><img src="apuntes/fh/img/ud3/conectores-internos.png" alt="Conectores internos dunha fonte de alimentación" loading="lazy"><figcaption><strong>Conectores de alimentación internos</strong> dunha fonte actual.</figcaption></figure>
<h4>ATX de 24 pins</h4>
<p>É o <strong>conector principal</strong>. Conecta a fonte á placa base a través de varios <strong>raís de 3,3, 5 e 12 voltios</strong>. Tamén inclúe un circuíto de control para a comunicación de estado (acendido, apagado e modo de suspensión). Anteriormente só tiña <strong>20 pins</strong>; moitas fontes aínda o presentan como <strong>20+4</strong>, cos últimos catro separados. O conector orixinal non foi deseñado para altas demandas, polo que a partir da versión 2.0 se incorporou un pin máis para cada voltaxe.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/atx-24-pins.png" alt="Conector ATX de 24 pins" loading="lazy"><figcaption>ATX de 24 pins.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/atx-24-pins-voltaxes.png" alt="Voltaxes de cada pin do conector ATX 24" loading="lazy"><figcaption>Voltaxe de cada pin do ATX de 24 pins (+3,3 V laranxa, +5 V vermello, +12 V amarelo, −12 V azul, +5VSB violeta, PS-ON verde, PG gris, GND negro).</figcaption></figure>
</div>
<h4>ATX de 12 voltios</h4>
<p>Úsase para proporcionar máis enerxía ós <strong>microprocesadores</strong>. Pode ser de <strong>4 ou 8 pins</strong>: 8 pins xeralmente para placas de servidor (<strong>EPS</strong>) e 4 pins para outras placas. En vez de transportar 3 voltaxes, só fornece <strong>12 V</strong>, o que obriga á placa a ter módulos dedicados para converter ás voltaxes restantes. Isto aumenta a eficiencia (a fonte só converte unha voltaxe, correntes máis baixas), pero fai as placas máis complexas (etapas de conversión a 3,3 e 5 V).</p>
<figure class="small"><img src="apuntes/fh/img/ud3/atx-12v.png" alt="Conector ATX 12 V de 4+4 pins" loading="lazy"><figcaption>ATX de 12 V (4+4 pins).</figcaption></figure>
<h4>Molex de 4 pins</h4>
<p>Deseñado para alimentar <strong>periféricos</strong>, introducido no lanzamento do ATX. Ofrece <strong>5 e 12 V</strong> a través dos seus 4 pins e máis de <strong>100 W</strong>, suficiente para disqueteiras, discos IDE antigos ou unidades de CD/DVD. Tamén se usaba para dar enerxía adicional a placas base ou tarxetas gráficas antes de existir conectores especializados. Hoxe o seu uso reduciuse moito: os dispositivos modernos empregan o conector SATA, máis plano e doado de conectar.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/molex-4-pins.png" alt="Conector Molex de 4 pins" loading="lazy"><figcaption>Molex de 4 pins.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/molex-voltaxes.png" alt="Voltaxes do Molex: 12 V amarelo, 5 V vermello, terra negro" loading="lazy"><figcaption>Voltaxes do Molex: +12 V (amarelo), +5 V (vermello), terra (negro).</figcaption></figure>
</div>
<h4>SATA</h4>
<p>Empregado por dispositivos SATA (unidades de DVD novas, discos duros e SSD SATA). Aspecto similar ó conector de datos SATA, pero <strong>máis ancho</strong>, con <strong>15 pins</strong> e unha fendedura para evitar erros de conexión. Admite <strong>3,3, 5 e 12 V</strong>, aínda que a primeira raramente se usa. Existe unha versión reducida de <strong>6 pins a 5 V</strong> en portátiles e algúns premontados.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/sata-alimentacion.png" alt="Conectores de alimentación SATA" loading="lazy"><figcaption>Conectores de alimentación SATA.</figcaption></figure>
<h4>PCI Express</h4>
<p>Engaden enerxía adicional ás <strong>tarxetas de expansión PCIe</strong> que requiren máis dos 75 W que proporciona o seu porto, sobre todo <strong>tarxetas gráficas</strong> (ás veces varios conectores na mesma tarxeta). Dúas versións a 12 V: <strong>6 pins → 75 W</strong> e <strong>8 pins → 150 W</strong>. Inicialmente non eran compatibles (o de 6 tiña unha fendedura); a maioría dos de 8 foron substituídos pola versión <strong>6+2</strong>, válida para ambas. O de 6 pins encaixa no de 8 e funciona, pero é probable que <strong>cause danos</strong> no porto ou conector.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/pcie-6-2.png" alt="Conector PCI Express 6+2 pins" loading="lazy"><figcaption>PCI Express 6+2 pins.</figcaption></figure>
<h4>EPS</h4>
<p>Combina dous conectores de 4 pins que xuntos forman un EPS completo de 8 pins. Proporciona <strong>12 V adicionais</strong>, sobre todo á <strong>CPU</strong> (tamén a gráficas de servidor ou compoñentes que requiren moita enerxía): <strong>192 W en formato ATX de 4 pins</strong> ou <strong>336 W en formato EPS de 8 pins</strong>. Aseméllase ó PCIe de 8 pins pero <strong>non son equivalentes</strong>: distintas asignacións de pins e potencias. Un dos dous conectores de 4 pins é un ATX de 12 V.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/eps-8-pins.png" alt="Conector EPS de 8 pins" loading="lazy"><figcaption>EPS de 8 pins.</figcaption></figure>
<table>
<tr><th>Conector</th><th>Pins</th><th>Voltaxes</th><th>Uso</th></tr>
<tr><td>ATX principal</td><td>24 (20+4)</td><td>3,3 / 5 / 12 V (+ −12, 5VSB)</td><td>Placa base</td></tr>
<tr><td>ATX 12 V / EPS</td><td>4 / 8 (4+4)</td><td>12 V</td><td>CPU (192 W / 336 W)</td></tr>
<tr><td>Molex</td><td>4</td><td>5 / 12 V</td><td>Periféricos antigos (IDE, disqueteira, CD)</td></tr>
<tr><td>SATA</td><td>15</td><td>3,3 / 5 / 12 V</td><td>Discos, SSD, DVD SATA</td></tr>
<tr><td>PCIe</td><td>6 / 8 (6+2)</td><td>12 V</td><td>Tarxetas gráficas (75 W / 150 W)</td></tr>
</table>
<div class="box info"><div class="box-title">Conectores antigos que xa non se usan</div>
<ul>
  <li><strong>ATX de 20 pins:</strong> predecesor do de 24; sen a liña adicional para cada voltaxe.</li>
  <li><strong>ATX de 6 pins:</strong> usado no ATX 1.0 ata a súa eliminación no 2.0; daba 3,3 e 5 V á placa antes de moverse ó de 24 pins.</li>
  <li><strong>Berg:</strong> deseñado para <strong>disqueteiras</strong>, como un mini-Molex (mesmas conexións, máis pequeno, menos enerxía). Non está nas fontes actuais.</li>
</ul>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/atx-20-pins.png" alt="Conector ATX de 20 pins" loading="lazy"><figcaption>ATX de 20 pins.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/atx-6-pins.png" alt="Conector ATX de 6 pins" loading="lazy"><figcaption>ATX de 6 pins.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/berg.png" alt="Conector Berg de disqueteira" loading="lazy"><figcaption>Berg.</figcaption></figure>
</div></div>`
  },
  {
    id: 'fh-ud3-3-8',
    tipo: 'subtema',
    titulo: '3.8 Precaucións ó usar conectores',
    resumen: 'Regra non escrita: onde encaixa, é o conector correcto. Erros comúns: confundir CPU (4+4) e gráfica (6+2), ambos de 8 pins → consultar o manual, non forzar. Conectores SATA: se fai falta moita forza, a orientación é incorrecta e pode romper o pin do disco.',
    claves: ['"Vaia onde vaia, o conector é o correcto"… pero non forzar', 'CPU 8 pins = 4+4 · Gráfica 8 pins = 6+2 (99 % das fontes)', 'Forzar un conector pode rompelo e danar o equipo', 'SATA: demasiada forza → orientación incorrecta, pode romper o pin do disco'],
    tags: ['precaucións', 'conectores', 'erros', '4+4', '6+2', 'SATA'],
    contenido: `
<p>En xeral, conectar os cables da fonte é un proceso rápido, sinxelo e seguro: adoita seguirse a regra non escrita de que <em>vaia onde vaia, o conector é o correcto</em>. Non obstante, hai erros comúns de usuarios sen experiencia:</p>
<ul>
  <li>Os cables da <strong>CPU</strong> e da <strong>tarxeta gráfica</strong> confúndense moi facilmente, xa que ambos son de 8 pins; pero no 99 % das fontes os primeiros están separados en <strong>4+4</strong> e os segundos en <strong>6+2</strong>. Hai que distinguilos así ou consultar o manual. Os conectores non encaixan onde non son… pero algunhas persoas pensan que é o correcto e <strong>fórzano</strong>, rompéndoo e potencialmente danando o equipo.</li>
  <li>A orientación dos conectores <strong>SATA</strong> pode facer que o pin do disco se rompa: se se necesita demasiada forza, probablemente estea orientado incorrectamente.</li>
</ul>`
  },
  {
    id: 'fh-ud3-3-9',
    tipo: 'subtema',
    titulo: '3.9 Conectores en fontes modulares',
    resumen: 'As non modulares (cableadas) teñen os cables fixos e sobran moitos soltos. As modulares substitúen os cables por conectores femia na fonte: só se conectan os necesarios. Non hai estándar: mesturar cables de fontes distintas é perigoso. Vantaxes: versatilidade, xestión de cables, cables con fundas. Desvantaxes: prezo, conectores non universais, espazo extra.',
    claves: ['Non modular/cableada: máis común e barata; cables fixos, moitos sen usar soltos na caixa', 'Modular: conectores femia na fonte, conectar só o necesario', 'Sen estándar universal → non mesturar cables de fontes distintas (perigoso)', 'Semimodular: fixos os vitais (ATX + CPU, ás veces PCIe); equilibrio prezo/versatilidade', 'Vantaxes: versatilidade · mellor xestión de cables e refrixeración · desmontar sen recablear · cables con fundas/kits', 'Desvantaxes: prezo · conectores non universais (non perder os cables) · lonxitude extra en caixas pequenas', 'Non priorizar modularidade sobre calidade'],
    tags: ['modular', 'semimodular', 'cableada', 'xestión de cables', 'fundas'],
    contenido: `
<p>As fontes máis comúns e baratas son as <strong>non modulares ou cableadas</strong>: os seus cables están conectados ós circuítos internos e saen por un burato na parte traseira. Con poucos conectores é razoable, pero con moitos cables, na maioría dos casos algúns quedan sen usar, soltos na carcasa, o que é molesto. Este problema resólveo o <strong>cableado modular</strong>.</p>
<p>Unha fonte modular substitúe a morea de cables por <strong>conectores femia na parte traseira da fonte</strong>: conectamos e desconectamos só os cables que necesitamos. O máis importante: <strong>non existe un estándar universal</strong>, polo que mesturar cables de diferentes fontes modulares é <strong>perigoso</strong>. Na maioría dos casos utilízanse conectores Molex moi semellantes ós dos compoñentes; con coidado (e o manual) non debería haber problema.</p>
<h4>Fontes semimodulares</h4>
<p>Non tódalas modulares inclúen o 100 % dos cables desconectables. As semimodulares teñen algúns fixos, normalmente os vitais (<strong>ATX + CPU</strong>) e ás veces outros de uso común como <strong>PCIe</strong>. Buscan un equilibrio entre o baixo prezo das cableadas e a versatilidade das 100 % modulares.</p>
<div class="box tip"><div class="box-title">Por que escoller unha fonte modular?</div>
<ul>
  <li><strong>Versatilidade:</strong> só se conectan os cables necesarios, o que anima a escoller modelos con máis potencia e conectores sen dificultar a montaxe.</li>
  <li><strong>Xestión de cables mellorada:</strong> menos cables sobrantes → mellor organización e mellor refrixeración interna. Para retirar a fonte, desconéctanse os cables do lado da fonte sen reorganizar nada.</li>
  <li><strong>Cables con fundas ou personalizados:</strong> pódense facer cables propios ou mercar kits prefabricados; nunha cableada habería que desoldar (perigoso, anula a garantía) ou usar extensións.</li>
</ul></div>
<div class="box warn"><div class="box-title">Por que non escollela?</div>
<ul>
  <li><strong>Prezo:</strong> o cableado modular aumenta o custo. Con orzamento axustado hai modelos baratos "modulares" de baixa calidade interna. <strong>A calidade é o primeiro</strong>: non priorizar a modularidade.</li>
  <li><strong>Conectores non universais:</strong> os conectores cara ós compoñentes son estándar, pero os do lado da fonte non. Coidado de non perder os cables nin mesturalos; as pezas de reposto non sempre se venden por separado.</li>
  <li><strong>Configuracións máis molestas:</strong> en caixas con moi pouco espazo, a lonxitude engadida da modularidade dificulta a montaxe.</li>
</ul></div>`
  },
  {
    id: 'fh-ud3-3-10',
    tipo: 'subtema',
    titulo: '3.10 O futuro xa é presente: 12VHPWR',
    resumen: 'Conector desenvolvido por Intel e adoptado por NVIDIA nas gráficas de gama alta, tamén chamado PCIe 5.0. Substitúe varios PCIe 6+2 (2–3 × 150 W + 75 W do porto) por un único conector de 12 pins + 4 de comunicación, con niveis de 150, 300, 450 e 600 W. Problemas de conectores queimados nas RTX 4080/4090 → redeseño 12V-2x6 (ATX 3.1) con pins máis longos.',
    claves: ['12VHPWR: desenvolvido por Intel, adoptado por NVIDIA (gama alta); chamado PCIe 5.0', 'Substitúe os PCIe 6+2: 2–3 conectores de 8 pins = ata 450 W + 75 W do porto x16', 'Un único conector de 12 pins + 4 pins de comunicación coa fonte', 'Niveis de potencia: 150, 300, 450, 600 W (teoricamente case 1000 W no futuro)', 'Problemas RTX 4080/4090: conector non inserido a fondo → queimado', 'Recomendacións: inserir completamente; non dobrar o cable a menos de 35 mm do conector nin >90° · cables con conector a 90°', 'Revisión: 12V-2x6 (PCIe 5.0 / ATX 3.1), pins máis longos; ATX 3.1 xa non obrigatorio senón recomendado'],
    tags: ['12VHPWR', 'PCIe 5.0', '12V-2x6', 'ATX 3.1', 'NVIDIA', 'RTX 4090', 'conector queimado', 'Intel', 'PCI-SIG'],
    contenido: `
<p>É un conector desenvolvido por <strong>Intel</strong> que foi adoptado por <strong>NVIDIA</strong> nos seus modelos de gama alta e maior potencia. Adoita denominarse <strong>PCIe 5.0</strong> pola súa asociación coas fontes PCIe 5.0. A idea é <strong>substituír os conectores PCIe de 6+2 pins</strong>, reducindo o número de cables necesarios para alimentar a tarxeta gráfica.</p>
<p>As gráficas modernas adoitan ter dous ou tres conectores PCIe de 8 pins: ata <strong>450 W</strong> ademais dos 75 W do porto PCIe x16. O 12VHPWR corrixe isto cun <strong>único conector de 12 pins</strong>. Admite <strong>catro niveis de potencia</strong>: 150, 300, 450 e <strong>600 W</strong> (teoricamente case 1000 W no futuro). Ademais dos pins de alimentación, ten <strong>catro pins de comunicación</strong> coa fonte para mellorar a subministración.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/12vhpwr.png" alt="Conector 12VHPWR de 600 W" loading="lazy"><figcaption><strong>Conector PCIe 5.0 / 12VHPWR</strong> (600 W).</figcaption></figure>
<h4>Problemas graves con este conector</h4>
<p>A medida que as primeiras <strong>NVIDIA RTX 4080 e RTX 4090</strong> chegaron ó mercado, apareceron problemas polo alto consumo: o cable <strong>queimábase</strong> e deixaba de funcionar. Un aparente problema de deseño provocaba que o conector <strong>non se inserise completamente</strong> nalgúns casos, o que levou á queimadura.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/conector-queimado.png" alt="Conector 12VHPWR queimado" loading="lazy"><figcaption><strong>Conector queimado.</strong> NVIDIA recomendou verificar que estivese completamente inserido; varios usuarios informaron de que, aínda así, continuaba a queimarse.</figcaption></figure>
<div class="box warn"><div class="box-title">Como dobrar o cable</div><p>O fabricante (e varios fabricantes de fontes) responderon que tamén se debe ter especial coidado coa forma en que se dobra o cable: sempre a polo menos <strong>35 mm</strong> de distancia do conector e <strong>nunca en ángulos superiores a 90°</strong>. Se non te queres complicar, a solución máis sinxela é mercar un <strong>cable cun conector de 90°</strong>, que ofrecen a maioría dos fabricantes de fontes e gráficas.</p></div>
<figure class="small"><img src="apuntes/fh/img/ud3/dobrar-cable-12vhpwr.png" alt="Forma correcta e incorrecta de dobrar o cable" loading="lazy"><figcaption>Dobrar o cable a menos de 35 mm do conector (✗) fronte a facelo máis lonxe (✓).</figcaption></figure>
<h4>Revisión do conector</h4>
<p>Debido ós danos, <strong>PCI-SIG</strong> (regulador do conector), Intel e NVIDIA redeseñaron o conector, renomeándoo <strong>12V-2x6</strong>, aínda que nas especificacións oficiais se denomina PCIe 5.0 e <strong>ATX 3.1</strong>. A diferenza non é doada de ver: o novo conector engade <strong>pins máis longos</strong> para evitar os problemas de conexión. Ademais, o conector ATX 3.1 xa non é obrigatorio, senón simplemente recomendado.</p>`
  },
  {
    id: 'fh-ud3-3-11',
    tipo: 'subtema',
    titulo: '3.11 Como comprobar que a fonte ATX funciona',
    resumen: 'Proba do clip: coa fonte apagada e desconectada, unir co clip o cable verde (PS-ON) cun negro (GND), conectar e acender: se o ventilador xira, funciona. Con multímetro: rango 20 V DC, punta negra en negro (terra), punta vermella nos pins: vermello 5 V, amarelo 12 V, azul −12 V, laranxa 3,3 V, violeta 5 V (standby), gris Power Good.',
    claves: ['Proba do clip: apagar e desconectar → clip entre cable verde e un negro → conectar → o ventilador debe xirar', 'Sen movemento = fonte defectuosa', 'Multímetro: DC, rango 20 V; negra en COM e en pin negro (terra); vermella en V e nos pins', 'Vermello +5 V · Amarelo +12 V · Azul −12 V · Laranxa +3,3 V · Violeta +5 V standby · Negro 0 V · Gris = Power Good', 'Retirar puntas e apagar o multímetro'],
    tags: ['comprobar fonte', 'clip', 'multímetro', 'PS-ON', 'Power Good', 'cores dos cables', 'voltaxes'],
    contenido: `
<h4>Proba do clip</h4>
<ol>
  <li>Apaga o interruptor da fonte e desconéctaa da rede.</li>
  <li>Colle un clip ou un cable, dóbrao formando unha curva e conéctao entre o <strong>cable verde</strong> (PS-ON) e <strong>un dos cables negros</strong> (terra).</li>
  <li>Conecta a fonte.</li>
  <li>Se a fonte funciona, arrancará e o <strong>ventilador comezará a xirar</strong>. Se non hai movemento, a fonte está defectuosa.</li>
</ol>
<h4>Medición cun multímetro</h4>
<ol>
  <li>Acender o multímetro e seleccionar <strong>tensión de corrente continua</strong>, rango de <strong>20 V DC</strong> (suficiente para tódalas medicións).</li>
  <li>Conectar a punta de proba <strong>negra</strong> ó terminal COM e á toma de terra da fonte (cables negros).</li>
  <li>Coa punta <strong>vermella</strong> (terminal V) medir as voltaxes nos distintos pins.</li>
  <li>O cable <strong>gris</strong> (Power Good) debería indicar se chega a voltaxe correcta.</li>
  <li>Retirar as puntas e apagar o multímetro.</li>
</ol>
<table>
<tr><th>Cor do cable</th><th>Voltaxe</th></tr>
<tr><td>Vermello</td><td>+5 V</td></tr>
<tr><td>Amarelo</td><td>+12 V</td></tr>
<tr><td>Azul</td><td>−12 V</td></tr>
<tr><td>Laranxa</td><td>+3,3 V</td></tr>
<tr><td>Violeta</td><td>+5 V (standby)</td></tr>
<tr><td>Negro</td><td>0 V (terra)</td></tr>
<tr><td>Verde</td><td>PS-ON (acendido)</td></tr>
<tr><td>Gris</td><td>Power Good</td></tr>
</table>
<figure><img src="apuntes/fh/img/ud3/multimetro.png" alt="Medición da fonte cun multímetro" loading="lazy"><figcaption><strong>Utilización do multímetro</strong> para medir os valores da fonte: punta negra en terminal COM e nun pin negro (terra); punta vermella en terminal V movéndose polos distintos pins; 20 V en continua é suficiente.</figcaption></figure>`
  },

  /* ---------------- 4 ---------------- */
  {
    id: 'fh-ud3-4',
    tipo: 'tema',
    titulo: '4. Placa base',
    resumen: 'Placa de circuíto impreso (motherboard/mainboard) que conecta o microprocesador, a RAM, o almacenamento e as tarxetas de expansión; contén a ROM-BIOS, o reloxo e os conectores de E/S. Determina o rendemento (procesador, memoria, buses), a organización e as posibilidades de actualización e expansión.',
    claves: ['Núcleo do ordenador; nela está a CPU', 'PCB rectangular: medio de conexión de tódolos compoñentes', 'Contén ROM-BIOS, reloxo, conectores (eléctrico, serie, paralelo, USB…)', 'Rendemento: tipo de procesador, memoria, buses, interfaces de disco; comunicación vía chipset e BIOS', 'Organización: todo se conecta a ela', 'Actualización e expansión: ata onde se pode ampliar', 'PCB (Printed Circuit Board): pistas de cobre sobre substrato non condutor', 'Sistemas dixitais por tamaño: mainframes, estacións de traballo, automatismos, portátiles'],
    tags: ['placa base', 'motherboard', 'mainboard', 'PCB', 'circuíto impreso', 'ROM-BIOS', 'rendemento', 'expansión'],
    links: ['fh-ud3-4-1', 'fh-ud3-4-2', 'fh-ud3-4-3', 'fh-ud3-4-4', 'fh-ud3-4-5', 'fh-ud3-4-6', 'fh-ud3-4-7'],
    contenido: `
<p>A placa base forma, xunto cos compoñentes nela inseridos, o <strong>núcleo do ordenador</strong> que fai posible o funcionamento de todo o sistema. É a pedra angular de calquera configuración, pois nela está situada a <strong>CPU</strong>, da que dependen as prestacións e a compatibilidade de software do PC.</p>
<div class="box def"><div class="box-title">Placa base</div><p>(<em>motherboard</em> ou <em>mainboard</em>) Placa de circuíto impreso rectangular que serve como <strong>medio de conexión</strong> entre o microprocesador, a memoria RAM, os dispositivos de almacenamento, as tarxetas de expansión… Tódolos compoñentes do ordenador están conectados a ela dun xeito ou doutro.</p></div>
<p>Tamén encontramos nela a <strong>memoria ROM-BIOS</strong>, o <strong>reloxo</strong> e os <strong>conectores</strong> (eléctrico, portos serie, paralelo, USB…) que conectan o ordenador cos periféricos de entrada e saída. É o soporte sobre o que se monta todo o PC: tanto o rendemento como as futuras expansións dependen do tipo de placa base escollida.</p>
<figure><img src="apuntes/fh/img/ud3/pcb-placa-base.png" alt="Placa base vista en perspectiva" loading="lazy"><figcaption><strong>Placa de circuíto impreso (PCB, Printed Circuit Board).</strong> Medio para suxeitar mecanicamente e conectar electricamente compoñentes electrónicos a través de pistas de material condutor gravado en láminas de cobre laminadas sobre un substrato non condutor.</figcaption></figure>
<h4>Papel fundamental</h4>
<ul>
  <li><strong>Rendemento:</strong> determina o tipo de procesador, memoria, buses e interfaces de disco que se poden usar, e a capacidade de comunicación entre dispositivos a través do chipset, a BIOS e as súas canles.</li>
  <li><strong>Organización:</strong> o seu deseño determina como se organiza o computador, xa que todo se conecta a ela.</li>
  <li><strong>Actualización e expansión:</strong> determina ata que punto se pode actualizar o computador e que dispositivos se poden instalar.</li>
</ul>
<div class="box info"><div class="box-title">División dos sistemas dixitais por tamaño</div>
<ul>
  <li><strong>Mainframes:</strong> proceso masivo de datos no menor tempo posible.</li>
  <li><strong>Estacións de traballo:</strong> aumentan a produtividade individual nas empresas.</li>
  <li><strong>Automatismos:</strong> control e automatización de procesos con microcontroladores e autómatas programables.</li>
  <li><strong>Portátiles</strong> (laptop, notebook): ordenador persoal que se pode transportar con facilidade.</li>
</ul></div>`
  },
  {
    id: 'fh-ud3-4-1',
    tipo: 'subtema',
    titulo: '4.1 Tipos de placas base (factores de forma)',
    resumen: 'Os factores de forma definen forma, dimensións, ancoraxes, posición de baías/conectores e conector de alimentación. Extended-ATX 305×330 (servidores, varios zócolos), ATX 305×244 (o clásico, 7 baías a 20 mm), Micro-ATX 244×244 (o máis usado en gaming), FlexATX 229×101 (oficina), Mini-ITX 170×170 (HTPC, non deriva de ATX), Nano-ITX 120×120 (IoT, multimedia), Pico-ITX 100×72 (CPU e RAM soldadas, GPIO, <8 W). Históricos: AT e BTX.',
    claves: ['Factor de forma: forma, dimensións, posición dos parafusos, zonas de baías/conectores traseiros, conector e conexións da fonte', 'E-ATX: 305×330 mm · estacións de traballo e servidores · varios zócolos, máis DIMM', 'ATX: 305×244 mm · o máis clásico · X = Enhanced · 7 baías separadas 20 mm', 'Micro-ATX: 244×244 mm · primeira variante compacta · o máis usado para gaming', 'FlexATX: 229×101 mm · oficina/multimedia · económicas · fontes SFX', 'Mini-ITX: 170×170 mm · non deriva de ATX · HTPC e compactos · refrixeración e gráficas compactas', 'Nano-ITX: 120×120 mm · multimedia, IoT, mini PC · expansión limitada', 'Pico-ITX: 100×72 mm · CPU e RAM soldadas · <8 W · pasiva · GPIO (Raspberry Pi) · domótica, servidores domésticos', 'AT (anos 80): ~300 mm, conector de 6 pins · BTX (Intel 2004): mellor refrixeración, incompatible con ATX salvo a fonte, non aceptado', 'Escoller a caixa que corresponda ó factor de forma da placa'],
    tags: ['factor de forma', 'ATX', 'E-ATX', 'Micro-ATX', 'FlexATX', 'Mini-ITX', 'Nano-ITX', 'Pico-ITX', 'AT', 'BTX', 'HTPC', 'GPIO'],
    contenido: `
<p>Por que hai diferentes tipos se a placa base ofrece a mesma función? Débese ás diferentes configuracións e requisitos dos sistemas: a elección depende do procesador, do tipo de sistema e das características adicionais que se precisen. Para reducir custos e permitir a intercambiabilidade, os fabricantes crearon <strong>estándares</strong> sobre o tamaño e a disposición dos elementos.</p>
<div class="box def"><div class="box-title">Factor de forma</div><p>Estándares creados polos fabricantes. Definen: a <strong>forma</strong> da placa (cadrada ou rectangular); as <strong>dimensións</strong> exactas; a <strong>posición das ancoraxes</strong> (parafusos); as <strong>zonas</strong> das baías de expansión e conectores traseiros (teclado, rato, USB…); a <strong>forma do conector da fonte</strong>; e as <strong>conexións eléctricas</strong> da fonte (cantos cables, valores e función).</p></div>
<figure><img src="apuntes/fh/img/ud3/factores-forma-placas.png" alt="Comparativa de tamaños ATX, Micro-ATX, Mini-ITX, Nano-ITX, Pico-ITX" loading="lazy"><figcaption>Tamaños relativos: ATX, Micro-ATX, Mini-ITX, Nano-ITX e Pico-ITX.</figcaption></figure>
<h4>Extended-ATX (E-ATX)</h4>
<p>Non deseñadas para PC cotiáns: úsanse en <strong>estacións de traballo e servidores pequenos</strong>. Tamaño <strong>305×330 mm</strong>, o que permite máis compoñentes: máis dun <strong>zócolo de CPU</strong>, maior número de módulos DIMM e canles de memoria… Non é un formato común: moitas carcasas teñen problemas para montalas; comprobar as especificacións.</p>
<h4>ATX</h4>
<p>O tipo <strong>máis clásico</strong>. Factor de forma rectangular, deseñado para facilitar instalación e mantemento, con máis baías e portos de expansión. O acrónimo vén de que os PC co 286 de Intel recibían o alcume de <strong>AT</strong>; co auxe dos clons a mediados dos 90 pasaron a chamarse <strong>ATX</strong>, onde a <strong>X significa Enhanced</strong> (mellorada). Dende entón é o estándar por excelencia. Dimensións <strong>305×244 mm</strong>. As placas derivadas de ATX funcionan co seu tipo de fonte e respectan as <strong>sete baías de expansión separadas 20 mm</strong>. O estándar está en constante revisión (novos portos, eliminación dos desactualizados).</p>
<h4>Micro-ATX</h4>
<p>Primeira variante do ATX, máis compacta: <strong>244×244 mm</strong>. Cambia a posición das baías de expansión respecto á placa. Os catro orificios superiores coinciden cos de ATX (20 mm), pero os dous inferiores son máis estreitos. Non é un problema: a maioría de usuarios nunca usa toda a expansión dun ATX. Hoxe son as <strong>máis utilizadas para PC de xogos</strong>, porque ofrecen a configuración e expansión necesarias.</p>
<h4>FlexATX</h4>
<p>Derivado do ATX para sobremesas <strong>pequenos</strong>: <strong>229×101 mm</strong>, con moitas menos opcións de conectividade. Compatible coas mesmas caixas que ATX (comprobar especificacións; non é tan común). Úsase en equipos de <strong>oficina e multimedia</strong> dunha soa función con espazo limitado. Non tódalas gráficas caben (as de gama alta non); menos espazo de RAM e portos PCIe. Deseñadas para ordenadores <strong>económicos</strong>. Compatibles con fontes ATX, pero para aforrar espazo pódense usar <strong>SFX</strong>.</p>
<h4>Mini-ITX</h4>
<p>Para pequenos sobremesas; <strong>non derivan das ATX</strong>. <strong>170×170 mm</strong>; menos compoñentes, aínda que a integración fixo que sexan tan boas como as ATX co tempo. O tamaño dá problemas para montar refrixeración (radiadores e disipadores pensados para ATX/Micro-ATX); hai gráficas máis compactas para caixas Mini-ITX. Os seus catro orificios coinciden cos da esquerda e centro das ATX, pero usalas nunha caixa ATX é un desperdicio. Recoméndanse para <strong>HTPC</strong> (<em>Home Theater Personal Computer</em>) e sistemas compactos con fontes pequenas.</p>
<h4>Nano-ITX</h4>
<p>Variante máis pequena do Mini-ITX: <strong>120×120 mm</strong>. Destinadas a dispositivos <strong>multimedia de consumo</strong>: caixas Android de gama alta, centros multimedia, dispositivos <strong>IoT</strong>, sistemas de son, ultraportátiles de baixo consumo ou mini PC. Expansión moi limitada: deseñadas para un uso específico sen actualizacións.</p>
<h4>Pico-ITX</h4>
<p>As <strong>máis pequenas</strong> do mercado: <strong>100×72 mm</strong>. Veñen co <strong>procesador integrado</strong> (non substituíble) e a <strong>RAM soldada</strong>, como nos portátiles. Perfectas para dispositivos <strong>domóticos</strong> pequenos de baixo consumo e <strong>servidores domésticos</strong> (ficheiros, P2P): consumo <strong>&lt; 8 W</strong>, refrixeración pasiva (pódese engadir ventilador). Permiten módulos adicionais grazas ós <strong>pins GPIO</strong> integrados (como na <strong>Raspberry Pi</strong>): sensores, pantallas…</p>
<figure class="small"><img src="apuntes/fh/img/ud3/pico-itx-raspberry.png" alt="Placa tipo Raspberry Pi con GPIO" loading="lazy"><figcaption>Placa compacta tipo Raspberry Pi con pins GPIO.</figcaption></figure>
<table>
<tr><th>Formato</th><th>Dimensións</th><th>Uso típico</th></tr>
<tr><td>E-ATX</td><td>305 × 330 mm</td><td>Servidores, estacións de traballo</td></tr>
<tr><td>ATX</td><td>305 × 244 mm</td><td>Sobremesa estándar</td></tr>
<tr><td>Micro-ATX</td><td>244 × 244 mm</td><td>Gaming, sobremesa compacto</td></tr>
<tr><td>FlexATX</td><td>229 × 101 mm</td><td>Oficina, multimedia económico</td></tr>
<tr><td>Mini-ITX</td><td>170 × 170 mm</td><td>HTPC, compactos</td></tr>
<tr><td>Nano-ITX</td><td>120 × 120 mm</td><td>Multimedia, IoT, mini PC</td></tr>
<tr><td>Pico-ITX</td><td>100 × 72 mm</td><td>Domótica, servidores domésticos</td></tr>
</table>
<div class="box info"><div class="box-title">Formatos históricos</div>
<p><strong>Placa base AT:</strong> dimensións da orde de 300 mm, imposible de encaixar en miniordenadores de sobremesa. Os conectores de seis pins naceron como alimentación para este tipo de placa. Producida a mediados dos 80, durou case dúas décadas ata a proliferación de clónicos.</p>
<p><strong>BTX (Balanced Technology Extended):</strong> creado por <strong>Intel en 2004</strong> como evolución do ATX para resolver problemas de <strong>refrixeración</strong> dalgúns procesadores. Practicamente incompatible co ATX, agás pola fonte. Non foi aceptado polos fabricantes e usuarios porque a localización do procesador o facía incompatible con algúns tipos de procesadores.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/placa-base-at.png" alt="Placa base AT antiga" loading="lazy"><figcaption>Placa base AT.</figcaption></figure></div>
<div class="box tip"><div class="box-title">Unha carcasa pode ser compatible con varios formatos?</div><p>A placa base determina o tamaño do PC e da carcasa. Cada carcasa ten un formato ideal para cada placa, pero hai modelos de uso máis xeral: moitas <strong>semitorres</strong> son compatibles con ATX, Micro-ATX e ás veces Mini-ITX. Aínda así, é mellor escoller a caixa que corresponda ó factor de forma da placa: un Micro-ATX nun chasis ATX non aproveita a refrixeración da caixa nin ten a vantaxe do tamaño pequeno.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/carcasas-por-formato.png" alt="Carcasas Mini-ITX, micro-ATX, ATX e E-ATX" loading="lazy"><figcaption>Carcasas para Mini-ITX, Micro-ATX, ATX e E-ATX.</figcaption></figure></div>`
  },
  {
    id: 'fh-ud3-4-2',
    tipo: 'subtema',
    titulo: '4.2 Conexións da placa base',
    resumen: 'Conexións internas (PCI, SATA, pila, RAM, disqueteira, alimentación ATX, zócolo do procesador, IDE, PCI Express, cabeceiras USB) e externas no panel traseiro (PS/2, USB 2.0/3.0, VGA, DVI, HDMI, botón de reinicio UEFI, FireWire, eSATA, RJ45, son analóxico e dixital).',
    claves: ['Internos: 1 PCI · 2 SATA · 3 pila · 4 RAM · 5 disqueteira · 6 alimentación ATX · 7 zócolo · 8 IDE · 9 PCI Express', 'Cabeceiras USB internas para o panel frontal', 'Externos: 1 PS/2 · 2/7 USB 2.0 · 3 VGA · 4 DVI · 5 HDMI · 6 reinicio UEFI · 8 FireWire · 9 eSATA · 10 RJ45 · 11 USB 3.0 · 12 son analóxico · 13 son dixital'],
    tags: ['conexións', 'conectores internos', 'conectores externos', 'PS/2', 'USB', 'HDMI', 'DVI', 'VGA', 'RJ45', 'FireWire', 'SATA', 'IDE'],
    contenido: `
<p>As placas base teñen varias conexións que lles permiten comunicarse con outros compoñentes, tanto de xeito <strong>interno</strong> como <strong>externo</strong>.</p>
<figure><img src="apuntes/fh/img/ud3/conectores-internos-placa.png" alt="Conectores internos dunha placa base" loading="lazy"><figcaption><strong>Conectores internos da placa base:</strong> 1 PCI · 2 SATA · 3 pila · 4 memoria RAM · 5 disqueteira · 6 conexión eléctrica ATX · 7 zócolo do procesador · 8 IDE · 9 PCI Express.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/conectores-usb-internos.png" alt="Cabeceiras USB internas" loading="lazy"><figcaption>Cabeceiras USB internas para conectar os portos do panel frontal.</figcaption></figure>
<figure><img src="apuntes/fh/img/ud3/conectores-externos-placa.png" alt="Panel de conectores externos" loading="lazy"><figcaption><strong>Conectores externos da placa base:</strong> 1 PS/2 · 2 USB 2.0 · 3 VGA · 4 DVI · 5 HDMI · 6 reinicio UEFI · 7 USB 2.0 · 8 FireWire · 9 SATA (eSATA) · 10 RJ45 · 11 USB 3.0 · 12 son analóxico · 13 son dixital.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-4-3',
    tipo: 'subtema',
    titulo: '4.3 BIOS (Basic Input/Output System)',
    resumen: 'Rutinas básicas de baixo nivel almacenadas na ROM-BIOS (ou UEFI) que arrancan o ordenador e ceden o control ó sistema operativo. Alimentadas por unha pila de botón. Configúrase co setup (F2 ou Supr ó arrancar). Propósito: iniciar e probar o hardware e cargar un xestor de arranque ou SO.',
    claves: ['Rutinas básicas de baixo nivel para arrancar e ceder o control ó SO', 'Almacenadas en ROM-BIOS (antes) ou UEFI (hoxe)', 'Pila de botón alimenta a configuración de forma permanente', 'Setup: F2 ou Supr antes de cargar o SO', 'Propósito: iniciar e probar o hardware (POST) e cargar o xestor de arranque/SO'],
    tags: ['BIOS', 'ROM-BIOS', 'setup', 'pila', 'arranque', 'firmware', 'POST'],
    contenido: `
<p>Nas antigas memorias <strong>ROM-BIOS</strong> e nas actuais <strong>UEFI</strong> almacénanse as <strong>rutinas básicas de baixo nivel</strong> que fan posible que o ordenador arranque para, posteriormente, ceder o control ó sistema operativo. Están alimentadas de forma permanente por unha <strong>pila de botón</strong>.</p>
<p>Mediante o <strong>setup</strong> podemos configurar a BIOS, tendo certos coñecementos técnicos. Para activalo teremos que premer, segundo o modelo de placa, a tecla <strong>F2</strong> ou <strong>Supr</strong> antes de que o equipo cargue o sistema operativo.</p>
<div class="box def"><div class="box-title">Propósito da BIOS</div><p><strong>Iniciar e probar o hardware</strong> do sistema e <strong>cargar un xestor de arranque</strong> ou un sistema operativo que estea nun dispositivo de almacenamento.</p></div>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/bios-pila.png" alt="Chip BIOS e pila de botón" loading="lazy"><figcaption>Chip ROM-BIOS e pila de botón na placa base.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/interface-bios.png" alt="Interface de texto da BIOS" loading="lazy"><figcaption><strong>Interface BIOS</strong> clásica (setup en modo texto).</figcaption></figure>
</div>`
  },
  {
    id: 'fh-ud3-4-4',
    tipo: 'subtema',
    titulo: '4.4 UEFI (Unified Extensible Firmware Interface)',
    resumen: 'Especificación que define a interface entre o SO e o firmware da plataforma. Substitúe a BIOS con novas características: diagnose e reparación remotas sen SO, emulación de BIOS, arranque de unidades >2 TB con GPT, arquitectura e controladores independentes da CPU, contorna amigable e deseño modular.',
    claves: ['Interface entre sistema operativo e firmware da plataforma', 'Xurdiu para substituír á BIOS', 'Diagnose e reparacións remotas, incluso sen SO instalado', 'Emula a BIOS se o SO só é compatible con ela (CSM)', 'Arranque dende unidades > 2 TB mediante GPT', 'Arquitectura e controladores independentes da CPU', 'Contorna gráfica amigable (rato) · deseño modular'],
    tags: ['UEFI', 'firmware', 'GPT', '2 TB', 'modular', 'arranque'],
    contenido: `
<div class="box def"><div class="box-title">UEFI</div><p>Especificación que define a <strong>interface entre o sistema operativo e o firmware</strong> da plataforma. Xurdiu para <strong>substituír á BIOS</strong> e dotala de novas características, como soportar <strong>diagnose e reparacións remotas</strong>, incluso sen ter instalado o sistema operativo.</p></div>
<p>Manexa bases de datos con información da plataforma, inicio e tempo de execución dos servizos dispoñibles, listos para cargar o sistema operativo. Destaca por:</p>
<ul>
  <li>Ser capaz de <strong>emular a BIOS</strong> cando o sistema operativo só é compatible con ela.</li>
  <li>Posibilitar o <strong>arranque dende unidades superiores a 2 TB</strong> mediante <strong>GPT</strong>.</li>
  <li>Ter unha arquitectura e controladores <strong>independentes da CPU</strong>.</li>
  <li>Ter unha <strong>contorna de traballo amigable</strong>.</li>
  <li>Ter un <strong>deseño modular</strong>.</li>
</ul>
<figure><img src="apuntes/fh/img/ud3/interface-uefi.png" alt="Interface gráfica UEFI" loading="lazy"><figcaption><strong>Interface UEFI</strong> gráfica (ASUS), con rato e paneis de estado.</figcaption></figure>`
  },
  {
    id: 'fh-ud3-4-5',
    tipo: 'subtema',
    titulo: '4.5 Bus',
    resumen: 'Cables ou pistas da placa por onde circula a información entre memoria, procesador e periféricos. Tres tipos: bus de control (goberna o acceso ás liñas compartidas), bus de enderezos (n liñas → 2ⁿ posicións enderezables) e bus de datos. Rendemento: ancho (8–128 bits, hoxe 64), frecuencia e velocidade de transmisión (MB/s). PCI Express: conexión punto a punto con carrís x1–x16.',
    claves: ['Bus do sistema: cables/pistas para que a información circule entre memoria e periféricos segundo o procesador', 'Bus de control: goberna o uso das liñas de datos e enderezos compartidas; minimiza colisións', 'Bus de enderezos: enderezo do dato en tránsito; n liñas → 2ⁿ enderezos', 'Bus de datos: por el viaxan os datos entre compoñentes', 'Ancho do bus: 8, 16, 32, 64 ou 128 bits (hoxe 64)', 'Frecuencia do bus ≠ frecuencia da CPU → posibles pescozos de botella', 'Velocidade de transmisión: MB/s', 'Tódolos nodos reciben os datos do bus; os non destinatarios ignóranos', 'PCIe (2004): punto a punto, non bus; carrís x1, x4, x8, x16 · 1.0: 250 MB/s–4 GB/s · 2.0: 500 MB/s–8 GB/s · 3.0: 984,6 MB/s–15,8 GB/s · 4.0: 1969,2 MB/s–31,5 GB/s', 'Non confundir PCIe con PCI-X (evolución paralela do PCI que non se popularizou)'],
    tags: ['bus', 'bus de control', 'bus de enderezos', 'bus de datos', 'ancho do bus', 'frecuencia', 'PCI Express', 'PCIe', 'carrís', 'PCI-X'],
    contenido: `
<div class="box def"><div class="box-title">Bus do sistema</div><p>Compoñente da placa base, formado por <strong>cables ou pistas</strong> nun circuíto impreso, que permite que a información circule da memoria cara ós periféricos e viceversa, segundo as instrucións do procesador.</p></div>
<p>Divídense en tres tipos:</p>
<ul>
  <li><strong>Bus de control:</strong> goberna o uso e acceso ás liñas de datos e de enderezos, compartidas por tódolos compoñentes; así se minimizan as colisións de información.</li>
  <li><strong>Bus de enderezos:</strong> canle independente do bus de datos onde se establece o <strong>enderezo de memoria</strong> do dato en tránsito. A memoria enderezable depende dos bits deste bus: con <em>n</em> liñas pódense enderezar <strong>2ⁿ</strong> posicións.</li>
  <li><strong>Bus de datos:</strong> por el viaxan os datos entre os compoñentes hardware.</li>
</ul>
<h4>Capacidade e rendemento do bus</h4>
<ul>
  <li><strong>Ancho do bus:</strong> número de liñas en paralelo polas que se transmite información: 8, 16, 32, 64 ou 128 bits. Na actualidade trabállase con <strong>64 bits</strong>.</li>
  <li><strong>Frecuencia do bus:</strong> frecuencia de reloxo á que traballa; non ten por que ser a da CPU, o que pode orixinar problemas de rendemento.</li>
  <li><strong>Velocidade de transmisión:</strong> megabytes que pode transmitir nun segundo.</li>
</ul>
<p>Tódolos nodos conectados ó bus reciben os datos aínda que non se dirixan a eles; os nodos ós que non van dirixidos simplemente os ignoran.</p>
<div class="box info"><div class="box-title">PCI Express</div>
<p>O PCIe arrancou no <strong>2004</strong> e converteuse nun estándar que aínda non foi substituído, pero si mellorado. Os alicerces cambiaron: é unha <strong>conexión punto a punto, non un bus</strong>, eliminando a perda de rendemento de varios dispositivos comunicándose co procesador á vez. Nas placas vemos diferentes <strong>carrís</strong>: x1, x4, x8, x16.</p>
<table>
<tr><th>Versión</th><th>x1</th><th>x16</th></tr>
<tr><td>PCIe 1.0</td><td>250 MB/s</td><td>4 GB/s</td></tr>
<tr><td>PCIe 2.0</td><td>500 MB/s</td><td>8 GB/s</td></tr>
<tr><td>PCIe 3.0</td><td>984,6 MB/s</td><td>15,8 GB/s</td></tr>
<tr><td>PCIe 4.0</td><td>1969,2 MB/s</td><td>31,5 GB/s</td></tr>
</table>
<p>Non confundir <strong>PCIe</strong> con <strong>PCI-X</strong>: esta última foi unha evolución do PCI que non se popularizou porque se perdía velocidade ó instalar máis dun dispositivo.</p></div>`
  },
  {
    id: 'fh-ud3-4-6',
    tipo: 'subtema',
    titulo: '4.6 Ocos de expansión',
    resumen: 'Slots con contactos onde se inseren tarxetas para ampliar periféricos. Tipos: ISA (8/16 bits, desaparecido), PCI (paralelo, 32/64 bits, só para compoñentes obsoletos), AGP (gráficas, obsoleto) e PCI Express (serie, maior ancho de banda). Hoxe a maioría de periféricos van por USB e as placas integran rede, son e gráficos; os ocos quedan para dispositivos específicos.',
    claves: ['Slot: contactos para inserir tarxetas que amplían periféricos; forma de comunicar o bus con outros dispositivos', 'ISA: 8 e 16 bits, xa non dispoñible', 'PCI: paralelo, 32 e 64 bits, só para compoñentes obsoletos', 'AGP: específico para gráficas, obsoleto', 'PCI Express: serie, maior ancho de banda', 'Antes 7 ocos, máis ISA que PCI; hoxe ningún ISA', 'USB → periféricos externos; placas integran rede, son, gráficos', 'Integrado: vantaxe = sen configurar (a ROM recoñéceo) · inconveniente = un fallo inutiliza toda a placa'],
    tags: ['ocos de expansión', 'slots', 'ISA', 'PCI', 'AGP', 'PCI Express', 'tarxetas', 'integrado'],
    contenido: `
<p>Parte dos periféricos podémolos conectar a través de <strong>ocos de expansión (slots)</strong>, que teñen un número determinado de contactos onde inserir tarxetas que amplían a capacidade e o número de periféricos. Referímonos á forma na que o bus se pode comunicar con outros dispositivos periféricos. Normalmente son de catro tipos:</p>
<ul>
  <li><strong>ISA:</strong> xa non están dispoñibles; servían para dispositivos de 8 e 16 bits.</li>
  <li><strong>PCI:</strong> comunicación <strong>paralela</strong> para dispositivos de 32 e 64 bits; só en máquinas que precisan compoñentes obsoletos.</li>
  <li><strong>AGP:</strong> específicos de <strong>tarxetas gráficas</strong>… tamén obsoleto.</li>
  <li><strong>PCI Express:</strong> comunicación <strong>serie</strong>, polo que alcanza un ancho de banda maior.</li>
</ul>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/ocos-expansion.png" alt="Ocos PCI Express e PCI nunha placa" loading="lazy"><figcaption>Ocos PCI Express (x16, x1) e PCI.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/ocos-pci.png" alt="Ocos PCI" loading="lazy"><figcaption>Ocos PCI clásicos.</figcaption></figure>
</div>
<p>Antigamente as placas incorporaban nos sete ocos máis ISA que PCI, pero hoxe non se monta ningún ISA. Coa aparición dos conectores <strong>USB</strong>, a maioría dos periféricos conéctanse dende o exterior. Ademais, a maioría das placas <strong>integran</strong> tarxetas de rede, de son, gráficas… Así, os ocos só se usan para dispositivos moi específicos.</p>
<div class="box tip"><div class="box-title">Integrado: vantaxe e inconveniente</div><p>A vantaxe é a <strong>despreocupación á hora de configuralos</strong>: a propia ROM está configurada para recoñecelos. O inconveniente é que, ante a maioría dos fallos dalgún deles, <strong>toda a placa base queda inutilizada</strong>.</p></div>`
  },
  {
    id: 'fh-ud3-4-7',
    tipo: 'subtema',
    titulo: '4.7 Chipset',
    resumen: 'Conxunto de circuítos integrados da placa que manexa o fluxo de datos entre procesador, memoria e periféricos; determina memoria máxima, buses, número de procesadores e a familia de micros compatible. Clásicamente ponte norte (CPU↔RAM↔AGP/PCIe, bus frontal FSB) e ponte sur (E/S, discos). Hoxe a ponte norte está no procesador (PCH de Intel desde 2009; I/O Die con Infinity Fabric en AMD Zen) e o que queda na placa chámase chipset.',
    claves: ['Chipset = xogo de circuítos integrados auxiliares: fluxo de datos entre CPU, memoria e periféricos', 'Determina: memoria máxima enderezable, tipos/velocidades de buses, nº de procesadores, familia de micros compatible', 'Ponte norte: CPU ↔ RAM ↔ AGP/PCIe; con disipador; conectada á CPU polo bus frontal (FSB), que limita a lectura da RAM', 'Ponte sur: disco duro e resto de E/S; ligada á ponte norte', 'Hoxe: ponte norte integrada no procesador → PCH (Intel, 2009); ponte sur na placa → "chipset"', 'PCH: reloxo do sistema, FDI (gráficos integrados), DMI; xestiona PCIe principais (GPU + M.2) e memoria', 'Chipset actual: portos E/S, algúns PCIe, RAID, overclocking', 'AMD Zen: I/O Die (cIOD) = antiga ponte norte · Infinity Fabric = antigo FSB · UMC (memoria) · Hub de E/S', 'Frecuencias: fclk (Infinity Fabric), uclk (UMC), iclk (I/O Hub), mclk (RAM)', 'Capacidades do PCH ∝ núcleos/gama: overclocking, carrís PCIe (16 GPU + M.2), SATA, USB directos, liñas co chipset', 'Sobrequentamento do chipset → fallos como unha CPU; disipador pasivo; configuración equilibrada'],
    tags: ['chipset', 'ponte norte', 'ponte sur', 'northbridge', 'southbridge', 'FSB', 'PCH', 'Platform Controller Hub', 'DMI', 'FDI', 'Infinity Fabric', 'I/O Die', 'Zen', 'AMD', 'Intel'],
    contenido: `
<div class="box def"><div class="box-title">Chipset</div><p>Xogo de circuítos integrados auxiliares: conxunto de circuítos integrados da placa base que <strong>manexa o fluxo de datos entre o procesador, a memoria e os periféricos</strong>.</p></div>
<p>Determina as características <strong>inalterables</strong> da placa: o tamaño máximo de memoria enderezable, os tipos e velocidades dos buses, o número de procesadores que soporta… e o máis importante, a <strong>familia de microprocesadores</strong> que se poderá usar.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/chipset-disipador.png" alt="Chipset con disipador" loading="lazy"><figcaption>Chipset cun disipador térmico pasivo.</figcaption></figure>
<h4>Ponte norte e ponte sur</h4>
<p>A maior parte destas funcións agrúpanse en dous circuítos integrados de gran tamaño, chamados <strong>ponte norte</strong> e <strong>ponte sur</strong>. As placas actuais xa non soen traer a ponte norte, pois os micros de última xeración a levan integrada.</p>
<ul>
  <li><strong>Ponte norte:</strong> controla o fluxo de datos entre a <strong>CPU e a RAM</strong> e cara ó porto <strong>AGP ou PCI Express</strong>; soe levar un disipador polo quentamento. O bus que a conecta co procesador chámase <strong>bus frontal (FSB)</strong>; a súa velocidade limita o rendemento porque é a máxima á que o procesador pode ler da RAM.</li>
  <li><strong>Ponte sur:</strong> transferencia de datos do <strong>disco duro</strong> e demais dispositivos de <strong>E/S</strong>, que transfire a través da canle de ligazón conectada á ponte norte.</li>
</ul>
<figure class="small"><img src="apuntes/fh/img/ud3/chipset-via.png" alt="Chip VIA de chipset" loading="lazy"><figcaption>Circuíto integrado dun chipset (VIA).</figcaption></figure>
<h4>Que é o PCH?</h4>
<p>Actualmente o <em>Northbridge</em> integrouse no procesador e pasou a chamarse <strong>PCH</strong>; o <em>Southbridge</em> aínda está na placa, pero agora chámase <strong>chipset</strong>. O <strong>Platform Controller Hub</strong> introduciuse en <strong>2009</strong> como solución simplificada de enrutamento de datos e soporte. Inclúe o <strong>reloxo do sistema</strong>, a <strong>Flexible Display Interface (FDI)</strong> (só con gráficos integrados) e a <strong>Direct Media Interface (DMI)</strong>.</p>
<p>Distribución actual: o <strong>PCH</strong> xestiona as principais canles PCIe (<strong>GPU + SSD M.2</strong>) e a <strong>memoria</strong>; o <strong>chipset</strong> xestiona os portos de <strong>E/S</strong>, algunhas canles PCIe e aspectos especiais como <strong>RAID</strong> ou <strong>overclocking</strong>.</p>
<h4>O equivalente en AMD (Zen)</h4>
<p>AMD ten un deseño equivalente con diferenzas (a súa arquitectura chámase <strong>Zen</strong>, fronte a <strong>Gen</strong> de xeración en Intel). Polo seu deseño tipo <strong>chiplet</strong>, o PCH está dentro do paquete pero separado dos núcleos: un die específico chamado <strong>I/O Die</strong>:</p>
<ul>
  <li><strong>Die de E/S (cIOD):</strong> comunicación entre o procesador e os compoñentes externos (memoria e bus PCI).</li>
  <li><strong>Infinity Fabric:</strong> bus que interconecta os CCX entre si, os CCD entre si e co die de E/S; forma parte do cIOD.</li>
  <li><strong>Unified Memory Controller (UMC):</strong> comunicación coa RAM.</li>
  <li><strong>Hub de E/S:</strong> comunicación co bus PCIe, periféricos e calquera outro bus que non sexa o da RAM.</li>
</ul>
<p>Noutras palabras: o <strong>die de E/S é a antiga ponte norte</strong> e o <strong>bus frontal (FSB) sería o Infinity Fabric</strong>. Cada parte funciona a unha frecuencia distinta: <strong>fclk</strong> (Infinity Fabric), <strong>uclk</strong> (UMC), <strong>iclk</strong> (I/O Hub); a RAM funciona a <strong>mclk</strong>.</p>
<h4>Capacidades que proporciona o PCH</h4>
<p>O procesador debe comunicarse con compoñentes de distintos fabricantes a través do PCH. As súas capacidades están en consonancia co procesador (normalmente proporcionais ó número de núcleos) e co prezo. Varían segundo:</p>
<ul>
  <li>Capacidade de <strong>overclocking</strong> para procesador e RAM.</li>
  <li>Número de <strong>carrís PCIe directos</strong>: normalmente 16 para a gráfica e algúns adicionais para SSD M.2.</li>
  <li>Número de interfaces <strong>SATA</strong>.</li>
  <li>Número de portos <strong>USB</strong> directos no procesador.</li>
  <li>Liñas de comunicación directa co chipset.</li>
</ul>
<p>Non tódalas placas empregan tódalas características dun PCH: nunha Micro-ATX ou Mini-ITX non hai espazo para varias interfaces, quedando só as máis importantes.</p>
<div class="box warn"><div class="box-title">Problemas do PCH</div><p>Igual que unha CPU, as <strong>temperaturas</strong> afectan ó seu funcionamento; un erro de microcódigo ou unha voltaxe mal axustada tamén poden causar erros críticos. Se o chipset se sobrequenta pode sufrir os mesmos fallos que unha CPU; por iso incorpora un <strong>disipador pasivo</strong>. É moi importante unha configuración <strong>equilibrada en potencia e refrixeración</strong>.</p></div>`
  },

  /* ---------------- 5 ---------------- */
  {
    id: 'fh-ud3-5',
    tipo: 'tema',
    titulo: '5. Procesador',
    resumen: 'CPU: o circuíto integrado máis complexo, o cerebro do ordenador. Constituída por rexistros, unidade de control, ALU e unidade de coma flotante; millóns de transistores nunha oblea de silicio, encapsulada e conectada por un zócolo. Precisa refrixeración (disipador + ventilador + pasta térmica). A velocidade depende da frecuencia de reloxo (>6 GHz hoxe vs 4,77 MHz), dos buses (FSB, factor de multiplicación) e da caché.',
    claves: ['CPU = Central Process Unit: cerebro do ordenador, organiza o fluxo de datos e executa instrucións de baixo nivel ó ritmo do reloxo', 'Compoñentes: rexistros, unidade de control, ALU, unidade de coma flotante', 'Chip de silicio con millóns de transistores, condensadores e resistencias; encapsulado e inserido nun zócolo (socket)', 'Refrixeración: disipador (cobre/aluminio) + ventiladores + pasta térmica', 'Varios micros en paralelo; varios núcleos físicos ou lóxicos por micro', 'Tendencia a integrar: FPU, controlador de RAM, controladores de buses, vídeo', 'Fabricantes: Intel (alianza con Microsoft), AMD, Cyrix, Motorola; Qualcomm e Samsung en móbiles', 'Frecuencia de reloxo: MHz/GHz; 4,77 MHz nos primeiros PC → >6 GHz hoxe; cristal de cuarzo', 'Buses: velocidade externa = FSB (>8000 MHz); factor de multiplicación × externa = interna (200 MHz × 8 = 1600 MHz)', 'Caché: máis rápida que a RAM, pouca capacidade; interna (no micro) e externa; acerto/fallo de caché; L1, L2, L3', 'Arquitecturas comerciais: x86 (32 bits), x64 (64 bits), ARMv8 (móbil 64 bits)'],
    tags: ['procesador', 'CPU', 'microprocesador', 'ALU', 'unidade de control', 'rexistros', 'frecuencia', 'reloxo', 'FSB', 'factor de multiplicación', 'caché', 'Intel', 'AMD', 'x86', 'x64', 'ARM'],
    links: ['fh-ud3-5-1', 'fh-ud3-5-2', 'fh-ud3-5-3', 'fh-ud3-5-4', 'fh-ud3-5-5', 'fh-ud3-5-6'],
    contenido: `
<div class="box def"><div class="box-title">Procesador (CPU, Central Process Unit)</div><p>O circuíto integrado <strong>máis complexo</strong> dun sistema informático; o <strong>cerebro do ordenador</strong>. Organiza o fluxo de datos no interior da placa base, cara ou dende os periféricos á memoria e entre o resto dos compoñentes. Realiza instrucións programadas en <strong>linguaxe de baixo nivel</strong> (de cálculo, aritméticas e lóxicas) a un ritmo marcado polo <strong>reloxo</strong>.</p></div>
<p>Está constituída esencialmente por <strong>rexistros</strong>, unha <strong>unidade de control</strong>, unha <strong>unidade aritmético-lóxica (ALU)</strong> e unha <strong>unidade de cálculo en coma flotante</strong>.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/procesador-intel.png" alt="Procesador Intel na placa base" loading="lazy"><figcaption>Procesador Intel instalado no seu zócolo.</figcaption></figure>
<p>A nivel físico é un <strong>chip</strong> no que millóns de compoñentes electrónicos (transistores, condensadores, resistencias) están construídos nunha <strong>oblea de silicio</strong>. Está <strong>encapsulado</strong> e conéctase mediante un <strong>zócolo (socket)</strong> específico da placa base. Pola miniaturización prodúcense <strong>altas temperaturas</strong> que o poden danar: incorpóraselle un <strong>disipador</strong> de cobre ou aluminio e un ou máis <strong>ventiladores</strong>; entre disipador e cápsula colócase <strong>pasta térmica</strong>.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/die-procesador.png" alt="Die dun procesador" loading="lazy"><figcaption>Die de silicio dun procesador.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/procesador-posterior.png" alt="Parte posterior dun procesador LGA" loading="lazy"><figcaption>Parte posterior do procesador (contactos LGA).</figcaption></figure>
</div>
<p>Un sistema de alto rendemento pode ter <strong>varios microprocesadores en paralelo</strong>, e un micro pode estar constituído por varios <strong>núcleos físicos ou lóxicos</strong>. Existe a tendencia de <strong>integrar</strong> o maior número de elementos no propio procesador (unidades de punto flotante, controladores de RAM e de buses, procesadores de vídeo), aumentando eficiencia e miniaturización.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/nucleos-cpu.png" alt="Núcleos dun procesador" loading="lazy"><figcaption><strong>Núcleo físico:</strong> porción interna case independente que realiza tódalas actividades dunha CPU. <strong>Núcleo lóxico:</strong> simulación dun núcleo físico para repartir o procesamento.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/nucleos-rendemento.png" alt="Núcleos con distintos niveis de rendemento" loading="lazy"><figcaption>Núcleos con distintos niveis de rendemento.</figcaption></figure>
</div>
<h4>Fabricantes</h4>
<p>Os máis estendidos son os de <strong>Intel</strong>, que nunha especie de alianza con Microsoft fai que o software deste sexa totalmente compatible cos seus procesadores. Outros: <strong>AMD</strong>, Cyrix, Motorola… Na actualidade AMD está sendo desprazada do segundo posto por <strong>Qualcomm</strong> ou <strong>Samsung</strong> pola irrupción no mercado móbil.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/intel-core-i7.png" alt="Intel Core i7" loading="lazy"><figcaption>Intel Core i7.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/amd-opteron.png" alt="AMD Opteron" loading="lazy"><figcaption>AMD Opteron (64 bits).</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/samsung-exynos.png" alt="Samsung Exynos" loading="lazy"><figcaption>Samsung Exynos (ARM).</figcaption></figure>
</div>
<div class="box info"><div class="box-title">Procesadores comerciais (ISA)</div><ul><li><strong>x86:</strong> arquitectura de 32 bits</li><li><strong>x64:</strong> arquitectura de 64 bits</li><li><strong>ARMv8:</strong> arquitectura para móbiles de 64 bits</li></ul></div>
<h4>De que depende a velocidade do procesador</h4>
<ul>
  <li><strong>Frecuencia de reloxo:</strong> velocidade á que traballa, en MHz/GHz. Hoxe supéranse os <strong>6 GHz</strong>, fronte ós <strong>4,77 MHz</strong> dos primeiros PC. 8 MHz = 8 millóns de operacións por segundo. É unha velocidade <strong>interna</strong>. Un <strong>cristal de cuarzo</strong> na placa xera os impulsos de forma síncrona.</li>
  <li><strong>Buses:</strong> vías internas polas que circulan os datos; a súa eficacia depende do ancho e da rapidez. A velocidade <strong>externa</strong> á que o procesador se comunica coa placa chámase <strong>velocidade do bus ou FSB</strong> (pode superar os 8000 MHz) e é á que o computador realmente funciona no seu conxunto. A discrepancia entre interna e externa coñécese como <strong>factor de multiplicación</strong>: se a externa é 200 MHz e o factor 8, a velocidade do procesador será 1600 MHz.</li>
  <li><strong>Memoria caché:</strong> memoria de acceso rápido, máis que a RAM, para reducir os accesos á RAM. Pouca capacidade. Dous tipos: <strong>interna</strong> (no propio procesador, pequena e moi rápida) e <strong>externa</strong> (entre o micro e o resto de compoñentes, almacenamento intermedio).</li>
</ul>
<div class="box tip"><div class="box-title">Caché do procesador</div><p>Garda as posicións da memoria principal <strong>máis utilizadas</strong>. Cando a caché contén os datos que necesita a CPU non hai esperas: <strong>acerto de caché</strong>. Cando non os contén: <strong>fallo de caché</strong>, e a CPU espera á memoria principal. Na práctica hai polo menos dúas: <strong>L1</strong>, <strong>L2</strong> e, se existe, <strong>L3</strong>.</p></div>
<div class="box info"><div class="box-title">Rendemento do procesador</div><p>Medilo non é doado: a frecuencia de reloxo permite comparar procesadores con núcleos da mesma familia, pero é un indicador limitado. Unha forma fiable é obter as <strong>instrucións que executa por ciclo de reloxo</strong> (IPC).</p></div>
<div class="box warn"><div class="box-title">Overclocking</div><p>Pretende alcanzar unha maior velocidade de reloxo por riba das especificacións do fabricante. Pode <strong>acurtar a vida útil</strong> do compoñente ou supor <strong>perda de estabilidade</strong>.</p></div>`
  },
  {
    id: 'fh-ud3-5-1',
    tipo: 'subtema',
    titulo: '5.1 Zócolo do microprocesador',
    resumen: 'Lugar onde se insire o procesador: conecta electricamente os pins e suxeita o chip. Encapsulados: PGA (pins no procesador, AMD clásico, ZIF con panca), LGA (pins no zócolo, Intel; AMD tamén xa sen pins), BGA (bólas soldadas á placa; móbiles e portátiles). Placas de servidor con varios zócolos; supercomputadores e consolas: soldados.',
    claves: ['Zócolo (socket): conecta electricamente os pins e suxeita o chip', 'PGA (Pin Grid Array): pins no micro inseridos por presión; AMD; ZIF con panca e marca triangular', 'LGA (Land Grid Array): pins dentro do zócolo; Intel trasladou o problema das roturas ás placas; AMD tamén xa sen pins', 'Intel e AMD: placas exclusivas e incompatibles entre si', 'BGA (Ball Grid Array): bólas soldadas directamente á placa; sen zócolo; smartphones e portátiles', 'ZIF (Zero Insertion Force): panca para inserir sen esforzo; antes rompíanse os pins', 'Servidores: varios zócolos · Supercomputadores e consolas (arquitectura propietaria): soldados'],
    tags: ['zócolo', 'socket', 'PGA', 'LGA', 'BGA', 'ZIF', 'pins', 'encapsulado'],
    contenido: `
<p>É o lugar onde se insire o procesador na placa base. O seu propósito é <strong>conectar electricamente os pins</strong> do procesador á placa e <strong>suxeitar o chip</strong>. Os primeiros micros soldábanse ou inseríanse en zócolos imposibles de retirar.</p>
<h4>Encapsulados máis utilizados</h4>
<ul>
  <li><strong>PGA (Pin Grid Array):</strong> cadrado cun gran número de conectores redondos onde os <strong>pins do microprocesador</strong> se insiren por presión. Era o modelo que usaba <strong>AMD</strong>. Presentan unha <strong>panca</strong> e unha <strong>fendedura triangular</strong> (tamén no micro) para saber en que posición encaixa: cumpren o formato <strong>ZIF</strong>.</li>
  <li><strong>LGA (Land Grid Array):</strong> os pins colocáronse <strong>dentro do zócolo</strong> en lugar de no procesador. Medida tomada por <strong>Intel</strong> para trasladar o problema da rotura dos pins ós fabricantes de placas. AMD tamén fabrica hoxe procesadores sen pins. Aínda así, as placas <strong>non son compatibles</strong> para ambos: Intel e AMD teñen placas exclusivas e incompatibles.</li>
  <li><strong>BGA (Ball Grid Array):</strong> o micro ten pequenas <strong>bólas que se soldan directamente á placa</strong>. Non require zócolo e simplifica custos. Polo seu tamaño úsase en <strong>smartphones e portátiles</strong>.</li>
</ul>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/zocolo-lga.png" alt="Zócolo LGA" loading="lazy"><figcaption>Zócolo <strong>LGA</strong> (pins no zócolo).</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/zocolo-pga.png" alt="Zócolo PGA" loading="lazy"><figcaption>Zócolo <strong>PGA</strong> (buracos para os pins do micro).</figcaption></figure>
</div>
<div class="box info"><div class="box-title">ZIF (Forza de inserción cero)</div><p>Hoxe tódolos zócolos son <strong>ZIF</strong> (<em>Zero Insertion Force</em>): teñen unha pequena panca que permite inserir os chips sen esforzo. Antes era necesario premer fisicamente o chip e, peor, forzalo a saír facendo panca cun desaparafusador, o que rompía moitos pins.</p></div>
<p>Unha placa pode ter <strong>varios zócolos</strong>: é o caso das placas de <strong>servidor</strong>, con dous ou máis procesadores. En configuracións con moitísimos procesadores, como os <strong>supercomputadores</strong>, non se usan zócolos: os micros sóldanse á placa, optimizando espazo e rendemento.</p>
<div class="box tip"><div class="box-title">Arquitectura aberta vs propietaria</div><p>Os zócolos úsanse en sistemas de <strong>arquitectura aberta</strong>, onde se busca variedade de compoñentes e substitución. Nos sistemas de <strong>arquitectura propietaria</strong>, como as <strong>videoconsolas</strong> (ex.: procesador da PS5), os circuítos integrados sóldanse á placa.</p></div>`
  },
  {
    id: 'fh-ud3-5-2',
    tipo: 'subtema',
    titulo: '5.2 Aspectos importantes ó elixir un microprocesador',
    resumen: 'Non abonda con núcleos e frecuencia. Comprobar: núcleos (4–12; multithreading = 2 fíos/núcleo, o segundo máis lento), frecuencia base (garantida) vs turbo (depende de núcleos activos e temperatura), TDP (potencia térmica a disipar, non consumo; desde Core 12.ª xen Intel dá consumo real), caché (L1 por núcleo dentro, L2 por núcleo fóra, L3 compartida; L4 con GPU integrada) e gráficos integrados (ata 4K; non nos de xogos).',
    claves: ['Núcleos ≠ velocidade: determinan cantos procesos á vez (1 por núcleo, 2 con multithreading; o 2.º fío máis lento)', '4 núcleos con multithreading pode rendir menos que 6 sen el', 'Frecuencia base: garantida en tódolos núcleos · turbo: máximo con poucos núcleos activos e boa temperatura (ex.: 6 GHz → 5,2 GHz cos 8 activos → 3,2 GHz base se refrixera mal)', 'TDP (Thermal Design Power): potencia térmica disipada, non consumo; 95 W TDP pode consumir 150 W; Intel dá consumo real desde a 12.ª xeración', 'Caché L1: privada por núcleo, dentro do núcleo, mínima e máis rápida; datos + instrucións', 'Caché L2: privada por núcleo, fóra do núcleo, intermedia', 'Caché L3: compartida por tódolos núcleos, unha por procesador, maior e máis lenta; se só se cita unha caché, é a L3', 'L4: pouco frecuente, con GPU integrada', 'Gráficos integrados: ata 4K; a maioría os inclúe agás os deseñados para xogos', 'Fíos (threads): fluxo de control lóxico; 1-2 por núcleo; 12 fíos ≠ 12 núcleos · HyperThreading: i3 con 2 núcleos → 4 fíos'],
    tags: ['elixir procesador', 'núcleos', 'multithreading', 'HyperThreading', 'fíos', 'threads', 'frecuencia base', 'turbo', 'TDP', 'caché L1', 'L2', 'L3', 'gráficos integrados'],
    contenido: `
<p>A arquitectura dun micro moderno é moi complexa: confiar en parámetros básicos como o número de núcleos ou a frecuencia pode ser un erro, sobre todo comparando empresas ou series distintas, porque hai moitos outros parámetros (caché, instrucións por ciclo…). Ademais, polas diferenzas arquitectónicas e as microinstrucións que implementan, algúns procesadores son mellores en certas tarefas.</p>
<h4>Núcleos</h4>
<p>Todo depende do uso. O número varía normalmente de <strong>4 a 12</strong>. Non determina a velocidade, senón o <strong>número de procesos que pode executar á vez</strong>: un por núcleo, ou dous fíos por núcleo se ten <strong>multithreading simultáneo</strong> (o segundo proceso será moito máis lento). Un procesador de 4 núcleos con multithreading pode ter menos potencia que un de 6 sen el, segundo a tarefa.</p>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud3/hyperthreading.png" alt="Sen e con hyperthreading" loading="lazy"><figcaption><strong>HyperThreading.</strong> Simula dous procesadores (núcleos) nun só chip, dividindo a carga. Un Core i3 con dous núcleos físicos compórtase como se tivese catro (<em>núcleos lóxicos</em>).</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud3/fios-nucleos.png" alt="8 fíos sobre 4 núcleos" loading="lazy"><figcaption><strong>Fíos de procesamento.</strong> Non son físicos: son o fluxo de control dun programa. As tarefas divídense en fragmentos (fíos) para optimizar as esperas; normalmente 1–2 fíos por núcleo. Un procesador con 12 fíos non ten 12 núcleos.</figcaption></figure>
</div>
<h4>Frecuencia de funcionamento</h4>
<p>Importante ó comparar procesadores da <strong>mesma arquitectura</strong>; máis alta é mellor, con advertencias. Distinguir a <strong>frecuencia base</strong> (garantida en tódolos núcleos) da <strong>frecuencia turbo</strong> (máximo que depende dos núcleos activos e da temperatura). Exemplo: un turbo máximo de 6 GHz con oito núcleos só se alcanza con un ou dous activos; cos oito pode baixar a 5,2 GHz; con mala refrixeración, á base (p. ex. 3,2 GHz), a única garantida.</p>
<h4>Potencia térmica disipada (TDP)</h4>
<p>A refrixeración é importante, e tamén a <strong>Potencia de deseño térmico (TDP)</strong>: refírese á <strong>potencia térmica disipada, non á consumida</strong>, aínda que ambas se miden en watts. Un procesador de 95 W TDP pode consumir 150 W: os 95 W indican que require 95 W de refrixeración para funcionar á frecuencia base. A partir do <strong>Core de 12.ª xeración</strong>, Intel dá o consumo real, non o TDP.</p>
<h4>Memoria caché</h4>
<p>Pequena RAM dentro do procesador; esencial porque a RAM é demasiado lenta para o micro. Almacena instrucións e datos de uso frecuente. Tres niveis:</p>
<ul>
  <li><strong>L1:</strong> privada por núcleo, <strong>dentro do núcleo</strong>. Menor capacidade, a máis rápida. Divídese en caché de <strong>datos</strong> e de <strong>instrucións</strong>.</li>
  <li><strong>L2:</strong> privada por núcleo, pero <strong>fóra do núcleo</strong>. Capacidade e velocidade intermedias.</li>
  <li><strong>L3:</strong> <strong>compartida</strong> por tódolos núcleos; só unha por procesador. Maior capacidade, a máis lenta.</li>
</ul>
<p>Existe outra pouco frecuente, a <strong>L4</strong>, en procesadores con GPU integrada. Ó ascender de nivel aumenta a capacidade e diminúe a velocidade. Se só se menciona un tamaño de caché, refírese á <strong>L3</strong>.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/cache-l1-l2-l3.png" alt="Esquema de cachés L1, L2 e L3" loading="lazy"><figcaption>L1 (datos e instrucións) e L2 por núcleo; L3 compartida (2 MB/núcleo).</figcaption></figure>
<h4>Gráficos integrados</h4>
<p>En lugar dunha tarxeta gráfica (que seguirá funcionando se a hai), o micro inclúe todo o necesario para reproducir gráficos; comprobar a resolución (ata <strong>4K</strong>). A gran maioría inclúen gráficos por defecto, <strong>agás os deseñados para xogos</strong>.</p>
<div class="box tip"><div class="box-title">Por que os micros para xogos non inclúen gráficos?</div><p>Porque a potencia da <strong>GPU</strong> dedicada sempre será maior, e os micros tamén necesitan RAM para funcionar correctamente.</p>
<figure class="small"><img src="apuntes/fh/img/ud3/tarxeta-grafica-dedicada.png" alt="Tarxeta gráfica dedicada" loading="lazy"><figcaption>Tarxeta gráfica dedicada.</figcaption></figure></div>`
  },
