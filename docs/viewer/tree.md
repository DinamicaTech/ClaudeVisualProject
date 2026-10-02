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
- 2026-10-02 09:46 · Las entradas de referencia de un nodo son sus dependencias declaradas (no las heredadas) y van antes de sus hijos, en el orden de `depends_on`. Una dependencia a un nodo que no existe se muestra en rojo.
- 2026-10-02 09:46 · Los hijos se ordenan alfabéticamente por el nombre de su fichero o carpeta.
- 2026-10-02 09:46 · Al abrir por primera vez se despliegan la raíz y el primer nivel. El triángulo despliega o pliega; el clic en el nombre solo selecciona.
- 2026-10-02 09:46 · Doble clic sobre una entrada de referencia copia el paquete de contexto del nodo real.
- 2026-10-02 09:46 · Las carpetas sin `README.md` se muestran en cursiva; los nodos `draft` llevan una etiqueta.
- 2026-10-02 10:26 · La vista de grafo ya no queda fuera: el mapa (`viewer/map`) se añade a la v1 y el árbol pasa a ser la vista alternativa.
