import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import { Chip } from '../../atoms/Chip';
import styles from './PortfolioItem.module.scss';

export interface PortfolioItemProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  category: string;
  description?: string;
  tags?: string[];
  link?: string;
  overlay?: boolean;
  className?: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  category,
  description,
  tags = [],
  link,
  overlay = true,
  className,
  ...props
}) => {
  const ItemWrapper = link ? 'a' : 'div';
  const wrapperProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <ItemWrapper
      className={cn(styles.portfolioItem, { [styles['portfolioItem--overlay']]: overlay }, className)}
      {...wrapperProps}
      {...props}
    >
      <div className={styles.portfolioItem__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.portfolioItem__content}>
        <span className={styles.portfolioItem__category}>{category}</span>
        <h3 className={styles.portfolioItem__title}>{title}</h3>
        {description && <p className={styles.portfolioItem__description}>{description}</p>}
        {tags.length > 0 && (
          <div className={styles.portfolioItem__tags}>
            {tags.map((tag, i) => (
              <Chip key={i} size="sm" variant="subtle">{tag}</Chip>
            ))}
          </div>
        )}
      </div>
    </ItemWrapper>
  );
};

PortfolioItem.displayName = 'PortfolioItem';
