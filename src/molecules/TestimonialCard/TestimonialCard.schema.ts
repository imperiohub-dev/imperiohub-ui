import { ComponentSchema } from '../../types/schemas';

export const TestimonialCardSchema: ComponentSchema = {
  type: 'TestimonialCard',
  description: 'Client testimonial card',
  properties: {
    quote: { type: 'string', required: true },
    authorName: { type: 'string', required: true },
    authorRole: { type: 'string' },
    rating: { type: 'number', minimum: 1, maximum: 5 },
  },
  required: ['quote', 'authorName'],
  examples: [
    {
      quote: 'Excellent service, highly recommend!',
      authorName: 'John Doe',
      authorRole: 'CEO, TechCorp',
      rating: 5,
    },
  ],
  aiGuidelines: 'Keep quotes authentic and specific. Include role for credibility.',
};
