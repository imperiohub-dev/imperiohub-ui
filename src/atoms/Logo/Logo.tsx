import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Logo.module.scss';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Logo source (URL or inline SVG string)
   */
  src: string;

  /**
   * Alt text for accessibility
   */
  alt: string;

  /**
   * Logo variant for different backgrounds
   * @default 'color'
   */
  variant?: 'light' | 'dark' | 'color';

  /**
   * Logo size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | number;

  /**
   * Include text alongside logo
   * @default false
   */
  withText?: boolean;

  /**
   * Text to display with logo
   */
  text?: string;

  /**
   * Link URL (makes logo clickable)
   */
  href?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Logo Component
 *
 * Specialized component for displaying brand logos with support for
 * different variants, sizes, and optional text.
 *
 * @example
 * ```tsx
 * // Basic logo
 * <Logo src="/logo.svg" alt="Company Name" />
 *
 * // Logo with text
 * <Logo
 *   src="/logo.svg"
 *   alt="Company"
 *   withText
 *   text="Company Name"
 * />
 *
 * // Clickable logo (link to home)
 * <Logo
 *   src="/logo.svg"
 *   alt="Home"
 *   href="/"
 * />
 *
 * // Different variants for light/dark backgrounds
 * <Logo src="/logo.svg" alt="Logo" variant="dark" />
 * ```
 */
export const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  variant = 'color',
  size = 'md',
  withText = false,
  text,
  href,
  className,
  ...props
}) => {
  const logoClasses = cn(
    styles.logo,
    styles[`logo--${variant}`],
    typeof size === 'string' ? styles[`logo--${size}`] : null,
    {
      [styles['logo--with-text']]: withText && text,
      [styles['logo--clickable']]: href,
    },
    className
  );

  const customSize = typeof size === 'number' ? { '--logo-size': `${size}px` } as React.CSSProperties : undefined;

  const isSVG = src.trim().startsWith('<svg');

  const logoImage = isSVG ? (
    <div
      className={styles.logo__svg}
      dangerouslySetInnerHTML={{ __html: src }}
      aria-label={alt}
      role="img"
    />
  ) : (
    <img
      src={src}
      alt={alt}
      className={styles.logo__image}
    />
  );

  const logoContent = (
    <div className={logoClasses} style={customSize} {...props}>
      <div className={styles.logo__imageWrapper}>
        {logoImage}
      </div>
      {withText && text && (
        <span className={styles.logo__text}>{text}</span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className={styles.logo__link}>
        {logoContent}
      </a>
    );
  }

  return logoContent;
};

Logo.displayName = 'Logo';
