import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { cn } from '../../utils/classnames';
import styles from './FAQItem.module.scss';

export interface FAQItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Question text
   */
  question: string;

  /**
   * Answer content (can be string or ReactNode)
   */
  answer: string | ReactNode;

  /**
   * Start expanded
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Optional icon
   */
  icon?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * FAQItem Component
 *
 * Accordion-style item for FAQ sections. Expandable/collapsible
 * question and answer display.
 *
 * @example
 * ```tsx
 * <FAQItem
 *   question="What are your hours?"
 *   answer="We're open Monday-Friday, 9am-5pm"
 * />
 *
 * <FAQItem
 *   question="Do you accept insurance?"
 *   answer={
 *     <>
 *       <p>Yes, we accept most major insurance plans.</p>
 *       <p>Contact us for specific details.</p>
 *     </>
 *   }
 *   defaultOpen
 * />
 * ```
 */
export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  defaultOpen = false,
  icon,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen();
    }
  };

  const faqItemClasses = cn(
    styles.faqItem,
    {
      [styles['faqItem--open']]: isOpen,
    },
    className
  );

  return (
    <div className={faqItemClasses} {...props}>
      <button
        className={styles.faqItem__question}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        type="button"
      >
        {icon && <span className={styles.faqItem__icon}>{icon}</span>}
        <span className={styles.faqItem__questionText}>{question}</span>
        <span className={styles.faqItem__toggle}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.faqItem__toggleIcon}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={styles.faqItem__answerWrapper}>
        <div className={styles.faqItem__answer}>
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};

FAQItem.displayName = 'FAQItem';
