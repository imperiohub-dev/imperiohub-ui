# ImperioHub UI

> A professional React component library for building landing pages rapidly with AI-powered content generation.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org/)

## 🎯 Vision

ImperioHub UI is designed specifically for **autonomous professionals** (lawyers, doctors, consultants, etc.) who need professional websites quickly. The library enables:

- ✅ Rapid landing page creation
- 🤖 AI-powered content generation
- 📱 Mobile-first responsive design
- 🎨 Professional, customizable themes
- ♿ Full accessibility support

## 📦 What's Included

### **28 Professional Components**

- **14 Atoms** - Basic building blocks (Button, Input, Icon, etc.)
- **5 Molecules** - Composed components (Card, PricingCard, etc.)
- **6 Sections** - Complete landing page sections (Hero, Features, etc.)
- **3 Builders** - JSON-driven page builders (SectionBuilder, PageBuilder, LandingPageBuilder)

## 🚀 Quick Start

```bash
npm install imperiohub-ui lucide-react
```

```tsx
import { Hero, Features, CTA } from 'imperiohub-ui';
import 'imperiohub-ui/dist/styles.css';

function App() {
  return (
    <>
      <Hero
        title="Transform Your Legal Practice"
        subtitle="Expert consultation with proven results"
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        image={{ src: '/hero.jpg', alt: 'Professional consultation' }}
      />

      <Features
        title="Why Choose Us"
        features={[
          { icon: CheckCircle, title: 'Expert Guidance', description: '...' },
          { icon: Clock, title: 'Fast Response', description: '...' },
        ]}
      />

      <CTA
        title="Ready to Get Started?"
        description="Schedule your free consultation today"
        primaryCta={{ text: 'Book Now', href: '/contact' }}
      />
    </>
  );
}
```

### JSON-Driven Builder (AI-Ready)

Build complete landing pages from JSON configuration:

```tsx
import { LandingPageBuilder } from 'imperiohub-ui';

const config = {
  meta: { title: 'My Landing Page' },
  theme: { colors: { primary: '#3b82f6' } },
  navigation: {
    logo: '/logo.svg',
    links: [{ label: 'Services', href: '#services' }],
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
          { icon: 'Zap', title: 'Fast', description: 'Lightning fast' },
          { icon: 'Heart', title: 'Easy', description: 'Simple to use' },
        ],
      },
    },
  ],
  handlers: {
    handleSubmit: (data) => console.log(data),
  },
};

function App() {
  return <LandingPageBuilder config={config} />;
}
```

## 📚 Documentation

- [**Atoms**](./docs/ATOMS.md) - Basic UI components
- [**Molecules**](./docs/MOLECULES.md) - Composed components
- [**Sections**](./docs/SECTIONS.md) - Landing page sections
- [**Builders**](./docs/BUILDERS.md) - JSON-driven page building ✨ NEW
- [**Styling Guide**](./docs/STYLING.md) - Theming and customization
- [**AI Integration**](./docs/AI_INTEGRATION.md) - Using with AI

## 🎨 Key Features

### **1. Component-Based Architecture**

Three levels of abstraction for maximum flexibility:

```
Atoms → Molecules → Sections
```

### **2. Two Usage Approaches**

**Traditional React:**
```tsx
<Button variant="primary" size="lg">Get Started</Button>
```

**Config-Driven (JSON/AI):**
```tsx
<LandingPageBuilder config={aiGeneratedConfig} />
```

### **3. Responsive Design**

Mobile-first approach with consistent breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### **4. Theming System**

Easy customization via CSS custom properties:

```tsx
import { injectTheme } from 'imperiohub-ui';

injectTheme({
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    // ...
  },
  typography: {
    fontFamily: {
      heading: 'Inter',
      body: 'Inter',
    },
  },
});
```

### **5. AI-Ready**

Every component includes:
- TypeScript schemas
- JSON schemas for validation
- AI generation guidelines
- Usage examples

## 📖 Component Overview

### Atoms (14)

| Component | Description | Variants |
|-----------|-------------|----------|
| **Button** | Interactive buttons | 6 variants, 3 sizes, loading state |
| **Input** | Text input fields | With icons, validation, helper text |
| **Textarea** | Multi-line text | Auto-resize, character counter |
| **Checkbox** | Selection boxes | Indeterminate state support |
| **Radio** | Single selection | Grouped options |
| **Select** | Dropdown menus | With icons, placeholder |
| **Icon** | SVG icons (Lucide) | 50+ icons, 6 sizes, animations |
| **Text** | Typography | 12 variants (h1-h6, body, etc.) |
| **Image** | Responsive images | Object-fit, rounded corners |
| **Link** | Hyperlinks | Underline variants |
| **Badge** | Labels/tags | 7 color variants |
| **Spinner** | Loading indicators | 4 sizes |
| **Avatar** | User avatars | Image or initials, 5 sizes |
| **Divider** | Visual separators | Horizontal/vertical |

### Molecules (5)

| Component | Description | Use Case |
|-----------|-------------|----------|
| **FormField** | Complete form field | Unified Input/Textarea/Select wrapper |
| **Card** | Content cards | Services, blog posts, features |
| **PricingCard** | Pricing plans | Service packages, subscriptions |
| **TestimonialCard** | Client testimonials | Social proof, reviews |
| **Alert** | Notifications | Success, error, warning, info |

### Sections (6)

| Component | Description | Use Case |
|-----------|-------------|----------|
| **Hero** | Main landing section | First impression, value prop |
| **Features** | Benefits grid | Why choose us, features list |
| **Testimonials** | Client reviews | Social proof section |
| **CTA** | Call-to-action | Conversion section |
| **Pricing** | Pricing plans | Service packages |
| **Contact** | Contact form | Lead generation |

### Builders (3)

| Component | Description | Use Case |
|-----------|-------------|----------|
| **SectionBuilder** | Renders single sections from config | Dynamic section rendering |
| **PageBuilder** | Renders complete pages | Multi-section pages |
| **LandingPageBuilder** | Full landing pages with nav/footer | Complete landing experiences |

## 🛠️ Technology Stack

- **React** 18+ - UI framework
- **TypeScript** 5+ - Type safety
- **SCSS** - Styling with CSS Modules
- **Lucide React** - Icon system
- **CSS Custom Properties** - Runtime theming

## 🎯 Use Cases

### AutonomoPro Template

Perfect for autonomous professionals:

- 👨‍⚖️ **Lawyers** - Legal services, consultation booking
- 👨‍⚕️ **Doctors** - Medical practice, appointments
- 💼 **Consultants** - Business consulting, services
- 🏗️ **Architects** - Portfolio, project showcase
- 📊 **Accountants** - Tax services, financial consulting

## 🚧 Roadmap

- [x] Phase 1: Atoms (14 components)
- [x] Phase 2: Molecules (5 components)
- [x] Phase 3: Sections (6 components)
- [x] Phase 4: Builders (3 JSON-driven components) ✨ NEW
- [ ] Phase 5: Templates (Complete page templates)
- [ ] Phase 6: Publishing & Documentation
- [ ] Phase 6: AI Integration (Content generation)
- [ ] Phase 7: Dashboard template
- [ ] Phase 8: E-commerce features

## 📄 License

MIT © [ImperioHub]

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 💬 Support

- 📧 Email: support@imperiohub.com
- 📖 Documentation: [docs.imperiohub.com](https://docs.imperiohub.com)
- 🐛 Issues: [GitHub Issues](https://github.com/imperiohub/imperiohub-ui/issues)

---

**Built with ❤️ for autonomous professionals**
