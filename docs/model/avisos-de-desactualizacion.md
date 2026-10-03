---
title: Avisos de desactualización
depends_on: [viewer/map, viewer/tree, viewer/node-card, model/comprobacion-de-formato]
threads:
  - Avisos de desactualización | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLBXUhhwTDvikxtVJrgak7o7
---
## Summary
Avisa ("⏱ review") de los nodos que probablemente ya no reflejan la realidad: alguna de sus dependencias propias tiene una decisión vigente posterior a la última decisión del nodo.
Se calcula al abrir la página o con F5, a partir de las fechas de las decisiones; no usa git. Una decisión nueva en el nodo quita el aviso.
No es un aviso de formato: no suma al contador ⚠ ni bloquea PRs. Las dependencias rotas ya las avisa el modelo como avisos de formato.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 15:55 · Las dependencias rotas (nodo inexistente u obsoleto, `replaced_by` o decisión sustituida que apunta a algo que no existe) ya son avisos de formato del modelo, y el check "Docs format" las bloquea; este nodo solo cubre "desactualizado".
- 2026-10-03 15:55 · [replaced by 2026-10-03 15:58] Un nodo está desactualizado cuando alguna de sus dependencias declaradas tiene una decisión (vigente o sustituida) con fecha posterior a la última decisión del propio nodo. Las heredadas de los ancestros no cuentan, para que el operador encuentre el origen real. Se descartan la antigüedad del nodo y el historial git.
- 2026-10-03 15:55 · No se marcan los nodos `draft`, `idea`, obsoletos o sin documento, ni los que no tienen ninguna decisión fechada.
- 2026-10-03 15:55 · Se calcula en el modelo al abrir la página o con F5. El aviso se quita cuando el nodo recibe una decisión nueva (por ejemplo, "Revisado tras el cambio en X"); no hay campos nuevos en el formato.
- 2026-10-03 15:55 · Se muestra como "⏱ review" en el mapa y la vista Project, con las dependencias que han cambiado en el tooltip, y como bloque "⏱ Review" en la ficha. No suma al contador ⚠ y no bloquea PRs. El doble clic no cambia.
- 2026-10-03 15:58 · Un nodo está desactualizado cuando alguna de sus dependencias declaradas tiene una decisión vigente con fecha posterior a la última decisión del propio nodo; las decisiones sustituidas no cuentan, para no generar revisiones sin valor. Las dependencias heredadas de los ancestros no cuentan, para que el operador encuentre el origen real. Se descartan la antigüedad del nodo y el historial git.
- 2026-10-03 16:17 · Validado por Ronald: el nodo pasa a estable. Los nodos marcados hoy se irán revisando cuando se trabaje en ellos.

## Requirements
- 2026-10-02 08:52 · Avisos de documentos desactualizados o dependencias rotas, como ampliación posterior.
- 2026-10-03 07:57 · draft: Avisar de documentos desactualizados o con dependencias rotas.
- 2026-10-03 15:29 · Opción 1.
- 2026-10-03 15:29 · Ok con F5.
- 2026-10-03 15:29 · Ok a quitar el aviso cuando haya una nueva decisión
- 2026-10-03 15:29 · Sí, solo las dependencias del propio nodo ya que el operador se puede volver loco para encontrar el origen real.
- 2026-10-03 15:32 · Ok a no marcar draft/idea.
- 2026-10-03 15:32 · Lo del Doble click no hace falta, pero sí sería útil un ToolTip en el nodo, no ?
- 2026-10-03 15:56 · Ok, solo decisiones vigentes, si no estaríamos generando trabajo extra sin valor añadido real
