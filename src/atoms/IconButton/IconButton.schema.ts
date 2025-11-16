import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for IconButton component
 * Used by AI to understand how to generate icon button configurations
 */
export const IconButtonSchema: ComponentSchema = {
  type: 'IconButton',
  description: 'Button component displaying only an icon for compact actions',
  properties: {
    variant: {
      type: 'string',
      enum: ['filled', 'outline', 'ghost'],
      default: 'filled',
      description: 'Visual style of the button',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the button',
    },
    color: {
      type: 'string',
      enum: ['primary', 'secondary', 'success', 'error', 'neutral'],
      default: 'primary',
      description: 'Color theme of the button',
    },
    rounded: {
      type: 'boolean',
      default: true,
      description: 'Circular/rounded button shape',
    },
    'aria-label': {
      type: 'string',
      description: 'Accessible label for screen readers (REQUIRED)',
    },
  },
  required: ['icon', 'aria-label'],
  examples: [
    {
      variant: 'ghost',
      size: 'md',
      color: 'neutral',
      'aria-label': 'Menu',
    },
    {
      variant: 'filled',
      size: 'lg',
      color: 'primary',
      rounded: true,
      'aria-label': 'Play video',
    },
    {
      variant: 'outline',
      size: 'sm',
      color: 'error',
      'aria-label': 'Delete',
    },
  ],
  aiGuidelines: `
    IconButton Component Usage Guidelines for AI:

    1. WHEN TO USE:
       - Social media links in footer/header
       - Quick actions (edit, delete, share)
       - Navigation controls (menu, close, back)
       - Media controls (play, pause, volume)
       - Toolbars and action bars
       - Mobile navigation toggles
       - Compact interfaces where space is limited

    2. ACCESSIBILITY REQUIREMENT:
       - ALWAYS include aria-label
       - Label must describe the action clearly
       - Examples: "Open menu", "Share on Facebook", "Delete item"
       - Never omit aria-label - it's required for screen readers

    3. VARIANT SELECTION:
       - filled: Primary actions, high emphasis
       - outline: Secondary actions, medium emphasis
       - ghost: Tertiary actions, minimal emphasis, navigation

    4. SIZE GUIDELINES:
       - sm: Compact lists, dense toolbars, mobile
       - md: Standard usage, most common
       - lg: Hero sections, prominent actions, feature highlights

    5. COLOR MEANINGS:
       - primary: Main actions, brand interactions
       - secondary: Alternative actions
       - success: Confirmations, positive actions
       - error: Delete, remove, dangerous actions
       - neutral: General navigation, low priority

    6. ROUNDED VS SQUARE:
       - rounded: true (default) - Social media, playful, modern
       - rounded: false - Technical interfaces, formal, grid layouts

    7. PROFESSIONAL USE CASES:

       SOCIAL MEDIA (Footer/Header):
       - variant='ghost', size='md', rounded=true
       - color='neutral' or 'primary'
       - Icons: Facebook, Twitter, LinkedIn, Instagram
       - aria-label: "Visit us on [Platform]"

       NAVIGATION:
       - Mobile menu: variant='ghost', size='lg'
       - Close/Back: variant='ghost', size='md'
       - aria-label: "Open menu", "Close dialog", "Go back"

       QUICK ACTIONS:
       - Edit: variant='outline', color='primary'
       - Delete: variant='outline', color='error'
       - Share: variant='ghost', color='neutral'

       CONTACT ACTIONS:
       - Call: variant='filled', color='success', size='lg'
       - Email: variant='filled', color='primary', size='lg'
       - Message: variant='outline', color='primary'

       MEDIA:
       - Play video: variant='filled', size='lg', rounded=true
       - Pause/Stop: variant='ghost'
       - Volume: variant='ghost', size='sm'

    8. COMMON PATTERNS:

       Social Footer:
       - All ghost variant, neutral color
       - Consistent sizing (usually 'md')
       - Rounded for modern feel

       Action Toolbar:
       - Mix of ghost and outline
       - Consistent sizing (usually 'sm' or 'md')
       - Error color for destructive actions

       Mobile Header:
       - Menu icon: ghost, large, neutral
       - Back button: ghost, medium

    9. BEST PRACTICES:
       - Use consistent sizing within a group
       - Group related actions together
       - Place destructive actions (delete) separately
       - Provide visual feedback on hover/active
       - Ensure adequate touch target size (min 44x44px)

    10. ACCESSIBILITY:
        - Required aria-label for all instances
        - Keyboard navigable
        - Visible focus indicators
        - Adequate color contrast
        - Touch-friendly sizes for mobile

    Do NOT use:
    - Without aria-label (accessibility violation)
    - For actions that need text labels for clarity
    - When text would improve understanding
    - As the sole navigation method (provide alternatives)
  `,
};
