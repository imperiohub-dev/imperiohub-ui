import React, { TextareaHTMLAttributes, forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Textarea.module.scss';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Textarea size
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
   * Helper text below textarea
   */
  helperText?: string;

  /**
   * Error message (shows error state automatically)
   */
  errorMessage?: string;

  /**
   * Mark field as required (adds asterisk to label)
   */
  required?: boolean;

  /**
   * Show character counter
   */
  showCounter?: boolean;

  /**
   * Auto-resize textarea as user types
   */
  autoResize?: boolean;

  /**
   * Disable resizing
   */
  noResize?: boolean;

  /**
   * Additional CSS classes for wrapper
   */
  wrapperClassName?: string;

  /**
   * Additional CSS classes for textarea
   */
  className?: string;
}

/**
 * Textarea Component
 *
 * A versatile textarea field with label, validation states, character counter, and auto-resize.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Message"
 *   placeholder="Enter your message"
 *   required
 *   showCounter
 *   maxLength={500}
 * />
 *
 * <Textarea
 *   label="Description"
 *   autoResize
 *   placeholder="Describe your needs..."
 * />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      error = false,
      success = false,
      label,
      helperText,
      errorMessage,
      required,
      showCounter = false,
      autoResize = false,
      noResize = false,
      wrapperClassName,
      className,
      id,
      maxLength,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const hasError = error || !!errorMessage;
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const [charCount, setCharCount] = useState(0);
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    // Handle auto-resize
    useEffect(() => {
      if (autoResize && internalRef.current) {
        const textarea = internalRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value, autoResize]);

    // Update character count
    useEffect(() => {
      if (showCounter && typeof value === 'string') {
        setCharCount(value.length);
      }
    }, [value, showCounter]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (showCounter) {
        setCharCount(e.target.value.length);
      }
      if (onChange) {
        onChange(e);
      }
    };

    const textareaClasses = cn(
      styles.textarea,
      styles[`textarea--${size}`],
      {
        [styles['textarea--error']]: hasError,
        [styles['textarea--success']]: success && !hasError,
        [styles['textarea--auto-resize']]: autoResize,
        [styles['textarea--no-resize']]: noResize,
      },
      className
    );

    const setRefs = (element: HTMLTextAreaElement | null) => {
      internalRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <div className={cn(wrapperClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(styles.textarea__label, {
              [styles['textarea__label--required']]: required,
            })}
          >
            {label}
          </label>
        )}

        <textarea
          ref={setRefs}
          id={textareaId}
          className={textareaClasses}
          aria-invalid={hasError}
          aria-required={required}
          aria-describedby={
            errorMessage
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...props}
        />

        {errorMessage && (
          <span id={`${textareaId}-error`} className={styles.textarea__error} role="alert">
            {errorMessage}
          </span>
        )}

        {helperText && !errorMessage && (
          <span id={`${textareaId}-helper`} className={styles.textarea__helper}>
            {helperText}
          </span>
        )}

        {showCounter && maxLength && (
          <span
            className={cn(styles.textarea__counter, {
              [styles['textarea__counter--limit-reached']]: charCount >= maxLength,
            })}
          >
            {charCount} / {maxLength}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
