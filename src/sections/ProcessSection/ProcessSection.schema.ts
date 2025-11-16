import { ComponentSchema } from '../../types/schemas';

export const ProcessSectionSchema: ComponentSchema = {
  type: 'ProcessSection',
  description: 'Section showing step-by-step process',
  properties: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    steps: { type: 'array', items: { type: 'object' } },
    layout: { type: 'string', enum: ['vertical', 'horizontal'], default: 'vertical' },
  },
  required: ['title', 'steps'],
  examples: [],
  aiGuidelines: `Use for "How it Works" sections. Explain the process of working with the professional.`,
};
