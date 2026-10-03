---
title: Abrir la conversación del nodo
depends_on: [viewer/node-card, build]
status: draft
threads:
  - Abrir la conversación del nodo | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLTy4gbfpAdMNPEtfBCTTtAt
---
## Summary
Idea: con un nodo seleccionado, un botón abre su conversación en Claude para seguir el trabajo.
Se hace en la página HTML, sin aplicación local: el botón abre en una pestaña nueva el último enlace de `threads` del nodo, que ya se guarda y se muestra en la ficha.
Ni el HTML ni un exe pueden crear un hilo de claude.ai, mandarle el prompt o ver su estado; el seguimiento de trabajo abierto lo cubriría el draft `viewer/map/nodos-ocupados`.

## Decisions
- 2026-10-03 14:07 · Se mantiene la página HTML; se descarta un exe local para esta idea (Ronald, 14:07). Un exe daría acceso libre a carpetas, git y lanzar Claude Code en el PC, pero serían sesiones locales y no los hilos del proyecto, obligaría a instalar y rompería "no instalar nada" y "no depender del asistente".
- 2026-10-03 14:07 · El botón abre el último hilo de `threads` en una pestaña nueva; si el nodo no tiene hilos, el botón no hace nada útil y se indica. Con varios hilos, abrir el último o elegir queda por decidir al ejecutarla.
- 2026-10-03 14:07 · Abrirla en el navegador o en la app de Claude no cambia nada: es la misma conversación, y los hilos trabajan sobre el repositorio de GitHub, no sobre los md del disco local (solo Remote Control llega al PC).

## Requirements
- 2026-10-03 14:04 · me gustaría que pulsando un botón X con un nodo seleccionado, se activase la conversación de ese nodo en Claude para poder hacer seguimiento.
