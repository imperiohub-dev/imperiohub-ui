/**
 * Example data for a lawyer landing page
 * This demonstrates how to use all components together
 */

import { CheckCircle, Clock, Shield, Users, Award, Scale } from 'lucide-react';

export const lawyerLandingData = {
  hero: {
    title: 'Legal Solutions That Protect Your Future',
    subtitle: 'Expert legal counsel with personalized strategies for your unique needs. Over 20 years of proven results.',
    primaryCta: {
      text: 'Schedule Free Consultation',
      href: '/contact',
    },
    secondaryCta: {
      text: 'View Our Services',
      href: '/services',
    },
    image: {
      src: '/images/lawyer-hero.jpg',
      alt: 'Professional legal consultation',
    },
    gradientTitle: true,
  },

  features: {
    title: 'Why Choose Our Firm',
    subtitle: 'Dedicated to achieving the best possible outcomes for our clients',
    features: [
      {
        icon: Scale,
        title: 'Expert Legal Counsel',
        description: 'Over 20 years of experience in corporate and civil law with proven track record',
      },
      {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Round-the-clock support for urgent legal matters and emergency consultations',
      },
      {
        icon: Shield,
        title: 'Complete Confidentiality',
        description: 'Your privacy and sensitive information are protected with the highest security',
      },
      {
        icon: Users,
        title: 'Personalized Approach',
        description: 'Custom legal strategies tailored to your specific situation and goals',
      },
      {
        icon: Award,
        title: 'Proven Results',
        description: '95% success rate with thousands of satisfied clients and won cases',
      },
      {
        icon: CheckCircle,
        title: 'Transparent Pricing',
        description: 'Clear, upfront pricing with no hidden fees or surprise charges',
      },
    ],
  },

  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Don\'t just take our word for it - hear from those we\'ve helped',
    testimonials: [
      {
        quote: 'Outstanding legal representation! They navigated my complex business dispute with professionalism and expertise. Highly recommend their services.',
        authorName: 'Michael Rodriguez',
        authorRole: 'CEO, Tech Innovations Inc.',
        rating: 5,
      },
      {
        quote: 'The team provided exceptional support during my divorce proceedings. Compassionate, responsive, and achieved a fair outcome for my family.',
        authorName: 'Sarah Johnson',
        authorRole: 'Small Business Owner',
        rating: 5,
      },
      {
        quote: 'Professional, knowledgeable, and results-driven. They handled my real estate transaction flawlessly from start to finish.',
        authorName: 'David Chen',
        authorRole: 'Real Estate Investor',
        rating: 5,
      },
    ],
  },

  pricing: {
    title: 'Our Service Packages',
    subtitle: 'Flexible options to meet your legal needs and budget',
    plans: [
      {
        title: 'Initial Consultation',
        price: 150,
        period: '/session',
        description: 'Perfect for one-time legal advice',
        features: [
          '1-hour consultation',
          'Legal assessment',
          'Actionable recommendations',
          'Follow-up email summary',
        ],
        ctaText: 'Book Consultation',
      },
      {
        title: 'Standard Representation',
        price: 2500,
        period: '/case',
        description: 'Comprehensive legal services',
        features: [
          'Full case representation',
          'Document preparation',
          'Court appearances',
          'Regular case updates',
          'Email & phone support',
        ],
        ctaText: 'Get Started',
        featured: true,
        badge: 'Most Popular',
      },
      {
        title: 'Business Retainer',
        price: 5000,
        period: '/month',
        description: 'For ongoing business needs',
        features: [
          'Unlimited consultations',
          'Contract reviews',
          'Legal compliance support',
          'Priority response time',
          'Dedicated attorney',
          'Quarterly business reviews',
        ],
        ctaText: 'Contact Us',
      },
    ],
  },

  cta: {
    title: 'Ready to Protect Your Interests?',
    description: 'Schedule your free initial consultation today and discover how we can help resolve your legal matters',
    primaryCta: {
      text: 'Schedule Free Consultation',
      href: '/contact',
    },
    secondaryCta: {
      text: 'Call Us Now',
      href: 'tel:+15555551234',
    },
  },

  contact: {
    title: 'Get In Touch',
    subtitle: 'Fill out the form below and we\'ll respond within 24 hours',
  },
};
