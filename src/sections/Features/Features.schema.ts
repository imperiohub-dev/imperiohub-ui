import { ComponentSchema } from '../../types/schemas';

export const FeaturesSchema: ComponentSchema = {
  type: 'Features',
  description: 'Features/benefits section with icon grid',
  properties: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string' },
    features: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          icon: { type: 'string', description: 'Lucide icon name' },
          title: { type: 'string' },
          description: { type: 'string' },
        },
      },
      required: true,
    },
  },
  required: ['title', 'features'],
  examples: [
    {
      title: 'Why Choose Us',
      subtitle: 'Professional services designed for your success',
      features: [
        { icon: 'CheckCircle', title: 'Expert Guidance', description: 'Years of professional experience' },
        { icon: 'Clock', title: 'Fast Response', description: '24/7 availability for urgent matters' },
        { icon: 'Shield', title: 'Confidential', description: 'Your privacy is our priority' },
      ],
    },
  ],
  aiGuidelines: 'Focus on benefits, not just features. Use 3, 6, or 9 items for best grid layout.',
};
