/**
 * @fileoverview ImperioHub UI Templates v0.4.0
 * @version 0.4.0
 * @description Sistema completo de templates para landing pages profesionales
 *
 * Características:
 * - 20+ templates de profesionales listos para usar
 * - Sistema de preview y selección interactivo
 * - Exportación a JSON, TypeScript y JavaScript
 * - 100% personalizable y compatible con sistema de temas
 */

// Core system
export * from './core'

// Layouts
export * from './layouts'

// Template configurations
export * from './configs/professionals'

// Auto-register all professional templates
import { templateRegistry } from './core/TemplateRegistry'
import { allProfessionalTemplates } from './configs/professionals'

// Register templates on import
if (typeof window !== 'undefined') {
  allProfessionalTemplates.forEach((template) => {
    templateRegistry.register(template)
  })
}

// Re-export registry for convenience
export { templateRegistry }

/**
 * Template System Quick Start
 *
 * @example Basic Usage
 * ```tsx
 * import { TemplateLoader, lawyerTemplate } from '@imperiohub/ui/templates'
 *
 * function App() {
 *   return (
 *     <TemplateLoader
 *       config={lawyerTemplate}
 *       overrides={{
 *         variables: { professionalName: 'Tu Nombre' }
 *       }}
 *     />
 *   )
 * }
 * ```
 *
 * @example Template Preview Gallery
 * ```tsx
 * import { TemplatePreview } from '@imperiohub/ui/templates'
 *
 * function TemplateSelector() {
 *   return (
 *     <TemplatePreview
 *       category="professionals"
 *       onSelect={(id, config) => {
 *         console.log('Selected:', id)
 *       }}
 *       showFilters={true}
 *       columns={3}
 *     />
 *   )
 * }
 * ```
 *
 * @example Export Template Configuration
 * ```tsx
 * import { useTemplateExporter, lawyerTemplate } from '@imperiohub/ui/templates'
 *
 * function ExportButton() {
 *   const { copy, download } = useTemplateExporter(lawyerTemplate)
 *
 *   return (
 *     <div>
 *       <button onClick={() => copy('json')}>Copy JSON</button>
 *       <button onClick={() => download('typescript')}>Download TS</button>
 *     </div>
 *   )
 * }
 * ```
 */
