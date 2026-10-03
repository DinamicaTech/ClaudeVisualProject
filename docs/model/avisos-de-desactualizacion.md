---
title: Avisos de desactualización
depends_on: [model/comprobacion-de-formato]
threads:
  - Avisos de desactualización | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLBXUhhwTDvikxtVJrgak7o7
---
## Summary
Qué hacer con los documentos que ya no reflejan la realidad o tienen dependencias rotas.
Las dependencias rotas son avisos de formato del modelo y bloquean los PRs. La página no avisa de nodos desactualizados: se probó un aviso por fechas ("⏱ review") y se retiró por ruido; los nodos afectados por un cambio los señala el desglose del hilo que lo hace.

## Decisions
- 2026-10-03 07:50 · Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 15:55 · Las dependencias rotas (nodo inexistente u obsoleto, `replaced_by` o decisión sustituida que apunta a algo que no existe) ya son avisos de formato del modelo, y el check "Docs format" las bloquea; este nodo solo cubre "desactualizado".
- 2026-10-03 15:55 · [replaced by 2026-10-03 15:58] Un nodo está desactualizado cuando alguna de sus dependencias declaradas tiene una decisión (vigente o sustituida) con fecha posterior a la última decisión del propio nodo. Las heredadas de los ancestros no cuentan, para que el operador encuentre el origen real. Se descartan la antigüedad del nodo y el historial git.
- 2026-10-03 15:55 · [replaced by 2026-10-03 17:31] No se marcan los nodos `draft`, `idea`, obsoletos o sin documento, ni los que no tienen ninguna decisión fechada.
- 2026-10-03 15:55 · [replaced by 2026-10-03 17:31] Se calcula en el modelo al abrir la página o con F5. El aviso se quita cuando el nodo recibe una decisión nueva (por ejemplo, "Revisado tras el cambio en X"); no hay campos nuevos en el formato.
- 2026-10-03 15:55 · [replaced by 2026-10-03 17:31] Se muestra como "⏱ review" en el mapa y la vista Project, con las dependencias que han cambiado en el tooltip, y como bloque "⏱ Review" en la ficha. No suma al contador ⚠ y no bloquea PRs. El doble clic no cambia.
- 2026-10-03 15:58 · [replaced by 2026-10-03 17:31] Un nodo está desactualizado cuando alguna de sus dependencias declaradas tiene una decisión vigente con fecha posterior a la última decisión del propio nodo; las decisiones sustituidas no cuentan, para no generar revisiones sin valor. Las dependencias heredadas de los ancestros no cuentan, para que el operador encuentre el origen real. Se descartan la antigüedad del nodo y el historial git.
- 2026-10-03 16:17 · [replaced by 2026-10-03 17:31] Validado por Ronald: el nodo pasa a estable. Los nodos marcados hoy se irán revisando cuando se trabaje en ellos.
- 2026-10-03 17:31 · Retirado el aviso "⏱ review": comparar fechas no sabe si un cambio importa, así que marcaba sobre todo nodos sin motivo real, y quitarlo obligaba a escribir decisiones de relleno. Quien sabe si un cambio afecta a otro nodo es el hilo que lo hace, y el desglose ya le obliga a listar los nodos afectados con su "Derived from…". La página no avisa de nodos desactualizados; las dependencias rotas siguen siendo avisos de formato. Elegido por Ronald (17:30) frente a un botón "Revisado" o dejarlo como estaba.

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
- 2026-10-03 17:30 · Quitarlo (tarjeta: "¿Qué hacemos con el aviso '⏱ review' de los nodos?")
