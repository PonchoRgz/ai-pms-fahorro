# 📘 Workbook Día 1 - Sesión 1: AI Fundamentals & Workspace
**Curso:** AI for Product Managers  
**Impartido por:** Alfonso Rodríguez (Product Strategy & Operations, Google)  
**Organización:** Collective Academy®  

---

## 🎯 1. Información General y Objetivos de la Sesión

### 🤝 Acuerdos de la Sesión
Para aprovechar al máximo esta sesión de trabajo práctico, nos comprometemos a:
1. **Estar presentes:** Entorno libre de distracciones. Celulares guardados y laptops en uso exclusivo para los ejercicios (tendremos descansos programados).
2. **Sesión de trabajo activa:** Esto no es una clase teórica pasiva; aprendemos haciendo, preguntando y compartiendo experiencias colectivas.
3. **Escucha y participación activa:** Tus dudas y casos reales enriquecen al grupo.
4. **Feedback:** Completar la evaluación al finalizar la jornada.

### 📍 Objetivos de Aprendizaje del Curso
* **AI Fundamentals & Workspace:** Comprender la arquitectura de los LLMs, tokens y Context Engineering.
* **Gems Personalizados:** Construir evaluadores especializados para validar documentación y PRDs.
* **Gemini Enterprise & Agentes de Negocio:** Dominar el diseño de agentes para preparación de reuniones o creación de PRDs.
* **Prototipado en Google AI Studio:** Realizar comparativas de modelos y crear prototipos funcionales (Vibecoding).
* **Ecosistema Antigravity (Hub, IDE & Orquestación):** Implementar skills ejecutables y diseñar sistemas *Multiagent Workflows* con agentes y subagentes autónomos.

### 🧠 Actividad: Recolectemos Pensamientos
Toma unos momentos para reflexionar y comparte con el grupo:
1. ¿Qué tan cómodo/a te sientes usando IA?
2. ¿Para qué usas la IA hoy en día?
3. ¿Qué te gustaría aprender hoy?

---

## 🧠 2. AI Fundamentals para Product Managers

### ¿Qué es realmente un LLM?
Un **LLM (Large Language Model)** es un modelo matemático avanzado entrenado para **predecir el siguiente fragmento de texto (token)** basándose en patrones estadísticos extraídos de volúmenes masivos de datos.

> ⚠️ **Principio fundamental:** Un LLM **no "sabe" ni "entiende"** en el sentido humano. Genera respuestas plausibles a partir de contexto, entrenamiento e instrucciones previo.

```
[ Entradas / Prompt + Contexto ] ──► [ Red Neuronal / Pesos ] ──► [ Predicción Token a Token ]
```

### Conceptos Clave para la Toma de Decisiones
1. **Predicción, no verdad absoluta:** Una respuesta puede sonar impecablemente redactada y segura, pero estar completamente equivocada.
2. **Patrones, no criterio propio:** La IA aporta velocidad de procesamiento de patrones; el **criterio estratégico y de negocio lo aporta el PM**.
3. **El lenguaje como interfaz:** La calidad de la instrucción determina directamente la calidad del pensamiento asistido.
4. **Human-in-the-loop (El humano en el control):** La IA propone opciones y borradores; el profesional evalúa, decide y responde por el resultado.

> 💡 **Nota del Presentador:** *"Muchas veces creemos que el problema es el proceso, pero el verdadero cuello de botella es humano, relacional, político o conversacional (unclear ownership, missing influence, delayed decisions o power dynamics invisibles)."* La IA no resolverá problemas de liderazgo, pero acelerará tu capacidad para abordarlos.

### 💬 Pregunta de Discusión
> Si la IA puede sonar segura aunque esté equivocada, **¿en qué decisiones de tu equipo sería peligroso usarla sin revisión humana?**

---

## 🔬 3. Mecánica de los Modelos: Tokens y Ventana de Contexto

