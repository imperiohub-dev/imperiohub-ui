import { ComponentSchema } from '../../types/schemas';

export const ServiceCardSchema: ComponentSchema = {
  type: 'ServiceCard',
  description: 'Card for displaying professional services with pricing and features',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    price: { type: ['string', 'number'] },
    duration: { type: 'string' },
    features: { type: 'array', items: { type: 'string' } },
    variant: { type: 'string', enum: ['default', 'highlighted', 'minimal'], default: 'default' },
  },
  required: ['title', 'description'],
  examples: [
    {
      title: 'Initial Consultation',
      description: 'Comprehensive legal review and strategy session',
      price: '$150',
      duration: '1 hour',
      features: ['Case evaluation', 'Legal advice', 'Strategy planning'],
    },
  ],
  aiGuidelines: `Use for professional services, consultations, packages. Include pricing, duration, and key features.`,
};
