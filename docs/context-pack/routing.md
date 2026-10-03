---
title: Encaminado al nodo responsable
depends_on: [context-pack/index]
threads:
  - Hoja de ruta: mejoras | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVFRxvSDxqMyLhLQWpW5ipJ
---
## Summary
Una tarea arrancada en un nodo (por ejemplo, la raíz) se desplaza al nodo funcionalmente responsable de ella antes del desglose.
Si no es el nodo seleccionado, el hilo ofrece al propietario: arrancar en el seleccionado, crear un nodo nuevo (con su ruta completa), arrancar en el mejor candidato o guardarla como draft en su sitio funcional.
El nodo elegido es el nodo de trabajo: recibe las palabras del propietario y el enlace del hilo.

## Decisions
- 2026-10-03 07:50 · Lo decide el hilo, no la página: los dos prompts (doble clic y "New sub-task") llevan un paso de encaminado antes del desglose, que usa el índice de nodos.
- 2026-10-03 07:50 · El nodo responsable es el que funcionalmente le corresponde a la tarea, no el más afectado; puede no ejecutar ninguna parte del desglose.
- 2026-10-03 07:50 · Si coincide con el nodo seleccionado (o con el hijo propuesto en "New sub-task"), no se pregunta nada y se pasa al desglose. Si no, se pregunta con las cuatro opciones, una por línea y con una recomendada, y se espera la respuesta.
- 2026-10-03 07:50 · En "New sub-task" la primera opción es crear el hijo propuesto (la ruta recomendada); las otras tres son las mismas.
- 2026-10-03 07:50 · "Guardar como draft" crea el nodo en la ruta funcional que le corresponde, con `status: draft` y las palabras del propietario en Requirements, y el hilo se detiene. No se guardan en `roadmap`: así se ven dentro de su zona y se pueden atacar por zonas; la vista `viewer/drafts` los reúne todos.
- 2026-10-03 07:50 · Un draft arrancado en su sitio es ese mismo nodo: se trabaja en él y pasa a `stable` cuando el propietario valida el cambio. Solo se borra si se desplaza a otro nodo existente; ese nodo recibe sus requisitos con sus fechas originales y la decisión "Takes over the draft <ruta> (<título>)", que queda en `viewer/log`.
- 2026-10-03 07:50 · El nodo elegido sustituye al seleccionado como nodo de trabajo: sus ascendientes y dependencias se leen según la regla de lectura, y él recibe las frases literales del propietario y el enlace del hilo. Los nodos que ejecutan partes reciben "Derived from".
- 2026-10-03 07:50 · La regla también está en AGENTS.md de este repositorio.
- 2026-10-03 08:05 · Prefijo `draft:`. Una frase del propietario que empieza por "draft:" pide guardar una tarea pendiente, no hacerla; una frase que la aplaza ("más adelante revisaremos X") también, y el hilo la deduce. El hilo propone la ruta del draft y la línea exacta "draft: <tarea>", redactada como instrucción autónoma, y espera el OK. En Requirements del draft queda esa línea; si la dedujo el hilo, encima queda la frase literal del propietario.

## Requirements
- 2026-10-03 07:23 · Poder arrancar una tarea en un nodo y que esta tarea se desplace al nodo más adecuada para ejecutarla.
- 2026-10-03 07:23 · Eso permite, por ejemplo, añadir una tarea en el nodo raíz y que esta descienda al nodo más adecuado para ejecutarla en lugar de iniciarse en el nodo raíz.
- 2026-10-03 07:23 · No sería el que más se ve afectado si no el que funcionalmente sea el responsable idea de esa tarea, podría incluso pasar que es nodo realmente no ejecutase ningún desglose de esa tarea.
- 2026-10-03 07:23 · Y aquí un giro adicional, si no encuentras ningún nodo 'ideal' y ves que funcionalmente tiene sentido crear un nodo para esa tarea, proponérselo al usuario.
- 2026-10-03 07:23 · Al usuario se le pediría algo como: Arrancar la tarea en el nodo seleccionado / Crear un nuevo nodo XXX (indicando la ruta completa dentro del árbol) / Arrancar en el nodo YYY (el mejor candidato que se ha encontrado) / Guardarlo como Draft a falta de decidir
- 2026-10-03 07:34 · Es más fácil de entender un draft si lo vemos dentro de su nodo y además permite 'limpiar' drafts por zonas funcionales (por ejemplo, vamos a ejecutar todos los desarrollos pendientes del motor de email).
- 2026-10-03 07:34 · Un draft que ha pasado a tarea de elimina, siempre podremos consultar qué pasó con él desde la nueva pestaña 'log'
- 2026-10-03 07:34 · Me parece bien seguir el mismo criterio, sí proponiendo la ruta recomendada.
- 2026-10-03 07:57 · Lo primero sería estandarizar que el prefijo draft implique la creación de una tarea pendiente, ese prefijo puede ser explicitado por el operador o deducido por contexto ('más adelante revisaremos [XXXX]' -> draft: [XXXXX]).
