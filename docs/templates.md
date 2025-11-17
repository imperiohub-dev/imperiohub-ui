# 🎨 Sistema de Templates v0.4.0

## Introducción

El sistema de templates de ImperioHub UI v0.4.0 proporciona **20+ plantillas profesionales** completamente funcionales y personalizables para crear landing pages en minutos.

## Filosofía del Diseño

### Problema que Resolvemos

Crear una landing page profesional desde cero toma horas, incluso con componentes listos. Los templates de ImperioHub UI resuelven esto ofreciendo:

1. **Plantillas Completas**: Layouts funcionales con contenido de ejemplo
2. **Configuración JSON**: Personaliza sin escribir código
3. **Type-Safe**: TypeScript garantiza configuraciones correctas
4. **Preview Interactivo**: Visualiza antes de implementar
5. **Export Fácil**: Copia o descarga configuraciones

## Arquitectura

```
templates/
├── core/                           # Sistema central
│   ├── types.ts                    # Tipos TypeScript
│   ├── TemplateRegistry.ts         # Registro de templates
│   ├── TemplateLoader.tsx          # Cargador principal
│   ├── TemplatePreview.tsx         # Galería interactiva
│   └── TemplateExporter.ts         # Sistema de exportación
├── layouts/                        # Layouts reutilizables
│   └── ProfessionalLayout.tsx      # Layout para profesionales
├── configs/                        # Configuraciones
│   └── professionals/              # 20 templates profesionales
│       ├── lawyer.ts
│       ├── doctor.ts
│       └── ...
└── index.ts                        # Exports principales
```

## Componentes Principales

### 1. TemplateLoader

**Propósito**: Cargar y renderizar templates con personalización

**Ejemplo**:

```tsx
import { TemplateLoader, lawyerTemplate } from '@imperiohub/ui/templates'

<TemplateLoader
  config={lawyerTemplate}
  overrides={{
    variables: {
      professionalName: 'Tu Nombre',
      contact: { email: 'tu@email.com' }
    }
  }}
/>
```

**Props**:
- `config`: Configuración base del template
- `overrides`: Sobreescribir variables, secciones o tema
- `className`: Clases CSS adicionales
- `onLoad`: Callback cuando carga

### 2. TemplatePreview

**Propósito**: Galería interactiva para seleccionar templates

**Ejemplo**:

```tsx
import { TemplatePreview } from '@imperiohub/ui/templates'

<TemplatePreview
  category="professionals"
  onSelect={(id, config) => {
    console.log('Seleccionado:', id)
  }}
  showFilters={true}
  columns={3}
/>
```

**Características**:
- Búsqueda por nombre, industria, tags
- Filtros por categoría
- Vista de tarjetas responsive
- Callback al seleccionar

### 3. TemplateRegistry

**Propósito**: Sistema centralizado de gestión de templates

**Uso**:

```typescript
import { templateRegistry } from '@imperiohub/ui/templates'

// Obtener template
const lawyer = templateRegistry.get('lawyer')

// Buscar
const results = templateRegistry.search({
  category: 'professionals',
  searchQuery: 'legal'
})

// Obtener todos
const all = templateRegistry.getAll()

// Por categoría
const professionals = templateRegistry.getByCategory('professionals')
```

### 4. TemplateExporter

**Propósito**: Exportar configuraciones en múltiples formatos

**Uso**:

```tsx
import {
  useTemplateExporter,
  TemplateExportButtons
} from '@imperiohub/ui/templates'

// Hook
function MyComponent() {
  const { copy, download } = useTemplateExporter(lawyerTemplate)

  return (
    <>
      <button onClick={() => copy('json')}>Copy JSON</button>
      <button onClick={() => download('typescript')}>Download TS</button>
    </>
  )
}

// O componente listo
<TemplateExportButtons
  config={lawyerTemplate}
  onCopySuccess={() => alert('Copiado!')}
/>
```

## Estructura de Configuración

### TemplateConfig

```typescript
interface TemplateConfig {
  // Identificación
  id: string                        // 'lawyer', 'doctor', etc.
  name: string                      // Nombre descriptivo
  category: TemplateCategory        // 'professionals', 'business', etc.
  description: string               // Descripción del template

  // Layout y tema
  layout: TemplateLayout            // Layout a usar
  recommendedTheme?: string         // Tema recomendado
  customTheme?: Partial<ThemeConfig> // Tema custom

  // Variables personalizables
  variables: TemplateVariables

  // Secciones
  sections: TemplateSections

  // SEO
  seo?: SEOMetadata

  // Metadata
  tags?: string[]
  industry?: string
  targetAudience?: string[]
  version?: string
}
```

### TemplateVariables

```typescript
interface TemplateVariables {
  // Básico
  professionalName?: string
  businessName?: string
  profession?: string
  tagline: string
  description?: string
  yearsExperience?: number

  // Visual
  heroImage?: string
  logo?: string

  // Contenido
  services?: ServiceItem[]
  testimonials?: Testimonial[]
  team?: TeamMember[]
  projects?: ProjectItem[]
  certifications?: Certification[] | string[]
  faq?: FAQItem[]
  blog?: BlogPost[]

  // Contacto
  contact: ContactInfo
  social?: SocialLinks

  // Custom
  [key: string]: any
}
```

### TemplateSections

```typescript
interface TemplateSections {
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
}

interface SectionConfig {
  enabled: boolean
  variant?: 'default' | 'professional' | 'modern' | 'minimal' | 'bold'
  layout?: 'default' | 'side-image' | 'centered' | 'split'
  display?: 'grid' | 'list' | 'carousel' | 'table' | 'masonry'
  columns?: number
  carousel?: boolean
  showMap?: boolean
  customClass?: string
}
```

## Layouts Disponibles

