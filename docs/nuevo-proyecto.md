---
title: Nuevo proyecto
depends_on: [context-pack/reglas-del-proyecto, context-pack/carga-de-requisitos, context-pack/index, viewer, viewer/map/nodos-ocupados, global-rules]
threads:
  - Nuevo proyecto y carga de requisitos | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLELi1mP27ikYaYzTTx83NTx
---
## Summary
Botón "New project" (en la cabecera y en la pantalla inicial) que copia un prompt para preparar un proyecto nuevo para CVP, sin hacerlo a mano: pide de una vez nombre, repositorio de GitHub (opcional), carpeta local, descripción y ficheros de requisitos, y crea el esqueleto (raíz, `global-rules`, `creative-lab`, `AGENTS.md`, `CLAUDE.md`, `sources/` y, si tiene repositorio de GitHub, la Action "Open work") en el disco del propietario.
Después fija primero la arquitectura (`architecture`) y luego carga los requisitos en el árbol vacío. Los docs se escriben en el idioma del propietario; el índice de nodos lo crea luego la página ("Add node index").

## Decisions
- 2026-10-03 08:16 · [replaced by 2026-10-03 17:17] Pendiente. Guardado como draft al final del hilo de la hoja de ruta, decidido por Ronald.
- 2026-10-03 16:12 · [replaced by 2026-10-03 18:15] Acordado con Ronald (15:38–16:04), pendiente de construir tras `context-pack/carga-de-requisitos`, que reutiliza: (1) pide primero el nombre del proyecto, que es el título del nodo raíz; (2) pide dónde vive: repositorio y carpeta de docs (si no es `docs` en la raíz, se escribe `docs_path`), y opcionalmente la ruta de GitHub, que solo sirve al hilo para crear el repositorio o subir a él y no se guarda en los md; (3) crea el nodo raíz, `global-rules` con las reglas de la página (como "Add global rules"), `creative-lab`, `AGENTS.md` apuntando a `global-rules`, `CLAUDE.md` con `@AGENTS.md` y el índice; (4) ejecuta la carga de requisitos con el árbol vacío; (5) al final crea `architecture` con una primera propuesta (lenguaje, base de datos, tipo de aplicación, despliegue…) como `status: draft`, porque depende de los requisitos.
- 2026-10-03 16:12 · Reglas personales del propietario: el hilo pregunta si copiarlas de otro proyecto a `AGENTS.md`, proponiendo por defecto el proyecto abierto en la página al pulsar "New project"; copia solo esas reglas, no el puntero. Si no alcanza ese repositorio, pregunta su ruta. No se puede elegir "el más reciente": la página solo lee la carpeta de docs abierta.
- 2026-10-03 16:12 · [replaced by 2026-10-03 19:35] Sin identificador de proyecto aparte del nombre. Quedan fuera las comprobaciones de GitHub ("Docs format", "Open work", índice al día) en el proyecto nuevo.
- 2026-10-03 16:12 · Índice en proyectos sin las herramientas de este repositorio: botón en la página para regenerarlo, que aparece como aviso "⚠ Rebuild index" en la cabecera cuando `.index.md` falta o no coincide con los md (le corresponde a `context-pack/index`).
- 2026-10-03 16:25 · Construido: botón "New project" en la cabecera (siempre, también en la instantánea) y en la pantalla inicial sin carpeta abierta. Copia un prompt en inglés con los pasos acordados el 16:12: nombre, ubicación, idioma, esqueleto, reglas personales, carga de requisitos con el árbol vacío y `architecture` como draft al final.
- 2026-10-03 16:25 · El prompt lleva el fichero `global-rules` completo que escribiría "Add global rules" (versión de reglas de la página), para que el hilo lo copie tal cual (puede traducir su Summary y sus Decisions, nunca el bloque entre las marcas): el proyecto nace con las reglas al día. Lleva también las plantillas de la raíz, `creative-lab` y `AGENTS.md`; `CLAUDE.md` es la línea `@AGENTS.md`.
- 2026-10-03 16:25 · Los docs del proyecto nuevo se escriben en el idioma en que escribe el propietario, sin preguntarlo, y el hilo lo deja como primera línea de las "Project rules" de `global-rules`. Los títulos de bloque (`## Summary`…) y las claves de cabecera no se traducen. Decidido por Ronald (16:15).
- 2026-10-03 16:25 · El proyecto nuevo no tiene herramienta para el índice: al terminar, el hilo pide al propietario abrir la carpeta de docs en la página y pulsar "Add node index" (`context-pack/index`).

