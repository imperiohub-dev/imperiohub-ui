import { ComponentSchema } from '../../types/schemas';

export const TeamSectionSchema: ComponentSchema = {
  type: 'TeamSection',
  description: 'Section displaying team members',
  properties: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    members: { type: 'array', items: { type: 'object' } },
  },
  required: ['title', 'members'],
  examples: [],
  aiGuidelines: `Use for medical practices, law firms, agencies. Showcase credentials and expertise.`,
};
