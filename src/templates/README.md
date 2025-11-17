# 📚 ImperioHub UI - Sistema de Templates v0.4.0

Sistema completo de templates profesionales listos para usar en landing pages. Incluye 20+ templates de profesionales, preview interactivo, exportación y personalización completa.

## 🚀 Características Principales

- ✅ **20+ Templates Profesionales** - Listos para usar
- 🎨 **100% Personalizables** - Variables configurables vía JSON
- 🔍 **Preview Interactivo** - Galería con filtros y búsqueda
- 📤 **Sistema de Export** - JSON, TypeScript y JavaScript
- 🎯 **Compatible con Temas** - Integración con sistema de temas v0.3.0
- 📱 **Responsive** - Optimizados para todos los dispositivos
- ⚡ **TypeScript** - Type-safe con autocompletado

## 📦 Instalación

```bash
npm install @imperiohub/ui
```

## 🎯 Uso Básico

### 1. Usar un Template Directamente

```tsx
import { TemplateLoader, lawyerTemplate } from '@imperiohub/ui/templates'

function App() {
  return (
    <TemplateLoader
      config={lawyerTemplate}
      overrides={{
        variables: {
          professionalName: 'Lic. María González',
          tagline: 'Tu eslogan personalizado'
        }
      }}
    />
  )
}
```

### 2. Galería de Templates con Preview

```tsx
import { TemplatePreview } from '@imperiohub/ui/templates'

function TemplateSelector() {
  return (
    <TemplatePreview
      category="professionals"
      onSelect={(id, config) => {
        console.log('Template seleccionado:', id)
        // Hacer algo con la configuración
      }}
      showFilters={true}
      columns={3}
    />
  )
}
```

### 3. Exportar Configuración

```tsx
import {
  TemplateExportButtons,
  lawyerTemplate
} from '@imperiohub/ui/templates'

function ExportExample() {
  return (
    <TemplateExportButtons
      config={lawyerTemplate}
      onCopySuccess={() => alert('¡Copiado!')}
    />
  )
}
```

## 📋 Templates Disponibles (v0.4.0)

### Profesionales (20 templates)

| ID | Nombre | Industria |
|----|--------|-----------|
| `lawyer` | Abogado | Legal |
| `doctor` | Médico General | Healthcare |
| `architect` | Arquitecto | Architecture |
| `accountant` | Contador Público | Accounting |
| `consultant` | Consultor de Negocios | Business Consulting |
| `therapist` | Terapeuta | Mental Health |
| `dentist` | Dentista | Dentistry |
| `veterinarian` | Veterinario | Veterinary |
| `photographer` | Fotógrafo | Photography |
| `personal-trainer` | Entrenador Personal | Fitness |
| `nutritionist` | Nutriólogo | Nutrition |
| `psychologist` | Psicólogo Clínico | Psychology |
| `financial-advisor` | Asesor Financiero | Financial Services |
| `real-estate-agent` | Agente Inmobiliario | Real Estate |
| `interior-designer` | Diseñador de Interiores | Interior Design |
| `engineer` | Ingeniero Consultor | Engineering |
| `tutor` | Profesor Particular | Education |
| `life-coach` | Coach de Vida | Coaching |
| `marketing-consultant` | Consultor de Marketing | Marketing |
| `copywriter` | Copywriter | Copywriting |

## 🎨 Personalización

### Variables Principales

Cada template soporta las siguientes variables base:

```typescript
{
  // Información básica
  professionalName?: string
  profession?: string
  tagline: string
  description?: string
  yearsExperience?: number

  // Servicios
  services?: ServiceItem[]

  // Testimonios
  testimonials?: Testimonial[]

  // Contacto
  contact: ContactInfo

  // Redes sociales
  social?: SocialLinks

  // Y muchas más...
}
```

### Configuración de Secciones

Controla qué secciones mostrar:

```typescript
{
  sections: {
    hero: { enabled: true, variant: 'professional' },
    about: { enabled: true, layout: 'side-image' },
    services: { enabled: true, display: 'grid', columns: 3 },
    testimonials: { enabled: true, carousel: true },
    pricing: { enabled: true },
    contact: { enabled: true, showMap: true },
    // ...más secciones
  }
}
```

### Temas Personalizados

