---
title: Ideas (prefijo idea:)
depends_on: [creative-lab, context-pack/routing, format, model, viewer, viewer/map, viewer/tree, viewer/node-card, viewer/drafts]
status: draft
threads:
  - Creative lab | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLHYC3xQXTEZXFC2gNUuj8d3
  - Ideas (prefijo idea:) | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLGB7CEw3kxtbzHQJR5VnDcM
---
## Summary
Una frase que empieza por "idea:" guarda una idea como nodo hijo de `creative-lab` (el lab, en la raíz) con `status: idea`, en vez de encaminarla a su nodo funcional; no se programa nada para ella.
Una idea sigue siendo idea hasta que el propietario la pasa a draft o la ejecuta: entonces el hilo la encamina, le cambia el estado y mueve su fichero a su sitio funcional.
El doble clic en el lab deja "Task" en "idea: "; en una idea, con su línea `idea:` para seguir debatiéndola. "New sub-task" en el lab o en una idea crea una idea nueva.
En el visor la idea lleva una etiqueta IDEA ámbar y no sale en la vista Drafts.

## Decisions
- 2026-10-03 13:50 · [replaced by 2026-10-03 14:45] Pendiente. Guardado como draft desde el hilo "Creative lab": toca AGENTS.md, los prompts de `context-pack` en `index.html`, el formato y el modelo, que cambia PR #10 (Decisiones sustituidas), todavía abierto.
- 2026-10-03 13:50 · Estado nuevo `idea` (opción a de Ronald, 13:42) frente a reutilizar `draft`: pasar una idea a draft es cambiarle el estado.
- 2026-10-03 14:45 · Se hace: PR #10 (Decisiones sustituidas) ya está fusionado. Este nodo sigue en draft hasta que Ronald valide el cambio.
- 2026-10-03 14:45 · El lab es el nodo raíz `creative-lab` en cualquier proyecto; si no existe, el hilo lo crea al guardar la primera idea (Ronald, 14:35). Los prompts lo nombran por esa ruta fija.
- 2026-10-03 14:45 · Una frase del propietario que empieza por "idea:" guarda una idea, no una tarea: no se encamina ni se programa. El hilo propone la ruta `creative-lab/<idea>` y espera el OK; crea el nodo con `status: idea` y la línea "idea: <idea>" (frase autónoma, con fecha) en Requirements, y la debate allí.
- 2026-10-03 14:45 · Doble clic: en el nodo `creative-lab`, "Task" queda "idea: " para escribir una idea nueva; en un nodo `status: idea`, "Task" se rellena con sus líneas `idea:` (o todos sus requisitos si no tiene) y el prompt pide seguir debatiéndola en su nodo, sin encaminarla ni programar, y no copiarla otra vez a Requirements. Elegido por Ronald (opción B1, 14:36) frente a dejar siempre "idea: ", que crearía otra idea en vez de seguir con la seleccionada.
- 2026-10-03 14:45 · "New sub-task" sobre el lab, sobre una idea o sobre cualquier nodo dentro del lab crea una idea nueva: la plantilla lleva `status: idea`, se salta el encaminado y el desglose, y "Task" queda "idea: ".
- 2026-10-03 14:45 · Salida del lab: cuando el propietario dice que la pase a draft o la ejecute, el hilo la encamina a su nodo funcional (paso de encaminado), le pone `status: draft` (o trabaja en ella como tarea), mueve su fichero allí en su rama, actualiza todas las referencias a su ruta antigua y añade la decisión "Leaves the lab: <draft o ejecutada>". No usa el arrastre de la página. Aceptado por Ronald (14:35). Una idea descartada queda en el lab con una decisión que lo dice.
- 2026-10-03 14:45 · Visor: la tarjeta de una idea es normal (el gris es de los drafts) con la etiqueta IDEA en ámbar, y lo mismo en la vista Project y en la ficha. No sale en la vista Drafts y no hay pestaña Ideas: Z sobre el lab las muestra todas. Aceptado por Ronald (14:35).
- 2026-10-03 14:45 · Hecho en `index.html` (prompts y visor), en los nodos `context-pack`, `context-pack/routing`, `creative-lab`, `format`, `model`, `viewer/map`, `viewer/tree`, `viewer/node-card` y `viewer/drafts`, y en AGENTS.md.

## Requirements
- 2026-10-03 10:42 · Es correcto que lo haga si pasamos una idea a 'Draft' o la ejecutamos.
- 2026-10-03 10:42 · Si quieres, podemos utilizar algo parecido a un draft, si el prompt empieza por idea:, vendrá al laboratorio.
- 2026-10-03 10:42 · Los prompts que se generen en el laboratorio tendran el prefijo 'idea:' de forma predeterminada.
- 2026-10-03 13:42 · a), realmente una idea es un estado previo de draft [a: un estado nuevo `status: idea`]
- 2026-10-03 13:50 · draft: Prefijo `idea:` y estado `status: idea`. Una frase que empieza por "idea:" se guarda como nodo hijo de `creative-lab` con `status: idea` y no se encamina a su nodo funcional. Los prompts del doble clic y de "New sub-task" sobre el lab o sobre una idea rellenan Task con "idea: ". Una idea sale del lab (se mueve a su sitio funcional) solo al pasarla a draft o ejecutarla. Añadir `idea` a los estados del formato y del modelo, mostrarlo en el visor sin mezclarlo con la vista Drafts, y recoger la regla en AGENTS.md.
- 2026-10-03 14:35 · 1. Ok, se crea en la raíz [el lab es el nodo raíz `creative-lab`; si no existe, se crea]
- 2026-10-03 14:35 · 3. Ok [salida del lab: el hilo la encamina, cambia el estado y mueve el fichero]
- 2026-10-03 14:35 · 4. Ok [tarjeta normal con etiqueta IDEA ámbar; sin pestaña Ideas]
- 2026-10-03 14:36 · B1 [doble clic en una idea: "Task" con su línea `idea:`, para seguir debatiéndola]
