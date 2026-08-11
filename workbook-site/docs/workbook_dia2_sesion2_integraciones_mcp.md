# 📘 Workbook Día 2 - Sesión 2: Conectividad y Datos con MCP
**Curso:** AI for Product Managers  
**Impartido por:** Alfonso Rodríguez (Product Strategy & Operations, Google)  
**Organización:** Collective Academy®  

---

## 🎯 1. Información General y Objetivos de la Sesión

### 📍 Objetivos de Aprendizaje
* Comprender qué es el **Model Context Protocol (MCP)** y cómo resuelve el problema de integración de datos en LLMs.
* Conectar un servidor MCP local a Antigravity Hub de forma guiada ("Plug & Play").
* Realizar consultas estructuradas en lenguaje natural sobre bases de datos locales sin escribir código.
* Aplicar las herramientas del MCP para automatizar análisis de inventarios.

---

## 🔌 2. ¿Qué es el Model Context Protocol (MCP)?

### El "USB-C" de la Inteligencia Artificial
Tradicionalmente, si querías que una IA consultara tu inventario en SAP, leyera tus tickets de Jira o analizara tu base de datos de clientes, necesitabas que un equipo de ingeniería escribiera integraciones complejas (APIs) para cada herramienta por separado. 

**MCP** es un protocolo estándar universal. Funciona igual que los puertos USB-C: no importa si conectas una pantalla, un teclado o un disco duro, el cable es el mismo. Con MCP, puedes conectar bases de datos, APIs o herramientas locales directamente a tu agente de IA usando una configuración estándar.

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│                 │       │                 │       │                 │
│  Agente de IA   │◄─────►│ Servidor MCP    │◄─────►│ Datos Locales / │
│  (Orquestador)  │       │ (El "Adaptador")│       │ Herramientas    │
│                 │       │                 │       │                 │
└─────────────────┘       └─────────────────┘       └─────────────────┘
```

**¿Por qué es clave para un PM?**
Porque te permite integrar los datos privados de tu empresa al razonamiento de la IA sin tener que ser programador.

---

## 🛠️ 3. Manos a la Obra: Conectando un MCP Local

En este ejercicio, simularemos que estás analizando el inventario de Farmacias del Ahorro. Para evitar problemas de permisos de red y herramientas de terceros, nos conectaremos a un archivo de datos local.

### 📋 Paso 1: Obtener la Base de Datos Local
1. Descarga el archivo de datos haciendo clic aquí: [📥 Descargar inventario_fahorro.csv](/inventario_fahorro.csv) y guárdalo en la carpeta raíz de tu proyecto.
2. Este archivo contiene 100 registros de productos con el siguiente formato:
   * `producto_id`, `nombre_medicamento`, `categoria`, `stock_disponible`, `precio_mxn`, `sucursal`, `estatus_reabastecimiento`.

### 📋 Paso 2: Instalación del Servidor MCP en Antigravity Hub
Vamos a enseñarle al Hub cómo leer archivos de nuestro sistema.

1. Abre tu aplicación **Antigravity Hub** y entra a tu proyecto.
2. Haz clic en **Open MCP config** en la interfaz principal. Esto abrirá un archivo de configuración `.json`.
3. Pega la siguiente configuración estandarizada dentro del archivo JSON:

```json
{
  "mcpServers": {
    "inventario-csv": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "./"
      ]
    }
  }
}
```

4. Guarda el archivo. Espera unos segundos y el Hub recargará la configuración automáticamente. El agente ahora tendrá herramientas nuevas (`read_file`, `list_directory`, etc.) para interactuar con tu entorno local.

> [!TIP]
> **Pro-Tip:** ¡Lo más fácil es pedirle a tu agente que lo haga por ti! Puedes solicitarle directamente en el chat que cree la configuración del MCP que necesitas y que edite el archivo JSON de forma automática.

---

## 🔍 4. Consultas de Datos en Lenguaje Natural

Ahora que el agente tiene acceso a tus archivos, vamos a pedirle que haga el trabajo analítico pesado. 

### Ejercicio Práctico de Consultas
Abre un nuevo chat con tu agente en Antigravity Hub y pon a prueba su acceso a los datos ejecutando los siguientes prompts de manera secuencial:

**Prompt 1: Verificación de acceso**
> *"Agente, usa tus herramientas MCP para leer el archivo `inventario_fahorro.csv` que está en mi directorio y dime cuántos registros totales encuentras."*

**Prompt 2: Análisis Condicional**
> *"Basado en el archivo, genera una tabla con los productos que tengan un estatus 'Critico' y que tengan un stock menor a 10 unidades, agrupados por sucursal."*

**Prompt 3: Extracción Financiera**
> *"Obtén el Top 5 de los medicamentos más caros de la categoría 'Diabetes' y menciona su disponibilidad actual en la sucursal Centro."*

**¿Qué está pasando detrás de escena?**
El agente utiliza el MCP para acceder al archivo, analiza su estructura, ejecuta filtros a nivel de procesamiento y extrae la respuesta en el formato que le solicitaste. ¡Has analizado datos sin una sola línea de código!

---

<details>
<summary><b>🏋️ Stretch Goal (Ejercicios opcionales de ampliación): Haz clic para desplegar</b></summary>

**Redacción Automatizada de Alertas de Reabastecimiento**
* **Objetivo:** Combinar el análisis de datos extraídos vía MCP con la generación de comunicación ejecutiva de forma autónoma.
* **Instrucción al Agente:** "Toma la lista de medicamentos críticos obtenida mediante el MCP y redacta un correo formal dirigido a la Dirección de Logística de Farmacias del Ahorro solicitando la orden de compra urgente para las sucursales Norte y Poniente."
* **Entregable:** Un borrador de correo estructurado y profesional que incluye la tabla de datos extraída y está listo para ser enviado.

**Creación y Conexión Automática de un nuevo MCP Custom**
* **Objetivo:** Pedirle al agente que cree desde cero un dataset y configure un nuevo servidor MCP sin que tú tengas que tocar el código.
* **Instrucción al Agente:** "Crea un archivo CSV llamado `proveedores_fahorro.csv` con datos inventados de 5 proveedores (incluye id, nombre, tiempos de entrega y nivel de confiabilidad). Después, actualiza mi configuración de MCPs para agregar un servidor custom llamado `proveedores-csv` que lea este directorio para que puedas analizar esos datos."
* **Entregable:** Una vez que el agente te confirme que lo hizo, pruébalo pidiéndole: "Usa tus herramientas MCP para leer el archivo de proveedores y dime cuál es el más confiable."

</details>

---

## 📝 Hoja de Trabajo del Alumno

### ✍️ Ejercicio de Identificación de Casos de Uso MCP
1. **Identifica 1 base de datos o sistema en tu empresa (ej. Zendesk, Salesforce, MySQL) que, si tuvieras un MCP para conectarla con tu agente de IA, reduciría drásticamente tu tiempo de análisis semanal:**
   * *Sistema / Base de Datos:* _______________________________________
   * *El análisis que le pediría al agente:* _______________________________________

---

## 🧠 Reflexión y Cierre
* ¿Cómo cambiaría tu capacidad analítica si conectaras tu base de datos corporativa real (Jira, SAP, Salesforce) mediante un MCP a tu agente?
* ¿Qué riesgos de seguridad o privacidad de datos visualizas al usar conectores MCP en tu organización y cómo los mitigarías?

---
© Collective Academy® 2026. Todos los derechos reservados.
