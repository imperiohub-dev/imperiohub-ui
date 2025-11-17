/**
 * @fileoverview Template Registry
 * @version 0.4.0
 * @description Sistema de registro y gestión de templates
 */

import type {
  TemplateConfig,
  TemplateCategory,
  TemplateFilters,
  TemplateSearchResult,
  TemplateRegistry as ITemplateRegistry,
} from './types'

/**
 * Implementación del registro de templates
 */
class TemplateRegistryImplementation implements ITemplateRegistry {
  private templates: Map<string, TemplateConfig> = new Map()

  /**
   * Registra un nuevo template
   */
  register(config: TemplateConfig): void {
    if (this.templates.has(config.id)) {
      console.warn(`Template "${config.id}" ya está registrado. Se sobrescribirá.`)
    }
    this.templates.set(config.id, config)
  }

  /**
   * Registra múltiples templates a la vez
   */
  registerBulk(configs: TemplateConfig[]): void {
    configs.forEach((config) => this.register(config))
  }

  /**
   * Elimina un template del registro
   */
  unregister(id: string): void {
    if (!this.templates.has(id)) {
      console.warn(`Template "${id}" no está registrado.`)
      return
    }
    this.templates.delete(id)
  }

  /**
   * Obtiene un template por ID
   */
  get(id: string): TemplateConfig | undefined {
    return this.templates.get(id)
  }

  /**
   * Obtiene todos los templates registrados
   */
  getAll(): TemplateConfig[] {
    return Array.from(this.templates.values())
  }

  /**
   * Obtiene templates por categoría
   */
  getByCategory(category: TemplateCategory): TemplateConfig[] {
    return this.getAll().filter((template) => template.category === category)
  }

  /**
   * Obtiene templates por industria
   */
  getByIndustry(industry: string): TemplateConfig[] {
    return this.getAll().filter(
      (template) => template.industry?.toLowerCase() === industry.toLowerCase()
    )
  }

  /**
   * Obtiene templates por tags
   */
  getByTags(tags: string[]): TemplateConfig[] {
    return this.getAll().filter((template) => {
      if (!template.tags || template.tags.length === 0) return false
      return tags.some((tag) =>
        template.tags!.some((t) => t.toLowerCase() === tag.toLowerCase())
      )
    })
  }

  /**
   * Busca templates con filtros
   */
  search(filters: TemplateFilters): TemplateSearchResult {
    let results = this.getAll()

    // Filtrar por categoría
    if (filters.category) {
      results = results.filter((t) => t.category === filters.category)
    }

    // Filtrar por industria
    if (filters.industry) {
      results = results.filter(
        (t) => t.industry?.toLowerCase() === filters.industry!.toLowerCase()
      )
    }

    // Filtrar por tags
    if (filters.tags && filters.tags.length > 0) {
      results = results.filter((t) => {
        if (!t.tags || t.tags.length === 0) return false
        return filters.tags!.some((tag) =>
          t.tags!.some((tTag) => tTag.toLowerCase() === tag.toLowerCase())
        )
      })
    }

    // Buscar por query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase()
      results = results.filter((t) => {
        return (
          t.name.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.id.toLowerCase().includes(query) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
          t.industry?.toLowerCase().includes(query)
        )
      })
    }

    return {
      templates: results,
      total: results.length,
      filters,
    }
  }

  /**
   * Obtiene estadísticas del registro
   */
  getStats() {
    const all = this.getAll()
    const byCategory = {
      professionals: this.getByCategory('professionals').length,
      business: this.getByCategory('business').length,
      tech: this.getByCategory('tech').length,
      ecommerce: this.getByCategory('ecommerce').length,
      creative: this.getByCategory('creative').length,
    }

    const industries = new Set(
      all.filter((t) => t.industry).map((t) => t.industry!)
    )

    return {
      total: all.length,
      byCategory,
      industries: Array.from(industries),
      industriesCount: industries.size,
    }
  }

  /**
   * Limpia todos los templates
   */
  clear(): void {
    this.templates.clear()
  }

  /**
   * Verifica si un template existe
   */
  has(id: string): boolean {
    return this.templates.has(id)
  }

  /**
   * Obtiene IDs de todos los templates
   */
  getIds(): string[] {
    return Array.from(this.templates.keys())
  }
}

// Singleton instance
export const templateRegistry = new TemplateRegistryImplementation()

// Export class for testing
export { TemplateRegistryImplementation }
