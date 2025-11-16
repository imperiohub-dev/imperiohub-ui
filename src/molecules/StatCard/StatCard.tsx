import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './StatCard.module.scss';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Statistical value to display
   */
  value: string | number;

  /**
   * Label/description of the statistic
   */
  label: string;

  /**
   * Optional icon
   */
  icon?: ReactNode;

  /**
   * Suffix for the value (e.g., "+", "%", "M", "K")
   */
  suffix?: string;

  /**
   * Prefix for the value (e.g., "$", "€")
   */
  prefix?: string;

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: 'default' | 'highlighted' | 'minimal';

  /**
   * Animate counter on mount
   * @default false
   */
  animated?: boolean;

  /**
   * Trend indicator
   */
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * StatCard Component
 *
 * Display important statistics and metrics in an engaging card format.
 * Perfect for showcasing years of experience, cases won, clients served, etc.
 *
 * @example
 * ```tsx
 * // Basic stat
 * <StatCard value={15} label="Years Experience" suffix="+" />
 *
 * // With icon
 * <StatCard
 *   value={500}
 *   label="Cases Won"
 *   suffix="+"
 *   icon={<Icon name="trophy" />}
 *   variant="highlighted"
 * />
 *
 * // With trend
 * <StatCard
 *   value={98}
 *   label="Client Satisfaction"
 *   suffix="%"
 *   trend={{ value: 5, direction: 'up' }}
 * />
 *
 * // Currency
 * <StatCard
 *   value="10M"
 *   label="In Recovered Damages"
 *   prefix="$"
 * />
 * ```
 */
export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  suffix,
  prefix,
  variant = 'default',
  animated = false,
  trend,
  className,
  ...props
}) => {
  const [displayValue, setDisplayValue] = React.useState(animated ? 0 : value);

  React.useEffect(() => {
    if (animated && typeof value === 'number') {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(increment * currentStep));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [value, animated]);

  const statCardClasses = cn(
    styles.statCard,
    styles[`statCard--${variant}`],
    className
  );

  const trendIcon = trend ? (
    <span
      className={cn(
        styles.statCard__trend,
        styles[`statCard__trend--${trend.direction}`]
      )}
    >
      {trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
    </span>
  ) : null;

  return (
    <div className={statCardClasses} {...props}>
      {icon && <div className={styles.statCard__icon}>{icon}</div>}
      <div className={styles.statCard__content}>
        <div className={styles.statCard__value}>
          {prefix && <span className={styles.statCard__prefix}>{prefix}</span>}
          <span className={styles.statCard__number}>{displayValue}</span>
          {suffix && <span className={styles.statCard__suffix}>{suffix}</span>}
        </div>
        <div className={styles.statCard__label}>
          {label}
          {trendIcon}
        </div>
      </div>
    </div>
  );
};

StatCard.displayName = 'StatCard';
