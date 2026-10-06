---
title: Pestaña Overview
status: draft
depends_on: [viewer, build/github, build/html-autonomo]
threads:
  - Pestaña Overview | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL6pGuKTocW1pSRkWKhGwA7T
---
## Summary
Una pestaña "Overview", a la izquierda de "Tree", que presenta el proyecto: una descripción breve y una o varias capturas de cómo se ve. Es la portada para quien abre un proyecto que no conoce, o que hace tiempo que no ve.
El contenido sale de una sección `## Overview` del nodo raíz (texto libre con imágenes guardadas dentro de la carpeta de docs), y si no existe se enseña el Summary de la raíz. En modo GitHub, la descripción del repositorio puede salir como subtítulo.

## Decisions
- 2026-10-06 11:17 · Leaves the lab: draft. Debatida como idea en `creative-lab/overview`; Ronald la pasa a draft en el visor, su nodo funcional.
- 2026-10-06 11:17 · Imágenes mantenidas desde la pestaña: "Add image" las sube a `docs/overview/` y añade su línea a la sección; "Replace" sube la nueva con el mismo nombre; "Delete" borra el fichero y su línea. Escriben en modo GitHub con token y en carpeta local; el HTML autónomo solo muestra. Aceptado por Ronald.
- 2026-10-06 11:05 · El contenido de la pestaña sale de una sección `## Overview` del nodo raíz; si falta, se enseña su Summary. Elegido por Ronald (opción c).
- 2026-10-06 11:14 · Las capturas viven solo en `docs/overview/` (carpeta visible, sin md: no forma nodo ni da avisos); ni otras carpetas ni direcciones web. Si el repositorio es privado, solo las ve quien tiene acceso, y es lo esperado. Se suben con un botón desde CVP. Elegido por Ronald.
- 2026-10-06 11:12 · [replaced by 2026-10-06 11:14] Las capturas viven en `docs/overview/` (carpeta visible, sin md: no forma nodo ni da avisos), con la opción de enlazarlas desde otra carpeta. Se suben con un botón desde CVP. Elegido por Ronald.
- 2026-10-06 11:05 · Las capturas las sube el propietario al repositorio, de modo que la página las muestra desde cualquier dispositivo (también en modo GitHub); no hay aviso de capturas viejas.
- 2026-10-06 11:05 · El HTML autónomo lleva las capturas incrustadas.

