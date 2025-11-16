import { ComponentSchema } from '../../types/schemas';

export const PortfolioItemSchema: ComponentSchema = {
  type: 'PortfolioItem',
  description: 'Portfolio or gallery item showcasing work',
  properties: {
    image: { type: 'string' },
    title: { type: 'string' },
    category: { type: 'string' },
    description: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    overlay: { type: 'boolean', default: true },
  },
  required: ['image', 'title', 'category'],
  examples: [
    {
      image: '/portfolio/project1.jpg',
      title: 'Modern Villa Design',
      category: 'Architecture',
      tags: ['Residential', 'Modern'],
    },
  ],
  aiGuidelines: `Use for portfolios, case studies, project galleries. Great for designers, photographers, architects.`,
};
