import React, { ReactElement } from 'react';
import { cn } from '../../utils/classnames';
import { Input, InputProps } from '../../atoms/Input';
import { Textarea, TextareaProps } from '../../atoms/Textarea';
import { Select, SelectProps } from '../../atoms/Select';
import styles from './FormField.module.scss';

export interface FormFieldProps {
  /**
   * Type of form field
   */
  type?: 'input' | 'textarea' | 'select';

  /**
   * Props for the underlying component
   */
  fieldProps: InputProps | TextareaProps | SelectProps;

  /**
   * Display inline (label and field side by side)
   */
  inline?: boolean;

  /**
   * Additional CSS classes for wrapper
   */
  className?: string;
}

/**
 * FormField Molecule
 *
 * A complete form field wrapper that combines atoms with consistent styling.
 * Handles Input, Textarea, and Select components with unified API.
 *
 * @example
 * ```tsx
 * <FormField
 *   type="input"
 *   fieldProps={{
 *     label: 'Email',
 *     type: 'email',
 *     placeholder: 'Enter your email',
 *     required: true
 *   }}
 * />
 *
 * <FormField
 *   type="textarea"
 *   fieldProps={{
 *     label: 'Message',
 *     placeholder: 'Your message...',
 *     maxLength: 500,
 *     showCounter: true
 *   }}
 * />
 * ```
 */
export const FormField: React.FC<FormFieldProps> = ({
  type = 'input',
  fieldProps,
  inline = false,
  className,
}) => {
  const wrapperClasses = cn(
    styles['form-field'],
    { [styles['form-field--inline']]: inline },
    className
  );

  const renderField = (): ReactElement => {
    switch (type) {
      case 'textarea':
        return <Textarea {...(fieldProps as TextareaProps)} />;
      case 'select':
        return <Select {...(fieldProps as SelectProps)} />;
      case 'input':
      default:
        return <Input {...(fieldProps as InputProps)} />;
    }
  };

  return <div className={wrapperClasses}>{renderField()}</div>;
};

FormField.displayName = 'FormField';
