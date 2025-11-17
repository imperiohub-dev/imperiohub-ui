/**
 * @fileoverview Life Coach Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const lifeCoachTemplate: TemplateConfig = {
  id: 'life-coach',
  name: 'Coach de Vida',
  category: 'professionals',
  description: 'Template para coaches de vida y desarrollo personal',
  layout: 'professional',
  recommendedTheme: 'wellness',

  variables: {
    professionalName: 'Coach Mariana Campos',
    profession: 'Certified Life & Career Coach',
    yearsExperience: 6,
    tagline: 'Despierta tu mejor versión y alcanza tus sueños',
    description: 'Coach certificada con 6 años ayudando a personas a descubrir su propósito, superar obstáculos y crear la vida que desean. Especializada en transiciones de carrera, desarrollo personal y equilibrio vida-trabajo.',

    specialties: [
      'Life Coaching',
      'Career Coaching',
      'Desarrollo Personal',
      'Balance Vida-Trabajo',
      'Establecimiento de Metas'
    ],

    services: [
      {
        id: 'individual',
        name: 'Coaching Individual',
        description: 'Sesiones 1-a-1 transformadoras',
        price: { amount: 120, currency: 'USD', period: 'session' },
        icon: 'Target',
        features: [
          'Sesiones 90 minutos',
          'Plan personalizado',
          'Ejercicios prácticos',
          'Seguimiento entre sesiones',
          'Material de apoyo'
        ],
        highlighted: true
      },
      {
        id: 'program',
        name: 'Programa Transformación 3 Meses',
        description: 'Proceso completo de cambio',
        price: { amount: 1200, currency: 'USD', period: 'project' },
        icon: 'TrendingUp',
        features: [
          '12 sesiones',
          'Evaluaciones mensuales',
          'Plan de acción detallado',
          'Soporte vía email',
          'Recursos digitales'
        ]
      },
      {
        id: 'group',
        name: 'Talleres Grupales',
        description: 'Experiencias de crecimiento en grupo',
        price: { amount: 80, currency: 'USD', period: 'session' },
        icon: 'Users',
        features: [
          'Grupos 8-12 personas',
          'Temas mensuales',
          'Networking',
          'Actividades vivenciales'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Roberto M.',
        role: 'Profesionista',
        content: 'Mariana me ayudó a hacer el cambio de carrera que necesitaba. Ahora trabajo en lo que amo. Gracias!',
        rating: 5,
        date: '2024-02-01'
      },
      {
        id: '2',
        name: 'Laura G.',
        role: 'Emprendedora',
        content: 'Su coaching me dio claridad y confianza para lanzar mi negocio. Inversión que valió completamente la pena.',
        rating: 5,
        date: '2024-01-10'
      }
    ],

    contact: {
      phone: '+1 (555) 890-1234',
      email: 'hola@marianacoach.com',
      whatsapp: '+1-555-890-1234',
      address: {
        street: 'Espacio de Coaching, Calle Crecimiento 369',
        city: 'Playa del Carmen',
        state: 'Quintana Roo',
        country: 'México',
        zipCode: '77710'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 19:00',
        'Sábado': 'Talleres programados',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      instagram: 'https://instagram.com/marianacoach',
      facebook: 'https://facebook.com/marianacamposcoach',
      linkedin: 'https://linkedin.com/in/marianacampos-coach',
      youtube: 'https://youtube.com/marianacoach'
    },

    certifications: [
      'Certified Life Coach - ICF',
      'Career Development Facilitator',
      'NLP Practitioner Certification',
      'Certificación en Inteligencia Emocional'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuál es la diferencia entre coaching y terapia?',
        answer: 'El coaching se enfoca en el futuro y metas, mientras la terapia trabaja problemas del pasado. Si necesitas terapia, te refiero con profesionales.'
      },
      {
        id: '2',
        question: '¿Cuántas sesiones necesitaré?',
        answer: 'Depende de tus objetivos. Algunos clientes ven resultados en 6 sesiones, otros prefieren procesos de 3-6 meses.'
      },
      {
        id: '3',
        question: '¿Ofrecen coaching online?',
        answer: 'Sí, la mayoría de mis clientes son online. Uso plataformas profesionales que garantizan privacidad y calidad.'
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
    contact: { enabled: true, showMap: false },
    footer: { enabled: true }
  },

  seo: {
    title: 'Mariana Campos - Life & Career Coach Certificada | Playa del Carmen',
    description: '6 años ayudando a personas a alcanzar sus sueños. Coaching de vida, carrera y desarrollo personal.',
    keywords: ['life coach', 'coaching', 'desarrollo personal', 'carrera', 'transformación', 'playa del carmen']
  },

  tags: ['coaching', 'desarrollo personal', 'carrera', 'transformación'],
  industry: 'Coaching',
  targetAudience: ['Profesionistas', 'Emprendedores', 'Personas en transición'],
  version: '0.4.0'
}
