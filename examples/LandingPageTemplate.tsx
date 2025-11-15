/**
 * Complete Landing Page Template Example
 *
 * This demonstrates how to use all ImperioHub UI components together
 * to create a professional landing page for autonomous professionals.
 */

import React from 'react';
import {
  Hero,
  Features,
  Testimonials,
  CTA,
  Pricing,
  Contact,
} from '../src/sections';

interface LandingPageData {
  hero: any;
  features: any;
  testimonials: any;
  pricing: any;
  cta: any;
  contact: any;
}

interface LandingPageTemplateProps {
  data: LandingPageData;
  onContactSubmit: (formData: Record<string, any>) => void;
}

/**
 * Complete landing page template using all sections
 *
 * @example
 * ```tsx
 * import { LandingPageTemplate } from 'imperiohub-ui/examples';
 * import { lawyerLandingData } from 'imperiohub-ui/examples/data';
 *
 * function App() {
 *   const handleContactSubmit = async (data) => {
 *     console.log('Contact form submitted:', data);
 *     // Send to your API
 *     await fetch('/api/contact', {
 *       method: 'POST',
 *       body: JSON.stringify(data),
 *     });
 *   };
 *
 *   return (
 *     <LandingPageTemplate
 *       data={lawyerLandingData}
 *       onContactSubmit={handleContactSubmit}
 *     />
 *   );
 * }
 * ```
 */
export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  data,
  onContactSubmit,
}) => {
  return (
    <main>
      {/* Hero Section - Main value proposition */}
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        image={data.hero.image}
        variant="split"
        gradientTitle={data.hero.gradientTitle}
      />

      {/* Features Section - Why choose us */}
      <Features
        title={data.features.title}
        subtitle={data.features.subtitle}
        features={data.features.features}
      />

      {/* Testimonials Section - Social proof */}
      <Testimonials
        title={data.testimonials.title}
        subtitle={data.testimonials.subtitle}
        testimonials={data.testimonials.testimonials}
      />

      {/* Pricing Section - Service packages */}
      <Pricing
        title={data.pricing.title}
        subtitle={data.pricing.subtitle}
        plans={data.pricing.plans}
      />

      {/* CTA Section - Conversion focused */}
      <CTA
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
      />

      {/* Contact Section - Lead generation */}
      <Contact
        title={data.contact.title}
        subtitle={data.contact.subtitle}
        onSubmit={onContactSubmit}
      />
    </main>
  );
};

LandingPageTemplate.displayName = 'LandingPageTemplate';

/**
 * Minimal landing page variant (Hero + CTA + Contact only)
 */
export const MinimalLandingTemplate: React.FC<LandingPageTemplateProps> = ({
  data,
  onContactSubmit,
}) => {
  return (
    <main>
      <Hero {...data.hero} variant="centered" />
      <CTA {...data.cta} />
      <Contact {...data.contact} onSubmit={onContactSubmit} />
    </main>
  );
};

/**
 * Service-focused landing page (Hero + Features + Pricing + Contact)
 */
export const ServiceLandingTemplate: React.FC<LandingPageTemplateProps> = ({
  data,
  onContactSubmit,
}) => {
  return (
    <main>
      <Hero {...data.hero} />
      <Features {...data.features} />
      <Pricing {...data.pricing} />
      <Contact {...data.contact} onSubmit={onContactSubmit} />
    </main>
  );
};
