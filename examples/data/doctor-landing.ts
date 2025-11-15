/**
 * Example data for a doctor/medical practice landing page
 */

import { Heart, Clock, Shield, Users, Award, Stethoscope } from 'lucide-react';

export const doctorLandingData = {
  hero: {
    title: 'Healthcare That Puts You First',
    subtitle: 'Compassionate, personalized medical care from experienced professionals dedicated to your health and wellbeing.',
    primaryCta: {
      text: 'Book Appointment',
      href: '/booking',
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services',
    },
    image: {
      src: '/images/doctor-hero.jpg',
      alt: 'Compassionate healthcare professional',
    },
    gradientTitle: false,
  },

  features: {
    title: 'Why Choose Our Practice',
    subtitle: 'Committed to providing exceptional healthcare with a personal touch',
    features: [
      {
        icon: Stethoscope,
        title: 'Expert Medical Care',
        description: '15+ years of medical experience with board certification and ongoing education',
      },
      {
        icon: Clock,
        title: 'Same-Day Appointments',
        description: 'Flexible scheduling with same-day appointments available for urgent needs',
      },
      {
        icon: Heart,
        title: 'Compassionate Approach',
        description: 'Patient-centered care that treats the whole person, not just symptoms',
      },
      {
        icon: Users,
        title: 'Family-Friendly',
        description: 'Comprehensive care for patients of all ages, from pediatrics to geriatrics',
      },
      {
        icon: Award,
        title: 'Top-Rated Practice',
        description: '5-star patient reviews and recognized for excellence in healthcare',
      },
      {
        icon: Shield,
        title: 'Insurance Accepted',
        description: 'We accept most major insurance plans and offer affordable self-pay options',
      },
    ],
  },

  testimonials: {
    title: 'Patient Testimonials',
    subtitle: 'Real stories from our valued patients',
    testimonials: [
      {
        quote: 'Dr. Smith is wonderful! She takes time to listen and explains everything clearly. I finally found a doctor who truly cares about my health.',
        authorName: 'Jennifer Martinez',
        authorRole: 'Patient since 2020',
        rating: 5,
      },
      {
        quote: 'Outstanding care for my entire family. The staff is friendly, the office is clean, and wait times are minimal. Highly recommend!',
        authorName: 'Robert Thompson',
        authorRole: 'Family Patient',
        rating: 5,
      },
      {
        quote: 'Professional, knowledgeable, and compassionate. They helped me manage my chronic condition and improve my quality of life significantly.',
        authorName: 'Lisa Anderson',
        authorRole: 'Long-term Patient',
        rating: 5,
      },
    ],
  },

  pricing: {
    title: 'Our Services',
    subtitle: 'Comprehensive healthcare solutions for you and your family',
    plans: [
      {
        title: 'New Patient Visit',
        price: 150,
        period: '/visit',
        description: 'Comprehensive initial examination',
        features: [
          'Complete health assessment',
          'Medical history review',
          'Physical examination',
          'Treatment plan development',
        ],
        ctaText: 'Book Appointment',
      },
      {
        title: 'Annual Wellness',
        price: 250,
        period: '/year',
        description: 'Preventive care package',
        features: [
          'Annual physical exam',
          'Lab work & screenings',
          'Vaccination updates',
          'Health counseling',
          'Follow-up visits included',
        ],
        ctaText: 'Get Started',
        featured: true,
        badge: 'Best Value',
      },
      {
        title: 'Concierge Care',
        price: 500,
        period: '/month',
        description: 'Premium healthcare membership',
        features: [
          'Unlimited office visits',
          'Same-day appointments',
          '24/7 phone access',
          'Comprehensive care coordination',
          'Extended appointment times',
          'House calls available',
        ],
        ctaText: 'Learn More',
      },
    ],
  },

  cta: {
    title: 'Take Control of Your Health Today',
    description: 'Schedule your appointment and experience healthcare the way it should be',
    primaryCta: {
      text: 'Book Your Appointment',
      href: '/booking',
    },
    secondaryCta: {
      text: 'Call Our Office',
      href: 'tel:+15555556789',
    },
  },

  contact: {
    title: 'Contact Our Practice',
    subtitle: 'We\'re here to answer your questions and schedule your visit',
  },
};
