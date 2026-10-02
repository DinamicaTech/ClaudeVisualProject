---
title: Visor
depends_on: [model]
---
## Summary
La página que usa la persona: navegar el proyecto como mapa de cajas o como árbol, seleccionar un nodo para ver qué es y qué se decidió, y hacer doble clic para arrancar un hilo nuevo sobre él.
Solo lectura en la v1.

## Decisions
- 2026-10-02 09:00 · Dos partes: el árbol (`viewer/tree`) y la ficha del nodo (`viewer/node-card`).
- 2026-10-02 09:00 · Sin edición en la v1; los docs los cambian los hilos, no el visor.
- 2026-10-02 10:26 · Tercera parte: el mapa (`viewer/map`), vista por defecto. Decidido por Ronald a las 10:23; es la misma jerarquía dibujada con cajas, no un grafo.