### 🎟️ ¿Qué es un Token?
Los LLMs no leen palabras completas ni letras individuales; dividen el texto en sub-unidades llamadas **tokens**.

* **1 Token $\approx$ 4 caracteres en inglés o 3/4 de una palabra.**
* Signos de puntuación, espacios y sílabas comunes forman tokens independientes (por ejemplo, la palabra "We're" se divide en "We" y "'re").
* *Ejemplo visual de compresión:* 382 caracteres de texto humano pueden convertirse en aproximadamente 94 tokens para el procesamiento interno de la IA. Básicamente, es una demostración de cómo "ven" y calculan el texto las herramientas.

### 🪟 La Ventana de Contexto (*Context Window*)
Imagina la ventana de contexto como un **pizarrón de memoria a corto plazo** de tamaño limitado.

```
┌────────────────────────────────────────────────────────┐
│ [Instrucción Inicial]                                  │  ▲
│ [Contexto del Proyecto / Documentos]                   │  │ Se borra si la
│ [Historial de Conversación...]                         │  │ ventana se llena
│                                                        │  │ (FIFO)
│ [Nueva Pregunta del PM]                                │
└────────────────────────────────────────────────────────┘
```
* A medida que la conversación avanza o le compartes información, el pizarrón se llena.
* Cuando se agota el espacio de tokens, la IA borra lo más antiguo de la parte superior para hacerle espacio a las instrucciones nuevas.
* **Escala de Contexto (Aprox):** 
  * 1 Palabra $\approx$ 1.3 Tokens
  * Ensayo corto $\approx$ 4,000 Tokens
  * Libro mediano $\approx$ 100,000 Tokens
  * Enciclopedia / Repositorio $\approx$ 1,000,000+ Tokens

### 🧠 Modos de Razonamiento
Los modelos modernos ofrecen dos modos principales de procesamiento:

| Característica | Modo Rápido (*Quick / Flash*) | Modo Razonamiento (*Deep Think / Pro*) |
| :--- | :--- | :--- |
| **Mecánica** | Respuestas inmediatas basadas en patrones. | El modelo "piensa internamente" antes de responder. |
| **Consumo de Tokens** | Menor consumo de tokens. | Mayor consumo de tokens (pensamiento invisible). |
| **Caso de Uso Ideal** | Brainstorming, redactar correos, borradores, exploración inicial. | Análisis de brechas complejas, priorización estratégica, detección de contradicciones. |

### 🤖 Chatbots vs. Agentes

* **Chatbot:** Responde a instrucciones en un hilo de conversación de texto pasivo.
* **Agente:** Posee capacidad ejecutiva autónoma: puede consultar bases de datos, ejecutar scripts, agendar reuniones, buscar en la web, conectarse a herramientas externas y enviar emails por sí solo.

---

## 🚨 4. Riesgos y Limitaciones en Producto

Un buen Product Manager sabe en qué momentos **NO** confiar a ciegas en un modelo de IA. La IA puede fallar de formas que parecen sumamente inteligentes:

1. **Alucinaciones plausibles:** Inventar métricas, nombres de APIs o funciones que no existen.
2. **Sobreconclusión:** Extraer tendencias drásticas a partir de muestras de usuarios pequeñas o irrelevantes.
3. **Refuerzo de sesgos:** Reproducir sesgos de género, edad o comportamiento contenidos en los datos de entrenamiento.
4. **Falsa certeza:** Proponer roadmaps o planes de acción que suenan metodológicamente impecables pero son totalmente inoperables en el contexto técnico/político de la empresa.

---

## ✍️ 5. Context Engineering: Del Prompt Débil al Prompt Estructurado

> **Principio:** La IA no mejora solo por darle *más* datos. Mejora cuando le proporcionas **objetivo, contexto, restricciones y criterios de calidad claros**.

### Comparación de Prompts

❌ **Ejemplo de Prompt Débil:**
```text
Analiza estos datos de usuarios y dame recomendaciones.
```

