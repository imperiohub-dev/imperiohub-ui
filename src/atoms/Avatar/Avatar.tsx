import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Avatar.module.scss';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  className,
  ...props
}) => {
  const avatarClasses = cn(styles.avatar, styles[`avatar--${size}`], className);

  return (
    <div className={avatarClasses} {...props}>
      {src ? <img src={src} alt={alt} /> : <span>{initials}</span>}
    </div>
  );
};

Avatar.displayName = 'Avatar';
