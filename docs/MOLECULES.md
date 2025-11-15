# Molecules Documentation

Molecules are composed components that combine multiple atoms into reusable patterns.

## Form Molecules

### FormField

Complete form field wrapper that unifies Input, Textarea, and Select components.

```tsx
import { FormField } from 'imperiohub-ui';

<FormField
  type="input"
  fieldProps={{
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    required: true
  }}
/>

<FormField
  type="textarea"
  fieldProps={{
    label: 'Message',
    placeholder: 'Your message...',
    maxLength: 500,
    showCounter: true
  }}
/>

<FormField
  type="select"
  fieldProps={{
    label: 'Country',
    options: countryOptions,
    required: true
  }}
/>

<FormField
  type="input"
  inline
  fieldProps={{
    label: 'Subscribe',
    type: 'checkbox'
  }}
/>
```

**Props:**
- `type`: `input` | `textarea` | `select`
- `fieldProps`: InputProps | TextareaProps | SelectProps
- `inline`: boolean - Display label and field side by side
- `className`: string

**Use Cases:**
- Contact forms
- Registration forms
- Booking forms
- Newsletter signups

---

## Card Molecules

### Card

Basic content card with optional header and footer.

```tsx
import { Card } from 'imperiohub-ui';

<Card
  header={<h3>Card Title</h3>}
  footer={<button>Learn More</button>}
>
  Card content goes here...
</Card>

<Card clickable onClick={() => navigate('/service')}>
  Click me to navigate
</Card>

<Card
  header="Service Name"
  footer="From $99/mo"
>
  Professional service description
</Card>
```

**Props:**
- `header`: ReactNode
- `footer`: ReactNode
- `children`: ReactNode (required)
- `clickable`: boolean
- `className`: string
- All standard div attributes

**Use Cases:**
- Service cards
- Blog post cards
- Product cards
- Feature cards

---

### PricingCard

Pricing/service plan card with features list and CTA.

```tsx
import { PricingCard } from 'imperiohub-ui';

<PricingCard
  title="Professional"
  price={99}
  period="/mo"
  description="Perfect for growing businesses"
  features={[
    'Initial consultation',
    '3 follow-up sessions',
    'Email support',
    'Custom solutions',
  ]}
  ctaText="Get Started"
  onCtaClick={() => navigate('/checkout')}
  featured
  badge="Most Popular"
/>

<PricingCard
  title="Basic"
  price="Free"
  features={[
    '1 consultation',
    'Email support',
  ]}
  ctaText="Try Free"
/>
```

**Props:**
- `title`: string (required)
- `price`: string | number (required)
- `period`: string - Default: '/mo'
- `description`: string
- `features`: string[] (required)
- `ctaText`: string (required)
- `onCtaClick`: () => void
- `featured`: boolean - Highlights the card
- `badge`: string - Optional badge text
- `className`: string

**Features:**
- Checkmark icons for each feature
- Featured variant with border and shadow
- Responsive design
- Full-width CTA button

**Use Cases:**
- Pricing pages
- Service packages
- Subscription plans
- Membership tiers

---

### TestimonialCard

Client testimonial with quote, author info, and rating.

```tsx
import { TestimonialCard } from 'imperiohub-ui';

<TestimonialCard
  quote="Excellent service! They helped me navigate complex legal issues with ease."
  authorName="John Doe"
  authorRole="CEO, TechCorp"
  authorAvatar="/avatars/john.jpg"
  rating={5}
/>

<TestimonialCard
  quote="Highly recommend their consulting services."
  authorName="Jane Smith"
  authorRole="Entrepreneur"
  rating={5}
/>
```

**Props:**
- `quote`: string (required)
- `authorName`: string (required)
- `authorRole`: string
- `authorAvatar`: string - Image URL
- `rating`: number (1-5)
- `className`: string

**Features:**
- Star rating display
- Avatar with fallback to initials
- Italic quote styling
- Card-based design

**Use Cases:**
- Testimonials section
- Reviews page
- Social proof
- Case studies

---

## UI Molecules

### Alert

Notification/message component with variants.

```tsx
import { Alert } from 'imperiohub-ui';

<Alert variant="success">
  Your message was sent successfully!
</Alert>

<Alert variant="error">
  An error occurred. Please try again.
</Alert>

<Alert variant="warning">
  Your session will expire in 5 minutes.
</Alert>

<Alert variant="info">
  New features available! Check them out.
</Alert>
```

**Props:**
- `variant`: `success` | `error` | `warning` | `info` - Default: 'info'
- `children`: ReactNode (required)
- `className`: string

**Features:**
- Color-coded by variant
- Icon for each type
- Left border accent
- Subtle background color

**Use Cases:**
- Form submission feedback
- System notifications
- Warning messages
- Info banners

---

## Best Practices

### When to Use Molecules

Use molecules when:
- You need a complete, self-contained component
- The pattern repeats across your application
- You want consistent styling and behavior
- Combining multiple atoms makes sense

### Composition Tips

```tsx
// Good: Using molecules for complete patterns
<PricingCard {...planData} />

// Also good: Composing with atoms for custom needs
<Card>
  <Text variant="h3">{title}</Text>
  <Text variant="body">{description}</Text>
  <Button onClick={handleClick}>Action</Button>
</Card>

// Avoid: Over-nesting molecules
// Keep composition shallow and clear
```

### Accessibility

- All molecules maintain accessibility from their atoms
- FormField includes proper labels and ARIA attributes
- Cards support keyboard navigation when clickable
- Alerts have appropriate roles for screen readers

### Performance

- Molecules are optimized to prevent unnecessary re-renders
- Use React.memo for expensive molecules
- Pass stable callbacks to avoid re-renders

```tsx
// Good
const handleClick = useCallback(() => {
  /* ... */
}, []);

<PricingCard onCtaClick={handleClick} />

// Avoid
<PricingCard onCtaClick={() => {/* ... */}} />
```

### Styling

- Molecules accept className for custom styling
- Use CSS modules or styled-components
- Respect the design system
- Don't override internal molecule structure

```tsx
// Good: Adding margin/padding via className
<Card className="my-custom-spacing">
  {content}
</Card>

// Good: Using inline styles for one-off cases
<Alert style={{ marginBottom: '2rem' }}>
  {message}
</Alert>
```
