---
title: Modelo de datos
depends_on: [format]
---
## Summary
Lo que la herramienta construye en memoria a partir de la carpeta de docs: los nodos, su jerarquía padre/hijo, sus dependencias cruzadas y los avisos de formato detectados al leer.
Todo lo que muestra el visor y lo que lista el paquete de contexto sale de este modelo.

## Decisions
- 2026-10-02 09:00 · Un nodo tiene: ruta, título, padre, hijos, dependencias, resumen, decisiones y texto completo del md.
- 2026-10-02 09:00 · La jerarquía sale solo de las rutas de fichero; las dependencias, solo de la cabecera.
- 2026-10-02 09:19 · Un nodo tiene además estado (`draft`, `stable`, `obsolete`) y, si es obsoleto, opcionalmente su sustituto.
- 2026-10-02 09:19 · Un nodo es obsoleto en la práctica si lo es él o cualquiera de sus ascendientes.
- 2026-10-02 09:19 · Aviso de dependencia obsoleta: un nodo que depende de uno obsoleto recibe el aviso "depende de un nodo obsoleto", con el sustituto si está declarado.
- 2026-10-02 09:22 · Herencia de dependencias: un nodo hereda las dependencias de todos sus ascendientes. Es la base del paquete de contexto.
- 2026-10-02 09:22 · Los ciclos de dependencias se permiten (a veces son inevitables) y se señalan con un aviso.
- 2026-10-02 09:22 · La jerarquía no tiene límite de profundidad.
- 2026-10-02 09:00 · Avisos de formato en la v1: dependencia a un nodo que no existe, cabecera o título ausente, bloques fijos ausentes o desordenados.

