/**
 * @fileoverview Veterinarian Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const veterinarianTemplate: TemplateConfig = {
  id: 'veterinarian',
  name: 'Veterinario Profesional',
  category: 'professionals',
  description: 'Template para clínicas veterinarias y veterinarios',
  layout: 'professional',
  recommendedTheme: 'wellness',

  variables: {
    professionalName: 'MVZ. Daniel Ortiz',
    profession: 'Médico Veterinario Zootecnista',
    yearsExperience: 9,
    tagline: 'Cuidando la salud de tus mejores amigos',
    description: 'Médico veterinario con 9 años de experiencia en medicina de pequeñas especies. Clínica equipada con tecnología moderna para diagnóstico y tratamiento integral.',

    specialties: [
      'Medicina Preventiva',
      'Cirugía General',
      'Diagnóstico por Imagen',
      'Urgencias Veterinarias',
      'Medicina Interna'
    ],

    services: [
      {
        id: 'consultation',
        name: 'Consulta General',
        description: 'Revisión médica completa para tu mascota',
        price: { amount: 40, currency: 'USD', period: 'session' },
        icon: 'Activity',
        features: [
          'Examen físico completo',
          'Diagnóstico',
          'Receta médica',
          'Orientación nutricional'
        ],
        highlighted: true
      },
      {
        id: 'preventive',
        name: 'Medicina Preventiva',
        description: 'Vacunación, desparasitación y chequeos',
        price: { amount: 50, currency: 'USD', period: 'session' },
        icon: 'Shield',
        features: [
          'Vacunación completa',
          'Desparasitación',
          'Control de peso',
          'Cartilla de salud'
        ]
      },
      {
        id: 'surgery',
        name: 'Cirugía',
        description: 'Procedimientos quirúrgicos especializados',
        price: { amount: 200, currency: 'USD', period: 'procedure' },
        icon: 'Tool',
        features: [
          'Esterilizaciones',
          'Cirugía de tejidos blandos',
          'Anestesia segura',
          'Cuidados postoperatorios'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Gabriela Torres',
        role: 'Dueña de Max',
        content: 'El Dr. Ortiz salvó la vida de mi perro. Es un excelente veterinario, profesional y compasivo.',
        rating: 5,
        date: '2024-02-10'
      },
      {
        id: '2',
        name: 'Ricardo Méndez',
        role: 'Dueño de Luna',
        content: 'Siempre atiende a mi gata con mucho cuidado. La clínica está muy limpia y bien equipada.',
        rating: 5,
        date: '2024-01-25'
      }
    ],

    contact: {
      phone: '+1 (555) 890-1234',
      email: 'clinica@vetortiz.com',
      whatsapp: '+1-555-890-1234',
      address: {
        street: 'Av. Mascota 369, Local 2',
        city: 'Mérida',
        state: 'Yucatán',
        country: 'México',
        zipCode: '97000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 20:00',
        'Sábado': '9:00 - 17:00',
        'Domingo': '10:00 - 14:00',
        'Urgencias': '24/7 con cita'
      }
    },

    social: {
      instagram: 'https://instagram.com/vetortiz.clinica',
      facebook: 'https://facebook.com/clinicaveterinariaortiz',
      tiktok: 'https://tiktok.com/@vetortiz'
    },

    certifications: [
      'Cédula Profesional 7778889 - UADY',
      'Colegio de Médicos Veterinarios de Yucatán',
      'Certificación en Cirugía de Tejidos Blandos',
      'Diplomado en Ultrasonografía Veterinaria'
    ],

    faq: [
      {
        id: '1',
        question: '¿Atienden urgencias?',
        answer: 'Sí, contamos con servicio de urgencias 24/7. Llama antes de venir para preparar tu llegada.'
      },
      {
        id: '2',
        question: '¿Qué especies atienden?',
        answer: 'Atendemos perros, gatos y pequeños mamíferos (conejos, hamsters, etc.).'
      },
      {
        id: '3',
        question: '¿Ofrecen servicio a domicilio?',
        answer: 'Sí, para vacunación, eutanasia humanitaria y algunos procedimientos. Consulta disponibilidad.'
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
    title: 'MVZ Daniel Ortiz - Veterinario | Clínica Veterinaria en Mérida',
    description: '9 años cuidando la salud de tus mascotas. Consultas, cirugías, urgencias 24/7. Tecnología moderna.',
    keywords: ['veterinario', 'clínica veterinaria', 'vacunación', 'cirugía veterinaria', 'mérida', 'urgencias']
  },

  tags: ['veterinaria', 'mascotas', 'salud animal', 'cirugía'],
  industry: 'Veterinary',
  targetAudience: ['Dueños de mascotas', 'Familias con animales'],
  version: '0.4.0'
}
