---
title: Renombrar
depends_on: [format]
threads:
  - Hoja de ruta: mejoras | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVFRxvSDxqMyLhLQWpW5ipJ
  - Renombrar nodos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVHTEP7mxqJMb51UEnjneoo
---
## Summary
Cambia el nombre de un nodo desde la ficha (botón "Rename" o F2): su título y, si se marca la casilla, el nombre de su fichero o carpeta.
Al cambiar el nombre cambia la ruta del nodo y la de todos sus descendientes, así que se reescriben todas las referencias a ellas dentro de docs.
Con Mover (`viewer/mover-nodo`) son las dos acciones de la página que escriben en la carpeta; los cambios quedan en el clon local para hacer commit y el índice de nodos se regenera solo. No está en la instantánea de `build/html-autonomo`.

## Decisions
- 2026-10-02 10:52 · Se renombra desde la página, con permiso de escritura que el navegador pide la primera vez. Opción recomendada a Ronald, pendiente de su confirmación.
- 2026-10-02 10:52 · Un diálogo con el título y una casilla "también el fichero o carpeta", desmarcada por defecto. Al marcarla, el nombre propuesto es el título en minúsculas con guiones, editable.
- 2026-10-02 10:52 · Al cambiar la ruta se actualizan `depends_on`, `replaced_by` y los enlaces relativos entre md de todos los ficheros de docs; los enlaces dentro de bloques de código no se tocan.
- 2026-10-02 10:52 · Una carpeta se mueve entera, con los ficheros que no son md. Primero se copia y al final se borra lo viejo, para que un error a mitad no pierda nada.
- 2026-10-02 10:52 · El diálogo muestra antes de confirmar qué ficheros se mueven y cuáles se editan, y no deja usar un nombre que ya existe, `README` ni un cambio solo de mayúsculas.
- 2026-10-02 10:52 · No se actualizan rutas escritas fuera de docs (AGENTS.md, memoria de los asistentes, hilos ya abiertos). La raíz no cambia de ruta, solo de título; una carpeta sin README.md solo cambia de nombre.
- 2026-10-03 07:50 · Validado por Ronald el 2026-10-02 21:15 y fusionado: pasa a stable. Confirma la opción de las 10:52 (renombrar desde la página).
- 2026-10-03 08:30 · En la instantánea (`build/html-autonomo`) no hay botón "Rename" y F2 no hace nada: no hay carpeta donde escribir.
- 2026-10-03 08:47 · La reescritura de referencias pasa a ser común con Mover (`viewer/mover-nodo`). Un fichero que cambia de carpeta recalcula también sus enlaces relativos a ficheros que no se mueven.
- 2026-10-03 08:47 · Tras renombrar, la página regenera `.index.md` si la carpeta lo tiene, para que la comprobación de GitHub no falle.
- 2026-10-03 15:18 · Igual que Mover: si trabajo abierto (`viewer/map/nodos-ocupados`) cambia alguno de los md que el cambio escribiría, el diálogo lo lista y no deja renombrar hasta que se fusione o cierre; se ve al abrir el diálogo si el md del propio nodo está ocupado.

## Requirements
- 2026-10-03 08:47 · Derived from viewer/mover-nodo: compartir con Mover la reescritura de referencias y el movimiento de ficheros, ahora también entre carpetas distintas.
- 2026-10-03 08:30 · Derived from build/html-autonomo: en modo instantánea Renombrar se desactiva, porque no hay carpeta donde escribir.
- 2026-10-03 15:18 · Derived from viewer/map/nodos-ocupados: bloquear el renombrado cuando hay trabajo abierto en los ficheros que cambia, como en Mover.
