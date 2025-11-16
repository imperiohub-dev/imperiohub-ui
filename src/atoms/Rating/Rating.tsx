import React, { HTMLAttributes, useState } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Rating.module.scss';

export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Rating value (0-max)
   * @default 0
   */
  value?: number;

  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;

  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Custom color for filled stars (CSS custom property)
   */
  color?: string;

  /**
   * Read-only mode (non-interactive)
   * @default true
   */
  readonly?: boolean;

  /**
   * Show half stars
   * @default true
   */
  precision?: 'full' | 'half';

  /**
   * Callback when rating changes (interactive mode)
   */
  onChange?: (value: number) => void;

  /**
   * Show numeric value label
   * @default false
   */
  showLabel?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Rating Component
 *
 * Display star ratings for testimonials, reviews, and service quality.
 * Supports both read-only display and interactive selection.
 *
 * @example
 * ```tsx
 * // Read-only display
 * <Rating value={4.5} readonly />
 *
 * // Interactive rating
 * <Rating value={rating} readonly={false} onChange={setRating} />
 *
 * // With label
 * <Rating value={4.8} showLabel />
 * ```
 */
export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  size = 'md',
  color,
  readonly = true,
  precision = 'half',
  onChange,
  showLabel = false,
  className,
  ...props
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue !== null ? hoverValue : value;
  const clampedValue = Math.max(0, Math.min(displayValue, max));

  const handleClick = (starValue: number) => {
    if (!readonly && onChange) {
      onChange(starValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (!readonly) {
      setHoverValue(starValue);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(null);
    }
  };

  const getStarFillPercentage = (starIndex: number): number => {
    const starValue = starIndex + 1;
    if (clampedValue >= starValue) {
      return 100;
    }
    if (clampedValue > starIndex && clampedValue < starValue) {
      return (clampedValue - starIndex) * 100;
    }
    return 0;
  };

  const ratingClasses = cn(
    styles.rating,
    styles[`rating--${size}`],
    {
      [styles['rating--interactive']]: !readonly,
    },
    className
  );

  const stars = Array.from({ length: max }, (_, index) => {
    const fillPercentage = getStarFillPercentage(index);
    const starValue = precision === 'half' ? index + 0.5 : index + 1;
    const fullStarValue = index + 1;

    return (
      <span
        key={index}
        className={styles.rating__star}
        onClick={() => handleClick(fullStarValue)}
        onMouseEnter={() => handleMouseEnter(fullStarValue)}
        onMouseLeave={handleMouseLeave}
        role={readonly ? 'presentation' : 'button'}
        aria-label={readonly ? undefined : `Rate ${fullStarValue} out of ${max}`}
        tabIndex={readonly ? undefined : 0}
        onKeyDown={(e) => {
          if (!readonly && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick(fullStarValue);
          }
        }}
      >
        <svg
          className={styles.rating__starIcon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={color ? { '--rating-color': color } as React.CSSProperties : undefined}
        >
          <defs>
            <linearGradient id={`star-gradient-${index}`}>
              <stop offset={`${fillPercentage}%`} stopColor="currentColor" />
              <stop offset={`${fillPercentage}%`} stopColor="var(--color-neutral-300)" />
            </linearGradient>
          </defs>
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={`url(#star-gradient-${index})`}
            className={styles.rating__starPath}
          />
        </svg>
      </span>
    );
  });

  return (
    <div className={ratingClasses} {...props}>
      <div
        className={styles.rating__stars}
        role="img"
        aria-label={`Rating: ${clampedValue} out of ${max} stars`}
      >
        {stars}
      </div>
      {showLabel && (
        <span className={styles.rating__label}>
          {clampedValue.toFixed(1)}
        </span>
      )}
    </div>
  );
};

Rating.displayName = 'Rating';
