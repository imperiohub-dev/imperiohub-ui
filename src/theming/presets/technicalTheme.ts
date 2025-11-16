/**
 * Technical Theme - Gray/blue palette for engineers and tech companies
 *
 * WCAG 2.1 AA Compliant
 * Clean, modern, and technical aesthetic
 */

import { ThemeTokens } from '../../types/theme';

export const technicalTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#3b82f6', // Blue-500 - Tech blue
      secondary: '#6366f1', // Indigo-500
      accent: '#06b6d4', // Cyan-500
    },
    semantic: {
      success: '#10b981', // Green-500
      error: '#ef4444', // Red-500
      warning: '#f59e0b', // Amber-500
      info: '#3b82f6', // Blue-500
    },
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    surface: {
      background: '#ffffff',
      foreground: '#f9fafb',
      card: '#ffffff',
      border: '#e5e7eb',
      input: '#f3f4f6',
      disabled: '#f3f4f6',
    },
    text: {
      primary: '#111827', // Gray-900
      secondary: '#4b5563', // Gray-600
      muted: '#6b7280', // Gray-500
      inverse: '#ffffff',
      disabled: '#9ca3af',
    },
    overlay: {
      light: 'rgba(249, 250, 251, 0.95)',
      dark: 'rgba(17, 24, 39, 0.7)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", monospace',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", monospace',
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
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
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
    name: 'technical',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Clean and modern theme for engineers, developers, and tech companies.',
  },
};