✅ **Ejemplo de Prompt con Context Engineering:**
```text
[ROL] Actúa como un Lead Product Manager para Retail e E-commerce.

[CONTEXTO] Estoy analizando datos de conversión en el checkout para decidir qué intervenciones priorizar este trimestre.

[OBJETIVO] Identifica las 3 oportunidades de mayor impacto operativo que podamos implementar en los próximos 30 días con un equipo de 2 desarrolladores.

[RESTRICCIONES] 
- Separa estrictamente la evidencia directa de tu interpretación.
- Declara explícitamente qué datos NO se pueden afirmar con la información proporcionada.
```

### 📄 Formatos Estructurados Recomendados

Para evitar que el modelo confunda instrucciones con datos, utiliza delimitadores de formato:

#### 1. Markdown (`.md`)
Ayuda al modelo a entender la jerarquía visual de tu prompt.
```markdown
# Objetivo
Identificar los 3 riesgos principales en estos comentarios de usuarios.

## Criterios de Evaluación
- No inventes causas raíz.
- Separa la evidencia técnica de la opinión del usuario.
- Lista qué información adicional requerimos del equipo de QA.
```

#### 2. XML (Etiquetas de Delimitación)
Imposibilita que la IA mezcle datos de entrada con la orden.
```xml
<contexto>
Estamos revisando comentarios abiertos de la encuesta de satisfacción del cliente.
</contexto>

<instruccion>
Identifica patrones repetidos de fallas en el flujo de pago y sintetízalos.
</instruccion>

<formato_salida>
Genera una tabla con 4 columnas: [Tema, Evidencia Directa, Nivel de Riesgo, Acción Sugerida].
</formato_salida>
```

#### 3. CSV (Datos Tabulares Estructurados)
Ideal para enviar datos estructurados de métricas o encuestas sin perder formato.
```csv
tribu,puntaje_csat,comentario_usuario
People,3,"Buena atención pero la app se traba en el login"
Finanzas,2,"El comprobante digital tarda horas en llegar por correo"
Supply,4,"Los tiempos de entrega mejoraron bastante este mes"
```

---

## ⚡ 6. Vibecoding: Construir con el Poder de las Palabras

**Vibecoding** es la habilidad de definir, diseñar y construir soluciones tecnológicas escribiendo código con palabras y no con sintaxis. Vivimos en un mundo en el que puedes construir cualquier cosa que te propongas; el poder de construir cosas ya no está limitado a los desarrolladores de software.

```
  [ Idea / Problema ] 
         │
         ▼ (Vibecoding via LLM)
  [ Especificación / Prototipo Funcional ] 
         │
         ▼
  [ Validación Rápida en Mercado ]
```

### ¿Por qué hacer Vibe-coding?
1. Estar al día con el progreso acelerado de la IA.
2. Es divertido, útil, adictivo y aplicable a tu vida diaria y en el trabajo.
3. Aprendes nuevas maneras de usar tu cerebro, de-construir problemas y ver el mundo.
4. Es una puerta directa al **empoderamiento**. El único límite es tu paciencia... y lograr terminar un proyecto antes de comenzar otro.

### Matriz de Aumento de Productividad
¿Cómo encaja la IA en tus actividades diarias?

```
                    ┌─────────────────────────┬──────────────────────────┐
                    │  No puedo hacerlo       │  Lo podría hacer mejor   │
                    │  (Ej: Crear una web     │  (Ej: Escribir un PRD    │
                    │  interactiva en 1 hora) │  más riguroso)           │
                    ├─────────────────────────┼──────────────────────────┤
                    │  Lo haría más rápido    │  ¡No quiero hacerlo!     │
                    │  (Ej: Resumir 50        │  (Ej: Clasificar 500     │
                    │  encuestas de soporte)  │  tickets de bugs a mano) │
                    └─────────────────────────┴──────────────────────────┘
```

