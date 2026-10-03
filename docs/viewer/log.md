---
title: Log
depends_on: [model]
threads:
  - Hoja de ruta: mejoras | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVFRxvSDxqMyLhLQWpW5ipJ
---
## Summary
Pestaña "Log" del selector de vista: todas las decisiones y todos los requisitos del proyecto, del más nuevo al más antiguo, agrupados por día, con el nodo de cada uno.
Responde a "¿qué ha cambiado?" sin abrir nodos, y muestra qué pasó con un draft absorbido por otro nodo (la decisión "Takes over the draft …").

## Decisions
- 2026-10-03 07:50 · Une la propuesta 2 (Activity) y la pestaña "log" pedida por Ronald: la página solo lee los md actuales, no el historial de git, así que el rastro de un draft borrado es la decisión que deja el nodo que lo recoge.
- 2026-10-03 07:50 · Cada entrada: hora, tipo (Decision o Requirement), título y ruta del nodo en el color de su área, y el texto con sus enlaces. Un filtro All / Decisions / Requirements, que se recuerda tras F5.
- 2026-10-03 07:50 · Las líneas sin fecha van al final, bajo "No date". Respeta el zoom (Z).
- 2026-10-03 07:50 · Clic selecciona el nodo y muestra su ficha; doble clic copia su paquete de contexto.
- 2026-10-03 08:30 · Las decisiones sustituidas salen atenuadas, con su marca "[replaced by …]" delante del texto. Siguen en el Log porque son historia.

## Requirements
- 2026-10-03 07:23 · El 1 y el 2 son muy buenas propuestas. [2: una vista con todas las decisiones y requisitos del proyecto por fecha]
- 2026-10-03 07:50 · Derived from context-pack/routing: poder consultar qué pasó con un draft que ha pasado a tarea en otro nodo.
- 2026-10-03 08:30 · Derived from format/decisiones-sustituidas: atenuar las decisiones sustituidas.
