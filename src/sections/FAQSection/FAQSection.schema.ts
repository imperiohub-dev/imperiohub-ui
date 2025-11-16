import { ComponentSchema } from '../../types/schemas';

export const FAQSectionSchema: ComponentSchema = {
  type: 'FAQSection',
  description: 'Section for frequently asked questions',
  properties: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    faqs: { type: 'array', items: { type: 'object' } },
    layout: { type: 'string', enum: ['single', 'two-column'], default: 'single' },
  },
  required: ['title', 'faqs'],
  examples: [],
  aiGuidelines: `Essential for all professional landing pages. Address common questions about services, pricing, process.`,
};
