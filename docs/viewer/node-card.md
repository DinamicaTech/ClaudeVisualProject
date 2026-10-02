---
title: Ficha del nodo
depends_on: [model]
---
## Summary
Muestra el nodo seleccionado: título, ruta, estado, chats vinculados, Summary, requisitos del propietario, Decisions, dependencias (propias y heredadas) y dependientes, avisos de formato y un acceso al md completo.

## Decisions
- 2026-10-02 09:13 · Muestra los bloques fijos tal como están escritos; no se genera nada al vuelo.
- 2026-10-02 09:19 · Muestra el estado del nodo y, si es obsoleto, enlaza a su sustituto.
- 2026-10-02 09:13 · Lista las dependencias (de quién depende) y los dependientes (quién lo usa), con un clic para saltar a cada uno.
- 2026-10-02 09:46 · Botones "Copy context pack" (igual que el doble clic) y "Open full document", que muestra el md entero renderizado con su cabecera.
- 2026-10-02 09:46 · Las dependencias heredadas de ascendientes se listan aparte, indicando de qué ascendiente vienen.
- 2026-10-02 09:46 · Los enlaces relativos entre md dentro del texto saltan al nodo enlazado.
- 2026-10-02 09:46 · Un botón en la cabecera de la página cuenta todos los avisos y los lista por nodo, con salto a cada uno.
- 2026-10-02 10:38 · Sección "Threads" bajo los botones, con los chats del nodo (campo `threads`): las URL se abren en una pestaña nueva y el resto se muestra como texto para copiar.
- 2026-10-02 10:38 · Botón "New sub-task": pide un título y copia el prompt de subtarea (ver `context-pack`).
- 2026-10-02 10:52 · Botón "Rename" (también F2 con el nodo seleccionado): abre el diálogo de `viewer/rename`.
- 2026-10-02 11:50 · Sección "Requirements" entre Summary y Decisions, con los requisitos literales del propietario (bloque `## Requirements`), en cursiva y con su fecha. Si no hay, una nota explica cómo se rellena.

## Requirements
- 2026-10-02 11:46 · Me gustaría poder acceder a los requerimientos escritos por mí relacionados con un nodo.
