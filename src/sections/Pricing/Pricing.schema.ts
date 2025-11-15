import { ComponentSchema } from '../../types/schemas';

export const PricingSchema: ComponentSchema = {
  type: 'Pricing',
  description: 'Pricing plans section',
  properties: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string' },
    plans: { type: 'array', required: true },
  },
  required: ['title', 'plans'],
  examples: [{ title: 'Choose Your Plan', plans: [] }],
  aiGuidelines: 'Highlight the recommended plan. Use 2-3 plans typically.',
};
