import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  clickable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  clickable = false,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.card, clickable && styles['card--clickable'], className)} {...props}>
      {header && <div className={styles.card__header}>{header}</div>}
      <div className={styles.card__body}>{children}</div>
      {footer && <div className={styles.card__footer}>{footer}</div>}
    </div>
  );
};

Card.displayName = 'Card';
