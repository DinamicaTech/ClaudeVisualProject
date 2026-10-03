---
title: Formato de los md
depends_on: []
---
## Summary
La convención que permite leer una carpeta de md como un mapa del proyecto, tanto a personas como a asistentes.
Define cómo se corresponden nodos y jerarquía con ficheros, la cabecera, los dos bloques fijos, el bloque opcional de requisitos y la regla de lectura de un hilo que trabaja sobre un nodo.

## Decisions
- 2026-10-02 09:00 · Un md por nodo. Una carpeta es un nodo y su `README.md` es el documento del nodo. Cualquier otro md es un nodo hijo de su carpeta.
- 2026-10-02 09:22 · Profundidad sin límite. Un nodo hoja es un fichero (`ui/login.md`); cuando necesita hijos se convierte en carpeta (`ui/login/README.md`). Su ruta de nodo (`ui/login`) no cambia, así que nada de lo que depende de él se rompe.
- 2026-10-02 09:22 · El nombre del nodo no repite el de su padre: el título es `Login`, no `UI-Login`; la ruta ya dice dónde está.
- 2026-10-02 09:00 · Campos de cabecera: `title` (obligatorio) y `depends_on` (lista de rutas de nodo, puede estar vacía).
- 2026-10-02 09:19 · [replaced by 2026-10-03 14:45] Campos opcionales de cabecera: `status` (`draft`, `stable` u `obsolete`; sin campo cuenta como `stable`) y `replaced_by` (ruta del nodo que sustituye a uno obsoleto).
- 2026-10-02 09:19 · Un nodo obsoleto no se borra: conserva su historia y sus decisiones.
- 2026-10-02 09:00 · Las rutas de nodo son relativas a la raíz de docs, sin extensión y con `/` (p. ej. `viewer/tree`, `format`).
- 2026-10-02 09:00 · Las dos primeras secciones son fijas y en este orden: `## Summary` (máx. 5 líneas, funcional, sin detalle de implementación) y `## Decisions` (una línea por decisión cerrada, que empieza por su fecha y hora: `- AAAA-MM-DD HH:MM · texto`).
- 2026-10-02 09:00 · Los nombres de los campos y de los bloques fijos son sintaxis de la herramienta y van siempre en inglés; el contenido puede ir en cualquier idioma.
- 2026-10-02 09:00 · El contenido libre va después de los bloques fijos.
- 2026-10-02 09:00 · El hilo que cambia un nodo actualiza su Summary y sus Decisions antes de terminar.
- 2026-10-02 09:00 · Regla de lectura de un hilo que trabaja sobre un nodo: leer entero el md del nodo; leer Summary y Decisions de sus ascendientes y dependencias; abrirlos enteros solo si hace falta.
- 2026-10-02 10:38 · Campo opcional de cabecera `threads`: lista de los chats que han trabajado el nodo, una línea por chat con el formato `- Título | enlace`. El enlace suele ser una URL; si el chat no tiene URL (p. ej. una sesión local), cualquier texto que lo reabra, como `claude --resume <id>`. Decidido por Ronald.
- 2026-10-02 10:38 · El hilo que trabaja sobre un nodo añade su propio enlace a `threads` si lo conoce.
- 2026-10-02 11:50 · Bloque opcional `## Requirements`, después de Decisions: los requisitos que ha pedido el propietario para ese nodo, con sus palabras literales y solo las frases que piden algo, una línea por requisito con fecha y hora (mismo formato que Decisions). Lo rellena el hilo en el momento, porque después no es fiable separarlos del resto de la conversación. Decidido por Ronald (11:47).
- 2026-10-02 18:55 · En `## Requirements` puede haber también requisitos derivados de otro nodo: "YYYY-MM-DD HH:MM · Derived from <ruta del nodo>: <lo que este nodo debe aportar>". Los escribe el hilo que trabaja en el nodo de origen, tras confirmar el desglose (ver `context-pack`).
- 2026-10-02 19:15 · `.index.md` en la raíz de la carpeta de docs es un fichero generado (ver `context-pack/index`), no un nodo: no se edita a mano. Derived from context-pack/index.
- 2026-10-03 07:50 · `status: draft` significa pendiente o sin validar: una tarea guardada para más tarde en su sitio funcional, o un nodo en el que se trabaja y que el propietario aún no ha validado. Pasa a `stable` (se quita la línea) cuando el propietario valida el cambio.
- 2026-10-03 08:05 · En un nodo `draft`, una línea de Requirements que empieza por `draft:` (tras la fecha) es su tarea pendiente, redactada como instrucción autónoma. Si la redactó el hilo a partir de otra frase, la frase literal del propietario va en la línea anterior.
- 2026-10-03 14:45 · Campos opcionales de cabecera: `status` (`idea`, `draft`, `stable` u `obsolete`; sin campo cuenta como `stable`) y `replaced_by` (ruta del nodo que sustituye a uno obsoleto). `idea` es una idea en debate en `creative-lab`, previa a draft (ver `context-pack/ideas`).
- 2026-10-03 14:45 · En un nodo `idea`, una línea de Requirements que empieza por `idea:` (tras la fecha) es la idea, redactada como frase autónoma.
- 2026-10-03 14:58 · Nodo `global-rules`, hijo de la raíz: las reglas que sigue todo hilo. Tras los bloques fijos lleva `## CVP rules`, entre las marcas `<!-- cvp-rules <versión> begin … -->` y `<!-- cvp-rules end -->`, que escribe la página y no se edita a mano, y `## Project rules`, las del proyecto, que la página nunca toca; en un conflicto mandan las Project rules. Las reglas personales del propietario van en `AGENTS.md`, no en ese nodo.
- 2026-10-03 15:30 · Campo opcional de cabecera `docs_path`, solo en el nodo raíz: la ruta de la carpeta de docs desde la raíz del repositorio, sin barra final (`docs_path: documentacion/specs`). Sin el campo, la carpeta se supone en la raíz del repositorio. En cualquier otro nodo se ignora y da un aviso de formato. Ver `context-pack/carpeta-de-docs`.
- 2026-10-03 16:12 · En un nodo `draft`, una línea de Requirements que empieza por `question:` (tras la fecha) es una duda abierta sobre su tarea, con sus opciones y una recomendación; la deja una carga de requisitos y se resuelve antes de hacer la tarea (ver `context-pack/carga-de-requisitos`).
- 2026-10-03 16:12 · `.requirements-load.md` en la raíz de la carpeta de docs es el fichero de trabajo de una carga de requisitos en curso, no un nodo; se borra al terminarla. Como todo fichero que empieza por punto, la página lo ignora.

