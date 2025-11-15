import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Text component
 * Used by AI to understand how to generate text/typography configurations
 */
export const TextSchema: ComponentSchema = {
  type: 'Text',
  description: 'Typography component for all text content',
  properties: {
    variant: {
      type: 'string',
      enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-lg', 'body', 'body-sm', 'caption', 'label', 'overline'],
      default: 'body',
      description: 'Typography variant',
    },
    children: {
      type: 'string',
      description: 'Text content',
    },
    align: {
      type: 'string',
      enum: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    weight: {
      type: 'string',
      enum: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    color: {
      type: 'string',
      enum: ['primary', 'secondary', 'disabled', 'brand', 'error', 'success', 'warning'],
      description: 'Text color',
    },
    gradient: {
      type: 'boolean',
      default: false,
      description: 'Apply gradient color effect',
    },
  },
  required: ['children'],
  examples: [
    {
      variant: 'h1',
      children: 'Transform Your Business',
      align: 'center',
    },
    {
      variant: 'h2',
      children: 'Why Choose Us',
    },
    {
      variant: 'body',
      children: 'We help professionals scale their business with proven strategies.',
      color: 'secondary',
    },
    {
      variant: 'overline',
      children: 'Featured',
      color: 'brand',
    },
  ],
  aiGuidelines: `
    Text/Typography Usage Guidelines for AI:

    Typography Hierarchy:
    1. H1: Main page heading (one per page)
       - Use for hero section headlines
       - Should capture main value proposition
       - Keep to 5-10 words max
       - Example: "Transform Your Business", "Legal Services You Can Trust"

    2. H2: Section headings
       - Use for major sections (Features, Testimonials, etc.)
       - Should describe section content
       - Keep to 3-7 words
       - Example: "Why Choose Us", "Our Services", "What Clients Say"

    3. H3: Sub-section headings
       - Use for feature titles, service names
       - Example: "Free Consultation", "24/7 Support"

    4. H4-H6: Minor headings
       - Less common in landing pages
       - Use for nested content, FAQs, blog posts

    Body Text:
    - body-lg: Lead paragraphs, important descriptions
    - body: Default paragraph text
    - body-sm: Secondary information, fine print

    Special Types:
    - caption: Image captions, footnotes, disclaimers
    - label: Form labels, UI labels
    - overline: Category labels, eyebrow text above headlines

    Content Writing Guidelines:

    Headlines (H1):
    - Focus on benefits, not features
    - Use action verbs or power words
    - Create emotional connection
    - Examples:
      - "Grow Your Practice with Confidence"
      - "Healthcare That Puts You First"
      - "Legal Solutions for Modern Business"

    Subheadings (H2):
    - Question format works well: "Why Choose Us?"
    - Clear and descriptive: "Our Process"
    - Benefit-focused: "What You'll Get"

    Body Text:
    - Clear and concise
    - Focus on benefits over features
    - Use short paragraphs (2-3 sentences)
    - Second person ("you") creates connection
    - Active voice is stronger

    Color Usage:
    - primary: Default text (most content)
    - secondary: Supporting text, less important info
    - brand: Highlight important keywords, emphasize brand
    - success: Positive statements, achievements
    - error: Warnings, important notices (use sparingly)

    Gradient:
    - Use for main headlines to create visual impact
    - Don't overuse - one gradient text per section max
    - Best for H1 or prominent H2 headings

    Alignment:
    - center: Hero sections, testimonials, CTAs
    - left: Body text, descriptions, most content
    - right: Special cases, design balance

    Common Patterns:

    Hero Section:
    - H1 (gradient or brand color, centered): Main value prop
    - body-lg (secondary color, centered): Supporting description
    - Button (CTA)

    Feature Section:
    - H2: Section title
    - body (secondary): Section description
    - H3 + body-sm: Individual features

    Testimonial:
    - body-lg: Quote text
    - caption: Author name/title

    CTA Section:
    - H2 (centered): Compelling action statement
    - body (secondary, centered): Supporting text
    - Button

    Footer:
    - caption: Copyright, links
    - body-sm: Descriptions, addresses
  `,
};
