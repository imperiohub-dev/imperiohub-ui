import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Radio component
 * Used by AI to understand how to generate radio button configurations
 */
export const RadioSchema: ComponentSchema = {
  type: 'Radio',
  description: 'Radio button for single-selection from multiple options',
  properties: {
    name: {
      type: 'string',
      description: 'Group name for radio buttons (required for proper grouping)',
      required: true,
    },
    value: {
      type: 'string',
      description: 'Value of this radio option',
      required: true,
    },
    label: {
      type: 'string',
      description: 'Label text displayed next to radio button',
    },
    description: {
      type: 'string',
      description: 'Additional description text below label',
    },
    checked: {
      type: 'boolean',
      description: 'Checked state of radio button',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the radio button',
    },
  },
  required: ['name', 'value'],
  examples: [
    {
      name: 'plan',
      value: 'basic',
      label: 'Basic Plan',
      description: '$9/month - Perfect for individuals',
    },
    {
      name: 'plan',
      value: 'pro',
      label: 'Pro Plan',
      description: '$29/month - Best for teams',
      checked: true,
    },
    {
      name: 'payment',
      value: 'card',
      label: 'Credit Card',
      description: 'Pay securely with your credit or debit card',
    },
  ],
  aiGuidelines: `
    Radio Button Usage Guidelines for AI:

    1. Use for single-selection from 2-5 options (for more options, use Select)
    2. All radio buttons in a group must have the same 'name' attribute
    3. Each radio button must have a unique 'value' attribute
    4. Always provide clear, distinct labels for each option
    5. Use description to provide additional context about each option

    Best Practices:
    - Label should clearly describe the option
    - Group related options together visually
    - Set one option as checked by default when possible
    - Order options logically (e.g., price low to high, common to rare)
    - Use descriptions to highlight key differences between options
    - Keep options mutually exclusive

    Common Use Cases:
    - Pricing plans: Multiple tiers with descriptions
    - Payment methods: Card, PayPal, Bank Transfer, etc.
    - Delivery options: Standard, Express, Next Day
    - Yes/No questions: Binary choices (though checkbox might be better)
    - Gender selection: Male, Female, Other, Prefer not to say
    - Time slots: Morning, Afternoon, Evening
    - Service types: Different service offerings

    Accessibility:
    - Always use the same 'name' for grouped options
    - Provide labels for all radio buttons
    - Consider using fieldset/legend for the group (handled by parent component)
    - Ensure keyboard navigation works (arrow keys move between options)

    Examples of Good Radio Groups:

    Plan Selection:
    - name="plan", value="starter", label="Starter", description="$0/mo - Try it out"
    - name="plan", value="pro", label="Pro", description="$29/mo - For professionals"
    - name="plan", value="enterprise", label="Enterprise", description="Custom pricing"

    Appointment Time:
    - name="time", value="morning", label="Morning (9AM - 12PM)"
    - name="time", value="afternoon", label="Afternoon (12PM - 5PM)"
    - name="time", value="evening", label="Evening (5PM - 8PM)"
  `,
};
