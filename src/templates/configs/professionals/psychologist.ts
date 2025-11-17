/**
 * @fileoverview Psychologist Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const psychologistTemplate: TemplateConfig = {
  id: 'psychologist',
  name: 'Psicólogo Clínico',
  category: 'professionals',
  description: 'Template para psicólogos clínicos y terapeutas',
  layout: 'professional',
  recommendedTheme: 'wellness',

  variables: {
    professionalName: 'Lic. Fernando Delgado',
    profession: 'Psicólogo Clínico',
    yearsExperience: 12,
    tagline: 'Acompañándote hacia tu mejor versión',
    description: 'Psicólogo clínico con 12 años de experiencia en atención a adolescentes y adultos. Especializado en trastornos de ansiedad, depresión y terapia cognitivo-conductual.',

    specialties: [
      'Trastornos de Ansiedad',
      'Depresión',
      'Terapia Cognitivo-Conductual',
      'Psicología Adolescente',
      'Duelo y Pérdida'
    ],

    services: [
      {
        id: 'individual-adult',
        name: 'Terapia Individual Adultos',
        description: 'Sesiones personalizadas para adultos',
        price: { amount: 85, currency: 'USD', period: 'session' },
        icon: 'User',
        features: [
          'Sesiones 50 minutos',
          'Enfoque TCC',
          'Herramientas prácticas',
          'Plan terapéutico personalizado'
        ],
        highlighted: true
      },
      {
        id: 'adolescent',
        name: 'Terapia Adolescentes',
        description: 'Apoyo especializado para jóvenes',
        price: { amount: 80, currency: 'USD', period: 'session' },
        icon: 'Users',
        features: [
          'Sesiones 45 minutos',
          'Orientación a padres',
          'Manejo de emociones',
          'Desarrollo de habilidades'
        ]
      },
      {
        id: 'online',
        name: 'Terapia Online',
        description: 'Sesiones por videollamada',
        price: { amount: 75, currency: 'USD', period: 'session' },
        icon: 'Video',
        features: [
          'Plataforma segura',
          'Misma calidad',
          'Horarios flexibles',
          'Desde cualquier lugar'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Mariana S.',
        role: 'Paciente',
        content: 'Fernando me ayudó a superar mi ansiedad. Su enfoque es práctico y empático. Lo recomiendo totalmente.',
        rating: 5,
        date: '2024-02-05'
      },
      {
        id: '2',
        name: 'Padre de familia',
        role: 'Cliente',
        content: 'Ayudó muchísimo a mi hijo adolescente. Muy profesional y con excelentes resultados.',
        rating: 5,
        date: '2024-01-18'
      }
    ],

    contact: {
      phone: '+1 (555) 234-5678',
      email: 'contacto@fernandodelgado.psi',
      whatsapp: '+1-555-234-5678',
      address: {
        street: 'Centro Psicológico, Av. Mente Sana 234',
        city: 'Toluca',
        state: 'Estado de México',
        country: 'México',
        zipCode: '50000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 20:00',
        'Sábado': '10:00 - 14:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/fernandodelgado-psi',
      instagram: 'https://instagram.com/psi.fernandodelgado',
      facebook: 'https://facebook.com/psicologofernandodelgado'
    },

    certifications: [
      'Cédula Profesional 8889990 - UAEM',
      'Colegio de Psicólogos del Estado de México',
      'Certificación en Terapia Cognitivo-Conductual',
      'Diplomado en Psicología Adolescente'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto dura el tratamiento?',
        answer: 'Varía según cada caso. Algunos ven mejoras en 8-12 sesiones, otros procesos pueden ser más largos. Lo evaluamos constantemente.'
      },
      {
        id: '2',
        question: '¿Es confidencial?',
        answer: 'Absolutamente. Todo lo compartido está protegido por secreto profesional y código de ética.'
      },
      {
        id: '3',
        question: '¿Prescriben medicamentos?',
        answer: 'Como psicólogo no prescribo medicamentos. Si es necesario, te refiero con un psiquiatra colaborador.'
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
    title: 'Lic. Fernando Delgado - Psicólogo Clínico | Toluca',
    description: '12 años ayudando a superar ansiedad, depresión y más. Terapia presencial y online para adolescentes y adultos.',
    keywords: ['psicólogo', 'terapia', 'ansiedad', 'depresión', 'terapia cognitivo-conductual', 'toluca']
  },

  tags: ['psicología', 'terapia', 'salud mental', 'bienestar'],
  industry: 'Psychology',
  targetAudience: ['Adultos', 'Adolescentes', 'Familias'],
  version: '0.4.0'
}
