import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Chip component
 * Used by AI to understand how to generate chip/tag configurations
 */
export const ChipSchema: ComponentSchema = {
  type: 'Chip',
  description: 'Small labels for tags, categories, specialties, and status indicators',
  properties: {
    variant: {
      type: 'string',
      enum: ['filled', 'outline', 'subtle'],
      default: 'filled',
      description: 'Visual style of the chip',
    },
    color: {
      type: 'string',
      enum: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
      default: 'primary',
      description: 'Color theme of the chip',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the chip',
    },
    removable: {
      type: 'boolean',
      default: false,
      description: 'Show remove/close icon',
    },
    clickable: {
      type: 'boolean',
      default: false,
      description: 'Make chip interactive/clickable',
    },
    children: {
      type: 'string',
      description: 'Chip label/text content',
    },
  },
  required: ['children'],
  examples: [
    {
      variant: 'filled',
      color: 'primary',
      children: 'React Developer',
    },
    {
      variant: 'outline',
      color: 'success',
      children: 'Verified',
    },
    {
      variant: 'subtle',
      color: 'neutral',
      children: 'JavaScript',
      removable: true,
    },
  ],
  aiGuidelines: `
    Chip/Tag Component Usage Guidelines for AI:

    1. WHEN TO USE:
       - Professional specialties and skills
       - Service categories and types
       - Industry certifications
       - Technology stacks
       - Status indicators
       - Blog/content tags
       - Filter options

    2. COLOR MEANINGS:
       - primary: Main categories, featured items
       - secondary: Alternative categories
       - success: Verified, approved, active status
       - warning: Pending, attention needed
       - error: Unavailable, error state, critical
       - neutral: General tags, default categories

    3. VARIANT SELECTION:
       - filled: High emphasis, primary categories
       - outline: Medium emphasis, secondary tags
       - subtle: Low emphasis, supplementary tags

    4. SIZE GUIDELINES:
       - sm: Dense lists, compact displays, mobile views
       - md: Standard usage, most common
       - lg: Emphasis, hero sections, important labels

    5. PROFESSIONAL USE CASES:

       LAWYERS/CONSULTANTS:
       - Practice areas: "Corporate Law", "Tax Law"
       - Specialties: "M&A Expert", "IP Specialist"
       - Languages: "English", "Spanish"

       DOCTORS/HEALTHCARE:
       - Specialties: "Cardiology", "Pediatrics"
       - Services: "Emergency Care", "Telemedicine"
       - Insurance: "Accepts Medicare", "All Insurance"

       FREELANCERS/AGENCIES:
       - Skills: "UI/UX Design", "React", "TypeScript"
       - Services: "Web Design", "Branding", "SEO"
       - Industries: "Healthcare", "Finance", "E-commerce"

       BUSINESSES:
       - Categories: "Restaurant", "Retail", "Services"
       - Features: "Delivery", "Parking", "WiFi"
       - Status: "Open Now", "Accepting Orders"

    6. BEST PRACTICES:
       - Keep labels short (1-3 words)
       - Group related chips together
       - Use consistent colors for similar types
       - Limit to 3-7 chips per group for readability
       - Use removable chips for user-selected filters

    7. ACCESSIBILITY:
       - Chips are keyboard navigable
       - Remove buttons have proper ARIA labels
       - Sufficient color contrast in all variants

    Do NOT use:
    - For long text (use Badge or Label instead)
    - As primary navigation (use Tabs or Menu)
    - For critical information only (combine with other indicators)
  `,
};
