import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { Logo } from '../../atoms/Logo';
import styles from './SocialProof.module.scss';

export interface SocialProofItem {
  logo: string;
  name: string;
}

export interface SocialProofProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'clients' | 'certifications' | 'awards' | 'media';
  items: SocialProofItem[];
  variant?: 'logos' | 'cards' | 'minimal';
  scrollable?: boolean;
  className?: string;
}

export const SocialProof: React.FC<SocialProofProps> = ({
  type = 'clients',
  items,
  variant = 'logos',
  scrollable = false,
  className,
  ...props
}) => {
  const socialProofClasses = cn(
    styles.socialProof,
    styles[`socialProof--${variant}`],
    {
      [styles['socialProof--scrollable']]: scrollable,
    },
    className
  );

  return (
    <div className={socialProofClasses} {...props}>
      <div className={styles.socialProof__grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.socialProof__item}>
            <Logo
              src={item.logo}
              alt={item.name}
              size="sm"
              variant="color"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

SocialProof.displayName = 'SocialProof';
