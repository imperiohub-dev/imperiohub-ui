import React, { HTMLAttributes } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Image } from '../../atoms/Image';
import { cn } from '../../utils/classnames';
import styles from './Hero.module.scss';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /**
   * Main heading
   */
  title: string;

  /**
   * Subtitle/description
   */
  subtitle: string;

  /**
   * Primary CTA button
   */
  primaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };

  /**
   * Secondary CTA button
   */
  secondaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };

  /**
   * Hero image
   */
  image?: {
    src: string;
    alt: string;
  };

  /**
   * Layout variant
   * @default 'split'
   */
  variant?: 'centered' | 'split';

  /**
   * Apply gradient to title
   */
  gradientTitle?: boolean;

  className?: string;
}

/**
 * Hero Section
 *
 * Main landing section with title, description, CTAs, and optional image.
 * Fully responsive with centered or split layout variants.
 *
 * @example
 * ```tsx
 * <Hero
 *   title="Transform Your Legal Practice"
 *   subtitle="Get expert legal consultation from anywhere"
 *   primaryCta={{ text: 'Get Started', href: '/contact' }}
 *   secondaryCta={{ text: 'Learn More', href: '/about' }}
 *   image={{ src: '/hero.jpg', alt: 'Legal consultation' }}
 * />
 * ```
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  variant = 'split',
  gradientTitle = false,
  className,
  ...props
}) => {
  const isSplit = variant === 'split' && image;

  return (
    <section className={cn(styles.hero, className)} {...props}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <Text variant="h1" gradient={gradientTitle} align={!isSplit ? 'center' : undefined}>
            {title}
          </Text>

          <Text
            variant="body-lg"
            color="secondary"
            className={styles.hero__subtitle}
            align={!isSplit ? 'center' : undefined}
          >
            {subtitle}
          </Text>

          {(primaryCta || secondaryCta) && (
            <div className={styles.hero__cta_group}>
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={primaryCta.onClick}
                  as={primaryCta.href ? 'a' : undefined}
                  href={primaryCta.href}
                >
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={secondaryCta.onClick}
                  as={secondaryCta.href ? 'a' : undefined}
                  href={secondaryCta.href}
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>

        {image && isSplit && (
          <div>
            <Image
              src={image.src}
              alt={image.alt}
              className={styles.hero__image}
              objectFit="cover"
              rounded="lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
