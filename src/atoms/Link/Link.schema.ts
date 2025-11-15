import { ComponentSchema } from '../../types/schemas';

export const LinkSchema: ComponentSchema = {
  type: 'Link',
  description: 'Hyperlink component',
  properties: {
    href: { type: 'string', required: true },
    children: { type: 'string', required: true },
    underline: { type: 'boolean', default: false },
  },
  required: ['href', 'children'],
  examples: [{ href: '/about', children: 'Learn More' }],
  aiGuidelines: 'Use descriptive link text. Avoid "click here".',
};
