import { ComponentSchema } from '../../types/schemas';

export const CardSchema: ComponentSchema = {
  type: 'Card',
  description: 'Content card with optional header and footer',
  properties: {
    header: { type: 'string', description: 'Card header content' },
    children: { type: 'string', description: 'Main card content', required: true },
    footer: { type: 'string', description: 'Card footer content' },
    clickable: { type: 'boolean', default: false },
  },
  required: ['children'],
  examples: [
    {
      header: 'Service Title',
      children: 'Service description goes here...',
      footer: 'Learn More',
      clickable: true,
    },
  ],
  aiGuidelines: 'Use cards to group related content. Make clickable for navigation.',
};
