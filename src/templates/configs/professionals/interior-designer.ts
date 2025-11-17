/**
 * @fileoverview Interior Designer Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const interiorDesignerTemplate: TemplateConfig = {
  id: 'interior-designer',
  name: 'Diseñador de Interiores',
  category: 'professionals',
  description: 'Template para diseñadores de interiores y decoradores',
  layout: 'professional',
  recommendedTheme: 'creative',

  variables: {
    professionalName: 'Dis. Carolina Vega',
    profession: 'Diseñadora de Interiores',
    yearsExperience: 9,
    tagline: 'Transformando espacios, creando experiencias',
    description: 'Diseñadora de interiores con 9 años creando espacios únicos que reflejan la personalidad de cada cliente. Especializada en diseño residencial contemporáneo y espacios comerciales.',

    specialties: [
      'Diseño Residencial',
      'Espacios Comerciales',
      'Remodelación',
      'Diseño Sustentable',
      'Renders 3D'
    ],

    services: [
      {
        id: 'residential',
        name: 'Diseño Residencial',
        description: 'Diseño integral para tu hogar',
        price: { amount: 2500, currency: 'USD', period: 'project' },
        icon: 'Home',
        features: [
          'Concepto de diseño',
          'Planos y especificaciones',
          'Renders 3D fotorrealistas',
          'Asesoría en compras',
          'Supervisión de obra'
        ],
        highlighted: true
      },
      {
        id: 'commercial',
        name: 'Diseño Comercial',
        description: 'Espacios que potencian tu negocio',
        price: { amount: 4000, currency: 'USD', period: 'project' },
        icon: 'Building',
        features: [
          'Análisis de flujo',
          'Diseño funcional',
          'Branding espacial',
          'Mobiliario especializado',
          'Dirección de proyecto'
        ]
      },
      {
        id: 'consultation',
        name: 'Consultoría de Diseño',
        description: 'Asesoría para tu proyecto',
        price: { amount: 150, currency: 'USD', period: 'hour' },
        icon: 'MessageSquare',
        features: [
          'Evaluación de espacio',
          'Propuestas conceptuales',
          'Paleta de colores',
          'Recomendaciones'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'Residencia Minimalista',
        description: 'Casa 250m² estilo escandinavo',
        category: 'Residencial',
        image: '/portfolio/residencia-minimalista.jpg',
        date: '2024-02'
      },
      {
        id: '2',
        title: 'Café Boutique Centro',
        description: 'Espacio comercial 120m² estilo industrial',
        category: 'Comercial',
        image: '/portfolio/cafe-boutique.jpg',
        date: '2024-01'
      },
      {
        id: '3',
        title: 'Apartamento Moderno',
        description: 'Departamento 90m² contemporáneo',
        category: 'Residencial',
        image: '/portfolio/apartamento-moderno.jpg',
        date: '2023-12'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Andrea y Miguel',
        role: 'Propietarios',
        content: 'Carolina transformó completamente nuestra casa. Su visión y profesionalismo son extraordinarios.',
        rating: 5,
        date: '2024-02-20'
      },
      {
        id: '2',
        name: 'Café Aroma',
        role: 'Cliente Comercial',
        content: 'Diseñó nuestro café y ahora es el favorito de la zona. Excelente trabajo y atención al detalle.',
        rating: 5,
        date: '2024-01-15'
      }
    ],

    contact: {
      phone: '+1 (555) 567-8901',
      email: 'hola@carolinavega.design',
      whatsapp: '+1-555-567-8901',
      address: {
        street: 'Estudio de Diseño, Calle Creatividad 789',
        city: 'San Miguel de Allende',
        state: 'Guanajuato',
        country: 'México',
        zipCode: '37700'
      },
      schedule: {
        'Lunes - Viernes': '10:00 - 18:00',
        'Sábado': 'Solo con cita',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      instagram: 'https://instagram.com/carolinavega.design',
      pinterest: 'https://pinterest.com/carolinavegadesign',
      behance: 'https://behance.net/carolinavega'
    },

    certifications: [
      'Licenciatura en Diseño de Interiores - UANL',
      'Certificación LEED Green Associate',
      'Miembro del Colegio de Diseñadores de Interiores',
      'Certificación en Diseño Sustentable'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto tiempo toma un proyecto?',
        answer: 'Proyectos residenciales típicos toman 2-3 meses desde concepto hasta instalación. Proyectos comerciales 3-4 meses.'
      },
      {
        id: '2',
        question: '¿Qué incluye el servicio?',
        answer: 'Diseño completo, renders 3D, planos, especificaciones, asesoría en compras y supervisión de instalación.'
      },
      {
        id: '3',
        question: '¿Trabajan en otras ciudades?',
        answer: 'Sí, trabajo proyectos en todo México. Para proyectos fuera de San Miguel hay un costo adicional de viáticos.'
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
    title: 'Carolina Vega - Diseñadora de Interiores | San Miguel de Allende',
    description: '9 años transformando espacios. Diseño residencial, comercial y consultoría. Renders 3D incluidos.',
    keywords: ['diseñador de interiores', 'decoración', 'remodelación', 'diseño', 'san miguel de allende']
  },

  tags: ['diseño', 'interiores', 'decoración', 'remodelación'],
  industry: 'Interior Design',
  targetAudience: ['Propietarios', 'Desarrolladores', 'Negocios'],
  version: '0.4.0'
}
