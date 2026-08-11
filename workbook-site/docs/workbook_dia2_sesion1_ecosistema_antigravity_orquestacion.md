# 📘 Workbook Día 2 - Sesión 1: Ecosistema Antigravity: Hub, IDE & Orquestación
**Curso:** AI for Product Managers  
**Impartido por:** Alfonso Rodríguez (Product Strategy & Operations, Google)  
**Organización:** Collective Academy®  

---

## 🎯 1. Información General y Objetivos de la Sesión

### 📍 Objetivos de Aprendizaje
* Dominar el paradigma **Antigravity 2.0** y el cambio mental de programador pasivo a **Director de Producto u Orquestador de Agentes**.
* Comprender la tríada del ecosistema: **Antigravity Hub (Desktop)**, **Antigravity IDE** y **Antigravity CLI**.
* Configurar el contexto global mediante **Rules**, paquetes de conocimiento reutilizables (**Skills / `SKILL.md`**) y conectores **MCP (Model Context Protocol)**.
* Construir 3 Skills especializadas para la gestión diaria de producto (*Triage de Feedback, Release Comms y Competitor Scanning*).
* Entender cómo prototipar y construir flujos en **Antigravity IDE**.
* Diseñar e implementar **Workflows Multiagente** autónomos utilizando el sistema de archivos Markdown (`soul.md`, `agents.md`, `memory.md`).

---

## 🚀 2. Antigravity 2.0: El Cambio de Paradigma Mental

> 💡 **Nota del Presentador:** Inspirado en la visión de Andrew Yan-Tak Ng, el paradigma de desarrollo con IA está evolucionando drásticamente hacia flujos de trabajo agénticos (Agentic Workflows).

```
┌────────────────────────────────────────────────────────────────────────┐
│                   VIEJO MODELO MENTAL (Old Model)                      │
│  El desarrollador escribe el código línea por línea, usando la IA      │
│  como una herramienta de autocompletado glorificada.                   │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   NUEVO MODELO MENTAL (New Model)                      │
│  El desarrollador es ahora un Director o PM que define resultados,     │
│  criterios de aceptación y features, mientras múltiples agentes        │
│  planean, ejecutan y verifican a través de espacios de trabajo         │
│  independientes.                                                       │
└────────────────────────────────────────────────────────────────────────┘
```

### 🎛️ Centro de Mando para Agentes de IA
Es una aplicación de escritorio independiente (macOS, Windows y Linux) para supervisar, orquestar y ejecutar múltiples agentes autónomos en paralelo.

**¿Para qué sirve?**
* **Automatizar flujos de trabajo complejos:** Delegar la planificación, creación de código, pruebas y ejecución de tareas a asistentes de IA que trabajan por su cuenta.
* **Funciona de manera asíncrona.**


### 🛠️ Las 3 Caras del Ecosistema Antigravity (Diferencias)

1. **Antigravity 2.0 (Hub / Desktop App)**
   * **Enfoque:** Panel visual de control y orquestación multiagente. Es un centro de mando para automatizar flujos de trabajo complejos y funciona de manera asíncrona.
   * **Para quién es:** Ideal para PMs que buscan coordinar tareas, revisar planes, monitorear el progreso de varios agentes y programar automatizaciones sin escribir código.

2. **Antigravity IDE**
   * **Enfoque:** Entorno de desarrollo tradicional integrado con agentes (code-first). Base familiar (Visual Studio Code).
   * **Para quién es:** Pensado para desarrolladores/PMs técnicos que quieren explorar, editar y refactorizar manualmente mientras un agente apoya en tiempo real.

3. **Antigravity CLI**
   * **Enfoque:** Interfaz ultraligera para la terminal de comandos.
   * **Para quién es:** Perfiles técnicos que buscan máxima velocidad sin elementos visuales, asumiendo que eres un ingeniero de software.

---

## ⚙️ 3. Antigravity Hub: Contexto y Configuración

El **Antigravity Hub** es una herramienta *prompt-first* y un asistente general con proyectos, carpetas, permisos y controles. Te permite usar comandos (`/grill-me`, `/browser`, `/plan`, `/goal`), manejar *worktrees*, invocar subagentes, programar tareas asíncronas y evitar que tu computadora entre en reposo.

Su configuración se basa en 3 elementos clave:

```
┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│ RULES            │         │ SKILLS           │         │ MCPs             │
│ Instrucciones    │         │ Paquetes de      │         │ El "USB-C" de las│
│ globales y       │         │ conocimiento     │         │ IAs para conectar│
│ persistentes.    │         │ bajo demanda.    │         │ APIs y DBs.      │
└──────────────────┘         └──────────────────┘         └──────────────────┘
```

