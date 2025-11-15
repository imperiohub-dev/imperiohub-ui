import React, { FormEvent } from 'react';
import { Text } from '../../atoms/Text';
import { Input } from '../../atoms/Input';
import { Textarea } from '../../atoms/Textarea';
import { Button } from '../../atoms/Button';
import { cn } from '../../utils/classnames';
import styles from './Contact.module.scss';

export interface ContactProps {
  title: string;
  subtitle?: string;
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ title, subtitle, onSubmit, className }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <section className={cn(styles.contact, className)}>
      <div className={styles.contact__container}>
        <div className={styles.contact__header}>
          <Text variant="h2">{title}</Text>
          {subtitle && (
            <Text variant="body-lg" color="secondary" style={{ marginTop: 'var(--spacing-md)' }}>
              {subtitle}
            </Text>
          )}
        </div>

        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <Input name="name" label="Full Name" required placeholder="John Doe" />
          <Input name="email" label="Email" type="email" required placeholder="john@example.com" />
          <Input name="phone" label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
          <Textarea name="message" label="Message" required placeholder="Tell us about your needs..." maxLength={500} showCounter />
          <Button type="submit" variant="primary" size="lg" fullWidth>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

Contact.displayName = 'Contact';
