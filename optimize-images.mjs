import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC = './public';
const QUALITY = 80;

async function optimize() {
  const files = await readdir(PUBLIC);
  let saved = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const input = join(PUBLIC, file);
    const output = join(PUBLIC, file.replace(/\.(png|jpe?g)$/, '.webp'));

    try {
      const before = (await stat(input)).size;
      await sharp(input).webp({ quality: QUALITY }).toFile(output);
      const after = (await stat(output)).size;
      const pct = Math.round((1 - after / before) * 100);
      saved += before - after;
      console.log(`${file} → ${pct}% smaller (${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB)`);
    } catch (e) {
      console.log(`ERROR: ${file} — ${e.message}`);
    }
  }

  console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(2)} MB`);
}

optimize();
