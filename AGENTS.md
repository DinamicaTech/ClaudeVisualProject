# Working rules for AI assistants

- The project's structure and decisions live in `docs/`, one md per node, following `docs/format/README.md`.
- Before working on a node: read its md in full; read Summary and Decisions of its ancestors and dependencies (including dependencies inherited from ancestors); open those fully only when needed.
- Before finishing: update the Summary and Decisions of every node you changed. Each decision line starts with `YYYY-MM-DD HH:MM · `.
- Before changing any file: read the node index `docs/.index.md` to find the node that owns each part of the task (if a part has none, ask the owner whether to do it from the current node or in a new one, and propose where it goes), reply with a breakdown of the task (each functional part, the node that carries it out, existing or new, and the requirement line it gets) and wait for the owner's confirmation. Do it even if only one node is affected. If an affected node has an open branch or pull request changing its md, say which (title, date, thread link) and do not start until it is closed; never merge or close it unless the owner says so.
- Once confirmed, the change is atomic: all affected nodes in one branch, pushed as soon as you start. Add affected nodes that are not already dependencies (declared or inherited) to `depends_on`.
- Requirements: copy every requirement the owner states in a thread into the `## Requirements` block of the node it belongs to, word for word, only the sentences that ask for something, one line each starting with `YYYY-MM-DD HH:MM · `. In other affected nodes write `YYYY-MM-DD HH:MM · Derived from <node path>: <what this node must now provide>`.
- Agree before coding (this repository's owner only): before implementing anything the owner asks for, restate it and its impact on other nodes and on the code, question it if it may cause rework or inconsistencies, and wait for his explicit go-ahead.
- Language: working docs in `docs/` are in Spanish. Code, code comments, UI and public-facing docs (README) are in English.
- Git is not the owner's job. When he says a change is validated, the thread merges its own PR and updates his local clone (pull); never ask him to commit, merge or pull.
- The owner does not review code. Report what he needs to decide and validate, not how the code is written.
- After changing any node, run `node tools/build-index.mjs docs`; CI fails if `docs/.index.md` is out of date.
