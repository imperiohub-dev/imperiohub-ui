/**
 * Builder Example
 *
 * Demonstrates JSON-driven page building
 */

import React from 'react';
import {
  LandingPageBuilder,
  LandingPageBuilderConfig,
  ValidationError,
} from '../src';

// Example: Lawyer Landing Page using Builder
const lawyerBuilderConfig: LandingPageBuilderConfig = {
  id: 'lawyer-landing',
  variant: 'full',

  // Page metadata
  meta: {
    title: 'Legal Solutions | Expert Legal Counsel',
    description: 'Professional legal services with personalized strategies for your specific needs',
    keywords: ['lawyer', 'legal services', 'attorney', 'law firm'],
  },

  // Theme customization
  theme: {
    colors: {
      primary: '#1e40af', // Deep blue
      secondary: '#7c3aed', // Purple
      accent: '#f59e0b', // Amber
    },
  },

  // Navigation
  navigation: {
    logo: '/logo.svg',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  // Page sections (JSON-driven)
  sections: [
    // Hero Section
    {
      type: 'hero',
      data: {
        title: 'Legal Solutions That Protect Your Future',
        subtitle: 'Expert legal counsel with personalized strategies for your specific needs',
        primaryCta: {
          text: 'Schedule Free Consultation',
          onClick: 'handleBookConsultation',
        },
        secondaryCta: {
          text: 'Our Services',
          href: '#services',
        },
        image: {
          src: '/images/lawyer-hero.jpg',
          alt: 'Professional legal consultation',
        },
        variant: 'split',
        gradientTitle: true,
      },
    },

    // Features Section
    {
      id: 'services',
      type: 'features',
      data: {
        title: 'Comprehensive Legal Services',
        subtitle: 'Experienced representation across multiple practice areas',
        features: [
          {
            icon: 'Scale',
            title: 'Business Law',
            description: 'Contract drafting, negotiations, and business formation services',
          },
          {
            icon: 'Users',
            title: 'Family Law',
            description: 'Compassionate guidance through divorce, custody, and family matters',
          },
          {
            icon: 'Home',
            title: 'Real Estate Law',
            description: 'Property transactions, title review, and real estate disputes',
          },
          {
            icon: 'FileText',
            title: 'Estate Planning',
            description: 'Wills, trusts, and comprehensive estate planning solutions',
          },
          {
            icon: 'Briefcase',
            title: 'Employment Law',
            description: 'Workplace disputes, contracts, and employee rights protection',
          },
          {
            icon: 'Shield',
            title: 'Personal Injury',
            description: 'Maximum compensation for accident and injury claims',
          },
        ],
      },
    },

    // Testimonials Section
    {
      id: 'testimonials',
      type: 'testimonials',
      data: {
        title: 'Client Success Stories',
        subtitle: 'Real results from real clients',
        testimonials: [
          {
            quote: 'Outstanding legal expertise! They navigated our complex business contract with precision and secured favorable terms.',
            authorName: 'Michael Chen',
            authorRole: 'CEO, Tech Startup',
            rating: 5,
          },
          {
            quote: 'Compassionate and professional. Made a difficult divorce process as smooth as possible for my family.',
            authorName: 'Sarah Williams',
            authorRole: 'Client',
            rating: 5,
          },
          {
            quote: 'Won my personal injury case and got me the compensation I deserved. Highly recommend!',
            authorName: 'Robert Johnson',
            authorRole: 'Injury Claim Client',
            rating: 5,
          },
        ],
      },
    },

    // Pricing Section
    {
      type: 'pricing',
      data: {
        title: 'Flexible Service Packages',
        subtitle: 'Choose the consultation option that fits your needs',
        plans: [
          {
            title: 'Initial Consultation',
            price: 250,
            period: '/hour',
            description: 'One-time legal consultation',
            features: [
              'Case evaluation',
              'Legal advice',
              'Strategy discussion',
              'Document review',
            ],
            ctaText: 'Book Now',
            onCtaClick: 'handleBookConsultation',
          },
          {
            title: 'Case Representation',
            price: 'Custom',
            description: 'Full legal representation',
            features: [
              'Complete case management',
              'Court representation',
              'Document preparation',
              'Negotiation services',
              'Regular updates',
            ],
            ctaText: 'Get Quote',
            onCtaClick: 'handleGetQuote',
            featured: true,
            badge: 'Most Popular',
          },
          {
            title: 'Monthly Retainer',
            price: 2500,
            period: '/month',
            description: 'Ongoing legal support',
            features: [
              'Unlimited consultations',
              'Priority scheduling',
              'Contract review',
              'Legal document drafting',
              'Email & phone support',
              'Annual compliance review',
            ],
            ctaText: 'Contact Us',
            onCtaClick: 'handleContactUs',
          },
        ],
      },
    },

    // CTA Section
    {
      type: 'cta',
      data: {
        title: 'Get Expert Legal Advice Today',
        description: 'Don\'t wait until it\'s too late. Schedule a consultation and protect your interests.',
        primaryCta: {
          text: 'Schedule Consultation',
          onClick: 'handleBookConsultation',
        },
        secondaryCta: {
          text: 'Call Our Office',
          href: 'tel:+15555551234',
        },
      },
    },

    // Contact Section
    {
      id: 'contact',
      type: 'contact',
      data: {
        title: 'Contact Our Firm',
        subtitle: 'We\'re here to help. Send us a message and we\'ll respond within 24 hours.',
        onSubmit: 'handleContactSubmit',
      },
    },
  ],

  // Event handlers
  handlers: {
    handleBookConsultation: () => {
      console.log('Opening consultation booking modal...');
      alert('Consultation booking feature would open here');
    },
    handleGetQuote: () => {
      console.log('Opening quote request form...');
      alert('Quote request form would open here');
    },
    handleContactUs: () => {
      console.log('Scrolling to contact form...');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },
    handleContactSubmit: async (data: any) => {
      console.log('Contact form submitted:', data);
      alert(`Thank you ${data.name}! We'll contact you at ${data.email} soon.`);
    },
  },

  // Footer
  footer: {
    copyright: '© 2024 Legal Solutions Firm. All rights reserved.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Attorney Advertising', href: '/disclosure' },
    ],
    social: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/legal-solutions' },
      { platform: 'twitter', url: 'https://twitter.com/legal_solutions' },
      { platform: 'facebook', url: 'https://facebook.com/legalsolutions' },
    ],
  },
};

