/**
 * @fileoverview Photographer Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const photographerTemplate: TemplateConfig = {
  id: 'photographer',
  name: 'Fotógrafo Profesional',
  category: 'professionals',
  description: 'Template para fotógrafos profesionales y estudios fotográficos',
  layout: 'professional',
  recommendedTheme: 'creative',

  variables: {
    professionalName: 'Roberto Vega',
    profession: 'Fotógrafo Profesional',
    yearsExperience: 8,
    tagline: 'Capturando momentos que duran para siempre',
    description: 'Fotógrafo profesional con 8 años inmortalizando bodas, eventos corporativos y retratos. Mi pasión es contar historias a través de imágenes auténticas y emotivas.',

    specialties: [
      'Fotografía de Bodas',
      'Eventos Corporativos',
      'Retratos Profesionales',
      'Fotografía de Producto',
      'Sesiones Familiares'
    ],

    services: [
      {
        id: 'wedding',
        name: 'Fotografía de Bodas',
        description: 'Cobertura completa de tu día especial',
        price: { amount: 1500, currency: 'USD', period: 'project' },
        icon: 'Camera',
        features: [
          'Cobertura 8-10 horas',
          '300+ fotos editadas',
          'Álbum digital',
          'Segundo fotógrafo incluido'
        ],
        highlighted: true
      },
      {
        id: 'portrait',
        name: 'Sesión de Retratos',
        description: 'Retratos profesionales para headshots y branding',
        price: { amount: 200, currency: 'USD', period: 'session' },
        icon: 'User',
        features: [
          'Sesión 1-2 horas',
          '20 fotos editadas',
          'Cambios de outfit',
          'Entrega en 7 días'
        ]
      },
      {
        id: 'corporate',
        name: 'Eventos Corporativos',
        description: 'Cobertura profesional de eventos empresariales',
        price: { amount: 500, currency: 'USD', period: 'project' },
        icon: 'Briefcase',
        features: [
          'Cobertura completa',
          'Entrega en 48 horas',
          'Fotos para redes sociales',
          'Edición profesional'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'Boda Ana & Carlos',
        description: 'Ceremonia en jardín y recepción elegante',
        category: 'Bodas',
        image: '/portfolio/boda-ana-carlos.jpg',
        date: '2024-02'
      },
      {
        id: '2',
        title: 'Sesión Corporativa TechCo',
        description: 'Headshots profesionales para equipo de 50 personas',
        category: 'Corporativo',
        image: '/portfolio/techco-headshots.jpg',
        date: '2024-01'
      },
      {
        id: '3',
        title: 'Familia Hernández',
        description: 'Sesión familiar en exteriores',
        category: 'Familiar',
        image: '/portfolio/familia-hernandez.jpg',
        date: '2023-12'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Ana & Carlos',
        role: 'Pareja de novios',
        content: 'Roberto capturó nuestra boda de manera mágica. Las fotos son increíbles y el servicio impecable.',
        rating: 5,
        date: '2024-02-14'
      },
      {
        id: '2',
        name: 'TechCo Inc.',
        role: 'Cliente Corporativo',
        content: 'Profesional, puntual y con excelentes resultados. Definitivamente lo contrataremos nuevamente.',
        rating: 5,
        date: '2024-01-20'
      }
    ],

    contact: {
      phone: '+1 (555) 901-2345',
      email: 'hola@robertovega.photo',
      whatsapp: '+1-555-901-2345',
      address: {
        street: 'Estudio Creativo, Calle Arte 147',
        city: 'Oaxaca',
        state: 'Oaxaca',
        country: 'México',
        zipCode: '68000'
      },
      schedule: {
        'Lunes - Viernes': '10:00 - 19:00',
        'Fines de semana': 'Eventos y sesiones programadas'
      }
    },

    social: {
      instagram: 'https://instagram.com/robertovega.photo',
      facebook: 'https://facebook.com/robertovegafotografia',
      behance: 'https://behance.net/robertovega'
    },

    certifications: [
      'Certificación Professional Photographers of America',
      'Diplomado en Fotografía Documental',
      'Workshop Lighting Mastery - Joe McNally'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuándo recibo mis fotos?',
        answer: 'Bodas: 4-6 semanas. Retratos y corporativos: 7-10 días. Entregas express disponibles.'
      },
      {
        id: '2',
        question: '¿Incluyen los archivos RAW?',
        answer: 'Los archivos RAW están disponibles por un costo adicional de $200. Incluimos todos los JPEGs editados.'
      },
      {
        id: '3',
        question: '¿Viajan para eventos?',
        answer: 'Sí, trabajamos eventos en todo México. Gastos de viaje se cotizan por separado.'
      }
    ]
  },

  sections: {
    hero: { enabled: true, variant: 'modern' },
    about: { enabled: true, layout: 'side-image' },
    experience: { enabled: true },
    services: { enabled: true, display: 'grid', columns: 3 },
    portfolio: { enabled: true },
    testimonials: { enabled: true, carousel: true },
    pricing: { enabled: true },
    faq: { enabled: true },
    contact: { enabled: true, showMap: false },
    footer: { enabled: true }
  },

  seo: {
    title: 'Roberto Vega - Fotógrafo Profesional | Bodas, Retratos y Eventos',
    description: '8 años capturando momentos únicos. Fotografía de bodas, retratos y eventos corporativos en Oaxaca.',
    keywords: ['fotógrafo', 'bodas', 'eventos', 'retratos', 'fotografía profesional', 'oaxaca']
  },

  tags: ['fotografía', 'bodas', 'retratos', 'eventos'],
  industry: 'Photography',
  targetAudience: ['Novios', 'Familias', 'Empresas'],
  version: '0.4.0'
}
