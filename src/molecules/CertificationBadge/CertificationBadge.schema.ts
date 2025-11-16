import { ComponentSchema } from '../../types/schemas';

export const CertificationBadgeSchema: ComponentSchema = {
  type: 'CertificationBadge',
  description: 'Display professional certifications, licenses, and credentials',
  properties: {
    name: { type: 'string', description: 'Certification name' },
    issuer: { type: 'string', description: 'Issuing organization' },
    year: { type: ['string', 'number'], description: 'Year obtained' },
    verified: { type: 'boolean', default: false },
    variant: { type: 'string', enum: ['detailed', 'minimal'], default: 'detailed' },
  },
  required: ['name', 'issuer'],
  examples: [
    { name: 'Board Certified', issuer: 'American Board of Surgery', year: 2015, verified: true },
  ],
  aiGuidelines: `Use for displaying professional credentials, certifications, licenses, and awards.`,
};
