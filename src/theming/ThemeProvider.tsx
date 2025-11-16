/**
 * ThemeProvider - React context for theme management
 *
 * Features:
 * - Provides theme context to child components
 * - Supports nesting for multi-theme pages
 * - Automatic theme application
 */

import React, { createContext, useContext, useRef, useEffect, useMemo } from 'react';
import { ThemeTokens } from '../types/theme';
import { useTheme, UseThemeReturn } from './useTheme';
import { getThemeStyles } from './injectTheme';

interface ThemeContextValue extends UseThemeReturn {
  /** Container ref for scoped theme application */
  containerRef: React.RefObject<HTMLDivElement>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  /** Initial theme to use */
  theme?: ThemeTokens;
  /** Child components */
  children: React.ReactNode;
  /** Whether to apply theme globally (default: true for root, false for nested) */
  global?: boolean;
  /** CSS class name for the container */
  className?: string;
}

/**
 * ThemeProvider - Provides theme context to child components
 *
 * @example
 * // Global theme provider
 * function App() {
 *   return (
 *     <ThemeProvider theme={lightTheme}>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 *
 * @example
 * // Multi-theme on same page
 * function Page() {
 *   return (
 *     <>
 *       <ThemeProvider theme={lightTheme} global={false}>
 *         <Header />
 *       </ThemeProvider>
 *       <ThemeProvider theme={darkTheme} global={false}>
 *         <HeroSection />
 *       </ThemeProvider>
 *     </>
 *   );
 * }
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: initialTheme,
  children,
  global = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const themeControls = useTheme(initialTheme);

  // Apply theme to container element for scoped themes
  useEffect(() => {
    if (!global && containerRef.current) {
      const styles = getThemeStyles(themeControls.theme);

      Object.entries(styles).forEach(([property, value]) => {
        containerRef.current?.style.setProperty(property, String(value));
      });

      containerRef.current.setAttribute('data-theme', themeControls.theme.metadata.name);
    }
  }, [themeControls.theme, global]);

  const contextValue = useMemo(
    () => ({
      ...themeControls,
      containerRef,
    }),
    [themeControls]
  );

  // For global themes, just provide context without wrapper
  if (global) {
    return (
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    );
  }

  // For scoped themes, wrap in a div with ref
  return (
    <ThemeContext.Provider value={contextValue}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

/**
 * useThemeContext - Access theme context from any child component
 *
 * @returns Theme context value with controls
 * @throws Error if used outside ThemeProvider
 *
 * @example
 * function MyComponent() {
 *   const { theme, isDark, toggleDarkMode } = useThemeContext();
 *
 *   return (
 *     <div style={{ color: theme.colors.text.primary }}>
 *       <button onClick={toggleDarkMode}>
 *         Toggle {isDark ? 'Light' : 'Dark'} Mode
 *       </button>
 *     </div>
 *   );
 * }
 */
export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};
