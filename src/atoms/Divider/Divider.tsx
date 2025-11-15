import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Divider.module.scss';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className,
  ...props
}) => {
  const dividerClasses = cn(styles.divider, styles[`divider--${orientation}`], className);

  return <hr className={dividerClasses} {...props} />;
};

Divider.displayName = 'Divider';
