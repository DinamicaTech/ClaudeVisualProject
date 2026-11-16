// Tests of the dated `threads` lines (viewer/threads): the page's parser and tools/date-threads.mjs.
//   node --test tests/*.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { pageApi } from '../tools/page-model.mjs';

const { parseThreads } = pageApi(['parseThreads']);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('parseThreads reads dated and undated lines', () => {
  const t = parseThreads([
    '2026-10-31 10:05 · Pantalla con todos los hilos | https://claude.ai/x?thread=a',
    'Old thread | https://claude.ai/x?thread=b',
    'claude --resume 123',
  ]);
  assert.deepEqual(JSON.parse(JSON.stringify(t)), [
    { when: '2026-10-31 10:05', title: 'Pantalla con todos los hilos', link: 'https://claude.ai/x?thread=a' },
    { when: '', title: 'Old thread', link: 'https://claude.ai/x?thread=b' },
    { when: '', title: '', link: 'claude --resume 123' },
  ]);
});

test('date-threads dates undated lines from git and keeps dated ones', () => {
  const repo = mkdtempSync(join(tmpdir(), 'cvp-threads-'));
  const git = (...a) => execFileSync('git', ['-C', repo, ...a], { encoding: 'utf8' });
  git('init', '-q');
  mkdirSync(join(repo, 'docs'));
  const md = l => `---\ntitle: A\ndepends_on: []\nthreads:\n${l}---\n## Summary\nx\n\n## Decisions\n`;
  writeFileSync(join(repo, 'docs', 'README.md'), md('  - First | https://t/1\n'));
  const env = { ...process.env, GIT_AUTHOR_NAME: 't', GIT_AUTHOR_EMAIL: 't@t', GIT_COMMITTER_NAME: 't', GIT_COMMITTER_EMAIL: 't@t' };
  const commit = date => execFileSync('git', ['-C', repo, 'commit', '-qam', 'c'], { env: { ...env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date } });
  git('add', '.'); commit('2026-10-02T10:38:00Z');
  writeFileSync(join(repo, 'docs', 'README.md'), md('  - First | https://t/1\n  - 2026-10-05 09:00 · Second | https://t/2\n'));
  commit('2026-10-05T09:01:00Z');
  execFileSync('node', [join(root, 'tools', 'date-threads.mjs'), join(repo, 'docs')], { encoding: 'utf8' });
  const out = readFileSync(join(repo, 'docs', 'README.md'), 'utf8');
  assert.match(out, /\n {2}- 2026-10-02 10:38 · First \| https:\/\/t\/1\n {2}- 2026-10-05 09:00 · Second \| https:\/\/t\/2\n/);
});

test('filterThreadRows: "open" keeps threads with open work and open work without a thread', () => {
  const { filterThreadRows } = pageApi(['filterThreadRows']);
  const rows = [
    { link: 'https://t/1', work: [] },
    { link: 'https://t/2', work: [{ branch: 'b2' }] },
    { link: 'branch:b3', work: [{ branch: 'b3' }], noThread: true },
  ];
  assert.deepEqual(filterThreadRows(rows, 'all').map(r => r.link), ['https://t/1', 'https://t/2']);
  assert.deepEqual(filterThreadRows(rows, 'open').map(r => r.link), ['https://t/2', 'branch:b3']);
});

test('parsePull reads the state, dates and thread of a GitHub pull request', () => {
  const { parsePull, threadKey, filterPulls } = pageApi(['parsePull', 'threadKey', 'filterPulls']);
  const base = { number: 59, title: 'T', html_url: 'https://github.com/o/r/pull/59', head: { ref: 'b' }, created_at: '2026-11-16T15:37:00Z' };
  const merged = parsePull({ ...base, state: 'closed', merged_at: '2026-11-16T15:42:00Z', closed_at: '2026-11-16T15:42:00Z',
    body: '_Requested by **R** · [project thread](https://claude.ai/code/project/chan_1?thread=cmsg_2)_' });
  assert.equal(merged.state, 'merged');
  assert.equal(merged.closed, '2026-11-16T15:42:00Z');
  assert.equal(merged.thread, 'https://claude.ai/code/project/chan_1?thread=cmsg_2');
  assert.equal(threadKey(merged.thread), 'cmsg_2');
  const closed = parsePull({ ...base, number: 60, state: 'closed', merged_at: null, closed_at: '2026-11-16T16:00:00Z', body: null });
  assert.equal(closed.state, 'closed');
  assert.equal(closed.thread, '');
  const open = parsePull({ ...base, number: 61, state: 'open', draft: true });
  assert.equal(open.state, 'open');
  assert.deepEqual(filterPulls([merged, closed, open], 'merged').map(p => p.number), ['59']);
  assert.equal(filterPulls([merged, closed, open], 'all').length, 3);
});
