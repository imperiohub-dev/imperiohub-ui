# Advanced Theming System

> Transform your entire site design in 1 line of code

## Table of Contents

- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [Using Pre-built Themes](#using-pre-built-themes)
- [Creating Custom Themes](#creating-custom-themes)
- [ThemeProvider](#themeprovider)
- [Dark Mode](#dark-mode)
- [Multi-Theme Pages](#multi-theme-pages)
- [API Reference](#api-reference)
- [Accessibility](#accessibility)
- [Best Practices](#best-practices)

## Introduction

The ImperioHub UI Advanced Theming System allows you to:

- Change your entire site design with a single line of code
- Toggle dark mode in 30 seconds
- Create custom themes without touching SCSS
- Use multiple themes on the same page
- Persist user preferences automatically

All themes are WCAG 2.1 AA compliant for accessibility.

## Quick Start

### 1. Basic Theme Application

```tsx
import { injectTheme, professionalTheme } from '@imperiohub/ui';

// Apply theme globally
injectTheme(professionalTheme);
```

That's it! Your entire site now uses the professional theme.

### 2. Dark Mode in 30 Seconds

```tsx
import { ThemeProvider, DarkModeToggle } from '@imperiohub/ui';

function App() {
  return (
    <ThemeProvider>
      <header>
        <DarkModeToggle />
      </header>
      <main>{/* Your content */}</main>
    </ThemeProvider>
  );
}
```

### 3. React Hook Usage

```tsx
import { useTheme, professionalTheme } from '@imperiohub/ui';

function App() {
  const { theme, setTheme, isDark, toggleDarkMode } = useTheme();

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDark ? 'Light' : 'Dark'} Mode
      </button>
      <button onClick={() => setTheme(professionalTheme)}>
        Use Professional Theme
      </button>
    </div>
  );
}
```

## Using Pre-built Themes

We provide 10 professionally designed themes:

### Available Themes

1. **lightTheme** - Default light theme with indigo/purple
2. **darkTheme** - Dark mode variant
3. **professionalTheme** - Blue palette for lawyers/consultants
4. **medicalTheme** - Green/blue for doctors/healthcare
5. **creativeTheme** - Vibrant colors for designers/artists
6. **technicalTheme** - Gray/blue for engineers/tech
7. **elegantTheme** - Premium gold/black for luxury brands
8. **modernTheme** - Minimalist contemporary design
9. **vibrantTheme** - Bold and energetic colors
10. **earthTheme** - Natural brown/green tones

### Usage Examples

```tsx
import {
  injectTheme,
  lightTheme,
  darkTheme,
  professionalTheme,
  medicalTheme,
  creativeTheme,
  technicalTheme,
  elegantTheme,
  modernTheme,
  vibrantTheme,
  earthTheme,
} from '@imperiohub/ui';

// Apply any theme
injectTheme(medicalTheme);
```

### Theme Switcher Component

```tsx
import { useTheme, professionalTheme, creativeTheme } from '@imperiohub/ui';

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const themes = [
    { name: 'Professional', theme: professionalTheme },
    { name: 'Creative', theme: creativeTheme },
    // ... more themes
  ];

  return (
    <select onChange={(e) => setTheme(themes[e.target.selectedIndex].theme)}>
      {themes.map((t) => (
        <option key={t.name}>{t.name}</option>
      ))}
    </select>
  );
}
```

## Creating Custom Themes

Create your own theme by defining a `ThemeTokens` object:

```tsx
import { ThemeTokens, injectTheme } from '@imperiohub/ui';

const myCustomTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
    },
    semantic: {
      success: '#51cf66',
      error: '#ff6b6b',
      warning: '#ffd43b',
      info: '#339af0',
    },
    neutral: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    surface: {
      background: '#ffffff',
      foreground: '#f8f9fa',
      card: '#ffffff',
      border: '#dee2e6',
      input: '#ffffff',
      disabled: '#e9ecef',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
      muted: '#868e96',
      inverse: '#ffffff',
      disabled: '#adb5bd',
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.9)',
      dark: 'rgba(0, 0, 0, 0.5)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Poppins", sans-serif',
      body: '"Inter", sans-serif',
      mono: '"Fira Code", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },
  animations: {
    duration: {
      fast: '150ms',
      base: '250ms',
      slow: '350ms',
      slower: '500ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  metadata: {
    name: 'my-custom-theme',
    version: '1.0.0',
    author: 'Your Name',
    description: 'My awesome custom theme',
  },
};

// Apply your custom theme
injectTheme(myCustomTheme);
```

## ThemeProvider

Use `ThemeProvider` to provide theme context to your app:

```tsx
import { ThemeProvider, lightTheme } from '@imperiohub/ui';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Props

- `theme?: ThemeTokens` - Initial theme (defaults to light/system preference)
- `global?: boolean` - Apply globally or scoped (default: true)
- `className?: string` - CSS class for container (scoped themes only)
- `children: ReactNode` - Child components

## Dark Mode

### DarkModeToggle Component

The `DarkModeToggle` component provides an easy way to toggle dark mode:

```tsx
import { DarkModeToggle } from '@imperiohub/ui';

// Button variant (default)
<DarkModeToggle />

// Switch variant
<DarkModeToggle variant="switch" />

// With label
<DarkModeToggle variant="switch" showLabel />
```

### Manual Dark Mode Control

```tsx
import { useTheme } from '@imperiohub/ui';

function MyComponent() {
  const { isDark, toggleDarkMode, setDarkMode } = useTheme();

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle</button>
      <button onClick={() => setDarkMode(true)}>Force Dark</button>
      <button onClick={() => setDarkMode(false)}>Force Light</button>
      <p>Current mode: {isDark ? 'Dark' : 'Light'}</p>
    </div>
  );
}
```

### System Preference Detection

The theming system automatically detects the user's system color scheme preference and applies the appropriate theme on first load.

## Multi-Theme Pages

You can use different themes on different sections of the same page:

```tsx
import { ThemeProvider, lightTheme, darkTheme } from '@imperiohub/ui';

function Page() {
  return (
    <>
      {/* Light header */}
      <ThemeProvider theme={lightTheme} global={false}>
        <header>Light themed header</header>
      </ThemeProvider>

      {/* Dark hero */}
      <ThemeProvider theme={darkTheme} global={false}>
        <section className="hero">Dark themed hero</section>
      </ThemeProvider>

      {/* Light content */}
      <ThemeProvider theme={lightTheme} global={false}>
        <main>Light themed content</main>
      </ThemeProvider>
    </>
  );
}
```

## API Reference

### injectTheme()

Injects theme tokens as CSS variables into the DOM.

```tsx
injectTheme(theme: ThemeTokens, root?: HTMLElement): void
```

### useTheme()

React hook for theme management.

```tsx
const {
  theme,        // Current theme
  setTheme,     // Set new theme
  isDark,       // Is dark mode active
  toggleDarkMode, // Toggle dark/light
  setDarkMode   // Set dark mode explicitly
} = useTheme(initialTheme?: ThemeTokens);
```

### useThemeContext()

Access theme from context (must be within ThemeProvider).

```tsx
const { theme, isDark, toggleDarkMode } = useThemeContext();
```

### generateCSSVariables()

Generate CSS variables object from theme.

```tsx
const vars = generateCSSVariables(theme);
// Returns: { '--color-brand-primary': '#6366f1', ... }
```

### ThemeTokens Interface

Complete TypeScript interface for theme tokens. See source code for full structure.

## Accessibility

All pre-built themes meet WCAG 2.1 AA standards:

- Text colors have minimum 4.5:1 contrast ratio
- Large text has minimum 3:1 contrast ratio
- Interactive elements are clearly distinguishable

### Testing Contrast

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify your custom themes:

```
Normal text: 4.5:1 minimum
Large text (18pt+): 3:1 minimum
```

### Recommended Approach

When creating custom themes:

1. Start with a pre-built theme as a base
2. Modify colors incrementally
3. Test contrast after each change
4. Ensure focus states are visible
5. Test with screen readers

## Best Practices

### 1. Use CSS Variables in Components

```tsx
// Good - uses theme variables
<div style={{ color: 'var(--color-text-primary)' }}>Text</div>

// Avoid - hardcoded values
<div style={{ color: '#000000' }}>Text</div>
```

### 2. Provide Initial Theme

```tsx
// Good - explicit theme
<ThemeProvider theme={professionalTheme}>

// Also good - defaults to system preference
<ThemeProvider>
```

### 3. Persist User Preferences

The `useTheme` hook automatically persists preferences to localStorage. No extra work needed!

### 4. Test All Themes

Make sure your components work well with all themes:

```tsx
// Create a theme testing component
function ThemeTester() {
  const themes = [lightTheme, darkTheme, professionalTheme];

  return themes.map(theme => (
    <ThemeProvider key={theme.metadata.name} theme={theme} global={false}>
      <YourComponent />
    </ThemeProvider>
  ));
}
```

### 5. Consider Performance

- Theme changes are fast (<16ms)
- Use `useMemo` for computed theme values
- Avoid theme changes during animations

### 6. Mobile Considerations

- Test themes on mobile devices
- Ensure touch targets are appropriately sized
- Consider reduced motion preferences

## Examples

See `examples/ThemingExample.tsx` for complete working examples including:

- Basic theme usage
- Dark mode toggle
- Dynamic theme switching
- Multi-theme pages
- Custom themes

---

Need help? Check out our [GitHub repository](https://github.com/imperiohub-dev/imperiohub-ui) or open an issue.
