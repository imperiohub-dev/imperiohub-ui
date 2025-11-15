import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Textarea component
 * Used by AI to understand how to generate textarea configurations
 */
export const TextareaSchema: ComponentSchema = {
  type: 'Textarea',
  description: 'Multi-line text input field for longer user content',
  properties: {
    label: {
      type: 'string',
      description: 'Label text displayed above the textarea',
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder text inside the textarea',
    },
    helperText: {
      type: 'string',
      description: 'Helper text displayed below the textarea',
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
      description: 'Size of the textarea field',
    },
    maxLength: {
      type: 'number',
      description: 'Maximum character limit',
    },
    showCounter: {
      type: 'boolean',
      default: false,
      description: 'Shows character counter (requires maxLength)',
    },
    autoResize: {
      type: 'boolean',
      default: false,
      description: 'Auto-resize textarea as user types',
    },
    rows: {
      type: 'number',
      description: 'Initial number of visible rows',
    },
  },
  required: [],
  examples: [
    {
      label: 'Message',
      placeholder: 'Tell us more about your project...',
      required: true,
      maxLength: 500,
      showCounter: true,
    },
    {
      label: 'Additional Comments',
      placeholder: 'Any additional information...',
      autoResize: true,
      rows: 3,
    },
    {
      label: 'Describe Your Needs',
      helperText: 'Please provide as much detail as possible',
      size: 'lg',
    },
  ],
  aiGuidelines: `
    Textarea Usage Guidelines for AI:

    1. Use for multi-line or longer text inputs (messages, descriptions, comments, etc.)
    2. Always provide clear labels explaining what information is needed
    3. Use placeholder text to show format or give examples
    4. Set appropriate maxLength based on use case:
       - Short messages: 200-500 characters
       - Medium content: 500-1000 characters
       - Long content: 1000-5000 characters
    5. Enable showCounter when there's a character limit
    6. Use autoResize for better UX when content length varies

    Best Practices:
    - Label should indicate expected content (e.g., "Tell us about your project" not just "Message")
    - Placeholder should guide the user (e.g., "Include timeline, budget, and goals...")
    - Helper text can specify format requirements or what to include
    - For required fields, explain why the information is needed

    Common Use Cases:
    - Contact form message: label="Message", maxLength=500, showCounter=true
    - Feedback/reviews: label="Your Feedback", autoResize=true
    - Support ticket: label="Describe Your Issue", size="lg", required=true
    - Bio/About: label="About You", maxLength=300, helperText="Share your background"
    - Comments: label="Add a Comment", autoResize=true, size="sm"
  `,
};
