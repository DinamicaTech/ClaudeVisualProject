---
title: Reglas del proyecto
depends_on: [format, global-rules, viewer, build/html-autonomo]
status: draft
threads:
  - Reglas del proyecto | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL2RpLubJUYfF1TdAhd63VyF
---
## Summary
Las reglas generales de los prompts (lectura, encaminado, desglose, actualización, drafts, ideas) viven en el nodo `global-rules`; los dos prompts solo piden leerlo y quedan en ruta del nodo, ficheros y Task.
Se cambian en un solo sitio y los drafts pendientes usan siempre las vigentes. Un proyecto sin ese nodo (legacy), o con reglas de una versión anterior, recibe el prompt con las reglas enteras.
La página compara las reglas del proyecto con las suyas y, si faltan o están desfasadas, ofrece "Update rules", que reescribe solo la parte de CVP y respeta las reglas propias del proyecto.

## Decisions
- 2026-10-03 08:16 · Pendiente. Guardado como draft al final del hilo de la hoja de ruta, decidido por Ronald.
- 2026-10-03 08:16 · [replaced by 2026-10-03 14:58] Legacy sin marca: la página mira si el fichero de reglas existe; si no, el prompt repite las reglas como hoy.
- 2026-10-03 08:16 · [replaced by 2026-10-03 14:58] A resolver al construirlo: cada proyecto tiene su copia de las reglas, que queda vieja cuando CVP las mejora, así que la página debe compararla con su versión y avisar. Las reglas personales del propietario (como consensuar antes de programar) van aparte para que una actualización no las pise.
- 2026-10-03 14:58 · Las reglas viven en el nodo `global-rules` (`docs/global-rules.md`), hijo de la raíz y visible en el mapa, elegido por Ronald (14:44) para que el propietario u otro hilo puedan añadir reglas propias. Su sección "CVP rules" va entre marcas con un número de versión y solo la escribe la página; su sección "Project rules" es del proyecto y la página nunca la toca.
- 2026-10-03 14:58 · Legacy sin marca: si el proyecto no tiene nodo `global-rules`, los prompts llevan las reglas enteras, como antes.
- 2026-10-03 14:58 · Versión: la página lleva su número de versión de las reglas y su texto. Las del proyecto están al día si tienen la misma versión y el mismo texto; si la versión es menor, o el texto no coincide (editado a mano o versión sin subir), están desfasadas; si es mayor, son de una página más nueva y se usan tal cual.
- 2026-10-03 14:58 · Con reglas desfasadas, el prompt lleva las reglas enteras de la página más el aviso para que el hilo diga al propietario que pulse "Update rules", y le pide seguir también las "Project rules" del nodo (opción B de Ronald, 14:44). La página muestra el aviso en la cabecera con el botón (ver `viewer`).
- 2026-10-03 14:58 · Las reglas personales del propietario sobre cómo trabajar con él van en `AGENTS.md`, que los asistentes leen solos y la página nunca escribe; `AGENTS.md` apunta además a `global-rules` (opción C de Ronald, 14:44). Las "Project rules" son las del proyecto para cualquiera que trabaje en él (p. ej. el idioma de los docs).
- 2026-10-03 14:58 · `node tools/update-rules.mjs [docs] [--check]` hace lo mismo que "Update rules" desde la línea de comandos. En este repositorio la comprobación "Docs format" falla si `docs/global-rules.md` no tiene las reglas de `index.html`, así que quien cambie las reglas debe subir la versión y regenerar el nodo.

## Requirements
- 2026-10-03 08:13 · Eso, además, nos permitiría inyectar un prompt genérico a aplicar a todo el proyecto y con eso, reducir mucho el prompt de cada tarea puesto que todas las instrucciones generales ya estarían definidas en el nodo raíz del proyecto.
- 2026-10-03 08:13 · Además, podríamos actualizar estas instrucciones generales en un solo sitio de forma que se apliquen en los drafts pendientes.
- 2026-10-03 08:13 · Habría que saber si un proyecto trabaja con instrucciones en la raiz (porque lo hemos creado usando el botón de crear proyecto) o es un proyecto 'legacy' que requiere repetir las instrucciones en cada prompt.
- 2026-10-03 08:16 · draft: Mover las reglas generales de los prompts a un fichero de reglas del proyecto en la carpeta de docs, que el prompt del doble clic solo referencia. Si el fichero no existe (proyecto legacy), repetir las reglas en el prompt como hoy. Avisar cuando el fichero sea de una versión anterior de las reglas y mantener aparte las reglas personales del propietario.
- 2026-10-03 14:44 · Ok, en el caso de que las GlobalRules estén desactualizadas, el hilo insertará las suyas con el aviso de actualizar las globales.
