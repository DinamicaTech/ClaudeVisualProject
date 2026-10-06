---
title: HTML autónomo
depends_on: [viewer/rename]
threads:
  - HTML autónomo | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLMiQxnTw7yEJ8rD8AKLa4Rb
---
## Summary
Genera un único HTML autónomo (una "instantánea") con los md dentro, para publicarlo (p. ej. en GitHub Pages) o abrirlo en navegadores que no pueden leer una carpeta local.
Se genera con el botón "Export HTML" de la página (Chrome o Edge, sin instalar nada) o con el comando `node tools/build-html.mjs docs`; los dos dan el mismo fichero.
La instantánea se abre en cualquier navegador moderno con todas las vistas, la ficha y el doble clic; no refleja cambios posteriores en los md (hay que volver a generarla) y no permite renombrar.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 08:30 · Dos formas de generarla, decidido por Ronald a las 08:26: botón "Export HTML" en la página (para quien no tiene Node.js) y comando `node tools/build-html.mjs [docs] [--out fichero]` (CI y quien tenga Node).
- 2026-10-03 08:30 · La instantánea es una copia de `index.html` con los md en un bloque de datos (`<script type="application/json" id="cvpSnapshot">`): un solo visor, sin duplicar código. El fichero se llama como el título del proyecto en minúsculas con guiones.
- 2026-10-03 08:30 · No se publica nada automáticamente: en un repositorio privado GitHub Pages es público (salvo en Enterprise) y exige plan de pago. Publicar el fichero es un paso de quien lo use.
- 2026-10-03 08:30 · [replaced by 2026-10-03 14:58] En la instantánea se ocultan "Open folder", "Reload", "Export HTML" y "Rename" (y F2); la cabecera muestra "snapshot of <fecha y hora>" de la generación.
- 2026-10-03 08:30 · El texto de los md se incrusta con `<` escapado, para que ningún md pueda cerrar el bloque de datos ni inyectar código.
- 2026-10-03 08:43 · Validado por Ronald a las 08:42 en la instantánea: pasa a stable.
- 2026-10-03 14:58 · En la instantánea se ocultan "Open folder", "Reload", "Export HTML", "Rename" (y F2) y el botón de reglas globales ("Update rules"); la cabecera muestra "snapshot of <fecha y hora>" de la generación. Sus prompts apuntan a `global-rules` o repiten las reglas igual que la página, porque ese nodo va dentro como un md más.
- 2026-10-03 15:18 · La instantánea incluye también `.open-work.md` si la carpeta lo tiene (campo `openWork` del bloque de datos), y muestra el trabajo abierto tal como estaba al generarla.
- 2026-10-06 11:35 · La instantánea incluye las imágenes de la portada (`docs/overview/`) como data URL (campo `images` del bloque de datos), con "Export HTML" y con `build-html.mjs`; solo las muestra. El fichero crece con cada imagen.

## Requirements
- 2026-10-03 08:00 · draft: Añadir un comando que genere un HTML autónomo con los md dentro, para publicarlo en GitHub Pages o abrirlo en navegadores que no pueden leer una carpeta local.
- 2026-10-03 14:58 · Derived from context-pack/reglas-del-proyecto: ocultar "Update rules" en la instantánea.
- 2026-10-03 15:18 · Derived from viewer/map/nodos-ocupados: incluir el trabajo abierto en la instantánea.
- 2026-10-06 11:35 · Derived from viewer/overview: Export HTML y `build-html.mjs` incrustan las imágenes de `docs/overview/`.
