import { ComponentSchema } from '../../types/schemas';

export const ServicesSectionSchema: ComponentSchema = {
  type: 'ServicesSection',
  description: 'Section displaying professional services',
  properties: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    services: { type: 'array', items: { type: 'object' } },
    columns: { type: 'number', enum: [2, 3, 4], default: 3 },
  },
  required: ['title', 'services'],
  examples: [],
  aiGuidelines: `Core section for all professional templates. Showcase services with pricing and features.`,
};
