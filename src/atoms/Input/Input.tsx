import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Input.module.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Error state - shows error styling
   */
  error?: boolean;

  /**
   * Success state - shows success styling
   */
  success?: boolean;

  /**
   * Label text
   */
  label?: string;

  /**
   * Helper text below input
   */
  helperText?: string;

  /**
   * Error message (shows error state automatically)
   */
  errorMessage?: string;

  /**
   * Icon before input
   */
  iconBefore?: ReactNode;

  /**
   * Icon after input
   */
  iconAfter?: ReactNode;

  /**
   * Mark field as required (adds asterisk to label)
   */
  required?: boolean;

  /**
   * Additional CSS classes for wrapper
   */
  wrapperClassName?: string;

  /**
   * Additional CSS classes for input
   */
  className?: string;
}

/**
 * Input Component
 *
 * A versatile input field with label, icons, validation states, and helper text.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   required
 * />
 *
 * <Input
 *   label="Search"
 *   iconBefore={<SearchIcon />}
 *   placeholder="Search..."
 * />
 *
 * <Input
 *   label="Username"
 *   error
 *   errorMessage="Username is already taken"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      success = false,
      label,
      helperText,
      errorMessage,
      iconBefore,
      iconAfter,
      required,
      wrapperClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const hasError = error || !!errorMessage;
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = cn(
      styles.input,
      styles[`input--${size}`],
      {
        [styles['input--error']]: hasError,
        [styles['input--success']]: success && !hasError,
        [styles['input--with-icon-left']]: iconBefore,
        [styles['input--with-icon-right']]: iconAfter,
      },
      className
    );

    return (
      <div className={cn(wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(styles.input__label, {
              [styles['input__label--required']]: required,
            })}
          >
            {label}
          </label>
        )}

        <div className={styles['input-wrapper']}>
          {iconBefore && (
            <span
              className={cn(styles.input__icon, styles['input__icon--left'], {
                [styles['input__icon--error']]: hasError,
                [styles['input__icon--success']]: success && !hasError,
              })}
            >
              {iconBefore}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={hasError}
            aria-required={required}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            {...props}
          />

          {iconAfter && (
            <span
              className={cn(styles.input__icon, styles['input__icon--right'], {
                [styles['input__icon--error']]: hasError,
                [styles['input__icon--success']]: success && !hasError,
              })}
            >
              {iconAfter}
            </span>
          )}
        </div>

        {errorMessage && (
          <span id={`${inputId}-error`} className={styles.input__error} role="alert">
            {errorMessage}
          </span>
        )}

        {helperText && !errorMessage && (
          <span id={`${inputId}-helper`} className={styles.input__helper}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
