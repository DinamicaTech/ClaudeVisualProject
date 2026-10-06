---
title: Trabajo sobre GitHub
depends_on: [build/selector-de-proyectos, context-pack/index, context-pack/reglas-del-proyecto, global-rules, nuevo-proyecto]
threads:
  - Trabajo sobre GitHub | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLBCY4WmWTpiPR6EVwnf5FnB
---
## Summary
La página abre un proyecto directamente desde su repositorio de GitHub ("Open from GitHub": owner/repo y carpeta de docs), sin clon local ni `git pull`: lee la rama principal en cada F5 o "Reload", y también el trabajo abierto.
Sin token, solo lectura y solo repositorios públicos; Renombrar y Mover copian un prompt para que un hilo haga el cambio. Con token (guardado solo en ese navegador), también repositorios privados, y Renombrar, Mover, las reglas y el índice se escriben con un commit directo a la rama principal.
Una Action ("CVP docs") mantiene en cada repositorio el índice de nodos y las reglas de CVP al día. Abrir una carpeta local sigue funcionando, para trabajar sin conexión.

## Decisions
- 2026-10-04 15:05 · La página sigue siendo un único `index.html`; un proyecto puede ser una carpeta local (como hasta ahora) o la carpeta de docs de un repositorio de GitHub. Las dos formas conviven en el selector de proyectos. Acordado con Ronald (14:56–15:05): GitHub es donde los hilos dejan su trabajo, y así la página está al día sin `git pull`.
- 2026-10-04 15:05 · Lectura por la API de GitHub de la rama por defecto: dos consultas por carga (rama y árbol de ficheros). Sin token, los md se descargan de raw.githubusercontent.com, que no cuenta en el límite de unas 60 consultas por hora sin token; con token, por la API (límite de 5.000). Cada versión de un fichero se descarga una sola vez por sesión.
- 2026-10-04 15:05 · Sin token: solo repositorios públicos y solo lectura. Renombrar y Mover no escriben: su botón pasa a "Copy prompt" y copia un prompt con la tarea y la lista de ficheros para que un hilo haga el cambio con su PR. Un PR no se puede abrir desde la página sin token, porque GitHub pide permiso de escritura para crear la rama.
- 2026-10-04 15:05 · Con token: también repositorios privados, y la página escribe con un solo commit directo a la rama principal por acción (Renombrar, Mover, "Update rules", "Add node index" / "Rebuild index"), con el índice de nodos regenerado en el mismo commit si la carpeta lo tiene. Antes de escribir vuelve a leer GitHub y planifica sobre lo que hay; si la rama cambia mientras tanto, no escribe y pide recargar. El bloqueo de nodos ocupados sigue igual.
- 2026-10-04 15:05 · El token se introduce con el botón de la cabecera ("Read-only" sin token, "GitHub" con él), se guarda solo en el navegador (localStorage) y solo se envía a api.github.com; "Forget token" lo borra. Se recomienda un token fine-grained limitado a los repositorios de proyectos, con el permiso "Contents: read and write". Riesgo bajo aceptado por Ronald (14:59): no se guarda en ningún repositorio.
- 2026-10-04 15:05 · "Open from GitHub" acepta owner/repo o el enlace del repositorio; la carpeta de docs es `docs` si no se indica otra, y ha de tener `README.md`.
- 2026-10-04 15:05 · La Action "CVP docs" regenera `.index.md` y pone al día el bloque "CVP rules" de `global-rules.md` en la rama principal: en CVP, en cada push con sus propias herramientas (`.github/workflows/cvp-docs.yml`); en los proyectos, en cada push, una vez al día y a demanda, descargando las herramientas del repositorio público de CVP (`tools/project/cvp-docs.yml`). Nunca baja unas reglas más nuevas que las de CVP (`update-rules.mjs --auto`). Ronald eligió la actualización automática de reglas (15:03).
- 2026-10-06 11:35 · Imágenes de la portada (`viewer/overview`): con token se descargan por la API (también en repositorios privados) y se suben como blobs binarios en el mismo commit directo que su línea en el md de la raíz; sin token se ven desde raw.githubusercontent.com (solo repositorios públicos) y no se pueden cambiar. La descripción del repositorio, subtítulo de la portada, se lee una vez por sesión del navegador.

## Requirements
- 2026-10-04 14:20 · Y no sería mejor que trabajase sobre GitHub (entiendo que es donde están los documentos más actualizados) ?
- 2026-10-04 14:56 · La opción de solo lectura (si no hay token) ya aporta bastantes ventajas de serie. Si luego queremos modificar algo desde CVP, tenemos la opción de facilitar un token (que sería lo más fácil para el operador) o, si no se facilita token, abrirlo como PR.
- 2026-10-04 15:03 · Ok, entonces automático.
- 2026-10-04 15:03 · Pues aplica el cambio para trabajar sobre GitHub. Si no hay token, tendrá funcionalidad limitada (solo repositorios públicos, etc.), con token ya será full.
- 2026-10-06 11:35 · Derived from viewer/overview: leer imágenes (con token, por la API, que sirve para repos privados) y la descripción del repositorio, y subir ficheros binarios en el commit.
