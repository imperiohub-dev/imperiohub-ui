import { ComponentSchema } from '../../types/schemas';

export const DividerSchema: ComponentSchema = {
  type: 'Divider',
  description: 'Visual separator line',
  properties: {
    orientation: { type: 'string', enum: ['horizontal', 'vertical'], default: 'horizontal' },
  },
  required: [],
  examples: [{ orientation: 'horizontal' }],
  aiGuidelines: 'Use dividers to separate content sections.',
};