### 🧩 ¿Qué es un Skill (`SKILL.md`)?
Un **Skill** es un paquete de conocimiento en formato de carpeta que contiene un archivo principal `SKILL.md` con instrucciones claras para que el agente realice tareas especializadas. Transforma al LLM de un modelo generalista a un experto en tus estándares.

**Características principales:**
* **Reutilizables:** Se construyen una vez y se invocan siempre que se necesiten.
* **Estandarizados:** Mantienen el formato y la estructura visual en todas las ejecuciones.
* **Ejecutan Scripts:** Pueden invocar scripts auxiliares (Python, Bash, etc.) para tareas complejas.

> 💡 **Nota del Presentador:** Los Skills actúan como un puente de contexto. Ayudan a mantener la ventana de contexto "limpia" y simple, cargando el conocimiento avanzado *on-demand* (solo cuando es necesario) en lugar de saturar el prompt principal del agente.

#### Ciclo de Vida de un Skill:
1. **Descubrimiento:** Al iniciar, el agente lee únicamente la metadata (YAML frontmatter) de todos los skills disponibles.
2. **Coincidencia:** El agente compara la intención del usuario con las descripciones para evaluar relevancia.
3. **Activación:** Si un skill aplica, el agente lee el contenido completo del `SKILL.md` para cargar instrucciones.
4. **Ejecución:** El agente sigue los pasos descritos y ejecuta scripts auxiliares si es necesario.

#### Métodos de Activación:
* **Activación Implícita (Invocación Autónoma):** No necesitas pedirlo explícitamente. Dices *"Crea tests unitarios"*, y se activa automáticamente.
* **Activación Directa (Slash Commands):** Cada skill se convierte en un comando de terminal (ej: `/refactor-ui`, `/commit-format`).

### 📝 Anatomía de un archivo `SKILL.md`

```markdown
---
name: nombre-del-skill
description: Requerido. Describe qué hace y cuándo activarse. Usado por el router del agente.
---

# Objetivo & Pasos
Instrucciones paso a paso que el agente ejecutará una vez activado el skill.

# Restricciones
Reglas estrictas de "Lo que NO se debe hacer" (ej. no borrar bases de datos).
```

### 🔌 ¿Qué es un MCP (Model Context Protocol)?
Es el **"USB-C" de las IAs**: un protocolo estándar universal que elimina la necesidad de escribir integraciones personalizadas para cada base de datos, API o herramienta que quieras conectar a un modelo. Puedes pedirle al agente que haga la conexión por ti.

### 🌟 ¿Qué más puedes hacer en el Hub?
* **Comandos y Atajos:**
  * `/grill-me`, `/browser`, `/plan`, `/goal`
  * `@ Conversaciones` para citar contexto de otros hilos
* **Gestión y Seguridad:** Control de permisos por default.
* **Organización:** Soporte para *Worktrees*.
* **Automatización:** Programar tareas (*Scheduled tasks*) y opción de *Prevent Sleep*.
* **Escalabilidad:** Subagentes (siguiente tema a detalle).

---

## 🛠️ 4. Manos a la Obra: Creación de 3 Skills para PMs

Construiremos 3 Skills dentro de Antigravity Hub para automatizar tareas repetitivas:

