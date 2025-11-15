import { ComponentSchema } from '../../types/schemas';

export const HeroSchema: ComponentSchema = {
  type: 'Hero',
  description: 'Main hero section for landing pages',
  properties: {
    title: { type: 'string', required: true, description: 'Main headline' },
    subtitle: { type: 'string', required: true, description: 'Supporting description' },
    primaryCta: {
      type: 'object',
      properties: {
        text: { type: 'string', required: true },
        href: { type: 'string' },
      },
    },
    secondaryCta: {
      type: 'object',
      properties: {
        text: { type: 'string', required: true },
        href: { type: 'string' },
      },
    },
    image: {
      type: 'object',
      properties: {
        src: { type: 'string', required: true },
        alt: { type: 'string', required: true },
      },
    },
    variant: { type: 'string', enum: ['centered', 'split'], default: 'split' },
    gradientTitle: { type: 'boolean', default: false },
  },
  required: ['title', 'subtitle'],
  examples: [
    {
      title: 'Transform Your Legal Practice',
      subtitle: 'Expert legal consultation with personalized solutions for your needs',
      primaryCta: { text: 'Schedule Consultation', href: '/contact' },
      secondaryCta: { text: 'View Services', href: '/services' },
      image: { src: '/hero-lawyer.jpg', alt: 'Professional legal consultation' },
      gradientTitle: true,
    },
  ],
  aiGuidelines: `
    Hero Section Guidelines for AI:

    Title (H1):
    - Focus on transformation/benefit, not just what you do
    - Use action words and emotional triggers
    - Keep it punchy: 5-10 words max
    - Examples:
      - Lawyers: "Legal Solutions That Protect Your Future"
      - Doctors: "Healthcare That Puts You First"
      - Consultants: "Grow Your Business with Confidence"

    Subtitle:
    - Expand on the title with specific value proposition
    - 10-20 words ideal
    - Address pain point or desired outcome
    - Use "you" language for connection

    Primary CTA:
    - Action-oriented: "Schedule", "Get Started", "Book Now"
    - Not generic: avoid just "Learn More" for primary
    - Should lead to conversion (contact, booking, signup)

    Secondary CTA:
    - Less committed action: "Learn More", "View Services", "See How It Works"
    - Informational or exploratory

    Image:
    - Professional, high-quality
    - Shows the professional or their work environment
    - Should build trust and credibility
    - Alt text must be descriptive for accessibility

    Variant Selection:
    - split: When you have a good hero image (default)
    - centered: When focusing purely on message, or no image

    Gradient Title:
    - Use for modern, tech-forward professionals
    - Skip for traditional professions (lawyers, doctors) unless brand allows
  `,
};
