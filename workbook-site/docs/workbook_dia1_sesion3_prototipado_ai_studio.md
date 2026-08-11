# 📘 Workbook Día 1 - Sesión 3: Prototipado en Google AI Studio
**Curso:** AI for Product Managers  
**Impartido por:** Alfonso Rodríguez (Product Strategy & Operations, Google)  
**Organización:** Collective Academy®  

---

## 🎯 1. Información General y Objetivos de la Sesión

### 📍 Objetivos de Aprendizaje
* Comprender la suite de **Google AI Studio** como laboratorio técnico de prototipado rápido para Product Managers.
* Dominar la configuración de modelos en **Playground** (Comparativa Pro vs. Flash, ajuste de *Temperatura*, *System Instructions* y *Grounding*).
* Experimentar con la sección **Build** para generar interfaces web funcionales e interactivas en tiempo real.
* Ejecutar la metodología de prototipado iterativo (*Planear → Prototipar → Añadir Funcionalidad → Debugging*).
* Aplicar técnicas de depuración (*debugging*) guiadas por lenguaje natural sin necesidad de editar código manualmente.

---

## 🧪 2. Google AI Studio Overview

**Google AI Studio** es el entorno de desarrollo y laboratorio rápido de Google para interactuar directamente con la familia de modelos Gemini, ajustar hiperparámetros y prototipar software sin la complejidad de un IDE tradicional.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          GOOGLE AI STUDIO                              │
├───────────────────────────────────┬────────────────────────────────────┤
│ 🎛️ PLAYGROUND                     │ 🏗️ BUILD                           │
│ - Comparación de Modelos           │ - Creación de Apps Web interactivas│
│ - Ajuste de Temperatura (0.0-2.0) │ - Vista previa de Código y App     │
│ - System Instructions             │ - Control de Checkpoints / Version │
│ - Outputs Estructurados (JSON)     │ - Herramienta de Anotación Visual  │
└───────────────────────────────────┴────────────────────────────────────┘
```

### 📊 Parámetros Clave en Playground

* **Selección de Modelo:**
  * **Gemini Flash:** Ultrarrápido, económico, ideal para tareas cotidianas, clasificación y UI simples.
  * **Gemini Pro:** Alta capacidad de razonamiento, resolución de problemas complejos y generación de lógica avanzada.
* **Temperatura (Creatividad vs. Consistencia):**
  * `0.0`: Respuestas deterministas, consistentes y precisas (ideal para extracción de datos, código y formato).
  * `1.0 - 2.0`: Respuestas altamente creativas y variadas (ideal para brainstorming, nombres de producto y copia publicitaria).
* **System Instructions:** Instrucciones fijas que dictan el rol y límites del modelo antes de procesar el prompt del usuario.
* **Grounding:** Conexión en tiempo real con Google Search para verificar datos y evitar alucinaciones.

---

## 🎯 3. Matriz de Viabilidad: ¿Qué se puede prototipar en AI Studio?

Antes de iniciar un prototipo, el PM debe saber qué tipo de soluciones son factibles dentro del entorno web de AI Studio Build:

```
┌───────────────────────────────────────────┬───────────────────────────────────────────┐
│              ✅ FÁCIL Y VIABLE             │         ❌ DIFÍCIL O IMPOSIBLE            │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ • Generación de contenido visual/texto    │ • Conexiones directas a BigQuery          │
│ • Demos interactivos de funciones web     │ • Integración con backend interno privado │
│ • Interfaces HTML/CSS/JS de un solo archivo│ • Despliegue nativo a tiendas iOS/Android │
│ • Widgets con voz o chat integrado        │ • Autenticación compleja de usuarios      │
│ • Integración con datos públicos (Maps)   │ • Procesamiento pesado en servidor        │
└───────────────────────────────────────────┴───────────────────────────────────────────┘
```

---

## 🔄 4. Metodología de Prototipado para Product Managers

```
 ┌──────────┐      ┌────────────┐      ┌─────────────────────┐      ┌────────────────────┐      ┌────────┐
 │ 1. PLAN  ├─────►│ 2. PROTOTIPO├─────►│3. AÑADIR FUNCIONALID│─────►│4. PROBAR Y VERIFICAR├─────►│5. LANZAR│
 └──────────┘      └────────────┘      └─────────────────────┘      └────────────────────┘      └────────┘
