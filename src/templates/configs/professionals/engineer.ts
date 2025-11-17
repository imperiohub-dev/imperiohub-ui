/**
 * @fileoverview Engineer Consultant Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const engineerTemplate: TemplateConfig = {
  id: 'engineer',
  name: 'Ingeniero Consultor',
  category: 'professionals',
  description: 'Template para ingenieros consultores y firmas de ingeniería',
  layout: 'professional',
  recommendedTheme: 'professional',

  variables: {
    professionalName: 'Ing. Alberto Ramos, MSc',
    profession: 'Ingeniero Civil Estructural',
    yearsExperience: 14,
    tagline: 'Soluciones de ingeniería con excelencia técnica',
    description: 'Ingeniero civil con 14 años de experiencia en diseño estructural, supervisión de obra y consultoría técnica. Maestría en Ingeniería Estructural y amplia experiencia en proyectos residenciales, comerciales e industriales.',

    specialties: [
      'Diseño Estructural',
      'Supervisión de Obra',
      'Dictámenes Técnicos',
      'Cálculo Estructural',
      'Proyectos Especiales'
    ],

    services: [
      {
        id: 'structural',
        name: 'Diseño Estructural',
        description: 'Cálculo y diseño de estructuras',
        price: { amount: 3000, currency: 'USD', period: 'project' },
        icon: 'Grid',
        features: [
          'Análisis estructural',
          'Planos estructurales',
          'Memoria de cálculo',
          'Especificaciones técnicas',
          'Revisión de normativas'
        ],
        highlighted: true
      },
      {
        id: 'supervision',
        name: 'Supervisión de Obra',
        description: 'Dirección técnica y control de calidad',
        price: { amount: 2000, currency: 'USD', period: 'month' },
        icon: 'Eye',
        features: [
          'Supervisión técnica',
          'Control de calidad',
          'Bitácora de obra',
          'Reportes periódicos',
          'Solución de problemas'
        ]
      },
      {
        id: 'assessment',
        name: 'Dictamen Estructural',
        description: 'Evaluación de seguridad estructural',
        price: { amount: 1500, currency: 'USD', period: 'project' },
        icon: 'FileText',
        features: [
          'Inspección detallada',
          'Análisis de daños',
          'Dictamen técnico',
          'Recomendaciones',
          'Validación oficial'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'Torre Corporativa 15 Niveles',
        description: 'Diseño estructural completo edificio comercial',
        category: 'Comercial',
        image: '/projects/torre-corporativa.jpg',
        date: '2024-01'
      },
      {
        id: '2',
        title: 'Nave Industrial 2000m²',
        description: 'Estructura metálica y cimentación',
        category: 'Industrial',
        image: '/projects/nave-industrial.jpg',
        date: '2023-11'
      },
      {
        id: '3',
        title: 'Conjunto Residencial',
        description: '40 viviendas, diseño y supervisión',
        category: 'Residencial',
        image: '/projects/conjunto-residencial.jpg',
        date: '2023-09'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Constructora Delta',
        role: 'Cliente Corporativo',
        content: 'Alberto supervisó nuestra torre de oficinas. Profesionalismo y conocimiento técnico excepcionales.',
        rating: 5,
        date: '2024-02-05'
      },
      {
        id: '2',
        name: 'Desarrollo Inmobiliario Norte',
        role: 'Desarrollador',
        content: 'Ha trabajado en 3 proyectos con nosotros. Confiabilidad y calidad garantizadas.',
        rating: 5,
        date: '2023-12-10'
      }
    ],

    contact: {
      phone: '+1 (555) 678-9012',
      email: 'contacto@ramosingenieria.com',
      whatsapp: '+1-555-678-9012',
      address: {
        street: 'Despacho de Ingeniería, Torre Profesional Piso 8',
        city: 'Guadalajara',
        state: 'Jalisco',
        country: 'México',
        zipCode: '44100'
      },
      schedule: {
        'Lunes - Viernes': '8:00 - 18:00',
        'Sábado': 'Solo con cita',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/albertoramos-ing',
      facebook: 'https://facebook.com/ramosingenieria'
    },

    certifications: [
      'Cédula Profesional 6667778 - UDG',
      'Maestría en Ingeniería Estructural - UNAM',
      'Colegio de Ingenieros Civiles de Jalisco',
      'Perito Autorizado DRO',
      'Certificación en Software de Análisis Estructural'
    ],

    faq: [
      {
        id: '1',
        question: '¿Qué normativa utilizan?',
        answer: 'Trabajamos con normativa mexicana vigente (MOC, NTC) y códigos internacionales cuando el proyecto lo requiere.'
      },
      {
        id: '2',
        question: '¿Cuánto tiempo toma un diseño estructural?',
        answer: 'Depende de la complejidad. Proyectos residenciales 2-3 semanas, comerciales 1-2 meses, proyectos especiales se evalúan individualmente.'
      },
      {
        id: '3',
        question: '¿Trabajan en otras ciudades?',
        answer: 'Sí, trabajamos proyectos en todo el país. Para supervisión de obra fuera de GDL se cotiza por separado.'
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
    pricing: { enabled: true },
    faq: { enabled: true },
    contact: { enabled: true, showMap: true },
    footer: { enabled: true }
  },

  seo: {
    title: 'Ing. Alberto Ramos - Ingeniero Civil Estructural | Guadalajara',
    description: '14 años en diseño estructural, supervisión y consultoría. Proyectos residenciales, comerciales e industriales.',
    keywords: ['ingeniero civil', 'diseño estructural', 'supervisión de obra', 'dictamen estructural', 'guadalajara']
  },

  tags: ['ingeniería', 'estructural', 'construcción', 'diseño'],
  industry: 'Engineering',
  targetAudience: ['Constructoras', 'Desarrolladores', 'Arquitectos', 'Propietarios'],
  version: '0.4.0'
}
