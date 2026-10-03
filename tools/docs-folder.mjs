// Reads a docs folder the way index.html does: every .md, skipping hidden entries and node_modules.
// Shared by the tools in this folder.

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export function readFolder(dir, prefix = '') {
  const files = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    if (e.isDirectory()) files.push(...readFolder(join(dir, e.name), prefix + e.name + '/'));
    else if (/\.md$/i.test(e.name)) files.push({ path: prefix + e.name, text: readFileSync(join(dir, e.name), 'utf8') });
  }
  return files.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
}