### ProfessionalLayout

**Uso**: Templates de profesionales autónomos (abogados, doctores, etc.)

**Características**:
- Hero section destacada
- Secciones de servicios optimizadas
- Testimoniales con carousel
- Certificaciones
- Contacto con mapa

**Secciones soportadas**:
- ✅ Hero
- ✅ About
- ✅ Experience
- ✅ Services
- ✅ Certifications
- ✅ Team
- ✅ Portfolio
- ✅ Testimonials
- ✅ Pricing
- ✅ FAQ
- ✅ Contact
- ✅ Footer

### BusinessLayout (Coming in v0.4.1)

Para negocios y servicios locales.

### TechLayout (Coming in v0.4.2)

Para productos SaaS y tech.

### EcommerceLayout (Coming in v0.4.3)

Para tiendas online.

## Casos de Uso

### Caso 1: Usar Template Tal Cual

El caso más simple - usar un template sin modificaciones:

```tsx
import { TemplateLoader, doctorTemplate } from '@imperiohub/ui/templates'

function App() {
  return <TemplateLoader config={doctorTemplate} />
}
```

### Caso 2: Personalizar Variables Básicas

Cambiar información clave manteniendo estructura:

```tsx
<TemplateLoader
  config={lawyerTemplate}
  overrides={{
    variables: {
      professionalName: 'Lic. Juan Pérez',
      tagline: 'Defensa legal con excelencia',
      contact: {
        email: 'juan@ejemplo.com',
        phone: '+52 123 456 7890'
      }
    }
  }}
/>
```

### Caso 3: Personalización Completa

Control total sobre el contenido:

```tsx
const myConfig = {
  ...lawyerTemplate,
  variables: {
    ...lawyerTemplate.variables,
    professionalName: 'Mi Nombre',
    services: [
      {
        id: '1',
        name: 'Servicio 1',
        description: 'Descripción',
        price: { amount: 100, currency: 'USD', period: 'hour' },
        icon: 'Scale'
      }
    ],
    testimonials: [/* ... */],
    // ...todo personalizado
  },
  sections: {
    hero: { enabled: true, variant: 'modern' },
    services: { enabled: true, columns: 2 },
    blog: { enabled: false }, // Ocultar blog
    // ...configuración de secciones
  }
}

<TemplateLoader config={myConfig} />
```

### Caso 4: Tema Personalizado

Usar con tema custom:

```tsx
<TemplateLoader
  config={architectTemplate}
  overrides={{
    theme: {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      accent: '#f59e0b',
      // ...más colores
    }
  }}
/>
```

### Caso 5: Galería de Selección

Permitir al usuario elegir:

```tsx
import { useState } from 'react'
import {
  TemplatePreview,
  TemplateLoader,
  type TemplateConfig
} from '@imperiohub/ui/templates'

function TemplateBuilder() {
  const [selected, setSelected] = useState<TemplateConfig | null>(null)

  if (!selected) {
    return (
      <TemplatePreview
        category="professionals"
        onSelect={(id, config) => setSelected(config)}
      />
    )
  }

  return <TemplateLoader config={selected} />
}
```

## Integración con Otros Sistemas

### Con PageBuilder

```tsx
import { PageBuilder } from '@imperiohub/ui/builders'
import { lawyerTemplate } from '@imperiohub/ui/templates'

const pageConfig = {
  sections: [
    // Secciones del template se integran perfectamente
    { type: 'hero', props: { ...lawyerTemplate.variables } }
  ]
}
```

### Con ThemeProvider

```tsx
import { ThemeProvider } from '@imperiohub/ui/theming'
import { TemplateLoader, consultantTemplate } from '@imperiohub/ui/templates'

<ThemeProvider theme="corporate">
  <TemplateLoader config={consultantTemplate} />
</ThemeProvider>
```

## Performance

### Optimizaciones Implementadas

1. **Lazy Loading**: Templates no usados no se cargan
2. **Code Splitting**: Cada template puede dividirse
3. **Memoización**: Componentes memoizados internamente
4. **Tree Shaking**: Solo importas lo que usas

### Mejores Prácticas

```tsx
// ✅ BIEN: Solo importa lo que necesitas
import { TemplateLoader, lawyerTemplate } from '@imperiohub/ui/templates'

// ❌ MAL: Importar todo
import * as Templates from '@imperiohub/ui/templates'
```

## Testing

```tsx
import { render } from '@testing-library/react'
import { TemplateLoader, lawyerTemplate } from '@imperiohub/ui/templates'

test('render lawyer template', () => {
  const { getByText } = render(<TemplateLoader config={lawyerTemplate} />)
  expect(getByText(lawyerTemplate.variables.tagline)).toBeInTheDocument()
})
```

## FAQ

**Q: ¿Puedo crear mi propio template?**
A: Sí, crea un objeto `TemplateConfig` y regístralo con `templateRegistry.register()`.

**Q: ¿Los templates son responsive?**
A: Sí, todos los templates están optimizados para móvil, tablet y desktop.

**Q: ¿Puedo mezclar secciones de diferentes templates?**
A: Actualmente no directamente, pero puedes crear un template custom con las secciones que necesites.

**Q: ¿Cómo agrego mi propio layout?**
A: Crea un componente layout en `/src/templates/layouts/` y actualiza el `TemplateLoader`.

**Q: ¿Hay límite de personalización?**
A: No, puedes sobreescribir cualquier variable o configuración del template.

## Changelog

### v0.4.0 (Current)
- ✨ 20 templates de profesionales
- ✨ Sistema de preview interactivo
- ✨ Exportación JSON/TS/JS
- ✨ ProfessionalLayout
- ✨ Integración completa con temas

---

**Siguiente**: [CLI Tool](./cli.md) | [Marketplace](./marketplace.md)
