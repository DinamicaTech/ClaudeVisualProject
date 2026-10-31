// Tests of the Questions view (viewer/README): the options of a question and the thread where it was asked.
//   node --test tests/*.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pageApi } from '../tools/page-model.mjs';

const { questionOptions, threadAt, parseThreads } = pageApi(['questionOptions', 'threadAt', 'parseThreads']);
const plain = x => JSON.parse(JSON.stringify(x));

test('questionOptions reads "A) … (recomendada)"', () => {
  const q = questionOptions('question: ¿Cuál? A) uno B) dos (recomendada) C) tres');
  assert.deepEqual(plain(q), { opts: [{ key: 'A', text: 'uno' }, { key: 'B', text: 'dos (recomendada)' }, { key: 'C', text: 'tres' }], rec: 'B' });
});

test('questionOptions reads "(a) … ✅ (b) …"', () => {
  const q = questionOptions('question: P-08 ¿de dónde sale la cuenta de gasto? (a) la del proveedor, con la última usada como propuesta revisable ✅ (b) reglas por concepto');
  assert.deepEqual(plain(q), {
    opts: [{ key: 'A', text: 'la del proveedor, con la última usada como propuesta revisable' }, { key: 'B', text: 'reglas por concepto' }],
    rec: 'A',
  });
});

test('threadAt gives the thread where a dated line was written', () => {
  const ts = parseThreads([
    '2026-10-28 12:30 · Carga de requisitos | https://claude.ai/p?thread=load',
    '2026-10-29 18:54 · Validar prototipos | https://claude.ai/p?thread=proto',
  ]);
  assert.equal(threadAt(ts, '2026-10-28 12:28').title, 'Carga de requisitos');
  assert.equal(threadAt(ts, '2026-10-29 18:14').title, 'Validar prototipos');
  assert.equal(threadAt(ts, '2026-10-31 07:46').title, 'Validar prototipos');
  assert.equal(threadAt(ts, '2026-10-20 09:00'), null);   // much older than any thread of the node
  assert.equal(threadAt(ts, ''), null);
  assert.equal(threadAt(parseThreads(['Old | https://x']), '2026-10-28 12:28'), null);
});
