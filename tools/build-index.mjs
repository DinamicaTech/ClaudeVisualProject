#!/usr/bin/env node
// Builds the node index (<docs>/.index.md) from the md files of a docs folder.
// It runs the parsing code of index.html itself, so the index follows exactly the page's rules.
//
//   node tools/build-index.mjs [docs folder]           write the index (default folder: docs)
//   node tools/build-index.mjs [docs folder] --check   fail if the index is missing or out of date

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const args = process.argv.slice(2);
const check = args.includes('--check');
const docs = resolve(args.find(a => !a.startsWith('--')) || 'docs');

const page = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
const start = page.indexOf('// Parsing one md file'), end = page.indexOf('// Context pack');
if (start < 0 || end < start) throw new Error('index.html: parsing section not found');
const ctx = vm.createContext({});
vm.runInContext(page.slice(start, end) + '\n;globalThis.api = { buildModel, nodeIndex, INDEX_FILE };', ctx);
const { buildModel, nodeIndex, INDEX_FILE } = ctx.api;

// Same files the page reads: every .md, skipping hidden entries and node_modules.
function readFolder(dir, prefix = '') {
  const files = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    if (e.isDirectory()) files.push(...readFolder(join(dir, e.name), prefix + e.name + '/'));
    else if (/\.md$/i.test(e.name)) files.push({ path: prefix + e.name, text: readFileSync(join(dir, e.name), 'utf8') });
  }
  return files;
}

const text = nodeIndex(buildModel(readFolder(docs), basename(docs)));
const target = join(docs, INDEX_FILE);
if (check) {
  if (!existsSync(target) || readFileSync(target, 'utf8').replace(/\r\n/g, '\n') !== text) {
    console.error(`${target} is out of date. Run: node tools/build-index.mjs ${args.find(a => !a.startsWith('--')) || 'docs'}`);
    process.exit(1);
  }
  console.log(`${target} is up to date.`);
} else {
  writeFileSync(target, text);
  console.log(`Wrote ${target}.`);
}