// Example: Doctor Landing Page using Builder
const doctorBuilderConfig: LandingPageBuilderConfig = {
  id: 'doctor-landing',
  variant: 'minimal',

  meta: {
    title: 'Healthcare That Puts You First',
    description: 'Compassionate, personalized medical care from experienced professionals',
  },

  theme: {
    colors: {
      primary: '#0ea5e9', // Sky blue
      secondary: '#14b8a6', // Teal
      accent: '#f43f5e', // Rose
    },
  },

  navigation: {
    logo: '/medical-logo.svg',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  sections: [
    {
      type: 'hero',
      data: {
        title: 'Healthcare That Puts You First',
        subtitle: 'Compassionate, personalized medical care from experienced professionals dedicated to your health and wellbeing.',
        primaryCta: {
          text: 'Book Appointment',
          onClick: 'handleBookAppointment',
        },
        secondaryCta: {
          text: 'Our Services',
          href: '#services',
        },
        image: {
          src: '/images/doctor-hero.jpg',
          alt: 'Compassionate healthcare professional',
        },
        gradientTitle: false,
      },
    },
    {
      id: 'services',
      type: 'features',
      data: {
        title: 'Why Choose Our Practice',
        subtitle: 'Committed to providing exceptional healthcare with a personal touch',
        features: [
          {
            icon: 'Stethoscope',
            title: 'Expert Medical Care',
            description: '15+ years of medical experience with board certification',
          },
          {
            icon: 'Clock',
            title: 'Same-Day Appointments',
            description: 'Flexible scheduling with same-day appointments available',
          },
          {
            icon: 'Heart',
            title: 'Compassionate Approach',
            description: 'Patient-centered care that treats the whole person',
          },
        ],
      },
    },
    {
      id: 'contact',
      type: 'contact',
      data: {
        title: 'Contact Our Practice',
        subtitle: 'We\'re here to answer your questions and schedule your visit',
        onSubmit: 'handleContactSubmit',
      },
    },
  ],

  handlers: {
    handleBookAppointment: () => {
      alert('Appointment booking system would open here');
    },
    handleContactSubmit: async (data: any) => {
      console.log('Contact submitted:', data);
      alert(`Thank you ${data.name}! We'll be in touch soon.`);
    },
  },

  footer: {
    copyright: '© 2024 Medical Practice. All rights reserved.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'HIPAA Notice', href: '/hipaa' },
    ],
    social: [
      { platform: 'facebook', url: 'https://facebook.com/medicalpractice' },
    ],
  },
};

// Main Example Component
export const BuilderExample: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<'lawyer' | 'doctor'>('lawyer');

  const handleValidationError = (errors: ValidationError[]) => {
    console.error('Validation errors:', errors);
  };

  const config = currentPage === 'lawyer' ? lawyerBuilderConfig : doctorBuilderConfig;

  return (
    <div>
      {/* Page Switcher (for demo purposes) */}
      <div style={{
        position: 'fixed',
        top: 10,
        right: 10,
        zIndex: 9999,
        background: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => setCurrentPage('lawyer')}
          style={{
            padding: '8px 16px',
            marginRight: '8px',
            background: currentPage === 'lawyer' ? '#1e40af' : '#e5e7eb',
            color: currentPage === 'lawyer' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Lawyer
        </button>
        <button
          onClick={() => setCurrentPage('doctor')}
          style={{
            padding: '8px 16px',
            background: currentPage === 'doctor' ? '#0ea5e9' : '#e5e7eb',
            color: currentPage === 'doctor' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Doctor
        </button>
      </div>

      {/* Landing Page Builder */}
      <LandingPageBuilder
        config={config}
        onValidationError={handleValidationError}
        strictValidation={false}
      />
    </div>
  );
};

export default BuilderExample;
