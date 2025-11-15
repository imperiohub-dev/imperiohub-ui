/**
 * JSON Schemas for AI Integration
 *
 * These schemas help AI understand how to generate configuration for components
 */

export interface ComponentSchema {
  type: string;
  description: string;
  properties: Record<string, any>;
  required?: string[];
  examples?: any[];
  aiGuidelines?: string;
}

export interface SchemaRegistry {
  [componentName: string]: ComponentSchema;
}

// Export individual schemas as they are created
