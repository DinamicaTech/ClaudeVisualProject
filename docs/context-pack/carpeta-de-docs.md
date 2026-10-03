---
title: Carpeta de docs fuera de la raíz
depends_on: [viewer/map/nodos-ocupados]
threads:
  - Carpeta de docs fuera de la raíz | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL3VPknaUbJxpznmzToB1LXa
---
## Summary
Permite que la carpeta de docs esté en cualquier sitio del repositorio, no solo en su raíz.
El nodo raíz declara su ruta desde la raíz del repositorio con el campo `docs_path` (p. ej. `docs_path: documentacion/specs`). Con ella se forman las rutas que da la página (prompts, ficha, cabecera, Rename y Move) y las que usa la Action "Open work".
Sin el campo todo sigue como antes: se usa el nombre de la carpeta abierta, que se supone en la raíz.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 15:30 · La ruta de la carpeta de docs dentro del repositorio se declara en la cabecera del nodo raíz con el campo opcional `docs_path`, ruta desde la raíz del repositorio sin barra final (ver `format`). Las rutas relativas al repo que da la página (prompts del doble clic y de "New sub-task", ficha, mapa, cabecera, Rename y Move) se forman con `docs_path` delante; si el campo falta, con el nombre de la carpeta abierta, como antes. Confirmado por Ronald (15:26).
- 2026-10-03 15:30 · Va en los md y no en una opción de la página: viaja con el repositorio, vale igual para cualquier persona y para la instantánea HTML, y lo leen las herramientas de GitHub. La página no puede detectar la ruta sola: el navegador solo deja leer la carpeta elegida.
- 2026-10-03 15:30 · El estado de la vista se sigue guardando por nombre de carpeta; separarlo por proyecto es cosa del draft `build/selector-de-proyectos`.
- 2026-10-03 15:30 · Validado por Ronald a las 15:29: pasa a stable.

## Requirements
- 2026-10-03 08:00 · draft: Permitir indicar la ruta de la carpeta de docs dentro del repositorio, para que las rutas del paquete de contexto sean correctas cuando no está en la raíz.
