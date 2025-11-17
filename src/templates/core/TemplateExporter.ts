/**
 * @fileoverview Template Exporter Utilities
 * @version 0.4.0
 * @description Utilidades para exportar configuraciones de templates
 */

import type { TemplateConfig, ExportOptions } from './types'

/**
 * Exporta una configuración de template a JSON
 */
export function exportToJSON(
  config: TemplateConfig,
  options: ExportOptions = { format: 'json', minify: false }
): string {
  const { minify, includeComments } = options

  if (minify) {
    return JSON.stringify(config)
  }

  const jsonString = JSON.stringify(config, null, 2)

  if (includeComments) {
    const header = `/**
 * Template: ${config.name}
 * Category: ${config.category}
 * Version: ${config.version || '0.4.0'}
 *
 * Descripción: ${config.description}
 */

`
    return header + jsonString
  }

  return jsonString
}

/**
 * Exporta una configuración de template a TypeScript
 */
export function exportToTypeScript(
  config: TemplateConfig,
  options: ExportOptions = { format: 'typescript', includeComments: true }
): string {
  const { includeComments } = options

  const header = includeComments
    ? `/**
 * @fileoverview ${config.name} Template Configuration
 * @version ${config.version || '0.4.0'}
 */

import type { TemplateConfig } from '@imperiohub/ui/templates'

`
    : `import type { TemplateConfig } from '@imperiohub/ui/templates'\n\n`

  const varName = toCamelCase(config.id) + 'Template'

  const configString = `export const ${varName}: TemplateConfig = ${JSON.stringify(
    config,
    null,
    2
  )}`

  return header + configString
}

/**
 * Exporta una configuración de template a JavaScript
 */
export function exportToJavaScript(
  config: TemplateConfig,
  options: ExportOptions = { format: 'javascript', includeComments: true }
): string {
  const { includeComments } = options

  const header = includeComments
    ? `/**
 * ${config.name} Template Configuration
 * Version: ${config.version || '0.4.0'}
 */

`
    : ''

  const varName = toCamelCase(config.id) + 'Template'

  const configString = `export const ${varName} = ${JSON.stringify(config, null, 2)}`

  return header + configString
}

/**
 * Copia la configuración al portapapeles
 */
export async function copyToClipboard(
  config: TemplateConfig,
  format: 'json' | 'typescript' | 'javascript' = 'json'
): Promise<boolean> {
  try {
    let content: string

    switch (format) {
      case 'typescript':
        content = exportToTypeScript(config)
        break
      case 'javascript':
        content = exportToJavaScript(config)
        break
      case 'json':
      default:
        content = exportToJSON(config)
        break
    }

    await navigator.clipboard.writeText(content)
    return true
  } catch (error) {
    console.error('Error copiando al portapapeles:', error)
    return false
  }
}

/**
 * Descarga la configuración como archivo
 */
export function downloadConfig(
  config: TemplateConfig,
  format: 'json' | 'typescript' | 'javascript' = 'json'
): void {
  let content: string
  let filename: string
  let mimeType: string

  switch (format) {
    case 'typescript':
      content = exportToTypeScript(config)
      filename = `${config.id}.template.ts`
      mimeType = 'text/typescript'
      break
    case 'javascript':
      content = exportToJavaScript(config)
      filename = `${config.id}.template.js`
      mimeType = 'text/javascript'
      break
    case 'json':
    default:
      content = exportToJSON(config)
      filename = `${config.id}.template.json`
      mimeType = 'application/json'
      break
  }

  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Convierte un string a camelCase
 */
function toCamelCase(str: string): string {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) return word
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}

/**
 * Hook de React para usar el exporter
 */
export function useTemplateExporter(config: TemplateConfig) {
  const handleCopy = async (
    format: 'json' | 'typescript' | 'javascript' = 'json'
  ) => {
    const success = await copyToClipboard(config, format)
    return success
  }

  const handleDownload = (
    format: 'json' | 'typescript' | 'javascript' = 'json'
  ) => {
    downloadConfig(config, format)
  }

  const getExportString = (
    format: 'json' | 'typescript' | 'javascript' = 'json',
    options?: ExportOptions
  ): string => {
    switch (format) {
      case 'typescript':
        return exportToTypeScript(config, options)
      case 'javascript':
        return exportToJavaScript(config, options)
      case 'json':
      default:
        return exportToJSON(config, options)
    }
  }

  return {
    copy: handleCopy,
    download: handleDownload,
    getExportString,
  }
}

/**
 * Componente de botones de export (opcional)
 */
import React from 'react'

export interface TemplateExportButtonsProps {
  config: TemplateConfig
  className?: string
  onCopySuccess?: () => void
  onCopyError?: () => void
}

export const TemplateExportButtons: React.FC<TemplateExportButtonsProps> = ({
  config,
  className = '',
  onCopySuccess,
  onCopyError,
}) => {
  const { copy, download } = useTemplateExporter(config)

  const handleCopy = async (format: 'json' | 'typescript' | 'javascript') => {
    const success = await copy(format)
    if (success && onCopySuccess) {
      onCopySuccess()
    } else if (!success && onCopyError) {
      onCopyError()
    }
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {/* Copy buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => handleCopy('json')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
          title="Copiar configuración JSON"
        >
          📋 Copy JSON
        </button>
        <button
          onClick={() => handleCopy('typescript')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
          title="Copiar configuración TypeScript"
        >
          📋 Copy TS
        </button>
      </div>

      {/* Download buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => download('json')}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          title="Descargar configuración JSON"
        >
          💾 Download JSON
        </button>
        <button
          onClick={() => download('typescript')}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          title="Descargar configuración TypeScript"
        >
          💾 Download TS
        </button>
      </div>
    </div>
  )
}
