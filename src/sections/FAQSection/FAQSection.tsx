import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { FAQItem, FAQItemProps } from '../../molecules/FAQItem';
import styles from './FAQSection.module.scss';

export interface FAQSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  faqs: FAQItemProps[];
  layout?: 'single' | 'two-column';
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  subtitle,
  faqs,
  layout = 'single',
  className,
  ...props
}) => {
  return (
    <section className={cn(styles.faqSection, styles[`faqSection--${layout}`], className)} {...props}>
      <div className={styles.faqSection__container}>
        <div className={styles.faqSection__header}>
          <h2 className={styles.faqSection__title}>{title}</h2>
          {subtitle && <p className={styles.faqSection__subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.faqSection__content}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

FAQSection.displayName = 'FAQSection';