- 2026-10-03 17:17 · Validado por Ronald a las 17:16: pasa a stable.
- 2026-10-03 18:00 · [replaced by 2026-10-03 18:15] El proyecto ha de acabar en una carpeta del disco del propietario, porque la página solo lee carpetas locales. Si el hilo trabaja en su máquina, pide esa carpeta; si trabaja en la nube, el proyecto necesita un repositorio de GitHub (lo crea, privado salvo que el propietario diga otra cosa) y el propietario ha de clonarlo: el hilo le da el comando o, si puede ejecutar órdenes en su máquina, pide la carpeta y lo clona. Con el esqueleto escrito, lo deja en la rama principal y pide abrir su carpeta de docs en la página, antes de la carga de requisitos, para ver crecer el árbol. Primera prueba real (Killer flies): el hilo dejó el esqueleto en la nube sin preguntar la carpeta local.
- 2026-10-03 18:15 · Flujo rediseñado con Ronald tras la primera prueba (18:03–18:06): (1) en un solo mensaje pide nombre (título de la raíz), repositorio de GitHub (opcional), carpeta del disco donde vivirá, descripción (Summary de la raíz) y los ficheros de requisitos adjuntos; (2) docs en el idioma del propietario; (3) crea el esqueleto (raíz, `global-rules`, `creative-lab`, `AGENTS.md`, `CLAUDE.md` y los adjuntos sin cambios en `sources/`), pregunta por las reglas personales, lo deja en la rama principal y pide abrir la carpeta de docs en la página; (4) arquitectura primero: una ronda solo con las preguntas de arquitectura que pueden condicionar el árbol, y el nodo `architecture` con lo acordado (lo que quede abierto, como `question:` y `status: draft`); (5) carga de requisitos, cuyas preguntas bloqueantes ya solo son de árbol; (6) pide pulsar "Add node index".
- 2026-10-03 18:15 · El proyecto ha de acabar en una carpeta del disco del propietario, porque la página solo lee carpetas locales. Si el hilo trabaja en su máquina, usa esa carpeta. Si trabaja en la nube necesita el repositorio de GitHub: si el propietario no lo dio, le pide crear uno vacío y pasarle el enlace, porque un hilo de la nube puede no tener permiso para crearlo (en Killer flies no pudo); tras subir el esqueleto, el propietario lo clona: el hilo le da el comando o, si puede ejecutar órdenes en su máquina, lo clona en esa carpeta.
- 2026-10-03 18:15 · Los ficheros adjuntos se leen siempre como bloque de requisitos, sin que haya que pedirlo: no es arriesgado porque nada se escribe antes del OK del propietario al árbol propuesto.
- 2026-10-03 19:35 · Sin identificador de proyecto aparte del nombre. Quedan fuera del proyecto nuevo las comprobaciones de GitHub "Docs format" e índice al día.
- 2026-10-03 19:35 · Pedido por Ronald tras la prueba de Killer Flies (los nodos en curso seguían viéndose solo como DRAFT): si el proyecto tiene repositorio de GitHub, el esqueleto incluye la Action "Open work" (`.github/workflows/open-work.yml`), copiada tal cual de `tools/project/open-work.yml` de CVP, para que la página marque los nodos en curso como "open". La Action descarga `tools/open-work.mjs` del repositorio público de CVP, así el proyecto no guarda copia de la herramienta. Killer Flies la recibe a mano (su PR #10, Open work).

## Requirements
- 2026-10-03 08:13 · La opción de arrancar un nuevo proyecto es perfecta, automatiza todo el trabajo de creación de un proyecto.
- 2026-10-03 08:16 · draft: Ofrecer un botón "New project" que copie un prompt para preparar un repositorio nuevo para CVP: nodo raíz con identificador de proyecto, fichero de reglas del proyecto, AGENTS.md que apunta a él e índice de nodos.
- 2026-10-03 15:38 · un proyecto nuevo, además: Creará un nodo: Arquitectura (Architecture) en el que hará una primera propuesta de arquitectura (lenguaje, BD, etc.) que deberá ser revisada/debatida por el operador
- 2026-10-03 15:38 · Pedirá la carpeta física donde ubicar el proyecto
- 2026-10-03 15:38 · Creará un nodo 'Creative lab' también colgando de la raíz
- 2026-10-03 16:02 · Botón regenerar, aunque de alguna forma se ha de avisar al operador que tiene que hacerlo
- 2026-10-03 16:02 · Dejamos fuera comprobación de GitHub. Quizá sería bueno pedir también (opcional) la ruta de GitHub en el caso de crear un proyecto nuevo
- 2026-10-03 16:02 · Ok con CLAUDE.md + AGENTS.md
- 2026-10-03 16:02 · Si por identificador de proyecto entendemos el nombre del proyecto, mejor pedirlo como primer paso al crear un nuevo proyecto
- 2026-10-03 16:02 · Entiendo que el AGENTS.md se puede heredar de alguno ya existente (el más reciente), no ?
- 2026-10-03 16:04 · Ok a preguntar la copia de reglas personales, por defecto, seleccionar el proyecto desde el que se ha lanzando 'nuevo proyecto'
- 2026-10-03 16:15 · Sí, los documentos con el idioma del usuario.
- 2026-10-03 17:50 · No, la carpeta supongo que solo está en GitHub, no me ha preguntado en ningún momento en qué carpeta local guardar el clon.
- 2026-10-03 18:03 · Quizá sería bueno arrancar la creación del proyecto pidiendo (no obligatorio) la ruta del proyecto GitHub donde guardarlo.
- 2026-10-03 18:03 · Se pregunta el nombre del proyecto, ruta GitHub, ruta local, descripción y ficheros adjuntos. En esta prueba, los requerimientos estaban dentro de los ficheros adjuntos, pero he tenido que especificarle que los procesase (no tengo claro que un procesamiento automático sea bueno o no)
- 2026-10-03 18:03 · Lo primero es establecer la arquitectura básica que pueda condicionar el árbol.
- 2026-10-03 18:03 · Luego las dudas básicas que puedan condicionar el árbol
- 2026-10-03 18:03 · Luego ya se construye todo el árbol con las dudas repartidas en los nodos.
- 2026-10-03 19:27 · Por lo que he estado viendo, cuando un nodo trabajaba, en CVP seguía apareciendo como DRAFT
- 2026-10-03 19:29 · A (respuesta a "¿Añadimos la marca \"open\" (Action Open work) a los proyectos nuevos y a Killer Flies?")
