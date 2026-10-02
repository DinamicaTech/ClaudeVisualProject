# Working rules for AI assistants

- The project's structure and decisions live in `docs/`, one md per node, following `docs/format/README.md`.
- Before working on a node: read its md in full; read Summary and Decisions of its ancestors and dependencies (including dependencies inherited from ancestors); open those fully only when needed.
- Before finishing: update the Summary and Decisions of every node you changed. Each decision line starts with `YYYY-MM-DD HH:MM · `.
- Requirements: copy every requirement the owner states in a thread into the `## Requirements` block of the node it belongs to, word for word, only the sentences that ask for something, one line each starting with `YYYY-MM-DD HH:MM · `.
- Language: working docs in `docs/` are in Spanish. Code, code comments, UI and public-facing docs (README) are in English.
- The owner does not review code. Report what he needs to decide and validate, not how the code is written.
