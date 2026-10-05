---
title: Nodos ocupados
depends_on: [viewer/node-card, viewer/node-card/abrir-conversacion, viewer/tree, viewer/mover-nodo, viewer/rename, build/html-autonomo]
threads:
  - Nodos ocupados | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL5bS6uc59A9NYjJ2kCxct3y
---
## Summary
Marca "open" en el mapa y en la vista Project los nodos cuyo md cambia una rama o un PR sin fusionar; la ficha lista ese trabajo y "Open thread" abre su hilo, para acabar de validarlo y cerrarlo.
El dato sale de `docs/.open-work.md`, que una GitHub Action ("Open work") reescribe en main con cada push y cada PR. Desde GitHub (`build/github`) está al día en cada recarga; desde una carpeta local, al día del último `git pull` (`Refresh.cmd`).
En un proyecto de GitHub, "View in-progress version" muestra el md del nodo tal como lo deja la rama abierta, y los nodos que una rama crea aparecen ya en el árbol, con borde discontinuo y la etiqueta "new". Mientras un nodo tiene trabajo abierto, Renombrar y Mover se bloquean si escribirían en su md.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 15:18 · Fuente del dato, elegida por Ronald (opción A, 15:04): la Action "Open work" (`.github/workflows/open-work.yml`, `node tools/open-work.mjs docs`) se ejecuta con cada push a cualquier rama, cada PR abierto, editado o cerrado, y a mano. Escribe `docs/.open-work.md` y lo sube a main solo si la lista cambia. Se descartaron un token de GitHub en la página (no funciona sin conexión y guarda un secreto en el navegador) y la mezcla de ambos.
- 2026-10-03 15:18 · [replaced by 2026-10-03 15:30] Una rama tiene trabajo abierto si tiene un PR abierto, o si no tiene PR cerrado con su mismo último commit y lleva cambios que main no tiene. Solo cuentan los md de `docs` (no los ocultos como `.index.md`); un fichero renombrado ocupa su ruta vieja y la nueva.
- 2026-10-03 15:18 · `.open-work.md` tiene una sección `## <rama>` por rama con las líneas "Pull request: #N · título · URL", "Thread: <enlace>", "Since: <fecha del primer commit>" y "Files: <md relativos a docs>", y una línea "Updated" (UTC). El hilo es el último enlace que la rama añade a un `threads`; si no hay, el enlace "project thread" de la descripción del PR.
- 2026-10-03 15:18 · La Action borra la rama de un PR fusionado cuyo último commit sigue siendo el del PR, en lugar de la opción de GitHub "borrar la rama al fusionar", que este hilo no puede activar. Así se borran también las 15 ramas viejas ya fusionadas (Ronald, 15:10). Un PR fusionado conserva sus commits y su botón "Restore branch".
- 2026-10-03 15:18 · Los commits de la Action van a main con el usuario github-actions y no disparan otras comprobaciones. No afectan al Log, que solo lee los md (Ronald, 15:04).
- 2026-10-03 15:18 · La página no puede ejecutar `git pull`, así que en vez de un botón "refresh" la raíz del repositorio tiene `Refresh.cmd`: doble clic hace `git pull --ff-only` y luego F5 (Ronald, 15:10). La cabecera muestra "open work: N · updated <fecha>"; su tooltip lo explica.
- 2026-10-03 15:18 · El nodo ocupado lleva la etiqueta "open" en azul en su tarjeta del mapa y en su fila de la vista Project; al pasar el ratón se ve qué PR o rama lo ocupa. Sin `.open-work.md` la página se comporta como antes.
- 2026-10-03 15:21 · Validado por Ronald a las 15:20: pasa a stable.
- 2026-10-03 15:30 · Una rama tiene trabajo abierto si tiene un PR abierto, o si no tiene PR cerrado con su mismo último commit y lleva cambios que main no tiene. Solo cuentan los md de la carpeta de docs (no los ocultos como `.index.md`); un fichero renombrado ocupa su ruta vieja y la nueva. La ruta de la carpeta en el repositorio es el `docs_path` del nodo raíz o, si falta, la que recibe la herramienta, relativa a la raíz del repositorio (ver `context-pack/carpeta-de-docs`).
- 2026-10-03 19:35 · La Action también sirve a otros proyectos: `tools/project/open-work.yml` es la versión que instala "New project" (ver `nuevo-proyecto`), que descarga `tools/open-work.mjs` de este repositorio público. Por eso `tools/open-work.mjs` ha de seguir funcionando con cualquier repositorio y carpeta de docs.
- 2026-10-04 15:05 · En un proyecto abierto desde GitHub, cada trabajo abierto de la ficha tiene "View in-progress version": muestra el md del nodo leído de esa rama, con el mismo visor que "Open full document". Si la rama ya no tiene ese fichero, lo avisa (lo mueve o lo borra). En una carpeta local no está, porque la página no sabe de qué repositorio es.
- 2026-10-04 15:05 · [replaced by 2026-10-05 09:17] Pendiente, como siguiente paso de este hilo: mostrar también los nodos nuevos que solo existen en una rama sin fusionar (Ronald, 15:05).
- 2026-10-05 09:17 · En un proyecto abierto desde GitHub, los md que una rama abierta crea y que la rama principal aún no tiene aparecen como nodos en Tree y Project, bajo su padre: borde discontinuo azul y etiqueta "new" con el nombre de la PR; una carpeta que solo contiene nodos nuevos también lo es. Su contenido se lee de la rama en cada recarga. Si dos ramas crean el mismo fichero, se muestra el de la primera de la lista. Acordado con Ronald (09:17).
- 2026-10-05 09:17 · La ficha de un nodo nuevo es de solo lectura: un aviso dice en qué PR está, "Open thread" abre su hilo, y no tiene Copy context pack, New sub-task, Rename ni Mover (tampoco se pueden soltar nodos sobre él), porque aún no existe en la rama principal.
- 2026-10-05 09:17 · No cuentan en Drafts, Questions, Log, el contador de avisos ni el índice de nodos, que reflejan solo la rama principal. Un interruptor "Work in progress" en la cabecera (Tree y Project, solo en proyectos de GitHub) los muestra u oculta; activado por defecto y guardado con la vista.
- 2026-10-05 09:17 · En una carpeta local no se muestran (la página no sabe de qué repositorio es), y los nodos que una rama mueve o borra no se marcan: ya salen como "open" con "View in-progress version".

## Requirements
- 2026-10-03 08:00 · draft: Mostrar en el mapa qué nodos tienen una rama o PR abierto que cambia su md. Antes de construirlo, decidir cómo se obtiene ese dato sin conexión.
- 2026-10-03 14:57 · Como hemos finalizado el desarrollo de poder saltar directamente al hilo, podremos acceder fácilmente a los hilos 'abiertos' para acabar de validar o completar la información para que se puedan cerrar.
- 2026-10-03 15:04 · En lugar de programar un git pull cada 10 minutos, qué tal un botón 'refresh' en la pantalla del proyecto ejecutarlo bajo demanda ?
- 2026-10-03 15:10 · Ok al Refresh.cmd
- 2026-10-03 15:10 · Ok al borrado del historial y activar el 'borrar la rama al fusionar'
- 2026-10-03 15:30 · Derived from context-pack/carpeta-de-docs: reconocer los ficheros de la carpeta de docs aunque no esté en la raíz del repositorio.
- 2026-10-04 15:03 · Y poder ver los hilos no fusionados resulta realmente útil.
- 2026-10-04 15:05 · Una vez finalizado, mira lo de que los nodos nuevos en una rama sin fusionar, que creo que resulta bastante útil, no ?
