import { ComponentSchema } from '../../types/schemas';

export const FormFieldSchema: ComponentSchema = {
  type: 'FormField',
  description: 'Complete form field with label, input, validation, and helper text',
  properties: {
    type: {
      type: 'string',
      enum: ['input', 'textarea', 'select'],
      default: 'input',
    },
    fieldProps: {
      type: 'object',
      description: 'Props passed to the underlying field component',
    },
  },
  required: ['fieldProps'],
  examples: [
    {
      type: 'input',
      fieldProps: {
        label: 'Full Name',
        type: 'text',
        placeholder: 'John Doe',
        required: true,
      },
    },
  ],
  aiGuidelines: 'Use FormField for consistent form styling. Group related fields together.',
};