```

### 🟢 Regla de Oro: La Planeación Facilita la Ejecución
Entre mejor es el plan, más sencilla la ejecución. Aunque no escribas código a mano, **tú entiendes el problema de negocio mejor que nadie**. Antes de pedir una interfaz a AI Studio, apóyate en Gemini Enterprise para planear:
* ¿Es factible lo que quiero construir?
* ¿Qué funcionalidades debería incluir y en qué orden?
* ¿Cómo puedo describir visualmente mi idea?
* ¿Hay alguna mejor manera de hacerlo?
* ¿Cuál debería ser la arquitectura técnica? (Funciona muy bien cuando trabajas con IDEs).

Para mejores resultados, pídele a Gemini que te genere un PRD con un paso a paso detallado antes de ir a AI Studio.

**💡 Pro-Tips para planear UIs:**
* Encuentra una UI que te guste y pídele a Gemini que te genere un prompt para recrear ese estilo.
* Pídele a Gemini que haga cambios directamente en la imagen que compartiste (puedes combinar múltiples elementos en una sola imagen).
* Comparte el archivo `.md` del equipo de diseño con los guidelines.
* También puedes prototipar UIs en Stitch.

### 🛠️ Herramientas clave en la interfaz Build:
* **Checkpoints:** Ve los archivos que cambiaron con tu prompt y restaura versiones pasadas si algo se rompe.
* **Ver Código / Exportar:** Puedes ver el código generado, subir archivos adicionales y descargar todo el proyecto como un `.zip` o exportarlo a Antigravity.
* **Herramienta de Edición Visual:** Dibuja, agrega comentarios o texto directamente sobre la vista previa de la app para indicarle a Gemini exactamente qué quieres cambiar.

### 💡 Pro-Tips de Construcción:
* **Construir Features:** "Hey Gemini, ejecuta el siguiente paso en nuestro plan".
* **Sé específico y preciso:** Gemini va a adivinar todo lo que no le digas, ¡que puede ser útil también!
* **Paciencia:** La primera vez que creas tu app es usualmente la más lenta; las iteraciones siguientes son mucho más rápidas.
* **Un paso a la vez:** Construye un *feature*, no todo al mismo tiempo. Parte pedidos grandes en pequeños pasos, sobre todo si te atoras.
* **Contexto visual:** Para resultados más bonitos, agrega desde el prompt inicial imágenes, archivos `.md` o links.
* **Test! Todo a prueba!**
* **Resolución de problemas:** Pregúntale a la herramienta cómo resolver los errores. Si no lo puedes lograr, cambia tu *approach*.
* **Si se atora:** Escribe "Hola" en el chat o da clic en "Retry" si el botón aparece.

---

## 🔬 5. Manos a la Obra 1: Experimentos en Playground (Barra "Smart Help")

### 📖 Caso de Estudio
Diseñaremos **"Smart Help"**, una barra de búsqueda inteligente para la app de Farmacias del Ahorro que debe interpretar la intención de un usuario frustrado o confundido (ej: *"No encuentro mis medicinas habituales, cambiaron todo de lugar"*).

---

### Experimento 1: Costo vs. Calidad (Comparación de Modelos)
* **Objetivo:** Determinar si Gemini Flash es suficiente o si requiere la capacidad de Gemini Pro.
* **Prompt de prueba:**
  ```text
  Un usuario escribe en la búsqueda: "No encuentro mi historial de compras, la pantalla está muy blanca y no veo los botones de antes, ayuda".
  Clasifica la intención del usuario, identifica su emoción principal y sugiere la pantalla exacta de la app a la que debemos redirigirlo.
  ```
* **Tarea del alumno:** Corre el prompt en **Gemini Flash** y luego en **Gemini Pro**. Compara la latencia (velocidad) y la profundidad del análisis.

---

### Experimento 2: Creatividad vs. Consistencia (Temperatura)
* **Objetivo:** Generar 3 mensajes de bienvenida para usuarios que abren el "Simple Mode" por primera vez.
* **Prueba A (Temperatura = `0.0`):** Corre el prompt 3 veces seguidas. Observa cómo las respuestas son prácticamente idénticas y estructuradas.
* **Prueba B (Temperatura = `2.0`):** Corre el prompt 3 veces seguidas. Observa la variabilidad y creatividad en el tono.

---

### Experimento 3: Alucinaciones vs. Datos Reales (Grounding)
* **Objetivo:** Analizar cómo la búsqueda activada mejora el contexto competitivo.
* **Prompt de prueba:**
  ```text
  Analiza cómo las aplicaciones de farmacias o e-commerce de salud líderes en Latinoamérica resuelven sus interfaces accesibles para adultos mayores.
  ```
* **Tarea del alumno:** Ejecuta la consulta con **Grounding OFF** y luego con **Grounding ON (Google Search)**. Muestra cómo Grounding incluye citas reales y fuentes web actualizadas.

---

## 🏗️ 6. Manos a la Obra 2: Prototipar "Simple Mode" en AI Studio Build

### Paso 1: Pedirle a AI Studio que haga un plan
Antes de empezar a programar, pídele a AI Studio que lea tu PRD y genere un plan de ejecución paso a paso. Pídele que no genere código aún, solo que detalle el plan.

---

### Paso 2: Configurar el System Prompt con el Design System
Entra a la pestaña **Build** en AI Studio e ingresa las siguientes reglas iniciales en las instrucciones del sistema:

```markdown
# ROL
Eres un Desarrollador Frontend Senior experto en accesibilidad (WCAG 2.1 AA) y experiencia de usuario para adultos mayores.

