---
title: Paquete de contexto
depends_on: [model, format]
threads:
  - Hoja de ruta: mejoras | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzLVFRxvSDxqMyLhLQWpW5ipJ
  - Zoom y selector Tree/Project | https://claude.ai/code/project/chan_01GmFabmbZMkMrshz1aTJxzL?thread=cmsg_01GmFabmbZMkMrshz1aTJxzL2rS1irvBBBCJZVEffNsN8p
---
## Summary
Al hacer doble clic, copia al portapapeles un prompt corto para arrancar un hilo nuevo sobre ese nodo. Otro botón copia el prompt para crear una subtarea: un hilo nuevo que crea un nodo hijo y trabaja en él.
El hilo lee los ficheros por sí mismo, así que el prompt ocupa pocas líneas.
Antes de cambiar nada, el hilo lleva la tarea a su nodo responsable (`context-pack/routing`), propone un desglose (qué nodo hace cada parte, buscándolo en el índice de nodos) y espera la confirmación del propietario; después hace el cambio entero en una sola rama.

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
- 2026-10-02 10:38 · El prompt pide además al hilo que añada su enlace al campo `threads` del nodo, si lo conoce.
- 2026-10-02 10:38 · Segundo prompt, "New sub-task" (decidido por Ronald): la persona escribe un título y se copia un prompt que pide al hilo nuevo crear un nodo hijo y trabajar en él. Incluye las rutas del nodo padre, sus ascendientes y dependencias, la plantilla del md nuevo (`status: draft`, `threads` con su enlace) y, si el padre es un fichero hoja, el paso de convertirlo en carpeta (`x.md` → `x/README.md`).
- 2026-10-02 10:38 · El nombre del fichero del nodo hijo sale del título: minúsculas, sin acentos y con guiones (`Búsqueda de nodos` → `busqueda-de-nodos.md`).
- 2026-10-02 10:38 · La página no crea hilos ni escribe ficheros: abrir el hilo es pegar el prompt; quien crea el nodo es el hilo.
- 2026-10-02 11:50 · Los dos prompts piden además al hilo que copie al bloque `## Requirements` del nodo cada requisito que el propietario diga en ese hilo, literal y solo las frases que piden algo. La plantilla del nodo hijo incluye el bloque vacío.
- 2026-10-02 18:55 · Los dos prompts piden, antes de cambiar ningún fichero, un desglose de la tarea y esperar la confirmación del propietario. El hilo lee el título y el Summary de todos los nodos (no solo los listados) y, para cada parte funcional, propone el nodo que la hará (existente o nuevo) y la línea de requisito que se escribirá en él. Se pide siempre, aunque solo afecte a un nodo, para detectar repartos equivocados (por ejemplo, un cambio de modelo de datos no asignado a `model`). Decidido por Ronald (18:42–18:49).
- 2026-10-02 18:55 · Requisitos derivados: en los nodos afectados distintos del de la tarea se escribe "Derived from <ruta del nodo>: <lo que ese nodo debe aportar>". Las frases literales del propietario van al nodo al que pertenecen según el desglose.
- 2026-10-02 18:55 · Cambio atómico: confirmado el desglose, el hilo cambia todos los nodos afectados en una sola rama y la sube en cuanto empieza. Si algún nodo afectado tiene una rama o PR abierto que cambia su md, no empieza: lo dice (título, fecha, enlace del hilo) y espera a que se cierre. No fusiona ni cierra trabajo ajeno sin que el propietario lo pida. Se descartó encolar cambios en nodos ocupados porque deja cambios a medias y puede bloquear nodos entre sí; también una marca `in_progress` en el md, que solo serviría subida a main y quedaría colgada si un hilo se abandona.
- 2026-10-02 18:55 · Los nodos afectados que no son ya dependencia (declarada o heredada) se añaden a `depends_on` del nodo trabajado.
- 2026-10-02 18:55 · La regla de cuestionar y consensuar antes de programar es solo del AGENTS.md de este repositorio, no de los prompts: cada usuario configura su forma de trabajar con su asistente.
- 2026-10-02 19:15 · Para el desglose, el hilo lee el índice de nodos (`context-pack/index`) en vez de todos los md; si no existe, lee el Summary de todos. Si una parte no tiene responsable, pregunta al propietario si hacerla desde el nodo actual o en un nodo nuevo, y propone dónde colocarlo.
- 2026-10-02 19:15 · La regla de actualización pide además regenerar el índice tras cambiar cualquier nodo.
- 2026-10-03 07:50 · Los dos prompts llevan, antes del desglose, el paso de encaminado al nodo responsable (`context-pack/routing`) y la regla de draft: un nodo `draft` sigue así hasta que el propietario valida el cambio y entonces pasa a `stable`.
- 2026-10-03 07:50 · Sustituye en parte a la decisión de las 18:55 sobre requisitos: las frases literales del propietario van al nodo responsable elegido en el encaminado; los nodos que ejecutan partes reciben "Derived from".
- 2026-10-03 08:05 · En un nodo `draft`, el doble clic deja "Task" ya rellenado con su tarea pendiente: sus líneas `draft:` de Requirements sin el prefijo o, si no tiene ninguna, todos sus requisitos. El prompt avisa de que ya están registrados y no hay que copiarlos otra vez. En los demás nodos "Task" sigue vacío, porque sus requisitos son historial. Elegido por Ronald (opción a, 07:57) frente a poner solo una referencia.

## Requirements
- 2026-10-02 18:33 · Sí, serían unos requerimientos indirectos o derivados que han de aparecer (la parte que les corresponda) en los nodos afectados.
- 2026-10-02 18:33 · La regla de cuestionar y consensuar antes de programar sí sería exclusivamente para mi AGENTS.md, no para todos los usuarios de ClaudeVisualProject, asumimos que cada usuario habrá configurado la interacción con Claude según sus preferencias personales, no podemos imponer las nuestras.
- 2026-10-02 18:42 · Lo que sí podría ser muy útil es que al pedir un requerimiento, el prompt mostrase un desglose funcional de este requerimiento y el nodo que lo va a llevar a cabo con una solicitud de confirmación para continuar con el desarrollo o la opción de que el operador pueda acabar de definir el requerimiento o modificar la distribución/asignación de este desglose del requerimiento.
- 2026-10-02 18:49 · Y sí, hay que indicar en el prompt que hay que acceder a todo el árbol para determinar el responsable de ejecutar cada desglose de los requerimientos.
- 2026-10-02 18:49 · Como apunte adicional, si un nodo afectado está pendiente de commit, sería bueno ayudar al operador con un: 'Para completar esta solicitud, hay que derivar una tarea a Modelo de Datos, pero tiene pendiente cerrar el desarrollo XXXX del 17/9/2026. ¿Quieres que lo cierre? No podré ejecutar la petición hasta no tener disponible Modelo de Datos para ejecutar una nueva tarea'
- 2026-10-03 07:50 · Derived from context-pack/routing: los prompts del doble clic y de "New sub-task" piden encaminar la tarea a su nodo responsable antes del desglose, con las cuatro opciones.
- 2026-10-03 07:52 · Vale, si hago doble click en 'Rol de director', que tiene unos requerimientos planteados, estos requerimientos no deberían aparecer al final del prompt que me ha copiado en el portapapeles como 'Task' ?
- 2026-10-03 07:57 · La opción sería a)
- 2026-10-03 07:57 · Si estandarizamos el modo de generar una tarea futura con un 'draft: [XXXXX]' ya se podría resolver eliminando simplemente el prefijo al asignar el contenido de 'task:'.
