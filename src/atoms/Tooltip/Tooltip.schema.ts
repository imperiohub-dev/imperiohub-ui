import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Tooltip component
 * Used by AI to understand how to generate tooltip configurations
 */
export const TooltipSchema: ComponentSchema = {
  type: 'Tooltip',
  description: 'Contextual information popup displayed on hover or click',
  properties: {
    content: {
      type: 'string',
      description: 'Tooltip text or content to display',
    },
    position: {
      type: 'string',
      enum: ['top', 'bottom', 'left', 'right'],
      default: 'top',
      description: 'Position of tooltip relative to trigger element',
    },
    trigger: {
      type: 'string',
      enum: ['hover', 'click'],
      default: 'hover',
      description: 'How the tooltip is triggered',
    },
    delay: {
      type: 'number',
      default: 200,
      description: 'Delay in milliseconds before showing tooltip',
    },
    disabled: {
      type: 'boolean',
      default: false,
      description: 'Disable the tooltip',
    },
  },
  required: ['content', 'children'],
  examples: [
    {
      content: 'This is helpful information',
      position: 'top',
      trigger: 'hover',
    },
    {
      content: 'Click for more details',
      position: 'right',
      trigger: 'click',
    },
  ],
  aiGuidelines: `
    Tooltip Component Usage Guidelines for AI:

    1. WHEN TO USE:
       - Explain unfamiliar terms or concepts
       - Provide additional context for icons
       - Show full text when space is limited
       - Display keyboard shortcuts
       - Explain pricing details
       - Show certification details
       - Provide help text for form fields

    2. CONTENT BEST PRACTICES:
       - Keep text concise (under 100 characters)
       - Use clear, simple language
       - Avoid redundant information
       - Don't repeat visible text
       - Include actionable information when relevant

    3. POSITION GUIDELINES:
       - top: Default, works in most cases
       - bottom: When element is near top of viewport
       - left: When element is on right side
       - right: When element is on left side
       - Consider viewport boundaries

    4. TRIGGER SELECTION:
       - hover: Default for informational tooltips
       - click: For mobile-friendly interactions or complex content
       - Use hover for icons and abbreviated text
       - Use click for interactive elements

    5. PROFESSIONAL USE CASES:

       SERVICES/PRICING:
       - Explain what's included in a service
       - Show pricing breakdown details
       - Clarify terms and conditions

       CREDENTIALS/CERTIFICATIONS:
       - Display full certification name
       - Show issuing organization
       - Provide verification details

       SPECIALTIES/SKILLS:
       - Explain technical terms
       - Show proficiency levels
       - Display years of experience

       PROCESS STEPS:
       - Additional details about each step
       - Time estimates
       - Requirements or prerequisites

    6. ACCESSIBILITY:
       - Tooltips have proper ARIA roles
       - Keyboard accessible (focus triggers tooltip)
       - Sufficient color contrast
       - Not essential for understanding (supplement, not replace)

    7. MOBILE CONSIDERATIONS:
       - Use click trigger for mobile
       - Keep content short for small screens
       - Consider using modal or accordion instead for complex content

    Do NOT use:
    - For critical information (use visible text instead)
    - For long content (use popover or modal)
    - On disabled elements (browsers handle inconsistently)
    - When the same information is already visible
    - For navigation (use menus or links)
  `,
};
