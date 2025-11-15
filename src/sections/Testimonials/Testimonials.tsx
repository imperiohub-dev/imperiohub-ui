import React from 'react';
import { Text } from '../../atoms/Text';
import { TestimonialCard, TestimonialCardProps } from '../../molecules/TestimonialCard';
import { cn } from '../../utils/classnames';
import styles from './Testimonials.module.scss';

export interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: TestimonialCardProps[];
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ title, subtitle, testimonials, className }) => {
  return (
    <section className={cn(styles.testimonials, className)}>
      <div className={styles.testimonials__header}>
        <Text variant="h2">{title}</Text>
        {subtitle && (
          <Text variant="body-lg" color="secondary" style={{ marginTop: 'var(--spacing-md)' }}>
            {subtitle}
          </Text>
        )}
      </div>

      <div className={styles.testimonials__grid}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

Testimonials.displayName = 'Testimonials';
