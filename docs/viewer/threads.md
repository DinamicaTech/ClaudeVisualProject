---
title: Threads
depends_on: [model, format, global-rules, viewer/map/nodos-ocupados]
threads:
  - 2026-10-31 10:05 · Pantalla con todos los hilos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLS3U2TuuagmxwdyKXyKdKhq
---
## Summary
Pestaña "Threads" del selector de vista: todos los hilos del proyecto, del más nuevo al más antiguo, con su fecha, su título, los nodos en los que trabajó, una breve descripción (lo que el propietario le pidió) y su PR si sigue abierto.
Doble clic abre el hilo en Claude; "▸" despliega los requisitos y decisiones que se le atribuyen.
La fecha sale de las líneas de `threads` ("YYYY-MM-DD HH:MM · Título | enlace"); `tools/date-threads.mjs` fecha con git las líneas antiguas.

## Decisions
- 2026-10-31 10:05 · Una fila por enlace de hilo distinto, reunido de las líneas `threads` de todos los nodos de la rama principal y de los hilos del trabajo abierto (`.open-work.md`), que aún no están en la rama principal. Respeta el zoom (Z).
- 2026-10-31 10:05 · Columnas: fecha (la más antigua de sus líneas; en un hilo que solo está en el trabajo abierto, su "Since"), título enlazado al hilo, descripción, nodos (clic salta al nodo) y trabajo abierto ("PR #N" o "open"). Orden cronológico descendente; los hilos sin fecha van al final con un aviso que explica cómo fecharlos.
- 2026-10-31 10:05 · No hay campo de descripción: cada requisito y cada decisión de un nodo se atribuye al hilo de ese nodo con la primera fecha igual o posterior a la suya (un hilo apunta su enlace después del mensaje del propietario), o al último hilo del nodo si es posterior a todos; lo que es más de dos días anterior a ese hilo no se le atribuye (es historia del nodo previa a que el hilo llegara). La descripción es el primer requisito del propietario atribuido al hilo (sin los "Derived from", `question:` ni `answer:`); si no hay, la primera decisión, y si tampoco, el primer requisito. Se corta a tres líneas; el tooltip la muestra entera. Es una aproximación: puede fallar cuando dos hilos trabajan a la vez el mismo nodo.
- 2026-10-31 10:05 · `tools/date-threads.mjs <carpeta de docs>` pone a cada línea de `threads` sin fecha la del primer commit que añadió ese enlace a la carpeta de docs (UTC). Solo necesita Node y git, para que cualquier proyecto lo descargue y lo ejecute en su clon. Aplicado a CVP, eqmui, KillerFlies y ProContaVF.
- 2026-10-31 10:05 · La Action "Open work" quita la fecha del título del hilo e ignora los enlaces que una rama solo reescribe (los que también quita), para que una rama que fecha líneas no pase por hilo de todos ellos.

## Requirements
- 2026-10-31 09:18 · Tendría sentido añadir una pantalla con todos los hilos ? Ordenador cronológico descendente, con los nodos afectados, una breve descripción, etc.
- 2026-10-31 09:50 · Sí, pasa el script a todos los proyectos para poder hacer pruebas.
