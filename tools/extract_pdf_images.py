#!/usr/bin/env python3
"""Extrae as imaxes dun PDF aplanando a transparencia (smask) sobre branco.
Uso: python3 tools/extract_pdf_images.py <pdf> <dir_saida> [min_px]
"""
import sys, pymupdf
from PIL import Image
import io, os

pdf, out = sys.argv[1], sys.argv[2]
minpx = int(sys.argv[3]) if len(sys.argv) > 3 else 120
os.makedirs(out, exist_ok=True)
doc = pymupdf.open(pdf)
seen = set()
for pno in range(len(doc)):
    page = doc[pno]
    for i, info in enumerate(page.get_images(full=True)):
        xref, smask = info[0], info[1]
        if xref in seen:
            continue
        seen.add(xref)
        try:
            pix = pymupdf.Pixmap(doc, xref)
            if pix.n - pix.alpha >= 4:
                pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
            if pix.width < minpx or pix.height < minpx:
                continue
            img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
            if smask:
                mpix = pymupdf.Pixmap(doc, smask)
                m = Image.open(io.BytesIO(mpix.tobytes("png"))).convert("L")
                if m.size == img.size:
                    bg = Image.new("RGB", img.size, (255, 255, 255))
                    bg.paste(img, mask=m)
                    img = bg
            name = f"p{pno+1:02d}_{i+1:02d}.png"
            img.save(os.path.join(out, name), optimize=True)
            print(name, img.size)
        except Exception as e:
            print("ERR", pno + 1, xref, e)
