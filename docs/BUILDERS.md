# Builder System

The Builder system enables **JSON-driven page construction**, allowing you to build complete landing pages from configuration objects. This is perfect for AI-powered content generation, CMS integration, or dynamic page building.

## Overview

The Builder system consists of three main components:

1. **SectionBuilder** - Renders individual sections from config
2. **PageBuilder** - Renders complete pages with multiple sections
3. **LandingPageBuilder** - Renders full landing pages with navigation and footer

## Quick Start

```tsx
import { LandingPageBuilder, LandingPageBuilderConfig } from 'imperiohub-ui';

const config: LandingPageBuilderConfig = {
  meta: {
    title: 'My Landing Page',
    description: 'A great landing page',
  },
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    },
  },
  sections: [
    {
      type: 'hero',
      data: {
        title: 'Welcome to Our Service',
        subtitle: 'Build amazing things',
        primaryCta: { text: 'Get Started', href: '/signup' },
      },
    },
    {
      type: 'features',
      data: {
        title: 'Amazing Features',
        features: [
          {
            icon: 'Zap',
            title: 'Fast',
            description: 'Lightning fast performance',
          },
        ],
      },
    },
  ],
};

function App() {
  return <LandingPageBuilder config={config} />;
}
```

## Components

### SectionBuilder

Renders a single section from configuration.

```tsx
import { SectionBuilder, SectionConfig } from 'imperiohub-ui';

const heroConfig: SectionConfig = {
  type: 'hero',
  data: {
    title: 'Welcome',
    subtitle: 'Build fast',
    primaryCta: { text: 'Start', href: '/start' },
  },
};

<SectionBuilder config={heroConfig} />
```

**Props:**
- `config` - Section configuration object
- `context?` - Builder context with handlers and icon resolver

### PageBuilder

Renders complete pages with multiple sections.

```tsx
import { PageBuilder, PageConfig } from 'imperiohub-ui';

const pageConfig: PageConfig = {
  meta: { title: 'My Page' },
  theme: { colors: { primary: '#3b82f6' } },
  sections: [
    { type: 'hero', data: { ... } },
    { type: 'features', data: { ... } },
  ],
  handlers: {
    handleSubmit: (data) => console.log(data),
  },
};

<PageBuilder config={pageConfig} />
```

**Props:**
- `config` - Page configuration object
- `onValidationError?` - Callback for validation errors
- `strictValidation?` - Whether to block rendering on validation errors

### LandingPageBuilder

Renders full landing pages with navigation and footer.

```tsx
import { LandingPageBuilder, LandingPageBuilderConfig } from 'imperiohub-ui';

const landingConfig: LandingPageBuilderConfig = {
  variant: 'full',
  navigation: {
    logo: '/logo.svg',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
    ],
  },
  sections: [ ... ],
  footer: {
    copyright: '© 2024 Company',
    links: [{ label: 'Privacy', href: '/privacy' }],
    social: [{ platform: 'linkedin', url: 'https://...' }],
  },
};

<LandingPageBuilder config={landingConfig} />
```

**Props:**
- Same as PageBuilder, plus navigation and footer from config

**Variants:**
- `full` - Full navigation and footer (default)
- `minimal` - Simpler, minimal navigation and footer
- `service-focused` - Gradient navigation and footer

## Configuration Types

### Section Types

All available section types:

```typescript
type SectionType =
  | 'hero'
  | 'features'
  | 'testimonials'
  | 'cta'
  | 'pricing'
  | 'contact';
```

### Hero Section

```typescript
{
  type: 'hero',
  data: {
    title: string;
    subtitle: string;
    primaryCta?: {
      text: string;
      href?: string;
      onClick?: string; // Handler name
    };
    secondaryCta?: { ... };
    image?: {
      src: string;
      alt: string;
    };
    variant?: 'centered' | 'split';
    gradientTitle?: boolean;
  }
}
```

### Features Section

```typescript
{
  type: 'features',
  data: {
    title: string;
    subtitle?: string;
    features: Array<{
      icon: string; // Lucide icon name (e.g., 'Zap', 'Heart')
      title: string;
      description: string;
    }>;
  }
}
```

### Testimonials Section

```typescript
{
  type: 'testimonials',
  data: {
    title: string;
    subtitle?: string;
    testimonials: Array<{
      quote: string;
      authorName: string;
      authorRole?: string;
      authorAvatar?: string;
      rating?: number;
    }>;
  }
}
```

### CTA Section

```typescript
{
  type: 'cta',
  data: {
    title: string;
    description: string;
    primaryCta: {
      text: string;
      href?: string;
      onClick?: string;
    };
    secondaryCta?: { ... };
  }
}
```

### Pricing Section

```typescript
{
  type: 'pricing',
  data: {
    title: string;
    subtitle?: string;
    plans: Array<{
      title: string;
      price: string | number;
      period?: string;
      description?: string;
      features: string[];
      ctaText: string;
      onCtaClick?: string; // Handler name
      featured?: boolean;
      badge?: string;
    }>;
  }
}
```

### Contact Section

```typescript
{
  type: 'contact',
  data: {
    title: string;
    subtitle?: string;
    onSubmit: string; // Handler name (required)
  }
}
```

## Event Handlers

Handlers are defined as strings in the config and mapped to actual functions:

```tsx
const config = {
  sections: [
    {
      type: 'contact',
      data: {
        title: 'Contact Us',
        onSubmit: 'handleContactSubmit', // String reference
      },
    },
  ],
  handlers: {
    handleContactSubmit: async (data) => {
      console.log('Form submitted:', data);
      // Send to API, show success message, etc.
    },
  },
};
```

## Icon Resolution

Icons are specified as strings (Lucide icon names) and automatically resolved:

