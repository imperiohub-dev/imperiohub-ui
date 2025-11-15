import React, { InputHTMLAttributes, forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Checkbox size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Label text
   */
  label?: string;

  /**
   * Description text (shown below label)
   */
  description?: string;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Error message
   */
  errorMessage?: string;

  /**
   * Indeterminate state (for "select all" checkboxes)
   */
  indeterminate?: boolean;

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
 * Checkbox Component
 *
 * A customizable checkbox with label, description, and error states.
 * Supports indeterminate state for "select all" functionality.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms and conditions" required />
 *
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   description="Get weekly updates and exclusive offers"
 * />
 *
 * <Checkbox
 *   label="Select all"
 *   indeterminate={someSelected}
 *   checked={allSelected}
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      description,
      error = false,
      errorMessage,
      indeterminate = false,
      wrapperClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const hasError = error || !!errorMessage;
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const internalRef = useRef<HTMLInputElement | null>(null);

    // Handle indeterminate state
    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = (element: HTMLInputElement | null) => {
      internalRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <div className={cn(wrapperClassName)}>
        <label className={styles.checkbox}>
          <input
            ref={setRefs}
            type="checkbox"
            id={checkboxId}
            className={cn(styles.checkbox__input, className)}
            aria-invalid={hasError}
            aria-describedby={
              errorMessage
                ? `${checkboxId}-error`
                : description
                ? `${checkboxId}-description`
                : undefined
            }
            {...props}
          />

          <span className={cn(styles.checkbox__box, styles[`checkbox__box--${size}`])} />

          {(label || description) && (
            <span className={styles.checkbox__label_wrapper}>
              {label && <span className={styles.checkbox__label}>{label}</span>}
              {description && (
                <span id={`${checkboxId}-description`} className={styles.checkbox__description}>
                  {description}
                </span>
              )}
            </span>
          )}
        </label>

        {errorMessage && (
          <span id={`${checkboxId}-error`} className={styles.checkbox__error} role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
