# ImperioHub UI - Examples

Complete working examples of landing pages built with ImperioHub UI.

## Available Examples

### 1. Lawyer Landing Page
**File:** `data/lawyer-landing.ts`

Professional legal services landing page with:
- Legal-focused hero section
- 6 key benefits (expertise, availability, confidentiality, etc.)
- Client testimonials
- Service packages (consultation, representation, retainer)
- Contact form

**Use for:** Lawyers, legal firms, legal consultants

### 2. Doctor Landing Page
**File:** `data/doctor-landing.ts`

Medical practice landing page with:
- Healthcare-focused messaging
- Patient-centered benefits
- Patient testimonials
- Service packages (visits, wellness, concierge)
- Appointment booking

**Use for:** Doctors, medical practices, healthcare providers

## Quick Start

### Option 1: Use Complete Template

```tsx
import { LandingPageTemplate } from 'imperiohub-ui/examples';
import { lawyerLandingData } from 'imperiohub-ui/examples/data';

function App() {
  const handleContactSubmit = async (data) => {
    // Send to your API
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <LandingPageTemplate
      data={lawyerLandingData}
      onContactSubmit={handleContactSubmit}
    />
  );
}
```

### Option 2: Build Custom Layout

```tsx
import { Hero, Features, Contact } from 'imperiohub-ui';
import { lawyerLandingData } from 'imperiohub-ui/examples/data';

function App() {
  return (
    <>
      <Hero {...lawyerLandingData.hero} />
      <Features {...lawyerLandingData.features} />
      <Contact {...lawyerLandingData.contact} onSubmit={handleSubmit} />
    </>
  );
}
```

### Option 3: Use Your Own Data

```tsx
import { LandingPageTemplate } from 'imperiohub-ui/examples';

const myData = {
  hero: {
    title: 'Your Title',
    subtitle: 'Your subtitle',
    // ...
  },
  features: {
    // ...
  },
  // ...
};

function App() {
  return (
    <LandingPageTemplate
      data={myData}
      onContactSubmit={handleSubmit}
    />
  );
}
```

## Template Variants

### Full Landing Page
Includes all sections: Hero, Features, Testimonials, Pricing, CTA, Contact

```tsx
import { LandingPageTemplate } from 'imperiohub-ui/examples';
```

### Minimal Landing
Only Hero, CTA, and Contact

```tsx
import { MinimalLandingTemplate } from 'imperiohub-ui/examples';
```

### Service-Focused Landing
Hero, Features, Pricing, Contact

```tsx
import { ServiceLandingTemplate } from 'imperiohub-ui/examples';
```

## Customization

### Change Colors

```tsx
import { injectTheme } from 'imperiohub-ui';

injectTheme({
  colors: {
    primary: '#3b82f6',    // Your brand color
    secondary: '#10b981',  // Secondary color
    // ...
  },
});
```

### Change Content

Edit the data files or create your own:

```ts
export const myLandingData = {
  hero: {
    title: 'Your Custom Title',
    subtitle: 'Your custom subtitle',
    // ...
  },
  // ...
};
```

### Add/Remove Sections

```tsx
<main>
  <Hero {...data.hero} />
  <Features {...data.features} />
  {/* Skip testimonials */}
  <Pricing {...data.pricing} />
  {/* Add custom section */}
  <CustomSection />
  <Contact {...data.contact} onSubmit={handleSubmit} />
</main>
```

## Data Structure

Each landing page data file exports an object with these sections:

```ts
{
  hero: {
    title: string;
    subtitle: string;
    primaryCta: { text: string, href: string };
    secondaryCta?: { text: string, href: string };
    image: { src: string, alt: string };
    gradientTitle?: boolean;
  },
  features: {
    title: string;
    subtitle?: string;
    features: Array<{
      icon: LucideIcon;
      title: string;
      description: string;
    }>;
  },
  testimonials: {
    title: string;
    subtitle?: string;
    testimonials: Array<{
      quote: string;
      authorName: string;
      authorRole: string;
      authorAvatar?: string;
      rating: number;
    }>;
  },
  pricing: {
    title: string;
    subtitle?: string;
    plans: Array<{
      title: string;
      price: string | number;
      period?: string;
      description: string;
      features: string[];
      ctaText: string;
      featured?: boolean;
      badge?: string;
    }>;
  },
  cta: {
    title: string;
    description: string;
    primaryCta: { text: string, href: string };
    secondaryCta?: { text: string, href: string };
  },
  contact: {
    title: string;
    subtitle?: string;
  }
}
```

## Integration with Backend

### Contact Form Submission

```tsx
const handleContactSubmit = async (formData) => {
  // formData contains: { name, email, phone, message }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Show success message
      alert('Thank you! We\'ll be in touch soon.');
    }
  } catch (error) {
    // Show error message
    alert('Something went wrong. Please try again.');
  }
};
```

### Track Analytics

```tsx
const handleContactSubmit = async (formData) => {
  // Track conversion
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'Contact',
      event_label: 'Form Submission',
    });
  }

  // Submit form
  await submitToAPI(formData);
};
```

## Professional Use Cases

These templates are perfect for:

- 👨‍⚖️ **Law Firms** - Legal consultation, case representation
- 👨‍⚕️ **Medical Practices** - Doctor visits, healthcare services
- 💼 **Consultants** - Business consulting, coaching
- 🏗️ **Architects** - Design services, project planning
- 📊 **Accountants** - Tax services, financial planning
- 🎓 **Tutors** - Education services, course offerings
- 💪 **Personal Trainers** - Fitness coaching, programs
- 🏠 **Real Estate** - Property services, consultations

## Next Steps

1. Choose a template that fits your profession
2. Customize the data with your information
3. Adjust colors to match your brand
4. Add your logo and images
5. Connect to your backend API
6. Deploy!

For more details, see the [main documentation](../README.md).
