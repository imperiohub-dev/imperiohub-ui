/**
 * Professional Theme - Blue palette for lawyers, consultants, and professionals
 *
 * WCAG 2.1 AA Compliant
 * Conveys trust, stability, and professionalism
 */

import { ThemeTokens } from '../../types/theme';

export const professionalTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#1e40af', // Blue-800 - Deep professional blue
      secondary: '#0369a1', // Cyan-700 - Professional cyan
      accent: '#0891b2', // Cyan-600
    },
    semantic: {
      success: '#059669', // Green-600
      error: '#dc2626', // Red-600
      warning: '#d97706', // Amber-600
      info: '#2563eb', // Blue-600
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    surface: {
      background: '#ffffff',
      foreground: '#f8fafc',
      card: '#ffffff',
      border: '#e2e8f0',
      input: '#ffffff',
      disabled: '#f1f5f9',
    },
    text: {
      primary: '#0f172a', // Slate-900
      secondary: '#475569', // Slate-600
      muted: '#64748b', // Slate-500
      inverse: '#ffffff',
      disabled: '#94a3b8',
    },
    overlay: {
      light: 'rgba(248, 250, 252, 0.95)',
      dark: 'rgba(15, 23, 42, 0.6)',
    },
  },
  typography: {
    fontFamily: {
      heading: 'Georgia, Cambria, "Times New Roman", Times, serif',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
      normal: 1.6,
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
    sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
    base: '0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px -1px rgba(15, 23, 42, 0.1)',
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.1)',
    lg: '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.1)',
    xl: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)',
    '2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.05)',
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
    name: 'professional',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Professional blue theme perfect for lawyers, consultants, and corporate websites.',
  },
};
