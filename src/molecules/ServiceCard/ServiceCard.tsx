import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import { Button, ButtonProps } from '../../atoms/Button';
import styles from './ServiceCard.module.scss';

export interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title: string;
  description: string;
  price?: string | number;
  duration?: string;
  features?: string[];
  cta?: Omit<ButtonProps, 'children'> & { text: string };
  variant?: 'default' | 'highlighted' | 'minimal';
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  duration,
  features = [],
  cta,
  variant = 'default',
  className,
  ...props
}) => {
  const serviceCardClasses = cn(
    styles.serviceCard,
    styles[`serviceCard--${variant}`],
    className
  );

  return (
    <div className={serviceCardClasses} {...props}>
      {icon && <div className={styles.serviceCard__icon}>{icon}</div>}
      <h3 className={styles.serviceCard__title}>{title}</h3>
      <p className={styles.serviceCard__description}>{description}</p>

      {(price || duration) && (
        <div className={styles.serviceCard__pricing}>
          {price && <span className={styles.serviceCard__price}>{price}</span>}
          {duration && <span className={styles.serviceCard__duration}>{duration}</span>}
        </div>
      )}

      {features.length > 0 && (
        <ul className={styles.serviceCard__features}>
          {features.map((feature, index) => (
            <li key={index} className={styles.serviceCard__feature}>
              <span className={styles.serviceCard__checkmark}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {cta && (
        <Button {...cta} className={styles.serviceCard__cta}>
          {cta.text}
        </Button>
      )}
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';
