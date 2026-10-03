---
title: Rol de director
depends_on: []
status: draft
---
## Summary
Ante un requerimiento, un hilo localiza los nodos implicados, reparte el trabajo en subagentes, verifica y actualiza los documentos.
El desglose con confirmación y el encaminado (`context-pack/routing`) ya cubren la parte de localizar los nodos; queda repartir, ejecutar y verificar.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.

## Requirements
- 2026-10-02 08:52 · Más adelante, un rol de "director": ante un requerimiento, un hilo analiza qué nodos intervienen, reparte el trabajo en subagentes, verifica y actualiza los documentos, sin que yo decida ficheros ni abra hilos a mano.
