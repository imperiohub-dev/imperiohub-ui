import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for StatCard component
 */
export const StatCardSchema: ComponentSchema = {
  type: 'StatCard',
  description: 'Display statistics and key metrics in an engaging card format',
  properties: {
    value: {
      oneOf: [
        { type: 'string' },
        { type: 'number' },
      ],
      description: 'The statistical value to display',
    },
    label: {
      type: 'string',
      description: 'Description or label for the statistic',
    },
    suffix: {
      type: 'string',
      description: 'Suffix for the value (e.g., "+", "%", "M")',
    },
    prefix: {
      type: 'string',
      description: 'Prefix for the value (e.g., "$", "€")',
    },
    variant: {
      type: 'string',
      enum: ['default', 'highlighted', 'minimal'],
      default: 'default',
      description: 'Visual style variant',
    },
    animated: {
      type: 'boolean',
      default: false,
      description: 'Animate the counter on mount',
    },
  },
  required: ['value', 'label'],
  examples: [
    {
      value: 15,
      label: 'Years of Experience',
      suffix: '+',
      variant: 'highlighted',
    },
    {
      value: 98,
      label: 'Client Satisfaction',
      suffix: '%',
      trend: { value: 5, direction: 'up' },
    },
    {
      value: '500',
      label: 'Cases Won',
      suffix: '+',
      animated: true,
    },
  ],
  aiGuidelines: `
    StatCard Usage Guidelines for AI:

    1. WHEN TO USE:
       - Credibility metrics (years of experience, clients served)
       - Success metrics (cases won, success rate)
       - Volume metrics (projects completed, services provided)
       - Performance metrics (satisfaction rate, response time)
       - Financial metrics (revenue, savings generated)

    2. VALUE FORMATTING:
       - Numbers < 1000: Show exact (500)
       - Numbers >= 1000: Use K suffix (5K, 10K)
       - Numbers >= 1000000: Use M suffix (5M, 10M)
       - Percentages: Always include % suffix
       - Currency: Use $ or € prefix
       - Add "+" for "more than" implications (500+, 10+)

    3. PROFESSIONAL USE CASES:

       LAWYERS:
       - "15+ Years Experience"
       - "500+ Cases Won"
       - "98% Success Rate"
       - "$50M+ Recovered for Clients"

       DOCTORS/HEALTHCARE:
       - "10,000+ Patients Treated"
       - "20+ Years Practice"
       - "99% Patient Satisfaction"
       - "5 Locations"

       CONSULTANTS/AGENCIES:
       - "200+ Projects Delivered"
       - "50+ Clients Worldwide"
       - "95% Client Retention"
       - "10 Years in Business"

       FREELANCERS:
       - "100+ Projects Completed"
       - "50+ Happy Clients"
       - "5-Star Average Rating"
       - "2-Day Average Delivery"

    4. VARIANT SELECTION:
       - default: Standard display, most common
       - highlighted: Emphasize key metrics
       - minimal: Clean, modern, dense displays

    5. ANIMATION:
       - Use animated={true} for impact on first load
       - Best for hero sections and featured stats
       - Don't overuse (max 3-4 animated stats per page)

    6. ICON USAGE:
       - Include icons for visual interest
       - Match icon to statistic meaning
       - Trophy: Wins, awards, achievements
       - Users: Clients, team size
       - Star: Ratings, reviews
       - Calendar: Years, time-based metrics

    7. TREND INDICATORS:
       - Show growth/improvement when relevant
       - Use sparingly (only for changing metrics)
       - Up: Improvements, growth
       - Down: Reductions (can be positive, e.g., response time)

    8. GROUPING:
       - Display 3-4 stats per section (ideal)
       - Group related metrics together
       - Balance different types (time, volume, quality)

    Do NOT use:
    - For non-numerical information
    - With fake or inflated numbers
    - Without context (label is required)
    - Too many stats (overwhelming)
  `,
};
