---
title: Carga de requisitos
depends_on: [context-pack/routing]
status: draft
---
## Summary
Pegar un bloque de requisitos y que el hilo los reparta por el árbol: cada frase al nodo que funcionalmente le corresponde, creando los nodos que falten, y las tareas pendientes como drafts.
En un proyecto nuevo (árbol vacío) genera el árbol entero; en uno existente, completa el que hay. El árbol se construye de forma iterativa con el propietario antes de escribir nada.

## Decisions
- 2026-10-03 08:22 · Pendiente. Guardado como draft, decidido por Ronald.
- 2026-10-03 08:22 · Un solo mecanismo para proyecto nuevo y existente: un proyecto nuevo es el caso del árbol vacío.
- 2026-10-03 08:22 · Iterativo: el hilo muestra una versión del árbol (cada nodo con su Summary, qué frases recibe y cuáles quedan como draft); el propietario aclara o precisa los requisitos y sale una versión nueva, hasta su OK. Solo entonces escribe los md.
- 2026-10-03 08:22 · Profundidad inicial de dos o tres niveles; el detalle se abre al ejecutar cada draft. Los nodos que solo estructuran se crean con su Summary y sin `draft`; los que tienen tareas pendientes, como `draft` con las frases literales y su línea `draft:`.

## Requirements
- 2026-10-03 08:18 · Al crear un proyecto, poder indicar un conjunto de requerimientos y que eso genere todo el árbol de nodos funcionales de dicho proyecto (como drafts los que tengan tareas asociadas).
- 2026-10-03 08:22 · Bueno, la construcción del árbol puede ser interactiva. Se muestra una primera versión y el operador puede aclarar o especificar mejor los requerimientos, lo cual generaría una nueva versión del árbol y así de forma iterativa.
- 2026-10-03 08:22 · Buena idea la de poder aplicar el mismo procedimiento para la carga de requerimientos en un árbol existente.
- 2026-10-03 08:22 · draft: Cargar un bloque de requisitos y repartirlos por el árbol, creando los nodos que falten; en un proyecto nuevo genera el árbol entero. Mostrar el árbol propuesto y rehacerlo con las aclaraciones del propietario, de forma iterativa, antes de escribir nada.
