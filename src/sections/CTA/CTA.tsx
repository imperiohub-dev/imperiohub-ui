import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { cn } from '../../utils/classnames';
import styles from './CTA.module.scss';

export interface CTAProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({ title, description, primaryCta, secondaryCta, className }) => {
  return (
    <section className={cn(styles.cta, className)}>
      <div className={styles.cta__container}>
        <Text variant="h2" style={{ color: 'white' }}>
          {title}
        </Text>
        <Text variant="body-lg" style={{ color: 'rgba(255,255,255,0.9)', marginTop: 'var(--spacing-md)' }}>
          {description}
        </Text>

        <div className={styles.cta__buttons}>
          <Button variant="secondary" size="lg" onClick={primaryCta.onClick} as={primaryCta.href ? 'a' : undefined} href={primaryCta.href}>
            {primaryCta.text}
          </Button>
          {secondaryCta && (
            <Button variant="ghost" size="lg" onClick={secondaryCta.onClick} as={secondaryCta.href ? 'a' : undefined} href={secondaryCta.href} style={{ color: 'white', borderColor: 'white' }}>
              {secondaryCta.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
