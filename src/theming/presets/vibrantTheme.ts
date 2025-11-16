/**
 * Vibrant Theme - Bright and energetic color palette
 *
 * WCAG 2.1 AA Compliant
 * Bold, lively, and attention-grabbing
 */

import { ThemeTokens } from '../../types/theme';

export const vibrantTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#dc2626', // Red-600 - Vibrant red
      secondary: '#7c3aed', // Violet-600 - Vibrant purple
      accent: '#f59e0b', // Amber-500 - Vibrant yellow
    },
    semantic: {
      success: '#16a34a', // Green-600
      error: '#dc2626', // Red-600
      warning: '#ea580c', // Orange-600
      info: '#2563eb', // Blue-600
    },
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    surface: {
      background: '#ffffff',
      foreground: '#fafafa',
      card: '#ffffff',
      border: '#e4e4e7',
      input: '#ffffff',
      disabled: '#f4f4f5',
    },
    text: {
      primary: '#18181b', // Zinc-900
      secondary: '#52525b', // Zinc-600
      muted: '#71717a', // Zinc-500
      inverse: '#ffffff',
      disabled: '#a1a1aa',
    },
    overlay: {
      light: 'rgba(250, 250, 250, 0.95)',
      dark: 'rgba(24, 24, 27, 0.7)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Fira Code", "SF Mono", Monaco, monospace',
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
    sm: '0 1px 2px 0 rgba(220, 38, 38, 0.1)',
    base: '0 1px 3px 0 rgba(220, 38, 38, 0.15), 0 1px 2px -1px rgba(220, 38, 38, 0.1)',
    md: '0 4px 6px -1px rgba(220, 38, 38, 0.15), 0 2px 4px -2px rgba(220, 38, 38, 0.1)',
    lg: '0 10px 15px -3px rgba(220, 38, 38, 0.15), 0 4px 6px -4px rgba(220, 38, 38, 0.1)',
    xl: '0 20px 25px -5px rgba(220, 38, 38, 0.15), 0 8px 10px -6px rgba(220, 38, 38, 0.1)',
    '2xl': '0 25px 50px -12px rgba(220, 38, 38, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(220, 38, 38, 0.1)',
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
    name: 'vibrant',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Energetic and lively theme with bold colors for maximum impact.',
  },
};
