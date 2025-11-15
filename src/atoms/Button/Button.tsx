import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Loading state - shows spinner and disables interaction
   */
  loading?: boolean;

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Icon-only button (square shape)
   */
  iconOnly?: boolean;

  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Optional icon before text
   */
  iconBefore?: ReactNode;

  /**
   * Optional icon after text
   */
  iconAfter?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * HTML button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button variant="outline" loading>
 *   Loading...
 * </Button>
 *
 * <Button variant="ghost" iconBefore={<Icon name="plus" />}>
 *   Add Item
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  iconOnly = false,
  children,
  iconBefore,
  iconAfter,
  className,
  disabled,
  type = 'button',
  ...props
}) => {
  const buttonClasses = cn(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--loading']]: loading,
      [styles['button--full-width']]: fullWidth,
      [styles['button--icon-only']]: iconOnly,
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {iconBefore && !loading && <span className={styles.button__icon}>{iconBefore}</span>}
      {!iconOnly && <span className={styles.button__text}>{children}</span>}
      {iconOnly && !loading && children}
      {iconAfter && !loading && <span className={styles.button__icon}>{iconAfter}</span>}
    </button>
  );
};

Button.displayName = 'Button';
