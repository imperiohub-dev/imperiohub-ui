/**
 * @fileoverview Accountant Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const accountantTemplate: TemplateConfig = {
  id: 'accountant',
  name: 'Contador Público',
  category: 'professionals',
  description: 'Template para contadores y firmas de contabilidad',
  layout: 'professional',
  recommendedTheme: 'professional',

  variables: {
    professionalName: 'CPA Luis Ramírez',
    profession: 'Contador Público Certificado',
    yearsExperience: 18,
    tagline: 'Optimizando tu patrimonio con estrategia fiscal',
    description: 'Contador público con 18 años de experiencia en contabilidad, auditoría y asesoría fiscal para personas y empresas. Especializado en optimización tributaria y cumplimiento normativo.',

    specialties: [
      'Contabilidad Empresarial',
      'Asesoría Fiscal',
      'Auditoría',
      'Declaraciones de Impuestos',
      'Planeación Financiera'
    ],

    services: [
      {
        id: 'accounting',
        name: 'Contabilidad Empresarial',
        description: 'Servicios contables completos para tu negocio',
        price: { amount: 500, currency: 'USD', period: 'month' },
        icon: 'Calculator',
        features: [
          'Registro contable mensual',
          'Estados financieros',
          'Nómina',
          'Conciliaciones bancarias'
        ],
        highlighted: true
      },
      {
        id: 'tax',
        name: 'Asesoría Fiscal',
        description: 'Optimización y cumplimiento tributario',
        price: { amount: 300, currency: 'USD', period: 'month' },
        icon: 'DollarSign',
        features: [
          'Planeación fiscal',
          'Declaraciones mensuales',
          'Declaración anual',
          'Defensa ante SAT'
        ]
      },
      {
        id: 'audit',
        name: 'Auditoría',
        description: 'Auditorías internas y externas',
        price: { amount: 2000, currency: 'USD', period: 'project' },
        icon: 'FileText',
        features: [
          'Auditoría financiera',
          'Auditoría fiscal',
          'Dictamen fiscal',
          'Informe ejecutivo'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Roberto Fernández',
        role: 'Empresario',
        content: 'Luis ha sido clave para el crecimiento de mi empresa. Su asesoría fiscal nos ha ahorrado miles de dólares.',
        rating: 5,
        date: '2024-02-01'
      },
      {
        id: '2',
        name: 'Sandra Morales',
        role: 'Dueña de Negocio',
        content: 'Muy profesional y siempre al día con las regulaciones. Recomendado 100%.',
        rating: 5,
        date: '2024-01-15'
      }
    ],

    contact: {
      phone: '+1 (555) 456-7890',
      email: 'info@ramirezcontadores.com',
      whatsapp: '+1-555-456-7890',
      address: {
        street: 'Av. Empresarial 321, Oficina 12',
        city: 'Puebla',
        state: 'Puebla',
        country: 'México',
        zipCode: '72000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 18:00',
        'Sábado': '10:00 - 13:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/luisramirez-cpa',
      facebook: 'https://facebook.com/ramirezcontadores',
      twitter: 'https://twitter.com/ramirez_cpa'
    },

    certifications: [
      'Cédula Profesional 9876543 - BUAP',
      'Colegio de Contadores Públicos de Puebla',
      'Certificación CPA',
      'Certificación SAT en Auditoría Fiscal'
    ],

    faq: [
      {
        id: '1',
        question: '¿Qué documentos necesito para empezar?',
        answer: 'Estados de cuenta bancarios, facturas de ingresos y gastos, contratos y datos fiscales de tu negocio.'
      },
      {
        id: '2',
        question: '¿Cuándo debo presentar mis declaraciones?',
        answer: 'Las declaraciones mensuales se presentan antes del día 17 de cada mes. La declaración anual en abril.'
      },
      {
        id: '3',
        question: '¿Atienden personas físicas o solo empresas?',
        answer: 'Atendemos tanto personas físicas como morales. Tenemos paquetes especializados para cada caso.'
      }
    ]
  },

  sections: {
    hero: { enabled: true, variant: 'professional' },
    about: { enabled: true, layout: 'centered' },
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
    title: 'CPA Luis Ramírez - Contador Público Certificado | Asesoría Fiscal y Contable',
    description: '18 años de experiencia en contabilidad, auditoría y asesoría fiscal. Servicios desde $300 USD/mes.',
    keywords: ['contador', 'asesoría fiscal', 'contabilidad', 'auditoría', 'declaraciones', 'puebla']
  },

  tags: ['contabilidad', 'fiscal', 'impuestos', 'auditoría'],
  industry: 'Accounting',
  targetAudience: ['Empresas', 'Autónomos', 'Personas físicas'],
  version: '0.4.0'
}
