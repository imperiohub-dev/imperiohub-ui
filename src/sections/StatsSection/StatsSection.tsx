import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { StatCard, StatCardProps } from '../../molecules/StatCard';
import styles from './StatsSection.module.scss';

export interface StatsSectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  stats: StatCardProps[];
  layout?: 'horizontal' | 'grid';
  variant?: 'default' | 'minimal' | 'highlighted';
  background?: 'solid' | 'gradient';
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  subtitle,
  stats,
  layout = 'grid',
  variant = 'default',
  background = 'solid',
  className,
  ...props
}) => {
  const sectionClasses = cn(
    styles.statsSection,
    styles[`statsSection--${layout}`],
    styles[`statsSection--${background}`],
    className
  );

  return (
    <section className={sectionClasses} {...props}>
      <div className={styles.statsSection__container}>
        {(title || subtitle) && (
          <div className={styles.statsSection__header}>
            {title && <h2 className={styles.statsSection__title}>{title}</h2>}
            {subtitle && <p className={styles.statsSection__subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.statsSection__grid}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
};

StatsSection.displayName = 'StatsSection';
