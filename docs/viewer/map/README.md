---
title: Mapa
depends_on: [model]
threads:
  - Zoom y selector Tree/Project | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL2rS1irvBBBCJZVEffNsN8p
---
## Summary
Muestra el árbol del proyecto como un mapa de tarjetas, de izquierda a derecha (cada columna es un nivel). Cada área de primer nivel tiene su color, que siguen sus líneas. Las dependencias van como etiquetas dentro de la tarjeta (clic para saltar); no hay flechas cruzadas.
Es la vista por defecto. En el selector "Tree / Project / Drafts / Log", "Tree" es este mapa de nodos y "Project" la vista en filas (`viewer/tree`). Comparte con el árbol la selección, la ficha y el doble clic.
La tecla Z hace zoom: las dos vistas muestran solo el nodo seleccionado y sus descendientes. Con "Tree edit mode" se mueve un nodo arrastrando su tarjeta (`viewer/mover-nodo`).

## Decisions
- 2026-10-02 10:23 · Ronald pide una vista visual de la jerarquía además del árbol; se añade a la v1 como vista "Map", por defecto.
- 2026-10-02 10:26 · Rueda del ratón para acercar y alejar, arrastrar para mover y botón "Fit" para ver el mapa entero.
- 2026-10-02 10:26 · [replaced by 2026-10-02 11:40] El interruptor "References" muestra u oculta también las cajas de referencia del mapa.
- 2026-10-02 10:26 · Las cajas muestran el título (recortado si es largo; entero al pasar el ratón), el número de avisos y la etiqueta `draft`. Los nodos obsoletos y sus hijos van en gris; las carpetas sin `README.md`, con borde punteado.
- 2026-10-02 10:33 · [replaced by 2026-10-02 11:40] Ronald: el mapa es una jerarquía, no un grafo. Es el mismo árbol (nodos en su sitio y dependencias repetidas como cajas de referencia) dibujado con cajas y líneas.
- 2026-10-02 10:33 · Orientación horizontal, de izquierda a derecha, porque en vertical no caben las etiquetas. El padre queda centrado respecto a sus hijos.
- 2026-10-02 10:33 · [replaced by 2026-10-02 11:40] Las cajas de referencia van con borde verde discontinuo y ↗; clic salta a la caja real y doble clic copia el paquete de contexto del nodo real. Al seleccionar un nodo se resaltan también sus copias de referencia.
- 2026-10-02 10:33 · Cada caja con hijos o referencias tiene un botón −/+ para plegar o desplegar su rama.
- 2026-10-02 10:45 · Se convierte en carpeta para alojar el subnodo `viewer/map/mejora-visual`; su ruta de nodo no cambia.
- 2026-10-02 11:40 · Ronald elige la propuesta A de `viewer/map/mejora-visual`. Las cajas pasan a ser tarjetas con título, ruta de nodo, número de decisiones (◆) y avisos; en los dos primeros niveles muestran además la primera línea del Summary.
- 2026-10-02 11:40 · Cada área de primer nivel tiene su color, que llevan la franja de sus tarjetas y sus líneas (curvas). La raíz va en el color del texto.
- 2026-10-02 11:40 · El mapa es una jerarquía, no un grafo (Ronald): el mismo árbol dibujado con tarjetas y líneas. Las dependencias no se repiten como cajas: son etiquetas "↗ título" dentro de la tarjeta; clic salta al nodo real y doble clic copia su paquete de contexto. El interruptor "References" muestra u oculta esas etiquetas. El árbol sigue usando entradas de referencia.
- 2026-10-02 11:40 · Al seleccionar un nodo se marca en verde de qué depende y en ámbar quién lo usa; el resto se atenúa salvo su camino desde la raíz, cuyas líneas se resaltan.
- 2026-10-02 12:40 · Tecla Z (zoom): el mapa y el árbol muestran solo el nodo seleccionado y sus descendientes, con ese nodo como raíz. Arriba aparece "Zoom: título ✕"; Z sobre el nodo del zoom, Esc o clic en ese botón vuelven al proyecto entero. Z sobre otro nodo hace zoom en él. Saltar a un nodo fuera del zoom (una dependencia, un enlace de la ficha) sale del zoom. El zoom se recuerda tras F5.
- 2026-10-02 12:40 · [replaced by 2026-10-03 07:50] El selector "Map / Tree" pasa a "Tree / Project". El mapa sigue siendo la vista por defecto.
- 2026-10-02 18:10 · [replaced by 2026-10-03 07:50] Ronald aclara el selector: "Tree" es el mapa de nodos (esta vista) y "Project" la vista en filas, el proyecto organizado tabularmente. Sustituye al reparto de nombres de las 12:40.
- 2026-10-03 07:50 · El selector de vista es "Tree / Project / Drafts / Log": "Tree" es el mapa de nodos (esta vista), "Project" la vista en filas, el proyecto organizado tabularmente (`viewer/tree`), y después `viewer/drafts` y `viewer/log`. El mapa sigue siendo la vista por defecto.
- 2026-10-03 08:30 · El contador ◆ de las tarjetas cuenta solo las decisiones vigentes; las sustituidas se indican al pasar el ratón. Derived from format/decisiones-sustituidas.
- 2026-10-03 08:47 · Interruptor "Tree edit mode" en la cabecera, visible solo en esta vista: con él encendido, arrastrar una tarjeta (salvo la raíz) la lleva sobre otra para moverla allí (`viewer/mover-nodo`); arrastrar el fondo sigue moviendo el mapa. La leyenda cambia para explicarlo.

## Requirements
- 2026-10-02 12:24 · Con la tecla Z (Zoom) mostrar solo el nodo seleccionado y descendientes (recursivamente).
- 2026-10-02 12:24 · En lugar del selector Map/Tree (que queda un poco confuso): Tree/Project
- 2026-10-02 18:08 · Bueno, la idea es que 'Tree' es el árbol de nodos y 'Project' el proyecto organizado tabularmente.
- 2026-10-03 08:30 · Derived from format/decisiones-sustituidas: contar en ◆ solo las decisiones vigentes.
- 2026-10-03 08:47 · Derived from viewer/mover-nodo: interruptor "Tree edit mode" y arrastrar una tarjeta sobre otra para moverla.
