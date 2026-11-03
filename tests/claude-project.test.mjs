// Tests of the "Claude project" line of the Project rules (viewer/node-card/abrir-conversacion).
//   node --test tests/*.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pageApi } from '../tools/page-model.mjs';

const { claudeProjectLine } = pageApi(['claudeProjectLine']);
const rules = extra => `---\ntitle: Global rules\n---\n## Summary\nx\n\n## CVP rules\n- Claude project: https://claude.ai/code/project/chan_cvp\n\n## Project rules\n- Docs in Spanish.\n${extra}`;

test('reads the Claude project line of the Project rules only', () => {
  assert.equal(claudeProjectLine(rules('- Claude project: https://claude.ai/code/project/chan_NEW?thread=x\n')), 'https://claude.ai/code/project/chan_NEW');
  assert.equal(claudeProjectLine(rules('- 2026-11-03 10:30 · Claude project: <https://claude.ai/project/chan_B>\r\n')), 'https://claude.ai/project/chan_B');
  assert.equal(claudeProjectLine(rules('')), null);
  assert.equal(claudeProjectLine(rules('- Claude project: not a link\n')), null);
  assert.equal(claudeProjectLine(rules('\n## Other\n- Claude project: https://claude.ai/code/project/chan_X\n')), null);
});
