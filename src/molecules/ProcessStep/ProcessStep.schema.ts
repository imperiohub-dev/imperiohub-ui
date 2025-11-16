import { ComponentSchema } from '../../types/schemas';

export const ProcessStepSchema: ComponentSchema = {
  type: 'ProcessStep',
  description: 'Individual step in a process or workflow',
  properties: {
    number: { type: ['number', 'string'] },
    title: { type: 'string' },
    description: { type: 'string' },
    variant: { type: 'string', enum: ['numbered', 'icon', 'minimal'], default: 'numbered' },
  },
  required: ['number', 'title', 'description'],
  examples: [
    { number: 1, title: 'Initial Consultation', description: 'We discuss your needs and goals' },
  ],
  aiGuidelines: `Use for "How it Works" sections, step-by-step processes, onboarding flows.`,
};
