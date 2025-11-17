/**
 * @fileoverview Template Preview Component
 * @version 0.4.0
 * @description Galería interactiva para previsualizar y seleccionar templates
 */

import React, { useState, useMemo } from 'react'
import type { TemplatePreviewProps, TemplateConfig, TemplateCategory } from './types'
import { templateRegistry } from './TemplateRegistry'

/**
 * TemplatePreview - Galería de templates con filtros
 *
 * @example
 * ```tsx
 * import { TemplatePreview } from '@imperiohub/ui/templates'
 *
 * function App() {
 *   return (
 *     <TemplatePreview
 *       category="professionals"
 *       onSelect={(id, config) => console.log(id, config)}
 *       showFilters={true}
 *       columns={3}
 *     />
 *   )
 * }
 * ```
 */
export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  templates,
  category,
  onSelect,
  showFilters = true,
  columns = 3,
  className = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>(
    category || 'all'
  )

  // Obtener templates a mostrar
  const availableTemplates = useMemo<TemplateConfig[]>(() => {
    // Si se pasan templates específicos
    if (templates && templates.length > 0) {
      return templates.map((t) => {
        if (typeof t === 'string') {
          const config = templateRegistry.get(t)
          if (!config) {
            console.warn(`Template "${t}" no encontrado en el registro`)
            return null
          }
          return config
        }
        return t
      }).filter(Boolean) as TemplateConfig[]
    }

    // Si no, obtener del registro
    if (selectedCategory === 'all') {
      return templateRegistry.getAll()
    }
    return templateRegistry.getByCategory(selectedCategory)
  }, [templates, selectedCategory])

  // Filtrar por búsqueda
  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) return availableTemplates

    const query = searchQuery.toLowerCase()
    return availableTemplates.filter((t) => {
      return (
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.industry?.toLowerCase().includes(query) ||
        t.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    })
  }, [availableTemplates, searchQuery])

  // Grid columns class
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  const categories: Array<{ value: TemplateCategory | 'all'; label: string }> = [
    { value: 'all', label: 'Todos' },
    { value: 'professionals', label: 'Profesionales' },
    { value: 'business', label: 'Negocios' },
    { value: 'tech', label: 'Tech & SaaS' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'creative', label: 'Creativos' },
  ]

  return (
    <div className={`template-preview ${className}`}>
      {/* Filters */}
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar templates por nombre, industria o tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-600">
        {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} encontrado
        {filteredTemplates.length !== 1 ? 's' : ''}
      </div>

      {/* Templates Grid */}
      {filteredTemplates.length > 0 ? (
        <div className={`grid ${gridClass} gap-6`}>
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">
            No se encontraron templates con esos criterios
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Intenta con otros términos de búsqueda o categoría
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * TemplateCard - Tarjeta individual de template
 */
interface TemplateCardProps {
  template: TemplateConfig
  onSelect?: (templateId: string, config: TemplateConfig) => void
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelect }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(template.id, template)
    }
  }

  // Category badge color
  const categoryColors = {
    professionals: 'bg-blue-100 text-blue-700',
    business: 'bg-green-100 text-green-700',
    tech: 'bg-purple-100 text-purple-700',
    ecommerce: 'bg-orange-100 text-orange-700',
    creative: 'bg-pink-100 text-pink-700',
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        {template.thumbnail ? (
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-6">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-sm text-gray-500 font-medium">{template.name}</p>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category badge */}
        <div className="mb-2">
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
              categoryColors[template.category]
            }`}
          >
            {template.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
          {template.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        {template.tags && template.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {template.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Industry */}
        {template.industry && (
          <div className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Industria:</span> {template.industry}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleClick}
          className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm"
        >
          Seleccionar Template
        </button>
      </div>
    </div>
  )
}

TemplatePreview.displayName = 'TemplatePreview'
