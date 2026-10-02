# Claude Visual Project

> Working name. The final name is still to be decided.

Visual, navigable map of AI-developed projects. Reads the Markdown docs in your repo and shows them as a tree of nodes with cross dependencies, each with its summary and design decisions. Double-click a node to get a prompt that starts a new AI thread with the right context. Works with any assistant. Single HTML file, no install.

## Usage

1. Open [`index.html`](index.html) in Chrome or Edge (double-click the file; other browsers cannot read a local folder).
2. Click **Open folder** and choose your repository's `docs` folder.
3. Browse the project as a map of boxes (hierarchy left to right, dependencies as arrows) or as a tree. Click a node to see its summary, decisions, dependencies and warnings. Double-click it to copy a context pack: a short prompt with the files a new AI thread should read.
4. Press F5 (or **Reload**) after the docs change.

Your docs are read from disk and never copied or uploaded. The expected Markdown format is described in [`docs/format`](docs/format/README.md).

## Status

v1. The design lives in [`docs/`](docs/README.md), written in the format the tool reads, so the project is its own first test case. Working docs are currently in Spanish.

## License

[MIT](LICENSE)
