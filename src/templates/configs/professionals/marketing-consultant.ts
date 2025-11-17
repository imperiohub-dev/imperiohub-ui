/**
 * @fileoverview Marketing Consultant Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const marketingConsultantTemplate: TemplateConfig = {
  id: 'marketing-consultant',
  name: 'Consultor de Marketing',
  category: 'professionals',
  description: 'Template para consultores de marketing digital y estrategia',
  layout: 'professional',
  recommendedTheme: 'modern',

  variables: {
    professionalName: 'Alejandro Torres',
    profession: 'Consultor de Marketing Digital',
    yearsExperience: 9,
    tagline: 'Estrategias que convierten audiencia en clientes',
    description: 'Consultor de marketing digital con 9 años ayudando a negocios a crecer online. Especializado en estrategia digital, SEO, publicidad en redes sociales y growth hacking.',

    specialties: [
      'Marketing Digital',
      'SEO & SEM',
      'Social Media Marketing',
      'Content Strategy',
      'Growth Hacking'
    ],

    services: [
      {
        id: 'strategy',
        name: 'Estrategia Digital 360°',
        description: 'Plan completo de marketing digital',
        price: { amount: 2000, currency: 'USD', period: 'project' },
        icon: 'Target',
        features: [
          'Análisis de mercado',
          'Buyer personas',
          'Estrategia de contenido',
          'Plan de medios',
          'KPIs y métricas'
        ],
        highlighted: true
      },
      {
        id: 'seo',
        name: 'Consultoría SEO',
        description: 'Optimización para motores de búsqueda',
        price: { amount: 800, currency: 'USD', period: 'month' },
        icon: 'Search',
        features: [
          'Auditoría SEO',
          'Keyword research',
          'Optimización on-page',
          'Link building',
          'Reportes mensuales'
        ]
      },
      {
        id: 'ads',
        name: 'Gestión de Publicidad',
        description: 'Campañas en Google Ads y Meta',
        price: { amount: 500, currency: 'USD', period: 'month' },
        icon: 'Zap',
        features: [
          'Estrategia de campañas',
          'Creación de anuncios',
          'Optimización continua',
          'A/B testing',
          'Reportes semanales'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'E-commerce Fashion',
        description: 'Incremento de 300% en ventas en 6 meses',
        category: 'E-commerce',
        image: '/case-studies/ecommerce-fashion.jpg',
        date: '2024-01'
      },
      {
        id: '2',
        title: 'SaaS B2B',
        description: 'Reducción de CAC en 40% con estrategia de contenido',
        category: 'SaaS',
        image: '/case-studies/saas-b2b.jpg',
        date: '2023-11'
      },
      {
        id: '3',
        title: 'Restaurante Local',
        description: 'De 0 a 10k seguidores y +200% en reservas',
        category: 'Local Business',
        image: '/case-studies/restaurante.jpg',
        date: '2023-09'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Laura Méndez',
        role: 'CEO, FashionCo',
        content: 'Alejandro triplicó nuestras ventas online. Su estrategia y ejecución son impecables. ROI increíble.',
        rating: 5,
        date: '2024-02-01'
      },
      {
        id: '2',
        name: 'StartupTech',
        role: 'Founder',
        content: 'Nos ayudó a escalar de 0 a 1000 clientes. Conoce perfectamente el ecosistema digital.',
        rating: 5,
        date: '2023-12-15'
      }
    ],

    contact: {
      phone: '+1 (555) 012-3456',
      email: 'alejandro@torresmarketing.com',
      whatsapp: '+1-555-012-3456',
      address: {
        street: 'Oficina Virtual - Trabajo 100% Remoto',
        city: 'Ciudad de México',
        state: 'CDMX',
        country: 'México',
        zipCode: '00000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 18:00',
        'Disponible': 'Videollamadas y reuniones online'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/alejandrotorres-marketing',
      twitter: 'https://twitter.com/alejandrotorres',
      instagram: 'https://instagram.com/alejandro.marketing',
      youtube: 'https://youtube.com/alejandrotorresmarketing'
    },

    certifications: [
      'Google Ads Certification',
      'Meta Blueprint Certification',
      'HubSpot Inbound Marketing',
      'Google Analytics Individual Qualification'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto tiempo toma ver resultados?',
        answer: 'Depende del canal. Publicidad pagada: 2-4 semanas. SEO: 3-6 meses. Redes sociales: 1-3 meses.'
      },
      {
        id: '2',
        question: '¿Trabajan con cualquier industria?',
        answer: 'Sí, tengo experiencia en e-commerce, SaaS, servicios profesionales, restaurantes y más.'
      },
      {
        id: '3',
        question: '¿Qué incluye la estrategia digital?',
        answer: 'Análisis completo, definición de objetivos, buyer personas, estrategia de contenido, plan de medios y métricas de éxito.'
      }
    ]
  },

  sections: {
    hero: { enabled: true, variant: 'modern' },
    about: { enabled: true, layout: 'side-image' },
    experience: { enabled: true },
    services: { enabled: true, display: 'grid', columns: 3 },
    portfolio: { enabled: true },
    certifications: { enabled: true },
    testimonials: { enabled: true, carousel: true },
    pricing: { enabled: true },
    faq: { enabled: true },
    contact: { enabled: true, showMap: false },
    footer: { enabled: true }
  },

  seo: {
    title: 'Alejandro Torres - Consultor de Marketing Digital | SEO, Ads & Growth',
    description: '9 años ayudando a negocios a crecer online. Estrategia digital, SEO, publicidad y redes sociales.',
    keywords: ['marketing digital', 'consultor', 'SEO', 'google ads', 'redes sociales', 'growth hacking']
  },

  tags: ['marketing', 'digital', 'SEO', 'publicidad'],
  industry: 'Marketing',
  targetAudience: ['Negocios', 'Startups', 'E-commerce', 'Emprendedores'],
  version: '0.4.0'
}
