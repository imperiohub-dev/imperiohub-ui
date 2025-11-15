# Atoms Documentation

Atoms are the basic building blocks of the UI. They are the smallest, most fundamental components.

## Form Components

### Button

Interactive button with multiple variants and states.

```tsx
import { Button } from 'imperiohub-ui';

<Button variant="primary" size="lg">
  Get Started
</Button>

<Button variant="outline" loading>
  Loading...
</Button>

<Button variant="ghost" iconBefore={<PlusIcon />}>
  Add Item
</Button>
```

**Props:**
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `danger` | `success`
- `size`: `sm` | `md` | `lg`
- `loading`: boolean
- `fullWidth`: boolean
- `iconOnly`: boolean
- `iconBefore`, `iconAfter`: ReactNode

---

### Input

Text input field with label, validation, and icons.

```tsx
import { Input } from 'imperiohub-ui';
import { Search } from 'lucide-react';

<Input
  label="Email Address"
  type="email"
  placeholder="john@example.com"
  required
  helperText="We'll never share your email"
/>

<Input
  label="Search"
  iconBefore={<Search />}
  placeholder="Search..."
/>

<Input
  label="Username"
  error
  errorMessage="Username is already taken"
/>
```

**Props:**
- `label`: string
- `type`: `text` | `email` | `password` | `tel` | `url` | `number` | `search`
- `size`: `sm` | `md` | `lg`
- `error`, `success`: boolean
- `errorMessage`, `helperText`: string
- `iconBefore`, `iconAfter`: ReactNode
- `required`: boolean

---

### Textarea

Multi-line text input with auto-resize and character counter.

```tsx
import { Textarea } from 'imperiohub-ui';

<Textarea
  label="Message"
  placeholder="Tell us more..."
  required
  maxLength={500}
  showCounter
/>

<Textarea
  label="Description"
  autoResize
  rows={3}
/>
```

**Props:**
- `label`: string
- `size`: `sm` | `md` | `lg`
- `maxLength`: number
- `showCounter`: boolean
- `autoResize`: boolean
- `noResize`: boolean
- `rows`: number

---

### Checkbox

Checkbox with label and description.

```tsx
import { Checkbox } from 'imperiohub-ui';

<Checkbox
  label="I agree to the terms and conditions"
  required
/>

<Checkbox
  label="Subscribe to newsletter"
  description="Get weekly updates and exclusive offers"
  defaultChecked
/>

<Checkbox
  label="Select all"
  indeterminate={someSelected && !allSelected}
  checked={allSelected}
/>
```

**Props:**
- `label`: string
- `description`: string
- `size`: `sm` | `md` | `lg`
- `error`: boolean
- `errorMessage`: string
- `indeterminate`: boolean

---

### Radio

Radio button for single selection.

```tsx
import { Radio } from 'imperiohub-ui';

<Radio
  name="plan"
  value="basic"
  label="Basic Plan"
  description="$9/month - Perfect for individuals"
/>

<Radio
  name="plan"
  value="pro"
  label="Pro Plan"
  description="$29/month - Best for teams"
  defaultChecked
/>
```

**Props:**
- `name`: string (required)
- `value`: string (required)
- `label`: string
- `description`: string
- `size`: `sm` | `md` | `lg`

---

### Select

Dropdown select with options.

```tsx
import { Select } from 'imperiohub-ui';

<Select
  label="Country"
  placeholder="Select your country"
  options={[
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'Mexico', value: 'mx' },
  ]}
  required
/>

<Select
  label="Service Type"
  options={serviceOptions}
  icon={<BriefcaseIcon />}
/>
```

**Props:**
- `label`: string
- `options`: `Array<{ label: string, value: string | number, disabled?: boolean }>`
- `placeholder`: string
- `size`: `sm` | `md` | `lg`
- `icon`: ReactNode

---

## Content Components

### Text

Typography component with semantic variants.

```tsx
import { Text } from 'imperiohub-ui';

<Text variant="h1">Main Heading</Text>

<Text variant="h2" gradient>
  Gradient Heading
</Text>

<Text variant="body" color="secondary">
  Supporting text in secondary color
</Text>

<Text variant="caption" align="center">
  Caption text centered
</Text>

<Text variant="overline" color="brand">
  FEATURED
</Text>
```

