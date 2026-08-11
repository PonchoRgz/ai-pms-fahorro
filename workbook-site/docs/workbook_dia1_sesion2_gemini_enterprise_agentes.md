# 📘 Workbook Día 1 - Sesión 2: Gemini Enterprise & Agentes de Negocio
**Curso:** AI for Product Managers  
**Impartido por:** Alfonso Rodríguez (Product Strategy & Operations, Google)  
**Organización:** Collective Academy®  

---

## 🎯 1. Información General y Objetivos de la Sesión

### 📍 Objetivos de Aprendizaje
* Comprender la propuesta de valor diferencial de **Gemini Enterprise** para organizaciones frente a versiones de consumo.
* Conectar datos corporativos privados (Google Drive, Docs, Sheets) mediante **Grounded Search** de forma segura.
* Conocer la **Galería de Agentes** y dominar el **Diseñador de Agentes (*Agent Designer*)** junto con sus paneles de configuración.
* Realizar análisis de brechas (*GAP Analysis*) entre requerimientos de producto y capacidades actuales utilizando **Gemini Notebooks** y múltiples fuentes (PRD, Notas, Capacidades).
* Diseñar un **Agente de Ejecución para Engineering Handoff**, capaz de transformar un PRD en historias de usuario técnicas listas para *Sprint Planning*.

---

## 🏢 2. Gemini Enterprise en el Entorno Corporativo

**Gemini Enterprise** amplía las capacidades del asistente básico al permitir que los modelos interactúen directamente con la propiedad intelectual y los repositorios de datos de la empresa sin comprometer la seguridad ni entrenar modelos públicos con información privada.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          GEMINI ENTERPRISE                             │
├───────────────────────────────────┬────────────────────────────────────┤
│ 🤖 Asistente general              │ 🎨 Generación de Media             │
│ 🔍 Grounded Search (Drive + Web)  │ 🧠 Deep Research                   │
│ 📊 Gemini Notebooks (Deep Context)│ ⚙️ Agentes y Diseñador de Agentes  │
└───────────────────────────────────┴────────────────────────────────────┘
```

### 📊 Comparativa: Consumer vs. Enterprise

| Feature | Consumer | Enterprise |
| :--- | :---: | :---: |
| **App** | ✅ | ❌ |
| **Gmail Search & Summarization** | ✅ | ✅ |
| **Document & Slide Generation** | ✅ | ✅ |
| **Public Web Search (Grounding)** | ✅ | ✅ |
| **Company Internal Context** | ❌ | ✅ |
| **Repeatable Saved Search or Tasks** | ✅ Gems | ✅ Skills |
| **Specialized Agents** | ❌ | ✅ |
| **No-Code Agent Building** | ❌ | ✅ |
| **Spark (24/7 Proactive Personal Agent)** | ✅ | ✅ |

---

## 🤖 3. Galería y Diseñador de Agentes (*Agent Designer*)

### 🏢 Galería de Agentes
La plataforma ofrece un directorio centralizado donde puedes encontrar:
* Agentes hechos por Google.
* Agentes disponibles de tu empresa (creados por otros equipos).
* Agentes que tú creaste usando el Diseñador.

### 🎨 Anatomía del Diseñador de Agentes
El **Diseñador de Agentes** proporciona una interfaz unificada e interactiva para configurar tus agentes.

```
┌───────────────────────────────────┬────────────────────────────────────┐
│      PANEL DE CHAT (Izquierda)    │      PANEL DE DISEÑO (Derecha)     │
│                                   ├────────────────────────────────────┤
│ Interfaz de chat para construir   │ [Flow]     Representación visual   │
│ y refinar el agente usando        │            del workflow.           │
│ lenguaje natural.                 │ [Schedule] Manejar triggers y      │
│                                   │            tiempos de ejecución.   │
│                                   │ [Preview]  Ambiente de pruebas.    │
└───────────────────────────────────┴────────────────────────────────────┘
```

### 🛠️ 2 Maneras de crear un nuevo agente:
1. **Usando un prompt:** Describes en lenguaje natural lo que deseas.
2. **Usando el Flow Builder:** Diseñas el flujo visualmente.

### 💡 Buenas Prácticas
* **Definir objetivos claros.**
* **Empezar pequeño y después expandir.**
* **Break down complex tasks** (Descomponer tareas complejas).
* **Probar, probar y probar.**
* **Instrucciones claras.**

---

## 🔍 4. Análisis Multi-fuente con Gemini Notebooks

**Gemini Notebooks** es un espacio de trabajo donde la IA analiza y responde basándose *exclusivamente* en los documentos que tú le proporcionas, lo que significa **cero alucinaciones externas**.

### Características clave:
* Análisis multi-fuente (PDFs, Drive, web, texto).
* Citas exactas y verificables.
* Generación de Audio Overviews y otros artefactos.

### 📖 Ejercicio de Análisis de Brechas (Gap Analysis)
* **Fuentes a agregar:** Tu PRD, Gemini Notes (notas de reuniones), Product capabilities (capacidades actuales).
* **Prompt sugerido:** 
> *"Identifica todos los requerimientos mandatorios en el PRD y haz un cruce con las capacidades actuales de nuestro producto. Identifica los gaps."*

---

## 🛠️ 5. ¡Manos a la Obra! El Agente de Ejecución (*Engineering Handoff*)

Vas a construir un **Agente de Ejecución** que procesará un PRD de la función "Simple Mode" y generará historias de usuario técnicas.

### Paso 1: Configurar el "Cerebro" del Agente (Conexión a Drive)
El superpoder de Gemini Enterprise es leer los documentos internos.
* Usa la función de **"Conocimiento" (Knowledge/Grounding)** para conectar el agente directamente a la carpeta de Google Drive donde guardaron el PRD y el Slide Deck del "Simple Mode".
* El agente no debe inventar funciones; debe basarse estrictamente en lo definido en esos documentos.

### Paso 2: Definir la Personalidad y las Reglas (Instrucciones del Sistema)
Un buen PM no solo da órdenes, establece límites. Pega esto en las instrucciones del sistema:

```markdown
Eres un Technical Product Manager senior. Tu objetivo es leer el PRD adjunto sobre 'Simple Mode' y extraer las funcionalidades para crear historias de usuario. 

