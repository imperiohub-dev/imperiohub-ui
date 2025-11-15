/**
 * Landing Page Builder
 *
 * Builds complete landing pages with navigation and footer
 */

import React from 'react';
import { LandingPageBuilderConfig, ValidationError } from '../types/builder';
import { PageBuilder } from './PageBuilder';
import { Link } from '../atoms/Link';
import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from 'lucide-react';
import styles from './LandingPageBuilder.module.scss';

export interface LandingPageBuilderProps {
  config: LandingPageBuilderConfig;
  onValidationError?: (errors: ValidationError[]) => void;
  strictValidation?: boolean;
}

// Social platform icon mapping
const SOCIAL_ICONS: Record<string, any> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
};

/**
 * Builds a complete landing page with navigation and footer
 *
 * @example
 * ```tsx
 * const landingConfig = {
 *   variant: 'full',
 *   navigation: {
 *     logo: '/logo.svg',
 *     links: [
 *       { label: 'Services', href: '#services' },
 *       { label: 'About', href: '#about' }
 *     ]
 *   },
 *   sections: [...],
 *   footer: {
 *     copyright: '© 2024 Company',
 *     links: [{ label: 'Privacy', href: '/privacy' }],
 *     social: [{ platform: 'linkedin', url: 'https://linkedin.com/...' }]
 *   }
 * };
 *
 * <LandingPageBuilder config={landingConfig} />
 * ```
 */
export const LandingPageBuilder: React.FC<LandingPageBuilderProps> = ({
  config,
  onValidationError,
  strictValidation = false,
}) => {
  const { navigation, footer, variant = 'full' } = config;

  return (
    <div className={`${styles.landingPage} ${styles[variant]}`}>
      {/* Navigation */}
      {navigation && (
        <nav className={styles.navigation}>
          <div className={styles.navigationInner}>
            {navigation.logo && (
              <div className={styles.logo}>
                <img src={navigation.logo} alt="Logo" />
              </div>
            )}

            {navigation.links && navigation.links.length > 0 && (
              <div className={styles.navLinks}>
                {navigation.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    variant="unstyled"
                    className={styles.navLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={styles.main}>
        <PageBuilder
          config={config}
          onValidationError={onValidationError}
          strictValidation={strictValidation}
        />
      </main>

      {/* Footer */}
      {footer && (
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            {/* Footer Links */}
            {footer.links && footer.links.length > 0 && (
              <div className={styles.footerLinks}>
                {footer.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    variant="unstyled"
                    className={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Social Links */}
            {footer.social && footer.social.length > 0 && (
              <div className={styles.socialLinks}>
                {footer.social.map((social, index) => {
                  const IconComponent = SOCIAL_ICONS[social.platform.toLowerCase()];
                  return IconComponent ? (
                    <Link
                      key={index}
                      href={social.url}
                      variant="unstyled"
                      className={styles.socialLink}
                      external
                    >
                      <Icon icon={IconComponent} size="md" />
                    </Link>
                  ) : null;
                })}
              </div>
            )}

            {/* Copyright */}
            {footer.copyright && (
              <div className={styles.copyright}>
                <Text variant="body-sm" color="muted">
                  {footer.copyright}
                </Text>
              </div>
            )}
          </div>
        </footer>
      )}
    </div>
  );
};

LandingPageBuilder.displayName = 'LandingPageBuilder';
