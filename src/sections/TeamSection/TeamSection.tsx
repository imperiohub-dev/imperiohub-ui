import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { TeamMemberCard, TeamMemberCardProps } from '../../molecules/TeamMemberCard';
import styles from './TeamSection.module.scss';

export interface TeamSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  members: TeamMemberCardProps[];
  className?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  subtitle,
  members,
  className,
  ...props
}) => {
  return (
    <section className={cn(styles.teamSection, className)} {...props}>
      <div className={styles.teamSection__container}>
        <div className={styles.teamSection__header}>
          <h2 className={styles.teamSection__title}>{title}</h2>
          {subtitle && <p className={styles.teamSection__subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.teamSection__grid}>
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

TeamSection.displayName = 'TeamSection';
