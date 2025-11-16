import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Progress.module.scss';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Progress value (0-100)
   * @default 0
   */
  value?: number;

  /**
   * Progress variant
   * @default 'linear'
   */
  variant?: 'linear' | 'circular';

  /**
   * Size of progress indicator
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Custom color (CSS custom property)
   */
  color?: string;

  /**
   * Show percentage label
   * @default false
   */
  showLabel?: boolean;

  /**
   * Label text (overrides percentage)
   */
  label?: string;

  /**
   * Indeterminate/loading state
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Progress Component
 *
 * Visual indicator of progress, completion, or skill level.
 * Supports both linear bars and circular indicators.
 *
 * @example
 * ```tsx
 * // Linear progress bar
 * <Progress value={75} />
 *
 * // With label
 * <Progress value={80} showLabel />
 *
 * // Circular progress
 * <Progress value={65} variant="circular" size="lg" />
 *
 * // Skill indicator
 * <Progress value={90} label="React" color="var(--color-primary)" />
 *
 * // Loading state
 * <Progress indeterminate />
 * ```
 */
export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  variant = 'linear',
  size = 'md',
  color,
  showLabel = false,
  label,
  indeterminate = false,
  className,
  ...props
}) => {
  const clampedValue = Math.max(0, Math.min(value, 100));
  const displayLabel = label || `${Math.round(clampedValue)}%`;

  const progressClasses = cn(
    styles.progress,
    styles[`progress--${variant}`],
    styles[`progress--${size}`],
    {
      [styles['progress--indeterminate']]: indeterminate,
      [styles['progress--with-label']]: showLabel || label,
    },
    className
  );

  const customStyle = color ? ({ '--progress-color': color } as React.CSSProperties) : undefined;

  if (variant === 'circular') {
    const radius = size === 'sm' ? 18 : size === 'md' ? 24 : 32;
    const strokeWidth = size === 'sm' ? 3 : size === 'md' ? 4 : 5;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = indeterminate ? 0 : circumference - (clampedValue / 100) * circumference;
    const svgSize = radius * 2;

    return (
      <div className={progressClasses} style={customStyle} role="progressbar" aria-valuenow={clampedValue} aria-valuemin={0} aria-valuemax={100} {...props}>
        <svg className={styles.progress__circular} width={svgSize} height={svgSize}>
          <circle
            className={styles.progress__circularTrack}
            stroke="var(--color-neutral-200)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className={styles.progress__circularFill}
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
        </svg>
        {(showLabel || label) && (
          <span className={styles.progress__label}>{displayLabel}</span>
        )}
      </div>
    );
  }

  // Linear variant
  return (
    <div className={progressClasses} style={customStyle} role="progressbar" aria-valuenow={clampedValue} aria-valuemin={0} aria-valuemax={100} {...props}>
      <div className={styles.progress__track}>
        <div
          className={styles.progress__fill}
          style={{ width: indeterminate ? '30%' : `${clampedValue}%` }}
        />
      </div>
      {(showLabel || label) && (
        <span className={styles.progress__label}>{displayLabel}</span>
      )}
    </div>
  );
};

Progress.displayName = 'Progress';
