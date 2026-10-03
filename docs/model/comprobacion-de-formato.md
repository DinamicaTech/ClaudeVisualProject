---
title: Comprobación de formato en GitHub
depends_on: []
status: draft
---
## Summary
Que un PR que deje un md mal formado (dependencia rota, bloque fijo ausente o desordenado, decisión sin fecha) salga en rojo en GitHub.
Los avisos están programados dentro de `index.html`: habría que reutilizarlos como ya hace el índice de nodos (`context-pack/index`), sin duplicarlos.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.

## Requirements
- 2026-10-03 08:00 · draft: Hacer que un PR salga en rojo en GitHub si deja un md con avisos de formato, reutilizando los avisos de la página como ya hace el índice de nodos.
