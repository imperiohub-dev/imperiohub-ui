import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon to display (ReactNode, usually an SVG or Icon component)
   */
  icon: ReactNode;

  /**
   * Button variant
   * @default 'filled'
   */
  variant?: 'filled' | 'outline' | 'ghost';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Circular/rounded button
   * @default true
   */
  rounded?: boolean;

  /**
   * Color theme
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'neutral';

  /**
   * Accessible label (required for screen readers)
   */
  'aria-label': string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * HTML button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * IconButton Component
 *
 * Button component that displays only an icon, perfect for social media links,
 * quick actions, toolbars, and mobile navigation.
 *
 * @example
 * ```tsx
 * // Basic icon button
 * <IconButton icon={<Icon name="menu" />} aria-label="Open menu" />
 *
 * // Social media button
 * <IconButton
 *   icon={<FacebookIcon />}
 *   variant="ghost"
 *   color="primary"
 *   aria-label="Visit Facebook"
 * />
 *
 * // Square button
 * <IconButton
 *   icon={<CloseIcon />}
 *   rounded={false}
 *   variant="outline"
 *   aria-label="Close"
 * />
 * ```
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'filled',
  size = 'md',
  rounded = true,
  color = 'primary',
  className,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}) => {
  const buttonClasses = cn(
    styles.iconButton,
    styles[`iconButton--${variant}`],
    styles[`iconButton--${size}`],
    styles[`iconButton--${color}`],
    {
      [styles['iconButton--rounded']]: rounded,
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      <span className={styles.iconButton__icon}>{icon}</span>
    </button>
  );
};

IconButton.displayName = 'IconButton';
