/**
 * @fileoverview Personal Trainer Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const personalTrainerTemplate: TemplateConfig = {
  id: 'personal-trainer',
  name: 'Entrenador Personal',
  category: 'professionals',
  description: 'Template para entrenadores personales y coaches fitness',
  layout: 'professional',
  recommendedTheme: 'energetic',

  variables: {
    professionalName: 'Coach Marcos Ruiz',
    profession: 'Entrenador Personal Certificado',
    yearsExperience: 7,
    tagline: 'Transformando vidas, un entrenamiento a la vez',
    description: 'Entrenador personal certificado con 7 años ayudando a personas a alcanzar sus metas fitness. Especializado en pérdida de peso, ganancia muscular y transformaciones completas.',

    specialties: [
      'Pérdida de Peso',
      'Ganancia Muscular',
      'Funcional Training',
      'Nutrición Deportiva',
      'Entrenamiento HIIT'
    ],

    services: [
      {
        id: 'personal',
        name: 'Entrenamiento Personal',
        description: 'Sesiones 1-a-1 personalizadas',
        price: { amount: 50, currency: 'USD', period: 'session' },
        icon: 'Activity',
        features: [
          'Sesiones 60 minutos',
          'Plan personalizado',
          'Seguimiento continuo',
          'Ajustes semanales'
        ],
        highlighted: true
      },
      {
        id: 'online',
        name: 'Coaching Online',
        description: 'Entrenamiento y nutrición remoto',
        price: { amount: 150, currency: 'USD', period: 'month' },
        icon: 'Smartphone',
        features: [
          'Plan de entrenamiento',
          'Plan nutricional',
          'Video-llamadas semanales',
          'Chat 24/7'
        ]
      },
      {
        id: 'group',
        name: 'Clases Grupales',
        description: 'Entrenamientos en grupos pequeños',
        price: { amount: 30, currency: 'USD', period: 'session' },
        icon: 'Users',
        features: [
          'Grupos max 6 personas',
          'HIIT & Functional',
          'Ambiente motivador',
          '3-4 clases semanales'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Laura Martínez',
        role: 'Cliente',
        content: 'Perdí 15kg en 4 meses con Marcos. Su motivación y profesionalismo son increíbles.',
        rating: 5,
        date: '2024-02-01'
      },
      {
        id: '2',
        name: 'Jorge Campos',
        role: 'Cliente',
        content: 'Gané 8kg de músculo limpio. Los resultados hablan por sí mismos. Totalmente recomendado.',
        rating: 5,
        date: '2024-01-15'
      }
    ],

    contact: {
      phone: '+1 (555) 012-3456',
      email: 'info@coachmarcos.fit',
      whatsapp: '+1-555-012-3456',
      address: {
        street: 'Gimnasio PowerFit, Av. Fitness 789',
        city: 'León',
        state: 'Guanajuato',
        country: 'México',
        zipCode: '37000'
      },
      schedule: {
        'Lunes - Viernes': '6:00 - 21:00',
        'Sábado': '7:00 - 14:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      instagram: 'https://instagram.com/coachmarcos.fit',
      tiktok: 'https://tiktok.com/@coachmarcos',
      youtube: 'https://youtube.com/coachmarcos'
    },

    certifications: [
      'Certificación ACE Personal Trainer',
      'Nutrición Deportiva - ISSA',
      'CrossFit Level 1 Trainer',
      'Certificación en Entrenamiento Funcional'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto tiempo toma ver resultados?',
        answer: 'Con compromiso y consistencia, verás cambios notables en 4-6 semanas. Las transformaciones completas toman 3-6 meses.'
      },
      {
        id: '2',
        question: '¿Necesito experiencia previa?',
        answer: 'No, trabajo con todos los niveles desde principiantes hasta atletas avanzados. Adapto cada plan a tu nivel.'
      },
      {
        id: '3',
        question: '¿Incluyen plan de alimentación?',
        answer: 'Sí, todos mis programas incluyen guía nutricional personalizada adaptada a tus objetivos.'
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
    title: 'Coach Marcos Ruiz - Entrenador Personal Certificado | León, GTO',
    description: '7 años transformando vidas. Entrenamiento personal, coaching online y clases grupales. Primera sesión gratis.',
    keywords: ['entrenador personal', 'gimnasio', 'pérdida de peso', 'nutrición', 'león', 'fitness']
  },

  tags: ['fitness', 'entrenamiento', 'nutrición', 'salud'],
  industry: 'Fitness',
  targetAudience: ['Personas en forma', 'Principiantes', 'Atletas'],
  version: '0.4.0'
}
