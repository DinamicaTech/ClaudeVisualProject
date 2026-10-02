---
title: Renombrar
depends_on: [format]
status: draft
threads:
  - Renombrar nodos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVHTEP7mxqJMb51UEnjneoo
---
## Summary
Cambia el nombre de un nodo desde la ficha (botón "Rename" o F2): su título y, si se marca la casilla, el nombre de su fichero o carpeta.
Al cambiar el nombre cambia la ruta del nodo y la de todos sus descendientes, así que se reescriben todas las referencias a ellas dentro de docs.
Es la única acción de la página que escribe en la carpeta; los cambios quedan en el clon local para hacer commit.

## Decisions
- 2026-10-02 10:52 · Se renombra desde la página, con permiso de escritura que el navegador pide la primera vez. Opción recomendada a Ronald, pendiente de su confirmación.
- 2026-10-02 10:52 · Un diálogo con el título y una casilla "también el fichero o carpeta", desmarcada por defecto. Al marcarla, el nombre propuesto es el título en minúsculas con guiones, editable.
- 2026-10-02 10:52 · Al cambiar la ruta se actualizan `depends_on`, `replaced_by` y los enlaces relativos entre md de todos los ficheros de docs; los enlaces dentro de bloques de código no se tocan.
- 2026-10-02 10:52 · Una carpeta se mueve entera, con los ficheros que no son md. Primero se copia y al final se borra lo viejo, para que un error a mitad no pierda nada.
- 2026-10-02 10:52 · El diálogo muestra antes de confirmar qué ficheros se mueven y cuáles se editan, y no deja usar un nombre que ya existe, `README` ni un cambio solo de mayúsculas.
- 2026-10-02 10:52 · No se actualizan rutas escritas fuera de docs (AGENTS.md, memoria de los asistentes, hilos ya abiertos). La raíz no cambia de ruta, solo de título; una carpeta sin README.md solo cambia de nombre.
