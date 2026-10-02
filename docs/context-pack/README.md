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
- 2026-10-02 09:46 · Las rutas relativas al repo se forman con el nombre de la carpeta abierta delante (`docs/viewer/tree.md`): se supone que la carpeta de docs está en la raíz del repositorio.
- 2026-10-02 09:46 · Dependencias listadas: las declaradas por el nodo y por sus ascendientes, sin repetir y sin las que ya salen como ascendientes. No se siguen las dependencias de las dependencias.
- 2026-10-02 09:46 · Se omiten las dependencias a nodos que no existen y los nodos sin documento (carpetas sin `README.md`); la ficha ya los avisa.
- 2026-10-02 09:46 · El prompt está en inglés, incluye además la regla de actualizar Summary y Decisions antes de terminar, y acaba en una línea `Task: ` para escribir la tarea tras pegarlo.
- 2026-10-02 09:46 · Si el portapapeles no está disponible, el prompt se muestra en una ventana para copiarlo a mano.
