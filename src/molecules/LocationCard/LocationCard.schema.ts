import { ComponentSchema } from '../../types/schemas';

export const LocationCardSchema: ComponentSchema = {
  type: 'LocationCard',
  description: 'Card for displaying business location information',
  properties: {
    name: { type: 'string' },
    address: { type: 'string' },
    phone: { type: 'string' },
    email: { type: 'string' },
    hours: { type: 'array', items: { type: 'object' } },
    mapUrl: { type: 'string' },
  },
  required: ['name', 'address'],
  examples: [
    {
      name: 'Downtown Office',
      address: '123 Main St, City, ST 12345',
      phone: '(555) 123-4567',
      hours: [
        { day: 'Mon-Fri', hours: '9am-5pm' },
      ],
    },
  ],
  aiGuidelines: `Use for multiple locations, offices, clinics. Include complete contact info and hours.`,
};
