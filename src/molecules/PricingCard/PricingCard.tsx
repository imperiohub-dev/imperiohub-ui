import React from 'react';
import { Card, CardProps } from '../Card';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';
import { Icon, Check } from '../../atoms/Icon';
import { cn } from '../../utils/classnames';
import styles from './PricingCard.module.scss';

export interface PricingCardProps extends Omit<CardProps, 'header' | 'footer' | 'children'> {
  title: string;
  price: string | number;
  period?: string;
  description?: string;
  features: string[];
  ctaText: string;
  onCtaClick?: () => void;
  featured?: boolean;
  badge?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = '/mo',
  description,
  features,
  ctaText,
  onCtaClick,
  featured = false,
  badge,
  className,
  ...props
}) => {
  return (
    <Card
      className={cn(styles['pricing-card'], { [styles['pricing-card--featured']]: featured }, className)}
      {...props}
    >
      <div style={{ position: 'relative' }}>
        {badge && (
          <div className={styles['pricing-card__badge']}>
            <Badge variant="success" size="sm">{badge}</Badge>
          </div>
        )}

        <Text variant="h3">{title}</Text>
        {description && <Text variant="body-sm" color="secondary">{description}</Text>}

        <div className={styles['pricing-card__price']}>
          ${price}<Text as="span" variant="body" color="secondary">{period}</Text>
        </div>

        <ul className={styles['pricing-card__features']}>
          {features.map((feature, index) => (
            <li key={index}>
              <Icon icon={Check} size="sm" color="success" />
              <Text variant="body-sm">{feature}</Text>
            </li>
          ))}
        </ul>

        <Button
          variant={featured ? 'primary' : 'outline'}
          fullWidth
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  );
};

PricingCard.displayName = 'PricingCard';
