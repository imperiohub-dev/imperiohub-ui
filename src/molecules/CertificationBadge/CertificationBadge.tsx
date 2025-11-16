import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './CertificationBadge.module.scss';

export interface CertificationBadgeProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  issuer: string;
  year?: string | number;
  logo?: string;
  verified?: boolean;
  variant?: 'detailed' | 'minimal';
  className?: string;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  name,
  issuer,
  year,
  logo,
  verified = false,
  variant = 'detailed',
  className,
  ...props
}) => {
  const badgeClasses = cn(
    styles.certificationBadge,
    styles[`certificationBadge--${variant}`],
    className
  );

  return (
    <div className={badgeClasses} {...props}>
      {logo && (
        <div className={styles.certificationBadge__logo}>
          <img src={logo} alt={issuer} />
        </div>
      )}
      <div className={styles.certificationBadge__content}>
        <h4 className={styles.certificationBadge__name}>
          {name}
          {verified && (
            <span className={styles.certificationBadge__verified} title="Verified">
              ✓
            </span>
          )}
        </h4>
        <p className={styles.certificationBadge__issuer}>{issuer}</p>
        {year && <p className={styles.certificationBadge__year}>{year}</p>}
      </div>
    </div>
  );
};

CertificationBadge.displayName = 'CertificationBadge';
