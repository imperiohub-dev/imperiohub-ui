/**
 * @fileoverview Tutor Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const tutorTemplate: TemplateConfig = {
  id: 'tutor',
  name: 'Profesor Particular / Tutor',
  category: 'professionals',
  description: 'Template para profesores particulares y tutores académicos',
  layout: 'professional',
  recommendedTheme: 'education',

  variables: {
    professionalName: 'Prof. Sandra Jiménez',
    profession: 'Profesora de Matemáticas y Física',
    yearsExperience: 8,
    tagline: 'Convirtiendo desafíos académicos en logros',
    description: 'Profesora con 8 años de experiencia en clases particulares de matemáticas, física y química para secundaria y preparatoria. Enfoque personalizado que ayuda a cada estudiante a alcanzar su máximo potencial.',

    specialties: [
      'Matemáticas',
      'Física',
      'Química',
      'Preparación para Exámenes',
      'Regularización Académica'
    ],

    services: [
      {
        id: 'individual',
        name: 'Clases Individuales',
        description: 'Atención personalizada 1-a-1',
        price: { amount: 30, currency: 'USD', period: 'hour' },
        icon: 'User',
        features: [
          'Sesiones personalizadas',
          'Material didáctico incluido',
          'Seguimiento de progreso',
          'Comunicación con padres',
          'Horarios flexibles'
        ],
        highlighted: true
      },
      {
        id: 'group',
        name: 'Clases Grupales',
        description: 'Grupos pequeños 3-5 estudiantes',
        price: { amount: 20, currency: 'USD', period: 'hour' },
        icon: 'Users',
        features: [
          'Grupos reducidos',
          'Aprendizaje colaborativo',
          'Ejercicios prácticos',
          'Ambiente motivador'
        ]
      },
      {
        id: 'exam-prep',
        name: 'Preparación para Exámenes',
        description: 'Intensivos para exámenes importantes',
        price: { amount: 150, currency: 'USD', period: 'project' },
        icon: 'Award',
        features: [
          'Repaso intensivo',
          'Exámenes de práctica',
          'Técnicas de estudio',
          'Resolución de dudas',
          'Paquete de 6 sesiones'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'María López (Madre)',
        role: 'Familiar de estudiante',
        content: 'Mi hijo subió sus calificaciones de 7 a 9.5 con Sandra. Excelente profesora, muy paciente y dedicada.',
        rating: 5,
        date: '2024-02-15'
      },
      {
        id: '2',
        name: 'Carlos (Estudiante)',
        role: 'Alumno preparatoria',
        content: 'Me ayudó a pasar mi examen de admisión a la universidad. Las explicaciones son muy claras.',
        rating: 5,
        date: '2024-01-20'
      }
    ],

    contact: {
      phone: '+1 (555) 789-0123',
      email: 'prof.sandra@tutoriasjim.com',
      whatsapp: '+1-555-789-0123',
      address: {
        street: 'Centro de Tutorías, Av. Educación 147',
        city: 'Pachuca',
        state: 'Hidalgo',
        country: 'México',
        zipCode: '42000'
      },
      schedule: {
        'Lunes - Viernes': '14:00 - 21:00',
        'Sábado': '9:00 - 16:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      facebook: 'https://facebook.com/tutoriassandrajimenez',
      instagram: 'https://instagram.com/prof.sandra.tutor',
      youtube: 'https://youtube.com/profsandramath'
    },

    certifications: [
      'Licenciatura en Matemáticas - UAEH',
      'Maestría en Educación',
      'Certificación en Enseñanza de Ciencias',
      '8 años de experiencia docente'
    ],

    faq: [
      {
        id: '1',
        question: '¿Dan clases a domicilio?',
        answer: 'Sí, ofrezco clases a domicilio en Pachuca sin costo adicional. También disponibles clases online.'
      },
      {
        id: '2',
        question: '¿Qué niveles enseñan?',
        answer: 'Atiendo desde secundaria hasta primeros semestres de universidad. Especializada en secundaria y preparatoria.'
      },
      {
        id: '3',
        question: '¿Cómo se pagan las clases?',
        answer: 'Puedes pagar por clase individual o comprar paquetes de 4, 8 o 12 sesiones con descuento.'
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
    title: 'Prof. Sandra Jiménez - Clases Particulares de Matemáticas y Física | Pachuca',
    description: '8 años ayudando a estudiantes a mejorar sus calificaciones. Clases personalizadas presenciales y online.',
    keywords: ['clases particulares', 'tutor', 'matemáticas', 'física', 'regularización', 'pachuca']
  },

  tags: ['educación', 'tutorías', 'matemáticas', 'clases'],
  industry: 'Education',
  targetAudience: ['Estudiantes', 'Padres de familia'],
  version: '0.4.0'
}
