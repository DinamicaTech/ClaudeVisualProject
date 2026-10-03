---
title: Ideas (prefijo idea:)
depends_on: [creative-lab, context-pack/routing, format, model, viewer]
status: draft
threads:
  - Creative lab | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLHYC3xQXTEZXFC2gNUuj8d3
---
## Summary
Una frase que empieza por "idea:" guarda una idea en `creative-lab` en vez de encaminarla a su nodo funcional.
Las ideas llevan un estado propio, `status: idea`, previo a draft, para que no se mezclen con las tareas pendientes de la vista Drafts.
Los prompts que se generan desde el lab o desde una idea rellenan "Task" con "idea: " por defecto.

## Decisions
- 2026-10-03 13:50 · Pendiente. Guardado como draft desde el hilo "Creative lab": toca AGENTS.md, los prompts de `context-pack` en `index.html`, el formato y el modelo, que cambia PR #10 (Decisiones sustituidas), todavía abierto.
- 2026-10-03 13:50 · Estado nuevo `idea` (opción a de Ronald, 13:42) frente a reutilizar `draft`: pasar una idea a draft es cambiarle el estado.

## Requirements
- 2026-10-03 10:42 · Es correcto que lo haga si pasamos una idea a 'Draft' o la ejecutamos.
- 2026-10-03 10:42 · Si quieres, podemos utilizar algo parecido a un draft, si el prompt empieza por idea:, vendrá al laboratorio.
- 2026-10-03 10:42 · Los prompts que se generen en el laboratorio tendran el prefijo 'idea:' de forma predeterminada.
- 2026-10-03 13:42 · a), realmente una idea es un estado previo de draft [a: un estado nuevo `status: idea`]
- 2026-10-03 13:50 · draft: Prefijo `idea:` y estado `status: idea`. Una frase que empieza por "idea:" se guarda como nodo hijo de `creative-lab` con `status: idea` y no se encamina a su nodo funcional. Los prompts del doble clic y de "New sub-task" sobre el lab o sobre una idea rellenan Task con "idea: ". Una idea sale del lab (se mueve a su sitio funcional) solo al pasarla a draft o ejecutarla. Añadir `idea` a los estados del formato y del modelo, mostrarlo en el visor sin mezclarlo con la vista Drafts, y recoger la regla en AGENTS.md.
