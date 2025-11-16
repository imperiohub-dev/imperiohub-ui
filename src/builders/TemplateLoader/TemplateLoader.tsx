import React, { ReactNode, Suspense } from 'react';
import { cn } from '../../utils/classnames';
import styles from './TemplateLoader.module.scss';

export interface TemplateConfig {
  id: string;
  name: string;
  theme?: Record<string, string>;
  sections: SectionConfig[];
  metadata?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface SectionConfig {
  type: string;
  props: Record<string, any>;
  id?: string;
}

export interface TemplateLoaderProps {
  config: TemplateConfig;
  components?: Record<string, React.ComponentType<any>>;
  loading?: ReactNode;
  error?: ReactNode;
  className?: string;
  onError?: (error: Error) => void;
}

/**
 * TemplateLoader Component
 *
 * Core builder component that loads and renders complete templates from JSON configuration.
 * This is the foundation of the template system for v0.4.x.
 *
 * @example
 * ```tsx
 * const templateConfig = {
 *   id: 'lawyer-template-01',
 *   name: 'Corporate Lawyer Landing Page',
 *   sections: [
 *     { type: 'HeroSection', props: { title: '...', subtitle: '...' } },
 *     { type: 'ServicesSection', props: { services: [...] } },
 *     { type: 'FAQSection', props: { faqs: [...] } },
 *   ],
 * };
 *
 * <TemplateLoader config={templateConfig} />
 * ```
 */
export const TemplateLoader: React.FC<TemplateLoaderProps> = ({
  config,
  components = {},
  loading,
  error,
  className,
  onError,
}) => {
  const [hasError, setHasError] = React.useState(false);
  const [errorDetails, setErrorDetails] = React.useState<Error | null>(null);

  // Apply theme if provided
  React.useEffect(() => {
    if (config.theme) {
      const root = document.documentElement;
      Object.entries(config.theme).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }

    return () => {
      // Cleanup theme on unmount if needed
      if (config.theme) {
        const root = document.documentElement;
        Object.keys(config.theme).forEach((key) => {
          root.style.removeProperty(key);
        });
      }
    };
  }, [config.theme]);

  // Set metadata
  React.useEffect(() => {
    if (config.metadata) {
      if (config.metadata.title) {
        document.title = config.metadata.title;
      }
      if (config.metadata.description) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', config.metadata.description);
      }
    }
  }, [config.metadata]);

  const renderSection = (sectionConfig: SectionConfig, index: number) => {
    try {
      const Component = components[sectionConfig.type];

      if (!Component) {
        console.warn(`Component "${sectionConfig.type}" not found in components registry`);
        return (
          <div key={sectionConfig.id || index} className={styles.templateLoader__missingComponent}>
            <p>Component "{sectionConfig.type}" not available</p>
          </div>
        );
      }

      return (
        <Component
          key={sectionConfig.id || index}
          {...sectionConfig.props}
          data-section-type={sectionConfig.type}
          data-section-id={sectionConfig.id}
        />
      );
    } catch (err) {
      console.error(`Error rendering section ${sectionConfig.type}:`, err);
      const error = err instanceof Error ? err : new Error(String(err));
      setHasError(true);
      setErrorDetails(error);
      if (onError) {
        onError(error);
      }
      return null;
    }
  };

  if (hasError && error) {
    return (
      <div className={styles.templateLoader__error}>
        {error}
      </div>
    );
  }

  if (hasError && errorDetails) {
    return (
      <div className={styles.templateLoader__error}>
        <h2>Error Loading Template</h2>
        <p>{errorDetails.message}</p>
      </div>
    );
  }

  const templateClasses = cn(
    styles.templateLoader,
    styles[`templateLoader--${config.id}`],
    className
  );

  return (
    <div className={templateClasses} data-template-id={config.id}>
      <Suspense fallback={loading || <div className={styles.templateLoader__loading}>Loading...</div>}>
        {config.sections.map((section, index) => renderSection(section, index))}
      </Suspense>
    </div>
  );
};

TemplateLoader.displayName = 'TemplateLoader';
