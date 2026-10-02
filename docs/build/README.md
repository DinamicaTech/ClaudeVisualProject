---
title: Apertura de la página
depends_on: [viewer, model]
---
## Summary
La herramienta es un único fichero HTML fijo que se abre en el navegador. Un botón "Abrir carpeta" permite elegir la carpeta de docs del repo y la página la lee directamente.
Para ver cambios en los docs basta con recargar la página (F5). No hay que instalar ni ejecutar nada.

## Decisions
- 2026-10-02 09:29 · Un HTML fijo con botón "Abrir carpeta"; no hay comando de generación.
- 2026-10-02 09:29 · Los md no se copian ni se suben a ningún sitio: la página los lee de la carpeta local al abrirla y en cada recarga.
- 2026-10-02 09:29 · Navegadores soportados en la v1: Chrome y Edge, los únicos que permiten a una página leer una carpeta local con permiso del usuario.
- 2026-10-02 09:29 · Un comando que genere un HTML autónomo, para publicar o para otros navegadores, queda en el roadmap.
