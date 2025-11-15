/**
 * Theme Utilities
 *
 * Functions to inject and manage theme configuration
 */

import { ThemeConfig } from '../types/theme';

/**
 * Converts ThemeConfig object to CSS custom properties
 */
export const generateCSSVariables = (theme: ThemeConfig): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Colors
  cssVars['--color-primary'] = theme.colors.primary;
  cssVars['--color-secondary'] = theme.colors.secondary;
  cssVars['--color-accent'] = theme.colors.accent;
  cssVars['--color-background'] = theme.colors.background;
  cssVars['--color-surface'] = theme.colors.surface;
  cssVars['--color-text-primary'] = theme.colors.text.primary;
  cssVars['--color-text-secondary'] = theme.colors.text.secondary;
  cssVars['--color-text-disabled'] = theme.colors.text.disabled;
  cssVars['--color-error'] = theme.colors.error;
  cssVars['--color-warning'] = theme.colors.warning;
  cssVars['--color-success'] = theme.colors.success;
  cssVars['--color-info'] = theme.colors.info;

  // Typography
  cssVars['--font-heading'] = theme.typography.fontFamily.heading;
  cssVars['--font-body'] = theme.typography.fontFamily.body;
  if (theme.typography.fontFamily.mono) {
    cssVars['--font-mono'] = theme.typography.fontFamily.mono;
  }

  // Font sizes
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value;
  });

  // Font weights
  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    cssVars[`--font-weight-${key}`] = value.toString();
  });

  // Line heights
  Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
    cssVars[`--line-height-${key}`] = value.toString();
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value;
  });

  // Breakpoints
  Object.entries(theme.breakpoints).forEach(([key, value]) => {
    cssVars[`--breakpoint-${key}`] = value;
  });

  return cssVars;
};

/**
 * Injects CSS variables into the DOM
 */
export const injectTheme = (theme: ThemeConfig, root: HTMLElement = document.documentElement): void => {
  const cssVars = generateCSSVariables(theme);

  Object.entries(cssVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

/**
 * Generates inline style object from theme config
 */
export const getThemeStyles = (theme: ThemeConfig): React.CSSProperties => {
  const cssVars = generateCSSVariables(theme);
  return cssVars as React.CSSProperties;
};
