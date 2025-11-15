/**
 * Form Validation Utilities
 */

import { ValidationRule } from '../types/common';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

export const validateMinLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const validateMaxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const validatePattern = (value: string, pattern: RegExp): boolean => {
  return pattern.test(value);
};

export const validateField = async (
  value: any,
  rules: ValidationRule[]
): Promise<{ valid: boolean; message?: string }> => {
  for (const rule of rules) {
    let isValid = true;

    switch (rule.type) {
      case 'required':
        isValid = validateRequired(value);
        break;
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'minLength':
        isValid = validateMinLength(value, rule.value as number);
        break;
      case 'maxLength':
        isValid = validateMaxLength(value, rule.value as number);
        break;
      case 'pattern':
        isValid = validatePattern(value, rule.value as RegExp);
        break;
      case 'custom':
        if (rule.validator) {
          isValid = await rule.validator(value);
        }
        break;
    }

    if (!isValid) {
      return {
        valid: false,
        message: rule.message || `Validation failed for ${rule.type}`,
      };
    }
  }

  return { valid: true };
};
