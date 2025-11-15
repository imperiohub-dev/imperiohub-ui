import React, { ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';
import styles from './Image.module.scss';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: 'cover' | 'contain';
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'none';
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  objectFit,
  rounded = 'none',
  className,
  alt,
  ...props
}) => {
  const imageClasses = cn(
    styles.image,
    {
      [styles[`image--${objectFit}`]]: objectFit,
      [styles[`image--rounded-${rounded}`]]: rounded !== 'none',
    },
    className
  );

  return <img className={imageClasses} alt={alt} {...props} />;
};

Image.displayName = 'Image';
