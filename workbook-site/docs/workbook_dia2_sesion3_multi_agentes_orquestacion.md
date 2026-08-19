# 📘 Workbook Día 2 - Sesión 3: Multi-Agent Workflows: El Escuadrón Autónomo
**Curso:** AI for Product Managers  
**Impartido por:** Alfonso Rodríguez (Product Strategy & Operations, Google)  
**Organización:** Collective Academy®  

---

## 🎯 1. Información General y Objetivos de la Sesión

### 📍 Objetivos de Aprendizaje
* Dominar el rol del Director de Producto al orquestar sistemas multiagente.
* Comprender la arquitectura y el sistema de archivos (`soul.md`, `agents.md`, `memory.md`) que dan autonomía a los agentes.
* Ejecutar un flujo de trabajo paralelo y secuencial entre agentes especializados (Marketing, Soporte, Legal).

---

## 👥 2. Multi-Agent Workflows: De un Asistente a un Escuadrón Autónomo

Pasar de un Agente Individual a un Flujo Multiagente significa convertirse en el **Director de Producto** del sistema. En lugar de intentar resolver flujos complejos en un solo prompt monolítico y secuencial, estructuramos un equipo de trabajo: definimos roles especializados, entregables acotados y un coordinador general.

### ⚡ Subagentes en Paralelo y Descomposición de Tareas
El objetivo es descomponer flujos de trabajo monolíticos y complejos en tareas atómicas y especializadas que puedan ejecutarse de forma concurrente, optimizando tiempos de respuesta (*time-to-completion*) y aislando puntos de fallo.

#### 🔑 Conceptos Clave
* **Desacoplamiento funcional:** Separar tareas analíticas independientes para que no compitan por la misma ventana de contexto.
* **Orquestador (*Parent Coordinator*):** Agente principal responsable de instanciar subagentes (`define_subagent`), disparar su ejecución (`invoke_subagent`), recopilar resultados intermedios y resolver discrepancias o conflictos entre entregables.
* **Aislamiento de fallos (*Fault Isolation*):** Si un subagente específico encuentra un error o genera una salida no válida, solo se reintenta esa subtarea sin reiniciar todo el flujo de trabajo.
* **Condiciones de carrera (*Race Conditions*):** Conflicto que ocurre cuando dos subagentes intentan modificar el mismo recurso (documento, base de datos o estado) al mismo tiempo sin sincronización.

#### 📊 Ejemplo de Aplicación para un PM: Análisis Competitivo y de Mercado
* **Enfoque tradicional (Monolítico):** Un único agente busca datos de 5 competidores secuencialmente, consumiendo minutos y acumulando un contexto tan extenso que degrada la calidad analítica.
* **Enfoque multiagente en paralelo:**
  1. El agente orquestador recibe la instrucción: *"Analizar el panorama de precios de 5 competidores"*.
  2. El orquestador instancia en paralelo 5 subagentes idénticos, asignando a cada uno un competidor específico con instrucciones y fuentes delimitadas.
  3. Cada subagente procesa su investigación de forma simultánea.
  4. El orquestador recibe los 5 informes parciales, ejecuta un paso de síntesis comparativa y genera la matriz final en una fracción del tiempo.

#### ⚠️ Consejos de Implementación y Antipatrones
* **Antipatrón de Sobre-fragmentación (*Micro-agent Sprawl*):** No crees subagentes para micro-operaciones triviales (ej. un subagente solo para formatear una fecha). La sobrecarga de orquestación y consumo de tokens supera el beneficio.
* **Granularidad adecuada:** Delega a subagentes únicamente bloques de trabajo que requieran procesamiento independiente intensivo o acceso a herramientas especializadas distintas.
* **Estrategia de agregación:** Define reglas claras de consolidación en el orquestador para cuando dos subagentes devuelvan datos contradictorios o no concluyentes.

---

### 🧠 El Sistema de Archivos (El Cerebro del Agente)