# OBJETIVO
Construir un prototipo funcional web interactivo de la función "Simple Mode" para Farmacias del Ahorro.

# DESIGN SYSTEM MANDATORIO
- Tipografía: Sans-serif, tamaño mínimo de texto en cuerpo: 18px.
- Contraste: Alto contraste (Texto negro/azul oscuro sobre fondo blanco o crema claro).
- Botones: Botones de acción principal de mínimo 56px de altura, con bordes redondeados y etiquetas claras (sin íconos ambiguos sin texto).
- Estructura: Genera la aplicación completa en UN SOLO ARCHIVO HTML que contenga el CSS (dentro de <style>) y el JavaScript (dentro de <script>).
```

---

### Paso 3: Generar la Primera Versión del Prototipo
Ingresa el siguiente prompt en el chatbox de Build para comenzar a ejecutar el primer paso del plan:

```text
Crea el prototipo de la pantalla principal de "Simple Mode". Debe incluir:
1. Un encabezado claro con el nombre del usuario y un botón grande para "Pedir Medicamentos Frecuentes".
2. Una sección de "Mis Medicamentos del Mes" con fotos simuladas, dosis y un botón de "Volver a comprar en 1 clic".
3. Un botón flotante permanente de "Hablar con un Farmacéutico" (asistencia telefónica o por chat).
```

---

### Paso 4: Construcción de Features e Iteración
Revisa la vista previa de la app. Pídele al agente: *"Hey Gemini, ejecuta el siguiente paso en nuestro plan"*. **IMPORTANTE: No modifiques el código manualmente.** Solicita los ajustes específicos desde el chatbox:

> *"El botón de 'Pedir Medicamentos Frecuentes' no destaca lo suficiente. Hazlo de color verde brillante, incrementa el tamaño de la letra a 22px y añade una confirmación visual cuando el usuario haga clic."*

---

<details>
<summary><b>🏋️ Stretch Goal (Ejercicios opcionales de ampliación): Haz clic para desplegar</b></summary>

**Carrito de Compras Interactivo con Manejo de Estado en JS**
* **Objetivo:** Pasar de una interfaz estática en AI Studio Build a un prototipo funcional con lógica de estado en el cliente.
* **Prompt a AI Studio:** "Añade un contador en tiempo real al botón flotante del carrito. Cada vez que el usuario dé clic en 'Pedir Medicamento Frecuente', el producto debe agregarse a una lista modal de compras y actualizar el total en MXN dinámicamente con JavaScript."
* **Entregable:** Demostración en vivo en el preview de AI Studio de un flujo de checkout completo funcional.

</details>

---

## 🐞 7. Guía de Depuración (*Debugging*) y Errores Comunes

Cuando el modelo cometa errores en la interfaz o no aplique los cambios correctamente, utiliza las siguientes estrategias prácticas:

1. **Describe exactamente qué está saliendo mal:** *"Cuando doy clic en X, pasa Y en lugar de Z"*.
2. **Usa la función de Editar (Visual):** Para indicar bugs visuales. ¡Algunas veces Gemini no te cree hasta que le muestras la evidencia!
3. **Abre los logs:** Para ver los errores específicos y pregúntale a Gemini cómo arreglarlos.
4. **Si no lo puedes lograr, cambia tu *approach*** o usa el botón de *Retry*.

### ❌ Errores Comunes y Soluciones

```text
┌───────────────────────────────────────────┬───────────────────────────────────────────┐
│        SÍNTOMA / ERROR EN BUILD           │           ESTRATEGIA DE SOLUCIÓN          │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ Gemini dice que aplicó el cambio          │ Describe que no ves el cambio y pide im-  │
│ pero no lo hizo.                          │ plementar de nuevo, sé más explícito con  │
│                                           │ lo que ves.                               │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ Gemini hizo el cambio pero también hizo   │ Regresa a una versión previa (Checkpoint) │
│ otros cambios que no pedí.                │ y di: "IMPORTANTE: sólo cambia X, NO      │
│                                           │ cambies nada más!"                        │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ Hice una pregunta para entender el si-    │ Cuando solo quieres planear, ayuda mucho  │
│ guiente paso y el modelo decidió          │ decir: "IMPORTANTE: NO MODIFIQUES EL      │
│ implementar directamente.                 │ CÓDIGO, SOLO QUIERO DEBATIR."             │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ Errores misteriosos en AI Studio.         │ ¡Pasa a veces! Puedes preguntar en el chat│
│                                           │ o abrir otra pestaña con Gemini.          │
└───────────────────────────────────────────┴───────────────────────────────────────────┘
```

---

## 📝 8. Hoja de Trabajo del Alumno

### ✍️ Bitácora de Prototipado en AI Studio

1. **Configuración de tu Prototipo:**
   * **Modelo seleccionado:** [ ] Gemini Flash [ ] Gemini Pro
   * **Temperatura elegida:** ________
   * **¿Por qué elegiste esa configuración?:** ________________________________________

2. **Captura o Descripción de tu Prototipo Generado:**
   * Describe los 3 elementos principales que lograste hacer funcionar en la interfaz de "Simple Mode":
     1. _________________________________________________________________
     2. _________________________________________________________________
     3. _________________________________________________________________

---

## 🧠 9. Reflexión y Cierre

Tómate unos minutos para reflexionar sobre lo aprendido en esta sesión:

1. **¿Qué parte del proceso de *vibe-coding* y prototipado cambió más tu forma de pensar sobre la creación de software?**
2. **¿Qué caso real de tu equipo podrías trabajar con este método en los próximos 30 días?**

---
© Collective Academy® 2026. Todos los derechos reservados.
