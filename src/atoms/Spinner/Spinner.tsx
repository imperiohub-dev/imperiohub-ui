import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Spinner.module.scss';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className, ...props }) => {
  const spinnerClasses = cn(styles.spinner, styles[`spinner--${size}`], className);

  return <div className={spinnerClasses} role="status" aria-label="Loading" {...props} />;
};

Spinner.displayName = 'Spinner';
