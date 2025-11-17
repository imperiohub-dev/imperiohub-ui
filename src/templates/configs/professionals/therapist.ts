/**
 * @fileoverview Therapist Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const therapistTemplate: TemplateConfig = {
  id: 'therapist',
  name: 'Terapeuta Profesional',
  category: 'professionals',
  description: 'Template para terapeutas y psicoterapeutas',
  layout: 'professional',
  recommendedTheme: 'wellness',

  variables: {
    professionalName: 'Lic. Elena Mora',
    profession: 'Psicoterapeuta Clínica',
    yearsExperience: 11,
    tagline: 'Acompañándote en tu camino hacia el bienestar',
    description: 'Psicoterapeuta con 11 años de experiencia en terapia individual, de pareja y familiar. Enfoque humanista e integrativo, especializada en ansiedad, depresión y relaciones.',

    specialties: [
      'Terapia Individual',
      'Terapia de Pareja',
      'Terapia Familiar',
      'Manejo de Ansiedad',
      'Terapia Cognitivo-Conductual'
    ],

    services: [
      {
        id: 'individual',
        name: 'Terapia Individual',
        description: 'Sesiones personalizadas para tu crecimiento personal',
        price: { amount: 90, currency: 'USD', period: 'session' },
        icon: 'User',
        features: [
          'Sesiones de 60 minutos',
          'Enfoque personalizado',
          'Herramientas prácticas',
          'Seguimiento continuo'
        ],
        highlighted: true
      },
      {
        id: 'couples',
        name: 'Terapia de Pareja',
        description: 'Fortaleciendo vínculos y mejorando comunicación',
        price: { amount: 120, currency: 'USD', period: 'session' },
        icon: 'Heart',
        features: [
          'Sesiones de 90 minutos',
          'Mejora de comunicación',
          'Resolución de conflictos',
          'Ejercicios prácticos'
        ]
      },
      {
        id: 'family',
        name: 'Terapia Familiar',
        description: 'Armonía y entendimiento familiar',
        price: { amount: 130, currency: 'USD', period: 'session' },
        icon: 'Users',
        features: [
          'Sesiones de 90 minutos',
          'Dinámicas familiares',
          'Mediación de conflictos',
          'Fortalecimiento de lazos'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Andrea M.',
        role: 'Paciente',
        content: 'Elena me ayudó a superar mi ansiedad. Su empatía y profesionalismo son excepcionales.',
        rating: 5,
        date: '2024-02-15'
      },
      {
        id: '2',
        name: 'Carlos y Laura',
        role: 'Pareja',
        content: 'Salvó nuestra relación. Nos enseñó a comunicarnos de manera efectiva.',
        rating: 5,
        date: '2024-01-20'
      }
    ],

    contact: {
      phone: '+1 (555) 678-9012',
      email: 'contacto@elenamora.com',
      whatsapp: '+1-555-678-9012',
      address: {
        street: 'Calle Bienestar 147, Consultorio 3',
        city: 'Querétaro',
        state: 'Querétaro',
        country: 'México',
        zipCode: '76000'
      },
      schedule: {
        'Lunes - Viernes': '10:00 - 20:00',
        'Sábado': '10:00 - 15:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      instagram: 'https://instagram.com/elenamora.terapia',
      facebook: 'https://facebook.com/elenamora.psicoterapeuta',
      linkedin: 'https://linkedin.com/in/elenamora'
    },

    certifications: [
      'Cédula Profesional 1112223 - UAQ',
      'Certificación en Terapia Cognitivo-Conductual',
      'Diplomado en Terapia de Pareja',
      'Miembro de la Asociación Mexicana de Psicoterapia'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuántas sesiones necesitaré?',
        answer: 'Varía según cada persona. Algunos ven mejoras en 8-12 sesiones, otros requieren más tiempo. Lo evaluamos juntos.'
      },
      {
        id: '2',
        question: '¿Ofrecen terapia online?',
        answer: 'Sí, todas las modalidades de terapia están disponibles por videollamada con la misma calidad.'
      },
      {
        id: '3',
        question: '¿Es confidencial?',
        answer: 'Absolutamente. Todo lo compartido está protegido por secreto profesional y ética terapéutica.'
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
    title: 'Lic. Elena Mora - Psicoterapeuta | Terapia Individual, Pareja y Familiar',
    description: '11 años ayudando a personas a alcanzar bienestar emocional. Terapia presencial y online desde $90 USD.',
    keywords: ['terapeuta', 'psicoterapia', 'terapia de pareja', 'ansiedad', 'depresión', 'querétaro']
  },

  tags: ['terapia', 'psicología', 'bienestar', 'salud mental'],
  industry: 'Mental Health',
  targetAudience: ['Individuos', 'Parejas', 'Familias'],
  version: '0.4.0'
}
