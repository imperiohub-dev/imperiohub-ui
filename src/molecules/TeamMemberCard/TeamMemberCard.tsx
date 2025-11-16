import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { Avatar } from '../../atoms/Avatar';
import { Chip } from '../../atoms/Chip';
import { Rating } from '../../atoms/Rating';
import { IconButton } from '../../atoms/IconButton';
import styles from './TeamMemberCard.module.scss';

export interface TeamMemberCardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  role: string;
  bio?: string;
  specialties?: string[];
  social?: { platform: string; url: string; icon?: React.ReactNode }[];
  credentials?: string[];
  rating?: number;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  role,
  bio,
  specialties = [],
  social = [],
  credentials = [],
  rating,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.teamMemberCard, className)} {...props}>
      <Avatar src={image} alt={name} size="xl" className={styles.teamMemberCard__avatar} />
      <div className={styles.teamMemberCard__content}>
        <h3 className={styles.teamMemberCard__name}>{name}</h3>
        <p className={styles.teamMemberCard__role}>{role}</p>
        {rating && <Rating value={rating} readonly size="sm" className={styles.teamMemberCard__rating} />}
        {bio && <p className={styles.teamMemberCard__bio}>{bio}</p>}
        {specialties.length > 0 && (
          <div className={styles.teamMemberCard__specialties}>
            {specialties.map((specialty, i) => (
              <Chip key={i} size="sm" variant="subtle" color="primary">{specialty}</Chip>
            ))}
          </div>
        )}
        {credentials.length > 0 && (
          <ul className={styles.teamMemberCard__credentials}>
            {credentials.map((cred, i) => (
              <li key={i}>{cred}</li>
            ))}
          </ul>
        )}
        {social.length > 0 && (
          <div className={styles.teamMemberCard__social}>
            {social.map((s, i) => (
              <IconButton
                key={i}
                icon={s.icon || <span>{s.platform[0]}</span>}
                variant="ghost"
                size="sm"
                aria-label={s.platform}
                onClick={() => window.open(s.url, '_blank')}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

TeamMemberCard.displayName = 'TeamMemberCard';
