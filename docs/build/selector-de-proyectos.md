---
title: Selector de proyectos
depends_on: []
threads:
  - Preparación para producción | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLCDrf3ayxxoXH4hvnpdYFPb
---
## Summary
Un desplegable en la cabecera lista los proyectos abiertos en ese navegador, cada uno con el título de su nodo raíz; elegir uno lo abre con un clic.
Un proyecto es su carpeta de docs, local o en un repositorio de GitHub (marcado "· GitHub"): la página la reconoce aunque varias se llamen `docs`, sin ningún campo en los md. Cada proyecto guarda su propia vista y F5 reabre el último.

## Decisions
- 2026-10-03 08:16 · Pendiente. Guardado como draft al final del hilo de la hoja de ruta, decidido por Ronald.
- 2026-10-03 08:16 · La lista de proyectos la guarda la página (las carpetas que se han abierto), no un md: el navegador solo deja leer carpetas elegidas por la persona, y un md con rutas del equipo no daría acceso ni tendría un repositorio natural donde vivir.
- 2026-10-03 17:55 · Un proyecto se identifica por su carpeta de docs, no por un identificador en el nodo raíz (Ronald, 17:50): la página guarda el permiso de cada carpeta y reconoce una ya abierta aunque se llame igual que otra. No se toca ningún md, tampoco en los proyectos ya creados; coherente con `nuevo-proyecto`, sin identificador de proyecto.
- 2026-10-03 17:55 · En la cabecera, un desplegable con el título del nodo raíz de cada proyecto. Al final, "Open folder…" añade otro (si la carpeta ya estaba, abre esa) y "Remove … from the list" quita el abierto de la lista sin tocar su carpeta. Con la lista no vacía, el botón "Open folder" de la cabecera se oculta.
- 2026-10-03 17:55 · La vista (selección, ramas, vista activa, filtros) se guarda por proyecto. F5 reabre el último proyecto; si el navegador ya no tiene permiso, la pantalla de inicio ofrece un botón por proyecto, el último primero.
- 2026-10-03 17:55 · La última carpeta y la vista que guardaba la página antes del selector pasan a ser el primer proyecto de la lista, con su vista.
- 2026-10-03 17:55 · En la instantánea (`build/html-autonomo`) no hay selector.
- 2026-10-03 17:55 · Validado el planteamiento por Ronald (17:50); pasa a stable.
- 2026-10-04 15:05 · Un proyecto de GitHub se identifica por owner, repositorio y carpeta de docs; en la lista lleva "· GitHub" detrás del título. El desplegable añade "Open from GitHub…" junto a "Open folder…". F5 lo reabre sin pedir permiso al navegador.

## Requirements
- 2026-10-03 08:13 · Podemos tener un md con los diferentes proyectos y carpetas relacionadas ?
- 2026-10-03 08:13 · Eso permitiría un selector de proyectos 'con un solo click' y supongo que eliminaría el choque entre proyectos al tener los datos de cada proyecto normalizados.
- 2026-10-03 08:16 · draft: Recordar en la página los proyectos abiertos (su carpeta de docs) y ofrecer en la cabecera un selector para cambiar de proyecto con un clic. Guardar el estado de la vista por proyecto, con un identificador en el nodo raíz, para que dos proyectos no se pisen.
- 2026-10-03 17:41 · quizá es buen momento para activar el selector de proyectos.
- 2026-10-03 17:50 · 1. Por carpeta, que será un nombre único.
- 2026-10-03 17:50 · Ok con las propuestas sobre el selector de proyectos
- 2026-10-04 15:05 · Derived from build/github: los proyectos de GitHub entran en la lista, identificados por repositorio y carpeta de docs.
