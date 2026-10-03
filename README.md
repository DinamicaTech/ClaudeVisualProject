# Claude Visual Project

> Working name. The final name is still to be decided.

Visual, navigable map of AI-developed projects. Reads the Markdown docs in your repo and shows them as a tree of nodes with cross dependencies, each with its summary and design decisions. Double-click a node to get a prompt that starts a new AI thread with the right context. Works with any assistant. Single HTML file, no install.

## Usage

1. Open [`index.html`](index.html) in Chrome or Edge (double-click the file; other browsers cannot read a local folder).
2. Click **Open folder** and choose your repository's `docs` folder. The page remembers every docs folder you open: the list at the top switches between projects in one click (**Open folder…** in it adds another one), each with its own view, and F5 reopens the last one.
3. Browse the project as a map of cards (**Tree**, hierarchy left to right) or as rows (**Project**). Click a node to see its summary, requirements, decisions, dependencies and warnings. Double-click it to copy a context pack: a short prompt with the files a new AI thread should read. The thread first checks which node is functionally responsible for the task and, if it is another one, asks you where the task should go: the selected node, a new node, the best existing candidate, or a draft saved for later in the node where it belongs. To leave a task for later on purpose, start your message with `draft:`. Double-clicking a draft node fills in the prompt's `Task:` with its pending task.
4. **Drafts** lists every draft node (pending tasks and work not yet validated) in a table you can sort by any column. **Log** lists every decision and requirement of the project, newest first.
5. Press F5 (or **Reload**) after the docs change.
6. To rename a node, select it and click **Rename** (or press F2). You can change its title and, optionally, its file or folder name; every `depends_on`, `replaced_by`, `[replaced by …]` marker and relative link that points to it is updated. The browser asks for permission before the page writes to your docs folder. Commit the changes in git as usual.
7. To move a node (with its descendants) to another branch, turn on **Tree edit mode** in the Tree view and drag its card onto its new parent. A dialog shows the name it will get, the inherited dependencies it can keep, and the files that move or change. If the new parent is a single file (`x.md`), it becomes a folder (`x/README.md`). After renaming or moving, the page regenerates the node index (`.index.md`) if your docs folder has one, and reloads.

### Standalone HTML

To share the map, publish it (for example on GitHub Pages) or open it in a browser that cannot read a local folder, make a snapshot: one HTML file with your docs inside. Either click **Export HTML** in the page, or run

```
node tools/build-html.mjs docs [--out file.html]
```

(copy `index.html`, `tools/build-html.mjs` and `tools/docs-folder.mjs` into your repository; Node 18 or later). The snapshot opens in any modern browser with every view and the context packs, but it does not see later changes to the docs (make it again) and cannot rename or move nodes. Anyone who can open the file can read all your docs: on GitHub, Pages sites of private repositories are public unless you are on Enterprise.

Your docs are read from disk and never copied or uploaded; the page only writes to them when you rename or move a node. The expected Markdown format is described in [`docs/format`](docs/format/README.md).

### Node index (optional)

Threads started from the copied prompts first propose which node carries out each part of the task. To find the right nodes in one read, keep a node index next to your docs: copy `index.html`, `tools/build-index.mjs`, `tools/page-model.mjs` and `tools/docs-folder.mjs` into your repository and run

```
node tools/build-index.mjs docs
```

It writes `docs/.index.md` with every node's title, dependencies, children and Summary (Node 18 or later, no packages). The prompts ask threads to run it again after changing a node; add `node tools/build-index.mjs docs --check` to your CI to catch a stale index, as [this repository does](.github/workflows/node-index.yml).

To also fail a pull request that leaves format warnings in the docs (the same warnings the page shows; dependency cycles are listed but allowed), copy `tools/check-format.mjs` too and add `node tools/check-format.mjs docs` to your CI ([example](.github/workflows/docs-format.yml)).

### Open work (optional)

To see which nodes another thread is working on, keep a list of open work next to your docs. Copy `tools/open-work.mjs` and [this workflow](.github/workflows/open-work.yml) into your repository: on every push and pull request, GitHub writes `docs/.open-work.md` on the default branch with each branch that changes md files in `docs`, its pull request, its thread link and when it started, and deletes the branch of a merged pull request. The page marks those nodes **open** in both views, lists the work in the node card, makes **Open thread** open that work's thread, and blocks renaming or moving a node while open work changes any file it would write. The list is as fresh as your last `git pull`: on Windows, double-click [`Refresh.cmd`](Refresh.cmd) and press F5.

## Status

v1. The design lives in [`docs/`](docs/README.md), written in the format the tool reads, so the project is its own first test case. Working docs are currently in Spanish.

## License

[MIT](LICENSE)
