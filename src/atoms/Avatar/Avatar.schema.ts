import { ComponentSchema } from '../../types/schemas';

export const AvatarSchema: ComponentSchema = {
  type: 'Avatar',
  description: 'User avatar with image or initials',
  properties: {
    src: { type: 'string', description: 'Avatar image URL' },
    alt: { type: 'string', default: 'Avatar' },
    initials: { type: 'string', description: 'Initials to display if no image' },
    size: { type: 'string', enum: ['sm', 'md', 'lg', 'xl', '2xl'], default: 'md' },
  },
  required: [],
  examples: [{ src: '/avatar.jpg', alt: 'John Doe' }, { initials: 'JD', size: 'lg' }],
  aiGuidelines: 'Use initials as fallback when no image is available.',
};
