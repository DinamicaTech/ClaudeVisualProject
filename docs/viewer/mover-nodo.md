---
title: Mover nodo
depends_on: [viewer/rename, viewer/map, context-pack/index]
threads:
  - Mover nodo | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLRhnxFYo5RpxrXySTFtZp98
---
## Summary
Mover un nodo (con sus descendientes) a otra rama del árbol desde la página, actualizando todas las referencias a sus rutas, como ya hace Renombrar.
Se activa el interruptor "Tree edit mode" del mapa y se arrastra la tarjeta del nodo sobre la de su nuevo padre. Un diálogo pide confirmar el nombre y qué dependencias heredadas se conservan, y muestra los ficheros que se mueven y se editan.
Al terminar, la página regenera el índice de nodos y recarga.

## Decisions
- 2026-10-03 08:22 · Pendiente. Guardado como draft, decidido por Ronald.
- 2026-10-03 08:47 · Arrastrar y soltar en el mapa, solo con el interruptor "Tree edit mode" encendido, para no cambiar el árbol sin querer. Fuera de ese modo, arrastrar sigue moviendo el mapa. Decidido por Ronald a las 08:37. No se guarda tras F5 y no aparece en la instantánea.
- 2026-10-03 08:47 · Soltar una tarjeta sobre otra la hace hija de esa. El destino se marca en azul si es válido y en rojo si no; no se puede mover la raíz, ni mover un nodo bajo sí mismo o un descendiente suyo, ni dejarlo donde ya está.
- 2026-10-03 08:47 · "Reordenar" es cambiar de padre: el orden entre hermanos es alfabético y no se guarda en ningún sitio.
- 2026-10-03 08:47 · Si el destino es una hoja (`x.md`), pasa a ser carpeta (`x/README.md`) para alojar el nodo; su ruta de nodo no cambia y no se divide ningún md. Decidido por Ronald a las 08:37–08:39.
- 2026-10-03 08:47 · Las dependencias declaradas (funcionales) no cambian. Las jerárquicas que pierde (su padre y antepasados actuales, y lo que heredaba de ellos) se listan con una casilla marcada por defecto: las marcadas se añaden a su `depends_on`, y sus descendientes las heredan de él. Las que gana por su nuevo sitio se muestran y no son opcionales. Una carpeta sin `README.md` no puede conservarlas. Decidido por Ronald a las 08:37.
- 2026-10-03 08:47 · El diálogo propone el nombre actual; si ya existe uno igual en el destino, propone `nombre-2` (o el primero libre) y no deja confirmar un nombre que choque. Decidido por Ronald a las 08:37.
- 2026-10-03 08:47 · El diálogo avisa siempre de que mover ficheros con trabajo abierto en otra rama crea conflictos; la página no puede saberlo (`viewer/map/nodos-ocupados`).
- 2026-10-03 08:47 · Usa la misma escritura que Renombrar: se planifica de nuevo con lo que hay en disco, primero se copia y al final se borra lo viejo. Después regenera `.index.md` si la carpeta lo tiene y recarga la página con el nodo seleccionado en su nuevo sitio.
- 2026-10-03 10:30 · Validado por Ronald a las 10:29 (probado moviendo un nodo obsoleto): pasa a stable.

## Requirements
- 2026-10-03 08:22 · Y sí, poder mover nodos del árbol acabará siendo necesario.
- 2026-10-03 08:22 · draft: Mover un nodo a otra rama, actualizando todas las referencias, como hace Renombrar.
- 2026-10-03 08:37 · a) Lo ideal es hacer un Drag&Drop aunque, efectivamente, tiene el riesgo de modificar el árbol sin querer. Para evitarlo, un switch 'Tree edit mode' que entraría en modo reordenación de nodos
- 2026-10-03 08:37 · b) Sí, permitirlo.
- 2026-10-03 08:37 · c) Tenemos dependencias jerárquicas y funcionales. Las funcionales no varían, las jerárquicas, efectivamente, se convertirían en funcionales (las antiguas) y se añadirían las nuevas jerárquicas. Confirmar al operador si quiere mantener la dependencia del nodo padre actual, las nuevas jerárquicas no deberían ser opcionales.
- 2026-10-03 08:37 · d) Ok, un F5 automático
- 2026-10-03 08:37 · e) Sí, proponer un nuevo nombre y validarlo con el operador
- 2026-10-03 08:37 · f) Ok, con el aviso, aunque resolveremos antes la visualizacion de nodos ocupados para que haya una pista visual
- 2026-10-03 08:37 · No se puede mover la raiz ni a un nodo inferior al seleccionado.
- 2026-10-03 10:29 · Ok, he hecho la prueba con un nodo obsoleto y ha funcionado perfecto. Validación completada.
