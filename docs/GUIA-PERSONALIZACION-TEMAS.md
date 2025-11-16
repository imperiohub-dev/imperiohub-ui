# 🎨 Guía Completa de Personalización de Temas

**Aprende a personalizar colores, fuentes y todos los aspectos visuales de ImperioHub UI sin romper nada**

---

## 📋 Tabla de Contenidos

- [Introducción](#introducción)
- [Conceptos Básicos](#conceptos-básicos)
- [Método 1: Función injectTheme](#método-1-función-injecttheme)
- [Método 2: Configuración en LandingPageBuilder](#método-2-configuración-en-landingpagebuilder)
- [Método 3: CSS Variables Directas](#método-3-css-variables-directas)
- [Método 4: SCSS Personalizado](#método-4-scss-personalizado)
- [Personalización Avanzada](#personalización-avanzada)
- [Paletas de Colores Recomendadas](#paletas-de-colores-recomendadas)
- [Fuentes de Google](#fuentes-de-google)
- [Validación y Mejores Prácticas](#validación-y-mejores-prácticas)
- [Solución de Problemas](#solución-de-problemas)
- [Ejemplos Completos](#ejemplos-completos)

---

## Introducción

### ¿Por qué Personalizar tu Tema?

La personalización de temas te permite:

- 🎨 **Alinear con tu marca:** Usa tus colores corporativos
- 🎯 **Destacar:** Diferénciate de otros sitios
- 💼 **Profesionalismo:** Consistencia visual en todo tu sitio
- 🎭 **Versatilidad:** Crea múltiples variantes para diferentes secciones
- 🌓 **Modo oscuro:** Implementa fácilmente modo día/noche

### ¿Es Seguro Personalizar?

**¡SÍ! ImperioHub UI está diseñado para que personalices sin miedo:**

- ✅ **Validación automática** de colores y contraste
- ✅ **Valores predeterminados seguros** si algo falla
- ✅ **TypeScript** te avisa de errores antes de ejecutar
- ✅ **No puedes romper el layout** cambiando colores o fuentes
- ✅ **Accesibilidad garantizada** con advertencias automáticas

---

## Conceptos Básicos

### Sistema de Temas de ImperioHub UI

ImperioHub UI usa un **sistema de temas en capas**:

```
┌─────────────────────────────────────┐
│   1. Tema Base (Default Theme)     │  ← Valores predeterminados
├─────────────────────────────────────┤
│   2. CSS Variables                 │  ← Personalizables en runtime
├─────────────────────────────────────┤
│   3. Props de Componentes          │  ← Sobrescriben todo lo anterior
└─────────────────────────────────────┘
```

**Prioridad (de menor a mayor):**
1. Tema base SCSS
2. CSS Variables globales
3. Tema inyectado con `injectTheme()`
4. Tema en config de `LandingPageBuilder`
5. Props directas en componentes

### Variables que Puedes Personalizar

#### 🎨 Colores

```typescript
colors: {
  // Colores de marca
  primary: string        // Color principal de tu marca
  secondary: string      // Color secundario
  accent: string        // Color de acento para highlights

  // Colores semánticos
  success: string       // Para mensajes de éxito
  error: string         // Para errores
  warning: string       // Para advertencias
  info: string          // Para información

  // Colores de superficie
  background: string    // Fondo principal
  surface: string       // Fondo de tarjetas
  text: string          // Color de texto principal
  textSecondary: string // Color de texto secundario
  border: string        // Color de bordes
}
```

#### ✍️ Tipografía

```typescript
typography: {
  fontFamily: {
    heading: string     // Fuente para títulos
    body: string        // Fuente para texto normal
    mono: string        // Fuente monoespaciada (código)
  },
  fontSize: {
    xs: string          // Extra pequeño
    sm: string          // Pequeño
    base: string        // Base (normal)
    lg: string          // Grande
    xl: string          // Extra grande
    '2xl': string       // 2X grande
    // ... hasta 6xl
  },
  fontWeight: {
    light: number       // 300
    normal: number      // 400
    medium: number      // 500
    semibold: number    // 600
    bold: number        // 700
    extrabold: number   // 800
  },
  lineHeight: {
    tight: number       // 1.25
    normal: number      // 1.5
    relaxed: number     // 1.75
    loose: number       // 2
  }
}
```

#### 📏 Espaciado

```typescript
spacing: {
  xs: string           // 0.4rem (4px)
  sm: string           // 0.8rem (8px)
  md: string           // 1.6rem (16px)
  lg: string           // 2.4rem (24px)
  xl: string           // 3.2rem (32px)
  '2xl': string        // 4.8rem (48px)
  // ...
  section: string      // Padding de secciones
  container: string    // Max width de contenedores
}
```

#### 🔲 Bordes y Sombras

```typescript
borderRadius: {
  none: string         // 0
  sm: string           // 4px
  md: string           // 8px
  lg: string           // 12px
  xl: string           // 16px
  full: string         // 9999px (círculo)
}

shadows: {
  sm: string           // Sombra sutil
  base: string         // Sombra normal
  md: string           // Sombra media
  lg: string           // Sombra grande
  xl: string           // Sombra extra grande
  '2xl': string        // Sombra máxima
}
```

---

## Método 1: Función `injectTheme()`

### Uso Básico

El método más simple para aplicar un tema globalmente:

```tsx
import { injectTheme } from '@imperiohub/ui'

// Inyectar tema al inicio de tu app
injectTheme({
  colors: {
    primary: '#3b82f6',    // Azul
    secondary: '#8b5cf6',  // Morado
    accent: '#f59e0b'      // Naranja
  }
})

function App() {
  return <div>Tu aplicación</div>
}
```

### Personalización Completa

```tsx
import { injectTheme } from '@imperiohub/ui'

injectTheme({
  // ====== COLORES ======
  colors: {
    // Marca
    primary: '#6366f1',       // Indigo
    secondary: '#8b5cf6',     // Violeta
    accent: '#f59e0b',        // Ámbar

    // Semánticos
    success: '#10b981',       // Verde
    error: '#ef4444',         // Rojo
    warning: '#f59e0b',       // Ámbar
    info: '#3b82f6',          // Azul

    // Superficies
    background: '#ffffff',    // Blanco
    surface: '#f9fafb',       // Gris muy claro
    text: '#1f2937',          // Gris oscuro
    textSecondary: '#6b7280', // Gris medio
    border: '#e5e7eb',        // Gris claro
  },

  // ====== TIPOGRAFÍA ======
  typography: {
    fontFamily: {
      heading: '"Playfair Display", serif',
      body: '"Inter", sans-serif',
      mono: '"Fira Code", monospace'
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2.0rem',
      '2xl': '2.4rem',
      '3xl': '3.0rem',
      '4xl': '3.6rem',
      '5xl': '4.8rem',
      '6xl': '6.0rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    }
  },

  // ====== ESPACIADO ======
  spacing: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.2rem',
    '2xl': '4.8rem',
    '3xl': '6.4rem',
    '4xl': '9.6rem',
    section: '8rem',
    container: '120rem'
  },

  // ====== BORDES ======
  borderRadius: {
    none: '0',
    sm: '0.4rem',
    base: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xl: '2.0rem',
    '2xl': '2.4rem',
    full: '9999px'
  },

  // ====== SOMBRAS ======
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  }
})
```

### ¿Cuándo Usar Este Método?

✅ **Usa `injectTheme()` cuando:**
- Quieres un tema global para toda tu aplicación
- Estás usando componentes individuales (no LandingPageBuilder)
- Necesitas cambiar el tema dinámicamente
- Quieres aplicar el tema antes de que React renderice

❌ **NO uses `injectTheme()` cuando:**
- Ya estás usando `LandingPageBuilder` con config.theme
- Solo quieres cambiar colores de un componente específico

---

## Método 2: Configuración en LandingPageBuilder

### Uso en JSON Config

Si usas `LandingPageBuilder`, puedes definir el tema directamente en la configuración:

```tsx
import { LandingPageBuilder } from '@imperiohub/ui'

const config = {
  // ====== TEMA ======
  theme: {
    colors: {
      primary: '#1e40af',    // Azul profesional
      secondary: '#7c3aed',  // Púrpura
      accent: '#f59e0b',     // Ámbar
    },
    typography: {
      fontFamily: {
        heading: '"Poppins", sans-serif',
        body: '"Inter", sans-serif'
      }
    }
  },

  // ====== RESTO DE CONFIG ======
  sections: [
    // ... tus secciones
  ]
}

function App() {
  return <LandingPageBuilder config={config} />
}
```

### Personalización por Sección

Puedes tener temas diferentes para diferentes secciones:

```tsx
const config = {
  sections: [
    {
      type: 'hero',
      theme: {
        colors: {
          primary: '#1e40af'  // Azul para hero
        }
      },
      data: { /* ... */ }
    },
    {
      type: 'features',
      theme: {
        colors: {
          primary: '#059669'  // Verde para features
        }
      },
      data: { /* ... */ }
    }
  ]
}
```

### ¿Cuándo Usar Este Método?

✅ **Usa config.theme cuando:**
- Estás usando `LandingPageBuilder`
- Quieres temas diferentes por sección
- La configuración viene de una base de datos/CMS
- Quieres que la IA genere el tema automáticamente

---

## Método 3: CSS Variables Directas

### Modificar CSS Variables en Runtime

Para cambios dinámicos (ej. toggle de modo oscuro):

```tsx
import { useEffect } from 'react'

function ThemeToggle() {
  const applyDarkMode = () => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', '#60a5fa')
    root.style.setProperty('--color-background', '#1f2937')
    root.style.setProperty('--color-text', '#f9fafb')
    root.style.setProperty('--color-surface', '#374151')
  }

  const applyLightMode = () => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', '#3b82f6')
    root.style.setProperty('--color-background', '#ffffff')
    root.style.setProperty('--color-text', '#1f2937')
    root.style.setProperty('--color-surface', '#f9fafb')
  }

  return (
    <div>
      <button onClick={applyLightMode}>☀️ Claro</button>
      <button onClick={applyDarkMode}>🌙 Oscuro</button>
    </div>
  )
}
```

### Variables CSS Disponibles

```css
:root {
  /* Colores */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #f59e0b;
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #1f2937;
  --color-text-secondary: #6b7280;
  --color-border: #e5e7eb;

  /* Tipografía */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;

  /* Tamaños de fuente */
  --font-size-xs: 1.2rem;
  --font-size-sm: 1.4rem;
  --font-size-base: 1.6rem;
  --font-size-lg: 1.8rem;
  --font-size-xl: 2.0rem;
  --font-size-2xl: 2.4rem;
  --font-size-3xl: 3.0rem;
  --font-size-4xl: 3.6rem;
  --font-size-5xl: 4.8rem;
  --font-size-6xl: 6.0rem;

  /* Espaciado */
  --spacing-xs: 0.4rem;
  --spacing-sm: 0.8rem;
  --spacing-md: 1.6rem;
  --spacing-lg: 2.4rem;
  --spacing-xl: 3.2rem;
  --spacing-2xl: 4.8rem;

  /* Border radius */
  --radius-sm: 0.4rem;
  --radius-md: 0.8rem;
  --radius-lg: 1.2rem;
  --radius-xl: 1.6rem;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### ¿Cuándo Usar Este Método?

✅ **Usa CSS Variables cuando:**
- Necesitas cambios en runtime (modo oscuro, theme switcher)
- Quieres el máximo control
- Estás integrando con sistemas existentes
- Necesitas animaciones de transición entre temas

---

## Método 4: SCSS Personalizado

### Crear tu Propio Archivo de Tema

**Paso 1:** Crea un archivo de tema SCSS:

```scss
// mi-tema.scss

// ====== COLORES DE MI MARCA ======
$primary-color: #6366f1;
$secondary-color: #8b5cf6;
$accent-color: #f59e0b;

// ====== SOBRESCRIBIR VARIABLES DE IMPERIOHUB ======
:root {
  --color-primary: #{$primary-color};
  --color-secondary: #{$secondary-color};
  --color-accent: #{$accent-color};

  // Tipografía
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;

  // Espaciado personalizado
  --spacing-section: 10rem;
  --container-max-width: 140rem;
}

// ====== ESTILOS PERSONALIZADOS ======
.hero {
  background: linear-gradient(135deg, $primary-color, $secondary-color);
}

.custom-button {
  background: $accent-color;
  &:hover {
    background: darken($accent-color, 10%);
  }
}
```

**Paso 2:** Importa tu tema en tu aplicación:

```tsx
// main.tsx o App.tsx
import './mi-tema.scss'           // Tu tema personalizado
import '@imperiohub/ui/styles.css'  // Estilos de ImperioHub

function App() {
  return <div>Tu app</div>
}
```

**⚠️ IMPORTANTE:** El orden de importación importa:
1. Primero tu tema personalizado
2. Luego los estilos de ImperioHub

### ¿Cuándo Usar Este Método?

✅ **Usa SCSS personalizado cuando:**
- Tienes un sistema de diseño complejo
- Necesitas usar características avanzadas de SCSS
- Quieres control total sobre los estilos
- Estás migrando desde un sistema existente

---

## Personalización Avanzada

### Hook `useTheme`

```tsx
import { useTheme } from '@imperiohub/ui'

function ThemeSwitcher() {
  const { theme, setTheme, isDark, toggleDarkMode } = useTheme()

  const changeToBlueTheme = () => {
    setTheme({
      colors: {
        primary: '#3b82f6',
        secondary: '#1e40af'
      }
    })
  }

  const changeToPurpleTheme = () => {
    setTheme({
      colors: {
        primary: '#8b5cf6',
        secondary: '#7c3aed'
      }
    })
  }

  return (
    <div>
      <button onClick={changeToBlueTheme}>Tema Azul</button>
      <button onClick={changeToPurpleTheme}>Tema Morado</button>
      <button onClick={toggleDarkMode}>
        {isDark ? '☀️' : '🌙'} Cambiar Modo
      </button>
    </div>
  )
}
```

### ThemeProvider para Contextos Locales

```tsx
import { ThemeProvider } from '@imperiohub/ui'

function App() {
  return (
    <div>
      {/* Header con tema azul */}
      <ThemeProvider theme={{ colors: { primary: '#3b82f6' } }}>
        <Header />
      </ThemeProvider>

      {/* Main content con tema morado */}
      <ThemeProvider theme={{ colors: { primary: '#8b5cf6' } }}>
        <MainContent />
      </ThemeProvider>

      {/* Footer con tema verde */}
      <ThemeProvider theme={{ colors: { primary: '#10b981' } }}>
        <Footer />
      </ThemeProvider>
    </div>
  )
}
```

### Modo Oscuro Automático

```tsx
import { useEffect } from 'react'
import { injectTheme } from '@imperiohub/ui'

function App() {
  useEffect(() => {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (prefersDark) {
      injectTheme({
        colors: {
          background: '#1f2937',
          surface: '#374151',
          text: '#f9fafb',
          textSecondary: '#d1d5db',
          primary: '#60a5fa',
        }
      })
    }

    // Escuchar cambios
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // Aplicar modo oscuro
      } else {
        // Aplicar modo claro
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return <div>Tu app</div>
}
```

---

## Paletas de Colores Recomendadas

### Por Industria

#### 🏛️ Abogados / Legal

```tsx
{
  colors: {
    primary: '#1e40af',    // Azul oscuro profesional
    secondary: '#7c3aed',  // Púrpura
    accent: '#d97706',     // Dorado
    background: '#ffffff',
    text: '#1f2937'
  }
}
```

#### 🏥 Medicina / Salud

```tsx
{
  colors: {
    primary: '#0ea5e9',    // Azul cielo
    secondary: '#06b6d4',  // Cian
    accent: '#10b981',     // Verde
    background: '#ffffff',
    text: '#1f2937'
  }
}
```

#### 🏗️ Arquitectura / Construcción

```tsx
{
  colors: {
    primary: '#059669',    // Verde
    secondary: '#0891b2',  // Teal
    accent: '#f59e0b',     // Ámbar
    background: '#ffffff',
    text: '#1f2937'
  }
}
```

#### 💼 Consultoría / Negocios

```tsx
{
  colors: {
    primary: '#4f46e5',    // Indigo
    secondary: '#7c3aed',  // Violeta
    accent: '#f59e0b',     // Naranja
    background: '#ffffff',
    text: '#1f2937'
  }
}
```

#### 🎨 Creativos / Diseño

```tsx
{
  colors: {
    primary: '#ec4899',    // Rosa
    secondary: '#8b5cf6',  // Morado
    accent: '#f59e0b',     // Naranja
    background: '#ffffff',
    text: '#1f2937'
  }
}
```

### Por Estilo

#### Minimalista

```tsx
{
  colors: {
    primary: '#000000',
    secondary: '#525252',
    accent: '#737373',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#171717'
  }
}
```

#### Vibrante

```tsx
{
  colors: {
    primary: '#ec4899',    // Rosa
    secondary: '#f59e0b',  // Naranja
    accent: '#8b5cf6',     // Morado
    background: '#fef3c7',
    text: '#1f2937'
  }
}
```

#### Naturaleza / Eco

```tsx
{
  colors: {
    primary: '#059669',    // Verde
    secondary: '#0891b2',  // Teal
    accent: '#f59e0b',     // Naranja
    background: '#f0fdf4',
    text: '#14532d'
  }
}
```

---

## Fuentes de Google

### Cómo Usar Fuentes de Google Fonts

**Paso 1:** Agrega el link en tu `index.html`:

```html
<head>
  <!-- Fuentes para títulos (serif elegante) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
```

**Paso 2:** Aplica las fuentes en tu tema:

```tsx
injectTheme({
  typography: {
    fontFamily: {
      heading: '"Playfair Display", serif',
      body: '"Inter", sans-serif'
    }
  }
})
```

### Combinaciones de Fuentes Recomendadas

#### Profesional y Elegante
```tsx
heading: '"Playfair Display", serif'
body: '"Inter", sans-serif'
```

#### Moderno y Limpio
```tsx
heading: '"Poppins", sans-serif'
body: '"Inter", sans-serif'
```

#### Clásico y Tradicional
```tsx
heading: '"Merriweather", serif'
body: '"Open Sans", sans-serif'
```

#### Creativo y Único
```tsx
heading: '"Montserrat", sans-serif'
body: '"Lato", sans-serif'
```

#### Tech y Moderno
```tsx
heading: '"Space Grotesk", sans-serif'
body: '"IBM Plex Sans", sans-serif'
```

---

## Validación y Mejores Prácticas

### Validación Automática de Accesibilidad

ImperioHub UI valida automáticamente:

```tsx
import { validateTheme } from '@imperiohub/ui/utils'

const miTema = {
  colors: {
    primary: '#ffff00',      // Amarillo
    background: '#ffffff'    // Blanco
  }
}

const validation = validateTheme(miTema)

if (!validation.valid) {
  console.warn('Problemas encontrados:')
  validation.warnings.forEach(warning => {
    console.warn(`- ${warning.message}`)
    console.warn(`  Recomendación: ${warning.fix}`)
  })
}

// Salida:
// - Contraste insuficiente entre primary y background (1.8:1)
//   Recomendación: Usa un amarillo más oscuro como #cccc00 (4.5:1)
```

### Mejores Prácticas

#### ✅ DO (Hacer)

1. **Usa contrastes suficientes:**
   ```tsx
   ✅ primary: '#1e40af' con background: '#ffffff' (11.2:1)
   ```

2. **Prueba en modo oscuro:**
   ```tsx
   // Verifica que tus colores se vean bien en ambos modos
   ```

3. **Usa variables semánticas:**
   ```tsx
   ✅ error: '#ef4444'  // Rojo para errores
   ✅ success: '#10b981' // Verde para éxito
   ```

4. **Mantén consistencia:**
   ```tsx
   // Usa la misma familia de fuentes
   heading: '"Poppins", sans-serif'
   body: '"Poppins", sans-serif'  // Misma familia, diferente peso
   ```

#### ❌ DON'T (No Hacer)

1. **Colores con bajo contraste:**
   ```tsx
   ❌ primary: '#ffff00' con background: '#ffffff' (1.8:1)
   ```

2. **Demasiados colores:**
   ```tsx
   ❌ primary, secondary, accent, tertiary, quaternary...
   // Mantén 3-4 colores máximo
   ```

3. **Fuentes ilegibles:**
   ```tsx
   ❌ fontSize: { base: '1.0rem' }  // Muy pequeño
   ✅ fontSize: { base: '1.6rem' }  // Legible
   ```

4. **Ignorar advertencias:**
   ```tsx
   // Si el validador te advierte, ¡escucha!
   ```

---

## Solución de Problemas

### Problema 1: Los colores no se aplican

**Síntoma:** Cambias los colores pero no se reflejan en la UI.

**Solución:**

```tsx
// ❌ Incorrecto
injectTheme({ primary: '#3b82f6' })

// ✅ Correcto
injectTheme({
  colors: {  // ⬅️ Falta el objeto colors
    primary: '#3b82f6'
  }
})
```

### Problema 2: Fuentes no se cargan

**Síntoma:** Las fuentes se ven con fallback (Arial/Times).

**Solución:**

```html
<!-- Asegúrate de tener el link en index.html -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

```tsx
// Y usa comillas dobles en el CSS
typography: {
  fontFamily: {
    heading: '"Poppins", sans-serif'  // ⬅️ Comillas dobles
  }
}
```

### Problema 3: Tema se resetea al recargar

**Síntoma:** Al recargar la página, vuelve al tema por defecto.

**Solución:**

```tsx
import { useEffect } from 'react'
import { injectTheme } from '@imperiohub/ui'

function App() {
  useEffect(() => {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      injectTheme(JSON.parse(savedTheme))
    }
  }, [])

  const handleThemeChange = (newTheme) => {
    injectTheme(newTheme)
    // Guardar en localStorage
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  return <div>...</div>
}
```

### Problema 4: Conflictos con otros estilos

**Síntoma:** Los estilos de ImperioHub se mezclan con otros.

**Solución:**

```tsx
// Orden de importación correcto:
import './reset.css'              // 1. Reset CSS
import './global.css'             // 2. Tus estilos globales
import '@imperiohub/ui/styles.css'  // 3. ImperioHub (último)
```

---

## Ejemplos Completos

### Ejemplo 1: Sitio de Abogado con Tema Profesional

```tsx
import '@imperiohub/ui/styles.css'
import { injectTheme, Hero, Features, CTA } from '@imperiohub/ui'
import { Scale, Users, FileText } from 'lucide-react'

// Aplicar tema profesional para abogados
injectTheme({
  colors: {
    primary: '#1e40af',      // Azul marino profesional
    secondary: '#7c3aed',    // Púrpura
    accent: '#d97706',       // Dorado
    success: '#059669',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#1f2937',
  },
  typography: {
    fontFamily: {
      heading: '"Playfair Display", serif',
      body: '"Inter", sans-serif'
    },
    fontSize: {
      base: '1.6rem'
    }
  },
  spacing: {
    section: '8rem'
  }
})

function LawyerSite() {
  return (
    <>
      <Hero
        title="Defendemos tus Derechos con Experiencia"
        subtitle="Más de 15 años en derecho civil, familiar y laboral"
        primaryCta={{ text: 'Consulta Gratuita', href: '/contact' }}
        variant="split"
        gradientTitle
      />

      <Features
        title="Áreas de Práctica"
        features={[
          {
            icon: Scale,
            title: 'Derecho Civil',
            description: 'Contratos, reclamaciones, responsabilidad civil'
          },
          {
            icon: Users,
            title: 'Derecho Familiar',
            description: 'Divorcios, custodia, pensiones alimenticias'
          },
          {
            icon: FileText,
            title: 'Derecho Laboral',
            description: 'Despidos, acoso laboral, negociaciones'
          }
        ]}
      />

      <CTA
        title="¿Necesitas Asesoría Legal?"
        description="Agenda una consulta gratuita hoy mismo"
        primaryCta={{ text: 'Contactar Ahora', href: '/contact' }}
      />
    </>
  )
}

export default LawyerSite
```

### Ejemplo 2: Consultorio Médico con Modo Claro/Oscuro

```tsx
import { useState } from 'react'
import '@imperiohub/ui/styles.css'
import { injectTheme, LandingPageBuilder } from '@imperiohub/ui'

const lightTheme = {
  colors: {
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#10b981',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#1f2937',
  }
}

const darkTheme = {
  colors: {
    primary: '#38bdf8',
    secondary: '#22d3ee',
    accent: '#34d399',
    background: '#1f2937',
    surface: '#374151',
    text: '#f9fafb',
  }
}

function DoctorSite() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const newTheme = !isDark ? darkTheme : lightTheme
    injectTheme(newTheme)
    setIsDark(!isDark)
  }

  const config = {
    theme: isDark ? darkTheme : lightTheme,
    sections: [
      {
        type: 'hero',
        data: {
          title: 'Cuidamos tu Salud con Excelencia',
          subtitle: 'Atención médica de calidad con 20 años de experiencia',
          primaryCta: { text: 'Agendar Cita', href: '/appointment' }
        }
      }
    ]
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          background: isDark ? '#374151' : '#f9fafb',
          color: isDark ? '#f9fafb' : '#1f2937',
          cursor: 'pointer'
        }}
      >
        {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

      <LandingPageBuilder config={config} />
    </div>
  )
}

export default DoctorSite
```

### Ejemplo 3: Múltiples Temas Dinámicos

```tsx
import { useState } from 'react'
import '@imperiohub/ui/styles.css'
import { injectTheme, Hero } from '@imperiohub/ui'

const themes = {
  professional: {
    colors: { primary: '#1e40af', secondary: '#7c3aed', accent: '#d97706' },
    typography: { fontFamily: { heading: '"Playfair Display", serif' } }
  },
  creative: {
    colors: { primary: '#ec4899', secondary: '#8b5cf6', accent: '#f59e0b' },
    typography: { fontFamily: { heading: '"Montserrat", sans-serif' } }
  },
  nature: {
    colors: { primary: '#059669', secondary: '#0891b2', accent: '#f59e0b' },
    typography: { fontFamily: { heading: '"Merriweather", serif' } }
  }
}

function MultiThemeSite() {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('professional')

  const changeTheme = (themeName: keyof typeof themes) => {
    injectTheme(themes[themeName])
    setCurrentTheme(themeName)
  }

  return (
    <div>
      {/* Theme Switcher */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button onClick={() => changeTheme('professional')}>
          💼 Profesional
        </button>
        <button onClick={() => changeTheme('creative')}>
          🎨 Creativo
        </button>
        <button onClick={() => changeTheme('nature')}>
          🌿 Naturaleza
        </button>
      </div>

      {/* Content */}
      <Hero
        title={`Tema ${currentTheme}`}
        subtitle="Cambia entre temas y ve los colores adaptarse"
        primaryCta={{ text: 'Botón Primario', href: '#' }}
        secondaryCta={{ text: 'Botón Secundario', href: '#' }}
      />
    </div>
  )
}

export default MultiThemeSite
```

---

## 🎉 Conclusión

¡Felicidades! Ahora sabes cómo personalizar completamente los temas de ImperioHub UI.

### Recap Rápido

| Método | Cuándo Usar | Dificultad |
|--------|-------------|-----------|
| `injectTheme()` | Tema global, cambios dinámicos | ⭐⭐☆☆☆ |
| `config.theme` | Con LandingPageBuilder, por sección | ⭐☆☆☆☆ |
| CSS Variables | Máximo control, transiciones | ⭐⭐⭐☆☆ |
| SCSS Custom | Sistemas complejos, migraciones | ⭐⭐⭐⭐☆ |

### Próximos Pasos

1. 🎨 Experimenta con diferentes paletas de colores
2. ✍️ Prueba combinaciones de fuentes
3. 🌓 Implementa modo oscuro
4. 📏 Ajusta espaciados para tu diseño
5. 🔍 Usa el validador para accesibilidad

### Recursos Útiles

- 🎨 [Coolors.co](https://coolors.co) - Generador de paletas
- ✍️ [Google Fonts](https://fonts.google.com) - Fuentes gratuitas
- 🔍 [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Validar contraste
- 📚 [Documentación Completa](../README.es.md)

---

<div align="center">

**¿Listo para crear tu tema personalizado?** 🎨

[⬆ Volver arriba](#-guía-completa-de-personalización-de-temas)

</div>
