/**
 * @fileoverview Architect Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const architectTemplate: TemplateConfig = {
  id: 'architect',
  name: 'Arquitecto Profesional',
  category: 'professionals',
  description: 'Template para estudios de arquitectura y arquitectos independientes',
  layout: 'professional',
  recommendedTheme: 'modern',

  variables: {
    professionalName: 'Arq. Ana Torres',
    profession: 'Arquitecta Especializada en Diseño Sustentable',
    yearsExperience: 10,
    tagline: 'Diseñando espacios que inspiran',
    description: 'Arquitecta con 10 años de experiencia en diseño arquitectónico residencial, comercial y sustentable. Especializada en crear espacios funcionales y estéticamente excepcionales.',

    specialties: [
      'Diseño Residencial',
      'Arquitectura Comercial',
      'Diseño Sustentable',
      'Remodelaciones',
      'Renders 3D'
    ],

    services: [
      {
        id: 'residential',
        name: 'Diseño Residencial',
        description: 'Proyectos arquitectónicos para casas y departamentos',
        price: { amount: 3000, currency: 'USD', period: 'project' },
        icon: 'Home',
        features: [
          'Levantamiento',
          'Planos arquitectónicos',
          'Renders 3D',
          'Seguimiento de obra'
        ],
        highlighted: true
      },
      {
        id: 'commercial',
        name: 'Arquitectura Comercial',
        description: 'Diseño de espacios comerciales y oficinas',
        price: { amount: 5000, currency: 'USD', period: 'project' },
        icon: 'Building',
        features: [
          'Análisis de necesidades',
          'Diseño conceptual',
          'Planos ejecutivos',
          'Permisos y licencias'
        ]
      },
      {
        id: 'remodeling',
        name: 'Remodelación',
        description: 'Renovación y actualización de espacios existentes',
        price: { amount: 2000, currency: 'USD', period: 'project' },
        icon: 'Tool',
        features: [
          'Evaluación del espacio',
          'Propuesta de diseño',
          'Presupuesto detallado',
          'Dirección de obra'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'Casa Moderna Lomas',
        description: 'Residencia de 300m² con diseño minimalista y sustentable',
        category: 'Residencial',
        image: '/projects/casa-lomas.jpg',
        date: '2023-12'
      },
      {
        id: '2',
        title: 'Oficinas Tech Corp',
        description: 'Espacio de trabajo colaborativo de 500m²',
        category: 'Comercial',
        image: '/projects/oficinas-tech.jpg',
        date: '2023-09'
      },
      {
        id: '3',
        title: 'Remodelación Apartamento Centro',
        description: 'Transformación completa de 120m²',
        category: 'Remodelación',
        image: '/projects/apto-centro.jpg',
        date: '2024-01'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Miguel Ángel Ruiz',
        role: 'Cliente Residencial',
        content: 'Ana diseñó la casa de nuestros sueños. Su atención al detalle y creatividad son excepcionales.',
        rating: 5,
        date: '2024-01-10'
      },
      {
        id: '2',
        name: 'Empresa TechCorp',
        role: 'Cliente Comercial',
        content: 'Nuestras nuevas oficinas son increíbles. Ana entendió perfectamente nuestra visión y cultura.',
        rating: 5,
        date: '2023-11-20'
      }
    ],

    contact: {
      phone: '+1 (555) 345-6789',
      email: 'contacto@anatorres.arq',
      whatsapp: '+1-555-345-6789',
      address: {
        street: 'Av. Arquitectos 789, Estudio 5',
        city: 'Monterrey',
        state: 'Nuevo León',
        country: 'México',
        zipCode: '64000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 19:00',
        'Sábado': 'Solo con cita',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      instagram: 'https://instagram.com/anatorres.arq',
      behance: 'https://behance.net/anatorres',
      linkedin: 'https://linkedin.com/in/anatorresarq'
    },

    certifications: [
      'Cédula Profesional 5555555 - UANL',
      'Colegio de Arquitectos de Nuevo León',
      'LEED Accredited Professional',
      'Certificación en Diseño Sustentable'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto tiempo toma un proyecto arquitectónico?',
        answer: 'Depende de la complejidad. Un proyecto residencial típico toma 2-3 meses desde el concepto hasta los planos ejecutivos.'
      },
      {
        id: '2',
        question: '¿Qué incluye el servicio de diseño?',
        answer: 'Incluye levantamiento, planos arquitectónicos, renders 3D, especificaciones técnicas y seguimiento durante la construcción.'
      },
      {
        id: '3',
        question: '¿Trabajan en otras ciudades?',
        answer: 'Sí, trabajamos proyectos en todo México. Para proyectos fuera de Monterrey hay un costo adicional de viáticos.'
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
    contact: { enabled: true, showMap: true },
    footer: { enabled: true }
  },

  seo: {
    title: 'Arq. Ana Torres - Arquitecta Especialista | Diseño Residencial y Comercial',
    description: '10 años diseñando espacios excepcionales. Arquitectura residencial, comercial y sustentable en Monterrey.',
    keywords: ['arquitecto', 'diseño arquitectónico', 'arquitectura residencial', 'monterrey', 'diseño sustentable']
  },

  tags: ['arquitectura', 'diseño', 'construcción', 'renders'],
  industry: 'Architecture',
  targetAudience: ['Propietarios', 'Desarrolladores', 'Empresas'],
  version: '0.4.0'
}
