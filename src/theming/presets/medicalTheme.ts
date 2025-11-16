/**
 * Medical Theme - Green/blue palette for doctors, clinics, and healthcare
 *
 * WCAG 2.1 AA Compliant
 * Calming colors that convey health, trust, and care
 */

import { ThemeTokens } from '../../types/theme';

export const medicalTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#059669', // Green-600 - Medical green
      secondary: '#0891b2', // Cyan-600 - Healthcare blue
      accent: '#14b8a6', // Teal-500
    },
    semantic: {
      success: '#10b981', // Green-500
      error: '#dc2626', // Red-600
      warning: '#f59e0b', // Amber-500
      info: '#06b6d4', // Cyan-500
    },
    neutral: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    surface: {
      background: '#ffffff',
      foreground: '#f0fdfa',
      card: '#ffffff',
      border: '#d1fae5',
      input: '#ffffff',
      disabled: '#ccfbf1',
    },
    text: {
      primary: '#134e4a', // Teal-900
      secondary: '#0f766e', // Teal-700
      muted: '#0d9488', // Teal-600
      inverse: '#ffffff',
      disabled: '#5eead4',
    },
    overlay: {
      light: 'rgba(240, 253, 250, 0.95)',
      dark: 'rgba(19, 78, 74, 0.6)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
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
    sm: '0 1px 2px 0 rgba(19, 78, 74, 0.05)',
    base: '0 1px 3px 0 rgba(19, 78, 74, 0.1), 0 1px 2px -1px rgba(19, 78, 74, 0.1)',
    md: '0 4px 6px -1px rgba(19, 78, 74, 0.1), 0 2px 4px -2px rgba(19, 78, 74, 0.1)',
    lg: '0 10px 15px -3px rgba(19, 78, 74, 0.1), 0 4px 6px -4px rgba(19, 78, 74, 0.1)',
    xl: '0 20px 25px -5px rgba(19, 78, 74, 0.1), 0 8px 10px -6px rgba(19, 78, 74, 0.1)',
    '2xl': '0 25px 50px -12px rgba(19, 78, 74, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(19, 78, 74, 0.05)',
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
    name: 'medical',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Calming green and blue theme for healthcare professionals and medical clinics.',
  },
};
