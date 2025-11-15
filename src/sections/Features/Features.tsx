import React from 'react';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/classnames';
import styles from './Features.module.scss';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

export const Features: React.FC<FeaturesProps> = ({ title, subtitle, features, className }) => {
  return (
    <section className={cn(styles.features, className)}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 var(--spacing-lg)' }}>
        <div className={styles.features__header}>
          <Text variant="h2">{title}</Text>
          {subtitle && (
            <Text variant="body-lg" color="secondary" style={{ marginTop: 'var(--spacing-md)' }}>
              {subtitle}
            </Text>
          )}
        </div>

        <div className={styles.features__grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature__item}>
              <div className={styles.feature__icon}>
                <Icon icon={feature.icon} size="xl" />
              </div>
              <Text variant="h4">{feature.title}</Text>
              <Text variant="body" color="secondary">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Features.displayName = 'Features';
