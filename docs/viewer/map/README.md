---
title: Mapa
depends_on: [model]
threads:
  - Zoom y selector Tree/Project | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL2rS1irvBBBCJZVEffNsN8p
---
## Summary
Muestra el árbol del proyecto como un mapa de tarjetas, de izquierda a derecha (cada columna es un nivel). Cada área de primer nivel tiene su color, que siguen sus líneas. Las dependencias van como etiquetas dentro de la tarjeta (clic para saltar); no hay flechas cruzadas.
Es la vista por defecto. En el selector "Tree / Project", "Tree" es este mapa de nodos y "Project" la vista en filas (`viewer/tree`). Comparte con el árbol la selección, la ficha y el doble clic.
La tecla Z hace zoom: las dos vistas muestran solo el nodo seleccionado y sus descendientes.

## Decisions
- 2026-10-02 10:23 · Ronald pide una vista visual de la jerarquía además del árbol; se añade a la v1 como vista "Map", por defecto.
- 2026-10-02 10:26 · Rueda del ratón para acercar y alejar, arrastrar para mover y botón "Fit" para ver el mapa entero.
- 2026-10-02 10:26 · El interruptor "References" muestra u oculta también las cajas de referencia del mapa.
- 2026-10-02 10:26 · Las cajas muestran el título (recortado si es largo; entero al pasar el ratón), el número de avisos y la etiqueta `draft`. Los nodos obsoletos y sus hijos van en gris; las carpetas sin `README.md`, con borde punteado.
- 2026-10-02 10:33 · Ronald: el mapa es una jerarquía, no un grafo. Es el mismo árbol (nodos en su sitio y dependencias repetidas como cajas de referencia) dibujado con cajas y líneas.
- 2026-10-02 10:33 · Orientación horizontal, de izquierda a derecha, porque en vertical no caben las etiquetas. El padre queda centrado respecto a sus hijos.
- 2026-10-02 10:33 · Las cajas de referencia van con borde verde discontinuo y ↗; clic salta a la caja real y doble clic copia el paquete de contexto del nodo real. Al seleccionar un nodo se resaltan también sus copias de referencia.
- 2026-10-02 10:33 · Cada caja con hijos o referencias tiene un botón −/+ para plegar o desplegar su rama.
- 2026-10-02 10:45 · Se convierte en carpeta para alojar el subnodo `viewer/map/mejora-visual`; su ruta de nodo no cambia.
- 2026-10-02 11:40 · Ronald elige la propuesta A de `viewer/map/mejora-visual`. Las cajas pasan a ser tarjetas con título, ruta de nodo, número de decisiones (◆) y avisos; en los dos primeros niveles muestran además la primera línea del Summary.
- 2026-10-02 11:40 · Cada área de primer nivel tiene su color, que llevan la franja de sus tarjetas y sus líneas (curvas). La raíz va en el color del texto.
- 2026-10-02 11:40 · Sustituye a la decisión de las cajas de referencia en el mapa: las dependencias son etiquetas "↗ título" dentro de la tarjeta. Clic salta al nodo real y doble clic copia su paquete de contexto. El árbol sigue usando entradas de referencia.
- 2026-10-02 11:40 · Al seleccionar un nodo se marca en verde de qué depende y en ámbar quién lo usa; el resto se atenúa salvo su camino desde la raíz, cuyas líneas se resaltan.
- 2026-10-02 12:40 · Tecla Z (zoom): el mapa y el árbol muestran solo el nodo seleccionado y sus descendientes, con ese nodo como raíz. Arriba aparece "Zoom: título ✕"; Z sobre el nodo del zoom, Esc o clic en ese botón vuelven al proyecto entero. Z sobre otro nodo hace zoom en él. Saltar a un nodo fuera del zoom (una dependencia, un enlace de la ficha) sale del zoom. El zoom se recuerda tras F5.
- 2026-10-02 12:40 · El selector "Map / Tree" pasa a "Tree / Project". El mapa sigue siendo la vista por defecto.
- 2026-10-02 18:10 · Ronald aclara el selector: "Tree" es el mapa de nodos (esta vista) y "Project" la vista en filas, el proyecto organizado tabularmente. Sustituye al reparto de nombres de las 12:40.

## Requirements
- 2026-10-02 12:24 · Con la tecla Z (Zoom) mostrar solo el nodo seleccionado y descendientes (recursivamente).
- 2026-10-02 12:24 · En lugar del selector Map/Tree (que queda un poco confuso): Tree/Project
- 2026-10-02 18:08 · Bueno, la idea es que 'Tree' es el árbol de nodos y 'Project' el proyecto organizado tabularmente.
