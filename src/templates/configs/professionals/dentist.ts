/**
 * @fileoverview Dentist Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const dentistTemplate: TemplateConfig = {
  id: 'dentist',
  name: 'Dentista Profesional',
  category: 'professionals',
  description: 'Template para clínicas dentales y odontólogos',
  layout: 'professional',
  recommendedTheme: 'healthcare',

  variables: {
    professionalName: 'Dra. Patricia Gómez',
    profession: 'Cirujana Dentista Especialista',
    yearsExperience: 13,
    tagline: 'Tu sonrisa es nuestra especialidad',
    description: 'Cirujana dentista con 13 años de experiencia en odontología general, estética y ortodoncia. Tecnología de punta y atención personalizada para toda la familia.',

    specialties: [
      'Odontología General',
      'Estética Dental',
      'Ortodoncia',
      'Implantes Dentales',
      'Endodoncia'
    ],

    services: [
      {
        id: 'checkup',
        name: 'Consulta y Limpieza',
        description: 'Revisión completa e higiene dental profesional',
        price: { amount: 60, currency: 'USD', period: 'session' },
        icon: 'Smile',
        features: [
          'Revisión dental completa',
          'Limpieza profunda',
          'Aplicación de flúor',
          'Recomendaciones personalizadas'
        ],
        highlighted: true
      },
      {
        id: 'aesthetics',
        name: 'Estética Dental',
        description: 'Blanqueamiento, carillas y diseño de sonrisa',
        price: { amount: 300, currency: 'USD', period: 'session' },
        icon: 'Star',
        features: [
          'Diseño digital de sonrisa',
          'Blanqueamiento láser',
          'Carillas de porcelana',
          'Resultados naturales'
        ]
      },
      {
        id: 'orthodontics',
        name: 'Ortodoncia',
        description: 'Brackets tradicionales e invisibles',
        price: { amount: 150, currency: 'USD', period: 'month' },
        icon: 'Grid',
        features: [
          'Estudio ortodóncico',
          'Brackets metálicos o estéticos',
          'Invisalign disponible',
          'Seguimiento mensual'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Fernando Silva',
        role: 'Paciente',
        content: 'La Dra. Gómez es excelente. Mi tratamiento de ortodoncia fue un éxito total.',
        rating: 5,
        date: '2024-01-10'
      },
      {
        id: '2',
        name: 'Lucía Hernández',
        role: 'Paciente',
        content: 'Transformó completamente mi sonrisa con carillas. Súper profesional y cuidadosa.',
        rating: 5,
        date: '2024-02-05'
      }
    ],

    contact: {
      phone: '+1 (555) 789-0123',
      email: 'citas@drapgomez.com',
      whatsapp: '+1-555-789-0123',
      address: {
        street: 'Av. Sonrisa 258, Plaza Dental',
        city: 'Tijuana',
        state: 'Baja California',
        country: 'México',
        zipCode: '22000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 19:00',
        'Sábado': '9:00 - 14:00',
        'Domingo': 'Solo urgencias'
      }
    },

    social: {
      instagram: 'https://instagram.com/dra.pgomez.dental',
      facebook: 'https://facebook.com/gomezdentalclinic',
      tiktok: 'https://tiktok.com/@dra.pgomez'
    },

    certifications: [
      'Cédula Profesional 3334445 - UABC',
      'Especialidad en Ortodoncia - UNAM',
      'Certificación Invisalign Provider',
      'Colegio Dental de Baja California'
    ],

    faq: [
      {
        id: '1',
        question: '¿Aceptan seguros dentales?',
        answer: 'Sí, trabajamos con los principales seguros dentales. También ofrecemos planes de financiamiento.'
      },
      {
        id: '2',
        question: '¿El blanqueamiento es doloroso?',
        answer: 'Nuestro sistema láser es indoloro. Puede haber sensibilidad temporal que se controla fácilmente.'
      },
      {
        id: '3',
        question: '¿Cuánto dura un tratamiento de ortodoncia?',
        answer: 'Depende del caso, pero generalmente entre 12-24 meses. Lo determinamos en el estudio inicial.'
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
    title: 'Dra. Patricia Gómez - Dentista | Estética Dental, Ortodoncia e Implantes',
    description: '13 años creando sonrisas perfectas. Tecnología de punta y atención personalizada en Tijuana.',
    keywords: ['dentista', 'ortodoncia', 'estética dental', 'blanqueamiento', 'implantes', 'tijuana']
  },

  tags: ['dental', 'ortodoncia', 'estética', 'salud bucal'],
  industry: 'Dentistry',
  targetAudience: ['Familias', 'Adultos', 'Niños'],
  version: '0.4.0'
}