### 📥 Skill 1: `triage-simple-mode` (User Feedback Triage)
* **Escenario:** Recibiremos cientos de comentarios desestructurados (reseñas, tickets, quejas). Leerlos y categorizarlos toma horas.
* **Materiales:** [Muestreo de Comentarios de Usuarios](https://docs.google.com/document/d/162b3Hb8A3acOmrHHhJZK-EfzPQJCqpr4nKLkTtDkX94/edit?tab=t.0)
* **Flujo:** Usa Antigravity Hub con reseñas simuladas para iterar el prompt hasta lograr que clasifique en *Bug*, *Mejora de UX*, o *Nueva Funcionalidad*. Una vez perfeccionado, pide al agente crear el skill para automatizar este análisis cada semana.

### 📢 Skill 2: `generar-release-comms` (Release Notes & Comms)
* **Escenario:** Al haber una actualización, el PM escribe notas de lanzamiento (App Store), un mensaje motivacional (Slack) y un manual (Soporte). Todo con la misma info pero distinto tono.
* **Materiales:** [Reporte de tickets de JIRA](https://docs.google.com/document/d/1yZMcgYuds7ulPFrv5q1q7ez4SaFK0woMuIHy0CSIIUY/edit?tab=t.0#heading=h.7oq56585cakm)
* **Flujo:** Sube al Hub los "tickets cerrados". Itera hasta que genere los tres documentos con formato, longitud y tono exactos. Luego, crea el skill para que en el futuro el agente lo haga automáticamente.
> 💡 **Nota:** En lugar de exportar un reporte, se puede hacer la integración directamente con JIRA mediante un MCP para un nivel más alto de automatización, pero esto requiere la integración de JIRA por parte del equipo de TI.

### 🔍 Skill 3: `monitor-competencia-ux` (Competitor Feature Scanner)
* **Escenario:** Monitorear constantemente qué hacen los competidores es tedioso.
* **Flujo:** Pide al agente usar sus capacidades de navegación (`/browser`) para visitar páginas de competidores y extraer cómo manejan interfaces para adultos mayores, creando una tabla comparativa contra el PRD de Simple Mode. Convierte esto en un skill.
* 💡 **BONUS:** Crea una tarea programada para que el agente ejecute el análisis en automático cada mes.

---

## 💻 5. Antigravity IDE: Flujos Code-First

### ¿Qué es Antigravity IDE?
* **Entorno nativo de IA:** Entorno de desarrollo integrado (IDE) nativo de IA diseñado para flujos de trabajo enfocados en código (code-first).
* **Base familiar:** Construido sobre la arquitectura de Visual Studio Code, manteniendo la interfaz, comandos y extensiones que los desarrolladores ya conocen.
* **Control directo:** Permite explorar, editar y refactorizar la base de código directamente en el entorno de trabajo, sin necesidad de copiar o pegar texto externo.
* **Integración con IA:** Conecta agentes de IA directamente con el sistema de archivos del proyecto para ejecutar cambios en tiempo real.

### Componentes Principales (Overview)
1. **Explorador de Archivos y directorios:** Para visualizar la estructura del proyecto.
2. **Escritorio de trabajo:** Área de edición de código tradicional.
3. **Agent Chat:** Interfaz para interactuar en lenguaje natural con el agente y el código.

### Capacidades y Casos de Uso
* **Edición y ejecución en tiempo real:** Diagnostica errores, aplica parches e implementa nuevas funciones directamente sobre los archivos del proyecto.
* **Recomendación de tech stack:** Analiza los requerimientos de tu producto y sugiere las mejores tecnologías, bibliotecas y arquitecturas para tu desarrollo.
* **Navegación contextual del código:** Entiende la estructura global del repositorio para realizar cambios coherentes en múltiples archivos a la vez.

#### ¿Para qué sirve?
* Prototipado rápido de aplicaciones web y software.
* Automatización de refactorización y resolución de bugs en proyectos existentes.
* Aceleración del paso de requerimientos de producto a código funcional.

### Flujo Recomendado
1. **Plan**
2. **Prototipo**
3. **Añadir Funcionalidad**
4. **Probar y Verificar**
5. **Lanzar Funcionalidad**
6. **Lanzar Producto**

---

## 👥 6. Multi-Agent Workflows: El Escuadrón Autónomo

Pasar de un Agente Individual a un Flujo Multiagente significa convertirse en el Director de Producto. El Orquestador recibe la instrucción, divide el trabajo y delega tareas a otros agentes expertos (`@ux_agent`, `@qa_agent`, `@backend_agent`).

### 🧠 El Sistema de Archivos (El Cerebro del Agente)

| Archivo | Función / Contenido |
| :--- | :--- |
| **`soul.md` o `gemini.md`** | **Identidad (ADN):** Define el carácter, reglas y límites. Es el "Gem" llevado al nivel del código. |
| **`agents.md`** | **Organigrama / Directorio:** Catálogo de expertos disponibles. Define a quién llamar y las capacidades de cada subagente. |
| **`memory.md`** | **Continuidad:** Insights destilados a largo plazo (`MEMORY.md`) y *Daily logs* (`memory/YYYY-MM-DD.md`) con las notas crudas. Como los agentes se reinician limpios, el agente anota sus avances aquí para tener continuidad perfecta entre sesiones. Text > Brain. |

---

## 🏢 7. Manos a la Obra Final: Sistema Multiagente para el Kit de Lanzamiento

### 📖 Escenario del Ejercicio
*Simple Mode* saldrá al mercado. Un lanzamiento en una empresa de salud requiere campañas de comunicación, guías de atención al cliente y aprobaciones legales.

### Arquitectura (`agents.md`)
* **Orquestador (PM):** Lee el PRD y da la señal de arranque en hilos paralelos.
* **Agente de Marketing:** Crea un correo de anuncio persuasivo para los clientes.
* **Agente de Soporte:** Redacta un manual de 5 preguntas frecuentes para el call center.
* **Agente Legal (Compliance):** Revisa el trabajo de los dos agentes anteriores en busca de riesgos.

### Configuración
* **`soul.md` de Legal:** *"Eres un abogado estricto de Farmacias del Ahorro. Si un texto promete curar enfermedades o confunde al usuario, recházalo y exige cambios"*.
* **`memory.md` (Orquestador):** Un archivo en blanco. El Orquestador registra aquí el estatus en tiempo real de cada pieza (Ej: *Marketing = En Revisión, Soporte = Aprobado*).

### Flujo de Ejecución
1. **Arranque:** Orquestador manda el PRD a Marketing y Soporte en hilos separados.
2. **Trabajo Paralelo:** Marketing escribe el correo mientras Soporte hace la guía. Ambos trabajan simultáneamente.
3. **Pase a Legal:** Cuando terminan, ambos agentes mandan sus borradores directamente al Agente Legal, sin pasar por el Orquestador.
4. **Validación:** Legal analiza los textos. Si encuentra un error (por ejemplo, sugerir que la app da consultas médicas), rechaza el texto y se lo regresa a Marketing con instrucciones de corrección. Decide si vuelve con ellos o ellos mismos trabajan en corregir.
5. **Consolidación Final:** Cuando Legal aprueba ambas piezas, le avisa al Orquestador. El Orquestador compila todo y lo guarda como un **"Kit de Lanzamiento"** definitivo.

---

## 📝 Reflexión y Cierre
* ¿Qué parte del proceso cambió más tu forma de pensar?
* ¿Qué caso real de tu equipo podrías trabajar con este método en los próximos 30 días?
* Si tuvieras que delegar hoy mismo una de tus tareas semanales más repetitivas a un subagente, ¿cuál sería y qué reglas le pondrías en su `soul.md`?
* De las 3 interfaces (Hub, IDE, CLI), ¿cuál sientes que se adapta mejor a tu estilo de trabajo actual y por qué?
* ¿Qué base de datos o herramienta interna de tu empresa crees que tendría el mayor impacto si la conectaras a tus agentes usando un MCP?

---

<details>
<summary><b>👀 Prompt de ayuda para el proyecto final (haz clic para revelar)</b></summary>
<br>

**Prompt:**

Actúa como un ingeniero experto en flujos Agentic. Necesito que crees físicamente en mi directorio actual una estructura de archivos para un equipo de agentes autónomos que gestionarán el lanzamiento del feature 'Simple Mode' de Farmacias del Ahorro.

Por favor, crea la siguiente estructura de carpetas y archivos, asegurándote de usar tus herramientas para escribirlos en el disco. No omitas ningún archivo.

1. **Estructura de Carpetas a Crear:**
   - Carpeta raíz: `agentes_simple_mode/`
   - Subcarpetas dentro de la raíz: `memory/` y `subagents/`
   - Carpetas dentro de subagents: `marketing/`, `soporte/`, `legal/`
   - Dentro de cada una de las 3 carpetas de los subagentes, crea otra subcarpeta vacía llamada `memory/`.

2. **Archivos del Orquestador (PM) en la carpeta raíz:**
   - `agents.md`: Define la arquitectura. El Orquestador delega a Marketing y Soporte en paralelo. Ellos le pasan su trabajo a Legal. Legal audita y aprueba o rechaza. Solo al final el Orquestador compila el 'Kit de Lanzamiento'.
   - `Instrucción de Summoning`: Explícale al Orquestador que debe invocar a los subagentes apuntando a `./subagents/marketing` y `./subagents/soporte` con su herramienta invoke_subagent.
   - `Instrucción de Memoria`: Dile estrictamente que no existen las "notas mentales". Todo debe guardarlo en `memory/YYYY-MM-DD.md` (diario) o `MEMORY.md` (largo plazo). Text > Brain.
   - `soul.md`: Es el líder. No redacta, solo coordina, compila el kit final y actualiza el estatus.
   - `memory.md`: Un pizarrón con el estatus actual (Marketing = Pendiente, Soporte = Pendiente).

3. **Archivos de los Subagentes (en sus respectivas carpetas):**
   - `agents.md` para Marketing y Soporte: Diles que cuando terminen, deben invocar a Legal (`../legal`) enviando su borrador. Si Legal rechaza, corrigen y vuelven a enviarlo. Si aprueba, terminan su ejecución y devuelven el resultado al Orquestador. Agrega la misma regla de memoria (Text > Brain).
   - `agents.md` para Legal: Dile que será invocado. Recibe el texto, lo revisa bajo sus reglas, y termina su ejecución respondiendo explícitamente "Aprobado" o "Rechazado con feedback". Agrega la regla de memoria.
   - `soul.md` para Marketing: Redacta correos persuasivos y empáticos.
   - `soul.md` para Soporte: Redacta guías directas de 5 FAQs para el call center.
   - `soul.md` para Legal (Estricto): Protege a la empresa de riesgos médicos. Prohibido prometer curas o sugerir diagnósticos. Rechaza inmediatamente si hay faltas.
   - `memory.md` (para los 3): Archivos en blanco.

4. **Heartbeat (Cronjob):** Finalmente, usa tu herramienta de 'schedule' para programar un cronjob diario (`0 0 * * *`). El prompt debe ser un "Heartbeat Diario" que le recuerde al agente revisar la actividad del día y escribir un resumen en sus archivos de la carpeta `memory/`. No confíes en notas mentales.
</details>
