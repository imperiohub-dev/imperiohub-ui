import { ComponentSchema } from '../../types/schemas';

export const TemplateLoaderSchema: ComponentSchema = {
  type: 'TemplateLoader',
  description: 'Core builder that loads complete templates from JSON configuration',
  properties: {
    config: {
      type: 'object',
      description: 'Template configuration object',
      properties: {
        id: { type: 'string', description: 'Unique template identifier' },
        name: { type: 'string', description: 'Template name' },
        theme: { type: 'object', description: 'CSS custom properties for theming' },
        sections: {
          type: 'array',
          description: 'Array of section configurations',
          items: {
            type: 'object',
            properties: {
              type: { type: 'string', description: 'Section component type' },
              props: { type: 'object', description: 'Props to pass to the section' },
              id: { type: 'string', description: 'Optional section ID' },
            },
          },
        },
        metadata: {
          type: 'object',
          description: 'Page metadata',
          properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            keywords: { type: 'array', items: { type: 'string' } },
          },
        },
      },
    },
    components: {
      type: 'object',
      description: 'Registry of available section components',
    },
  },
  required: ['config'],
  examples: [
    {
      config: {
        id: 'lawyer-template-01',
        name: 'Corporate Lawyer Template',
        sections: [
          { type: 'HeroSection', props: { title: 'Expert Legal Services' } },
          { type: 'ServicesSection', props: { title: 'Our Services', services: [] } },
          { type: 'FAQSection', props: { title: 'FAQ', faqs: [] } },
        ],
      },
    },
  ],
  aiGuidelines: `
    TemplateLoader Usage Guidelines for AI:

    1. PURPOSE:
       - Core component for the template system
       - Loads complete landing pages from JSON configuration
       - Dynamically renders sections in specified order
       - Applies theming and metadata

    2. CONFIGURATION STRUCTURE:
       {
         id: "unique-template-id",
         name: "Template Name",
         theme: { "--color-primary": "#6366f1" },
         sections: [
           { type: "HeroSection", props: {...} },
           { type: "ServicesSection", props: {...} },
         ],
         metadata: {
           title: "Page Title",
           description: "SEO description"
         }
       }

    3. SECTION ORDER BEST PRACTICES:
       Professional Templates typically follow:
       1. HeroSection (with CTA)
       2. StatsSection (credibility)
       3. ServicesSection (offerings)
       4. ProcessSection (how it works)
       5. TeamSection (if applicable)
       6. TestimonialsSection (social proof)
       7. FAQSection (address concerns)
       8. CTASection (final conversion)
       9. FooterSection (contact info)

    4. THEMING:
       - Use theme object to customize colors
       - Apply brand colors as CSS custom properties
       - Example: { "--color-primary": "#1e40af", "--color-secondary": "#7c3aed" }

    5. ERROR HANDLING:
       - Gracefully handles missing components
       - Shows fallback UI for errors
       - Logs warnings for debugging

    6. COMPONENT REGISTRY:
       - Pass available section components via components prop
       - Components are matched by type string
       - Missing components show warning UI

    Use this component as the foundation for all template-based landing pages.
  `,
};
