---
title: Decisiones sustituidas
depends_on: [model, viewer/node-card, viewer/log, viewer/map, context-pack]
status: draft
threads:
  - Decisiones sustituidas | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLFiGwT9SfPXMH3YqsZ9BZHA
---
## Summary
Una decisión que otra posterior anula se marca en su propia línea con `[replaced by <fecha hora>]` justo después de su fecha, y la ruta del nodo delante de la fecha si la nueva está en otro nodo.
La ficha y el Log la atenúan y enlazan a la vigente, el contador ◆ del mapa no la cuenta y los prompts piden a los hilos ignorarla.
No hay sustituciones parciales: la decisión nueva repite la regla completa y la antigua se marca entera.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 08:30 · La marca va en la decisión antigua, no en la nueva: `- 2026-10-02 11:40 · [replaced by 2026-10-02 18:10] texto antiguo`. La hora sola no identifica una decisión (un nodo puede tener varias con la misma hora), y un hilo que lee el md en crudo ve la marca en la misma línea que debe saltarse.
- 2026-10-03 08:30 · Si la decisión nueva está en otro nodo, la marca lleva su ruta delante de la fecha: `[replaced by viewer/log 2026-10-03 07:50]`. Sin ruta, la decisión nueva está en el mismo nodo.
- 2026-10-03 08:30 · Sin sustituciones parciales (Ronald, 08:28): si una decisión nueva cambia solo una parte de otra, la nueva repite la regla completa vigente y la antigua se marca entera. Así un hilo nunca tiene que juntar dos líneas para saber qué está vigente.
- 2026-10-03 08:30 · La escribe el hilo que toma la decisión nueva, en el mismo cambio. La decisión sustituida no se borra: es historia y sigue en el Log.
- 2026-10-03 08:30 · `[replaced by …]` es sintaxis de la herramienta y va en inglés, como los nombres de campos y bloques.
- 2026-10-03 08:30 · Se marcan con ella las sustituciones que ya estaban escritas en texto libre: en `viewer/map` (cajas de referencia, interruptor References y nombres del selector) y en `context-pack` (requisitos derivados, que era parcial y se reescribe completa).
- 2026-10-03 08:30 · Límite conocido: Renombrar (`viewer/rename`) aún no reescribe la ruta de nodo dentro de una marca; si cambia, la marca queda rota y la ficha lo avisa.

## Requirements
- 2026-10-03 08:00 · draft: Definir cómo se marca que una decisión anula a otra anterior, para que la ficha atenúe la antigua y los hilos no la sigan.
