---
title: Hoja de ruta
depends_on: [viewer/drafts, context-pack/routing, viewer/log, format, viewer/rename]
status: obsolete
replaced_by: viewer/drafts
threads:
  - Hoja de ruta: mejoras | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVFRxvSDxqMyLhLQWpW5ipJ
---
## Summary
Obsoleto. Era la lista de lo que venía después de la v1. Desde el 2026-10-03 cada pendiente es un nodo `draft` en su sitio funcional, y la vista `viewer/drafts` los reúne todos.

## Decisions
- 2026-10-02 09:00 · Nada de lo que hay aquí entra en la v1.
- 2026-10-03 07:50 · Los pendientes pasan a ser nodos `draft` en su sitio funcional, decidido por Ronald (07:34): avisos de desactualización y comprobación de formato en GitHub (`model`), HTML autónomo (`build`), rol de director y carpeta de docs fuera de la raíz (`context-pack`), decisiones sustituidas (`format`) y nodos ocupados (`viewer/map`).
- 2026-10-03 07:50 · El nodo queda obsoleto, sustituido por `viewer/drafts`; no se borra porque conserva sus decisiones.
- 2026-10-03 07:50 · De las propuestas de este hilo, Ronald elige hacer ya la vista Log (`viewer/log`), el encaminado al nodo responsable (`context-pack/routing`) y la vista Drafts (`viewer/drafts`); el resto queda como drafts.

## Requirements
- 2026-10-03 07:23 · El 1 y el 2 son muy buenas propuestas. [1: las ideas de la hoja de ruta como nodos draft]
