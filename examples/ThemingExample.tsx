/**
 * Theming System Examples
 *
 * Demonstrates all features of the Advanced Theming System
 */

import React from 'react';
import {
  ThemeProvider,
  DarkModeToggle,
  useTheme,
  useThemeContext,
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
  ThemeTokens,
} from '../src';

// Example 1: Basic Usage with Pre-built Theme
export function BasicThemeExample() {
  return (
    <ThemeProvider theme={professionalTheme}>
      <div style={{ padding: '2rem' }}>
        <h1>Professional Theme Example</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This section uses the professional theme with blue colors.
        </p>
        <button
          style={{
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-inverse)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Primary Button
        </button>
      </div>
    </ThemeProvider>
  );
}

// Example 2: Dark Mode Toggle
export function DarkModeExample() {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Dark Mode Example</h1>
          <DarkModeToggle />
        </header>
        <p>Click the button above to toggle between light and dark themes.</p>

        <h2>Switch Variant</h2>
        <DarkModeToggle variant="switch" showLabel />
      </div>
    </ThemeProvider>
  );
}

// Example 3: Dynamic Theme Switching
export function ThemeSwitcherExample() {
  const themes: Array<{ name: string; theme: ThemeTokens }> = [
    { name: 'Light', theme: lightTheme },
    { name: 'Dark', theme: darkTheme },
    { name: 'Professional', theme: professionalTheme },
    { name: 'Medical', theme: medicalTheme },
    { name: 'Creative', theme: creativeTheme },
    { name: 'Technical', theme: technicalTheme },
    { name: 'Elegant', theme: elegantTheme },
    { name: 'Modern', theme: modernTheme },
    { name: 'Vibrant', theme: vibrantTheme },
    { name: 'Earth', theme: earthTheme },
  ];

  return (
    <ThemeProvider>
      <ThemeSwitcher themes={themes} />
    </ThemeProvider>
  );
}

function ThemeSwitcher({ themes }: { themes: Array<{ name: string; theme: ThemeTokens }> }) {
  const { theme, setTheme } = useThemeContext();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Theme Switcher</h1>
      <p>Current theme: {theme.metadata.name}</p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {themes.map(({ name, theme: t }) => (
          <button
            key={name}
            onClick={() => setTheme(t)}
            style={{
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--radius-md)',
              border: theme.metadata.name === t.metadata.name
                ? '2px solid var(--color-brand-primary)'
                : '1px solid var(--color-surface-border)',
              backgroundColor: 'var(--color-surface-card)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              fontWeight: theme.metadata.name === t.metadata.name ? 'bold' : 'normal',
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: '2rem',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-surface-foreground)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-surface-border)',
        }}
      >
        <h2 style={{ color: 'var(--color-brand-primary)' }}>Preview</h2>
        <p style={{ color: 'var(--color-text-primary)' }}>
          Primary text in the current theme
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Secondary text in the current theme
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Muted text in the current theme
        </p>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'var(--color-brand-primary)',
              borderRadius: 'var(--radius-md)',
            }}
            title="Primary"
          />
          <div
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'var(--color-brand-secondary)',
              borderRadius: 'var(--radius-md)',
            }}
            title="Secondary"
          />
          <div
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'var(--color-brand-accent)',
              borderRadius: 'var(--radius-md)',
            }}
            title="Accent"
          />
        </div>
      </div>
    </div>
  );
}

// Example 4: Multi-Theme on Same Page
export function MultiThemeExample() {
  return (
    <div>
      {/* Light Header */}
      <ThemeProvider theme={lightTheme} global={false}>
        <header
          style={{
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--color-surface-background)',
            borderBottom: '1px solid var(--color-surface-border)',
          }}
        >
          <h1 style={{ color: 'var(--color-brand-primary)' }}>Light Theme Header</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>This header uses the light theme</p>
        </header>
      </ThemeProvider>

      {/* Dark Hero */}
      <ThemeProvider theme={darkTheme} global={false}>
        <section
          style={{
            padding: 'var(--spacing-3xl)',
            backgroundColor: 'var(--color-surface-background)',
            color: 'var(--color-text-primary)',
          }}
        >
          <h2 style={{ color: 'var(--color-brand-primary)' }}>Dark Theme Hero</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This hero section uses the dark theme
          </p>
        </section>
      </ThemeProvider>

      {/* Professional Content */}
      <ThemeProvider theme={professionalTheme} global={false}>
        <main
          style={{
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--color-surface-background)',
          }}
        >
          <h2 style={{ color: 'var(--color-brand-primary)' }}>Professional Theme Content</h2>
          <p style={{ color: 'var(--color-text-primary)' }}>
            This content section uses the professional theme
          </p>
        </main>
      </ThemeProvider>
    </div>
  );
}

// Example 5: Custom Theme
export function CustomThemeExample() {
  const customTheme: ThemeTokens = {
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
        heading: '"Comic Sans MS", cursive',
        body: 'Arial, sans-serif',
        mono: 'monospace',
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
      name: 'my-custom',
      version: '1.0.0',
      author: 'Me',
      description: 'My custom theme with fun colors',
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ padding: '2rem' }}>
        <h1>Custom Theme Example</h1>
        <p>This demonstrates a completely custom theme!</p>
        <button
          style={{
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-inverse)',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
          }}
        >
          Custom Button
        </button>
      </div>
    </ThemeProvider>
  );
}

// Main example component that shows all examples
export function ThemingExamples() {
  return (
    <div>
      <h1 style={{ padding: '2rem', textAlign: 'center' }}>
        ImperioHub UI - Theming System Examples
      </h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ padding: '0 2rem' }}>1. Basic Theme Example</h2>
        <BasicThemeExample />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ padding: '0 2rem' }}>2. Dark Mode Example</h2>
        <DarkModeExample />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ padding: '0 2rem' }}>3. Theme Switcher Example</h2>
        <ThemeSwitcherExample />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ padding: '0 2rem' }}>4. Multi-Theme Example</h2>
        <MultiThemeExample />
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ padding: '0 2rem' }}>5. Custom Theme Example</h2>
        <CustomThemeExample />
      </section>
    </div>
  );
}

export default ThemingExamples;