Reglas estrictas: 
1) Usa el formato 'Como [usuario], quiero [acción], para [beneficio]'. 
2) Incluye al menos 3 criterios de aceptación técnicos para cada historia. 
3) Si el PRD no menciona cómo manejar un error de sistema, debes proponer una solución. 
4) Responde siempre en formato de tabla para poder copiar y pegar fácilmente.
```

### Paso 3: Interacción y Refinamiento
Empieza a platicar con tu agente pidiéndole la primera historia de usuario. Busca fallas y refina:
* Si hace una historia gigantesca (un "Epic"), dile: *"Esta tarea es muy grande para un solo ingeniero. Rómpela en 3 tickets más pequeños que se puedan programar en una semana."*
* Pregunta por edge cases: *"Basado en el PRD, ¿qué pasa si el usuario pierde la conexión a internet justo cuando activa el Simple Mode? Escribe el criterio de aceptación para eso."*

> [!NOTE]
> **Integración Avanzada:** ¡Este proceso se puede automatizar aún más! Mediante integraciones (API o MCPs), puedes conectar tu agente directamente con **JIRA** o **Linear** para que, una vez aprobadas, cree los tickets, epics y user stories necesarios de manera automática en el tablero de tu equipo, sin tener que copiar y pegar manualmente.

---

## 📝 Hoja de Trabajo del Alumno

### ✍️ Ejercicio Práctico de Configuración de Agentes

1. **Basado en la estructura vista, define las reglas estrictas para un Agente Evaluador de UX:**

```text
ROL: Lead UX Designer experto en accesibilidad.
OBJETIVO: Evaluar prototipos de interfaz.
REGLAS:
1)
2)
3)
```

2. **¿Qué documentos de tu trabajo diario subirías a un Gemini Notebook para crear un "Audio Overview" tipo podcast que te resuma el estado de tu producto?**
   * *Tu respuesta:* ____________________________________________________________________

---
© Collective Academy® 2026. Todos los derechos reservados.
