/**
 * @fileoverview Financial Advisor Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const financialAdvisorTemplate: TemplateConfig = {
  id: 'financial-advisor',
  name: 'Asesor Financiero',
  category: 'professionals',
  description: 'Template para asesores financieros y planificadores',
  layout: 'professional',
  recommendedTheme: 'professional',

  variables: {
    professionalName: 'Lic. Ricardo Campos, CFP',
    profession: 'Asesor Financiero Certificado',
    yearsExperience: 16,
    tagline: 'Construyendo tu libertad financiera',
    description: 'Asesor financiero certificado con 16 años ayudando a familias e individuos a alcanzar sus metas financieras. Especializado en inversiones, retiro y protección patrimonial.',

    specialties: [
      'Planificación de Retiro',
      'Inversiones',
      'Protección Patrimonial',
      'Educación Financiera',
      'Optimización Fiscal'
    ],

    services: [
      {
        id: 'planning',
        name: 'Planificación Financiera Integral',
        description: 'Plan completo para tus objetivos financieros',
        price: { amount: 500, currency: 'USD', period: 'project' },
        icon: 'TrendingUp',
        features: [
          'Análisis financiero completo',
          'Plan de inversión',
          'Estrategia fiscal',
          'Seguimiento trimestral'
        ],
        highlighted: true
      },
      {
        id: 'retirement',
        name: 'Planificación de Retiro',
        description: 'Asegura tu futuro financiero',
        price: { amount: 300, currency: 'USD', period: 'project' },
        icon: 'Shield',
        features: [
          'Proyección de retiro',
          'Estrategia de ahorro',
          'Optimización de pensiones',
          'Plan de ingresos pasivos'
        ]
      },
      {
        id: 'investment',
        name: 'Asesoría de Inversiones',
        description: 'Gestión y optimización de portafolio',
        price: { amount: 200, currency: 'USD', period: 'month' },
        icon: 'DollarSign',
        features: [
          'Análisis de portafolio',
          'Rebalanceo estratégico',
          'Reportes mensuales',
          'Acceso a plataformas'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Familia Torres',
        role: 'Clientes',
        content: 'Ricardo nos ayudó a organizar nuestras finanzas y ahora estamos en camino a retirarnos a los 60. Excelente profesional.',
        rating: 5,
        date: '2024-01-25'
      },
      {
        id: '2',
        name: 'Empresario Jorge M.',
        role: 'Cliente',
        content: 'Su asesoría me ha permitido duplicar mi patrimonio en 3 años. Muy recomendado.',
        rating: 5,
        date: '2024-02-12'
      }
    ],

    contact: {
      phone: '+1 (555) 345-6789',
      email: 'ricardo@camposfinancial.com',
      whatsapp: '+1-555-345-6789',
      address: {
        street: 'Torre Corporativa, Piso 20, Oficina 2005',
        city: 'Monterrey',
        state: 'Nuevo León',
        country: 'México',
        zipCode: '64000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 18:00',
        'Sábado': 'Solo con cita',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/ricardocampos-cfp',
      twitter: 'https://twitter.com/rcampos_finance',
      youtube: 'https://youtube.com/ricardocamposfinance'
    },

    certifications: [
      'Certified Financial Planner (CFP)',
      'Series 7 & 66 License',
      'Chartered Financial Analyst (CFA) Level II',
      'AMIB - Asociación Mexicana de Intermediarios Bursátiles'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto capital necesito para empezar?',
        answer: 'Trabajo con clientes desde $10,000 USD. Lo importante es tener un plan, sin importar el monto inicial.'
      },
      {
        id: '2',
        question: '¿Cómo cobran sus honorarios?',
        answer: 'Trabajo con tarifa fija por servicio o comisión sobre activos bajo gestión. Siempre transparente y acordado previamente.'
      },
      {
        id: '3',
        question: '¿Qué tan seguido nos reunimos?',
        answer: 'Inicialmente cada mes, luego trimestralmente para revisar progreso y ajustar estrategia según sea necesario.'
      }
    ]
  },

  sections: {
    hero: { enabled: true, variant: 'professional' },
    about: { enabled: true, layout: 'side-image' },
    experience: { enabled: true },
    services: { enabled: true, display: 'grid', columns: 3 },
    certifications: { enabled: true },
    testimonials: { enabled: true, carousel: true },
    pricing: { enabled: true },
    faq: { enabled: true },
    contact: { enabled: true, showMap: true },
    footer: { enabled: true }
  },

  seo: {
    title: 'Ricardo Campos, CFP - Asesor Financiero Certificado | Monterrey',
    description: '16 años ayudando a construir patrimonios sólidos. Planificación financiera, inversiones y retiro.',
    keywords: ['asesor financiero', 'CFP', 'inversiones', 'retiro', 'planificación financiera', 'monterrey']
  },

  tags: ['finanzas', 'inversiones', 'retiro', 'asesoría'],
  industry: 'Financial Services',
  targetAudience: ['Familias', 'Profesionistas', 'Empresarios'],
  version: '0.4.0'
}