**Props:**
- `variant`: `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `body-lg` | `body` | `body-sm` | `caption` | `label` | `overline`
- `align`: `left` | `center` | `right`
- `weight`: `light` | `normal` | `medium` | `semibold` | `bold`
- `color`: `primary` | `secondary` | `disabled` | `brand` | `error` | `success` | `warning`
- `gradient`: boolean
- `truncate`: boolean
- `as`: ElementType

---

### Image

Responsive image with object-fit options.

```tsx
import { Image } from 'imperiohub-ui';

<Image
  src="/hero.jpg"
  alt="Professional consultation"
  objectFit="cover"
  rounded="lg"
/>

<Image
  src="/avatar.jpg"
  alt="Profile"
  rounded="full"
  width={100}
  height={100}
/>
```

**Props:**
- `src`: string (required)
- `alt`: string (required)
- `objectFit`: `cover` | `contain`
- `rounded`: `sm` | `md` | `lg` | `full` | `none`
- `width`, `height`: number

---

### Link

Hyperlink with hover effects.

```tsx
import { Link } from 'imperiohub-ui';

<Link href="/about">Learn More</Link>

<Link href="/contact" underline>
  Contact Us
</Link>
```

**Props:**
- `href`: string (required)
- `underline`: boolean
- All standard anchor attributes

---

### Icon

Icon wrapper for Lucide React icons.

```tsx
import { Icon, Search, Heart, CheckCircle } from 'imperiohub-ui';

<Icon icon={Search} size="md" />

<Icon icon={Heart} size="lg" color="error" clickable />

<Icon icon={CheckCircle} color="success" />

<Icon icon={LoaderIcon} spin />
```

**Props:**
- `icon`: LucideIcon (required)
- `size`: `xs` | `sm` | `md` | `lg` | `xl` | `2xl`
- `color`: `primary` | `secondary` | `accent` | `error` | `warning` | `success` | `info` | `muted`
- `clickable`: boolean
- `spin`, `pulse`: boolean
- `ariaLabel`: string

**Available Icons (50+ exported):**
- Actions: Search, Plus, X, Edit, Trash, Download, Upload, Share, Copy
- Navigation: Menu, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, Home, Settings
- Status: CheckCircle, AlertCircle, XCircle, Info, Loader, Check
- Social: Mail, Phone, MessageCircle, Send
- Content: Calendar, Clock, MapPin, FileText, Image, Video, User
- E-commerce: ShoppingCart, CreditCard, Tag, Star, Heart

---

## UI Components

### Badge

Small label or tag.

```tsx
import { Badge } from 'imperiohub-ui';

<Badge variant="success">New</Badge>

<Badge variant="primary" size="lg">Featured</Badge>

<Badge variant="neutral">Draft</Badge>
```

**Props:**
- `variant`: `primary` | `secondary` | `success` | `error` | `warning` | `info` | `neutral`
- `size`: `sm` | `md` | `lg`

---

### Spinner

Loading indicator.

```tsx
import { Spinner } from 'imperiohub-ui';

<Spinner size="md" />

<Spinner size="xl" />
```

**Props:**
- `size`: `sm` | `md` | `lg` | `xl`

---

### Avatar

User avatar with image or initials.

```tsx
import { Avatar } from 'imperiohub-ui';

<Avatar src="/avatar.jpg" alt="John Doe" />

<Avatar initials="JD" size="lg" />

<Avatar initials="AB" size="xl" />
```

**Props:**
- `src`: string
- `alt`: string
- `initials`: string
- `size`: `sm` | `md` | `lg` | `xl` | `2xl`

---

### Divider

Visual separator.

```tsx
import { Divider } from 'imperiohub-ui';

<Divider />

<Divider orientation="vertical" />
```

**Props:**
- `orientation`: `horizontal` | `vertical`

---

## Best Practices

### Accessibility
- Always provide `alt` text for images
- Use `ariaLabel` for icon-only buttons
- Use semantic HTML (Text component auto-selects)
- Ensure sufficient color contrast

### Performance
- Import only what you need
- Use lazy loading for images
- Avoid unnecessary re-renders

### Styling
- Use provided size variants for consistency
- Leverage theming for color customization
- Use responsive props when available
