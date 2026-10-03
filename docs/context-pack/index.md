---
title: Índice de nodos
depends_on: [model, format]
threads:
  - Zoom y selector Tree/Project | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL2rS1irvBBBCJZVEffNsN8p
---
## Summary
Un fichero generado, `.index.md` en la carpeta de docs, con todos los nodos en orden de árbol: ruta, título, estado, dependencias, hijos y Summary completo.
Sirve para que un hilo encuentre de una sola lectura qué nodo debe hacer cada parte de una tarea, en lugar de abrir todos los md.
Lo genera `node tools/build-index.mjs docs`, y también la página al renombrar o mover un nodo. Una comprobación en GitHub marca en rojo los PR en que el índice no coincide con los md.

## Decisions
- 2026-10-02 19:15 · Búsqueda de responsable para cada parte del desglose: primero el índice; si ninguna parte encaja, se pregunta al propietario si se hace desde el nodo actual o en un nodo nuevo, y se propone su posición. Decidido por Ronald (19:02–19:03). Se descartó la cascada índice → bajar por el árbol → recorrido completo: con el Summary completo en el índice, los dos últimos pasos leen lo mismo.
- 2026-10-02 19:15 · La búsqueda se hace por cada parte del desglose, no por petición entera: las partes sin responsable son las que se preguntan.
- 2026-10-02 19:15 · Un nodo nuevo se coloca bajo el nodo más cercano cuyo Summary abarque esa función, o en el primer nivel si ninguno lo abarca. El propietario lo confirma o lo mueve en el desglose.
- 2026-10-02 19:15 · El fichero se llama `.index.md` y está en la raíz de la carpeta de docs. Empieza por punto para que la página y el propio script no lo lean como un nodo.
- 2026-10-02 19:15 · Contenido: un bloque `## <ruta> · <título>` por nodo, en orden de árbol (hijos por nombre), con el fichero, el estado si no es `stable`, las dependencias declaradas, los hijos y el Summary completo. Las carpetas sin `README.md` también aparecen. Unas 50 líneas para este proyecto.
- 2026-10-02 19:15 · El script `tools/build-index.mjs` (Node, sin paquetes) ejecuta la parte de lectura y modelo de `index.html`, así que el índice sigue exactamente las mismas reglas que la página. Esa parte de `index.html` no puede usar el DOM.
- 2026-10-02 19:15 · `--check` falla si el índice falta o no coincide con los md; lo ejecuta el workflow de GitHub `Node index` en cada PR y en cada push a `main`.
- 2026-10-02 19:15 · Los prompts piden regenerar el índice tras cambiar cualquier nodo, con el comando que indican sus primeras líneas. Para otros usuarios de CVP el índice es opcional: si no existe, el prompt pide leer el Summary de todos los md.
- 2026-10-03 08:47 · La página regenera `.index.md` tras renombrar o mover un nodo, con la misma función que usa el script, si la carpeta ya lo tiene; no lo crea en proyectos que no lo usan. Así quien no tiene Node no deja el índice desactualizado.
- 2026-10-03 14:40 · La carga del código de lectura y modelo de `index.html` en Node está en `tools/page-model.mjs`, compartida con la comprobación de formato (`model/comprobacion-de-formato`).

## Requirements
- 2026-10-02 18:55 · Respecto leer el Summary, no existe algún tipo de búsqueda indexada o caché de búsqueda ?
- 2026-10-02 19:02 · 2. (asumamos que este fichero tiene un mecanismo de actualización sólido)
- 2026-10-02 19:02 · 3. Hacemos una especie de búsqueda drill-down suponiendo que el summary de un nodo del árbol nos permite saber si vamos por buen camino
- 2026-10-02 19:02 · 4. Búsqueda 'en bruto' por todos los nodos
- 2026-10-02 19:02 · Prompt al operador: 'Este requerimiento implica un desarrollo funcional XXX del cual no existe actualmente un nodo responsable. Podemos ejecutar este desarrollo desde el nodo actual o crear un nuevo nodo que, a partir de ahora, centralizará este tipo de desarrollos.
- 2026-10-03 08:47 · Derived from viewer/mover-nodo: la página regenera .index.md al mover o renombrar.
- 2026-10-03 14:40 · Derived from model/comprobacion-de-formato: el script del índice comparte con la comprobación de formato la carga del modelo de index.html.
