#!/bin/bash
# OCR incremental de UD3 (FH), commit cada 5 páginas para resistir resets del sandbox.
cd /home/user/webapp
PDF=apuntes/fh/ud3-elementos-internos-dun-sistema-informatico.pdf
OUT=apuntes/fh/ocr/ud3.txt
TMP=/tmp/ocr3; mkdir -p $TMP
N=45
START=$(grep -c '^===== PAXINA' $OUT 2>/dev/null || echo 0)
for ((p=START+1; p<=N; p++)); do
  nice -n 10 pdftoppm -r 200 -png -f $p -l $p $PDF $TMP/pg >/dev/null 2>&1
  f=$(ls $TMP/pg*.png | head -1)
  echo "===== PAXINA $p =====" >> $OUT
  nice -n 10 tesseract "$f" - -l glg+spa --psm 3 >> $OUT 2>/dev/null
  rm -f $TMP/pg*.png
  if (( p % 5 == 0 || p == N )); then
    git add $OUT && git commit -qm "chore(fh): OCR UD3 páxinas ata $p" && git push -q origin genspark_ai_developer 2>/dev/null
  fi
done
echo DONE3 >> /tmp/ocr3.log
