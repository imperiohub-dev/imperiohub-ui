/**
 * @fileoverview Template Loader Component
 * @version 0.4.0
 * @description Componente principal para cargar y renderizar templates
 */

import React, { useEffect, useMemo } from 'react'
import type { TemplateLoaderProps, TemplateConfig } from './types'
import { ThemeProvider } from '../../theming/ThemeProvider'
import { themePresets } from '../../theming/presets'

// Import layouts
import { ProfessionalLayout } from '../layouts/ProfessionalLayout'

/**
 * TemplateLoader - Componente principal para cargar templates
 *
 * @example
 * ```tsx
 * import { TemplateLoader } from '@imperiohub/ui/templates'
 * import { lawyerTemplate } from '@imperiohub/ui/templates/professionals'
 *
 * function App() {
 *   return (
 *     <TemplateLoader
 *       config={lawyerTemplate}
 *       overrides={{
 *         variables: { professionalName: 'Mi Nombre' }
 *       }}
 *     />
 *   )
 * }
 * ```
 */
export const TemplateLoader: React.FC<TemplateLoaderProps> = ({
  config,
  overrides,
  className,
  onLoad,
}) => {
  // Merge config con overrides
  const mergedConfig: TemplateConfig = useMemo(() => {
    if (!overrides) return config

    return {
      ...config,
      variables: {
        ...config.variables,
        ...overrides.variables,
      },
      sections: {
        ...config.sections,
        ...overrides.sections,
      },
    }
  }, [config, overrides])

  // Determinar el tema a usar
  const theme = useMemo(() => {
    // 1. Override de tema
    if (overrides?.theme) {
      if (typeof overrides.theme === 'string') {
        // Es un preset
        return themePresets[overrides.theme] || themePresets.default
      }
      // Es una configuración custom
      return overrides.theme
    }

    // 2. Custom theme del config
    if (mergedConfig.customTheme) {
      return mergedConfig.customTheme
    }

    // 3. Tema recomendado
    if (mergedConfig.recommendedTheme) {
      return (
        themePresets[mergedConfig.recommendedTheme] || themePresets.default
      )
    }

    // 4. Default
    return themePresets.default
  }, [mergedConfig, overrides])

  // Callback cuando el template se carga
  useEffect(() => {
    if (onLoad) {
      onLoad()
    }
  }, [onLoad])

  // Renderizar el layout apropiado
  const renderLayout = () => {
    switch (mergedConfig.layout) {
      case 'professional':
        return <ProfessionalLayout config={mergedConfig} />

      case 'business':
        // TODO: Implementar en v0.4.1
        return (
          <div className="p-8 text-center">
            <h2>Business Layout - Coming in v0.4.1</h2>
            <p>Template: {mergedConfig.name}</p>
          </div>
        )

      case 'tech':
        // TODO: Implementar en v0.4.2
        return (
          <div className="p-8 text-center">
            <h2>Tech Layout - Coming in v0.4.2</h2>
            <p>Template: {mergedConfig.name}</p>
          </div>
        )

      case 'ecommerce':
        // TODO: Implementar en v0.4.3
        return (
          <div className="p-8 text-center">
            <h2>Ecommerce Layout - Coming in v0.4.3</h2>
            <p>Template: {mergedConfig.name}</p>
          </div>
        )

      case 'creative':
        // TODO: Implementar en v0.4.4
        return (
          <div className="p-8 text-center">
            <h2>Creative Layout - Coming in v0.4.4</h2>
            <p>Template: {mergedConfig.name}</p>
          </div>
        )

      default:
        return (
          <div className="p-8 text-center text-red-500">
            <h2>Error: Layout desconocido "{mergedConfig.layout}"</h2>
          </div>
        )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={className} data-template-id={mergedConfig.id}>
        {renderLayout()}
      </div>
    </ThemeProvider>
  )
}

TemplateLoader.displayName = 'TemplateLoader'
