import { ComponentSchema } from '../../types/schemas';

export const ImageSchema: ComponentSchema = {
  type: 'Image',
  description: 'Optimized image component with responsive and accessibility features',
  properties: {
    src: { type: 'string', description: 'Image URL', required: true },
    alt: { type: 'string', description: 'Alternative text', required: true },
    objectFit: { type: 'string', enum: ['cover', 'contain'] },
    rounded: { type: 'string', enum: ['sm', 'md', 'lg', 'full', 'none'], default: 'none' },
  },
  required: ['src', 'alt'],
  examples: [
    { src: '/images/hero.jpg', alt: 'Professional consultation', objectFit: 'cover', rounded: 'lg' },
  ],
  aiGuidelines: 'Always provide descriptive alt text for accessibility. Use objectFit="cover" for hero images.',
};
