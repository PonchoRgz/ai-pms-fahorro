import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ai-pms-fahorro/',
  title: "AI for PMs – FAhorro",
  description: "Workbooks para líderes de producto de Farmacias del Ahorro",
  lang: 'es-ES',
  themeConfig: {
    siteTitle: false,
    logo: { light: '/logo-light.png', dark: '/logo-dark.png' },
    
    nav: [
      { text: 'Inicio', link: '/' }
    ],

    sidebar: [
      {
        text: 'Información del Curso',
        items: [
          { text: 'Agenda', link: '/agenda' }
        ]
      },
      {
        text: 'Día 1',
        items: [
          { text: 'Sesión 1: AI Fundamentals & Workspace', link: '/workbook_dia1_sesion1_ai_fundamentals_workspace' },
          { text: 'Sesión 2: Gemini Enterprise & Agentes', link: '/workbook_dia1_sesion2_gemini_enterprise_agentes' },
          { text: 'Sesión 3: Prototipado en AI Studio', link: '/workbook_dia1_sesion3_prototipado_ai_studio' }
        ]
      },
      {
        text: 'Día 2',
        items: [
          { text: 'Sesión 1: Antigravity Hub, IDE & Skills', link: '/workbook_dia2_sesion1_ecosistema_antigravity_orquestacion' },
          { text: 'Sesión 2: Conectividad y Datos con MCP', link: '/workbook_dia2_sesion2_integraciones_mcp' },
          { text: 'Sesión 3: Multi-Agent Workflows', link: '/workbook_dia2_sesion3_multi_agentes_orquestacion' }
        ]
      }
    ]
  }
})
