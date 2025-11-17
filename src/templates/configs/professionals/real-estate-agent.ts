/**
 * @fileoverview Real Estate Agent Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const realEstateAgentTemplate: TemplateConfig = {
  id: 'real-estate-agent',
  name: 'Agente Inmobiliario',
  category: 'professionals',
  description: 'Template para agentes inmobiliarios y corredores',
  layout: 'professional',
  recommendedTheme: 'corporate',

  variables: {
    professionalName: 'Lic. Gabriela Soto',
    profession: 'Agente Inmobiliario Certificado',
    yearsExperience: 11,
    tagline: 'Encontrando el hogar de tus sueños',
    description: 'Agente inmobiliario con 11 años de experiencia en compra, venta y renta de propiedades residenciales y comerciales. Conocimiento profundo del mercado local y negociación experta.',

    specialties: [
      'Venta de Propiedades',
      'Compra de Inmuebles',
      'Rentas Residenciales',
      'Inversión Inmobiliaria',
      'Propiedades de Lujo'
    ],

    services: [
      {
        id: 'sell',
        name: 'Venta de Propiedades',
        description: 'Vende tu propiedad al mejor precio',
        price: { amount: 0, currency: 'USD', period: 'project' },
        icon: 'Home',
        features: [
          'Valuación profesional',
          'Marketing digital',
          'Tour virtual 360°',
          'Negociación experta',
          'Comisión solo al cerrar'
        ],
        highlighted: true
      },
      {
        id: 'buy',
        name: 'Asesoría de Compra',
        description: 'Encuentra tu propiedad ideal',
        price: { amount: 0, currency: 'USD', period: 'project' },
        icon: 'Search',
        features: [
          'Búsqueda personalizada',
          'Análisis de mercado',
          'Visitas guiadas',
          'Asesoría legal',
          'Sin costo para compradores'
        ]
      },
      {
        id: 'investment',
        name: 'Inversión Inmobiliaria',
        description: 'Maximiza tu retorno de inversión',
        price: { amount: 300, currency: 'USD', period: 'hour' },
        icon: 'TrendingUp',
        features: [
          'Análisis de ROI',
          'Identificación de oportunidades',
          'Proyecciones financieras',
          'Estrategia de inversión'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'Casa Moderna Lomas Verdes',
        description: '4 recámaras, 300m² - $450,000 USD',
        category: 'Vendida',
        image: '/listings/lomas-verdes.jpg',
        date: '2024-02'
      },
      {
        id: '2',
        title: 'Departamento Centro',
        description: '2 recámaras, 120m² - $180,000 USD',
        category: 'Vendido',
        image: '/listings/depto-centro.jpg',
        date: '2024-01'
      },
      {
        id: '3',
        title: 'Local Comercial',
        description: '200m², zona premium - $320,000 USD',
        category: 'Vendido',
        image: '/listings/local-comercial.jpg',
        date: '2023-12'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Familia Ramírez',
        role: 'Compradores',
        content: 'Gabriela nos ayudó a encontrar la casa perfecta. Profesional, paciente y excelente negociadora.',
        rating: 5,
        date: '2024-02-08'
      },
      {
        id: '2',
        name: 'Jorge Mendoza',
        role: 'Vendedor',
        content: 'Vendió mi propiedad en 3 semanas al precio que quería. Su estrategia de marketing es excelente.',
        rating: 5,
        date: '2024-01-20'
      }
    ],

    contact: {
      phone: '+1 (555) 456-7890',
      email: 'gabriela@sotorealestate.com',
      whatsapp: '+1-555-456-7890',
      address: {
        street: 'Oficina Corporativa, Av. Real Estate 456',
        city: 'Cancún',
        state: 'Quintana Roo',
        country: 'México',
        zipCode: '77500'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 19:00',
        'Sábado': '10:00 - 18:00',
        'Domingo': '11:00 - 15:00'
      }
    },

    social: {
      instagram: 'https://instagram.com/gabrielasoto.realestate',
      facebook: 'https://facebook.com/gabrielasotopropiedades',
      linkedin: 'https://linkedin.com/in/gabrielasoto-realestate'
    },

    certifications: [
      'Agente Inmobiliario Certificado - AMPI',
      'Certificación Internacional en Bienes Raíces',
      'Especialización en Propiedades de Lujo',
      'NAR (National Association of Realtors)'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto cobran de comisión?',
        answer: 'La comisión estándar es 4-6% del valor de venta, pagadera solo al cerrar la operación exitosamente.'
      },
      {
        id: '2',
        question: '¿Cuánto tiempo toma vender una propiedad?',
        answer: 'Depende del mercado y precio. En promedio, propiedades bien valuadas se venden en 60-90 días.'
      },
      {
        id: '3',
        question: '¿Ofrecen servicio de staging?',
        answer: 'Sí, tenemos alianzas con profesionales de staging para presentar tu propiedad de la mejor manera.'
      }
    ]
  },

  sections: {
    hero: { enabled: true, variant: 'professional' },
    about: { enabled: true, layout: 'side-image' },
    experience: { enabled: true },
    services: { enabled: true, display: 'grid', columns: 3 },
    portfolio: { enabled: true },
    certifications: { enabled: true },
    testimonials: { enabled: true, carousel: true },
    faq: { enabled: true },
    contact: { enabled: true, showMap: true },
    footer: { enabled: true }
  },

  seo: {
    title: 'Gabriela Soto - Agente Inmobiliario Certificado | Cancún',
    description: '11 años ayudando a comprar y vender propiedades. Experta en el mercado inmobiliario de Cancún y Riviera Maya.',
    keywords: ['agente inmobiliario', 'bienes raíces', 'venta de casas', 'compra de propiedades', 'cancún']
  },

  tags: ['bienes raíces', 'inmobiliaria', 'propiedades', 'inversión'],
  industry: 'Real Estate',
  targetAudience: ['Compradores', 'Vendedores', 'Inversionistas'],
  version: '0.4.0'
}
