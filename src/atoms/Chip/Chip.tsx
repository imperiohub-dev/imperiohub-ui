import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Chip.module.scss';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Chip visual variant
   * @default 'filled'
   */
  variant?: 'filled' | 'outline' | 'subtle';

  /**
   * Chip color theme
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';

  /**
   * Chip size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Show remove/close icon
   * @default false
   */
  removable?: boolean;

  /**
   * Callback when remove icon is clicked
   */
  onRemove?: () => void;

  /**
   * Optional icon before text
   */
  icon?: ReactNode;

  /**
   * Chip content/label
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Clickable chip (makes it interactive)
   */
  clickable?: boolean;
}

/**
 * Chip/Tag Component
 *
 * Small labels for categorization, specialties, tags, and status indicators.
 * Perfect for professional specialties, service categories, and skill tags.
 *
 * @example
 * ```tsx
 * // Basic chip
 * <Chip color="primary">React</Chip>
 *
 * // With icon
 * <Chip icon={<Icon name="check" />} color="success">
 *   Verified
 * </Chip>
 *
 * // Removable tag
 * <Chip removable onRemove={handleRemove}>
 *   JavaScript
 * </Chip>
 *
 * // Clickable chip
 * <Chip clickable onClick={handleClick}>
 *   View More
 * </Chip>
 * ```
 */
export const Chip: React.FC<ChipProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  removable = false,
  onRemove,
  icon,
  children,
  className,
  clickable = false,
  onClick,
  ...props
}) => {
  const chipClasses = cn(
    styles.chip,
    styles[`chip--${variant}`],
    styles[`chip--${color}`],
    styles[`chip--${size}`],
    {
      [styles['chip--removable']]: removable,
      [styles['chip--clickable']]: clickable || onClick,
    },
    className
  );

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (removable && onRemove && (e.key === 'Backspace' || e.key === 'Delete')) {
      e.preventDefault();
      onRemove();
    }
  };

  return (
    <div
      className={chipClasses}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={clickable || onClick ? 'button' : undefined}
      tabIndex={clickable || onClick ? 0 : undefined}
      {...props}
    >
      {icon && <span className={styles.chip__icon}>{icon}</span>}
      <span className={styles.chip__label}>{children}</span>
      {removable && (
        <button
          className={styles.chip__remove}
          onClick={handleRemoveClick}
          aria-label="Remove"
          type="button"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.chip__removeIcon}
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Chip.displayName = 'Chip';
