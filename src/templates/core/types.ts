/**
 * @fileoverview Template System Types
 * @version 0.4.0
 * @description Tipos TypeScript para el sistema de templates de ImperioHub UI
 */

import type { ThemeConfig } from '../../theming/types'

/**
 * Categorías de templates disponibles
 */
export type TemplateCategory =
  | 'professionals'  // Profesionales autónomos
  | 'business'       // Negocios y servicios
  | 'tech'           // Tech y SaaS
  | 'ecommerce'      // E-commerce
  | 'creative'       // Creativos y artistas

/**
 * Layouts disponibles
 */
export type TemplateLayout =
  | 'professional'   // Layout para profesionales
  | 'business'       // Layout para negocios
  | 'tech'           // Layout para tech/SaaS
  | 'ecommerce'      // Layout para e-commerce
  | 'creative'       // Layout para creativos

/**
 * Variantes de sección
 */
export type SectionVariant =
  | 'default'
  | 'professional'
  | 'modern'
  | 'minimal'
  | 'bold'

/**
 * Configuración de visualización
 */
export type DisplayMode = 'grid' | 'list' | 'carousel' | 'table' | 'masonry'

/**
 * Información de precio
 */
export interface PriceInfo {
  amount: number
  currency: 'USD' | 'EUR' | 'MXN' | 'ARS' | 'COP' | 'CLP'
  period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'session' | 'project'
}

/**
 * Servicio ofrecido
 */
export interface ServiceItem {
  id: string
  name: string
  description: string
  price?: PriceInfo
  icon?: string
  features?: string[]
  highlighted?: boolean
}

/**
 * Testimonio de cliente
 */
export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  rating?: number
  avatar?: string
  date?: string
}

/**
 * Dirección física
 */
export interface Address {
  street: string
  city: string
  state?: string
  country: string
  zipCode: string
}

/**
 * Información de contacto
 */
export interface ContactInfo {
  phone?: string
  email: string
  address?: Address
  whatsapp?: string
  schedule?: {
    [key: string]: string // e.g., "monday": "9:00 - 18:00"
  }
}

/**
 * Redes sociales
 */
export interface SocialLinks {
  facebook?: string
  instagram?: string
  twitter?: string
  linkedin?: string
  youtube?: string
  tiktok?: string
  github?: string
  behance?: string
  dribbble?: string
}

/**
 * Miembro del equipo
 */
export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  avatar?: string
  social?: SocialLinks
  specialties?: string[]
}

/**
 * Proyecto/Portfolio item
 */
export interface ProjectItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  gallery?: string[]
  client?: string
  date?: string
  url?: string
  tags?: string[]
}

/**
 * Certificación o credencial
 */
export interface Certification {
  id: string
  name: string
  issuer: string
  date?: string
  expiryDate?: string
  credentialId?: string
  url?: string
}

/**
 * Pregunta frecuente
 */
export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

/**
 * Entrada de blog
 */
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  category: string
  tags?: string[]
  image?: string
  readTime?: number
}

/**
 * Configuración de sección
 */
export interface SectionConfig {
  enabled: boolean
  variant?: SectionVariant
  layout?: 'default' | 'side-image' | 'centered' | 'split'
  display?: DisplayMode
  columns?: number
  carousel?: boolean
  showMap?: boolean
  customClass?: string
}

/**
 * Variables del template
 */
export interface TemplateVariables {
  // Información básica
  professionalName?: string
  businessName?: string
  profession?: string
  tagline: string
  description?: string
  yearsExperience?: number

  // Imagen principal
  heroImage?: string
  logo?: string

  // Servicios
  services?: ServiceItem[]

  // Testimonios
  testimonials?: Testimonial[]

  // Contacto
  contact: ContactInfo

  // Redes sociales
  social?: SocialLinks

  // Equipo
  team?: TeamMember[]

  // Proyectos/Portfolio
  projects?: ProjectItem[]

  // Certificaciones
  certifications?: Certification[] | string[]

  // FAQ
  faq?: FAQItem[]

  // Blog
  blog?: BlogPost[]

  // Horarios de atención
  workingHours?: {
    [key: string]: string
  }

  // Especialidades
  specialties?: string[]

  // Awards/Reconocimientos
  awards?: string[]

  // Custom data
  [key: string]: any
}

/**
 * Secciones disponibles
 */
export interface TemplateSections {
  hero?: SectionConfig
  about?: SectionConfig
  services?: SectionConfig
  experience?: SectionConfig
  testimonials?: SectionConfig
  certifications?: SectionConfig
  team?: SectionConfig
  portfolio?: SectionConfig
  blog?: SectionConfig
  pricing?: SectionConfig
  faq?: SectionConfig
  contact?: SectionConfig
  footer?: SectionConfig
  [key: string]: SectionConfig | undefined
}

/**
 * Metadata SEO
 */
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  author?: string
  ogImage?: string
  canonicalUrl?: string
}

/**
 * Configuración completa de un template
 */
export interface TemplateConfig {
  // Identificación
  id: string
  name: string
  category: TemplateCategory
  description: string

  // Layout y tema
  layout: TemplateLayout
  recommendedTheme?: string
  customTheme?: Partial<ThemeConfig>

  // Variables personalizables
  variables: TemplateVariables

  // Secciones
  sections: TemplateSections

  // SEO
  seo?: SEOMetadata

  // Preview
  thumbnail?: string

  // Metadata
  tags?: string[]
  industry?: string
  targetAudience?: string[]

  // Versión
  version?: string
}

/**
 * Props para TemplateLoader
 */
export interface TemplateLoaderProps {
  config: TemplateConfig
  overrides?: {
    variables?: Partial<TemplateVariables>
    sections?: Partial<TemplateSections>
    theme?: string | Partial<ThemeConfig>
  }
  className?: string
  onLoad?: () => void
}

/**
 * Props para TemplatePreview
 */
export interface TemplatePreviewProps {
  templates?: string[] | TemplateConfig[]
  category?: TemplateCategory
  onSelect?: (templateId: string, config: TemplateConfig) => void
  showFilters?: boolean
  columns?: number
  className?: string
}

/**
 * Filtros para templates
 */
export interface TemplateFilters {
  category?: TemplateCategory
  industry?: string
  tags?: string[]
  searchQuery?: string
}

/**
 * Resultado de búsqueda de templates
 */
export interface TemplateSearchResult {
  templates: TemplateConfig[]
  total: number
  filters: TemplateFilters
}

/**
 * Opciones de exportación
 */
export interface ExportOptions {
  format: 'json' | 'typescript' | 'javascript'
  minify?: boolean
  includeComments?: boolean
}

/**
 * Registry de templates
 */
export interface TemplateRegistry {
  register(config: TemplateConfig): void
  unregister(id: string): void
  get(id: string): TemplateConfig | undefined
  getAll(): TemplateConfig[]
  getByCategory(category: TemplateCategory): TemplateConfig[]
  search(filters: TemplateFilters): TemplateSearchResult
}
