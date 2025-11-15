import React from 'react';
import { Text } from '../../atoms/Text';
import { PricingCard, PricingCardProps } from '../../molecules/PricingCard';
import { cn } from '../../utils/classnames';
import styles from './Pricing.module.scss';

export interface PricingProps {
  title: string;
  subtitle?: string;
  plans: PricingCardProps[];
  className?: string;
}

export const Pricing: React.FC<PricingProps> = ({ title, subtitle, plans, className }) => {
  return (
    <section className={cn(styles.pricing, className)}>
      <div className={styles.pricing__header}>
        <Text variant="h2">{title}</Text>
        {subtitle && (
          <Text variant="body-lg" color="secondary" style={{ marginTop: 'var(--spacing-md)' }}>
            {subtitle}
          </Text>
        )}
      </div>

      <div className={styles.pricing__grid}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

Pricing.displayName = 'Pricing';
