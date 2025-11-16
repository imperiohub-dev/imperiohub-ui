import { ComponentSchema } from '../../types/schemas';

/**
 * JSON Schema for Logo component
 * Used by AI to understand how to generate logo configurations
 */
export const LogoSchema: ComponentSchema = {
  type: 'Logo',
  description: 'Brand logo component with support for different variants and sizes',
  properties: {
    src: {
      type: 'string',
      description: 'Logo image URL or inline SVG string',
    },
    alt: {
      type: 'string',
      description: 'Alternative text for accessibility',
    },
    variant: {
      type: 'string',
      enum: ['light', 'dark', 'color'],
      default: 'color',
      description: 'Logo variant for different backgrounds',
    },
    size: {
      oneOf: [
        {
          type: 'string',
          enum: ['sm', 'md', 'lg'],
        },
        {
          type: 'number',
        },
      ],
      default: 'md',
      description: 'Logo size (preset or custom pixel value)',
    },
    withText: {
      type: 'boolean',
      default: false,
      description: 'Include text alongside logo',
    },
    text: {
      type: 'string',
      description: 'Text to display with logo (brand name)',
    },
    href: {
      type: 'string',
      description: 'URL to link to (usually homepage)',
    },
  },
  required: ['src', 'alt'],
  examples: [
    {
      src: '/logo.svg',
      alt: 'Company Name',
      size: 'md',
      variant: 'color',
    },
    {
      src: '/logo-white.svg',
      alt: 'Company',
      size: 'lg',
      variant: 'light',
      withText: true,
      text: 'Company Name',
      href: '/',
    },
    {
      src: '<svg>...</svg>',
      alt: 'Brand',
      size: 48,
      variant: 'dark',
    },
  ],
  aiGuidelines: `
    Logo Component Usage Guidelines for AI:

    1. WHEN TO USE:
       - Header/Navigation bar
       - Footer branding
       - Loading screens
       - Email signatures (in content)
       - Social proof sections (client logos)
       - Partner/certification badges

    2. VARIANT SELECTION:
       - color: Default, full-color logo on neutral backgrounds
       - light: White/light logo on dark backgrounds
       - dark: Dark logo on light backgrounds
       - Choose based on section background color

    3. SIZE GUIDELINES:
       - sm (32px): Footer, mobile nav, compact displays
       - md (48px): Standard header, most common
       - lg (64px): Hero sections, emphasis
       - Custom number: Specific pixel height for precise control

    4. WITH TEXT:
       - withText + text: Shows logo + brand name
       - Use in header for brand recognition
       - Optional in footer
       - Improves SEO and accessibility

    5. HREF (CLICKABLE):
       - Almost always include href="/" in header
       - Makes logo link to homepage (standard UX)
       - Don't link in footer unless desired
       - Don't link in loading screens

    6. PROFESSIONAL CONTEXTS:

       HEADER/NAV:
       - size='md', variant based on header background
       - withText=true for brand recognition
       - href="/" to link to home
       - Example: Doctor's office, law firm, consultant

       FOOTER:
       - size='sm' or 'md'
       - variant based on footer background
       - Can include text or not
       - May or may not link

       CLIENT LOGOS (Social Proof):
       - size='sm' or 'md'
       - variant='color' usually
       - No text (just logo)
       - No href (not clickable)
       - Use multiple Logo components in a grid

       LOADING/SPLASH:
       - size='lg' or custom (80-120px)
       - variant='color'
       - withText=true for branding
       - No href

    7. SVG VS IMAGE:
       - Inline SVG: Best quality, themeable, smaller file
       - Image URL: Simpler, works with any format
       - SVG recommended for professional sites

    8. ACCESSIBILITY:
       - ALWAYS include meaningful alt text
       - Alt should be company/brand name
       - If logo is linked, alt describes destination
       - Examples:
         - Not linked: alt="Acme Corporation"
         - Linked: alt="Acme Corporation Home" or just "Home"

    9. RESPONSIVE DESIGN:
       - Use smaller sizes on mobile (sm/md)
       - Consider hiding text on very small screens
       - Ensure adequate contrast in all variants

    10. COMMON PATTERNS:

        Standard Header:
        <Logo
          src="/logo.svg"
          alt="Company Name Home"
          size="md"
          variant="color"
          withText
          text="Company Name"
          href="/"
        />

        Dark Background Header:
        <Logo
          src="/logo-white.svg"
          alt="Home"
          size="md"
          variant="light"
          href="/"
        />

        Footer:
        <Logo
          src="/logo.svg"
          alt="Company Name"
          size="sm"
          variant="dark"
        />

        Client Logos Grid:
        {clients.map(client => (
          <Logo
            key={client.id}
            src={client.logo}
            alt={client.name}
            size="sm"
            variant="color"
          />
        ))}

    Do NOT use:
    - Without alt text (accessibility violation)
    - With generic alt like "logo" (use brand name)
    - Multiple conflicting variants on same page
    - Extremely large sizes that dominate the page
    - In place of icons (use Icon component instead)
  `,
};
