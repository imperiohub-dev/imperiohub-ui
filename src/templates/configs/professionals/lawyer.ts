/**
 * @fileoverview Lawyer Template Configuration
 * @version 0.4.0
 */

import type { TemplateConfig } from '../../core/types'

export const lawyerTemplate: TemplateConfig = {
  id: 'lawyer',
  name: 'Abogado Profesional',
  category: 'professionals',
  description: 'Template completo para despachos legales y abogados independientes',
  layout: 'professional',
  recommendedTheme: 'professional',

  variables: {
    professionalName: 'Lic. María González',
    profession: 'Abogada Especialista en Derecho Civil',
    yearsExperience: 15,
    tagline: 'Protegiendo tus derechos con experiencia y dedicación',
    description: 'Con más de 15 años de experiencia en derecho civil, familiar y laboral, me especializo en ofrecer soluciones legales efectivas y personalizadas. Mi compromiso es defender tus derechos con profesionalismo y ética.',

    specialties: [
      'Derecho Civil',
      'Derecho Familiar',
      'Derecho Laboral',
      'Contratos y Negociaciones',
      'Herencias y Testamentos'
    ],

    services: [
      {
        id: 'civil',
        name: 'Derecho Civil',
        description: 'Asesoría en contratos, responsabilidad civil, propiedad y derechos reales',
        price: { amount: 200, currency: 'USD', period: 'hour' },
        icon: 'Scale',
        features: [
          'Redacción y revisión de contratos',
          'Demandas civiles',
          'Resolución de conflictos',
          'Asesoría preventiva'
        ]
      },
      {
        id: 'family',
        name: 'Derecho Familiar',
        description: 'Divorcios, custodia, pensión alimenticia y derecho sucesorio',
        price: { amount: 250, currency: 'USD', period: 'hour' },
        icon: 'Users',
        features: [
          'Procesos de divorcio',
          'Custodia de menores',
          'Pensión alimenticia',
          'Régimen de visitas'
        ],
        highlighted: true
      },
      {
        id: 'labor',
        name: 'Derecho Laboral',
        description: 'Defensa de derechos laborales, despidos injustificados y contratos',
        price: { amount: 220, currency: 'USD', period: 'hour' },
        icon: 'Briefcase',
        features: [
          'Despidos injustificados',
          'Reclamaciones salariales',
          'Accidentes laborales',
          'Contratos de trabajo'
        ]
      }
    ],

    testimonials: [
      {
        id: '1',
        name: 'Juan Pérez',
        role: 'Empresario',
        content: 'Excelente atención profesional. María resolvió mi caso de manera eficiente y con gran dedicación. La recomiendo ampliamente.',
        rating: 5,
        date: '2024-01-15'
      },
      {
        id: '2',
        name: 'Ana Martínez',
        role: 'Cliente',
        content: 'Su experiencia en derecho familiar fue clave para resolver mi caso. Muy profesional y empática.',
        rating: 5,
        date: '2024-02-20'
      },
      {
        id: '3',
        name: 'Carlos Rodríguez',
        role: 'Trabajador',
        content: 'Me ayudó a recuperar mis derechos laborales. Siempre estuvo disponible y fue muy clara en todo el proceso.',
        rating: 5,
        date: '2024-03-10'
      }
    ],

    contact: {
      phone: '+1 (555) 123-4567',
      email: 'contacto@gonzalezabogados.com',
      whatsapp: '+1-555-123-4567',
      address: {
        street: 'Av. Reforma 123, Piso 10',
        city: 'Ciudad de México',
        state: 'CDMX',
        country: 'México',
        zipCode: '06600'
      },
      schedule: {
        'Lunes - Viernes': '9:00 - 18:00',
        'Sábado': '10:00 - 14:00',
        'Domingo': 'Cerrado'
      }
    },

    social: {
      linkedin: 'https://linkedin.com/in/mariagonzalez',
      facebook: 'https://facebook.com/gonzalezabogados',
      twitter: 'https://twitter.com/gonzalezlaw'
    },

    certifications: [
      'Cédula Profesional 1234567 - UNAM',
      'Colegio Nacional de Abogados',
      'Certificación en Mediación y Arbitraje',
      'Especialización en Derecho Civil'
    ],

    faq: [
      {
        id: '1',
        question: '¿Cuánto cuesta una consulta inicial?',
        answer: 'La primera consulta tiene un costo de $100 USD y dura aproximadamente 45 minutos. En esta sesión evaluamos tu caso y te ofrecemos opciones.'
      },
      {
        id: '2',
        question: '¿Qué documentos necesito llevar?',
        answer: 'Depende del tipo de caso, pero generalmente necesitas identificación oficial, documentos relacionados con tu caso y cualquier comunicación relevante.'
      },
      {
        id: '3',
        question: '¿Atienden casos en otras ciudades?',
        answer: 'Sí, trabajamos casos a nivel nacional y podemos manejar consultas remotas por videollamada.'
      },
      {
        id: '4',
        question: '¿Ofrecen planes de pago?',
        answer: 'Sí, ofrecemos planes de pago flexibles dependiendo del tipo de caso. Lo discutimos en la consulta inicial.'
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
    pricing: { enabled: true, display: 'table' },
    faq: { enabled: true },
    contact: { enabled: true, showMap: true },
    footer: { enabled: true }
  },

  seo: {
    title: 'Lic. María González - Abogada Especialista | Derecho Civil, Familiar y Laboral',
    description: '15 años de experiencia en derecho civil, familiar y laboral. Consultoría legal profesional en CDMX. Primera consulta desde $100 USD.',
    keywords: ['abogado', 'derecho civil', 'derecho familiar', 'derecho laboral', 'consultoría legal', 'abogado cdmx']
  },

  tags: ['legal', 'abogado', 'derecho', 'consultoría'],
  industry: 'Legal',
  targetAudience: ['Individuos', 'Familias', 'Trabajadores', 'Empresas'],
  version: '0.4.0'
}
