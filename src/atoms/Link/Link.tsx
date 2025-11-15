import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Link.module.scss';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: boolean;
  children: ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ underline = false, children, className, ...props }) => {
  const linkClasses = cn(
    styles.link,
    { [styles['link--underline']]: underline },
    className
  );

  return (
    <a className={linkClasses} {...props}>
      {children}
    </a>
  );
};

Link.displayName = 'Link';
