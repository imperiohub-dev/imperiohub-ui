import React, { SelectHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Select.module.scss';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Select size
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
   * Helper text below select
   */
  helperText?: string;

  /**
   * Error message (shows error state automatically)
   */
  errorMessage?: string;

  /**
   * Options for the select dropdown
   */
  options: SelectOption[];

  /**
   * Placeholder option text
   * @default 'Select an option...'
   */
  placeholder?: string;

  /**
   * Icon before select
   */
  icon?: ReactNode;

  /**
   * Mark field as required (adds asterisk to label)
   */
  required?: boolean;

  /**
   * Additional CSS classes for wrapper
   */
  wrapperClassName?: string;

  /**
   * Additional CSS classes for select
   */
  className?: string;
}

/**
 * Select Component
 *
 * A customizable dropdown select with label, icons, validation states, and helper text.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   placeholder="Select your country"
 *   options={[
 *     { label: 'United States', value: 'us' },
 *     { label: 'Canada', value: 'ca' },
 *     { label: 'Mexico', value: 'mx' },
 *   ]}
 *   required
 * />
 *
 * <Select
 *   label="Plan"
 *   options={planOptions}
 *   icon={<PlanIcon />}
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      error = false,
      success = false,
      label,
      helperText,
      errorMessage,
      options,
      placeholder = 'Select an option...',
      icon,
      required,
      wrapperClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const hasError = error || !!errorMessage;
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const selectClasses = cn(
      styles.select,
      styles[`select--${size}`],
      {
        [styles['select--error']]: hasError,
        [styles['select--success']]: success && !hasError,
        [styles['select--with-icon']]: icon,
      },
      className
    );

    return (
      <div className={cn(wrapperClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(styles.select__label, {
              [styles['select__label--required']]: required,
            })}
          >
            {label}
          </label>
        )}

        <div className={styles['select-wrapper']}>
          {icon && (
            <span
              className={cn(styles.select__icon, {
                [styles['select__icon--error']]: hasError,
                [styles['select__icon--success']]: success && !hasError,
              })}
            >
              {icon}
            </span>
          )}

          <select
            ref={ref}
            id={selectId}
            className={selectClasses}
            aria-invalid={hasError}
            aria-required={required}
            aria-describedby={
              errorMessage
                ? `${selectId}-error`
                : helperText
                ? `${selectId}-helper`
                : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled className={styles.select__placeholder}>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {errorMessage && (
          <span id={`${selectId}-error`} className={styles.select__error} role="alert">
            {errorMessage}
          </span>
        )}

        {helperText && !errorMessage && (
          <span id={`${selectId}-helper`} className={styles.select__helper}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
