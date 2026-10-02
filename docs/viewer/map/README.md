---
title: Mapa
depends_on: [model]
---
## Summary
Muestra el árbol del proyecto como un mapa de cajas, de izquierda a derecha (cada columna es un nivel). Como en el árbol, cada dependencia se repite como caja de referencia bajo el nodo que depende; no hay flechas cruzadas.
Es la vista por defecto; el árbol sigue disponible con un selector "Map / Tree". Comparte con el árbol la selección, la ficha y el doble clic.

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
