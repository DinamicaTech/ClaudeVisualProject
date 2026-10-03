---
title: Visor
depends_on: [model]
---
## Summary
La página que usa la persona: navegar el proyecto como mapa de cajas o como árbol, ver juntos los drafts (`viewer/drafts`) o el registro de decisiones y requisitos (`viewer/log`), seleccionar un nodo para ver qué es y qué se decidió, y hacer doble clic para arrancar un hilo nuevo sobre él.
Solo lectura, salvo renombrar un nodo (`viewer/rename`), moverlo a otra rama (`viewer/mover-nodo`) escribir las reglas globales ("Update rules", `context-pack/reglas-del-proyecto`) y el índice de nodos ("Rebuild index", `context-pack/index`).

## Decisions
- 2026-10-02 09:00 · Dos partes: el árbol (`viewer/tree`) y la ficha del nodo (`viewer/node-card`).
- 2026-10-02 09:00 · Sin edición en la v1; los docs los cambian los hilos, no el visor.
- 2026-10-02 10:52 · Excepción a la solo lectura: renombrar un nodo (`viewer/rename`), pedido por Ronald. Es la única escritura en la carpeta.
- 2026-10-02 10:26 · Tercera parte: el mapa (`viewer/map`), vista por defecto. Decidido por Ronald a las 10:23; es la misma jerarquía dibujada con cajas, no un grafo.
- 2026-10-03 07:50 · [replaced by 2026-10-03 18:45] Dos vistas más en el selector, que queda "Tree / Project / Drafts / Log": la tabla de nodos draft (`viewer/drafts`) y el registro por fechas de decisiones y requisitos (`viewer/log`). Las dos comparten la selección, la ficha, el doble clic y el zoom.
- 2026-10-03 08:47 · Segunda escritura en la carpeta: mover un nodo arrastrando su tarjeta en el mapa con "Tree edit mode" encendido (`viewer/mover-nodo`), pedido por Ronald.
- 2026-10-03 14:58 · Tercera escritura en la carpeta: "Update rules" (`context-pack/reglas-del-proyecto`). La cabecera muestra "Add global rules" si el proyecto no tiene nodo `global-rules`, "⚠ Update rules" si sus reglas son de una versión anterior y "⚠ Rules newer than page" si son de una más nueva (sin acción: hay que conseguir el `index.html` nuevo). El botón reescribe solo la sección "CVP rules" o crea el nodo, regenera el índice y recarga.
- 2026-10-03 16:12 · Botón "Load requirements" en la cabecera, también en la instantánea: copia el prompt de carga de requisitos (`context-pack/carga-de-requisitos`); el aviso dice que se pegue en un hilo nuevo con los requisitos al final.
- 2026-10-03 16:25 · Botón "New project" en la cabecera y en la pantalla inicial: copia el prompt de `nuevo-proyecto`, también sin carpeta abierta.
- 2026-10-03 16:25 · Cuarta escritura en la carpeta: "Add node index" / "⚠ Rebuild index" en la cabecera cuando `.index.md` falta o no coincide con los md (`context-pack/index`).
- 2026-10-03 18:45 · El selector de vista queda "Tree / Project / Drafts / Questions / Log": la tabla de nodos draft (`viewer/drafts`), la tabla numerada de todas las preguntas abiertas (líneas `question:` de los drafts, en el orden del árbol, con su nodo, fecha y el hilo donde contestarla) y el registro por fechas de decisiones y requisitos (`viewer/log`). Comparten la selección, la ficha y el zoom. El doble clic copia el prompt del nodo, salvo en Questions, donde abre el hilo de la pregunta: el del nodo (trabajo abierto o último hilo) o, si no tiene, el del antepasado más cercano que lo tenga, normalmente el de la carga de requisitos; sin ninguno, copia el prompt del nodo. Pedido por Ronald (18:34).
- 2026-10-03 19:20 · En la vista Questions se contestan varias preguntas de una vez: cada fila tiene una casilla, un desplegable con sus opciones (A, B… leídas del texto de la pregunta, con la recomendada ya elegida) más "Other" para escribir la respuesta, y el botón "Copy answers prompt (N)" copia un prompt para un solo hilo que apunta todas las respuestas marcadas en sus nodos. La página no escribe las respuestas: aplicarlas puede cambiar decisiones, y eso lo hace un hilo. Las respuestas elegidas se olvidan al recargar.

## Requirements
- 2026-10-03 07:50 · Derived from context-pack/routing: ver todos los drafts juntos y consultar qué pasó con un draft absorbido por otro nodo.
- 2026-10-03 08:47 · Derived from viewer/mover-nodo: la página escribe en la carpeta también para mover nodos, no solo para renombrar.
- 2026-10-03 14:58 · Derived from context-pack/reglas-del-proyecto: aviso en la cabecera cuando las reglas globales faltan o están desfasadas, con un botón que las escribe.
- 2026-10-03 16:12 · Derived from context-pack/carga-de-requisitos: botón "Load requirements" en la cabecera.
- 2026-10-03 16:25 · Derived from nuevo-proyecto: botón "New project" en la cabecera y en la pantalla inicial.
- 2026-10-03 16:25 · Derived from nuevo-proyecto: aviso y botón para crear o regenerar el índice de nodos.
- 2026-10-03 18:34 · Y un botón Questions entre Drafts y Log con una tabla secuencial de todas las preguntas pendientes. Hacer doble click sobre una pregunta salta al hilo correspondiente.
- 2026-10-03 19:09 · Se te ocurre algún mecanismo para poder contestar directamente una, varias o todas las preguntas a la vez ?
- 2026-10-03 19:12 · Los dos [contestar en bloque desde Questions y regla para que un hilo no se pare por una pregunta de otro nodo]
