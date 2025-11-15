import { ComponentSchema } from '../../types/schemas';

export const AlertSchema: ComponentSchema = {
  type: 'Alert',
  description: 'Notification or message alert',
  properties: {
    variant: { type: 'string', enum: ['success', 'error', 'warning', 'info'], default: 'info' },
    children: { type: 'string', required: true },
  },
  required: ['children'],
  examples: [{ variant: 'success', children: 'Your message was sent successfully!' }],
  aiGuidelines: 'Use alerts for important user feedback. Keep messages clear and actionable.',
};
