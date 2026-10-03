---
title: Comprobación de formato en GitHub
depends_on: [context-pack/index]
threads:
  - Comprobación de formato en GitHub | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLQ6mLVg56b8FLg3Yq9xvAdE
---
## Summary
Una comprobación de GitHub, "Docs format", pone en rojo el PR que deja algún md de docs con avisos de formato: los mismos avisos que muestra la página (dependencia rota, bloque fijo ausente o desordenado, decisión sin fecha, estado desconocido…).
Los ciclos de dependencias no bloquean: se listan, pero la comprobación sigue en verde.
Lo ejecuta `node tools/check-format.mjs docs`, que usa el mismo código de lectura de `index.html` que el índice de nodos (`context-pack/index`), así que no hay avisos duplicados.

## Decisions
- 2026-10-03 07:50 · [replaced by 2026-10-03 14:38] Pendiente. Trasladado desde la hoja de ruta (`roadmap`) a su sitio funcional.
- 2026-10-03 14:40 · Comprobación propia, "Docs format" (workflow `.github/workflows/docs-format.yml`), separada de "Node index", para que el nombre en rojo diga qué falla. Se ejecuta en cada PR y en cada push a `main`.
- 2026-10-03 14:40 · Revisa la carpeta de docs entera tal como queda tras el PR, no solo los md que cambia. El 2026-10-03 `main` tenía 0 avisos en 31 nodos.
- 2026-10-03 14:40 · Bloquea cualquier aviso de formato salvo los de ciclo de dependencias ("Dependency cycle between …" y "Depends on itself."), que el modelo permite; esos se listan marcados como `[allowed]`. Decidido por Ronald (14:35).
- 2026-10-03 14:40 · El script `tools/check-format.mjs` (Node, sin paquetes) toma los avisos del modelo de `index.html` con `tools/page-model.mjs`, el mismo cargador que usa `tools/build-index.mjs`. Un aviso nuevo en la página se comprueba solo, sin tocar el script.
- 2026-10-03 14:40 · Consecuencia: un cambio que introduce algo que la página aún no conoce (p. ej. un `status` nuevo) tiene que enseñárselo al modelo en el mismo PR, o el PR sale en rojo.
- 2026-10-03 14:38 · Validado por Ronald: deja de ser draft.
- 2026-10-03 15:55 · Los avisos de revisión (`model/avisos-de-desactualizacion`) no son avisos de formato: la comprobación no los mira y nunca pone un PR en rojo por ellos.

## Requirements
- 2026-10-03 08:00 · draft: Hacer que un PR salga en rojo en GitHub si deja un md con avisos de formato, reutilizando los avisos de la página como ya hace el índice de nodos.
- 2026-10-03 14:35 · Ok, los ciclos no se bloquean
- 2026-10-03 15:55 · Derived from model/avisos-de-desactualizacion: los avisos de revisión no bloquean el PR.
