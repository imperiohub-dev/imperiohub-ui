import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Select component
 * Used by AI to understand how to generate select configurations
 */
export const SelectSchema: ComponentSchema = {
  type: 'Select',
  description: 'Dropdown select field for choosing from multiple options',
  properties: {
    label: {
      type: 'string',
      description: 'Label text displayed above the select',
    },
    placeholder: {
      type: 'string',
      default: 'Select an option...',
      description: 'Placeholder text for the default option',
    },
    helperText: {
      type: 'string',
      description: 'Helper text displayed below the select',
    },
    required: {
      type: 'boolean',
      default: false,
      description: 'Marks field as required',
    },
    options: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: { type: 'string' },
          value: { type: ['string', 'number'] },
          disabled: { type: 'boolean' },
        },
        required: ['label', 'value'],
      },
      description: 'Array of options for the dropdown',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the select field',
    },
  },
  required: ['options'],
  examples: [
    {
      label: 'Country',
      placeholder: 'Select your country',
      options: [
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
        { label: 'Mexico', value: 'mx' },
        { label: 'United Kingdom', value: 'uk' },
      ],
      required: true,
    },
    {
      label: 'Service Type',
      options: [
        { label: 'Consultation', value: 'consultation' },
        { label: 'Full Service', value: 'full' },
        { label: 'Custom Project', value: 'custom' },
      ],
    },
    {
      label: 'Appointment Duration',
      helperText: 'Select how long you need',
      options: [
        { label: '30 minutes', value: 30 },
        { label: '1 hour', value: 60 },
        { label: '2 hours', value: 120 },
      ],
    },
  ],
  aiGuidelines: `
    Select Dropdown Usage Guidelines for AI:

    1. Use for choosing from 5+ options (for fewer options, consider Radio buttons)
    2. Always provide clear, descriptive labels
    3. Order options logically (alphabetically, by frequency, by price, etc.)
    4. Use placeholder to prompt user action
    5. Group related options when there are many choices

    Best Practices:
    - Label should clearly indicate what is being selected
    - Placeholder should be instructional (e.g., "Select your country" vs "Country")
    - Options should be concise but descriptive
    - Most common or recommended option should appear first (after placeholder)
    - Use helperText to provide additional context or instructions

    Common Use Cases:

    Geographic Selection:
    - Countries: Alphabetically ordered, required for shipping
    - States/Provinces: Based on selected country
    - Cities: Popular cities first, then alphabetical
    - Time zones: Group by region

    Service/Product Selection:
    - Service types: Most popular first
    - Product categories: Logical grouping
    - Pricing tiers: Low to high or recommended first

    Scheduling:
    - Time slots: Chronological order
    - Duration: Short to long
    - Dates: Upcoming first

    Professional Services:
    - Appointment types: Consultation, Full Service, etc.
    - Specializations: Alphabetical or by popularity
    - Availability: Available slots only

    Ordering Guidelines:
    - Alphabetical: For countries, states, general lists
    - Chronological: For dates, times
    - Frequency: Most common first
    - Logical: Low to high for prices/durations
    - Recommended: Highlight suggested option

    Accessibility:
    - Keep option labels concise
    - Don't use select for navigation (use links instead)
    - Provide context in helperText if options need explanation
    - Use disabled for unavailable options, not to show categories
  `,
};
