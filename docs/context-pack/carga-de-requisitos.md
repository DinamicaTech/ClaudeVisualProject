---
title: Carga de requisitos
depends_on: [context-pack/routing, global-rules, viewer]
threads:
  - Nuevo proyecto y carga de requisitos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLELi1mP27ikYaYzTTx83NTx
---
## Summary
Pegar un bloque de requisitos y que el hilo los reparta por el árbol: cada frase al nodo que funcionalmente le corresponde, creando los nodos que falten, y las tareas pendientes como drafts. Sirve para ampliar un proyecto y para uno nuevo (árbol vacío, ver `nuevo-proyecto`).
Antes de escribir, el hilo resuelve con el propietario las dudas bloqueantes (indefiniciones, ambigüedades, contradicciones) en rondas cortas de preguntas numeradas; las dudas locales quedan como líneas `question:` en su draft.
El botón "Load requirements" de la cabecera copia el prompt; el procedimiento está en la regla "Requirements load" de `global-rules`.

## Decisions
- 2026-10-03 08:22 · [replaced by 2026-10-03 16:13] Pendiente. Guardado como draft, decidido por Ronald.
- 2026-10-03 08:22 · Un solo mecanismo para proyecto nuevo y existente: un proyecto nuevo es el caso del árbol vacío.
- 2026-10-03 08:22 · Iterativo: el hilo muestra una versión del árbol (cada nodo con su Summary, qué frases recibe y cuáles quedan como draft); el propietario aclara o precisa los requisitos y sale una versión nueva, hasta su OK. Solo entonces escribe los md.
- 2026-10-03 08:22 · Profundidad inicial de dos o tres niveles; el detalle se abre al ejecutar cada draft. Los nodos que solo estructuran se crean con su Summary y sin `draft`; los que tienen tareas pendientes, como `draft` con las frases literales y su línea `draft:`.
- 2026-10-03 16:12 · Es el mecanismo común a la ampliación de un proyecto y a uno nuevo; `nuevo-proyecto` solo añade lo propio de un proyecto nuevo y la reutiliza. Se construye primero. Decidido por Ronald (15:38, 16:04).
- 2026-10-03 16:12 · Botón "Load requirements" en la cabecera (también en la instantánea HTML): copia un prompt que arranca en el nodo raíz, lista la raíz y el índice de nodos, lleva las reglas como los demás prompts y acaba en "Task: Load requirements:" para pegar el bloque detrás.
- 2026-10-03 16:12 · El procedimiento es la regla "Requirements load" de las CVP rules (`global-rules`, versión 2 de las reglas): la tarea no se encamina como una sola; cada frase que pide algo se numera R1, R2… literal y con el nodo propuesto, y cada indefinición, ambigüedad o contradicción (entre frases o con una decisión vigente) es una pregunta Q1, Q2… con su tipo, las frases que toca, las preguntas de las que depende, de 2 a 4 opciones con su consecuencia y una recomendación.
- 2026-10-03 16:12 · [replaced by 2026-10-03 18:00] Antes de escribir solo se resuelven las preguntas bloqueantes: las que cambian el árbol (qué nodos hay, dónde va una frase) o la arquitectura. Se preguntan en rondas de 7 como máximo, primero las de más impacto y nunca una que dependa de otra abierta; el propietario puede contestar con una palabra ("Q3 B") o aceptar la recomendación para el resto. Tras cada ronda el hilo cierra las resueltas y añade las nuevas. Elegido por Ronald (16:04) frente a resolverlo todo antes.
- 2026-10-03 16:12 · Las preguntas locales (solo afectan al interior de un nodo) se escriben en el Requirements de su draft como línea `question:` con opciones y recomendación; quien ejecute el draft las resuelve primero, y el doble clic las pone en el prompt (`context-pack`).
- 2026-10-03 16:12 · El estado de la carga (frases R, preguntas, respuestas, árbol propuesto) vive en `.requirements-load.md` en la carpeta de docs, actualizado y subido a la rama en cada ronda para que otro hilo pueda retomarla; se borra al terminar. Las respuestas del propietario son requisitos y se copian a sus nodos; si una anula una decisión vigente, esta se marca como sustituida.
- 2026-10-03 16:12 · El árbol propuesto (Summary, frases R, líneas `draft:` y preguntas locales de cada nodo) hace de desglose: se rehace con las aclaraciones del propietario hasta su OK y solo entonces se escriben los md.

- 2026-10-03 18:00 · Antes de escribir solo se resuelven las preguntas bloqueantes: las que cambian el árbol (qué nodos hay, dónde va una frase) o la arquitectura. Un valor, una cantidad, un ritmo o un detalle de comportamiento dentro de un nodo (por ejemplo, cada cuánto ataca un enemigo) nunca es bloqueante, por mucho que importe: es local; en caso de duda, es local. Se preguntan en rondas de 7 como máximo, primero las de más impacto y nunca una que dependa de otra abierta; el propietario puede contestar con una palabra ("Q3 B") o aceptar la recomendación para el resto. Tras cada ronda el hilo cierra las resueltas y añade las nuevas. Aclarado tras la primera prueba real (Killer flies), donde el hilo preguntaba detalles de juego antes de crear la estructura; CVP rules versión 4.
- 2026-10-03 16:13 · Validado por Ronald a las 16:11: pasa a stable.
## Requirements
- 2026-10-03 08:18 · Al crear un proyecto, poder indicar un conjunto de requerimientos y que eso genere todo el árbol de nodos funcionales de dicho proyecto (como drafts los que tengan tareas asociadas).
- 2026-10-03 08:22 · Bueno, la construcción del árbol puede ser interactiva. Se muestra una primera versión y el operador puede aclarar o especificar mejor los requerimientos, lo cual generaría una nueva versión del árbol y así de forma iterativa.
- 2026-10-03 08:22 · Buena idea la de poder aplicar el mismo procedimiento para la carga de requerimientos en un árbol existente.
- 2026-10-03 08:22 · draft: Cargar un bloque de requisitos y repartirlos por el árbol, creando los nodos que falten; en un proyecto nuevo genera el árbol entero. Mostrar el árbol propuesto y rehacerlo con las aclaraciones del propietario, de forma iterativa, antes de escribir nada.
- 2026-10-03 15:38 · Digamos que 'Carga de requisitos' sería común a la ampliación de un proyecto existente a través de una carga de requisitos o a la creación de un proyecto nuevo
- 2026-10-03 15:38 · En cualquier caso (ampliación de proyecto o nuevo proyecto), la carga de requisitos primero ha de resolver todas las indefiniciones, ambigüedades o contradicciones de los requerimientos indicados.
- 2026-10-03 16:04 · Resolver solo dudas bloqueantes antes de escribir
- 2026-10-03 16:04 · Sí, primero carga de requisitos ya que es una pieza necesaria para proyectos
- 2026-10-03 17:50 · Pensaba que haría solo las preguntas críticas para poder definir la estructura del proyecto, crearía la estructura y luego repartiría las dudas no críticas en los nodos correspondientes.
