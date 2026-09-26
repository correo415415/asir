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
