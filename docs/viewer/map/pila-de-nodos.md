---
title: Pila de nodos inactivos
status: draft
depends_on: [viewer/map/nodos-ocupados]
threads:
  - Drafts como nodo propio | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLBfZRv8FjyEtAvZrpagxERU
---
## Summary
Pendiente: en el mapa, apilar los hijos terminales inactivos de un nodo cuando son muchos, para que el árbol siga siendo manejable ahora que cada draft es un nodo propio que se queda al validarse.

## Decisions
- 2026-10-05 10:50 · Creado como draft bajo el mapa; se separa del cambio de reglas de `context-pack/routing` (versión 8) porque solo toca la página.

## Requirements
- 2026-10-05 10:45 · Sí que es cierto que si se acumulan N nodos debajo de un nodo, el árbol puede quedar poco manejable. Una opción sería 'apilar' los nodos hijos terminales (los que no tengan hijos a su vez) inactivos cuando sean más de X. Se visualizaría como varias capas apiladas algo decaladas para poder intuir visualmente si son muchas o pocas.
- 2026-10-05 10:48 · Ya acabaremos de afinar el umbral con pruebas reales
- 2026-10-05 10:50 · draft: En el mapa, cuando un nodo tiene 5 o más hijos sin hijos propios que son estables y no tienen trabajo abierto, mostrarlos como una sola pila de tarjetas algo desplazadas (más capas cuantos más nodos). Clic en la pila la despliega en su sitio, como una rama abierta, con un control para volver a apilarla. Un nodo sale de la pila cuando pasa a draft o tiene trabajo abierto ("open"), y la pila se despliega sola al buscar un nodo apilado o al saltar a él desde una dependencia. El umbral de 5 es provisional: se afinará con pruebas reales en Killer Flies.