## Requirements
- 2026-10-06 10:57 · idea: Qué opinas de añadir una o varias capturas visuales de un proyecto en CVP así como una breve descripción ? Podría ser algo tan sencillo como 'embeber' la descripción del proyecto en GitHub en una nueva pestaña la izquierda de 'Tree': 'Overview'
- 2026-10-06 11:02 · Ok, abre la idea y seguimos el debate
- 2026-10-06 11:05 · [answered 2026-10-06 11:05] question: ¿De dónde sale el contenido? a) descripción del repositorio en GitHub (una línea; vacía en carpeta local y en el HTML autónomo); b) README de la raíz del repositorio (fuera de la carpeta de docs: no se lee en modo carpeta local); c) sección `## Overview` del nodo raíz, con imágenes dentro de docs (funciona en los tres modos). Recomendación: c, con el Summary de la raíz si falta y la descripción de GitHub como subtítulo en modo GitHub.
- 2026-10-06 11:05 · [answered 2026-10-06 11:05] question: ¿Quién mantiene las capturas? Caducan con cada cambio visible; un hilo en la nube puede sacarlas de una web pero no de una aplicación de escritorio como ProConta. Recomendación: las pone el propietario cuando quiera, sin aviso de capturas viejas en la v1.
- 2026-10-06 11:05 · [answered 2026-10-06 11:05] question: En el HTML autónomo, ¿se incrustan las imágenes? Hacen el fichero más grande. Recomendación: sí, incrustadas, porque sin ellas la pestaña pierde su sentido.
- 2026-10-06 11:05 · 1) ## Overview
- 2026-10-06 11:05 · 2) Las subo yo, pero la idea es que estén en GitHub para que index las muestre desde cualquier dispositivo
- 2026-10-06 11:05 · 3) Sí
- 2026-10-06 11:05 · answer: ¿De dónde sale el contenido? → de una sección `## Overview` del nodo raíz.
- 2026-10-06 11:05 · answer: ¿Quién mantiene las capturas? → las sube el propietario, al repositorio en GitHub, para que la página las muestre desde cualquier dispositivo.
- 2026-10-06 11:05 · answer: ¿Se incrustan en el HTML autónomo? → sí.
- 2026-10-06 11:10 · [answered 2026-10-06 11:12] question: ¿Dónde viven las capturas? a) carpeta `docs/overview/` (se ve como una carpeta más del árbol de docs); b) carpeta oculta `docs/.overview/` (como `.index.md`, no se confunde con un nodo); c) donde quiera el propietario, enlazadas con ruta relativa desde la sección. Recomendación: c, sugiriendo `docs/.overview/` por defecto.
- 2026-10-06 11:10 · [answered 2026-10-06 11:12] question: ¿Cómo se suben? a) desde GitHub ("Add file > Upload files") o el clon local, como cualquier fichero; b) además, un botón en la pestaña Overview que, con token, sube una imagen pegada o elegida y la enlaza en la sección. Recomendación: a en la v1; b solo si subirlas a mano resulta pesado.
- 2026-10-06 11:12 · 1) Lo ideal es docs/overview (no sé si ganamos algo porque sea oculta), pero poder colgarlos de otra carpeta (sobre todo si el proyecto es privado) puede resultar útil.
- 2026-10-06 11:12 · 2) Lo ideal es un botón desde CVP, lo que no me queda claro es el mantenimiento (cómo elimino una imagen para, por ejemplo, actualizarla con una versión más reciente)
- 2026-10-06 11:12 · answer: ¿Dónde viven las capturas? → en `docs/overview/` por defecto, con la opción de enlazarlas desde otra carpeta.
- 2026-10-06 11:12 · answer: ¿Cómo se suben? → con un botón desde CVP; queda por definir cómo se reemplaza o elimina una imagen.
- 2026-10-06 11:15 · [answered 2026-10-06 11:17] question: ¿Cómo se mantienen las imágenes? Propuesta: en la pestaña Overview, cada imagen lleva "Replace" (sube la nueva con el mismo nombre, así los enlaces no cambian) y "Delete" (borra el fichero y su línea en la sección), y "Add image" añade una al final. Funciona en modo GitHub con token y en carpeta local; el HTML autónomo solo muestra. La versión anterior queda en el historial de git. Recomendación: así.
- 2026-10-06 11:15 · [answered 2026-10-06 11:14] question: "Otra carpeta": ¿una carpeta del mismo repositorio o también una dirección web (https://…) de fuera, p. ej. un repositorio público solo de capturas? Recomendación: las dos; una dirección web se ve sin token aunque el proyecto sea privado, pero el botón solo sube dentro del repositorio.
- 2026-10-06 11:14 · El problema es si el repo es privado, podemos subir una imagen porque tenemos el token, pero un usuario no autorizado no podrá ver las imagenes .... que ahora que lo pienso, tampoco es realmente un problema, si es privado es por algo.
- 2026-10-06 11:14 · Por lo tanto, imágenes solo en docs/overview
- 2026-10-06 11:14 · answer: "Otra carpeta" → ninguna: imágenes solo en `docs/overview/`.
- 2026-10-06 11:17 · Sí, ok con el mantenimiento y pasarlo a draft
- 2026-10-06 11:17 · answer: ¿Cómo se mantienen las imágenes? → como se propone: "Replace", "Delete" y "Add image" en la pestaña Overview.
- 2026-10-06 11:17 · draft: Añadir una vista "Overview" a la izquierda de "Tree" en el selector de vistas, que presenta el proyecto con la sección `## Overview` del nodo raíz (texto e imágenes; si falta, su Summary) y, en modo GitHub, la descripción del repositorio como subtítulo. Las imágenes viven solo en `docs/overview/` y se gestionan desde la vista con "Add image", "Replace" (mismo nombre, el texto no cambia) y "Delete" (borra el fichero y su línea), en modo GitHub con token y en carpeta local; el HTML autónomo las lleva incrustadas y solo las muestra.

## Notas del debate
- Hoy la página no muestra imágenes dentro de un nodo; habría que añadirlo para esta pestaña.
- En modo GitHub con repositorio privado las imágenes no pueden ir como enlace directo: la página las descarga con el token, igual que los md. Sin token solo se ven en repositorios públicos.
- El README de CVP está en inglés y orientado a instalar, no a presentar el proyecto.
