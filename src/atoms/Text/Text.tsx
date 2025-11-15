import React, { HTMLAttributes, ElementType, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Text.module.scss';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'overline';

export type TextAlign = 'left' | 'center' | 'right';

export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'brand'
  | 'error'
  | 'success'
  | 'warning';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * Text variant/style
   * @default 'body'
   */
  variant?: TextVariant;

  /**
   * HTML element to render
   * Auto-selects based on variant if not specified
   */
  as?: ElementType;

  /**
   * Text alignment
   */
  align?: TextAlign;

  /**
   * Font weight
   */
  weight?: TextWeight;

  /**
   * Text color
   */
  color?: TextColor;

  /**
   * Apply gradient color
   */
  gradient?: boolean;

  /**
   * Truncate text with ellipsis
   */
  truncate?: boolean;

  /**
   * Text content
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

const variantElementMap: Record<TextVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'label',
  overline: 'span',
};

/**
 * Text Component
 *
 * A versatile typography component with multiple variants, alignments, weights, and colors.
 * Automatically selects the appropriate HTML element based on variant.
 * Fully responsive and accessible.
 *
 * @example
 * ```tsx
 * <Text variant="h1">Main Heading</Text>
 *
 * <Text variant="body" align="center">
 *   Centered body text
 * </Text>
 *
 * <Text variant="h2" gradient>
 *   Gradient Heading
 * </Text>
 *
 * <Text variant="caption" color="secondary">
 *   Secondary caption text
 * </Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as,
  align,
  weight,
  color,
  gradient = false,
  truncate = false,
  children,
  className,
  ...props
}) => {
  const Component = as || variantElementMap[variant];

  const textClasses = cn(
    styles.text,
    styles[`text--${variant}`],
    {
      [styles[`text--${align}`]]: align,
      [styles[`text--${weight}`]]: weight,
      [styles[`text--${color}`]]: color,
      [styles['text--gradient']]: gradient,
      [styles['text--truncate']]: truncate,
    },
    className
  );

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = 'Text';
