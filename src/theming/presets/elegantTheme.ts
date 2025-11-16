/**
 * Elegant Theme - Premium gold/black palette for luxury brands
 *
 * WCAG 2.1 AA Compliant
 * Sophisticated and premium aesthetic
 */

import { ThemeTokens } from '../../types/theme';

export const elegantTheme: ThemeTokens = {
  colors: {
    brand: {
      primary: '#d97706', // Amber-600 - Luxurious gold
      secondary: '#92400e', // Amber-800 - Deep gold
      accent: '#78716c', // Stone-500 - Elegant gray
    },
    semantic: {
      success: '#059669', // Green-600
      error: '#991b1b', // Red-800
      warning: '#b45309', // Amber-700
      info: '#1e40af', // Blue-800
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
      background: '#fafaf9',
      foreground: '#ffffff',
      card: '#ffffff',
      border: '#e7e5e4',
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
      dark: 'rgba(28, 25, 23, 0.8)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Playfair Display", Georgia, "Times New Roman", serif',
      body: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", monospace',
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
      wider: '0.1em',
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
      fast: '200ms',
      base: '300ms',
      slow: '400ms',
      slower: '600ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  metadata: {
    name: 'elegant',
    version: '0.3.0',
    author: 'ImperioHub',
    description: 'Premium theme with gold accents for luxury brands and high-end services.',
  },
};
