#!/usr/bin/env python3
"""Folla de contacto de imaxes: python3 tools/contact_sheet.py <dir> <saida.png> [pmin pmax]"""
import sys, glob, os, re
from PIL import Image, ImageDraw
d, out = sys.argv[1], sys.argv[2]
pmin = int(sys.argv[3]) if len(sys.argv) > 3 else 0
pmax = int(sys.argv[4]) if len(sys.argv) > 4 else 999
files = sorted(glob.glob(os.path.join(d, 'p*.png')))
def pg(f):
    m = re.search(r'p(\d+)_', os.path.basename(f)); return int(m.group(1)) if m else -1
sel = [f for f in files if pmin <= pg(f) <= pmax]
W, H, cols = 300, 200, 6
rows = (len(sel) + cols - 1) // cols or 1
s = Image.new('RGB', (cols * (W + 8), rows * (H + 24)), '#ddd'); dr = ImageDraw.Draw(s)
for i, f in enumerate(sel):
    im = Image.open(f); im.thumbnail((W, H)); x = (i % cols) * (W + 8); y = (i // cols) * (H + 24)
    s.paste(im, (x + 4, y + 18)); dr.text((x + 4, y + 2), os.path.basename(f), fill='black')
s.save(out); print(out, len(sel))
