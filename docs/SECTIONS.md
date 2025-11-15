# Sections Documentation

Sections are large, complete components that combine atoms and molecules to create full landing page sections.

## Hero

Main landing section - the first thing visitors see.

```tsx
import { Hero } from 'imperiohub-ui';

<Hero
  title="Transform Your Legal Practice"
  subtitle="Expert legal consultation with personalized solutions for your unique needs"
  primaryCta={{
    text: 'Schedule Consultation',
    href: '/contact'
  }}
  secondaryCta={{
    text: 'View Services',
    href: '/services'
  }}
  image={{
    src: '/hero-lawyer.jpg',
    alt: 'Professional legal consultation'
  }}
  variant="split"
  gradientTitle
/>

<Hero
  title="Healthcare That Puts You First"
  subtitle="Compassionate medical care from experienced professionals"
  primaryCta={{ text: 'Book Appointment', href: '/booking' }}
  variant="centered"
/>
```

**Props:**
- `title`: string (required) - Main headline
- `subtitle`: string (required) - Supporting description
- `primaryCta`: { text: string, onClick?: function, href?: string }
- `secondaryCta`: { text: string, onClick?: function, href?: string }
- `image`: { src: string, alt: string }
- `variant`: `centered` | `split` - Default: 'split'
- `gradientTitle`: boolean - Apply gradient to title

**Variants:**
- **split**: Title on left, image on right (requires image)
- **centered**: All content centered, no image

**Best Practices:**
- Keep title under 10 words
- Focus on transformation/benefit
- Use action verbs in CTAs
- Primary CTA should be main conversion goal
- Use high-quality, professional images

---

## Features

Grid of features/benefits with icons.

```tsx
import { Features } from 'imperiohub-ui';
import { CheckCircle, Clock, Shield, Users, Award, HeadphonesIcon } from 'lucide-react';

<Features
  title="Why Choose Us"
  subtitle="Professional services designed for your success"
  features={[
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Years of professional experience in the field'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: '24/7 availability for urgent matters'
    },
    {
      icon: Shield,
      title: 'Confidential',
      description: 'Your privacy is our top priority'
    },
    {
      icon: Users,
      title: 'Personalized',
      description: 'Tailored solutions for your unique needs'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful outcomes'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support',
      description: 'Ongoing support throughout the process'
    }
  ]}
/>
```

**Props:**
- `title`: string (required)
- `subtitle`: string
- `features`: Feature[] (required)
  - `icon`: LucideIcon
  - `title`: string
  - `description`: string

**Layout:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Best Practices:**
- Use 3, 6, or 9 features for best grid layout
- Focus on benefits, not just features
- Keep descriptions concise (1-2 sentences)
- Choose icons that clearly represent the benefit

---

## Testimonials

Client testimonials and reviews section.

```tsx
import { Testimonials } from 'imperiohub-ui';

<Testimonials
  title="What Our Clients Say"
  subtitle="Don't just take our word for it"
  testimonials={[
    {
      quote: "Excellent service! They helped me navigate complex legal issues with ease and professionalism.",
      authorName: "John Doe",
      authorRole: "CEO, TechCorp",
      authorAvatar: "/avatars/john.jpg",
      rating: 5
    },
    {
      quote: "Highly recommend their consulting services. Results exceeded expectations.",
      authorName: "Jane Smith",
      authorRole: "Entrepreneur",
      rating: 5
    },
    {
      quote: "Professional, responsive, and knowledgeable. A pleasure to work with.",
      authorName: "Mike Johnson",
      authorRole: "Small Business Owner",
      authorAvatar: "/avatars/mike.jpg",
      rating: 5
    }
  ]}
/>
```

**Props:**
- `title`: string (required)
- `subtitle`: string
- `testimonials`: TestimonialCardProps[] (required)

**Layout:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Best Practices:**
- Use 3 or 6 testimonials
- Include specific results when possible
- Use real names and roles for credibility
- Keep quotes authentic and conversational
- Include ratings (4-5 stars typically)

---

## CTA (Call-to-Action)

Conversion-focused section with prominent CTAs.

```tsx
import { CTA } from 'imperiohub-ui';

<CTA
  title="Ready to Get Started?"
  description="Schedule your free consultation today and discover how we can help"
  primaryCta={{
    text: 'Book Consultation',
    href: '/contact'
  }}
  secondaryCta={{
    text: 'Learn More',
    href: '/about'
  }}
/>

<CTA
  title="Transform Your Practice Today"
  description="Join hundreds of satisfied clients"
  primaryCta={{
    text: 'Get Started Free',
    onClick: () => navigate('/signup')
  }}
/>
```

**Props:**
- `title`: string (required)
- `description`: string (required)
- `primaryCta`: { text: string, onClick?: function, href?: string } (required)
- `secondaryCta`: { text: string, onClick?: function, href?: string }

