import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { ProcessStep, ProcessStepProps } from '../../molecules/ProcessStep';
import styles from './ProcessSection.module.scss';

export interface ProcessSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  steps: ProcessStepProps[];
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  subtitle,
  steps,
  layout = 'vertical',
  className,
  ...props
}) => {
  return (
    <section className={cn(styles.processSection, styles[`processSection--${layout}`], className)} {...props}>
      <div className={styles.processSection__container}>
        <div className={styles.processSection__header}>
          <h2 className={styles.processSection__title}>{title}</h2>
          {subtitle && <p className={styles.processSection__subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.processSection__steps}>
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

ProcessSection.displayName = 'ProcessSection';
