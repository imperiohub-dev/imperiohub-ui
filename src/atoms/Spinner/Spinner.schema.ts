import { ComponentSchema } from '../../types/schemas';

export const SpinnerSchema: ComponentSchema = {
  type: 'Spinner',
  description: 'Loading spinner indicator',
  properties: {
    size: { type: 'string', enum: ['sm', 'md', 'lg', 'xl'], default: 'md' },
  },
  required: [],
  examples: [{ size: 'md' }],
  aiGuidelines: 'Use spinners to indicate loading states.',
};