| Archivo | Función / Contenido |
| :--- | :--- |
| **`soul.md` o `gemini.md`** | **Identidad (ADN):** Define el carácter, reglas y límites. Es el "Gem" llevado al nivel del código. |
| **`agents.md`** | **Organigrama / Directorio:** Catálogo de expertos disponibles. Define a quién llamar y las capacidades de cada subagente. |
| **`memory.md`** | **Continuidad:** Insights destilados a largo plazo (`MEMORY.md`) y *Daily logs* (`memory/YYYY-MM-DD.md`) con las notas crudas. Como los agentes se reinician limpios, el agente anota sus avances aquí para tener continuidad perfecta entre sesiones. Text > Brain. |

### 💾 El Dilema de la Memoria y su Arquitectura
La promesa de la IA generativa es tener asistentes que retienen preferencias históricas y contexto. Sin embargo, la realidad suele ser contaminación cruzada entre proyectos (*context bleed*) y alucinaciones por supuestos desactualizados. 

Para resolver esto, utilizamos un **Modelo de Madurez de Memoria de Nivel 3 (Sistema Estructurado en Texto Plano)**, donde tenemos auditabilidad total, control humano y portabilidad, evitando las "cajas negras". La regla de oro es: *Si no puedes abrir el archivo y editarlo en texto plano, no confíes la memoria de tu producto al modelo.*

**Anatomía del Sistema Memory:**
1. **Imposed Memory (`GEMINI.md` / `soul.md` / *System Instructions*):** Reglas inmutables impuestas por el PM (criterios de calidad, tono, directrices estratégicas).
2. **Scoped Context (`projects/*.md`):** Contexto operativo vivo del producto (PRDs, KPIs de éxito, restricciones técnicas, stakeholders).
3. **Learned Memory (`log.md` / *Daily Logs*):** Bitácora cronológica alimentada por la IA al cierre de cada interacción (decisiones tomadas, bloqueos resueltos).

**Step-by-Step de Implementación:**
* **Paso 1 (Estructurar):** Crear el directorio base con `GEMINI.md`, archivos de contexto de proyecto y logs.
* **Paso 2 (Configurar):** Cargar directrices maestras en `GEMINI.md` o en los Skills.
* **Paso 3 (Ejecutar):** Trabajar sesiones delimitadas forzando la lectura exclusiva del archivo del proyecto activo.
* **Paso 4 (Cerrar y Promover):** Ejecutar un prompt de síntesis al final del sprint (ej. usando tareas programadas o *Scheduled Tasks*) y promover aprendizajes clave a las reglas maestras (Long-term memory).

> [!NOTE]
> La IA olvida con el tiempo. El archivo `memory.md` es un documento vivo. Antes de "irse a dormir", el agente anota ahí sus decisiones (Ej: *"14 de Agosto: Terminé el login, pero hay un bug en la BD. Próximo paso: Arreglar conexión"*). Tú puedes cerrar tu computadora el viernes, abrirla el lunes, y el agente lee este archivo para retomar el trabajo exactamente donde lo dejó. Contexto limpio equivale a decisiones de producto sólidas.
---

## 🏢 3. Manos a la Obra Final: Sistema Multiagente para el Kit de Lanzamiento

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

<details>
<summary><b>🏋️ Stretch Goals (Ejercicios opcionales de ampliación): Haz clic para desplegar</b></summary>

### 1. Agente de Marketing con Investigación Competitiva Autónoma (`/browser`)
* **Objetivo:** Dar al subagente de Marketing la capacidad de investigar antes de crear contenido.
* **Instrucción en `soul.md` de Marketing:** "Antes de redactar el correo de anuncio, invoca la herramienta `/browser` para revisar las promociones actuales en los sitios web de la competencia. Asegúrate de resaltar en nuestro correo al menos 2 ventajas únicas de Simple Mode que la competencia no ofrezca."
* **Entregable:** Correo final auditado por Legal que incluye una sección competitiva basada en datos web en tiempo real.

