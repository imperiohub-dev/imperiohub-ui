import { ComponentSchema } from '../../types/schemas';

export const TestimonialsSchema: ComponentSchema = {
  type: 'Testimonials',
  description: 'Client testimonials section',
  properties: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string' },
    testimonials: { type: 'array', required: true },
  },
  required: ['title', 'testimonials'],
  examples: [{ title: 'What Our Clients Say', testimonials: [] }],
  aiGuidelines: 'Use 3 or 6 testimonials for best layout. Include specific results when possible.',
};