## Requirements
- 2026-10-03 07:50 · Derived from context-pack/routing: el significado de `draft` como pendiente o sin validar, y su paso a `stable` al validar.
- 2026-10-03 08:05 · Derived from context-pack/routing: el prefijo `draft:` en las líneas de Requirements de un draft.
- 2026-10-03 14:45 · Derived from context-pack/ideas: añadir el estado `idea` y la línea `idea:` de Requirements.
- 2026-10-03 15:30 · Derived from context-pack/carpeta-de-docs: campo `docs_path` en la cabecera del nodo raíz.
- 2026-10-03 14:58 · Derived from context-pack/reglas-del-proyecto: `global-rules` como nodo de reglas con una sección de CVP no editable y otra del proyecto.

## Ejemplo
```markdown
---
title: Login
depends_on: [security/engine]
threads:
  - Diseño del login | https://claude.ai/code/...
---
## Summary
Pantalla de entrada. Autentica al usuario y abre la última empresa usada.

## Decisions
- 2026-10-02 09:15 · Acceso con email y contraseña; sin login social en la v1.
- 2026-10-02 09:15 · Bloqueo tras 5 intentos fallidos, delegado en el motor de seguridad.

## Requirements
- 2026-10-02 09:10 · Quiero entrar con mi email y no con un usuario aparte.
```
- 2026-10-03 16:12 · Derived from context-pack/carga-de-requisitos: línea `question:` en los drafts y fichero de trabajo `.requirements-load.md`.
