---
title: Árbol
depends_on: [model]
---
## Summary
Navega el proyecto como un árbol de nodos con varios niveles de profundidad, porque es la estructura más natural para una persona.
Las dependencias aparecen dentro del propio árbol como entradas de referencia bajo el nodo que depende, así que un mismo nodo puede verse en varios sitios.

## Decisions
- 2026-10-02 09:13 · La navegación es un árbol aunque el proyecto sea un grafo; no hay vista de grafo en la v1.
- 2026-10-02 09:13 · Cada nodo aparece una vez en su sitio real (según su ruta) y, además, como entrada de referencia bajo cada nodo que depende de él.
- 2026-10-02 09:13 · Las entradas de referencia se distinguen visualmente del nodo real; al seleccionarlas se salta al nodo real.
- 2026-10-02 09:15 · Un interruptor muestra u oculta las entradas de referencia; encendido por defecto. Los hijos por jerarquía se ven siempre.
- 2026-10-02 09:13 · Las entradas de referencia no se despliegan dentro de sí mismas, para evitar árboles infinitos con los ciclos.
- 2026-10-02 09:13 · Clic selecciona el nodo y muestra su ficha; doble clic genera el paquete de contexto.
- 2026-10-02 09:19 · Los nodos obsoletos y sus hijos se muestran en gris.
- 2026-10-02 09:13 · Los nodos con avisos de formato aparecen marcados.