**Features:**
- Gradient background (primary → secondary color)
- White text
- Centered layout
- Prominent buttons

**Best Practices:**
- Create urgency ("Today", "Now", "Limited Time")
- Be specific about the action
- Focus on one main conversion goal
- Keep description benefit-focused
- Place strategically (mid-page, bottom of page)

---

## Pricing

Pricing plans section with feature comparison.

```tsx
import { Pricing } from 'imperiohub-ui';

<Pricing
  title="Choose Your Plan"
  subtitle="Flexible pricing for every need"
  plans={[
    {
      title: 'Basic',
      price: 49,
      period: '/consultation',
      description: 'Perfect for one-time needs',
      features: [
        'Initial consultation',
        'Email support',
        'Basic assessment',
      ],
      ctaText: 'Get Started'
    },
    {
      title: 'Professional',
      price: 99,
      period: '/month',
      description: 'For ongoing support',
      features: [
        'Everything in Basic',
        '3 consultations/month',
        'Priority support',
        'Custom solutions',
      ],
      ctaText: 'Most Popular',
      featured: true,
      badge: 'Best Value'
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'For organizations',
      features: [
        'Everything in Professional',
        'Unlimited consultations',
        'Dedicated account manager',
        '24/7 support',
        'Custom contracts',
      ],
      ctaText: 'Contact Us'
    }
  ]}
/>
```

**Props:**
- `title`: string (required)
- `subtitle`: string
- `plans`: PricingCardProps[] (required)

**Layout:**
- Mobile: 1 column (stacked)
- Tablet: 2 columns
- Desktop: 3 columns

**Best Practices:**
- Highlight the recommended plan with `featured`
- Use 2-3 plans typically
- Show clear value progression
- Include all important features
- Be transparent about pricing
- Use descriptive CTAs

---

## Contact

Contact form section for lead generation.

```tsx
import { Contact } from 'imperiohub-ui';

<Contact
  title="Get In Touch"
  subtitle="We'll respond within 24 hours"
  onSubmit={(data) => {
    // Handle form submission
    console.log(data);
    // data = { name, email, phone, message }
  }}
/>

<Contact
  title="Schedule a Consultation"
  subtitle="Fill out the form below and we'll be in touch soon"
  onSubmit={handleContactSubmit}
/>
```

**Props:**
- `title`: string (required)
- `subtitle`: string
- `onSubmit`: (data: Record<string, any>) => void (required)

**Form Fields:**
- Name (required)
- Email (required, validated)
- Phone (optional)
- Message (required, max 500 chars with counter)

**Features:**
- Built-in validation
- Character counter on message
- Full-width responsive design
- Submit button

**Best Practices:**
- Set clear response time expectations
- Keep form simple (essential fields only)
- Provide helper text when needed
- Show success/error feedback after submission
- Consider adding privacy statement

---

## Common Patterns

### Full Landing Page Structure

```tsx
function LandingPage() {
  return (
    <>
      <Hero
        title="Your Value Proposition"
        subtitle="Supporting description"
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        image={{ src: '/hero.jpg', alt: '...' }}
      />

      <Features
        title="Why Choose Us"
        features={featuresData}
      />

      <Testimonials
        title="What Clients Say"
        testimonials={testimonialsData}
      />

      <Pricing
        title="Our Services"
        plans={pricingData}
      />

      <CTA
        title="Ready to Start?"
        description="Book your consultation today"
        primaryCta={{ text: 'Contact Us', href: '/contact' }}
      />

      <Contact
        title="Get In Touch"
        onSubmit={handleSubmit}
      />
    </>
  );
}
```

### Service-Focused Page

```tsx
<Hero variant="split" {...serviceHeroData} />
<Features title="What You Get" features={serviceFeatures} />
<Pricing title="Packages" plans={servicePlans} />
<CTA title="Start Today" {...ctaData} />
```

### About Page

```tsx
<Hero variant="centered" title="About Us" subtitle="Our story" />
<Features title="Our Values" features={valuesData} />
<Testimonials title="Success Stories" testimonials={storiesData} />
<Contact title="Work With Us" onSubmit={handleSubmit} />
```

---

## Responsive Behavior

All sections are fully responsive:

- **Mobile** (< 768px): Single column, stacked layout
- **Tablet** (768px - 1024px): 2 columns where appropriate
- **Desktop** (> 1024px): Full grid layouts (3 columns)

Sections use a consistent container with:
- Max-width: 1280px
- Horizontal padding: Responsive (16px → 24px)
- Vertical padding: 4xl spacing (96px)

---

## Accessibility

All sections include:
- Semantic HTML5 elements (`<section>`, `<header>`, etc.)
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Color contrast compliance

---

## Performance Tips

- Lazy load images in Hero and Testimonials
- Use webp format for images
- Optimize icon bundle size (import only used icons)
- Memoize heavy sections with React.memo
- Use skeleton loaders for async data
