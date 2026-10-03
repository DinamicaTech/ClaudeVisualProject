---
title: Reglas del proyecto
depends_on: [format]
status: draft
---
## Summary
Las instrucciones generales de los prompts (lectura, encaminado, desglose, requisitos, drafts) pasan a un fichero de reglas en la carpeta de docs; el prompt del doble clic solo lo referencia y queda en rutas y Task.
Se cambian en un solo sitio y los drafts pendientes usan siempre las vigentes. Un proyecto sin ese fichero (legacy) sigue recibiendo el prompt largo.

## Decisions
- 2026-10-03 08:16 · Pendiente. Guardado como draft al final del hilo de la hoja de ruta, decidido por Ronald.
- 2026-10-03 08:16 · Legacy sin marca: la página mira si el fichero de reglas existe; si no, el prompt repite las reglas como hoy.
- 2026-10-03 08:16 · A resolver al construirlo: cada proyecto tiene su copia de las reglas, que queda vieja cuando CVP las mejora, así que la página debe compararla con su versión y avisar. Las reglas personales del propietario (como consensuar antes de programar) van aparte para que una actualización no las pise.

## Requirements
- 2026-10-03 08:13 · Eso, además, nos permitiría inyectar un prompt genérico a aplicar a todo el proyecto y con eso, reducir mucho el prompt de cada tarea puesto que todas las instrucciones generales ya estarían definidas en el nodo raíz del proyecto.
- 2026-10-03 08:13 · Además, podríamos actualizar estas instrucciones generales en un solo sitio de forma que se apliquen en los drafts pendientes.
- 2026-10-03 08:13 · Habría que saber si un proyecto trabaja con instrucciones en la raiz (porque lo hemos creado usando el botón de crear proyecto) o es un proyecto 'legacy' que requiere repetir las instrucciones en cada prompt.
- 2026-10-03 08:16 · draft: Mover las reglas generales de los prompts a un fichero de reglas del proyecto en la carpeta de docs, que el prompt del doble clic solo referencia. Si el fichero no existe (proyecto legacy), repetir las reglas en el prompt como hoy. Avisar cuando el fichero sea de una versión anterior de las reglas y mantener aparte las reglas personales del propietario.
