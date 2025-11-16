import React, { HTMLAttributes, ReactNode, useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Tooltip.module.scss';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Tooltip content
   */
  content: string | ReactNode;

  /**
   * Tooltip position relative to trigger
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Trigger behavior
   * @default 'hover'
   */
  trigger?: 'hover' | 'click';

  /**
   * Delay before showing tooltip (ms)
   * @default 200
   */
  delay?: number;

  /**
   * Element that triggers the tooltip
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Disable tooltip
   * @default false
   */
  disabled?: boolean;
}

/**
 * Tooltip Component
 *
 * Display contextual information on hover or click.
 * Perfect for explaining features, showing additional details, or providing help text.
 *
 * @example
 * ```tsx
 * // Basic tooltip
 * <Tooltip content="Click to learn more">
 *   <Button>Info</Button>
 * </Tooltip>
 *
 * // Different positions
 * <Tooltip content="Tooltip text" position="right">
 *   <Icon name="help" />
 * </Tooltip>
 *
 * // Click trigger
 * <Tooltip content="Details here" trigger="click">
 *   <span>Click me</span>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  trigger = 'hover',
  delay = 200,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (disabled) return;

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
        updatePosition();
      }, delay);
    } else {
      setIsVisible(true);
      updatePosition();
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const toggleTooltip = () => {
    if (disabled) return;

    if (isVisible) {
      hideTooltip();
    } else {
      showTooltip();
    }
  };

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const gap = 8;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - gap;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - gap;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + gap;
        break;
    }

    setCoords({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible, position]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipClasses = cn(
    styles.tooltip,
    styles[`tooltip--${position}`],
    {
      [styles['tooltip--visible']]: isVisible,
    },
    className
  );

  const triggerProps = trigger === 'hover'
    ? {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip,
      }
    : {
        onClick: toggleTooltip,
      };

  return (
    <div className={styles.tooltipWrapper} {...props}>
      <div ref={triggerRef} className={styles.tooltipTrigger} {...triggerProps}>
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={tooltipClasses}
          role="tooltip"
          style={{
            position: 'fixed',
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            zIndex: 9999,
          }}
        >
          <div className={styles.tooltip__content}>{content}</div>
          <div className={styles.tooltip__arrow} />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