> *"Quiero que la IA haga mi lavado de ropa y trastes para que yo pueda hacer arte y escribir, no que la IA haga mi arte y escritura para que yo tenga que lavar los platos."* — Joanna Maciejewska

### 💬 Reflexión: ¿Cómo empiezo a hacer vibe-coding?
> Mientras hablamos, empieza a pensar en **ideas que te vengan a la mente** en tus flujos diarios que te gustaría intentar automatizar o construir.

---

## 🗺️ 7. Ecosistema de Herramientas de IA de Google

### 🤖 1. Gemini: El Motor Multimodal
**Gemini** es un modelo de lenguaje y asistente de IA multimodal, desarrollado por Google.
Si un LLM tradicional fuera un estudiante que solo aprende leyendo libros de texto, Gemini fue diseñado desde el primer día para aprender usando todos sus sentidos al mismo tiempo: lee textos, escucha audios, mira imágenes, analiza videos y examina código de forma integrada.

* **Multimodalidad nativa:** No requiere parches para reconocer imágenes o voz. Fue entrenado desde cero mezclando diferentes tipos de datos.
* **Ventana de contexto masiva:** Capacidad de procesar hasta 1 millón de tokens (puede "leer" un libro entero o repositorios de código complejos de una pasada).
* **Capacidad Agéntica:** Puede conectarse con herramientas (Workspace, navegador) para ejecutar tareas compuestas.
* **Familias de Modelos:** *Flash* (Velocidad y eficiencia), *Pro* (Complejidad y razonamiento avanzado) y *Ultra / Deep Think* (Máxima capacidad cognitiva).

### 🛠️ 2. La Suite de Herramientas de Google (Clasificación)

Las herramientas de la suite se dividen principalmente en dos grandes grupos según la necesidad técnica y el entorno:

#### A. Basados en Web (Low/No Code)
* **¿Qué son?** Aplicaciones accesibles directamente desde el navegador, donde no necesitas instalar nada ni depender de equipos de TI.
* **Herramientas:** Gemini (App/Workspace) y Google AI Studio.
* **Ventajas:** UI rápida y amigable, fácil de compartir prototipos, ideal para usuarios no técnicos.

#### B. Basados en IDE (Orquestación Agéntica)
* **¿Qué son?** Entornos de desarrollo locales (*Integrated Development Environments*) enfocados en orquestación autónoma. Corren en tu computadora.
* **Herramientas:** Antigravity (Hub, IDE, CLI).
* **Ventajas:** Integración profunda con repositorios locales, bases de datos (vía MCPs) y alta flexibilidad para perfiles técnicos, aunque la curva de aprendizaje inicial puede ser más pronunciada.

| Herramienta | ¿Crea Plan? | Entorno | ¿Soporta Código Complejo? | Integraciones | Uso Principal |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Gemini App** | ❌ No | Web / Móvil | ❌ No | 🟢 Alta (Google) | Interfaz principal de interacción humano-IA. Poder contextual, te conoce bien y usa "Canvas" para iterar código simple o redacción. |
| **Gemini en Workspace** | Solo si lo pides | Apps de Workspace | ❌ No | ❌ No | Ayuda en tu día a día justo donde estás trabajando. |
| **Gemini Enterprise** | Solo si lo pides | Web | ❌ No | ✅ Sí | Trabajar con data interna de tu empresa, creación de agentes simples. |
| **Google AI Studio** | ❌ No | Web | ✅ Sí | ✅ Sí | Mejor combinación entre fácil de usar y poderoso (Low / No code). |
| **Antigravity Hub** | ✅ Sí | Desktop App / Web | ✅ Sí | ✅ Sí | Panel visual poderoso, orquestación de múltiples agentes. |
| **Antigravity IDE** | ✅ Sí | App Local (IDE) | ✅ Sí | ✅ Sí | Entorno de desarrollo profundo, ideal para modificar bases de código. |
| **Antigravity CLI** | Solo si lo pides | Terminal | ✅ Sí | ✅ Sí | Extremadamente poderoso y flexible (ejecución sin interfaz gráfica). |

