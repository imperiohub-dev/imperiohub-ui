/**
 * useTheme Hook - React hook for theme management
 *
 * Features:
 * - Theme state management
 * - localStorage persistence
 * - Dark mode detection
 * - System preference detection
 */

import { useState, useEffect, useCallback } from 'react';
import { ThemeTokens } from '../types/theme';
import { injectTheme } from './injectTheme';
import { lightTheme } from './presets/lightTheme';
import { darkTheme } from './presets/darkTheme';

const STORAGE_KEY_THEME = 'imperiohub-theme';
const STORAGE_KEY_DARK_MODE = 'imperiohub-dark-mode';

/**
 * Detects if user prefers dark mode based on system preferences
 */
const detectSystemDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Loads saved theme from localStorage
 */
const loadSavedTheme = (): ThemeTokens | null => {
  if (typeof window === 'undefined') return null;

  try {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved) {
      return JSON.parse(saved) as ThemeTokens;
    }
  } catch (error) {
    console.warn('Failed to load saved theme:', error);
  }

  return null;
};

/**
 * Loads dark mode preference from localStorage
 */
const loadDarkModePreference = (): boolean | null => {
  if (typeof window === 'undefined') return null;

  try {
    const saved = localStorage.getItem(STORAGE_KEY_DARK_MODE);
    if (saved !== null) {
      return saved === 'true';
    }
  } catch (error) {
    console.warn('Failed to load dark mode preference:', error);
  }

  return null;
};

/**
 * Saves theme to localStorage
 */
const saveTheme = (theme: ThemeTokens): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY_THEME, JSON.stringify(theme));
  } catch (error) {
    console.warn('Failed to save theme:', error);
  }
};

/**
 * Saves dark mode preference to localStorage
 */
const saveDarkModePreference = (isDark: boolean): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY_DARK_MODE, String(isDark));
  } catch (error) {
    console.warn('Failed to save dark mode preference:', error);
  }
};

export interface UseThemeReturn {
  /** Current active theme */
  theme: ThemeTokens;
  /** Set a new theme */
  setTheme: (theme: ThemeTokens) => void;
  /** Whether dark mode is currently active */
  isDark: boolean;
  /** Toggle between light and dark themes */
  toggleDarkMode: () => void;
  /** Explicitly set dark mode on or off */
  setDarkMode: (dark: boolean) => void;
}

/**
 * React hook for theme management
 *
 * @param initialTheme - Initial theme to use (defaults to light or system preference)
 * @returns Theme state and control functions
 *
 * @example
 * function App() {
 *   const { theme, setTheme, isDark, toggleDarkMode } = useTheme();
 *
 *   return (
 *     <div>
 *       <button onClick={toggleDarkMode}>
 *         {isDark ? 'Light' : 'Dark'} Mode
 *       </button>
 *       <button onClick={() => setTheme(professionalTheme)}>
 *         Professional Theme
 *       </button>
 *     </div>
 *   );
 * }
 */
export const useTheme = (initialTheme?: ThemeTokens): UseThemeReturn => {
  // Initialize theme from saved, initial, or default
  const [theme, setThemeState] = useState<ThemeTokens>(() => {
    const savedTheme = loadSavedTheme();
    if (savedTheme) return savedTheme;

    if (initialTheme) return initialTheme;

    // Check dark mode preference
    const savedDarkMode = loadDarkModePreference();
    const prefersDark = savedDarkMode !== null ? savedDarkMode : detectSystemDarkMode();

    return prefersDark ? darkTheme : lightTheme;
  });

  // Track if we're in dark mode
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedDarkMode = loadDarkModePreference();
    if (savedDarkMode !== null) return savedDarkMode;
    return theme.metadata.name === 'dark';
  });

  // Apply theme when it changes
  useEffect(() => {
    injectTheme(theme);
    saveTheme(theme);
  }, [theme]);

  // Listen for system dark mode preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedDarkMode = loadDarkModePreference();
      if (savedDarkMode === null) {
        setDarkMode(e.matches);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Set a new theme
  const setTheme = useCallback((newTheme: ThemeTokens) => {
    setThemeState(newTheme);
    setIsDark(newTheme.metadata.name === 'dark');
    saveDarkModePreference(newTheme.metadata.name === 'dark');
  }, []);

  // Set dark mode explicitly
  const setDarkMode = useCallback((dark: boolean) => {
    setThemeState(dark ? darkTheme : lightTheme);
    setIsDark(dark);
    saveDarkModePreference(dark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!isDark);
  }, [isDark, setDarkMode]);

  return {
    theme,
    setTheme,
    isDark,
    toggleDarkMode,
    setDarkMode,
  };
};
