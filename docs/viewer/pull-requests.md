---
title: Pull requests
depends_on: [model, viewer/threads, viewer/map/nodos-ocupados, build/github]
threads:
  - 2026-11-16 18:10 · Pestaña de pull requests | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLGDerh4qSYa9WRrqssseAmG
---
## Summary
Pestaña "Pull requests" del selector de vista: todas las pull requests del repositorio, abiertas, fusionadas y cerradas, de la más nueva a la más antigua, con su estado, fechas, hilo y nodos.
Se leen de GitHub, así que solo un proyecto abierto con "Open from GitHub" las muestra todas; desde una carpeta o el HTML autónomo salen solo las abiertas del trabajo abierto.
Doble clic abre la PR en GitHub.

## Decisions
- 2026-11-16 18:10 · Vista aparte, tras Threads, leída en directo de la API de GitHub al cargar el proyecto (`pulls?state=all`, 100 por consulta, como mucho 10 consultas), sin tocar la Action "Open work" ni el formato de los docs. Se descartó que la Action escribiera un histórico `.pull-requests.md` (funcionaría sin GitHub, pero añade un commit del bot en cada PR en todos los proyectos y un fichero que crece sin fin). Elegido por Ronald (opción A, 17:57).
- 2026-11-16 18:10 · Columnas: PR (número enlazado a GitHub y título), estado (Open, Draft, Merged o Closed, con color), fecha de apertura, fecha de fusión o cierre (en la hora del navegador), hilo y nodos. Selector "All / Open / Merged / Closed" con su número, que se recuerda tras F5. Respeta el zoom (Z): solo las PR con algún nodo de esa rama.
- 2026-11-16 18:10 · El hilo de una PR es el primer enlace a un hilo de un proyecto de Claude de su descripción (los hilos lo ponen ahí). Sus nodos son los que tienen ese hilo en `threads` (se comparan por el identificador `thread=` del enlace) y, si es trabajo abierto, los md que cambia su rama. Una PR sin enlace de hilo sale con "none".
- 2026-11-16 18:10 · Si GitHub no responde o niega la consulta, la vista lo dice con el motivo y el resto del proyecto se carga igual. Sin GitHub, una nota explica que las fusionadas y cerradas solo se leen desde GitHub y cómo abrir el proyecto así.

## Requirements
- 2026-11-16 17:55 · Y una pestaña con todas las PR (abiertas y cerradas) ? (no sé si son accesibles) Desde threads se muestran muy pocas veces
- 2026-11-16 17:57 · A [pestaña leída de GitHub, sin histórico en la Action]
