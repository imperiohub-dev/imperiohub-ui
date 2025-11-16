import { ComponentSchema } from '../../types/schemas';

export const SocialProofSchema: ComponentSchema = {
  type: 'SocialProof',
  description: 'Display logos of clients, certifications, awards, or media mentions',
  properties: {
    type: { type: 'string', enum: ['clients', 'certifications', 'awards', 'media'], default: 'clients' },
    variant: { type: 'string', enum: ['logos', 'cards', 'minimal'], default: 'logos' },
    scrollable: { type: 'boolean', default: false },
    items: { type: 'array', items: { type: 'object' } },
  },
  required: ['items'],
  examples: [
    {
      type: 'clients',
      items: [
        { logo: '/client1.svg', name: 'Client 1' },
        { logo: '/client2.svg', name: 'Client 2' },
      ],
    },
  ],
  aiGuidelines: `Use to display trust indicators like client logos, certifications, media mentions, or awards.`,
};
