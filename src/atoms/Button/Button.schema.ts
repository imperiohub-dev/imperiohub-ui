import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Button component
 * Used by AI to understand how to generate button configurations
 */
export const ButtonSchema: ComponentSchema = {
  type: 'Button',
  description: 'Interactive button component for user actions',
  properties: {
    variant: {
      type: 'string',
      enum: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
      default: 'primary',
      description: 'Visual style variant of the button',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the button',
    },
    children: {
      type: 'string',
      description: 'Button text/label',
    },
    loading: {
      type: 'boolean',
      default: false,
      description: 'Shows loading spinner when true',
    },
    fullWidth: {
      type: 'boolean',
      default: false,
      description: 'Makes button full width of container',
    },
    disabled: {
      type: 'boolean',
      default: false,
      description: 'Disables button interaction',
    },
  },
  required: ['children'],
  examples: [
    {
      variant: 'primary',
      size: 'md',
      children: 'Get Started',
    },
    {
      variant: 'outline',
      size: 'lg',
      children: 'Learn More',
    },
    {
      variant: 'ghost',
      size: 'sm',
      children: 'Cancel',
    },
  ],
  aiGuidelines: `
    Button Usage Guidelines for AI:

    1. Use 'primary' variant for main CTAs (Call To Action)
    2. Use 'secondary' for alternative actions
    3. Use 'outline' for less prominent actions
    4. Use 'ghost' for tertiary actions or cancel buttons
    5. Use 'danger' for destructive actions (delete, remove)
    6. Use 'success' for confirmations or positive actions

    Best Practices:
    - Keep button text concise (2-4 words max)
    - Use action verbs (Get, Start, Download, Subscribe, etc.)
    - For CTAs, focus on benefits (e.g., "Start Free Trial" vs "Sign Up")
    - Primary buttons should stand out - use sparingly (max 1-2 per section)

    Common Use Cases:
    - Hero section CTA: variant='primary', size='lg'
    - Form submit: variant='primary', size='md'
    - Secondary action: variant='outline', size='md'
    - Navigation: variant='ghost', size='sm'
  `,
};
