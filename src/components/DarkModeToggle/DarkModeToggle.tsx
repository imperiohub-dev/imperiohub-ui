/**
 * DarkModeToggle Component
 *
 * A component for toggling between light and dark themes
 * Supports button and switch variants
 */

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../../theming/ThemeProvider';
import styles from './DarkModeToggle.module.scss';

export interface DarkModeToggleProps {
  /** Variant of the toggle */
  variant?: 'button' | 'switch';
  /** Whether to show label text */
  showLabel?: boolean;
  /** Custom class name */
  className?: string;
  /** Accessible label (defaults based on variant) */
  ariaLabel?: string;
}

/**
 * DarkModeToggle - Toggle between light and dark themes
 *
 * @example
 * // Simple button toggle
 * <DarkModeToggle />
 *
 * @example
 * // Switch variant with label
 * <DarkModeToggle variant="switch" showLabel />
 */
export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  variant = 'button',
  showLabel = false,
  className = '',
  ariaLabel,
}) => {
  const { isDark, toggleDarkMode } = useThemeContext();

  const defaultAriaLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  const label = isDark ? 'Dark' : 'Light';

  if (variant === 'switch') {
    return (
      <label className={`${styles.switchContainer} ${className}`}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleDarkMode}
          className={styles.switchInput}
          aria-label={ariaLabel || defaultAriaLabel}
        />
        <span className={styles.switchSlider}>
          <Sun className={styles.switchIconLight} size={14} />
          <Moon className={styles.switchIconDark} size={14} />
        </span>
        {showLabel && <span className={styles.switchLabel}>{label} Mode</span>}
      </label>
    );
  }

  // Button variant
  return (
    <button
      onClick={toggleDarkMode}
      className={`${styles.button} ${className}`}
      aria-label={ariaLabel || defaultAriaLabel}
      title={defaultAriaLabel}
    >
      {isDark ? (
        <Sun className={styles.icon} size={20} />
      ) : (
        <Moon className={styles.icon} size={20} />
      )}
      {showLabel && <span className={styles.buttonLabel}>{label} Mode</span>}
    </button>
  );
};
