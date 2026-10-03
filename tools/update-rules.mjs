#!/usr/bin/env node
// Writes this page's CVP rules into the global-rules node of a docs folder, like "Update rules" in the page:
// only the block between the cvp-rules markers changes; the "Project rules" section is kept as it is.
// It runs the code of index.html itself (page-model.mjs), so the text is exactly the page's.
//
//   node tools/update-rules.mjs [docs folder]           write the rules (default folder: docs)
//   node tools/update-rules.mjs [docs folder] --check   fail if the global rules are missing or not this page's

import { readFileSync, writeFileSync } from 'node:fs';
import { join, basename, resolve } from 'node:path';
import { readFolder } from './docs-folder.mjs';
import { pageApi } from './page-model.mjs';

const args = process.argv.slice(2);
const check = args.includes('--check');
const folderArg = args.find(a => !a.startsWith('--')) || 'docs';
const docs = resolve(folderArg);

const { buildModel, rulesStatus, updatedRulesFile, RULES_NODE, RULES_VERSION } =
  pageApi(['buildModel', 'rulesStatus', 'updatedRulesFile', 'RULES_NODE', 'RULES_VERSION']);

const r = rulesStatus(buildModel(readFolder(docs), basename(docs)));
const file = join(docs, r.node ? r.node.file : RULES_NODE + '.md');
if (check) {
  if (r.status !== 'current') {
    console.error(`${file}: global rules ${r.status} (page version ${RULES_VERSION}). Run: node tools/update-rules.mjs ${folderArg}`);
    process.exit(1);
  }
  console.log(`${file} holds the page's rules (version ${RULES_VERSION}).`);
} else {
  const d = new Date(), p = x => String(x).padStart(2, '0');
  const stamp = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
  writeFileSync(file, updatedRulesFile(r.node ? readFileSync(file, 'utf8') : null, stamp));
  console.log(`Wrote the rules (version ${RULES_VERSION}) to ${file}.`);
}
