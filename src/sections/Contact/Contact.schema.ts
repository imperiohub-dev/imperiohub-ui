import { ComponentSchema } from '../../types/schemas';

export const ContactSchema: ComponentSchema = {
  type: 'Contact',
  description: 'Contact form section',
  properties: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string' },
  },
  required: ['title'],
  examples: [
    {
      title: 'Get In Touch',
      subtitle: 'We\'ll respond within 24 hours',
    },
  ],
  aiGuidelines: 'Keep form simple. Essential fields only. Provide clear response time expectations.',
};
