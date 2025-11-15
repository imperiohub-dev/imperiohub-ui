/**
 * Page Builder
 *
 * Builds complete pages from configuration
 */

import React, { useEffect, useMemo } from 'react';
import { PageConfig, BuilderContext, ValidationError } from '../types/builder';
import { SectionBuilder } from './SectionBuilder';
import { validatePageConfig } from './utils/validation';
import { resolveIcon } from './utils/iconResolver';
import styles from './PageBuilder.module.scss';

export interface PageBuilderProps {
  config: PageConfig;
  onValidationError?: (errors: ValidationError[]) => void;
  strictValidation?: boolean;
}

/**
 * Builds a complete page from configuration
 *
 * @example
 * ```tsx
 * const pageConfig = {
 *   meta: {
 *     title: 'My Landing Page',
 *     description: 'A great landing page'
 *   },
 *   theme: {
 *     colors: {
 *       primary: '#3b82f6',
 *       secondary: '#8b5cf6'
 *     }
 *   },
 *   sections: [
 *     { type: 'hero', data: { ... } },
 *     { type: 'features', data: { ... } }
 *   ],
 *   handlers: {
 *     handleContactSubmit: (data) => console.log(data)
 *   }
 * };
 *
 * <PageBuilder config={pageConfig} />
 * ```
 */
export const PageBuilder: React.FC<PageBuilderProps> = ({
  config,
  onValidationError,
  strictValidation = false,
}) => {
  // Validate configuration
  const validation = useMemo(() => validatePageConfig(config), [config]);

  useEffect(() => {
    if (!validation.valid) {
      console.error('Page configuration validation failed:', validation.errors);
      onValidationError?.(validation.errors);
    }
  }, [validation, onValidationError]);

  // Don't render if validation fails in strict mode
  if (strictValidation && !validation.valid) {
    return (
      <div className={styles.validationError}>
        <h2>Configuration Error</h2>
        <p>The page configuration contains errors:</p>
        <ul>
          {validation.errors.map((error, index) => (
            <li key={index}>
              <strong>{error.path}:</strong> {error.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Apply theme overrides
  useEffect(() => {
    if (config.theme?.colors) {
      const root = document.documentElement;

      if (config.theme.colors.primary) {
        root.style.setProperty('--color-primary', config.theme.colors.primary);
      }
      if (config.theme.colors.secondary) {
        root.style.setProperty('--color-secondary', config.theme.colors.secondary);
      }
      if (config.theme.colors.accent) {
        root.style.setProperty('--color-accent', config.theme.colors.accent);
      }
    }
  }, [config.theme]);

  // Set page metadata
  useEffect(() => {
    if (config.meta?.title) {
      document.title = config.meta.title;
    }
    if (config.meta?.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', config.meta.description);
    }
    if (config.meta?.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.meta.keywords.join(', '));
    }
  }, [config.meta]);

  // Build context for sections
  const context: BuilderContext = useMemo(
    () => ({
      iconResolver: resolveIcon,
      handlers: config.handlers || {},
    }),
    [config.handlers]
  );

  return (
    <div className={styles.page} id={config.id}>
      {config.sections.map((section, index) => (
        <SectionBuilder
          key={section.id || `section-${index}`}
          config={section}
          context={context}
        />
      ))}
    </div>
  );
};

PageBuilder.displayName = 'PageBuilder';
