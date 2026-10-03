---
title: Drafts
depends_on: [model]
threads:
  - Hoja de ruta: mejoras | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVFRxvSDxqMyLhLQWpW5ipJ
---
## Summary
Pestaña "Drafts" del selector de vista: una tabla con todos los nodos `draft` del proyecto (tareas pendientes guardadas en su sitio funcional y trabajo aún sin validar), ordenable por columnas.
Clic selecciona el nodo y muestra su ficha; doble clic copia su paquete de contexto para arrancarlo.

## Decisions
- 2026-10-03 07:50 · Columnas: título, ruta, área (nodo de primer nivel, con su color), "Since" (fecha de su requisito o decisión más antiguo), última fecha, número de requisitos y número de hilos (0 = sin empezar). Clic en la cabecera ordena; otro clic invierte. Por defecto, los más recientes primero.
- 2026-10-03 07:50 · Solo los nodos con `status: draft` propio, no los hijos de un draft. Respeta el zoom (Z): con zoom, solo los drafts de esa rama.
- 2026-10-03 07:50 · La columna de orden y el sentido se recuerdan tras F5.
- 2026-10-03 07:50 · Sustituye a la hoja de ruta (`roadmap`) como lista de pendientes: los pendientes viven como drafts en su nodo y esta vista los reúne.
- 2026-10-03 14:45 · Los nodos `idea` no salen en esta vista: son ideas en debate en `creative-lab`, no tareas pendientes (ver `context-pack/ideas`).

## Requirements
- 2026-10-03 07:34 · Eso no quita que sea útil ver todos los drafts juntos, eso lo podríamos resolver con una nueva pestaña con una vista de drafts ordenable por columnas
- 2026-10-03 14:45 · Derived from context-pack/ideas: no mezclar las ideas con los drafts.
