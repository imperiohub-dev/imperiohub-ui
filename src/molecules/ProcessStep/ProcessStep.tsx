import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './ProcessStep.module.scss';

export interface ProcessStepProps extends HTMLAttributes<HTMLDivElement> {
  number: number | string;
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: 'numbered' | 'icon' | 'minimal';
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  variant = 'numbered',
  className,
  ...props
}) => {
  const processStepClasses = cn(
    styles.processStep,
    styles[`processStep--${variant}`],
    className
  );

  return (
    <div className={processStepClasses} {...props}>
      <div className={styles.processStep__indicator}>
        {variant === 'icon' && icon ? (
          <div className={styles.processStep__icon}>{icon}</div>
        ) : (
          <div className={styles.processStep__number}>{number}</div>
        )}
      </div>
      <div className={styles.processStep__content}>
        <h3 className={styles.processStep__title}>{title}</h3>
        <p className={styles.processStep__description}>{description}</p>
      </div>
    </div>
  );
};

ProcessStep.displayName = 'ProcessStep';
