/**
 * @fileoverview Copywriter Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const copywriterTemplate: TemplateConfig = {
  id: 'copywriter',
  name: 'Copywriter Profesional',
  category: 'professionals',
  description: 'Template para copywriters y redactores publicitarios',
  layout: 'professional',
  recommendedTheme: 'creative',

  variables: {
    professionalName: 'Diana Ruiz',
    profession: 'Copywriter & Content Strategist',
    yearsExperience: 7,
    tagline: 'Palabras que venden, contenido que conecta',
    description: 'Copywriter con 7 años creando contenido persuasivo que convierte. Especializada en copy para ventas, email marketing, landing pages y contenido para redes sociales.',

    specialties: [
      'Sales Copywriting',
      'Email Marketing',
      'Landing Pages',
      'Social Media Copy',
      'Content Strategy'
    ],

    services: [
      {
        id: 'sales-copy',
        name: 'Sales Copywriting',
        description: 'Copy que convierte visitantes en clientes',
        price: { amount: 500, currency: 'USD', period: 'project' },
        icon: 'FileText',
        features: [
          'Landing pages',
          'Páginas de ventas',
          'Emails de conversión',
          'Anuncios publicitarios',
          '2 rondas de revisión'
        ],
        highlighted: true
      },
      {
        id: 'email',
        name: 'Email Marketing',
        description: 'Secuencias de emails que generan ventas',
        price: { amount: 400, currency: 'USD', period: 'project' },
        icon: 'Mail',
        features: [
          'Secuencias de bienvenida',
          'Nurturing campaigns',
          'Promocionales',
          'Automatizaciones',
          'Hasta 10 emails'
        ]
      },
      {
        id: 'social',
        name: 'Social Media Content',
        description: 'Contenido mensual para redes sociales',
        price: { amount: 300, currency: 'USD', period: 'month' },
        icon: 'MessageSquare',
        features: [
          '20 posts mensuales',
          'Captions persuasivos',
          'Hashtags estratégicos',
          'Stories ideas',
          'Calendario de contenido'
        ]
      }
    ],

    projects: [
      {
        id: '1',
        title: 'Landing Page SaaS',
        description: 'Aumentó conversión de 2% a 8%',
        category: 'Sales Copy',
        image: '/portfolio/landing-saas.jpg',
        date: '2024-02'
      },
      {
        id: '2',
        title: 'Email Sequence E-commerce',
        description: '15% de conversión en secuencia de bienvenida',
        category: 'Email',
        image: '/portfolio/email-sequence.jpg',
        date: '2024-01'
      },
      {
        id: '3',
        title: 'Social Media Fitness Brand',
        description: '+50k seguidores en 6 meses',
        category: 'Social Media',
        image: '/portfolio/social-fitness.jpg',
        date: '2023-12'
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Carlos Méndez',
        role: 'CEO, TechStart',
        content: 'El copy de Diana duplicó nuestra tasa de conversión. Su habilidad para conectar con la audiencia es increíble.',
        rating: 5,
        date: '2024-02-10'
      },
      {
        id: '2',
        name: 'Fashion Store Online',
        role: 'E-commerce',
        content: 'Nuestros emails ahora generan 30% de nuestras ventas mensuales. Inversión que se paga sola.',
        rating: 5,
        date: '2024-01-15'
      }
    ],

    contact: {
      phone: '+1 (555) 123-4567',
      email: 'hola@dianaruiz.co',
      whatsapp: '+1-555-123-4567',
      address: {
        street: 'Trabajo 100% Remoto',
        city: 'Mérida',
        state: 'Yucatán',
        country: 'México',
        zipCode: '97000'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 17:00',
        'Comunicación': 'Email y videollamadas'
      }
    },

    social: {
      instagram: 'https://instagram.com/diana.copywriter',
      linkedin: 'https://linkedin.com/in/dianaruiz-copywriter',
      twitter: 'https://twitter.com/dianaruiz_copy',
      behance: 'https://behance.net/dianaruiz'
    },

    certifications: [
      'Certificación en Copywriting - AWAI',
      'Digital Marketing Specialist - Google',
      'Content Marketing Certification - HubSpot',
      'Email Marketing Master - MailChimp'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuál es tu proceso de trabajo?',
        answer: 'Brief inicial, investigación de audiencia y competencia, primer borrador, revisiones (2 rondas incluidas), entrega final.'
      },
      {
        id: '2',
        question: '¿Cuánto tiempo tomas para un proyecto?',
        answer: 'Landing page: 5-7 días. Email sequence: 7-10 días. Contenido social mensual: entrega semanal.'
      },
      {
        id: '3',
        question: '¿Trabajas en inglés y español?',
        answer: 'Sí, soy bilingüe y ofrezco copywriting profesional en ambos idiomas.'
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
    contact: { enabled: true, showMap: false },
    footer: { enabled: true }
  },

  seo: {
    title: 'Diana Ruiz - Copywriter Profesional | Sales Copy, Email & Social Media',
    description: '7 años escribiendo contenido que convierte. Especialista en copywriting para ventas y marketing digital.',
    keywords: ['copywriter', 'redactor', 'copy', 'email marketing', 'landing pages', 'content strategy']
  },

  tags: ['copywriting', 'redacción', 'contenido', 'marketing'],
  industry: 'Copywriting',
  targetAudience: ['Negocios online', 'Startups', 'Agencias', 'E-commerce'],
  version: '0.4.0'
}
