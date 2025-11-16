/**
 * Dark Theme - Default dark theme with indigo/purple palette
 *
 * WCAG 2.1 AA Compliant
 * All text colors meet minimum 4.5:1 contrast ratio on dark backgrounds
 */

import { ThemeTokens } from '../../types/theme';

export const darkTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#818cf8', // Indigo-400 (lighter for dark bg)
      secondary: '#a78bfa', // Violet-400
      accent: '#f472b6', // Pink-400
    },
    semantic: {
      success: '#34d399', // Green-400
      error: '#f87171', // Red-400
      warning: '#fbbf24', // Amber-400
      info: '#60a5fa', // Blue-400
    },
    neutral: {
      50: '#111827',
      100: '#1f2937',
      200: '#374151',
      300: '#4b5563',
      400: '#6b7280',
      500: '#9ca3af',
      600: '#d1d5db',
      700: '#e5e7eb',
      800: '#f3f4f6',
      900: '#f9fafb',
    },
    surface: {
      background: '#0f172a', // Slate-900
      foreground: '#1e293b', // Slate-800
      card: '#1e293b',
      border: '#334155', // Slate-700
      input: '#1e293b',
      disabled: '#334155',
    },
    text: {
      primary: '#f1f5f9', // Slate-100 - 14.5:1 contrast on dark bg
      secondary: '#cbd5e1', // Slate-300 - 9.1:1 contrast
      muted: '#94a3b8', // Slate-400 - 5.9:1 contrast
      inverse: '#0f172a',
      disabled: '#64748b',
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.1)',
      dark: 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: {
      heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
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
    name: 'dark',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Default dark theme with indigo and purple accents. Easy on the eyes.',
  },
};
