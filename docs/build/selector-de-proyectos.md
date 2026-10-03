---
title: Selector de proyectos
depends_on: []
status: draft
---
## Summary
Cambiar de proyecto con un clic desde la cabecera de la página, sin volver a elegir la carpeta de docs cada vez.
Hoy la página solo recuerda la última carpeta y guarda el estado de la vista por nombre de carpeta (casi siempre `docs`), así que dos proyectos se pisan.

## Decisions
- 2026-10-03 08:16 · Pendiente. Guardado como draft al final del hilo de la hoja de ruta, decidido por Ronald.
- 2026-10-03 08:16 · La lista de proyectos la guarda la página (las carpetas que se han abierto), no un md: el navegador solo deja leer carpetas elegidas por la persona, y un md con rutas del equipo no daría acceso ni tendría un repositorio natural donde vivir.

## Requirements
- 2026-10-03 08:13 · Podemos tener un md con los diferentes proyectos y carpetas relacionadas ?
- 2026-10-03 08:13 · Eso permitiría un selector de proyectos 'con un solo click' y supongo que eliminaría el choque entre proyectos al tener los datos de cada proyecto normalizados.
- 2026-10-03 08:16 · draft: Recordar en la página los proyectos abiertos (su carpeta de docs) y ofrecer en la cabecera un selector para cambiar de proyecto con un clic. Guardar el estado de la vista por proyecto, con un identificador en el nodo raíz, para que dos proyectos no se pisen.
