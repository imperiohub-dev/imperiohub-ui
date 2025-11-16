import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Rating component
 * Used by AI to understand how to generate rating configurations
 */
export const RatingSchema: ComponentSchema = {
  type: 'Rating',
  description: 'Star rating component for displaying or collecting quality ratings',
  properties: {
    value: {
      type: 'number',
      default: 0,
      minimum: 0,
      description: 'Current rating value',
    },
    max: {
      type: 'number',
      default: 5,
      minimum: 1,
      description: 'Maximum rating value',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the rating stars',
    },
    readonly: {
      type: 'boolean',
      default: true,
      description: 'Whether the rating is read-only or interactive',
    },
    precision: {
      type: 'string',
      enum: ['full', 'half'],
      default: 'half',
      description: 'Rating precision - full stars or half stars',
    },
    showLabel: {
      type: 'boolean',
      default: false,
      description: 'Show numeric rating label next to stars',
    },
    color: {
      type: 'string',
      description: 'Custom color for stars (CSS custom property)',
    },
  },
  required: [],
  examples: [
    {
      value: 4.5,
      readonly: true,
      size: 'md',
    },
    {
      value: 5,
      readonly: true,
      showLabel: true,
      size: 'sm',
    },
    {
      value: 0,
      readonly: false,
      size: 'lg',
    },
  ],
  aiGuidelines: `
    Rating Component Usage Guidelines for AI:

    1. WHEN TO USE:
       - Testimonial sections to show client satisfaction
       - Service cards to display service quality
       - Product reviews and ratings
       - Professional credentials and reputation
       - Team member ratings or endorsements

    2. BEST PRACTICES:
       - Use readonly={true} for displaying existing ratings
       - Use readonly={false} for collecting user ratings
       - Show half stars (precision='half') for more granular display
       - Include showLabel for important ratings (4.8/5)
       - Size 'sm' for compact cards, 'md' for standard display, 'lg' for emphasis

    3. COMMON USE CASES:
       - Testimonials: value={4.5-5}, readonly, size='sm'
       - Professional services: value={4.8}, showLabel, readonly
       - Interactive reviews: value={userRating}, readonly={false}
       - Service quality indicators: value={rating}, size='md', readonly

    4. PROFESSIONAL CONTEXTS:
       - Doctors: Patient satisfaction ratings
       - Lawyers: Client review scores
       - Consultants: Service quality ratings
       - Freelancers: Project ratings and reviews
       - Businesses: Overall customer satisfaction

    5. ACCESSIBILITY:
       - Always displays with proper ARIA labels
       - Keyboard navigable when interactive
       - Clear visual feedback on hover/focus

    6. TYPICAL VALUES:
       - Excellent: 4.5-5.0
       - Very Good: 4.0-4.4
       - Good: 3.5-3.9
       - Average: 3.0-3.4
       - Below Average: < 3.0

    Do NOT use:
    - For non-rating purposes (use icons instead)
    - Without proper context (always explain what is being rated)
    - With confusing scales (stick to 5-star standard)
  `,
};
