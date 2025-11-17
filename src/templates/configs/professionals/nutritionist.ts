/**
 * @fileoverview Nutritionist Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const nutritionistTemplate: TemplateConfig = {
  id: 'nutritionist',
  name: 'Nutriólogo Profesional',
  category: 'professionals',
  description: 'Template para nutriólogos y especialistas en nutrición',
  layout: 'professional',
  recommendedTheme: 'wellness',

  variables: {
    professionalName: 'Lic. Valentina Reyes',
    profession: 'Nutrióloga Clínica Certificada',
    yearsExperience: 10,
    tagline: 'Nutrición basada en ciencia para tu bienestar',
    description: 'Nutrióloga con 10 años de experiencia en nutrición clínica, deportiva y manejo de peso. Enfoque personalizado basado en evidencia científica y tus objetivos de salud.',

    specialties: [
      'Nutrición Clínica',
      'Nutrición Deportiva',
      'Pérdida de Peso Saludable',
      'Nutrición Pediátrica',
      'Manejo de Diabetes'
    ],

    services: [
      {
        id: 'consultation',
        name: 'Consulta Nutricional',
        description: 'Evaluación completa y plan personalizado',
        price: { amount: 80, currency: 'USD', period: 'session' },
        icon: 'Clipboard',
        features: [
          'Evaluación nutricional',
          'Análisis de composición corporal',
          'Plan alimenticio personalizado',
          'Recetario incluido'
        ],
        highlighted: true
      },
      {
        id: 'sports',
        name: 'Nutrición Deportiva',
        description: 'Optimización del rendimiento atlético',
        price: { amount: 100, currency: 'USD', period: 'session' },
        icon: 'Activity',
        features: [
          'Plan según deporte',
          'Timing de nutrientes',
          'Suplementación',
          'Seguimiento semanal'
        ]
      },
      {
        id: 'weight',
        name: 'Programa de Peso Saludable',
        description: 'Plan integral para pérdida de peso',
        price: { amount: 250, currency: 'USD', period: 'month' },
        icon: 'TrendingDown',
        features: [
          '4 consultas mensuales',
          'Plan alimenticio flexible',
          'Seguimiento continuo',
          'Educación nutricional'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Claudia Rojas',
        role: 'Cliente',
        content: 'Valentina cambió mi relación con la comida. Perdí peso sin dietas restrictivas. Su enfoque es muy profesional.',
        rating: 5,
        date: '2024-01-30'
      },
      {
        id: '2',
        name: 'Miguel Ángel',
        role: 'Atleta',
        content: 'Mi rendimiento deportivo mejoró notablemente con su plan nutricional. Muy recomendada.',
        rating: 5,
        date: '2024-02-10'
      }
    ],

    contact: {
      phone: '+1 (555) 123-4567',
      email: 'consultas@valentinareyes.mx',
      whatsapp: '+1-555-123-4567',
      address: {
        street: 'Consultorio Médico Plaza Salud, Torre A',
        city: 'Aguascalientes',
        state: 'Aguascalientes',
        country: 'México',
        zipCode: '20000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 19:00',
        'Sábado': '9:00 - 13:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      instagram: 'https://instagram.com/nutri.valentina',
      facebook: 'https://facebook.com/valentinareyesnutricion',
      tiktok: 'https://tiktok.com/@nutri.valentina'
    },

    certifications: [
      'Cédula Profesional 4445556 - UAA',
      'Colegio Mexicano de Nutriólogos',
      'Certificación en Nutrición Deportiva - ISNN',
      'Educadora en Diabetes Certificada'
    ],

    faq: [
      {
        id: '1',
        question: '¿Qué incluye la primera consulta?',
        answer: 'Evaluación completa: historia clínica, medidas antropométricas, análisis de composición corporal y plan alimenticio inicial.'
      },
      {
        id: '2',
        question: '¿Cada cuándo debo tener consulta de seguimiento?',
        answer: 'Recomiendo seguimientos cada 2-4 semanas dependiendo de tus objetivos y progreso.'
      },
      {
        id: '3',
        question: '¿Atienden consultas online?',
        answer: 'Sí, ofrezco consultas por videollamada con la misma calidad que presenciales.'
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
    title: 'Lic. Valentina Reyes - Nutrióloga Certificada | Aguascalientes',
    description: '10 años ayudando a mejorar salud a través de la nutrición. Consultas presenciales y online.',
    keywords: ['nutriólogo', 'nutrición', 'dietista', 'pérdida de peso', 'nutrición deportiva', 'aguascalientes']
  },

  tags: ['nutrición', 'dieta', 'salud', 'bienestar'],
  industry: 'Nutrition',
  targetAudience: ['Personas con sobrepeso', 'Atletas', 'Familias'],
  version: '0.4.0'
}
