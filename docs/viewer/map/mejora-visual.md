---
title: Mejora visual
depends_on: []
status: draft
threads:
  - Mejora visual del mapa | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLXHz2jKvhAeV5eEDc7P2x6y
---
## Summary
Mejoras de aspecto del mapa (vista "Map") para que la jerarquía sea más clara y agradable de leer.
Primero se exploran tres conceptos gráficos distintos como maquetas estáticas, sin tocar el visor: A "Branches" (el árbol actual con tarjetas y color por área), B "Orbits" (jerarquía radial) y C "Floor plan" (nodos como salas anidadas).
Ronald eligió la A, que ya está aplicada al mapa del visor (ver `viewer/map`). Pendiente de su validación en el visor real.

## Decisions
- 2026-10-02 10:46 · Ronald pide tres propuestas conceptuales distintas de representación de la jerarquía, como páginas HTML estáticas, sin integrarlas aún en el visor.
- 2026-10-02 11:05 · Las maquetas viven en `design/map-proposals/` (fuera de `docs/`, porque no son nodos). Comparten unos datos de ejemplo: los nodos de este proyecto y un proyecto inventado de unos 40 nodos para ver cómo escala cada diseño.
- 2026-10-02 11:05 · En las tres propuestas cada área de primer nivel tiene su color, y al seleccionar un nodo se marca en verde de qué depende y en ámbar quién lo usa. Las dependencias no se repiten como cajas: van como etiquetas dentro del nodo (A y C) o como curvas solo del nodo seleccionado (B).
- 2026-10-02 11:35 · Ronald elige la propuesta A (Branches) porque queda más clara. Se lleva al mapa real; B y C quedan solo como maquetas.

## Requirements
- 2026-10-02 10:46 · Puedes hacer tres propuestas diferentes conceptuales de representación gráfica de la jerarquía ?
- 2026-10-02 10:46 · No hace falta integrarlas en el index actual, pueden ser tres páginas HTML estáticas que simplemente muestren una propuesta de diseño
- 2026-10-02 11:35 · Opción A, queda más clara

## Propuestas
- **A · Branches**: el mismo árbol de izquierda a derecha, con tarjetas (título, ruta, resumen en los dos primeros niveles, número de decisiones) y conectores curvos del color del área.
- **B · Orbits**: el proyecto en el centro, un anillo por nivel y un sector de color por área; el tamaño del punto indica el número de decisiones.
- **C · Floor plan**: sin líneas; cada nodo es una sala que contiene a sus hijos y cada área es un ala coloreada. Resumen y barra de decisiones visibles en el sitio.
