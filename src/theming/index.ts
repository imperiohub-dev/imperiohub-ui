/**
 * Advanced Theming System - Main exports
 */

// Core utilities
export { injectTheme, removeTheme, getThemeStyles, generateCSSVariables } from './injectTheme';

// Hooks
export { useTheme } from './useTheme';
export type { UseThemeReturn } from './useTheme';

// Context
export { ThemeProvider, useThemeContext } from './ThemeProvider';
export type { ThemeProviderProps } from './ThemeProvider';

// Theme presets
export {
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
} from './presets';
