import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Checkbox component
 * Used by AI to understand how to generate checkbox configurations
 */
export const CheckboxSchema: ComponentSchema = {
  type: 'Checkbox',
  description: 'Checkbox input for binary choices or multi-selection',
  properties: {
    label: {
      type: 'string',
      description: 'Label text displayed next to checkbox',
    },
    description: {
      type: 'string',
      description: 'Additional description text below label',
    },
    checked: {
      type: 'boolean',
      description: 'Checked state of checkbox',
    },
    required: {
      type: 'boolean',
      default: false,
      description: 'Marks field as required',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the checkbox',
    },
  },
  required: [],
  examples: [
    {
      label: 'I agree to the terms and conditions',
      required: true,
    },
    {
      label: 'Subscribe to newsletter',
      description: 'Get weekly updates, exclusive offers, and marketing tips',
      checked: true,
    },
    {
      label: 'Remember me',
      size: 'sm',
    },
  ],
  aiGuidelines: `
    Checkbox Usage Guidelines for AI:

    1. Use for binary choices (yes/no, on/off, agree/disagree)
    2. Use for multi-selection options (select multiple items from a list)
    3. Always provide clear, concise labels
    4. Use description for additional context or benefits

    Best Practices:
    - Label should be specific and action-oriented
    - For legal agreements: "I agree to the [specific document]"
    - For opt-ins: Use positive language explaining the benefit
    - Avoid double negatives (bad: "Don't not send me emails")
    - Keep labels short (1 line preferred, max 2 lines)
    - Use description for longer explanations

    Common Use Cases:
    - Terms acceptance: label="I agree to the Terms of Service", required=true
    - Newsletter opt-in: label="Subscribe to newsletter", description="Get updates..."
    - Remember me: label="Keep me logged in", size="sm"
    - Multi-select filters: Multiple checkboxes with related options
    - Privacy settings: label="Share my data", description="Help us improve..."
    - Preferences: label="Enable notifications", description="Get alerts when..."

    Accessibility:
    - Always include label text (don't use icon-only checkboxes)
    - Group related checkboxes together
    - Use required=true for mandatory agreements
  `,
};