```tsx
{
  type: 'features',
  data: {
    features: [
      {
        icon: 'Zap', // String
        title: 'Fast',
        description: 'Lightning fast performance',
      },
      {
        icon: 'Heart', // String
        title: 'Friendly',
        description: 'User-friendly interface',
      },
    ],
  }
}
```

**Available icons:**
- See [Lucide React](https://lucide.dev/icons) for all available icons
- Use PascalCase names: `'CheckCircle'`, `'ArrowRight'`, `'Users'`

**Utilities:**
```tsx
import { resolveIcon, getAvailableIcons, isValidIcon } from 'imperiohub-ui';

// Resolve icon name to component
const CheckIcon = resolveIcon('CheckCircle');
if (CheckIcon) {
  <CheckIcon size={24} />
}

// Get all available icons
const icons = getAvailableIcons();

// Validate icon name
if (isValidIcon('Zap')) {
  // Icon exists
}
```

## Theme Customization

Override theme colors per page:

```tsx
const config = {
  theme: {
    colors: {
      primary: '#3b82f6',    // Blue
      secondary: '#8b5cf6',  // Purple
      accent: '#f59e0b',     // Amber
    },
  },
  sections: [ ... ],
};
```

These colors will be applied as CSS custom properties to the page.

## Validation

The Builder system includes built-in validation:

```tsx
import { validatePageConfig, validateSectionConfig } from 'imperiohub-ui';

const config = { ... };
const result = validatePageConfig(config);

if (!result.valid) {
  result.errors.forEach(error => {
    console.error(`${error.path}: ${error.message}`);
  });
}
```

**Validation features:**
- Checks required fields
- Validates section types
- Ensures required handlers exist
- Provides detailed error messages with paths

**Get required handlers:**
```tsx
import { getRequiredHandlers } from 'imperiohub-ui';

const handlers = getRequiredHandlers(config);
// Returns: ['handleContactSubmit', 'handleBooking', ...]
```

## Complete Example

```tsx
import React from 'react';
import { LandingPageBuilder, LandingPageBuilderConfig } from 'imperiohub-ui';

const lawyerLanding: LandingPageBuilderConfig = {
  id: 'lawyer-landing',
  variant: 'full',

  meta: {
    title: 'Legal Solutions | Expert Legal Counsel',
    description: 'Professional legal services',
    keywords: ['lawyer', 'legal services'],
  },

  theme: {
    colors: {
      primary: '#1e40af',
      secondary: '#7c3aed',
    },
  },

  navigation: {
    logo: '/logo.svg',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  sections: [
    {
      type: 'hero',
      data: {
        title: 'Legal Solutions That Protect Your Future',
        subtitle: 'Expert legal counsel with personalized strategies',
        primaryCta: {
          text: 'Schedule Free Consultation',
          onClick: 'handleBookConsultation',
        },
        gradientTitle: true,
      },
    },
    {
      id: 'services',
      type: 'features',
      data: {
        title: 'Comprehensive Legal Services',
        features: [
          {
            icon: 'Scale',
            title: 'Business Law',
            description: 'Contract drafting and negotiations',
          },
          {
            icon: 'Users',
            title: 'Family Law',
            description: 'Compassionate family matter guidance',
          },
        ],
      },
    },
    {
      id: 'contact',
      type: 'contact',
      data: {
        title: 'Contact Our Firm',
        onSubmit: 'handleContactSubmit',
      },
    },
  ],

  handlers: {
    handleBookConsultation: () => {
      console.log('Opening consultation booking...');
    },
    handleContactSubmit: async (data) => {
      console.log('Contact submitted:', data);
      alert(`Thank you ${data.name}!`);
    },
  },

  footer: {
    copyright: '© 2024 Legal Solutions Firm',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
    social: [
      { platform: 'linkedin', url: 'https://linkedin.com/...' },
      { platform: 'twitter', url: 'https://twitter.com/...' },
    ],
  },
};

export function App() {
  const handleValidationError = (errors) => {
    console.error('Validation errors:', errors);
  };

  return (
    <LandingPageBuilder
      config={lawyerLanding}
      onValidationError={handleValidationError}
      strictValidation={false}
    />
  );
}
```

## Use Cases

### 1. AI-Powered Page Generation

Generate page configs from AI prompts:

```typescript
// AI generates this JSON
const aiGeneratedConfig = {
  sections: [
    { type: 'hero', data: { ... } },
    { type: 'features', data: { ... } },
  ],
};

<PageBuilder config={aiGeneratedConfig} />
```

### 2. CMS Integration

Store page configs in your CMS:

```typescript
// Fetch from CMS
const config = await fetch('/api/pages/home').then(r => r.json());

<LandingPageBuilder config={config} />
```

### 3. Dynamic Landing Pages

Build pages on the fly:

```typescript
function DynamicLanding({ industry }: { industry: string }) {
  const config = buildConfigForIndustry(industry);
  return <LandingPageBuilder config={config} />;
}
```

## Best Practices

1. **Validate configs** before rendering in production
2. **Use strictValidation** during development to catch errors early
3. **Define all handlers** referenced in config
4. **Use valid Lucide icon names** for features
5. **Test theme colors** for accessibility (contrast ratios)
6. **Provide meaningful error handling** in validation callbacks

## TypeScript Support

All Builder components are fully typed:

```typescript
import type {
  SectionConfig,
  PageConfig,
  LandingPageBuilderConfig,
  HeroSectionConfig,
  FeaturesSectionConfig,
  ValidationResult,
  ValidationError,
} from 'imperiohub-ui';
```

## Next Steps

- See [examples/BuilderExample.tsx](../examples/BuilderExample.tsx) for complete working examples
- Explore the [type definitions](../src/types/builder.ts) for all available options
- Check out [validation utilities](../src/builders/utils/validation.ts) for custom validation
