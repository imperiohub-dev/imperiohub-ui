/**
 * Common Types Used Across Components
 */

export interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type Alignment = 'left' | 'center' | 'right';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: string | number | RegExp;
  message?: string;
  validator?: (value: any) => boolean | Promise<boolean>;
}

export interface FormFieldConfig {
  name: string;
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  options?: Array<{ label: string; value: string | number }>;
}
