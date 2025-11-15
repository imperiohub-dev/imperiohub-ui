import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Radio.module.scss';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Radio size
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
   * Additional CSS classes for wrapper
   */
  wrapperClassName?: string;

  /**
   * Additional CSS classes for input
   */
  className?: string;
}

/**
 * Radio Component
 *
 * A customizable radio button with label, description, and error states.
 * Used for single-selection from multiple options.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Radio name="plan" value="basic" label="Basic Plan" />
 * <Radio name="plan" value="pro" label="Pro Plan" />
 *
 * <Radio
 *   name="payment"
 *   value="card"
 *   label="Credit Card"
 *   description="Pay securely with your credit or debit card"
 * />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      label,
      description,
      error = false,
      errorMessage,
      wrapperClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const hasError = error || !!errorMessage;
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn(wrapperClassName)}>
        <label className={styles.radio}>
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={cn(styles.radio__input, className)}
            aria-invalid={hasError}
            aria-describedby={
              errorMessage
                ? `${radioId}-error`
                : description
                ? `${radioId}-description`
                : undefined
            }
            {...props}
          />

          <span className={cn(styles.radio__button, styles[`radio__button--${size}`])} />

          {(label || description) && (
            <span className={styles.radio__label_wrapper}>
              {label && <span className={styles.radio__label}>{label}</span>}
              {description && (
                <span id={`${radioId}-description`} className={styles.radio__description}>
                  {description}
                </span>
              )}
            </span>
          )}
        </label>

        {errorMessage && (
          <span id={`${radioId}-error`} className={styles.radio__error} role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
