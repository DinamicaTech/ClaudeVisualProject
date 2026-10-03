---
title: AI Visual Project Management (nombre provisional)
depends_on: []
threads:
  - Diseño y arquitectura | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLJTJVZTomXFc5QL5nedhLKa
  - Desarrollo de producto v1 | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLWVKdXpCWWjVopDpDNCtGxN
---
## Summary
Herramienta que convierte una carpeta de documentos md de un repositorio git en un mapa visual y navegable de un proyecto desarrollado con IA.
La persona recorre un mapa (o un árbol) de nodos, ve el resumen funcional y las decisiones de diseño de cada nodo, y arranca un hilo nuevo sobre cualquier nodo con el contexto adecuado.
No depende de ningún asistente: solo lee ficheros md. La herramienta gestionará su propio desarrollo en cuanto sea posible.

## Decisions
- 2026-10-02 09:00 · Forma: página web estática; sin servidor ni instalación.
- 2026-10-02 09:00 · Alcance v1: solo navegar (sin editar), más el paquete de contexto del doble clic y los avisos de formato.
- 2026-10-02 09:00 · Un md por nodo; la jerarquía sale de las rutas; las dependencias se declaran en la cabecera de cada md.
- 2026-10-02 09:29 · La página es un HTML fijo con botón "Abrir carpeta" que lee los md locales; F5 refleja los cambios. Solo Chrome y Edge en la v1.
- 2026-10-02 09:13 · El proyecto es un grafo: cada documento tiene un único sitio en el árbol (su ruta) y las relaciones muchos a muchos se declaran con `depends_on`.
- 2026-10-02 09:13 · Se navega como árbol, la estructura más humana; un nodo del que dependen otros aparece también como referencia bajo cada uno de ellos. Sin vista de grafo en la v1.
- 2026-10-02 09:00 · El paquete de contexto son solo rutas: el hilo nuevo lee los ficheros por sí mismo; no se pega contenido.
- 2026-10-02 09:00 · Idioma: el producto publicado (código, comentarios, UI, documentación pública) en inglés; los documentos de desarrollo de este proyecto en español.
- 2026-10-02 09:46 · La v1 está construida: `index.html` en la raíz del repositorio.
- 2026-10-02 10:52 · Única excepción a "sin editar": renombrar un nodo desde la página (`viewer/rename`).
- 2026-10-02 10:26 · Se añade a la v1 una vista de mapa (`viewer/map`): la jerarquía dibujada con cajas, de izquierda a derecha, por defecto; el árbol sigue disponible.
- 2026-10-03 07:50 · Los pendientes ya no van en una hoja de ruta: cada uno es un nodo `draft` en su sitio funcional, la vista `viewer/drafts` los reúne y `viewer/log` registra decisiones y requisitos por fecha. Una tarea arrancada en cualquier nodo se lleva a su nodo responsable (`context-pack/routing`).
- 2026-10-03 13:50 · Nuevo subproyecto `creative-lab`: la sala de ideas, donde se debaten mejoras y desarrollos antes de pasarlos a draft o ejecutarlos.
- 2026-10-03 14:58 · Nuevo nodo `global-rules` bajo la raíz: las reglas que siguen todos los hilos, a las que apuntan los prompts (ver `context-pack/reglas-del-proyecto`).

## Requirements
- 2026-10-03 13:50 · Derived from creative-lab: listar `creative-lab` entre los subproyectos.
- 2026-10-03 14:58 · Derived from context-pack/reglas-del-proyecto: listar `global-rules` entre los subproyectos.

## Antecedentes
Conclusiones de un proyecto anterior desarrollado en muchos hilos de IA:
- Un hilo no lee otros hilos. Solo se comparte lo escrito: instrucciones del proyecto y documentos md.
- Los hilos largos se degradan al agotar el contexto; deben ser cortos y desechables, una sesión de trabajo cada uno.
- La estructura del proyecto vive en los md, organizados por carpetas. Cada hilo termina volcando sus decisiones en el documento de su área.
- No hay sub-hilos; la jerarquía solo puede estar en los documentos.
- Los md son densos; hace falta una capa por encima, pensada para una persona, para navegar sin leer documentos enteros.
- Un documento puede quedar desactualizado sin que se note (un hilo cortado, un error de la IA, un cambio externo, dos hilos sobre el mismo documento, un efecto indirecto sobre un documento que el hilo no abrió).

## Subproyectos
- `format/`: la convención de md en la que se apoya todo lo demás.
- `model/`: el modelo de datos que se construye a partir de los docs.
- `viewer/`: la página que usa la persona.
- `context-pack/`: el prompt del doble clic para un hilo nuevo.
- `build/`: cómo se abre la página y lee la carpeta de docs.
- `global-rules`: las reglas que siguen todos los hilos; los prompts apuntan a ellas.
- `creative-lab`: la sala de ideas; cada idea se debate en un nodo hijo antes de pasar a draft.
- `roadmap/`: obsoleto; los pendientes son nodos `draft` en su sitio (ver `viewer/drafts`).
