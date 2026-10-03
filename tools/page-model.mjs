// Runs the parsing and model code of index.html in Node, so the tools follow exactly the page's rules.
// Shared by the tools in this folder. That part of index.html cannot use the DOM.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

// Returns the named functions and constants of the page's parsing section.
export function pageApi(names) {
  const page = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
  const start = page.indexOf('// Parsing one md file'), end = page.indexOf('// Context pack');
  if (start < 0 || end < start) throw new Error('index.html: parsing section not found');
  const ctx = vm.createContext({});
  vm.runInContext(page.slice(start, end) + `\n;globalThis.api = { ${names.join(', ')} };`, ctx);
  return ctx.api;
}
