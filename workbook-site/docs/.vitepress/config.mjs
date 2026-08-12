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
          {
            text: 'Bloque 1: Fundamentos, Workspace & Agentes',
            collapsed: true,
            items: [
              { text: 'AI Fundamentals & Workspace', link: '/workbook_dia1_sesion1_ai_fundamentals_workspace' },
              { text: 'Gemini Enterprise & Agentes', link: '/workbook_dia1_sesion2_gemini_enterprise_agentes' }
            ]
          },
          {
            text: 'Bloque 2: Prototipado Rápido con AI Studio',
            collapsed: true,
            items: [
              { text: 'Prototipado en AI Studio', link: '/workbook_dia1_sesion3_prototipado_ai_studio' }
            ]
          }
        ]
      },
      {
        text: 'Día 2',
        items: [
          {
            text: 'Bloque 1: Ecosistema Antigravity, Skills y MCPs',
            collapsed: true,
            items: [
              { text: 'Antigravity Hub, IDE & Skills', link: '/workbook_dia2_sesion1_ecosistema_antigravity_orquestacion' },
              { text: 'Conectividad y Datos con MCP', link: '/workbook_dia2_sesion2_integraciones_mcp' }
            ]
          },
          {
            text: 'Bloque 2: Multi-Agentes y el Futuro del PM',
            collapsed: true,
            items: [
              { text: 'Multi-Agent Workflows', link: '/workbook_dia2_sesion3_multi_agentes_orquestacion' }
            ]
          }
        ]
      }
    ]
  }
})
