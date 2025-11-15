/**
 * Builder Types
 *
 * Type definitions for JSON-driven page building
 */

import { LucideIcon } from 'lucide-react';

// ============================================================================
// Section Types
// ============================================================================

export type SectionType =
  | 'hero'
  | 'features'
  | 'testimonials'
  | 'cta'
  | 'pricing'
  | 'contact';

export interface BaseSectionConfig {
  id?: string;
  type: SectionType;
  className?: string;
  style?: Record<string, any>;
}

// Hero Section
export interface HeroSectionConfig extends BaseSectionConfig {
  type: 'hero';
  data: {
    title: string;
    subtitle: string;
    primaryCta?: {
      text: string;
      href?: string;
      onClick?: string; // Function name to call
    };
    secondaryCta?: {
      text: string;
      href?: string;
      onClick?: string;
    };
    image?: {
      src: string;
      alt: string;
    };
    variant?: 'centered' | 'split';
    gradientTitle?: boolean;
  };
}

// Features Section
export interface FeaturesSectionConfig extends BaseSectionConfig {
  type: 'features';
  data: {
    title: string;
    subtitle?: string;
    features: Array<{
      icon: string; // Lucide icon name
      title: string;
      description: string;
    }>;
  };
}

// Testimonials Section
export interface TestimonialsSectionConfig extends BaseSectionConfig {
  type: 'testimonials';
  data: {
    title: string;
    subtitle?: string;
    testimonials: Array<{
      quote: string;
      authorName: string;
      authorRole?: string;
      authorAvatar?: string;
      rating?: number;
    }>;
  };
}

// CTA Section
export interface CTASectionConfig extends BaseSectionConfig {
  type: 'cta';
  data: {
    title: string;
    description: string;
    primaryCta: {
      text: string;
      href?: string;
      onClick?: string;
    };
    secondaryCta?: {
      text: string;
      href?: string;
      onClick?: string;
    };
  };
}

// Pricing Section
export interface PricingSectionConfig extends BaseSectionConfig {
  type: 'pricing';
  data: {
    title: string;
    subtitle?: string;
    plans: Array<{
      title: string;
      price: string | number;
      period?: string;
      description?: string;
      features: string[];
      ctaText: string;
      onCtaClick?: string;
      featured?: boolean;
      badge?: string;
    }>;
  };
}

// Contact Section
export interface ContactSectionConfig extends BaseSectionConfig {
  type: 'contact';
  data: {
    title: string;
    subtitle?: string;
    onSubmit: string; // Function name to call
  };
}

// Union type for all sections
export type SectionConfig =
  | HeroSectionConfig
  | FeaturesSectionConfig
  | TestimonialsSectionConfig
  | CTASectionConfig
  | PricingSectionConfig
  | ContactSectionConfig;

// ============================================================================
// Page Configuration
// ============================================================================

export interface PageConfig {
  /**
   * Unique page identifier
   */
  id?: string;

  /**
   * Page metadata
   */
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };

  /**
   * Theme override for this page
   */
  theme?: {
    colors?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
  };

  /**
   * Sections that make up the page
   */
  sections: SectionConfig[];

  /**
   * Event handlers (function names mapped to actual functions)
   */
  handlers?: Record<string, (...args: any[]) => any>;
}

// ============================================================================
// Landing Page Builder Configuration
// ============================================================================

export interface LandingPageBuilderConfig extends PageConfig {
  /**
   * Landing page variant
   */
  variant?: 'full' | 'minimal' | 'service-focused';

  /**
   * Optional navigation
   */
  navigation?: {
    logo?: string;
    links?: Array<{
      label: string;
      href: string;
    }>;
  };

  /**
   * Optional footer
   */
  footer?: {
    copyright?: string;
    links?: Array<{
      label: string;
      href: string;
    }>;
    social?: Array<{
      platform: string;
      url: string;
    }>;
  };
}

// ============================================================================
// Builder Context
// ============================================================================

export interface BuilderContext {
  /**
   * Icon resolver - converts icon name string to LucideIcon component
   */
  iconResolver?: (iconName: string) => LucideIcon | null;

  /**
   * Event handlers registry
   */
  handlers?: Record<string, (...args: any[]) => any>;

  /**
   * Custom components registry
   */
  customComponents?: Record<string, React.ComponentType<any>>;
}

// ============================================================================
// Validation
// ============================================================================

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  path: string;
  message: string;
  code: string;
}
