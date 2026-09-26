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
