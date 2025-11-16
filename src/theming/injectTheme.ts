/**
 * Theme Injection Utility
 *
 * Converts ThemeTokens to CSS custom properties and injects them into the DOM
 */

import { ThemeTokens } from '../types/theme';

/**
 * Flattens nested object into CSS variable format
 * Example: { colors: { brand: { primary: '#000' } } } => { '--color-brand-primary': '#000' }
 */
const flattenObject = (
  obj: Record<string, unknown>,
  prefix = '',
  result: Record<string, string> = {}
): Record<string, string> => {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value as Record<string, unknown>, newKey, result);
    } else {
      result[`--${newKey}`] = String(value);
    }
  }

  return result;
};

/**
 * Converts ThemeTokens to CSS custom properties object
 *
 * @param theme - Theme tokens object
 * @returns Object with CSS variable names and values
 *
 * @example
 * const vars = generateCSSVariables(lightTheme);
 * // Returns: { '--color-brand-primary': '#6366f1', ... }
 */
export const generateCSSVariables = (theme: ThemeTokens): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Flatten colors
  const colorVars = flattenObject({ color: theme.colors });
  Object.assign(cssVars, colorVars);

  // Flatten typography
  const typographyVars = flattenObject({
    font: {
      ...theme.typography.fontFamily,
      size: theme.typography.fontSize,
      weight: theme.typography.fontWeight,
    },
    'line-height': theme.typography.lineHeight,
    'letter-spacing': theme.typography.letterSpacing,
  });
  Object.assign(cssVars, typographyVars);

  // Flatten spacing
  const spacingVars = flattenObject({ spacing: theme.spacing });
  Object.assign(cssVars, spacingVars);

  // Flatten border radius
  const radiusVars = flattenObject({ radius: theme.borderRadius });
  Object.assign(cssVars, radiusVars);

  // Flatten shadows
  const shadowVars = flattenObject({ shadow: theme.shadows });
  Object.assign(cssVars, shadowVars);

  // Flatten animations
  const animationVars = flattenObject({
    duration: theme.animations.duration,
    easing: theme.animations.easing,
  });
  Object.assign(cssVars, animationVars);

  return cssVars;
};

/**
 * Injects theme tokens as CSS custom properties into the DOM
 *
 * @param theme - Theme tokens object to inject
 * @param root - Root element to apply variables to (defaults to :root)
 *
 * @example
 * // Basic usage
 * import { injectTheme, lightTheme } from '@imperiohub/ui';
 * injectTheme(lightTheme);
 *
 * @example
 * // Apply to specific element
 * const container = document.getElementById('themed-section');
 * injectTheme(darkTheme, container);
 */
export const injectTheme = (
  theme: ThemeTokens,
  root: HTMLElement = document.documentElement
): void => {
  const cssVars = generateCSSVariables(theme);

  Object.entries(cssVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });

  // Set data attribute for theme name
  root.setAttribute('data-theme', theme.metadata.name);
};

/**
 * Removes all theme-related CSS variables from an element
 *
 * @param root - Element to remove variables from
 */
export const removeTheme = (root: HTMLElement = document.documentElement): void => {
  const style = root.style;
  const properties = Array.from(style).filter(prop =>
    prop.startsWith('--color-') ||
    prop.startsWith('--font-') ||
    prop.startsWith('--line-height-') ||
    prop.startsWith('--letter-spacing-') ||
    prop.startsWith('--spacing-') ||
    prop.startsWith('--radius-') ||
    prop.startsWith('--shadow-') ||
    prop.startsWith('--duration-') ||
    prop.startsWith('--easing-')
  );

  properties.forEach(prop => style.removeProperty(prop));
  root.removeAttribute('data-theme');
};

/**
 * Gets inline style object from theme tokens for React components
 *
 * @param theme - Theme tokens object
 * @returns CSS properties object for inline styles
 *
 * @example
 * const styles = getThemeStyles(professionalTheme);
 * <div style={styles}>Themed content</div>
 */
export const getThemeStyles = (theme: ThemeTokens): React.CSSProperties => {
  const cssVars = generateCSSVariables(theme);
  return cssVars as React.CSSProperties;
};
