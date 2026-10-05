---
title: Apertura de la página
depends_on: [viewer, model]
---
## Summary
La herramienta es un único fichero HTML fijo (`index.html`) que se abre en el navegador. Un proyecto se abre desde su repositorio de GitHub ("Open from GitHub", `build/github`) o desde una carpeta local ("Open folder", Chrome o Edge), y la página lee sus md directamente.
Para ver cambios en los docs basta con recargar la página (F5) o pulsar "Reload". No hay que instalar ni ejecutar nada.
También puede abrirse como instantánea con los md dentro (`build/html-autonomo`), en cualquier navegador y sin "Abrir carpeta".

## Decisions
- 2026-10-02 09:29 · Un HTML fijo con botón "Abrir carpeta"; no hay comando de generación. Sustituida en parte el 2026-10-03 08:30: existe la instantánea de `build/html-autonomo`.
- 2026-10-02 09:29 · [replaced by build/github 2026-10-04 15:05] Los md no se copian ni se suben a ningún sitio: la página los lee de la carpeta local al abrirla y en cada recarga.
- 2026-10-02 09:29 · Navegadores soportados en la v1: Chrome y Edge, los únicos que permiten a una página leer una carpeta local con permiso del usuario.
- 2026-10-02 09:29 · Un comando que genere un HTML autónomo, para publicar o para otros navegadores, queda en el roadmap.
- 2026-10-02 09:46 · La página es `index.html` en la raíz del repositorio. Se abre con doble clic (file://) en Chrome o Edge.
- 2026-10-02 09:46 · [replaced by build/selector-de-proyectos 2026-10-03 17:55] La página recuerda la última carpeta abierta. Tras F5 la vuelve a leer sola si el navegador conserva el permiso; si no, muestra un botón "Reopen docs/" (un clic). Chrome ofrece "Permitir en cada visita" para no volver a preguntar.
- 2026-10-02 09:46 · Botón "Reload" que relee la carpeta sin recargar la página, equivalente a F5.
- 2026-10-02 09:46 · Tras recargar se conservan el nodo seleccionado, los nodos desplegados y el interruptor de referencias.
- 2026-10-02 09:46 · Se leen todos los `.md` de la carpeta y sus subcarpetas; se ignoran carpetas y ficheros ocultos (que empiezan por `.`) y `node_modules`.
- 2026-10-03 08:30 · Segunda forma de abrir la página: la instantánea con los md incrustados (`build/html-autonomo`). Funciona en cualquier navegador moderno; en ella se ocultan "Abrir carpeta" y "Reload".
- 2026-10-03 18:35 · Si la carpeta elegida con "Open folder" no tiene `README.md` pero sí una subcarpeta `docs` con él, la página abre esa subcarpeta y lo avisa: suele ser la carpeta del repositorio elegida por error, que mostraría `AGENTS.md` y `CLAUDE.md` como nodos, la raíz duplicada y todas las dependencias rotas (pasó en la primera prueba de Killer Flies). Aceptado por Ronald (18:30).
- 2026-10-04 15:05 · Tercera forma de abrir un proyecto: desde su repositorio de GitHub (`build/github`), en cualquier navegador moderno. La carpeta local se mantiene para trabajar sin conexión; los md no se copian ni se suben a ningún sitio en ninguna de las dos.

## Requirements
- 2026-10-03 08:30 · Derived from build/html-autonomo: la página también se abre con los md incrustados, sin "Abrir carpeta" y en cualquier navegador moderno; Reload se oculta en ese modo.
- 2026-10-04 15:05 · Derived from build/github: un proyecto también se abre desde GitHub; la carpeta local se mantiene para trabajar sin conexión.
