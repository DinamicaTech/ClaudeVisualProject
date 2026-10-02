---
title: Formato de los md
depends_on: []
---
## Summary
La convención que permite leer una carpeta de md como un mapa del proyecto, tanto a personas como a asistentes.
Define cómo se corresponden nodos y jerarquía con ficheros, la cabecera, los dos bloques fijos y la regla de lectura de un hilo que trabaja sobre un nodo.

## Decisions
- 2026-10-02 09:00 · Un md por nodo. Una carpeta es un nodo y su `README.md` es el documento del nodo. Cualquier otro md es un nodo hijo de su carpeta.
- 2026-10-02 09:22 · Profundidad sin límite. Un nodo hoja es un fichero (`ui/login.md`); cuando necesita hijos se convierte en carpeta (`ui/login/README.md`). Su ruta de nodo (`ui/login`) no cambia, así que nada de lo que depende de él se rompe.
- 2026-10-02 09:22 · El nombre del nodo no repite el de su padre: el título es `Login`, no `UI-Login`; la ruta ya dice dónde está.
- 2026-10-02 09:00 · Campos de cabecera: `title` (obligatorio) y `depends_on` (lista de rutas de nodo, puede estar vacía).
- 2026-10-02 09:19 · Campos opcionales de cabecera: `status` (`draft`, `stable` u `obsolete`; sin campo cuenta como `stable`) y `replaced_by` (ruta del nodo que sustituye a uno obsoleto).
- 2026-10-02 09:19 · Un nodo obsoleto no se borra: conserva su historia y sus decisiones.
- 2026-10-02 09:00 · Las rutas de nodo son relativas a la raíz de docs, sin extensión y con `/` (p. ej. `viewer/tree`, `format`).
- 2026-10-02 09:00 · Las dos primeras secciones son fijas y en este orden: `## Summary` (máx. 5 líneas, funcional, sin detalle de implementación) y `## Decisions` (una línea por decisión cerrada, que empieza por su fecha y hora: `- AAAA-MM-DD HH:MM · texto`).
- 2026-10-02 09:00 · Los nombres de los campos y de los bloques fijos son sintaxis de la herramienta y van siempre en inglés; el contenido puede ir en cualquier idioma.
- 2026-10-02 09:00 · El contenido libre va después de los bloques fijos.
- 2026-10-02 09:00 · El hilo que cambia un nodo actualiza su Summary y sus Decisions antes de terminar.
- 2026-10-02 09:00 · Regla de lectura de un hilo que trabaja sobre un nodo: leer entero el md del nodo; leer Summary y Decisions de sus ascendientes y dependencias; abrirlos enteros solo si hace falta.

## Ejemplo
```markdown
---
title: Login
depends_on: [security/engine]
---
## Summary
Pantalla de entrada. Autentica al usuario y abre la última empresa usada.

## Decisions
- 2026-10-02 09:15 · Acceso con email y contraseña; sin login social en la v1.
- 2026-10-02 09:15 · Bloqueo tras 5 intentos fallidos, delegado en el motor de seguridad.
```

