/* ============================================================
 * FH · Fundamentos de Hardware · Unidade 2
 * Representación e medidas da información
 * ------------------------------------------------------------
 * Fonte: apuntes/fh/ud2-representacion-e-medidas-da-informacion.pdf (texto OCR en apuntes/fh/ocr/ud2.txt)
 * Imaxes: apuntes/fh/img/ud2/
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
  id: 'fh-ud2',
  codigo: 'UD2',
  titulo: 'Representación e medidas da información',
  fuente: 'apuntes/fh/ud2-representacion-e-medidas-da-informacion.pdf',
  nodos: [

  /* ---------------- HUB ---------------- */
  {
    id: 'fh-ud2',
    tipo: 'unidad',
    titulo: 'UD2 · Representación e medidas da información',
    resumen: 'Tipos de datos e códigos de E/S (BCD, EBCDIC, ASCII, Unicode), sistemas de numeración e cambios de base, medidas de información (KB vs KiB, ancho de banda, frecuencia), aritmética binaria, representación de enteiros (signo-magnitude, C1, C2, exceso), coma fixa e flotante e métodos de enderezamento.',
    claves: ['Datos de entrada / intermedios / saída · constantes / variables', 'Códigos alfanuméricos: BCD (6 bits), EBCDIC (8), ASCII (8), Unicode, FIELDATA', 'Bases 2, 8, 16 · Teorema fundamental da numeración', 'KB = 1000 B (SI) · KiB = 1024 B (IEC)', 'Taxa de transferencia = ancho do bus × frecuencia', 'Suma, resta, multiplicación e división binaria', 'Signo e magnitude · Complemento a 1 · Complemento a 2 · Exceso a 2ⁿ⁻¹', 'Coma fixa: binario puro, BCD, decimal desempaquetado/empaquetado', 'Coma flotante: signo + expoñente + mantisa', 'Enderezamento inmediato, directo, indirecto e relativo'],
    tags: ['fh', 'ud2', 'binario', 'hexadecimal', 'octal', 'ascii', 'complemento a 2', 'coma flotante', 'enderezamento', 'medidas'],
    contenido: `
<p>Segunda unidade do módulo <strong>Fundamentos de Hardware</strong>. Explica como o ordenador codifica internamente os datos (texto e números), como se miden as cantidades de información e como se localizan os datos en memoria.</p>
<h4>Sumario</h4>
<ol>
  <li>Introdución</li>
  <li>Tipos de datos · 2.1 Códigos de Entrada/Saída</li>
  <li>Sistemas de codificación numérica · 3.1 Conversión dun sistema de numeración a outro</li>
  <li>Medidas de información · 4.1 Engano na capacidade dos discos · 4.2 Frecuencia dun bus e taxa de transferencia · 4.3 Velocidade de procesamento</li>
  <li>Aritmética binaria</li>
  <li>Métodos para representar números enteiros · 6.1 Signo e magnitude · 6.2 Complemento a 1 · 6.3 Complemento a 2 · 6.4 Exceso a 2ⁿ⁻¹</li>
  <li>Importancia da representación en complementos · 7.1 Coma fixa · 7.2 Coma flotante</li>
  <li>Métodos de enderezamento</li>
</ol>
<h4>Obxectivos</h4>
<ul>
  <li>Distinguir os diferentes tipos de datos.</li>
  <li>Aprender a cambiar de base de numeración.</li>
  <li>Realizar cálculos sinxelos coas unidades de medida de uso común nos sistemas informáticos.</li>
  <li>Saber operar en binario.</li>
  <li>Coñecer os métodos para representar números de diferentes maneiras.</li>
  <li>Coñecer as diferentes formas de enderezar datos.</li>
</ul>
<div class="box info"><div class="box-title">Nota</div><p>Os apuntamentos orixinais son un PDF en galego con texto rasterizado; o contido extraeuse por OCR e revisouse. Os exercicios resoltos do PDF están recollidos como nodos de tipo <em>ejercicio</em>.</p></div>`
  },

  /* ---------------- 1 ---------------- */
  {
    id: 'fh-ud2-1',
    tipo: 'tema',
    titulo: '1. Introdución',
    resumen: 'Os circuítos electrónicos só distinguen dous estados (pasa corrente = 1, non pasa = 0), polo que toda a información —numérica e alfanumérica— debe transformarse a binario. Divídese en ordes e datos.',
    claves: ['Dous estados: pasa corrente (1) / non pasa (0)', 'Todo dato (numérico ou alfanumérico) → representación binaria', 'A información divídese en ordes e datos'],
    tags: ['binario', 'introdución', 'ordes', 'datos'],
    contenido: `
<p>Os ordenadores precisan información coa que traballar para poder resultar útiles. Ó estar compostos de <strong>circuítos electrónicos</strong>, atopámonos co problema de que só traballan con dous estados: <strong>pasa corrente</strong> (que representaremos cun <code>1</code>) e <strong>non pasa corrente</strong> (que representaremos cun <code>0</code>).</p>
<p>Esta característica dos equipos electrónicos xera a necesidade de <strong>transformar os datos</strong>, tanto numéricos como alfanuméricos, nunha <strong>representación binaria</strong> para que o ordenador os poida procesar. Esta información divídese en <strong>ordes</strong> e <strong>datos</strong>, que poden ser de diferentes tipos atendendo ó tratamento que se lles dea.</p>`
  },

  /* ---------------- 2 ---------------- */
  {
    id: 'fh-ud2-2',
    tipo: 'tema',
    titulo: '2. Tipos de datos',
    resumen: 'Segundo a fase de procesamento: de entrada, intermedios e de saída. Segundo se cambian: constantes e variables. Os datos subminístranse mediante caracteres: alfabéticos, numéricos, especiais, de control e gráficos.',
    claves: ['Fases: entrada → proceso → saída', 'Datos de entrada (soportes/periféricos), intermedios (proceso) e de saída (resultados)', 'Constantes (ex.: π) vs variables (ex.: xuros dunha hipoteca)', 'Alfanuméricos = alfabéticos + numéricos', 'Caracteres de texto = alfabéticos + numéricos + especiais'],
    tags: ['tipos de datos', 'entrada', 'saída', 'constantes', 'variables', 'caracteres', 'alfanuméricos'],
    links: ['fh-ud2-2-1'],
    contenido: `
<p>O tratamento automático da información establece <strong>tres fases</strong> de procesamento (entrada, proceso e saída) que clasifican os datos do seguinte modo:</p>
<ul>
  <li><strong>De entrada:</strong> son os que se introducen dende soportes de información (disco duro, lapis de memoria, DVD…) ou a través dos periféricos de entrada (teclado, rato, escáner…). Correspóndense coa fase de entrada.</li>
  <li><strong>Intermedios:</strong> son os que se obteñen e usan na fase de proceso, que ten lugar no hardware do ordenador.</li>
  <li><strong>De saída:</strong> denomínanse tamén <em>resultados</em> e aparecen na fase de saída. Visualizámolos a través dos periféricos de saída (monitor, impresora…).</li>
</ul>
<p>Os datos tamén se clasifican atendendo a se o seu valor cambia ou non durante o proceso:</p>
<ul>
  <li><strong>Constantes:</strong> permanecen inamovibles durante a execución do proceso ou programa que os usa. Por exemplo o número π nun programa que calcula a superficie dun círculo: o seu valor será o mesmo para calquera dato de entrada.</li>
  <li><strong>Variables:</strong> modifícanse durante o proceso dependendo do código do programa. Por exemplo os xuros que un usuario debe pagar ó banco pola súa hipoteca, pois dependendo do xuro pactado (e doutras condicións) o resultado variará.</li>
</ul>
<p>Nos ordenadores, o conxunto de instrucións execútase sobre un conxunto de datos. Esta información subminístrase mediante <strong>símbolos ou caracteres</strong>:</p>
<table>
<tr><th>Caracteres</th><th>Exemplos</th></tr>
<tr><td>Alfabéticos</td><td>a, b, c… y, z, A, B, C… Y, Z</td></tr>
<tr><td>Numéricos</td><td>0, 1, 2, 3… 9</td></tr>
<tr><td>Especiais</td><td>« + - [ ] { } ( ) ? . ,</td></tr>
<tr><td>De control</td><td>Fin de liña, chío (bell), avance de páxina…</td></tr>
<tr><td>Gráficos</td><td>Símbolos e debuxos: ▲ ● ☺ ♫ …</td></tr>
</table>
<div class="box def"><div class="box-title">Alfanuméricos e de texto</div><p>Os caracteres do primeiro e segundo grupo denomínanse <strong>caracteres alfanuméricos</strong> e os pertencentes ós tres primeiros grupos, <strong>caracteres de texto</strong>.</p></div>`
  },
  {
    id: 'fh-ud2-2-1',
    tipo: 'subtema',
    titulo: '2.1 Códigos de Entrada/Saída',
    resumen: 'Códigos alfanuméricos estándar para representar símbolos en binario: BCD de intercambio (6 bits, 64 valores), EBCDIC (8 bits, 256), ASCII (8 bits, o máis usado), Unicode (aplicacións actuais e Internet) e FIELDATA (6 bits, Unisys).',
    claves: ['Asignación de códigos arbitraria → necesidade de estándares', 'BCD de intercambio: 6 bits (+1 paridade opcional) = 64 valores, sen minúsculas', 'EBCDIC: 8 bits en dous bloques de 4 (zona + posición) = 256 combinacións', 'ASCII: 8 bits, 256 símbolos, o máis utilizado', 'Unicode: aplicacións actuais, Internet, Windows', 'FIELDATA: 6 bits, bloques de 36 bits, ordenadores Unisys'],
    tags: ['ASCII', 'EBCDIC', 'BCD', 'Unicode', 'FIELDATA', 'códigos alfanuméricos', 'paridade', 'bits de zona'],
    contenido: `
<p>Os sistemas de <strong>codificación alfanumérica</strong> serven para representar unha cantidade determinada de símbolos en binario. A cada símbolo corresponderalle unha combinación dun número de bits. A asignación de códigos é arbitraria, e por tanto cada fabricante podería asignar unha combinación diferente ó mesmo carácter. Para combater o caos que provocaría, créanse códigos que normalicen esta situación e que se aceptan como <strong>estándares</strong>.</p>
<figure class="small"><img src="apuntes/fh/img/ud2/ascii-art.png" alt="Imaxe convertida a caracteres ASCII" loading="lazy"><figcaption><strong>Imaxe en código ASCII.</strong> Co programa ASCII-O-Matic, dispoñible na Web, podemos transformar calquera imaxe en caracteres alfanuméricos.</figcaption></figure>
<h4>Código BCD de intercambio normalizado</h4>
<p><em>Standard BCD Interchange Code</em>: utiliza <strong>6 bits</strong>, polo que pode asignar 2⁶ = <strong>64 valores</strong> (non inclúe letras minúsculas). Ás veces engádeselle un <strong>bit de paridade</strong> impar para comprobar erros, co que se ten unha lonxitude de 7 bits, pero só 64 valores válidos. O formato das palabras é:</p>
<ul>
  <li><strong>Bit de paridade</strong> (ou de verificación): opcional; serve para detectar erros nos caracteres.</li>
  <li><strong>Bits de zona:</strong> serven para distinguir entre un número e outro carácter (<code>00</code> para os caracteres numéricos).</li>
  <li><strong>Bits de posición:</strong> para os valores numéricos codifícase en binario natural (agás o cero, que se codifica como un 10, isto é, <code>1010</code>).</li>
</ul>
<h4>EBCDIC</h4>
<p><em>Extended BCD Interchange Code</em>: cada símbolo represéntase por unha combinación de <strong>8 bits</strong> agrupados en dous bloques de catro. É o formato estendido do BCD: 2⁸ = <strong>256</strong> combinacións posibles (maiúsculas, minúsculas, números e incluso caracteres de control).</p>
<ul>
  <li><strong>Bits de zona:</strong> <code>00</code> carácter de control · <code>01</code> carácter especial (nin letra nin número) · <code>10</code> minúscula · <code>11</code> maiúscula ou numérico.</li>
  <li><strong>Bits de posición:</strong> se os bits 2 e 3 valen <code>11</code> trátase dun carácter numérico; noutro caso é unha letra.</li>
</ul>
<h4>ASCII</h4>
<p><em>American Standard Code for Information Interchange</em>: utiliza unha combinación de <strong>8 bits</strong> para representar cada símbolo, co que se poden representar un total de <strong>256</strong> símbolos diferentes (2⁸). É <strong>o máis utilizado</strong>. Permite representar os díxitos do 0 ó 9, as letras maiúsculas da A á Z, as minúsculas, caracteres especiais e de control.</p>
<h4>Unicode</h4>
<p>Úsase na maioría das aplicacións actuais e en Internet, así como en sistemas operativos como Windows.</p>
<h4>FIELDATA</h4>
<p>Utiliza bloques de <strong>6 bits</strong> para representar os símbolos. O seu uso é raro e pouco estendido, xa que só se usa en ordenadores que procesan a información en bloques de 36 bits. Usábase en ordenadores <strong>Unisys</strong>.</p>
<table>
<tr><th>Código</th><th>Bits</th><th>Símbolos</th><th>Observacións</th></tr>
<tr><td>BCD de intercambio</td><td>6 (+1 paridade)</td><td>64</td><td>Sen minúsculas</td></tr>
<tr><td>EBCDIC</td><td>8</td><td>256</td><td>Extensión do BCD (IBM)</td></tr>
<tr><td>ASCII</td><td>8</td><td>256</td><td>O máis utilizado</td></tr>
<tr><td>Unicode</td><td>variable</td><td>—</td><td>Aplicacións actuais, Internet</td></tr>
<tr><td>FIELDATA</td><td>6</td><td>64</td><td>Unisys, palabras de 36 bits</td></tr>
</table>`
  },

  /* ---------------- 3 ---------------- */
  {
    id: 'fh-ud2-3',
    tipo: 'tema',
    titulo: '3. Sistemas de codificación numérica',
    resumen: 'Un sistema de numeración é o conxunto de símbolos e regras para representar datos numéricos. Son posicionais e están ligados a unha base. O ordenador usa binario (base 2) internamente e códigos agrupados octal (base 8, 3 bits) e hexadecimal (base 16, 4 bits).',
    claves: ['Sistema de numeración = símbolos + regras · ligado a unha base', 'Posicional: o valor depende da posición e do factor de multiplicación', 'Bit = menor unidade de información (0 ou 1)', 'Binario: base 2 · Octal: base 8 (1 símbolo = 3 bits) · Hexadecimal: base 16 (1 símbolo = 4 bits, A–F = 10–15)', 'Agrupar bits só é directo con bases potencia de 2', 'Teorema fundamental da numeración (TFN): N = Σ Xᵢ · Bⁱ'],
    tags: ['sistemas de numeración', 'binario', 'octal', 'hexadecimal', 'base', 'bit', 'TFN', 'posicional'],
    links: ['fh-ud2-3-1'],
    contenido: `
<div class="box def"><div class="box-title">Sistema de numeración</div><p>Conxunto de <strong>símbolos e regras</strong> que se utiliza para representar datos numéricos.</p></div>
<p>Caracterízanse por estar ligados a unha <strong>base</strong> que determina o número de símbolos diferentes que os compoñen. Trátase de sistemas <strong>posicionais</strong>: o valor que cada símbolo representa queda determinado pola posición que ocupa en relación ó resto de símbolos e polo factor de multiplicación correspondente.</p>
<figure class="small"><img src="apuntes/fh/img/ud2/pesos-posicionais.png" alt="Pesos posicionais en base 10" loading="lazy"><figcaption>Pesos de cada posición nun sistema posicional en base 10: …10⁵, 10⁴, 10³, 10², 10¹, 10⁰.</figcaption></figure>
<p>Aqueles que nos guiamos polo sistema métrico decimal estamos afeitos a usar múltiplos de 10 para representar cantidades, porque o número de símbolos que emprega o noso sistema é exactamente 10 (do 0 ó 9).</p>
<p>O sistema de codificación numérica que emprega o ordenador para representar internamente as instrucións e os datos é o <strong>código binario natural</strong>, que posúe dous símbolos (0 e 1) debido ás características propias dos equipos informáticos: funcionan con electricidade e é relativamente sinxelo comprobar se nun determinado instante pasa ou non a corrente por un punto.</p>
<div class="box def"><div class="box-title">Bit</div><p>Cada un dos símbolos cos que se codifica cada sistema é a <strong>menor unidade de información</strong> que o sistema pode procesar e recibe o nome de <strong>bit</strong>.</p></div>
<p>Os ordenadores, a nivel interno, tamén utilizan <strong>códigos agrupados</strong> (octal e hexadecimal), porque facilitaban a labor dos programadores: programar en binario (ensamblador ou código máquina) é moi irritante e provoca erros imprevisibles se secuenciamos mal os uns e os ceros. É posible agrupar os bits deste xeito porque é moi doado converter un número en base 2 ó correspondente noutra base maior sempre que sexa <strong>potencia de dous</strong> (existe unha correspondencia directa), pero non a outras como base 5 ou base 7.</p>
<ul>
  <li><strong>Binario:</strong> base 2 (símbolos 0 e 1). Derívase directamente do paso da corrente polos compoñentes electrónicos; o ordenador úsao a nivel interno. Cada símbolo decimal represéntase mediante unha combinación de catro bits.</li>
  <li><strong>Octal:</strong> base 8 (do 0 ó 7); os números represéntanse posicionalmente por potencias de 8. Cada símbolo en base 8 equivale a <strong>3 bits</strong>.</li>
  <li><strong>Hexadecimal:</strong> base 16 (do 0 ó 9 e do A ó F). As letras A–F representan os números do 10 ó 15. Cada símbolo en base 16 equivale a <strong>4 bits</strong>.</li>
</ul>
<figure class="small"><img src="apuntes/fh/img/ud2/simbolos-hexadecimais.png" alt="Símbolos hexadecimais 0-9 e A-F" loading="lazy"><figcaption><strong>Sistema hexadecimal.</strong> Emprega letras para representar parte dos seus símbolos, polo que deberemos traducilas a valores numéricos antes de efectuar operacións.</figcaption></figure>
<table>
<tr><th>Decimal</th><th>Binario</th><th>Octal</th><th>Hexadecimal</th></tr>
<tr><td>0</td><td>0000</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>0001</td><td>1</td><td>1</td></tr>
<tr><td>2</td><td>0010</td><td>2</td><td>2</td></tr>
<tr><td>3</td><td>0011</td><td>3</td><td>3</td></tr>
<tr><td>4</td><td>0100</td><td>4</td><td>4</td></tr>
<tr><td>5</td><td>0101</td><td>5</td><td>5</td></tr>
<tr><td>6</td><td>0110</td><td>6</td><td>6</td></tr>
<tr><td>7</td><td>0111</td><td>7</td><td>7</td></tr>
<tr><td>8</td><td>1000</td><td>10</td><td>8</td></tr>
<tr><td>9</td><td>1001</td><td>11</td><td>9</td></tr>
<tr><td>10</td><td>1010</td><td>12</td><td>A</td></tr>
<tr><td>11</td><td>1011</td><td>13</td><td>B</td></tr>
<tr><td>12</td><td>1100</td><td>14</td><td>C</td></tr>
<tr><td>13</td><td>1101</td><td>15</td><td>D</td></tr>
<tr><td>14</td><td>1110</td><td>16</td><td>E</td></tr>
<tr><td>15</td><td>1111</td><td>17</td><td>F</td></tr>
</table>
<div class="box tip"><div class="box-title">Teorema fundamental da numeración (TFN)</div>
<p>Tódolos sistemas posicionais están baseados neste teorema, que relaciona cantidades de calquera sistema de numeración con esas mesmas cantidades no sistema decimal:</p>
<p style="text-align:center"><strong>N = Σ Xᵢ · Bⁱ</strong></p>
<ul>
  <li><strong>X</strong>: valor absoluto do díxito en cuestión.</li>
  <li><strong>i</strong>: posición que ocupa o díxito respecto ó punto decimal (negativa á dereita do punto).</li>
  <li><strong>B</strong>: base.</li>
</ul>
<p>Exemplo: 80,5 = 8·10¹ + 0·10⁰ + 5·10⁻¹.</p></div>
<figure class="small"><img src="apuntes/fh/img/ud2/bender-espello.png" alt="Bender escribe un número binario no espello" loading="lazy"><figcaption><strong>Mensaxe diabólica.</strong> Bender deixa unha clara mensaxe nun dos capítulos de Futurama. A quen representa o número que escribe no espello? (0101100101 visto no espello…).</figcaption></figure>`
  },
  {
    id: 'fh-ud2-3-1',
    tipo: 'subtema',
    titulo: '3.1 Conversión dun sistema de numeración a outro',
    resumen: 'Calquera base → decimal: aplicar o TFN. Decimal → outra base: divisións sucesivas (parte enteira) e multiplicacións sucesivas (parte fraccionaria). Binario ↔ octal/hexadecimal: agrupar en ternas/cuaternas dende o punto. Hexadecimal ↔ octal: pasando por binario.',
    claves: ['Base B → decimal: sumatorio de díxito × potencia da base (TFN)', 'Decimal → base B (parte enteira): dividir sucesivamente; restos + último cociente, lidos do último ó primeiro', 'Decimal → base B (parte fraccionaria): multiplicar sucesivamente; partes enteiras en orde', 'Un decimal finito pode dar un binario periódico infinito → erro por truncamento', 'Binario → octal: ternas dende o punto (completar con ceros) · Binario → hexadecimal: cuaternas', 'Octal/hex → binario: substituír cada símbolo por 3/4 bits', 'Hex ↔ octal: pasar por binario e reagrupar', 'Bases non potencia de dous: paso intermedio por decimal'],
    tags: ['conversión', 'cambio de base', 'binario a decimal', 'decimal a binario', 'binario a octal', 'binario a hexadecimal', 'truncamento', 'ternas', 'cuaternas'],
    links: ['fh-ud2-ex-conv'],
    contenido: `
<h4>Calquera base a decimal</h4>
<p>Para pasar de calquera base a decimal simplemente aplicamos o <strong>teorema fundamental da numeración</strong>, substituíndo <em>B</em> pola base correspondente: 2 para binario, 8 para octal, 16 para hexadecimal. Basicamente en todas aplicamos un <strong>sumatorio sobre unha serie de potencias</strong>. Con sistemas que utilicen máis símbolos dos que ten o código decimal (hexadecimal), teremos que traducir eses símbolos (A=10 … F=15) antes de aplicar o teorema.</p>
<h4>Decimal a binario</h4>
<p>Para as conversións inversas empréganse algoritmos diferentes. Primeiro diferenciamos entre a <strong>parte enteira</strong> e a <strong>parte decimal</strong>:</p>
<ul>
  <li><strong>Parte enteira:</strong> dividimos o número entre a base e repetimos co cociente que vamos obtendo. Os <strong>restos</strong> destas divisións e o <strong>último cociente</strong> son as cifras buscadas (sempre 0 ou 1). O último cociente é o díxito máis significativo e o primeiro resto o menos significativo.</li>
  <li><strong>Parte decimal:</strong> multiplicamos a parte decimal pola base e repetimos sucesivamente coas partes decimais dos números obtidos. A secuencia de <strong>partes enteiras</strong> que obtemos é a representación en base 2 da parte decimal. Termina cando xa non hai parte decimal.</li>
</ul>
<div class="box warn"><div class="box-title">Díxitos infinitos e erro por truncamento</div>
<p>Un número cun só díxito na súa parte fraccionaria en base 10 pode xerar un número con <strong>infinitos díxitos</strong> fraccionarios en base 2. Comprobámolo con 0,2₁₀: 0,2·2 = 0,4 → 0,4·2 = 0,8 → 0,8·2 = 1,6 → 0,6·2 = 1,2 → 0,2·2 = 0,4… Unha das operacións repítese, polo que será un número periódico: 0,00110011…₂.</p>
<p>Se almacenamos un número binario nun ordenador cun número prefixado (finito) de bits, teremos que recortar as cifras. O erro que se comete ó desprezar unha serie de decimais denomínase <strong>erro por truncamento</strong>. É o mesmo problema que presentan as calculadoras (as primeiras só permitían 8 ou 10 díxitos) ou as follas de cálculo (a partir do 15.º decimal) e obríganos a traballar con números aproximados en vez de reais.</p></div>
<figure class="small"><img src="apuntes/fh/img/ud2/infinito-binario.png" alt="Símbolo de infinito formado por ceros e uns" loading="lazy"><figcaption>Un decimal exacto pode converterse nun binario periódico con infinitos díxitos.</figcaption></figure>
<h4>Decimal a outras bases</h4>
<p>O procedemento é similar ó paso de decimal a binario, pero dividindo e multiplicando pola base en cuestión (B = 8 en octal, B = 16 en hexadecimal).</p>
<h4>Binario a octal</h4>
<p>Dividimos o número binario en <strong>ternas</strong> (grupos de tres) a partir do punto fraccionario; cada terna equivale a un símbolo en octal. Se o número de díxitos non é múltiplo de 3, complétase con ceros de forma que non modifiquen o número: <strong>pola esquerda</strong> na parte enteira, <strong>pola dereita</strong> na parte fraccionaria.</p>
<h4>Binario a hexadecimal</h4>
<p>Separamos os díxitos en <strong>cuaternas</strong> (grupos de catro) tomando como referencia o punto decimal; cada cuaterna equivale a un símbolo hexadecimal. Complétase con ceros igual que no caso anterior.</p>
<h4>Bases potencia de dous a binario</h4>
<p>Substituímos cada símbolo (octal ou hexadecimal) polos díxitos binarios que lle correspondan (<strong>tres ou catro</strong>). Deste xeito simplificamos o código á hora de programar: en vez de escribir 3 ou 4 uns e ceros escribimos só o símbolo correspondente, obtendo menos erros e unha tradución máis rápida.</p>
<h4>Hexadecimal a octal e viceversa</h4>
<p>O procedemento máis sinxelo é pasar de hexadecimal a binario e de binario a octal, aproveitando que ambos son códigos agrupados (potencias de dous): cambiamos os símbolos hexadecimais polo seu equivalente binario e reagrupámolos de tres en tres. Para o caso contrario, de octal a binario e deste a hexadecimal.</p>
<div class="box tip"><div class="box-title">Bases non potencia de dous</div><p>Se queremos pasar dunha base que non é potencia de dous a binario (ou viceversa) teremos que facer sempre un paso intermedio: <strong>pasar a base decimal</strong>.</p></div>`
  },
  {
    id: 'fh-ud2-ex-conv',
    tipo: 'ejercicio',
    titulo: 'Exercicios resoltos: cambios de base',
    resumen: 'Conversións resoltas do libro: 1011101,01₂ → 93,25₁₀ · 117,45₈ → 79,578125₁₀ · A03F,07₁₆ → 41 023,02734375₁₀ · 92,375₁₀ → 1011100,011₂ · 1111000,11001₂ → 170,62₈ · 111111100000,11111110101₂ → FE0,FEA₁₆ · 521,17₈ → 101010001,001111₂ · ACDC,BAD₁₆ → binario · 0,07₈ → 0,1C₁₆.',
    claves: ['1011101,01₂ = 93,25₁₀', '117,45₈ = 79,578125₁₀', 'A03F,07₁₆ = 41 023,02734375₁₀', '92,375₁₀ = 1011100,011₂', '1111000,11001₂ = 170,62₈', '111111100000,11111110101₂ = FE0,FEA₁₆', '521,17₈ = 101010001,001111₂', 'ACDC,BAD₁₆ = 1010110011011100,101110101101₂', '0,07₈ = 0,1C₁₆'],
    tags: ['exercicio', 'conversión', 'binario', 'octal', 'hexadecimal', 'decimal'],
    contenido: `
<div class="box ex"><div class="box-title">Binario a decimal</div>
<p>Obter o valor decimal do número <code>1011101,01₂</code>.</p>
<p>Parte enteira (posicións de dereita a esquerda a partir do punto): 1·2⁰ + 0·2¹ + 1·2² + 1·2³ + 1·2⁴ + 0·2⁵ + 1·2⁶ = 1 + 4 + 8 + 16 + 64 = 93.</p>
<p>Parte decimal (de esquerda a dereita): 0·2⁻¹ + 1·2⁻² = 0,25.</p>
<p><strong>Resultado: 93,25₁₀</strong></p></div>
<div class="box ex"><div class="box-title">Octal a decimal</div>
<p>Obter o valor decimal de <code>117,45₈</code>.</p>
<p>Parte enteira: 1·8² + 1·8¹ + 7·8⁰ = 64 + 8 + 7 = 79. Parte decimal: 4·8⁻¹ + 5·8⁻² = 0,5 + 0,078125.</p>
<p><strong>Resultado: 79,578125₁₀</strong></p></div>
<div class="box ex"><div class="box-title">Hexadecimal a decimal</div>
<p>Obter o valor decimal de <code>A03F,07₁₆</code>. Substituímos as letras polo seu valor (A = 10, F = 15):</p>
<p>Parte enteira: 10·16³ + 0·16² + 3·16¹ + 15·16⁰ = 40 960 + 48 + 15 = 41 023. Parte decimal: 0·16⁻¹ + 7·16⁻² = 0,02734375.</p>
<p><strong>Resultado: 41 023,02734375₁₀</strong></p></div>
<div class="box ex"><div class="box-title">Decimal a binario</div>
<p>Obter o valor binario de <code>92,375₁₀</code>.</p>
<p>Parte enteira, divisións sucesivas entre 2: 92→46 (r 0), 46→23 (r 0), 23→11 (r 1), 11→5 (r 1), 5→2 (r 1), 2→1 (r 0), último cociente 1. Lido do último cociente ó primeiro resto: <code>1011100</code>.</p>
<p>Parte decimal, multiplicacións sucesivas por 2 desprezando a parte enteira: 0,375·2 = <strong>0</strong>,75 → 0,75·2 = <strong>1</strong>,5 → 0,5·2 = <strong>1</strong>,0 → remata. Parte decimal: <code>011</code>.</p>
<p><strong>Resultado: 1011100,011₂</strong></p></div>
<div class="box ex"><div class="box-title">Binario a octal</div>
<p>Obter o valor octal de <code>1111000,11001₂</code>. Ternas completando con ceros: <code>001 111 000 , 110 010</code> → 1 7 0 , 6 2.</p>
<p><strong>Resultado: 170,62₈</strong></p></div>
<div class="box ex"><div class="box-title">Binario a hexadecimal</div>
<p>Obter o valor hexadecimal de <code>111111100000,11111110101₂</code>. Cuaternas: <code>1111 1110 0000 , 1111 1110 1010</code> → F E 0 , F E A.</p>
<p><strong>Resultado: FE0,FEA₁₆</strong></p></div>
<div class="box ex"><div class="box-title">Octal a binario</div>
<p>Obter o valor binario de <code>521,17₈</code>. A cada díxito octal correspóndelle unha terna: 5→101, 2→010, 1→001, 1→001, 7→111.</p>
<p><strong>Resultado: 101010001,001111₂</strong></p></div>
<div class="box ex"><div class="box-title">Hexadecimal a binario</div>
<p>Obter o valor binario de <code>ACDC,BAD₁₆</code>. A→1010, C→1100, D→1101, C→1100, B→1011, A→1010, D→1101.</p>
<p><strong>Resultado: 1010110011011100,101110101101₂</strong></p></div>
<div class="box ex"><div class="box-title">Octal a hexadecimal</div>
<p>Obter o valor hexadecimal de <code>0,07₈</code>. Pasamos a binario: 0→000 , 0→000 7→111 ⇒ <code>0,000111</code>. Reagrupamos en cuaternas: <code>0000 , 0001 1100</code> → 0 , 1 C.</p>
<p><strong>Resultado: 0,1C₁₆</strong></p></div>`
  },

  /* ---------------- 4 ---------------- */
  {
    id: 'fh-ud2-4',
    tipo: 'tema',
    titulo: '4. Medidas de información',
    resumen: 'O bit é a unidade básica; un byte son 8 bits. Dende 1999 distínguense os prefixos decimais (KB = 1000 B, MB, GB… potencias de 10) dos binarios (KiB = 1024 B, MiB, GiB… potencias de 2). As memorias principais usan múltiplos de 1024 e as secundarias de 1000, pero moitos fabricantes seguen coa nomenclatura incorrecta.',
    claves: ['Bit: información que só pode valer 0 ou 1 · Byte = 8 bits', 'kB = KB ≠ kb/Kb (bits)', 'Prefixos SI: KB 10³ · MB 10⁶ · GB 10⁹ · TB 10¹² · PB 10¹⁵ · EB 10¹⁸ · ZB 10²¹ · YB 10²⁴', 'Prefixos IEC (1999): KiB 2¹⁰ · MiB 2²⁰ · GiB 2³⁰ · TiB 2⁴⁰ · PiB 2⁵⁰ · EiB 2⁶⁰ · ZiB 2⁷⁰ · YiB 2⁸⁰', 'RAM e caché: múltiplos de 1024 · discos: múltiplos de 1000', 'Antes de 1999: 1 KB = 1024 bytes (hoxe incorrecto)', 'Ancho de banda: 1 bps = 1 bit/s · 1 B/s = 8 bit/s · 1 KB/s = 1000 B/s'],
    tags: ['medidas', 'bit', 'byte', 'kilobyte', 'kibibyte', 'KB', 'KiB', 'MiB', 'GiB', 'prefixos', 'unidades'],
    links: ['fh-ud2-4-1', 'fh-ud2-4-2', 'fh-ud2-4-3'],
    contenido: `
<p>No sistema binario só existen dous símbolos diferentes, 0 e 1. Unha información que só pode tomar como valores o 0 e o 1 denomínase <strong>bit</strong> e forma a <strong>unidade básica de información</strong>.</p>
<p>Un ordenador, debido á súa construción baseada en circuítos electrónicos dixitais, traballa co sistema binario. Este é o motivo que nos obriga a transformar internamente tódolos nosos datos, tanto numéricos como alfanuméricos, a unha representación binaria.</p>
<figure class="small"><img src="apuntes/fh/img/ud2/bit-byte.png" alt="Un byte formado por 8 bits" loading="lazy"><figcaption><strong>Bit ou byte.</strong> Non se debe confundir unha medida coa outra: un byte son 8 bits. Recorda: kB é o mesmo que KB, pero non que kb ou Kb (bits).</figcaption></figure>
<p>Polo xeral, cando un fabricante fala de 4 GB de memoria RAM, fala de <strong>4 GiB</strong>… cando di que a caché é de 256 KB, quere dicir que ten <strong>256 KiB</strong>… cando di que un disco duro ten 500 GB, quere dicir 500 GB (500 · 1000 MB). Habitualmente, as capacidades das <strong>memorias principais</strong> usan múltiplos de <strong>1024</strong> e as das <strong>memorias secundarias</strong> múltiplos de <strong>1000</strong>.</p>
<div class="box warn"><div class="box-title">Antes de 1999</div><p>Ata o ano 1999 non existían os KiB, MiB, GiB… e tampouco se utilizaban as potencias de dez cando se medía a información. Antes: 1 KB = 1024 bytes; 1 MB = 1024 KB. Isto hoxe en día <strong>non debería ser correcto</strong>, pero moitos fabricantes e comerciantes utilizan aínda a nomenclatura incorrecta.</p></div>
<div class="fig-row">
<table>
<tr><th>Abrev.</th><th>Unidade (SI)</th><th>Equivalencia</th><th>Potencia</th></tr>
<tr><td>KB</td><td>kilobyte</td><td>1000 bytes</td><td>10³</td></tr>
<tr><td>MB</td><td>megabyte</td><td>1000 KB</td><td>10⁶</td></tr>
<tr><td>GB</td><td>gigabyte</td><td>1000 MB</td><td>10⁹</td></tr>
<tr><td>TB</td><td>terabyte</td><td>1000 GB</td><td>10¹²</td></tr>
<tr><td>PB</td><td>petabyte</td><td>1000 TB</td><td>10¹⁵</td></tr>
<tr><td>EB</td><td>exabyte</td><td>1000 PB</td><td>10¹⁸</td></tr>
<tr><td>ZB</td><td>zettabyte</td><td>1000 EB</td><td>10²¹</td></tr>
<tr><td>YB</td><td>yottabyte</td><td>1000 ZB</td><td>10²⁴</td></tr>
</table>
<table>
<tr><th>Abrev.</th><th>Unidade (IEC)</th><th>Equivalencia</th><th>Potencia</th></tr>
<tr><td>KiB</td><td>kibibyte</td><td>1024 bytes</td><td>2¹⁰</td></tr>
<tr><td>MiB</td><td>mebibyte</td><td>1024 KiB</td><td>2²⁰</td></tr>
<tr><td>GiB</td><td>gibibyte</td><td>1024 MiB</td><td>2³⁰</td></tr>
<tr><td>TiB</td><td>tebibyte</td><td>1024 GiB</td><td>2⁴⁰</td></tr>
<tr><td>PiB</td><td>pebibyte</td><td>1024 TiB</td><td>2⁵⁰</td></tr>
<tr><td>EiB</td><td>exbibyte</td><td>1024 PiB</td><td>2⁶⁰</td></tr>
<tr><td>ZiB</td><td>zebibyte</td><td>1024 EiB</td><td>2⁷⁰</td></tr>
<tr><td>YiB</td><td>yobibyte</td><td>1024 ZiB</td><td>2⁸⁰</td></tr>
</table>
</div>
<div class="fig-row">
<figure class="small"><img src="apuntes/fh/img/ud2/piramide-unidades.png" alt="Pirámide byte, kilobyte, megabyte, gigabyte, terabyte" loading="lazy"><figcaption>Xerarquía de unidades con múltiplos de 1024: 1 · 1024 · 1 048 576 · 1 073 741 824 · 1 099 511 627 776.</figcaption></figure>
<figure class="small"><img src="apuntes/fh/img/ud2/conversion-unidades.png" alt="Esquema de conversión bit-B-KB-MB-GB-TB" loading="lazy"><figcaption>Para subir de unidade divídese (÷8 de bit a byte, ÷1024 entre múltiplos); para baixar multiplícase.</figcaption></figure>
</div>
<div class="box tip"><div class="box-title">Como pasamos dunha medida a outra?</div>
<p>Para pasar 24 756 bits a KiB e KB: 24 756 / 8 / 1000 = <strong>3,0945 KB</strong> · 24 756 / 8 / 1024 = <strong>3,022 KiB</strong> (o libro redondea a 3,072 KB e 3 KiB).</p>
<p>Para pasar 6 291 456 bytes a MiB e MB: 6 291 456 / 1024 / 1024 = <strong>6 MiB</strong> · 6 291 456 / 1000 / 1000 = <strong>6,29 MB</strong>.</p></div>
<div class="box info"><div class="box-title">Ancho de banda</div>
<p>Mídese en información/segundo: 1 bps = 1 bit/s · 1 byte/s = 1 B/s = 8 bit/s · 1 KB/s = 1000 B/s · 1 MB/s = 1000 KB/s = 1 000 000 B/s.</p></div>`
  },
  {
    id: 'fh-ud2-4-1',
    tipo: 'subtema',
    titulo: '4.1 Engano na capacidade dos discos',
    resumen: 'Un disco de 20 GB son 20·10⁹ bytes. Linux amósao así, pero Windows usa 1024 e chámalle GB ó que en realidade son GiB, polo que un disco "medra" ou "encolle". Un SATA de 500 GB = 500 000 000 000 B = 465,66 GiB.',
    claves: ['20 GB = 20·1000·1000·1000 = 2·10¹⁰ bytes', '20 GiB = 20·1024³ = 21 474 836 480 bytes', 'Windows: sistema binario pero etiqueta GB (non usa GiB)', 'Linux: binario para GiB e decimal para GB', '500 GB anunciados → 500 000 000 000 / 1024³ = 465,66 GiB', 'A maior capacidade, maior discrepancia entre prefixo decimal e binario', 'Os fabricantes redondean á baixa para aforrar custos'],
    tags: ['disco duro', 'capacidade', 'GB', 'GiB', 'Windows', 'Linux', 'engano', 'fabricantes'],
    contenido: `
<p>Supoñamos que queremos instalar un disco duro de <strong>20 GB</strong>. Como é unha memoria secundaria usamos a potencia de 10, polo que a capacidade sería:</p>
<p style="text-align:center"><code>20 · 1000 · 1000 · 1000 = 2·10¹⁰ bytes</code></p>
<p>Se o instalamos nunha máquina con <strong>Linux</strong>, esta será a capacidade que lle asigne o sistema operativo; pero se ten <strong>Windows</strong> recoñéceo cunha capacidade "maior" porque emprega o sistema binario pero mantén a etiqueta GB:</p>
<p style="text-align:center"><code>20 · 1024 · 1024 · 1024 = 21 474 836 480 bytes</code></p>
<p>E se instalamos un Ubuntu nunha máquina en VirtualBox baixo Windows cun disco de 20 GB… pois <em>medra</em>: Windows amosa 21 GB (21 474 836 480 bytes) e GParted, en Linux, 18,00 GiB para a mesma partición.</p>
<figure><img src="apuntes/fh/img/ud2/gparted-disco-21gb.png" alt="Captura de Windows e GParted co mesmo disco" loading="lazy"><figcaption>O mesmo disco virtual visto por Windows ("Disco duro 21 GB", 21 474 836 480 bytes) e por GParted en Linux (18,00 GiB). Windows utiliza un sistema binario para os GB e non usa a medida GiB; Linux usa binario para GiB e decimal para GB.</figcaption></figure>
<div class="box ex"><div class="box-title">Cal é a capacidade real dun disco duro SATA anunciado de 500 GB?</div>
<p>Os fabricantes fan a trampa de pasar dunha medida a outra multiplicando/dividindo por 1000 en vez de 1024:</p>
<p><code>500 GB · 1000 · 1000 · 1000 = 500 000 000 000 bytes</code></p>
<p>Pero en realidade Windows recoñéceo como:</p>
<p><code>500 000 000 000 / 1024 / 1024 / 1024 = 465,66 GB</code> — ou máis formalmente <strong>465,66 GiB</strong>.</p></div>
<div class="box warn"><div class="box-title">Débese ter en conta</div>
<ul>
  <li>Segundo o fabricante, a cantidade do disco pode variar lixeiramente, e para aforrar custos sóese <strong>redondear á baixa</strong>.</li>
  <li>A capacidade expresada con prefixo decimal resulta nunha <strong>cifra maior</strong> que se se expresase con prefixo binario.</li>
  <li>Canta maior capacidade ten un disco duro, <strong>maior é a discrepancia</strong> entre as cifras con prefixo decimal e binario.</li>
</ul></div>`
  },
  {
    id: 'fh-ud2-4-2',
    tipo: 'subtema',
    titulo: '4.2 Frecuencia dun bus e taxa de transferencia',
    resumen: 'A frecuencia mídese en Hz (ciclos/s) con múltiplos de 1000. Non se poden comparar directamente frecuencias de microarquitecturas distintas. Os buses poden facer varias transferencias por ciclo (MT/s, GT/s). Taxa de transferencia (ancho de banda, bit rate) = ancho do bus × frecuencia × transferencias/ciclo.',
    claves: ['1 Hz = 1 ciclo/s · 1 KHz = 1000 Hz · 1 MHz = 1000 KHz · 1 GHz = 1000 MHz', 'Frecuencia ≠ rendemento entre microarquitecturas distintas (ex.: FPU a 2,2 GHz máis rápida que outra a 2,5 GHz)', 'Transferencias/segundo: 1 MT/s = 10⁶ T/s · 1 GT/s = 10⁹ T/s', '100 MHz × 4 transferencias/ciclo = 400 MT/s', 'Taxa de transferencia = ancho do bus × velocidade do bus', '32 bits × 200 Hz × 1 T/ciclo = 6400 bit/s = 800 B/s'],
    tags: ['frecuencia', 'Hz', 'bus', 'taxa de transferencia', 'ancho de banda', 'bit rate', 'MT/s', 'GT/s'],
    contenido: `
<p>Outra característica importante do procesador é a <strong>frecuencia</strong> á que funciona. Mídese en <strong>Hz</strong> (hertzs ou ciclos/segundo) e é a velocidade á que executa cada instrución. Aplícanse múltiplos de 1000 en 1000:</p>
<table>
<tr><td>1 Hz</td><td>1 ciclo/s</td></tr>
<tr><td>1 KHz</td><td>1000 Hz</td></tr>
<tr><td>1 MHz</td><td>1000 KHz</td></tr>
<tr><td>1 GHz</td><td>1000 MHz</td></tr>
</table>
<div class="box warn"><div class="box-title">Ollo coas comparacións</div><p>Non se pode comparar directamente a frecuencia de dous procesadores con <strong>microarquitectura distinta</strong>. Aínda que un vaia a maior frecuencia non significa que logre executar máis microinstrucións: pode ser que a FPU (unidade de punto flotante) dun procesador a 2,2 GHz sexa moito máis rápida que a doutro a 2,5 GHz.</p></div>
<p>Existen buses que en cada ciclo fan <strong>varias transferencias</strong> (unha, dúas, tres…), polo que na actualidade os fabricantes poden utilizar outra unidade para indicar a velocidade dun bus: as <strong>T/s ou transferencias/segundo</strong>:</p>
<ul>
  <li>1 MT/s = 10⁶ transferencias/segundo</li>
  <li>1 GT/s = 10⁹ transferencias/segundo</li>
</ul>
<p>Por exemplo, se un bus traballa a 100 MHz e fai 4 transferencias en cada ciclo: <code>100 Mciclos/s · 4 transferencias/ciclo = 400 MT/s</code>.</p>
<div class="box def"><div class="box-title">Taxa de transferencia (ancho de banda, bit rate)</div>
<p>É a velocidade á que se transmiten os datos por unha canle. Para calculala sempre teñen que indicar o <strong>ancho do bus</strong>:</p>
<p style="text-align:center"><strong>Taxa de transferencia = Ancho do bus · Velocidade do bus (frecuencia)</strong></p></div>
<div class="box ex"><div class="box-title">Exemplo</div><p>Un bus cun ancho de 32 bits, que traballa a 200 Hz e fai unha transferencia por ciclo, fai 200 transferencias de datos por segundo:</p>
<p><code>200 ciclos/s · 32 b/transferencia · 1 transferencia/ciclo · 1 B/8 b = 800 B/s</code></p></div>
<figure class="small"><img src="apuntes/fh/img/ud2/ancho-de-banda.png" alt="Cables de fibra con bits fluíndo" loading="lazy"><figcaption>O ancho de banda mídese en información por segundo (bps, B/s, KB/s, MB/s…).</figcaption></figure>`
  },
  {
    id: 'fh-ud2-4-3',
    tipo: 'subtema',
    titulo: '4.3 Velocidade de procesamento',
    resumen: 'Mídese en Hz e indica os ciclos por segundo do microprocesador. Cada instrución leva un número de ciclos distinto. Exemplo: 100 instrucións (25 %·1 ciclo, 50 %·2, 25 %·5) a 300 KHz = 250 ciclos = 0,00083 s. O rendemento en cálculo científico mídese en FLOPS.',
    claves: ['Velocidade de procesamento en Hz = ciclos/segundo do micro', 'Cada instrución do xogo de instrucións leva 1, 2, 3… ciclos', 'Exemplo: 25·1 + 50·2 + 25·5 = 250 ciclos · a 300 KHz → 250 / 300 000 = 0,00083 s', 'FLOPS = operacións en coma flotante por segundo · MFLOPS 10⁶ · GFLOPS 10⁹ · TFLOPS 10¹²', 'FLOPS non debe ser a única medida para valorar un ordenador'],
    tags: ['velocidade', 'procesamento', 'ciclos', 'Hz', 'FLOPS', 'rendemento', 'instrucións'],
    contenido: `
<p>A <strong>velocidade de procesamento</strong> mídese en Hz e indica o número de ciclos por segundo ó que traballa o microprocesador. Cada instrución do xogo de instrucións que entende o procesador leva unha serie de ciclos na súa execución: haberá instrucións que con dous ciclos xa se executan, outras tres, outras catro…</p>
<figure class="small"><img src="apuntes/fh/img/ud2/velocidade-procesamento.png" alt="Portátil con engrenaxes" loading="lazy"><figcaption>A velocidade de procesamento depende da frecuencia e dos ciclos que consome cada instrución.</figcaption></figure>
<div class="box ex"><div class="box-title">Cantos ciclos precisa o programa?</div>
<p>Un microprocesador ten unha frecuencia de 300 KHz e un programa ten 100 instrucións, das cales o 25 % se executan nun só ciclo, un 50 % necesitan dous ciclos e o resto necesitan 5 ciclos. Cantos ciclos e canto tempo necesita o programa para executarse enteiro?</p>
<ul>
  <li>25 instrucións · 1 ciclo/instrución = 25 ciclos</li>
  <li>50 instrucións · 2 ciclos/instrución = 100 ciclos</li>
  <li>25 instrucións · 5 ciclos/instrución = 125 ciclos</li>
</ul>
<p>Total: <strong>250 ciclos</strong>. Como 300 KHz = 300 000 ciclos/s ⇒ 1/300 000 s/ciclo:</p>
<p><code>250 ciclos · 1/300 000 s/ciclo = 0,00083333 s</code></p></div>
<div class="box info"><div class="box-title">Rendemento dunha computadora: FLOPS</div>
<p>Para medir o rendemento dunha computadora, especialmente en cálculos científicos que usan gran número de operacións en coma flotante, úsase a medida <strong>FLOPS</strong> (<em>Floating Point Operations per Second</em>): operacións en punto flotante por segundo que é capaz de facer.</p>
<p>1 MFLOPS = 10⁶ FLOPS · 1 GFLOPS = 10⁹ FLOPS · 1 TFLOPS = 10¹² FLOPS.</p>
<p><strong>Ollo!</strong> Non se debe tomar como única medida para valorar a capacidade dun ordenador.</p></div>`
  },

  /* ---------------- 5 ---------------- */
  {
    id: 'fh-ud2-5',
    tipo: 'tema',
    titulo: '5. Aritmética binaria',
    resumen: 'Operacións aritméticas con variables binarias. Suma: 1+1 = 0 e arrastre 1. Resta: 0−1 = 1 levando −1 á posición superior. Multiplicación e división seguen as mesmas regras que en decimal; a división por cero non é posible. O punto fraccionario non altera o procedemento.',
    claves: ['Adición: 0+0=0 · 0+1=1 · 1+0=1 · 1+1=0 e arrastre 1', 'Subtracción: 0−1 = 1 levando −1 á seguinte posición', 'Minuendo negativo → a resta convértese en suma mantendo o signo', 'Multiplicación: mesmas regras que en decimal; signos iguais → +, distintos → −', 'División: mesmas regras; división por cero imposible (indeterminado/infinito)', 'Coma no divisor: desprazar a coma do dividendo tantas posicións como decimais teña o divisor'],
    tags: ['aritmética binaria', 'suma', 'resta', 'multiplicación', 'división', 'arrastre', 'acarreo'],
    links: ['fh-ud2-ex-arit'],
    contenido: `
<div class="box def"><div class="box-title">Aritmética binaria</div><p>Operacións aritméticas e lóxicas feitas con <strong>variables binarias</strong>.</p></div>
<figure class="small"><img src="apuntes/fh/img/ud2/calculadora.png" alt="Calculadora binaria con teclas 0 e 1" loading="lazy"><figcaption>As catro operacións básicas fanse en binario coas mesmas regras que en decimal.</figcaption></figure>
<h4>Adición</h4>
<p>O símbolo do operador é <code>+</code>, os elementos chámanse <em>sumandos</em> e o resultado <em>suma</em>. A suma de dous díxitos 1 dá como resultado dous bits: un de suma (0) e un de <strong>arrastre</strong> (1).</p>
<table>
<tr><th>a</th><th>b</th><th>a + b</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>0 e levamos un 1 á posición inmediata superior</td></tr>
</table>
<p>Cando sumamos fraccións de números binarios ocorre o mesmo que en decimal: o punto fraccionario non inflúe no procedemento.</p>
<h4>Subtracción</h4>
<p>O símbolo é <code>−</code>, os elementos <em>minuendo</em> e <em>subtraendo</em> e o resultado <em>diferenza</em>. As regras son iguais ás da resta decimal: se o subtraendo é maior que o minuendo (só ocorre con 1 − 0… é dicir, 0 − 1), o resultado é 1 e débese levar un <strong>−1</strong> á seguinte posición de maior valor.</p>
<table>
<tr><th>a</th><th>b</th><th>a − b</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>1 e levamos un −1 á posición inmediata superior</td></tr>
<tr><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>0</td></tr>
</table>
<p>Ó restar fraccións binarias o punto decimal non afecta ó procedemento. Cando o minuendo é negativo, a resta convértese nunha suma, aínda que se mantén o signo menos.</p>
<h4>Multiplicación</h4>
<p>O símbolo é o punto <code>·</code> (ás veces <code>*</code> ou <code>×</code>), os elementos <em>multiplicando</em> e <em>multiplicador</em> e o resultado <em>produto</em>. As regras son as mesmas que en decimal e o punto colócase igual. Nos signos: se son iguais o produto é positivo, se son diferentes negativo.</p>
<table>
<tr><th>a</th><th>b</th><th>a · b</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>
<h4>División</h4>
<p>O símbolo é a barra <code>/</code>, os elementos <em>dividendo</em> e <em>divisor</em> e o resultado <em>cociente</em>. As regras son as da división decimal; a <strong>división por cero non é posible</strong>, xa que o resultado sería indeterminado ou infinito, valores que un ordenador non pode procesar.</p>
<p>Respecto á coma: primeiro cómpre <strong>eliminar o punto do divisor</strong> desprazando o punto do dividendo cara á dereita tantas posicións como cifras decimais teña o divisor (ou engadindo ceros á dereita).</p>
<table>
<tr><th>a</th><th>b</th><th>a / b</th></tr>
<tr><td>0</td><td>0</td><td>indeterminado</td></tr>
<tr><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>indeterminado (∞)</td></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>`
  },
  {
    id: 'fh-ud2-ex-arit',
    tipo: 'ejercicio',
    titulo: 'Exercicios resoltos: operacións en binario',
    resumen: 'Suma 54,25 + 26,8125 = 81,0625 → 1010001,0001₂ · Resta 54,25 − 26,8125 = 27,4375 → 11011,0111₂ · Multiplicación 54,25 · 5,5 = 298,375 → 100101010,011₂ · División 9 / 3 = 3 → 11₂.',
    claves: ['110110,01 + 11010,1101 = 1010001,0001 (81,0625)', '110110,0100 − 11010,1101 = 11011,0111 (27,4375)', '110110,01 · 101,1 = 100101010,011 (298,375)', '1001 / 11 = 11 (9/3 = 3)'],
    tags: ['exercicio', 'suma binaria', 'resta binaria', 'multiplicación binaria', 'división binaria'],
    contenido: `
<div class="box ex"><div class="box-title">Adición</div>
<p>Sumar en binario os decimais 54,25 e 26,8125. Ó 54,25 correspóndelle <code>110110,01₂</code> e ó 26,8125 <code>11010,1101₂</code>.</p>
<pre>  arrastres   1111 1  1
   54,2500    110110,0100
 + 26,8125  +  11010,1101
 ---------   -------------
   81,0625   1010001,0001</pre>
<p><strong>Resultado: 1010001,0001₂</strong></p></div>
<div class="box ex"><div class="box-title">Subtracción</div>
<p>Restarlle ó decimal 54,25 o número 26,8125.</p>
<pre>   54,2500    110110,0100
 − 26,8125  −  11010,1101
 ---------   -------------
   27,4375    011011,0111</pre>
<p><strong>Resultado: 11011,0111₂</strong></p></div>
<div class="box ex"><div class="box-title">Multiplicación</div>
<p>Multiplicar en binario 54,25 (<code>110110,01₂</code>) por 5,5 (<code>101,1₂</code>).</p>
<pre>        110110,01
      ×     101,1
      -----------
         11011001
        11011001
       00000000
      11011001
      -----------
   100101010,011</pre>
<p>Comprobación: 54,25 · 5,5 = 298,375. <strong>Resultado: 100101010,011₂</strong></p></div>
<div class="box ex"><div class="box-title">División</div>
<p>Dividir en binario 9 (<code>1001₂</code>) entre 3 (<code>11₂</code>).</p>
<pre>  1001 | 11
 −11   ----
  ---   11
   011
  − 11
   ---
    00</pre>
<p><strong>Resultado: 11₂ (= 3)</strong></p></div>`
  },

  /* ---------------- 6 ---------------- */
  {
    id: 'fh-ud2-6',
    tipo: 'tema',
    titulo: '6. Métodos para representar números enteiros',
    resumen: 'Os ordenadores usan 4 métodos para representar enteiros con signo cun número fixo n de bits (16, 32 ou 64, a lonxitude de palabra): signo e magnitude, complemento a 1, complemento a 2 e exceso a 2ⁿ⁻¹.',
    claves: ['n bits = lonxitude da palabra (16, 32, 64)', 'Signo e magnitude: bit esquerdo = signo (0 +, 1 −), n−1 bits magnitude', 'Complemento a 1: negativos invertindo tódolos bits do positivo', 'Complemento a 2: complemento a 1 + 1 (desprezar acarreo final)', 'Exceso a 2ⁿ⁻¹: sen bit de signo; valor = número + 2ⁿ⁻¹'],
    tags: ['enteiros', 'signo e magnitude', 'complemento a 1', 'complemento a 2', 'exceso', 'representación'],
    links: ['fh-ud2-6-1', 'fh-ud2-6-2', 'fh-ud2-6-3', 'fh-ud2-6-4', 'fh-ud2-ex-enteiros'],
    contenido: `
<p>Os ordenadores utilizan <strong>4 métodos</strong> para a representación interna dos números enteiros (positivos e negativos):</p>
<ul>
  <li>Signo e magnitude (ou signo e módulo)</li>
  <li>Complemento a 1</li>
  <li>Complemento a 2</li>
  <li>Exceso a 2ⁿ⁻¹</li>
</ul>
<p>Nestas representacións utilizamos o sistema binario e considérase que temos un <strong>número limitado de bits</strong> para cada dato numérico (a cantidade de bits soe coincidir coa <strong>lonxitude da palabra</strong> do ordenador: 16, 32 ou 64 bits). Este número de bits dispoñibles represéntase por <strong>n</strong>.</p>
<table>
<tr><th>Método</th><th>Bit de signo</th><th>Negativos</th><th>Exemplo 8 bits: 17 / −17</th></tr>
<tr><td>Signo e magnitude</td><td>Si</td><td>Mesma magnitude, signo 1</td><td>0 0010001 / 1 0010001</td></tr>
<tr><td>Complemento a 1</td><td>Si</td><td>Inverter tódolos bits</td><td>0 0010001 / 1 1101110</td></tr>
<tr><td>Complemento a 2</td><td>Si</td><td>C1 + 1</td><td>0 0010001 / 1 1101111</td></tr>
<tr><td>Exceso a 2ⁿ⁻¹</td><td>Non</td><td>Sumar 128</td><td>10010001 / 01101111</td></tr>
</table>`
  },
  {
    id: 'fh-ud2-6-1',
    tipo: 'subtema',
    titulo: '6.1 Signo e magnitude',
    resumen: 'O bit máis á esquerda representa o signo (0 positivo, 1 negativo) e os n−1 bits restantes a magnitude do número.',
    claves: ['Bit esquerdo: 0 = positivo, 1 = negativo', 'Resto (n−1 bits): magnitude en binario natural', 'Tamén chamado signo e módulo'],
    tags: ['signo e magnitude', 'signo e módulo', 'bit de signo'],
    contenido: `
<p>Neste sistema de representación o bit que está situado <strong>máis á esquerda</strong> representa o <strong>signo</strong>; o seu valor será <code>0</code> para o signo positivo e <code>1</code> para o signo negativo. O resto de bits (<strong>n−1</strong>) representa a <strong>magnitude</strong> do número.</p>
<div class="box ex"><div class="box-title">Exemplo (8 bits)</div><p>17 → <code>0 0010001</code> · −17 → <code>1 0010001</code></p></div>`
  },
  {
    id: 'fh-ud2-6-2',
    tipo: 'subtema',
    titulo: '6.2 Complemento a 1',
    resumen: 'Bit esquerdo para o signo (0 +, 1 −). Os positivos igual que en signo e magnitude; os negativos obtéñense complementando tódolos díxitos do positivo (0↔1), incluído o bit de signo.',
    claves: ['Positivos: igual que signo e magnitude', 'Negativos: inverter tódolos bits do positivo, incluído o signo', '−17 en 8 bits: 00010001 → 11101110'],
    tags: ['complemento a 1', 'C1', 'inversión de bits'],
    contenido: `
<p>Este sistema tamén utiliza o bit máis á esquerda para o signo (<code>0</code> positivo, <code>1</code> negativo). Para os números <strong>positivos</strong>, os n−1 bits da dereita representan a magnitude (igual que no caso anterior). Os números <strong>negativos</strong> obtéñense <strong>complementando tódolos díxitos</strong> do positivo correspondente (cambiando 0 por 1 e viceversa), incluído o bit de signo.</p>
<div class="box ex"><div class="box-title">Exemplo (8 bits)</div><p>17 → <code>0 0010001</code> · −17 → <code>1 1101110</code></p></div>`
  },
  {
    id: 'fh-ud2-6-3',
    tipo: 'subtema',
    titulo: '6.3 Complemento a 2',
    resumen: 'Bit esquerdo para o signo. Positivos igual que antes; negativos en dous pasos: complemento a 1 e sumar 1, desprezando o último acarreo se existe. É a representación habitual dos enteiros.',
    claves: ['Paso 1: complemento a 1 do positivo', 'Paso 2: sumar 1 (desprezar o acarreo final)', '−17 en 8 bits: 11101110 + 1 = 11101111', 'Habitual nos ordenadores para os enteiros'],
    tags: ['complemento a 2', 'C2', 'dous pasos'],
    contenido: `
<p>Este sistema tamén utiliza o bit máis á esquerda para o signo (<code>0</code> positivo, <code>1</code> negativo). Para os positivos, os n−1 bits da dereita representan a magnitude. Os números <strong>negativos</strong> obtéñense en <strong>dous pasos</strong>:</p>
<ol>
  <li>Calcular o <strong>complemento a 1</strong>.</li>
  <li><strong>Sumarlle 1</strong> a ese resultado, desprezando o derradeiro acarreo se existe.</li>
</ol>
<div class="box ex"><div class="box-title">Exemplo (8 bits)</div><p>17 → <code>0 0010001</code>. Complemento a 1: <code>1 1101110</code>. Sumamos 1: <code>1 1101111</code> ⇒ −17.</p></div>`
  },
  {
    id: 'fh-ud2-6-4',
    tipo: 'subtema',
    titulo: '6.4 Exceso a 2ⁿ⁻¹',
    resumen: 'Non usa bit de signo: tódolos bits representan unha magnitude igual ó número máis o exceso 2ⁿ⁻¹. O cero é un valor intermedio; os negativos van antes e os positivos despois. Para 8 bits o exceso é 128.',
    claves: ['Sen bit de signo', 'Valor almacenado = número + 2ⁿ⁻¹', 'Cero = 2ⁿ⁻¹ (valor intermedio) · negativos por debaixo, positivos por riba', '8 bits: exceso 128 → 17 = 145 = 10010001 · −17 = 111 = 01101111'],
    tags: ['exceso', 'exceso a 2n-1', 'sesgo', 'bias'],
    contenido: `
<p>Este sistema <strong>non usa ningún bit para o signo</strong>: todos os bits representan unha magnitude ou valor. Este valor correspóndese co <strong>número representado máis o exceso</strong>, que para n bits vén dado por <strong>2ⁿ⁻¹</strong>.</p>
<p>Consiste en representar o <strong>cero como un valor intermedio</strong> (2ⁿ⁻¹) e situar os números negativos antes dese valor e os positivos despois del (motivo polo que se coñece como <em>exceso</em>).</p>
<div class="box ex"><div class="box-title">Exemplo (8 bits)</div><p>Para 8 bits o exceso é 2⁷ = 128. 17 → 17 + 128 = 145 = <code>10010001</code> · −17 → −17 + 128 = 111 = <code>01101111</code>.</p></div>`
  },
  {
    id: 'fh-ud2-ex-enteiros',
    tipo: 'ejercicio',
    titulo: 'Exercicio resolto: 17 e −17 en 8 bits cos 4 métodos',
    resumen: 'Signo e magnitude: 00010001 / 10010001 · Complemento a 1: 00010001 / 11101110 · Complemento a 2: 00010001 / 11101111 · Exceso a 2⁷: 10010001 / 01101111.',
    claves: ['17 = 10001₂', 'S-M: 0 0010001 / 1 0010001', 'C1: 0 0010001 / 1 1101110', 'C2: 0 0010001 / 1 1101111', 'Exceso 128: 145 = 10010001 / 111 = 01101111'],
    tags: ['exercicio', 'signo e magnitude', 'complemento a 1', 'complemento a 2', 'exceso'],
    contenido: `
<div class="box ex"><div class="box-title">Representar os números 17 e −17 nunha palabra de 8 bits cos diferentes métodos</div>
<p>O 17 correspóndese con <code>10001₂</code>. Con 8 bits, o primeiro representa o signo e os sete restantes a magnitude.</p>
<h4>Signo e magnitude</h4>
<table><tr><td>17</td><td><code>0</code> <code>0010001</code></td></tr><tr><td>−17</td><td><code>1</code> <code>0010001</code></td></tr></table>
<h4>Complemento a 1</h4>
<table><tr><td>17</td><td><code>0</code> <code>0010001</code></td></tr><tr><td>−17</td><td><code>1</code> <code>1101110</code></td></tr></table>
<h4>Complemento a 2</h4>
<p>Primeiro paso, complemento a 1 do positivo: <code>1 1101110</code>. Segundo paso, sumar 1:</p>
<table><tr><td>17</td><td><code>0</code> <code>0010001</code></td></tr><tr><td>−17</td><td><code>1</code> <code>1101111</code></td></tr></table>
<h4>Exceso a 2⁷</h4>
<p>Para 8 bits o exceso é 2⁸⁻¹ = 2⁷ = 128; sumámoslles esa cantidade:</p>
<table><tr><td>17 ⇒ 17 + 128 = 145</td><td><code>10010001</code></td></tr><tr><td>−17 ⇒ −17 + 128 = 111</td><td><code>01101111</code></td></tr></table></div>`
  },
