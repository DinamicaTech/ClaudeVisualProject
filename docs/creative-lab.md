---
title: Creative lab
depends_on: []
status: draft
threads:
  - Creative lab | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLHYC3xQXTEZXFC2gNUuj8d3
---
## Summary
Sala de ideas ("brainstorming room") del proyecto: aquí se debaten ideas de mejoras y nuevos desarrollos antes de decidir si se hacen.
Cada idea es un nodo hijo del lab; una idea es el paso previo a un draft. Mientras se debate no se encamina a su nodo funcional.
Sale del lab cuando se decide: pasa a draft o se ejecuta, y entonces se mueve a su sitio funcional. Una idea descartada queda en el lab con una decisión que lo dice.

## Decisions
- 2026-10-03 13:50 · Nodo hijo de la raíz. Nombre "Creative lab" (`creative-lab`), corregido por Ronald desde "Creatibe lab".
- 2026-10-03 13:50 · Cada idea se debate en su propio hilo como nodo hijo del lab (`creative-lab/<idea>`). Al pasarla a draft o ejecutarla se mueve ("Mover nodo") a su sitio funcional; si se descarta, queda aquí con una decisión que lo dice.
- 2026-10-03 13:50 · Una idea llevará `status: idea`, estado previo a draft (opción a de Ronald, 13:42). El prefijo `idea:` y ese estado quedan pendientes en el draft `context-pack/ideas`, porque tocan los prompts, el formato y el visor que cambia PR #10 (Decisiones sustituidas), aún abierto. Hasta entonces las ideas se crean como `draft` dentro del lab.

## Requirements
- 2026-10-03 10:37 · Esta rama aglutinará diferentes prompts destinados a debatir ideas de mejoras y nuevos desarrollos relacionados con este proyecto, una especie de 'brain storming room'.
- 2026-10-03 10:37 · Simplemente crea la tarea e iré insertando diferentes prompts.
