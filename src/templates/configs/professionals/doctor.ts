/**
 * @fileoverview Doctor Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const doctorTemplate: TemplateConfig = {
  id: 'doctor',
  name: 'Médico General',
  category: 'professionals',
  description: 'Template para consultorios médicos y profesionales de la salud',
  layout: 'professional',
  recommendedTheme: 'healthcare',

  variables: {
    professionalName: 'Dr. Carlos Mendoza',
    profession: 'Médico General Certificado',
    yearsExperience: 12,
    tagline: 'Tu salud es nuestra prioridad',
    description: 'Médico general con 12 años de experiencia brindando atención médica integral y personalizada. Enfocado en medicina preventiva y tratamientos especializados con tecnología de punta.',

    specialties: [
      'Medicina General',
      'Medicina Preventiva',
      'Chequeos Médicos',
      'Enfermedades Crónicas',
      'Medicina Familiar'
    ],

    services: [
      {
        id: 'general',
        name: 'Consulta General',
        description: 'Evaluación médica completa, diagnóstico y tratamiento',
        price: { amount: 80, currency: 'USD', period: 'session' },
        icon: 'Activity',
        features: [
          'Historia clínica completa',
          'Examen físico',
          'Diagnóstico',
          'Receta médica'
        ],
        highlighted: true
      },
      {
        id: 'checkup',
        name: 'Chequeo Anual',
        description: 'Evaluación preventiva completa de salud',
        price: { amount: 150, currency: 'USD', period: 'session' },
        icon: 'Heart',
        features: [
          'Análisis de laboratorio',
          'Electrocardiograma',
          'Evaluación de riesgos',
          'Plan de salud personalizado'
        ]
      },
      {
        id: 'chronic',
        name: 'Control de Enfermedades Crónicas',
        description: 'Seguimiento y manejo de diabetes, hipertensión, etc.',
        price: { amount: 100, currency: 'USD', period: 'session' },
        icon: 'TrendingUp',
        features: [
          'Monitoreo continuo',
          'Ajuste de tratamiento',
          'Educación al paciente',
          'Seguimiento personalizado'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Laura Hernández',
        role: 'Paciente',
        content: 'El Dr. Mendoza es muy profesional y dedicado. Siempre tiene tiempo para explicar todo claramente.',
        rating: 5,
        date: '2024-01-20'
      },
      {
        id: '2',
        name: 'Roberto Sánchez',
        role: 'Paciente',
        content: 'Excelente médico. Me ha ayudado a controlar mi diabetes de manera efectiva.',
        rating: 5,
        date: '2024-02-15'
      },
      {
        id: '3',
        name: 'Patricia López',
        role: 'Paciente',
        content: 'Muy recomendable. Consultorio limpio, moderno y atención de primera.',
        rating: 5,
        date: '2024-03-05'
      }
    ],

    contact: {
      phone: '+1 (555) 234-5678',
      email: 'consultas@drmendoza.com',
      whatsapp: '+1-555-234-5678',
      address: {
        street: 'Calle Salud 456, Torre Médica',
        city: 'Guadalajara',
        state: 'Jalisco',
        country: 'México',
        zipCode: '44100'
      },
      schedule: {
        'Lunes - Viernes': '8:00 - 20:00',
        'Sábado': '9:00 - 14:00',
        'Domingo': 'Solo urgencias con cita'
      }
    },

    social: {
      facebook: 'https://facebook.com/drmendoza',
      instagram: 'https://instagram.com/dr.mendoza',
      linkedin: 'https://linkedin.com/in/carlosmendoza'
    },

    certifications: [
      'Cédula Profesional 7654321 - UAG',
      'Colegio Médico de Jalisco',
      'Certificación en Medicina Familiar',
      'Diplomado en Diabetes y Obesidad'
    ],

    faq: [
      {
        id: '1',
        question: '¿Aceptan seguros médicos?',
        answer: 'Sí, trabajamos con los principales seguros médicos. Consulta con tu aseguradora para verificar cobertura.'
      },
      {
        id: '2',
        question: '¿Hacen visitas a domicilio?',
        answer: 'Sí, ofrecemos servicio de visitas domiciliarias para pacientes que no pueden trasladarse. Costo adicional según zona.'
      },
      {
        id: '3',
        question: '¿Cómo agendo una cita?',
        answer: 'Puedes agendar por teléfono, WhatsApp o a través de nuestra página web. Respondemos en menos de 2 horas.'
      },
      {
        id: '4',
        question: '¿Qué debo llevar a mi primera consulta?',
        answer: 'Identificación oficial, estudios médicos previos si los tienes, y lista de medicamentos que tomas actualmente.'
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
    title: 'Dr. Carlos Mendoza - Médico General Certificado | Consultas Médicas',
    description: '12 años de experiencia en medicina general y preventiva. Consultas desde $80 USD. Aceptamos seguros médicos.',
    keywords: ['médico general', 'consulta médica', 'medicina preventiva', 'chequeo médico', 'guadalajara']
  },

  tags: ['salud', 'medicina', 'médico', 'consultorio'],
  industry: 'Healthcare',
  targetAudience: ['Pacientes', 'Familias', 'Adultos mayores'],
  version: '0.4.0'
}
