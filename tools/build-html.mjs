#!/usr/bin/env node
// Builds a standalone HTML: a copy of index.html with the md files of a docs folder inside.
// It opens in any modern browser without "Open folder", and can be published (for example on GitHub Pages).
// Same result as the page's "Export HTML" button.
//
//   node tools/build-html.mjs [docs folder] [--out file]   (defaults: docs, <project-title>.html)

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, basename, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { readFolder } from './docs-folder.mjs';

const args = process.argv.slice(2);
const outAt = args.indexOf('--out');
const out = outAt >= 0 ? args[outAt + 1] : null;
if (outAt >= 0 && !out) throw new Error('--out needs a file name');
const docs = resolve(args.find((a, i) => !a.startsWith('--') && i !== outAt + 1) || 'docs');

const page = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
const SLOT = '<script type="application/json" id="cvpSnapshot"></script>';
if (!page.includes(SLOT)) throw new Error('index.html: snapshot slot not found');

// The project title comes from the page's own parsing code, as in build-index.mjs.
const start = page.indexOf('// Parsing one md file'), end = page.indexOf('// Context pack');
const ctx = vm.createContext({});
vm.runInContext(page.slice(start, end) + '\n;globalThis.api = { buildModel };', ctx);

const files = readFolder(docs);
const name = basename(docs);
const title = ctx.api.buildModel(files, name).get('').title;
const d = new Date(), p = x => String(x).padStart(2, '0');
const generated = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
// "<" is escaped so no md text can close the script element.
// The open work list (.open-work.md), when the folder has one, goes in too.
const workFile = join(docs, '.open-work.md');
const openWork = existsSync(workFile) ? { openWork: readFileSync(workFile, 'utf8') } : {};
// The Overview images (viewer/overview), the image files of <docs>/overview, go in as data URLs.
const TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp' };
const ovDir = join(docs, 'overview'), images = {};
if (existsSync(ovDir)) for (const f of readdirSync(ovDir).sort()) {
  const type = TYPES[(f.match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase()];
  if (type && statSync(join(ovDir, f)).isFile()) images['overview/' + f] = `data:${type};base64,${readFileSync(join(ovDir, f)).toString('base64')}`;
}
const extra = { ...openWork, ...(Object.keys(images).length ? { images } : {}) };
const json = JSON.stringify({ name, generated, files, ...extra }).replace(/</g, '\\u003c');
const slug = title.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'project';
const target = resolve(out || slug + '.html');
writeFileSync(target, page.replace(SLOT, () => SLOT.replace('></', '>' + json + '</')));
console.log(`Wrote ${target} (${files.length} md files, ${Object.keys(images).length} images).`);
