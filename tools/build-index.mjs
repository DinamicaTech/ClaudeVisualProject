#!/usr/bin/env node
// Builds the node index (<docs>/.index.md) from the md files of a docs folder.
// It runs the parsing code of index.html itself (page-model.mjs), so the index follows exactly the page's rules.
//
//   node tools/build-index.mjs [docs folder]           write the index (default folder: docs)
//   node tools/build-index.mjs [docs folder] --check   fail if the index is missing or out of date

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename, resolve } from 'node:path';
import { readFolder } from './docs-folder.mjs';
import { pageApi } from './page-model.mjs';

const args = process.argv.slice(2);
const check = args.includes('--check');
const docs = resolve(args.find(a => !a.startsWith('--')) || 'docs');

const { buildModel, nodeIndex, INDEX_FILE } = pageApi(['buildModel', 'nodeIndex', 'INDEX_FILE']);

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
