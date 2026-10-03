# Claude Visual Project

> Working name. The final name is still to be decided.

Visual, navigable map of AI-developed projects. Reads the Markdown docs in your repo and shows them as a tree of nodes with cross dependencies, each with its summary and design decisions. Double-click a node to get a prompt that starts a new AI thread with the right context. Works with any assistant. Single HTML file, no install.

## Usage

1. Open [`index.html`](index.html) in Chrome or Edge (double-click the file; other browsers cannot read a local folder).
2. Click **Open folder** and choose your repository's `docs` folder.
3. Browse the project as a map of cards (**Tree**, hierarchy left to right) or as rows (**Project**). Click a node to see its summary, requirements, decisions, dependencies and warnings. Double-click it to copy a context pack: a short prompt with the files a new AI thread should read. The thread first checks which node is functionally responsible for the task and, if it is another one, asks you where the task should go: the selected node, a new node, the best existing candidate, or a draft saved for later in the node where it belongs. To leave a task for later on purpose, start your message with `draft:`. Double-clicking a draft node fills in the prompt's `Task:` with its pending task.
4. **Drafts** lists every draft node (pending tasks and work not yet validated) in a table you can sort by any column. **Log** lists every decision and requirement of the project, newest first.
5. Press F5 (or **Reload**) after the docs change.
6. To rename a node, select it and click **Rename** (or press F2). You can change its title and, optionally, its file or folder name; every `depends_on`, `replaced_by` and relative link that points to it is updated. This is the only action that writes to your docs folder, and the browser asks for permission first. Commit the changes in git as usual.

Your docs are read from disk and never copied or uploaded; the page only writes to them when you rename a node. The expected Markdown format is described in [`docs/format`](docs/format/README.md).

### Node index (optional)

Threads started from the copied prompts first propose which node carries out each part of the task. To find the right nodes in one read, keep a node index next to your docs: copy `index.html` and `tools/build-index.mjs` into your repository and run

```
node tools/build-index.mjs docs
```

It writes `docs/.index.md` with every node's title, dependencies, children and Summary (Node 18 or later, no packages). The prompts ask threads to run it again after changing a node; add `node tools/build-index.mjs docs --check` to your CI to catch a stale index, as [this repository does](.github/workflows/node-index.yml).

## Status

v1. The design lives in [`docs/`](docs/README.md), written in the format the tool reads, so the project is its own first test case. Working docs are currently in Spanish.

## License

[MIT](LICENSE)
