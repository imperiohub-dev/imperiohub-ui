import { ComponentSchema } from '../../types/schemas';

export const CTASchema: ComponentSchema = {
  type: 'CTA',
  description: 'Call-to-action section',
  properties: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    primaryCta: { type: 'object', required: true },
    secondaryCta: { type: 'object' },
  },
  required: ['title', 'description', 'primaryCta'],
  examples: [
    {
      title: 'Ready to Get Started?',
      description: 'Schedule your free consultation today',
      primaryCta: { text: 'Book Consultation', href: '/contact' },
    },
  ],
  aiGuidelines: 'Create urgency. Make the action clear and compelling.',
};
