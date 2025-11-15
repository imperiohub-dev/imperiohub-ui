import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Badge.module.scss';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const badgeClasses = cn(
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    className
  );

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
