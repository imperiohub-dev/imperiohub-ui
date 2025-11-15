import { ComponentSchema } from '../../types/schemas';

export const BadgeSchema: ComponentSchema = {
  type: 'Badge',
  description: 'Small label or tag component',
  properties: {
    children: { type: 'string', required: true },
    variant: { type: 'string', enum: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'neutral'], default: 'primary' },
    size: { type: 'string', enum: ['sm', 'md', 'lg'], default: 'md' },
  },
  required: ['children'],
  examples: [{ children: 'New', variant: 'success' }],
  aiGuidelines: 'Use badges for status, categories, or to highlight information.',
};
