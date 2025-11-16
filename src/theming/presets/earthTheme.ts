/**
 * Earth Theme - Natural brown/green palette
 *
 * WCAG 2.1 AA Compliant
 * Organic, warm, and nature-inspired
 */

import { ThemeTokens } from '../../types/theme';

export const earthTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#65a30d', // Lime-600 - Natural green
      secondary: '#92400e', // Amber-800 - Earth brown
      accent: '#0d9488', // Teal-600 - Natural teal
    },
    semantic: {
      success: '#16a34a', // Green-600
      error: '#b91c1c', // Red-700
      warning: '#d97706', // Amber-600
      info: '#0891b2', // Cyan-600
    },
    neutral: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
    },
    surface: {
      background: '#fefce8', // Yellow-50 - Warm background
      foreground: '#fffbeb', // Amber-50
      card: '#ffffff',
      border: '#d6d3d1', // Stone-300
      input: '#ffffff',
      disabled: '#f5f5f4',
    },
    text: {
      primary: '#1c1917', // Stone-900
      secondary: '#44403c', // Stone-700
      muted: '#78716c', // Stone-500
      inverse: '#fafaf9',
      disabled: '#a8a29e',
    },
    overlay: {
      light: 'rgba(250, 250, 249, 0.95)',
      dark: 'rgba(28, 25, 23, 0.6)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Merriweather", Georgia, "Times New Roman", serif',
      body: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Courier Prime", "Courier New", monospace',
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
      relaxed: 1.8,
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
    sm: '0 1px 2px 0 rgba(28, 25, 23, 0.1)',
    base: '0 1px 3px 0 rgba(28, 25, 23, 0.15), 0 1px 2px -1px rgba(28, 25, 23, 0.1)',
    md: '0 4px 6px -1px rgba(28, 25, 23, 0.15), 0 2px 4px -2px rgba(28, 25, 23, 0.1)',
    lg: '0 10px 15px -3px rgba(28, 25, 23, 0.15), 0 4px 6px -4px rgba(28, 25, 23, 0.1)',
    xl: '0 20px 25px -5px rgba(28, 25, 23, 0.15), 0 8px 10px -6px rgba(28, 25, 23, 0.1)',
    '2xl': '0 25px 50px -12px rgba(28, 25, 23, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(28, 25, 23, 0.05)',
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
    name: 'earth',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Nature-inspired theme with earthy tones for organic and eco-friendly brands.',
  },
};