### 2. Mapeo de Descomposición de un PRD
* **Objetivo:** Diseñar la arquitectura de descomposición concurrente para un requerimiento de producto complejo.
* **Ejercicio:** Toma un requerimiento complejo (ej. *Lanzamiento de un nuevo sistema de pagos / billetera digital para Farmacias del Ahorro*) y diseña en un diagrama o esquema:
  * Qué subagentes se crearían en paralelo (ej. `analisis_regulatorio_fintech`, `ux_benchmark_pagos`, `estimacion_arquitectura_tecnica`).
  * Cuál es el rol y las reglas de agregación del Orquestador.
  * Cómo se previene la sobre-fragmentación (*micro-agent sprawl*) y cómo se manejan posibles discrepancias entre regulatorio y UX.
* **Entregable:** Diagrama de flujo de orquestación con definición de roles, entradas, salidas y puntos de sincronización.

</details>

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

---

## 📝 Hoja de Trabajo del Alumno

### ✍️ Ejercicio de Diseño de Escuadrón Autónomo
1. **Diseña tu propio Escuadrón de Subagentes para automatizar un proceso en tu empresa. ¿Cuáles serían los roles de tus 3 agentes y quién sería el Orquestador?**
   * *Agente 1 (Rol y Tarea):* _______________________________________
   * *Agente 2 (Rol y Tarea):* _______________________________________
   * *Agente 3 (Rol y Tarea):* _______________________________________

---

## 🧠 5. Reflexión y Cierre: El Nuevo Paradigma del Product Management

La IA no solo nos hace más eficientes; **colapsa el costo de construir software funcional**. Históricamente, el ciclo de vida del producto estaba diseñado para *retrasar la construcción* porque el software era caro. Pasábamos semanas en specs, wireframes y diseños estáticos para reducir el riesgo.

Hoy, la IA desplaza todo ese proceso: el esfuerzo requerido para llegar a un prototipo funcional (o incluso un producto completo) se ha reducido drásticamente. 

### 🔄 El Viejo Modelo vs. El Nuevo Modelo
| 😓 The Old Way | 🥳 The New Model |
| :--- | :--- |
| PM → Diseño → Ingeniería (en cascada) | PM + Diseño + Ingeniería (integrados) |
| Semanas de retraso (*lag*) | Construcción en horas |
| Entregas rígidas (*handoffs*) | Iteración colaborativa (*riffing*) |
| Interacción limitada con el cliente | Más tiempo para conversar con el cliente |

### 🚀 La IA nos lleva a "la parte difícil" más rápido
Al delegar lo operativo, podemos enfocarnos en lo estratégico.

* **⚡ Se mueve a velocidad de IA:** Escribir código, enviar software, analizar datos, redactar PRDs y tickets de Jira.
* **👟 Se mueve a velocidad humana:** Hablar con clientes, alinear stakeholders, establecer la marca, fomentar hábitos en los usuarios, definir estrategias y validar en el mercado.

> [!IMPORTANT]
> **En la era de la IA...**
> * La creatividad no pierde importancia; **la creatividad provee el contexto**.
> * El software no se vuelve obsoleto; **el software es un superpoder**.
> * El Product Management no está muerto; **los equipos de producto gestionan lo que realmente importa**.

* ¿Cómo adaptarías esta arquitectura de Escuadrón Autónomo para resolver un cuello de botella real en tu equipo de desarrollo actual?
* Con el tiempo que te ahorra la IA, ¿en cuál de las tareas de "velocidad humana" deberías estar invirtiendo más energía?
* Si tuvieras que delegar hoy mismo una de tus tareas semanales más repetitivas a un subagente, ¿cuál sería y qué reglas le pondrías en su `soul.md`?
* 💬 **Pregunta de debate:** ¿En qué casos la latencia de red y el costo de orquestación (consumo de tokens) hacen que un flujo secuencial sea preferible a uno en paralelo?

---
© Collective Academy® 2026. Todos los derechos reservados.
