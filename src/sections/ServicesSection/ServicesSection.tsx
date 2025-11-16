import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { ServiceCard, ServiceCardProps } from '../../molecules/ServiceCard';
import styles from './ServicesSection.module.scss';

export interface ServicesSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  services: ServiceCardProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  subtitle,
  services,
  columns = 3,
  className,
  ...props
}) => {
  return (
    <section className={cn(styles.servicesSection, className)} {...props}>
      <div className={styles.servicesSection__container}>
        <div className={styles.servicesSection__header}>
          <h2 className={styles.servicesSection__title}>{title}</h2>
          {subtitle && <p className={styles.servicesSection__subtitle}>{subtitle}</p>}
        </div>
        <div className={cn(styles.servicesSection__grid, styles[`servicesSection__grid--${columns}`])}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesSection.displayName = 'ServicesSection';
