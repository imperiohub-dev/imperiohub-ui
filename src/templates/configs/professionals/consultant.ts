/**
 * @fileoverview Business Consultant Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const consultantTemplate: TemplateConfig = {
  id: 'consultant',
  name: 'Consultor de Negocios',
  category: 'professionals',
  description: 'Template para consultores empresariales y de negocios',
  layout: 'professional',
  recommendedTheme: 'corporate',

  variables: {
    professionalName: 'Sofía Vargas, MBA',
    profession: 'Consultora de Negocios Estratégicos',
    yearsExperience: 14,
    tagline: 'Transformando ideas en resultados medibles',
    description: 'Consultora de negocios con MBA y 14 años ayudando a empresas a crecer, optimizar operaciones y alcanzar sus objetivos estratégicos. Especializada en transformación digital y eficiencia operacional.',

    specialties: [
      'Estrategia Empresarial',
      'Transformación Digital',
      'Optimización de Procesos',
      'Análisis Financiero',
      'Desarrollo Organizacional'
    ],

    services: [
      {
        id: 'strategy',
        name: 'Consultoría Estratégica',
        description: 'Desarrollo de planes estratégicos para crecimiento empresarial',
        price: { amount: 250, currency: 'USD', period: 'hour' },
        icon: 'Target',
        features: [
          'Análisis FODA',
          'Plan estratégico 3-5 años',
          'OKRs y KPIs',
          'Roadmap de implementación'
        ],
        highlighted: true
      },
      {
        id: 'digital',
        name: 'Transformación Digital',
        description: 'Digitalización de procesos y adopción tecnológica',
        price: { amount: 5000, currency: 'USD', period: 'project' },
        icon: 'Zap',
        features: [
          'Diagnóstico digital',
          'Selección de herramientas',
          'Plan de implementación',
          'Capacitación de equipo'
        ]
      },
      {
        id: 'optimization',
        name: 'Optimización de Procesos',
        description: 'Mejora de eficiencia operacional',
        price: { amount: 3000, currency: 'USD', period: 'project' },
        icon: 'TrendingUp',
        features: [
          'Mapeo de procesos',
          'Identificación de cuellos de botella',
          'Propuesta de mejoras',
          'Seguimiento de resultados'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Jorge Castillo',
        role: 'CEO, TechStart',
        content: 'Sofía nos ayudó a escalar de 10 a 50 empleados sin perder eficiencia. Su visión estratégica es invaluable.',
        rating: 5,
        date: '2024-01-20'
      },
      {
        id: '2',
        name: 'María Elena Cruz',
        role: 'Directora, RetailMax',
        content: 'La transformación digital que lideramos con Sofía incrementó nuestras ventas 40% en 6 meses.',
        rating: 5,
        date: '2023-12-10'
      }
    ],

    contact: {
      phone: '+1 (555) 567-8901',
      email: 'sofia@vargasconsulting.com',
      whatsapp: '+1-555-567-8901',
      address: {
        street: 'Paseo de la Reforma 500, Piso 15',
        city: 'Ciudad de México',
        state: 'CDMX',
        country: 'México',
        zipCode: '06500'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 18:00',
        'Sábado - Domingo': 'Solo videollamadas con cita'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/sofiavargasconsulting',
      twitter: 'https://twitter.com/sofiavargas_mba',
      instagram: 'https://instagram.com/sofiavargasconsulting'
    },

    certifications: [
      'MBA - ITESM',
      'Certified Management Consultant (CMC)',
      'Scrum Master Certification',
      'Diplomado en Transformación Digital - MIT'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto dura un proyecto de consultoría típico?',
        answer: 'Depende del alcance. Proyectos de optimización toman 2-3 meses, mientras que transformación digital puede tomar 6-12 meses.'
      },
      {
        id: '2',
        question: '¿Trabajan con empresas de cualquier tamaño?',
        answer: 'Sí, trabajamos desde startups hasta empresas medianas. Adaptamos nuestros servicios al tamaño y necesidades de cada cliente.'
      },
      {
        id: '3',
        question: '¿Ofrecen sesiones de diagnóstico gratuitas?',
        answer: 'Sí, la primera sesión de 60 minutos es sin costo. En ella evaluamos tu situación y definimos cómo podemos ayudarte.'
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
    contact: { enabled: true, showMap: false },
    footer: { enabled: true }
  },

  seo: {
    title: 'Sofía Vargas, MBA - Consultora de Negocios | Estrategia y Transformación Digital',
    description: '14 años transformando empresas. Consultoría estratégica, transformación digital y optimización de procesos.',
    keywords: ['consultor de negocios', 'estrategia empresarial', 'transformación digital', 'consultoría', 'MBA']
  },

  tags: ['consultoría', 'negocios', 'estrategia', 'transformación digital'],
  industry: 'Business Consulting',
  targetAudience: ['Empresas', 'Startups', 'CEOs', 'Directores'],
  version: '0.4.0'
}
