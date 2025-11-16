import { ComponentSchema } from '../../types/schemas';

export const TeamMemberCardSchema: ComponentSchema = {
  type: 'TeamMemberCard',
  description: 'Card for displaying team member information',
  properties: {
    image: { type: 'string' },
    name: { type: 'string' },
    role: { type: 'string' },
    bio: { type: 'string' },
    specialties: { type: 'array', items: { type: 'string' } },
    credentials: { type: 'array', items: { type: 'string' } },
    rating: { type: 'number' },
  },
  required: ['image', 'name', 'role'],
  examples: [
    {
      image: '/team/dr-smith.jpg',
      name: 'Dr. Jane Smith',
      role: 'Chief Surgeon',
      specialties: ['Cardiology', 'Surgery'],
      credentials: ['MD', 'Board Certified'],
      rating: 4.9,
    },
  ],
  aiGuidelines: `Use for team members, doctors, lawyers, consultants. Include credentials and specialties.`,
};
