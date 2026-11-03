---
title: Files
depends_on: [model, viewer/node-card, viewer/node-card/abrir-conversacion, viewer/map/nodos-ocupados, build/github]
threads:
  - 2026-11-03 09:07 · Añadir pestaña con todos los md | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL1ya6ALbiUSdBxdpfXyMqNR
---
## Summary
Pestaña "Files" del selector de vista: todos los md de la carpeta de docs en una tabla ordenable, con su fichero, su nodo, una breve descripción, el hilo que lo gestiona y la fecha de su último cambio.
Desde cada fila se abre el md completo dentro de la página ("md"; desde GitHub, también en github.com con "↗") o el hilo que lo gestiona; el doble clic abre su hilo más reciente, como en las demás vistas.

## Decisions
- 2026-11-03 09:07 · Vista aparte, entre "Project" y "Drafts"; Drafts no cambia. Se descartó fusionarlas en una sola tabla de nodos con filtro de estado, que ahorraba una pestaña pero rehacía Drafts. Elegido por Ronald (opción A, 09:07).
- 2026-11-03 09:07 · Cada md de la carpeta de docs es un nodo, así que hay una fila por nodo con fichero (las carpetas sin `README.md` no tienen md y no salen). Los md de fuera de la carpeta de docs (`AGENTS.md`, `CLAUDE.md`, el README del repositorio, `sources/`) no salen: no son nodos y la página no los lee.
- 2026-11-03 09:07 · Columnas: fichero (ruta dentro de la carpeta de docs, con los botones "md" y "↗"), nodo (título con el color de su área y las etiquetas draft, idea, obsolete y de avisos), descripción (la primera frase del Summary; el tooltip de la fila da el Summary entero), hilo y último cambio (fecha de su requisito o decisión más reciente). Clic en la cabecera ordena y otro clic invierte; por defecto, por fichero. El orden se recuerda tras F5.
- 2026-11-03 09:07 · El hilo que gestiona un md es el mismo que abre el doble clic (`viewer/node-card/abrir-conversacion`): el del trabajo abierto si una rama o un PR lo está cambiando, con la etiqueta azul de su PR; si no, el último de `threads`; "none yet" si nunca se ha trabajado. Su título es un enlace que lo abre en Claude.
- 2026-11-03 09:07 · "md" muestra el fichero en el visor de la ficha ("Open full document"). La página no puede abrirlo en un editor del PC. Respeta el zoom (Z), comparte selección y ficha con las demás vistas y funciona en el HTML autónomo.

## Requirements
- 2026-11-03 09:04 · Una pestaña con todos los md, indicando nodo (hilo?) y breve descripción, poderlos abrir directamente y/o acceder al hilo que los está gestionando ...
- 2026-11-03 09:07 · A [vista aparte, sin fusionarla con Drafts]
