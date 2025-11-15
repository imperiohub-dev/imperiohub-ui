# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-01-15

### Added

#### Builder System (JSON-Driven Page Building)
- **SectionBuilder** - Dynamically renders individual sections from configuration
- **PageBuilder** - Renders complete multi-section pages with theme customization
- **LandingPageBuilder** - Full landing pages with navigation and footer support
- Icon resolution system for converting string icon names to Lucide React components
- Comprehensive validation utilities with detailed error reporting
- Handler mapping system for event callbacks
- Three landing page variants: `full`, `minimal`, and `service-focused`

#### Components (28 Total)
- **14 Atoms**: Button, Input, Textarea, Checkbox, Radio, Select, Icon, Text, Image, Link, Badge, Spinner, Avatar, Divider
- **5 Molecules**: FormField, Card, PricingCard, TestimonialCard, Alert
- **6 Sections**: Hero, Features, Testimonials, CTA, Pricing, Contact
- **3 Builders**: SectionBuilder, PageBuilder, LandingPageBuilder

#### Documentation
- Complete [Builders documentation](./docs/BUILDERS.md)
- [Atoms documentation](./docs/ATOMS.md)
- [Molecules documentation](./docs/MOLECULES.md)
- [Sections documentation](./docs/SECTIONS.md)
- [Styling guide](./docs/STYLING.md)
- Working examples for Lawyer and Doctor landing pages

#### Features
- Mobile-first responsive design with consistent breakpoints
- SCSS with CSS Modules for scoped styling
- CSS Custom Properties for runtime theming
- TypeScript support with complete type definitions
- AI-ready with JSON schemas for each component
- Lucide React icon system (50+ icons)
- Built-in form validation with extensibility
- Accessibility support across all components

### Changed
- Updated package.json to version 0.2.0
- Enhanced build configuration for optimized npm distribution
- Improved vite.config.ts with better external dependency handling
- Updated exports in package.json for better tree-shaking

### Technical Details
- **Tech Stack**: React 18+, TypeScript 5+, SCSS, Lucide React
- **Build System**: Vite with optimized rollup configuration
- **Module Formats**: ESM and CJS
- **CSS Bundling**: Single bundled CSS file
- **Type Definitions**: Complete TypeScript declarations

## [0.1.5] - 2024-XX-XX

### Initial Release
- Basic component library structure
- Core atoms and molecules
- Initial section components
- SCSS styling system

---

## Upgrade Guide

### From 0.1.x to 0.2.0

**New Features Available:**

1. **JSON-Driven Page Building**
   ```tsx
   import { LandingPageBuilder } from '@imperiohub/ui';

   const config = {
     sections: [
       { type: 'hero', data: { title: 'Welcome' } },
       { type: 'features', data: { features: [...] } },
     ],
   };

   <LandingPageBuilder config={config} />
   ```

2. **Icon Resolution**
   ```tsx
   // Icons as strings in config
   features: [
     { icon: 'Zap', title: 'Fast', description: '...' }
   ]
   ```

3. **Validation Utilities**
   ```tsx
   import { validatePageConfig } from '@imperiohub/ui';

   const result = validatePageConfig(config);
   if (!result.valid) {
     console.error(result.errors);
   }
   ```

**Breaking Changes:**
- None. This release is fully backward compatible.

**Deprecations:**
- None

---

## Future Roadmap

### [0.3.0] - Planned
- Complete page templates (AutonomoPro)
- Additional section variants
- Theme system with pre-built themes
- Dark mode support

### [0.4.0] - Planned
- Testing suite
- Storybook documentation
- Performance optimizations
- Additional atoms and molecules

### [0.5.0] - Planned
- AI content generation integration
- CMS integration utilities
- Advanced form components
- Analytics integration

---

For more information, visit [GitHub Repository](https://github.com/imperiohub-dev/imperiohub-ui)
