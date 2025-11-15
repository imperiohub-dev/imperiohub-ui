import React from 'react';
import { Card } from '../Card';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { Icon, Star } from '../../atoms/Icon';
import styles from './TestimonialCard.module.scss';

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  authorAvatar,
  rating,
  className,
}) => {
  return (
    <Card className={className}>
      {rating && (
        <div className={styles['testimonial-card__rating']}>
          {Array.from({ length: rating }).map((_, i) => (
            <Icon key={i} icon={Star} size="sm" color="warning" />
          ))}
        </div>
      )}

      <Text variant="body-lg" className={styles['testimonial-card__quote']}>
        "{quote}"
      </Text>

      <div className={styles['testimonial-card__author']}>
        <Avatar src={authorAvatar} initials={authorName.charAt(0)} size="md" />
        <div>
          <Text variant="label">{authorName}</Text>
          {authorRole && <Text variant="caption">{authorRole}</Text>}
        </div>
      </div>
    </Card>
  );
};

TestimonialCard.displayName = 'TestimonialCard';
