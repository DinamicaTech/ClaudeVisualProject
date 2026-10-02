---
title: Mapa
depends_on: [model]
---
## Summary
Muestra el proyecto como un mapa de cajas: la jerarquía se lee de izquierda a derecha (cada columna es un nivel) y las dependencias son flechas que van del nodo que depende al nodo del que depende.
Es la vista por defecto; el árbol sigue disponible con un selector "Map / Tree". Comparte con el árbol la selección, la ficha y el doble clic.

## Decisions
- 2026-10-02 10:23 · Ronald pide una vista visual de la jerarquía además del árbol; se añade a la v1 como vista "Map", por defecto.
- 2026-10-02 10:26 · Disposición en árbol horizontal: la raíz a la izquierda, cada nivel en una columna, el padre centrado respecto a sus hijos. Las líneas grises son la jerarquía.
- 2026-10-02 10:26 · Las dependencias son flechas verdes discontinuas. Al seleccionar un nodo se resaltan sus flechas: en verde las suyas (de qué depende) y en azul las de quien depende de él; el resto se atenúa.
- 2026-10-02 10:26 · Rueda del ratón para acercar y alejar, arrastrar para mover y botón "Fit" para ver el mapa entero.
- 2026-10-02 10:26 · El interruptor "References" muestra u oculta también las flechas del mapa.
- 2026-10-02 10:26 · Las cajas muestran el título (recortado si es largo; entero al pasar el ratón), el número de avisos y la etiqueta `draft`. Los nodos obsoletos y sus hijos van en gris; las carpetas sin `README.md`, con borde punteado.
- 2026-10-02 10:26 · En el mapa se ven siempre todos los nodos; no se pliegan ramas.
