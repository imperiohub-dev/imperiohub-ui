import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Input component
 * Used by AI to understand how to generate input configurations
 */
export const InputSchema: ComponentSchema = {
  type: 'Input',
  description: 'Text input field for user data entry',
  properties: {
    type: {
      type: 'string',
      enum: ['text', 'email', 'password', 'tel', 'url', 'number', 'search'],
      default: 'text',
      description: 'HTML input type',
    },
    label: {
      type: 'string',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder text inside the input',
    },
    helperText: {
      type: 'string',
      description: 'Helper text displayed below the input',
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
      description: 'Size of the input field',
    },
  },
  required: [],
  examples: [
    {
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      type: 'text',
      label: 'Full Name',
      placeholder: 'John Doe',
      helperText: 'Please enter your full name',
    },
    {
      type: 'tel',
      label: 'Phone Number',
      placeholder: '+1 (555) 000-0000',
    },
  ],
  aiGuidelines: `
    Input Field Usage Guidelines for AI:

    1. Always provide clear, descriptive labels
    2. Use appropriate input types:
       - 'email' for email addresses (enables mobile keyboard optimization)
       - 'tel' for phone numbers
       - 'url' for website addresses
       - 'number' for numeric values
       - 'search' for search fields
    3. Include helpful placeholder text that shows format examples
    4. Use helperText for additional instructions or format requirements
    5. Mark required fields with required: true

    Best Practices:
    - Labels should be concise but descriptive (e.g., "Email Address" not just "Email")
    - Placeholder should show format example (e.g., "john@example.com" not "Enter email")
    - Helper text should clarify requirements (e.g., "Must be at least 8 characters")
    - For sensitive data (passwords, SSN), use appropriate input types

    Common Form Fields:
    - Contact forms: name, email, phone, message
    - Registration: email, password, confirm password
    - Booking: name, email, phone, date, time
    - Newsletter: email only
    - Search: use type='search' with appropriate placeholder
  `,
};
