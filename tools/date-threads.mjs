#!/usr/bin/env node
// Dates the `threads` lines of a docs folder that have no date yet (viewer/threads): each
// "  - Title | link" becomes "  - YYYY-MM-DD HH:MM · Title | link", with the date and time (UTC) of the
// first commit of the repository that added that link to the docs folder, which is when that thread
// first wrote in the docs. Lines that already have a date are left as they are.
// Run it from anywhere inside the project's git clone, with the full history (not a shallow clone).
// It needs only Node and git, so another project can download this file alone and run it.
//
//   node date-threads.mjs [docs folder]           date the lines (default folder: docs)
//   node date-threads.mjs [docs folder] --dry-run  only list what it would change

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const docs = resolve(args.find(a => !a.startsWith('--')) || 'docs');
const git = (...a) => execFileSync('git', ['-C', docs, ...a], { encoding: 'utf8', maxBuffer: 64 << 20 }).trim();

if (git('rev-parse', '--is-shallow-repository') === 'true')
  throw new Error('This clone is shallow, so the dates would be wrong. Run: git fetch --unshallow');

const DATED = /^\d{4}-\d{2}-\d{2}\s+\d{1,2}:\d{2}\s*·/;
const p = x => String(x).padStart(2, '0');
const stamp = iso => { const d = new Date(iso); return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`; };

const cache = new Map();
function firstDate(link) {
  if (!cache.has(link)) {
    const out = git('log', '--reverse', '--format=%cI', '-S', link, '--', '.');
    cache.set(link, out ? stamp(out.split('\n')[0]) : '');
  }
  return cache.get(link);
}

function* mdFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const f = join(dir, name);
    if (statSync(f).isDirectory()) yield* mdFiles(f);
    else if (/\.md$/i.test(name)) yield f;
  }
}

let changed = 0, missing = 0, files = 0;
for (const file of mdFiles(docs)) {
  const text = readFileSync(file, 'utf8');
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const lines = text.split(/\r?\n/);
  if (lines[0].trim() !== '---') continue;
  const end = lines.findIndex((l, k) => k > 0 && l.trim() === '---');
  if (end < 0) continue;
  let inThreads = false, touched = false;
  for (let k = 1; k < end; k++) {
    const l = lines[k];
    if (/^\S/.test(l)) { inThreads = /^threads:\s*$/.test(l); continue; }
    const m = inThreads && /^(\s+-\s+)(.*\S)\s*$/.exec(l);
    if (!m || DATED.test(m[2])) continue;
    const i = m[2].lastIndexOf(' | ');
    const link = (i < 0 ? m[2] : m[2].slice(i + 3)).trim();
    const when = firstDate(link);
    const where = relative(docs, file).replace(/\\/g, '/');
    if (!when) { missing++; console.warn(`${where}: no commit adds ${link}; left without a date`); continue; }
    lines[k] = `${m[1]}${when} · ${m[2]}`;
    touched = true; changed++;
    if (dry) console.log(`${where}: ${lines[k].trim()}`);
  }
  if (touched) { files++; if (!dry) writeFileSync(file, lines.join(eol)); }
}
console.log(`${dry ? 'Would date' : 'Dated'} ${changed} thread line(s) in ${files} file(s)${missing ? `; ${missing} left without a date` : ''}.`);
