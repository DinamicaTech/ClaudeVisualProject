---
title: Visor
depends_on: [model]
---
## Summary
La página que usa la persona: navegar el proyecto como mapa de cajas o como árbol, ver juntos los drafts (`viewer/drafts`) o el registro de decisiones y requisitos (`viewer/log`), seleccionar un nodo para ver qué es y qué se decidió, y hacer doble clic para arrancar un hilo nuevo sobre él.
Solo lectura, salvo renombrar un nodo (`viewer/rename`).

## Decisions
- 2026-10-02 09:00 · Dos partes: el árbol (`viewer/tree`) y la ficha del nodo (`viewer/node-card`).
- 2026-10-02 09:00 · Sin edición en la v1; los docs los cambian los hilos, no el visor.
- 2026-10-02 10:52 · Excepción a la solo lectura: renombrar un nodo (`viewer/rename`), pedido por Ronald. Es la única escritura en la carpeta.
- 2026-10-02 10:26 · Tercera parte: el mapa (`viewer/map`), vista por defecto. Decidido por Ronald a las 10:23; es la misma jerarquía dibujada con cajas, no un grafo.
- 2026-10-03 07:50 · Dos vistas más en el selector, que queda "Tree / Project / Drafts / Log": la tabla de nodos draft (`viewer/drafts`) y el registro por fechas de decisiones y requisitos (`viewer/log`). Las dos comparten la selección, la ficha, el doble clic y el zoom.

## Requirements
- 2026-10-03 07:50 · Derived from context-pack/routing: ver todos los drafts juntos y consultar qué pasó con un draft absorbido por otro nodo.
