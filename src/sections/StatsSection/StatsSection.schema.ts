import { ComponentSchema } from '../../types/schemas';

export const StatsSectionSchema: ComponentSchema = {
  type: 'StatsSection',
  description: 'Section displaying multiple statistics',
  properties: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    stats: { type: 'array', items: { type: 'object' } },
    layout: { type: 'string', enum: ['horizontal', 'grid'], default: 'grid' },
    variant: { type: 'string', enum: ['default', 'minimal', 'highlighted'], default: 'default' },
  },
  required: ['stats'],
  examples: [],
  aiGuidelines: `Use to showcase credibility through numbers: experience, clients, success rates.`,
};
