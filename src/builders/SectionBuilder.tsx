/**
 * Section Builder
 *
 * Dynamically renders sections based on configuration
 */

import React from 'react';
import { SectionConfig, BuilderContext } from '../types/builder';
import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { Testimonials } from '../sections/Testimonials';
import { CTA } from '../sections/CTA';
import { Pricing } from '../sections/Pricing';
import { Contact } from '../sections/Contact';
import { resolveIcon } from './utils/iconResolver';

export interface SectionBuilderProps {
  config: SectionConfig;
  context?: BuilderContext;
}

/**
 * Builds a single section from configuration
 *
 * @example
 * ```tsx
 * const heroConfig = {
 *   type: 'hero',
 *   data: {
 *     title: 'Welcome',
 *     subtitle: 'Build fast',
 *     primaryCta: { text: 'Start', href: '/start' }
 *   }
 * };
 *
 * <SectionBuilder config={heroConfig} />
 * ```
 */
export const SectionBuilder: React.FC<SectionBuilderProps> = ({ config, context }) => {
  const { type, data, className, style } = config;

  // Resolve handlers
  const resolveHandler = (handlerName?: string) => {
    if (!handlerName) return undefined;
    return context?.handlers?.[handlerName];
  };

  // Render based on section type
  switch (type) {
    case 'hero': {
      const primaryCta = data.primaryCta
        ? {
            ...data.primaryCta,
            onClick: resolveHandler(data.primaryCta.onClick),
          }
        : undefined;

      const secondaryCta = data.secondaryCta
        ? {
            ...data.secondaryCta,
            onClick: resolveHandler(data.secondaryCta.onClick),
          }
        : undefined;

      return (
        <Hero
          title={data.title}
          subtitle={data.subtitle}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          image={data.image}
          variant={data.variant}
          gradientTitle={data.gradientTitle}
          className={className}
          style={style}
        />
      );
    }

    case 'features': {
      // Resolve icons from icon names
      const features = data.features.map((feature: any) => ({
        ...feature,
        icon: resolveIcon(feature.icon) || (() => null),
      }));

      return (
        <Features
          title={data.title}
          subtitle={data.subtitle}
          features={features}
          className={className}
          style={style}
        />
      );
    }

    case 'testimonials': {
      return (
        <Testimonials
          title={data.title}
          subtitle={data.subtitle}
          testimonials={data.testimonials}
          className={className}
          style={style}
        />
      );
    }

    case 'cta': {
      const primaryCta = {
        ...data.primaryCta,
        onClick: resolveHandler(data.primaryCta.onClick),
      };

      const secondaryCta = data.secondaryCta
        ? {
            ...data.secondaryCta,
            onClick: resolveHandler(data.secondaryCta.onClick),
          }
        : undefined;

      return (
        <CTA
          title={data.title}
          description={data.description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          className={className}
          style={style}
        />
      );
    }

    case 'pricing': {
      const plans = data.plans.map((plan: any) => ({
        ...plan,
        onCtaClick: resolveHandler(plan.onCtaClick),
      }));

      return (
        <Pricing
          title={data.title}
          subtitle={data.subtitle}
          plans={plans}
          className={className}
          style={style}
        />
      );
    }

    case 'contact': {
      const onSubmit = resolveHandler(data.onSubmit);

      if (!onSubmit) {
        console.error(`Contact form handler "${data.onSubmit}" not found in context`);
        return null;
      }

      return (
        <Contact
          title={data.title}
          subtitle={data.subtitle}
          onSubmit={onSubmit}
          className={className}
          style={style}
        />
      );
    }

    default:
      console.warn(`Unknown section type: ${type}`);
      return null;
  }
};

SectionBuilder.displayName = 'SectionBuilder';
