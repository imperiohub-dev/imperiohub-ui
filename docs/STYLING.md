# Styling Guide

Complete guide to theming and customizing ImperioHub UI.

## Table of Contents

- [Design System](#design-system)
- [Theming](#theming)
- [CSS Custom Properties](#css-custom-properties)
- [SCSS Mixins](#scss-mixins)
- [Responsive Design](#responsive-design)
- [Customization](#customization)

---

## Design System

### Colors

**Primary Palette:**
```scss
--color-primary: #6366f1      // Indigo
--color-secondary: #8b5cf6    // Purple
--color-accent: #ec4899       // Pink
```

**Neutral Colors:**
```scss
--color-background: #ffffff
--color-surface: #f9fafb
--color-text-primary: #111827
--color-text-secondary: #6b7280
--color-text-disabled: #d1d5db
```

**Status Colors:**
```scss
--color-error: #ef4444
--color-warning: #f59e0b
--color-success: #10b981
--color-info: #3b82f6
```

### Typography

**Font Families:**
```scss
--font-heading: 'Inter', sans-serif
--font-body: 'Inter', sans-serif
--font-mono: 'Fira Code', monospace
```

**Font Sizes:**
```scss
--font-size-xs: 0.75rem    // 12px
--font-size-sm: 0.875rem   // 14px
--font-size-base: 1rem     // 16px
--font-size-lg: 1.125rem   // 18px
--font-size-xl: 1.25rem    // 20px
--font-size-2xl: 1.5rem    // 24px
--font-size-3xl: 1.875rem  // 30px
--font-size-4xl: 2.25rem   // 36px
```

**Font Weights:**
```scss
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Spacing

```scss
--spacing-xs: 0.25rem   // 4px
--spacing-sm: 0.5rem    // 8px
--spacing-md: 1rem      // 16px
--spacing-lg: 1.5rem    // 24px
--spacing-xl: 2rem      // 32px
--spacing-2xl: 3rem     // 48px
--spacing-3xl: 4rem     // 64px
--spacing-4xl: 6rem     // 96px
```

### Border Radius

```scss
--radius-sm: 0.25rem    // 4px
--radius-md: 0.5rem     // 8px
--radius-lg: 0.75rem    // 12px
--radius-xl: 1rem       // 16px
--radius-full: 9999px   // Fully rounded
```

### Breakpoints

```scss
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

---

## Theming

### Using the Theme System

**Method 1: JavaScript Theme Injection**

```tsx
import { injectTheme } from 'imperiohub-ui';

// Inject custom theme
injectTheme({
  colors: {
    primary: '#3b82f6',      // Blue
    secondary: '#10b981',    // Green
    accent: '#f59e0b',       // Orange
    background: '#ffffff',
    surface: '#f3f4f6',
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      disabled: '#d1d5db',
    },
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6',
  },
  typography: {
    fontFamily: {
      heading: 'Playfair Display, serif',
      body: 'Open Sans, sans-serif',
    },
    fontSize: {
      // ... custom sizes
    },
  },
  spacing: {
    // ... custom spacing
  },
});
```

**Method 2: CSS Custom Properties**

```css
/* In your global CSS */
:root {
  /* Override colors */
  --color-primary: #3b82f6;
  --color-secondary: #10b981;

  /* Override typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;

  /* Override spacing */
  --spacing-xl: 2.5rem;
}
```

**Method 3: SCSS Variables Import**

```scss
// custom-theme.scss
@import 'imperiohub-ui/styles/variables';

// Override variables before importing components
$primary-color: #3b82f6;
$secondary-color: #10b981;

@import 'imperiohub-ui';
```

---

## CSS Custom Properties

### Using CSS Variables Directly

All components use CSS custom properties, allowing runtime theme changes:

```tsx
<div style={{ '--color-primary': '#3b82f6' }}>
  <Button variant="primary">Custom Color</Button>
</div>
```

### Dynamic Theming

```tsx
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = darkMode ? darkTheme : lightTheme;
    injectTheme(theme);
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
      {/* Your components */}
    </div>
  );
}

const darkTheme = {
  colors: {
    primary: '#6366f1',
    background: '#1f2937',
    surface: '#111827',
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      disabled: '#6b7280',
    },
  },
};
```

---

## SCSS Mixins

### Available Mixins

**Responsive:**
```scss
@import 'imperiohub-ui/styles/mixins';

.my-component {
  padding: 1rem;

  @include md {
    padding: 2rem;
  }

  @include lg {
    padding: 3rem;
  }
}
```

**Utilities:**
```scss
.container {
  @include container;  // Max-width + padding
}

.flex-center {
  @include flex-center;  // Flexbox centering
}

.truncate {
  @include truncate;  // Text ellipsis
}
```

**Animations:**
```scss
.fade-in {
  @include fade-in(0.3s);
}

.slide-up {
  @include slide-up(0.4s, 0.1s);
}
```

---

## Responsive Design

### Mobile-First Approach

All components are built mobile-first. Start with mobile styles, then enhance for larger screens:

```tsx
// Good: Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {items.map(...)}
</div>

// Components are responsive by default
<Hero
  title="..."  // Automatically responsive font sizes
  subtitle="..."
/>
```

### Breakpoint Usage

```scss
// In SCSS
.my-section {
  padding: var(--spacing-lg);

  @include sm {
    padding: var(--spacing-xl);
  }

  @include md {
    padding: var(--spacing-2xl);
  }

  @include lg {
    padding: var(--spacing-3xl);
  }
}
```

---

## Customization

### Component-Level Customization

**Using className:**
```tsx
<Button className="my-custom-button">
  Custom Styled
</Button>

// In your CSS
.my-custom-button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2rem;
  padding: 1rem 2rem;
}
```

**Using inline styles:**
```tsx
<Hero
  title="Custom Hero"
  style={{
    background: 'url(/custom-bg.jpg)',
    minHeight: '800px',
  }}
/>
```

### Creating Custom Variants

Extend existing components with custom variants:

```tsx
// custom-button.tsx
import { Button, ButtonProps } from 'imperiohub-ui';

export const GradientButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className="gradient-button"
      style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        border: 'none',
      }}
    />
  );
};
```

### Global Style Overrides

```css
/* global.css */

/* Override button styles */
.button--primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Override card styles */
.card {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

/* Override typography */
.text--h1 {
  letter-spacing: -0.05em;
}
```

---

## Dark Mode Example

Complete dark mode implementation:

```tsx
// theme.ts
export const lightTheme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#ffffff',
    surface: '#f9fafb',
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      disabled: '#d1d5db',
    },
  },
};

export const darkTheme = {
  colors: {
    primary: '#818cf8',
    secondary: '#a78bfa',
    background: '#111827',
    surface: '#1f2937',
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      disabled: '#6b7280',
    },
  },
};

// App.tsx
import { injectTheme } from 'imperiohub-ui';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    injectTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? 'Light' : 'Dark'} Mode
      </button>
      <YourComponents />
    </div>
  );
}
```

---

## Best Practices

1. **Use CSS Variables** for dynamic theming
2. **Leverage Mixins** for consistent responsive behavior
3. **Follow Mobile-First** approach
4. **Maintain Consistency** with the design system
5. **Test Accessibility** when customizing colors
6. **Optimize Performance** by avoiding inline styles when possible
7. **Document Custom Themes** for team consistency

---

## Troubleshooting

**Styles not applying:**
- Ensure CSS is imported: `import 'imperiohub-ui/dist/styles.css'`
- Check CSS Module naming
- Verify custom properties are defined

**Theme not updating:**
- Call `injectTheme()` after component mount
- Check browser console for errors
- Ensure theme object structure matches `ThemeConfig`

**Responsive not working:**
- Verify viewport meta tag in HTML
- Check breakpoint values
- Use browser DevTools to inspect media queries
