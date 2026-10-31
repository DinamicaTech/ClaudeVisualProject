---
title: Buscador de nodos
depends_on: [viewer/map, viewer/tree, viewer/map/nodos-ocupados, viewer/map/pila-de-nodos]
threads:
  - 2026-10-31 09:47 · Añadir buscador de nodos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL9PxVp6wo5KgnmeJRSC1BgE
---
## Summary
Un campo "Search nodes" en la cabecera, en todas las vistas (Ctrl+K o /), que encuentra un nodo cuando el árbol ya es demasiado grande para localizarlo a ojo.
Busca, sin distinguir mayúsculas ni acentos, en el título, la ruta, los títulos de sus hilos (`threads`) y el título de su trabajo abierto (PR o rama); cada resultado dice dónde ha encontrado el texto.
Enter o clic saltan al nodo como cualquier otro salto: lo selecciona, abre las ramas y las pilas que lo esconden y lo centra. Funciona desde carpeta, GitHub y el HTML autónomo.

## Decisions
- 2026-10-31 09:55 · Un campo en la cabecera, junto al selector de vista, visible en cuanto hay un proyecto abierto. Ctrl+K (o Cmd+K) y / (fuera de un campo de texto) lo enfocan; Esc cierra la lista.
- 2026-10-31 09:55 · Se busca en el título, la ruta (la raíz es "(root)"), los títulos de la lista `threads` y el trabajo abierto del nodo ("#N título del PR", o la rama si no tiene PR), incluidos los nodos "new" de una rama. No se busca en Summary, Decisions ni Requirements. Mayúsculas y acentos dan igual.
- 2026-10-31 09:55 · Con varias palabras, un nodo sale si cada palabra está en alguno de sus campos. Orden: primero las coincidencias en el título, luego en la ruta, en los hilos y en el trabajo abierto; dentro de cada grupo, las que empiezan por la primera palabra y los nodos menos profundos. Se muestran 12 como máximo, con una nota de cuántos más hay.
- 2026-10-31 09:55 · Cada resultado muestra título (con las etiquetas draft, idea y de trabajo abierto), ruta y, si el texto está en un hilo o en el trabajo abierto, esa línea ("thread: …", "open work: …"), con las palabras resaltadas. Sin resultados, un mensaje dice dónde busca y propone acortar la búsqueda o abrir el proyecto del nodo.
- 2026-10-31 09:55 · ↑ ↓ eligen, Enter o clic saltan. El salto es el mismo que el de una dependencia ↗ (`viewer/map/pila-de-nodos`): selecciona el nodo, abre ramas plegadas y pilas y lo centra. Desde Overview, Drafts, Questions o Log pasa a la vista Tree; en Tree o Project se queda en la vista.

## Requirements
- 2026-10-31 08:54 · No consigo localizar 'Validar prototipos...' en el árbol (creo que empieza ser necesario un buscador) ya que quizá ese nodo sí funciona bien para abrir el thread.
