---
title: Paquete de contexto
depends_on: [model, format]
---
## Summary
Al hacer doble clic, copia al portapapeles un prompt corto para arrancar un hilo nuevo sobre ese nodo.
El hilo lee los ficheros por sí mismo, así que el prompt ocupa pocas líneas.

## Decisions
- 2026-10-02 09:00 · Solo rutas: no se pega contenido de los md en el prompt.
- 2026-10-02 09:00 · Lista las rutas relativas al repo en este orden: el nodo, sus ascendientes (desde la raíz) y sus dependencias, incluidas las heredadas de sus ascendientes.
- 2026-10-02 09:00 · Incluye la regla de lectura definida en `format`.
- 2026-10-02 09:19 · Si el nodo es obsoleto, el prompt lo avisa al principio e indica el sustituto si existe.
- 2026-10-02 09:00 · Supone que el hilo nuevo tiene acceso al repositorio.
