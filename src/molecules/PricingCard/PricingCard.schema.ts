import { ComponentSchema } from '../../types/schemas';

export const PricingCardSchema: ComponentSchema = {
  type: 'PricingCard',
  description: 'Pricing or service plan card',
  properties: {
    title: { type: 'string', required: true },
    price: { type: ['string', 'number'], required: true },
    period: { type: 'string', default: '/mo' },
    features: { type: 'array', items: { type: 'string' }, required: true },
    ctaText: { type: 'string', required: true },
    featured: { type: 'boolean', default: false },
  },
  required: ['title', 'price', 'features', 'ctaText'],
  examples: [
    {
      title: 'Professional',
      price: 99,
      features: ['Initial consultation', '3 follow-ups', 'Email support'],
      ctaText: 'Get Started',
      featured: true,
    },
  ],
  aiGuidelines: 'Use featured for recommended plans. Keep features concise.',
};
