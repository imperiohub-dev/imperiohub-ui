import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './LocationCard.module.scss';

export interface LocationCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  hours?: { day: string; hours: string }[];
  mapUrl?: string;
  image?: string;
  className?: string;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  name,
  address,
  phone,
  email,
  hours = [],
  mapUrl,
  image,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.locationCard, className)} {...props}>
      {image && (
        <div className={styles.locationCard__image}>
          <img src={image} alt={name} />
        </div>
      )}
      <div className={styles.locationCard__content}>
        <h3 className={styles.locationCard__name}>{name}</h3>
        <p className={styles.locationCard__address}>{address}</p>
        {phone && <p className={styles.locationCard__phone}><strong>Phone:</strong> {phone}</p>}
        {email && <p className={styles.locationCard__email}><strong>Email:</strong> {email}</p>}
        {hours.length > 0 && (
          <div className={styles.locationCard__hours}>
            <strong>Hours:</strong>
            <ul>
              {hours.map((h, i) => (
                <li key={i}>{h.day}: {h.hours}</li>
              ))}
            </ul>
          </div>
        )}
        {mapUrl && (
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.locationCard__map}>
            View on Map →
          </a>
        )}
      </div>
    </div>
  );
};

LocationCard.displayName = 'LocationCard';