```tsx
<TemplateLoader
  config={lawyerTemplate}
  overrides={{
    theme: 'professional-blue', // Tema predefinido
    // O tema custom:
    theme: {
      primary: '#1e40af',
      secondary: '#64748b',
      // ...más configuración
    }
  }}
/>
```

## 🔍 API Reference

### TemplateLoader

Componente principal para cargar templates.

```typescript
interface TemplateLoaderProps {
  config: TemplateConfig
  overrides?: {
    variables?: Partial<TemplateVariables>
    sections?: Partial<TemplateSections>
    theme?: string | Partial<ThemeConfig>
  }
  className?: string
  onLoad?: () => void
}
```

### TemplatePreview

Galería interactiva de templates.

```typescript
interface TemplatePreviewProps {
  templates?: string[] | TemplateConfig[]
  category?: TemplateCategory
  onSelect?: (templateId: string, config: TemplateConfig) => void
  showFilters?: boolean
  columns?: number
  className?: string
}
```

### TemplateRegistry

Sistema de registro de templates.

```typescript
// Registrar template
templateRegistry.register(myTemplate)

// Obtener template
const template = templateRegistry.get('lawyer')

// Buscar templates
const results = templateRegistry.search({
  category: 'professionals',
  searchQuery: 'legal'
})
```

### Export Utilities

```typescript
// Hook
const { copy, download, getExportString } = useTemplateExporter(config)

// Copiar al portapapeles
await copy('json')      // JSON
await copy('typescript') // TypeScript

// Descargar archivo
download('json')
download('typescript')

// Obtener string
const jsonStr = getExportString('json', { minify: true })
```

## 💡 Ejemplos Avanzados

### Crear Template Personalizado

```typescript
import type { TemplateConfig } from '@imperiohub/ui/templates'

const myCustomTemplate: TemplateConfig = {
  id: 'my-custom-template',
  name: 'Mi Template',
  category: 'professionals',
  description: 'Template personalizado',
  layout: 'professional',
  recommendedTheme: 'modern',

  variables: {
    tagline: 'Mi eslogan',
    contact: {
      email: 'info@example.com'
    },
    // ...más variables
  },

  sections: {
    hero: { enabled: true },
    contact: { enabled: true }
  },

  version: '0.4.0'
}

// Registrar template
import { templateRegistry } from '@imperiohub/ui/templates'
templateRegistry.register(myCustomTemplate)
```

### Integración con Builders

```tsx
import { PageBuilder } from '@imperiohub/ui/builders'
import { lawyerTemplate } from '@imperiohub/ui/templates'

// Los templates son compatibles con los builders existentes
const pageConfig = {
  template: lawyerTemplate,
  // ...más configuración del builder
}
```

## 🎯 Roadmap

### v0.4.1 - Business Templates (Q3 2024)
- 15 templates de negocios y servicios
- Layout BusinessLayout
- Nuevos componentes especializados

### v0.4.2 - Tech/SaaS Templates (Q3 2024)
- 10 templates tech y SaaS
- Layout TechLayout
- Componentes para SaaS

### v0.4.3 - E-commerce Templates (Q4 2024)
- 5 templates e-commerce
- Layout EcommerceLayout
- Integración con sistemas de pago

### v0.5.0 - CLI & Marketplace (Q4 2024)
- CLI `@imperiohub/cli`
- Marketplace online
- Sistema de rating/reviews

## 📝 Tipos TypeScript

Todos los templates incluyen tipos completos:

```typescript
import type {
  TemplateConfig,
  TemplateVariables,
  TemplateSections,
  ServiceItem,
  Testimonial,
  ContactInfo,
  // ...y más
} from '@imperiohub/ui/templates'
```

## 🤝 Contribuir

¿Quieres agregar un nuevo template?

1. Crea la configuración en `/src/templates/configs/{category}/{template-id}.ts`
2. Exporta en el index de la categoría
3. Agrega a la documentación
4. Envía un PR

## 📄 Licencia

MIT © ImperioHub

## 🆘 Soporte

- 📖 [Documentación completa](https://docs.imperiohub.com)
- 💬 [Discord Community](https://discord.gg/imperiohub)
- 🐛 [Report Issues](https://github.com/imperiohub/ui/issues)

---

**Made with ❤️ by ImperioHub Team**