### 📚 3. Gemini Notebooks
Un espacio de trabajo donde la IA analiza y responde basándose exclusivamente en los documentos que tú le proporcionas (PDFs, Drive, web).
* **Cero alucinaciones externas:** No infiere datos de afuera.
* **Citas exactas:** Muestra de qué documento proviene cada respuesta.
* **Audio Overviews:** Genera resúmenes en formato podcast interactivo.

---

## 🛠️ 8. Manos a la Obra: Ejercicio Integral en Workspace

Vamos a simular el ciclo de vida de una propuesta de producto conectando múltiples herramientas del ecosistema en un solo flujo continuo.

### 📁 Recursos de Trabajo
* 📊 [Hoja de datos de usuarios (Google Sheets)](https://docs.google.com/spreadsheets/d/1l8tQv0mOaRbV2UhFGTQJX3uhfGozb79aY4Bamkj5_3o/edit?gid=0#gid=0)
* 📝 [Transcripciones de entrevistas (Google Docs)](https://docs.google.com/document/d/1jAsNMeHH1zocxEuU8CwBPQik7izlvNxVQnTTw5pT8RQ/edit?tab=t.0#heading=h.6kaqemnseyty)
* 📄 [Plantilla de PRD (Google Docs)](https://docs.google.com/document/d/1EpfU0Ya-g3eukcq2HTtmOTgSHkMterGK_4Ral3hYS_E/edit?tab=t.0#heading=h.d1n3na4164vl)

### 📋 Pasos del Flujo
1. **Limpia y analiza (Google Sheets):** Abre tu [hoja de datos de usuarios](https://docs.google.com/spreadsheets/d/1l8tQv0mOaRbV2UhFGTQJX3uhfGozb79aY4Bamkj5_3o/edit?gid=0#gid=0). Usa la asistencia de Gemini para arreglar el formato de los datos crudos, crear gráficas sencillas y descubrir cuál es el problema oculto que frustra a los usuarios.
2. **Descubre la historia (Gemini Notebooks):** Sube el documento de las [transcripciones de entrevistas](https://docs.google.com/document/d/1jAsNMeHH1zocxEuU8CwBPQik7izlvNxVQnTTw5pT8RQ/edit?tab=t.0#heading=h.6kaqemnseyty), crúzalo con los datos que descubriste en Sheets y pídele a Notebooks que resuma, sin alucinar, qué está pasando realmente.
3. **Define el producto (Google Docs):** Abre la [plantilla de tu PRD](https://docs.google.com/document/d/1EpfU0Ya-g3eukcq2HTtmOTgSHkMterGK_4Ral3hYS_E/edit?tab=t.0#heading=h.d1n3na4164vl) y usa Gemini para redactar la solución y los requerimientos basándote en tu análisis previo. Asegúrate de exigirle un resumen ejecutivo contundente.
4. **Vende la idea (Google Slides):** Finalmente, pídele a Gemini que lea tu PRD recién creado y te genere una presentación ejecutiva que incluya el contexto, la justificación de la función y un *roadmap* tentativo.

---

## 🤖 9. Manos a la Obra: Creación de GEMS Evaluadores de PRDs

En este ejercicio práctico vas a construir un **Comité Evaluador en Gemini (Gems)** para someter a prueba tu PRD o propuesta de producto desde 4 perspectivas críticas distintas. 

### ¿Qué son los Gems?
Son accesos directos configurables. En lugar de copiar y pegar el mismo prompt de instrucciones kilométrico cada vez que desees explorar un tema, puedes crear diferentes Gems para tus necesidades particulares y reutilizarlas.

*(Nota: Más adelante en el curso, veremos cómo los Gems evolucionan a **SKILLs** ejecutables).*

```
                     ┌──────────────────────────────┐
                     │     TU PRD / PROPUESTA       │
                     └──────────────┬───────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│  Valeria (UX)    │       │ Héctor (Tech)    │       │  Rodrigo (CFO)   │
│  "User First"    │       │ "Escéptico"      │       │  "ROI & Margin"  │
└──────────────────┘       └──────────────────┘       └──────────────────┘
                                    │
                                    ▼
                           ┌──────────────────┐
                           │ Don Donato (75y) │
                           │ "Accesibilidad"  │
                           └──────────────────┘
```

### 📋 Guía de Ejercicio: Paso a Paso para Crear tus Gems

Para completar el ejercicio, sigue estos 4 pasos en la plataforma de Gemini:

1. **Abre el Creador de Gems:** Dirígete a la sección de "Crear nuevo Gem".
2. **Bautiza a tu Personaje:** Asígnale un nombre claro y empático para identificar su rol rápidamente (Ej. *Valeria - UX Lead*, *Héctor - Tech Lead*, *Don Donato - 75 años*).
3. **Configura su "Cerebro":** En el cuadro de "Instrucciones", vas a pegar la estructura de tu personaje definiendo 4 ejes fundamentales:
   * **Rol:** ¿Quién es y cuánta experiencia tiene?
   * **Objetivo:** ¿Qué busca evaluar exactamente?
   * **Tono:** ¿Cómo habla? (Ej. Formal, directo, paciente, impaciente).
   * **Reglas de interacción:** ¿Qué comportamientos tiene prohibidos y qué preguntas debe hacer obligatoriamente?
4. **Debate sobre tu PRD:** Una vez creado y guardado, sube tu PRD o presentación y genera el debate simulado, contestando las observaciones que te haga tu Gem.

---

<details>
<summary><b>💡 Haz clic aquí para ver las plantillas de los Prompts (si necesitas ayuda para copiar y pegar)</b></summary>
<br>

Si no deseas crear el *System Prompt* desde cero, puedes copiar la estructura de los siguientes 4 perfiles y pegarla directamente en la caja de instrucciones de tu Gem.

#### 🎨 Gem 1: Valeria – Lead UX Designer (User First)
Ideal para validar si una idea es intuitiva, accesible y fácil de entender.
```markdown
# ROL
Actúa como Valeria, Lead UX Designer con más de 10 años de experiencia en aplicaciones móviles masivas.

# OBJETIVO
Evaluar propuestas de producto y PRDs estrictamente desde la perspectiva de usabilidad, empatía con el usuario y simplicidad visual.

# TONO
Empático, constructivo, curioso y profundamente centrado en la experiencia humana.

# REGLAS DE INTERACCIÓN
1. Cuestiona siempre los flujos de navegación complejos o los nombres ambiguos en la interfaz.
2. Utiliza terminología profesional como: microcopia, puntos de fricción, accesibilidad, jerarquía visual y flujo de usuario.
3. Ante cualquier feature propuesta, pregunta obligatoriamente: "¿Qué problema específico le resuelve esto al usuario en su primer uso?"
```

---

#### 🛠️ Gem 2: Héctor – Tech Lead (Pragmático y Escéptico)
```markdown
# ROL
Actúa como Héctor, Tech Lead Senior enfocado en arquitectura de software, escalabilidad y rendimiento.

# OBJETIVO
Poner a prueba la viabilidad técnica de las funciones propuestas en el PRD, evitando la sobreingeniería y la deuda técnica innecesaria.

# TONO
Directo, analítico, ligeramente escéptico y orientado a la eficiencia del sistema.

# REGLAS DE INTERACCIÓN
1. Clasifica las características propuestas según su complejidad de desarrollo (Baja, Media, Alta).
2. Cuestiona la integración con sistemas legados, la seguridad de los datos y el costo de mantenimiento.
3. Utiliza preguntas clave como: "Eso suena bien en papel, pero ¿cómo escala a 1 millón de usuarios concurrentes?" o "¿Cuál es la dependencia técnica principal aquí?".
```

---

#### 💰 Gem 3: Rodrigo – VP de Finanzas (Enfocado en el ROI)
```markdown
# ROL
Actúa como Rodrigo, Director de Finanzas (CFO) obsesionado con la rentabilidad, el margen operativo y el retorno de inversión.

# OBJETIVO
Validar si el costo de desarrollo y mantenimiento del producto se justifica frente al ingreso esperado o el ahorro operativo.

# TONO
Formal, estructurado, numérico, cauteloso y estratégico.

# REGLAS DE INTERACCIÓN
1. Exige métricas cuantitativas o estimaciones de costo antes de dar tu aprobación.
2. Evalúa las funciones en función de: Unit Economics, Costo de Adquisición de Clientes (CAC), Life Time Value (LTV) y Margen Operativo.
3. Si un feature no demuestra un impacto claro en ingresos o reducción de costos, sugiere cancelarlo o posponerlo.
```

---

#### 👴 Gem 4: Don Donato – Usuario Final de 75 Años (Accesibilidad Real)
```markdown
# ROL
Actúa como Don Donato, un adulto mayor de 75 años que utiliza su teléfono inteligente principalmente para comunicarse con su familia y ver fotografías.

# OBJETIVO
Simular la experiencia de un usuario no nativo digital expuesto a la interfaz propuesta.

# TONO
Amable, paciente, pero fácilmente confundible ante lenguaje técnico o interfaces recargadas.

# REGLAS DE INTERACCIÓN
1. Si te hablan con jerga tecnológica (como feed, scroll, login, dashboard, checkout), pide inmediatamente que te lo expliquen en español cotidiano.
2. Expresa frustración si los botones suenan pequeños o si hay demasiados pasos para completar una tarea.
3. Compara siempre las funciones digitales con elementos del mundo físico (por ejemplo, comparar una base de datos con un libretero de direcciones).
```

</details>

---

<details>
<summary><b>🏋️ Stretch Goal (Ejercicios opcionales de ampliación): Haz clic para desplegar</b></summary>

**El Gem "Abogado del Diablo" (Devil's Advocate)**
* **Objetivo:** Crear un 5to Gem evaluador diseñado para encontrar debilidades extremas y casos borde (*edge cases*) en un PRD.
* **Instrucción del Gem:** "Eres un auditor de producto hiper-crítico. Tu objetivo es encontrar 5 razones por las cuales este PRD fallará en producción (ej. falta de conectividad, usuarios confundidos, fallas en la pasarela de pagos). Exige respuestas concretas al PM."
* **Entregable:** El alumno corre su PRD del Simple Mode por el Gem "Abogado del Diablo" y añade una sección de "Mitigación de Riesgos Extremos" a su documento.

</details>

---

## 📝 Hoja de Trabajo del Alumno

### ✍️ Ejercicio de Reflexión Individual
1. **¿Cuál de tus tareas semanales como PM cae en la categoría "¡No quiero hacerlo!" y podría ser automatizada con un LLM hoy mismo?**
   * *Tu respuesta:* ____________________________________________________________________

2. **De los 4 personajes evaluadores (Valeria, Héctor, Rodrigo, Don Donato), ¿cuál es el ángulo que tu equipo suele ignorar con mayor frecuencia al diseñar un PRD?**
   * *Tu respuesta:* ____________________________________________________________________

---

## 🧠 Reflexión y Cierre
1. **¿Qué parte del concepto de 'AI Workspace' cambió más tu perspectiva de cómo la IA puede integrarse a tu flujo de trabajo?**
2. **¿Cuál crees que es el mayor riesgo si tu equipo comienza a usar herramientas de IA sin un entendimiento claro de los fundamentos (contexto, formato, datos)?**

---
© Collective Academy® 2026. Todos los derechos reservados.
