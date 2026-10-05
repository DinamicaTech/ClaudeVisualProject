---
title: Pila de nodos inactivos
depends_on: [viewer/map/nodos-ocupados]
threads:
  - Drafts como nodo propio | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLBfZRv8FjyEtAvZrpagxERU
  - Pila de nodos inactivos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLBvstiCEBfzdW9zQYBv5ZwS
---
## Summary
En el mapa, cuando un nodo tiene 5 o más hijos terminales inactivos, se dibujan como una sola pila "N nodes" con capas detrás (más cuantos más nodos), para que el árbol siga siendo manejable ahora que cada draft es un nodo propio que se queda al validarse.
Clic en la pila la despliega en su sitio, con un botón "Stack (N)" para volver a apilarla. Seleccionar un nodo apilado o saltar a él la despliega. Solo afecta al mapa, no a la vista Project.

## Decisions
- 2026-10-05 10:50 · Creado como draft bajo el mapa; se separa del cambio de reglas de `context-pack/routing` (versión 8) porque solo toca la página.
- 2026-10-05 11:32 · Entra en la pila un hijo sin hijos, estable u obsoleto, sin trabajo abierto, sin avisos ⚠ y que no sea un nodo "new" de una rama; nunca drafts ni ideas. Hace falta que haya 5 o más hermanos así (umbral provisional, `STACK_MIN` en la página); con menos se ven como siempre. Acordado con Ronald (11:32).
- 2026-10-05 11:32 · La pila va debajo de los hermanos que no se apilan, que siguen en orden alfabético. Es una tarjeta "N nodes" con los primeros títulos y, detrás, 1 capa de 5 a 9 nodos, 2 de 10 a 19 y 3 desde 20; al pasar el ratón lista todos los títulos.
- 2026-10-05 11:32 · Clic en la pila la despliega en su sitio y aparece encima del grupo un botón "Stack (N)" que la vuelve a apilar. No se recuerda tras F5, igual que las ramas plegadas.
- 2026-10-05 11:32 · La página no tiene buscador: "al buscar" es cualquier salto a un nodo (dependencia ↗, enlaces de la ficha, Drafts, Questions, Log, Renombrar, Mover). Todo salto y todo cambio de selección a un nodo apilado despliega su pila; un salto abre además las ramas plegadas con − que lo esconden, que antes no se abrían.
- 2026-10-05 11:32 · Si el nodo seleccionado está apilado, la pila se marca como seleccionada; si dentro hay una dependencia del seleccionado o quien lo usa, se marca en verde o ámbar. En Tree edit mode la pila no se arrastra ni admite soltar nodos encima.
- 2026-10-05 11:36 · Ronald da el visto bueno para fusionar (11:36): pasa a estable. El umbral de 5 se seguirá afinando con pruebas reales.

## Requirements
- 2026-10-05 10:45 · Sí que es cierto que si se acumulan N nodos debajo de un nodo, el árbol puede quedar poco manejable. Una opción sería 'apilar' los nodos hijos terminales (los que no tengan hijos a su vez) inactivos cuando sean más de X. Se visualizaría como varias capas apiladas algo decaladas para poder intuir visualmente si son muchas o pocas.
- 2026-10-05 10:48 · Ya acabaremos de afinar el umbral con pruebas reales
- 2026-10-05 10:50 · draft: En el mapa, cuando un nodo tiene 5 o más hijos sin hijos propios que son estables y no tienen trabajo abierto, mostrarlos como una sola pila de tarjetas algo desplazadas (más capas cuantos más nodos). Clic en la pila la despliega en su sitio, como una rama abierta, con un control para volver a apilarla. Un nodo sale de la pila cuando pasa a draft o tiene trabajo abierto ("open"), y la pila se despliega sola al buscar un nodo apilado o al saltar a él desde una dependencia. El umbral de 5 es provisional: se afinará con pruebas reales en Killer Flies.
