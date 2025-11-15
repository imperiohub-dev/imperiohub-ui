/**
 * Config Validation Utilities
 */

import {
  SectionConfig,
  PageConfig,
  ValidationResult,
  ValidationError,
} from '../../types/builder';

/**
 * Validates a section configuration
 */
export function validateSectionConfig(
  section: SectionConfig,
  index: number
): ValidationError[] {
  const errors: ValidationError[] = [];
  const path = `sections[${index}]`;

  // Validate type
  if (!section.type) {
    errors.push({
      path: `${path}.type`,
      message: 'Section type is required',
      code: 'MISSING_TYPE',
    });
    return errors;
  }

  // Validate data
  if (!section.data) {
    errors.push({
      path: `${path}.data`,
      message: 'Section data is required',
      code: 'MISSING_DATA',
    });
    return errors;
  }

  // Type-specific validation
  switch (section.type) {
    case 'hero':
      if (!section.data.title) {
        errors.push({
          path: `${path}.data.title`,
          message: 'Hero title is required',
          code: 'MISSING_TITLE',
        });
      }
      if (!section.data.subtitle) {
        errors.push({
          path: `${path}.data.subtitle`,
          message: 'Hero subtitle is required',
          code: 'MISSING_SUBTITLE',
        });
      }
      break;

    case 'features':
      if (!section.data.title) {
        errors.push({
          path: `${path}.data.title`,
          message: 'Features title is required',
          code: 'MISSING_TITLE',
        });
      }
      if (!section.data.features || section.data.features.length === 0) {
        errors.push({
          path: `${path}.data.features`,
          message: 'At least one feature is required',
          code: 'EMPTY_FEATURES',
        });
      }
      break;

    case 'testimonials':
      if (!section.data.title) {
        errors.push({
          path: `${path}.data.title`,
          message: 'Testimonials title is required',
          code: 'MISSING_TITLE',
        });
      }
      if (!section.data.testimonials || section.data.testimonials.length === 0) {
        errors.push({
          path: `${path}.data.testimonials`,
          message: 'At least one testimonial is required',
          code: 'EMPTY_TESTIMONIALS',
        });
      }
      break;

    case 'cta':
      if (!section.data.title) {
        errors.push({
          path: `${path}.data.title`,
          message: 'CTA title is required',
          code: 'MISSING_TITLE',
        });
      }
      if (!section.data.description) {
        errors.push({
          path: `${path}.data.description`,
          message: 'CTA description is required',
          code: 'MISSING_DESCRIPTION',
        });
      }
      if (!section.data.primaryCta) {
        errors.push({
          path: `${path}.data.primaryCta`,
          message: 'Primary CTA is required',
          code: 'MISSING_PRIMARY_CTA',
        });
      }
      break;

    case 'pricing':
      if (!section.data.title) {
        errors.push({
          path: `${path}.data.title`,
          message: 'Pricing title is required',
          code: 'MISSING_TITLE',
        });
      }
      if (!section.data.plans || section.data.plans.length === 0) {
        errors.push({
          path: `${path}.data.plans`,
          message: 'At least one pricing plan is required',
          code: 'EMPTY_PLANS',
        });
      }
      break;

    case 'contact':
      if (!section.data.title) {
        errors.push({
          path: `${path}.data.title`,
          message: 'Contact title is required',
          code: 'MISSING_TITLE',
        });
      }
      if (!section.data.onSubmit) {
        errors.push({
          path: `${path}.data.onSubmit`,
          message: 'Contact form onSubmit handler is required',
          code: 'MISSING_HANDLER',
        });
      }
      break;
  }

  return errors;
}

/**
 * Validates a complete page configuration
 */
export function validatePageConfig(config: PageConfig): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate sections array
  if (!config.sections || !Array.isArray(config.sections)) {
    errors.push({
      path: 'sections',
      message: 'Sections array is required',
      code: 'MISSING_SECTIONS',
    });
    return { valid: false, errors };
  }

  if (config.sections.length === 0) {
    errors.push({
      path: 'sections',
      message: 'At least one section is required',
      code: 'EMPTY_SECTIONS',
    });
    return { valid: false, errors };
  }

  // Validate each section
  config.sections.forEach((section, index) => {
    const sectionErrors = validateSectionConfig(section, index);
    errors.push(...sectionErrors);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Checks if configuration requires handlers
 */
export function getRequiredHandlers(config: PageConfig): string[] {
  const handlers: string[] = [];

  config.sections.forEach((section) => {
    switch (section.type) {
      case 'contact':
        if (section.data.onSubmit) {
          handlers.push(section.data.onSubmit);
        }
        break;

      case 'hero':
      case 'cta':
        if (section.data.primaryCta?.onClick) {
          handlers.push(section.data.primaryCta.onClick);
        }
        if (section.data.secondaryCta?.onClick) {
          handlers.push(section.data.secondaryCta.onClick);
        }
        break;

      case 'pricing':
        section.data.plans?.forEach((plan) => {
          if (plan.onCtaClick) {
            handlers.push(plan.onCtaClick);
          }
        });
        break;
    }
  });

  return [...new Set(handlers)]; // Remove duplicates
}
