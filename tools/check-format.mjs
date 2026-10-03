#!/usr/bin/env node
// Fails if any md of a docs folder has format warnings, the same warnings the page shows.
// Dependency cycles are allowed: they are listed but do not fail the check.
//
//   node tools/check-format.mjs [docs folder]   (default folder: docs)

import { basename, resolve } from 'node:path';
import { readFolder } from './docs-folder.mjs';
import { pageApi } from './page-model.mjs';

const docs = resolve(process.argv.slice(2).find(a => !a.startsWith('--')) || 'docs');
const { buildModel } = pageApi(['buildModel']);
const nodes = [...buildModel(readFolder(docs), basename(docs)).values()]
  .sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);

const isCycle = w => w === 'Depends on itself.' || w.startsWith('Dependency cycle between ');
let blocking = 0, cycles = 0;
for (const n of nodes) {
  if (!n.warnings.length) continue;
  console.log(`${n.path || '(root)'}${n.file ? ` (${n.file})` : ''}`);
  for (const w of n.warnings) {
    if (isCycle(w)) { cycles++; console.log(`  - [allowed] ${w}`); }
    else { blocking++; console.log(`  - ${w}`); }
  }
}
const summary = `${nodes.length} nodes, ${blocking} format warning(s), ${cycles} allowed cycle warning(s).`;
if (blocking) { console.error(summary + ' Fix the warnings above.'); process.exit(1); }
console.log(summary);
