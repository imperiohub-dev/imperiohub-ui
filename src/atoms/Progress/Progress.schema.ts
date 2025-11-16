import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Progress component
 * Used by AI to understand how to generate progress configurations
 */
export const ProgressSchema: ComponentSchema = {
  type: 'Progress',
  description: 'Visual indicator for progress, completion, or skill levels',
  properties: {
    value: {
      type: 'number',
      default: 0,
      minimum: 0,
      maximum: 100,
      description: 'Progress value as percentage (0-100)',
    },
    variant: {
      type: 'string',
      enum: ['linear', 'circular'],
      default: 'linear',
      description: 'Visual style of progress indicator',
    },
    size: {
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the progress indicator',
    },
    showLabel: {
      type: 'boolean',
      default: false,
      description: 'Show percentage label',
    },
    label: {
      type: 'string',
      description: 'Custom label text (overrides percentage)',
    },
    indeterminate: {
      type: 'boolean',
      default: false,
      description: 'Show indeterminate/loading animation',
    },
    color: {
      type: 'string',
      description: 'Custom color (CSS custom property)',
    },
  },
  required: [],
  examples: [
    {
      value: 75,
      variant: 'linear',
      showLabel: true,
    },
    {
      value: 90,
      variant: 'circular',
      size: 'lg',
    },
    {
      value: 85,
      label: 'React',
      variant: 'linear',
    },
    {
      indeterminate: true,
      variant: 'linear',
    },
  ],
  aiGuidelines: `
    Progress Component Usage Guidelines for AI:

    1. WHEN TO USE:
       - Skill levels and proficiency indicators
       - Project completion status
       - Course or training progress
       - Service delivery stages
       - Loading states for async operations
       - Goal achievement visualization
       - Certification progress

    2. VARIANT SELECTION:
       - linear: Skills, completion bars, general progress
       - circular: Compact displays, dashboards, KPIs

    3. SIZE GUIDELINES:
       - sm: Compact lists, dense information displays
       - md: Standard usage, most common
       - lg: Emphasis, featured metrics, hero sections

    4. PROFESSIONAL USE CASES:

       SKILLS & EXPERTISE:
       - "React: 90%" - Technical skills
       - "Spanish: 75%" - Language proficiency
       - "Project Management: 85%" - Soft skills
       - Use linear variant with labels

       PROJECT/SERVICE STATUS:
       - "Project Completion: 60%"
       - "Service Delivery: 40%"
       - "Course Progress: 75%"
       - Use linear with percentage

       CREDENTIALS & CERTIFICATIONS:
       - "Certification Progress: 80%"
       - "Requirements Met: 90%"
       - Use circular for compact display

       PERFORMANCE METRICS:
       - "Client Satisfaction: 95%"
       - "Quality Score: 88%"
       - Use circular for dashboards

    5. LABEL BEST PRACTICES:
       - Show percentage for completion/progress
       - Show skill name for expertise indicators
       - Keep labels concise (1-3 words)
       - Use showLabel for emphasis

    6. COLOR USAGE:
       - Default (primary): Standard progress
       - Success (green): Completed, high scores (>80%)
       - Warning (yellow): Moderate scores (50-79%)
       - Error (red): Low scores (<50%), issues
       - Use color to communicate status/quality

    7. LOADING STATES:
       - Use indeterminate for unknown duration
       - Use with value for known progress
       - Combine with label for context

    8. ACCESSIBILITY:
       - Proper ARIA roles and values
       - Don't rely on color alone
       - Include text labels when possible
       - Sufficient contrast ratios

    9. TYPICAL VALUE RANGES:
       - Expert: 90-100%
       - Advanced: 75-89%
       - Intermediate: 50-74%
       - Beginner: 25-49%
       - Novice: 0-24%

    Do NOT use:
    - For binary states (use toggle/checkbox)
    - For step indicators (use stepper component)
    - For ratings (use Rating component)
    - Without context (always provide labels or surrounding text)
  `,
};
