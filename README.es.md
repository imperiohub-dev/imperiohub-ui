# 🚀 ImperioHub UI - Biblioteca de Componentes React Profesional

<div align="center">

![Version](https://img.shields.io/badge/version-0.2.1-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg)

**Crea landing pages profesionales en minutos, no en semanas**

[English](./README.md) · **Español** · [Demo](https://imperiohub-ui.vercel.app) · [Documentación](./docs)

</div>

---

## 📋 Tabla de Contenidos

- [¿Qué es ImperioHub UI?](#-qué-es-imperiohub-ui)
- [¿Por qué ImperioHub UI?](#-por-qué-imperiohub-ui)
- [Instalación Rápida](#-instalación-rápida)
- [Uso Básico](#-uso-básico)
- [Características Principales](#-características-principales)
- [Componentes Disponibles](#-componentes-disponibles)
- [Sistema de Temas](#-sistema-de-temas)
- [Construcción JSON (Sin Código)](#-construcción-json-sin-código)
- [Plantillas Listas para Usar](#-plantillas-listas-para-usar)
- [Ejemplos Completos](#-ejemplos-completos)
- [Integración con IA](#-integración-con-ia)
- [Documentación Completa](#-documentación-completa)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 🎯 ¿Qué es ImperioHub UI?

**ImperioHub UI** es una biblioteca de componentes React profesional diseñada específicamente para **profesionales autónomos** (abogados, doctores, consultores, arquitectos, contadores) que necesitan crear landing pages hermosas y funcionales en **tiempo récord**.

### ✨ En pocas palabras:

```bash
# Instala el paquete
npm install @imperiohub/ui

# Importa los estilos y componentes
import '@imperiohub/ui/styles.css'
import { Hero, Features, CTA } from '@imperiohub/ui'

# ¡Ya tienes una landing page profesional lista!
```

---

## 💡 ¿Por qué ImperioHub UI?

### ❌ **Antes de ImperioHub UI:**

- ⏰ **Semanas** diseñando y desarrollando una landing page
- 💸 **Miles de dólares** en diseñadores y desarrolladores
- 🔧 Configuración compleja de herramientas y dependencias
- 📱 Problemas de responsive design
- 🎨 Inconsistencias visuales entre páginas
- ♿ Accesibilidad como "algo extra"

### ✅ **Con ImperioHub UI:**

- ⚡ **Minutos** para tener una landing page profesional
- 💰 **Gratis** y open source (MIT license)
- 🚀 Instalación de una línea
- 📱 **Responsive por defecto** en todos los dispositivos
- 🎨 **Sistema de temas consistente** y personalizable
- ♿ **Accesibilidad integrada** (WCAG 2.1)
- 🤖 **Compatible con IA** para generación automática
- 📦 **TypeScript** para autocompletado y type safety
- 🧩 **28 componentes** listos para usar

---

## 📦 Instalación Rápida

### 1. Instalar el paquete

```bash
# Con npm
npm install @imperiohub/ui

# Con yarn
yarn add @imperiohub/ui

# Con pnpm
pnpm add @imperiohub/ui
```

### 2. Importar los estilos globales

En tu archivo principal (ej. `main.tsx` o `App.tsx`):

```tsx
import '@imperiohub/ui/styles.css'
```

### 3. ¡Listo! Empieza a usar los componentes

```tsx
import { Button, Hero } from '@imperiohub/ui'

function App() {
  return (
    <div>
      <Hero
        title="¡Bienvenido a mi sitio!"
        subtitle="Servicios profesionales de primera calidad"
        primaryCta={{ text: 'Comenzar', href: '/contact' }}
      />
      <Button variant="primary">Contáctame</Button>
    </div>
  )
}
```

---

## 🎨 Uso Básico

### Ejemplo 1: Página de Abogado con Componentes Tradicionales

```tsx
import '@imperiohub/ui/styles.css'
import { Hero, Features, Testimonials, Pricing, CTA } from '@imperiohub/ui'
import { Scale, Users, FileText } from 'lucide-react'

function LandingAbogado() {
  return (
    <>
      <Hero
        title="Protegemos tus Derechos con Experiencia y Dedicación"
        subtitle="Más de 15 años defendiendo a nuestros clientes con resultados comprobados"
        primaryCta={{ text: 'Consulta Gratuita', href: '/contact' }}
        secondaryCta={{ text: 'Ver Casos de Éxito', href: '#testimonials' }}
        image={{ src: '/abogado-hero.jpg', alt: 'Abogado profesional' }}
        variant="split"
        gradientTitle
      />

      <Features
        title="Áreas de Especialización"
        subtitle="Cobertura legal integral para todas tus necesidades"
        features={[
          {
            icon: Scale,
            title: 'Derecho Civil',
            description: 'Contratos, reclamaciones, responsabilidad civil y más'
          },
          {
            icon: Users,
            title: 'Derecho Familiar',
            description: 'Divorcios, custodia, pensiones alimenticias'
          },
          {
            icon: FileText,
            title: 'Derecho Laboral',
            description: 'Despidos, acoso laboral, negociación colectiva'
          }
        ]}
      />

      <Testimonials
        title="Lo que dicen nuestros clientes"
        testimonials={[
          {
            name: 'María González',
            role: 'Empresaria',
            content: 'Excelente atención y profesionalismo. Ganamos el caso en tiempo récord.',
            rating: 5,
            avatar: '/maria.jpg'
          }
        ]}
      />

      <Pricing
        title="Planes de Asesoría Legal"
        plans={[
          {
            title: 'Consulta Única',
            price: 150,
            period: '/sesión',
            features: ['Consulta de 1 hora', 'Análisis de documentos', 'Recomendaciones'],
            ctaText: 'Agendar Consulta'
          },
          {
            title: 'Asesoría Mensual',
            price: 500,
            period: '/mes',
            features: [
              'Consultas ilimitadas',
              'Revisión de contratos',
              'Respuesta en 24h',
              'Representación básica'
            ],
            ctaText: 'Contratar Plan',
            featured: true,
            badge: 'MÁS POPULAR'
          }
        ]}
      />

      <CTA
        title="¿Listo para resolver tu situación legal?"
        description="Agenda una consulta gratuita y descubre cómo podemos ayudarte"
        primaryCta={{ text: 'Hablar con un Abogado', href: '/contact' }}
        secondaryCta={{ text: 'Llámanos: (555) 123-4567', href: 'tel:5551234567' }}
      />
    </>
  )
}
```

### Ejemplo 2: Lo Mismo con Constructor JSON (Sin Código)

```tsx
import { LandingPageBuilder } from '@imperiohub/ui'

const config = {
  meta: {
    title: 'Bufete Legal González | Abogados Expertos',
    description: 'Más de 15 años defendiendo tus derechos'
  },

  theme: {
    colors: {
      primary: '#1e40af',    // Azul profesional
      secondary: '#7c3aed',  // Púrpura
      accent: '#f59e0b'      // Ámbar
    }
  },

  navigation: {
    logo: '/logo.svg',
    links: [
      { label: 'Servicios', href: '#services' },
      { label: 'Testimonios', href: '#testimonials' },
      { label: 'Precios', href: '#pricing' },
      { label: 'Contacto', href: '#contact' }
    ]
  },

  sections: [
    {
      type: 'hero',
      data: {
        title: 'Protegemos tus Derechos con Experiencia y Dedicación',
        subtitle: 'Más de 15 años defendiendo a nuestros clientes',
        primaryCta: { text: 'Consulta Gratuita', href: '/contact' },
        secondaryCta: { text: 'Ver Casos de Éxito', href: '#testimonials' },
        image: { src: '/abogado-hero.jpg', alt: 'Abogado profesional' },
        variant: 'split',
        gradientTitle: true
      }
    },
    {
      type: 'features',
      data: {
        title: 'Áreas de Especialización',
        features: [
          {
            icon: 'Scale',
            title: 'Derecho Civil',
            description: 'Contratos, reclamaciones, responsabilidad civil'
          },
          {
            icon: 'Users',
            title: 'Derecho Familiar',
            description: 'Divorcios, custodia, pensiones alimenticias'
          }
        ]
      }
    }
    // ... más secciones
  ],

  footer: {
    copyright: '© 2024 Bufete Legal González',
    social: [
      { platform: 'linkedin', url: 'https://linkedin.com/...' },
      { platform: 'facebook', url: 'https://facebook.com/...' }
    ]
  }
}

function App() {
  return <LandingPageBuilder config={config} />
}
```

**🎉 ¡El resultado es exactamente el mismo! Tú eliges el enfoque que prefieras.**

---

## ✨ Características Principales

### 🧩 **28 Componentes Profesionales**

- **14 Átomos**: Button, Input, Select, Checkbox, Icon, Text, Image, Link, Badge, Avatar, etc.
- **5 Moléculas**: FormField, Card, PricingCard, TestimonialCard, Alert
- **6 Secciones**: Hero, Features, Testimonials, CTA, Pricing, Contact
- **3 Builders**: SectionBuilder, PageBuilder, LandingPageBuilder

### 🎨 **Sistema de Temas Potente**

```tsx
import { injectTheme } from '@imperiohub/ui'

// Personaliza todos los colores de tu sitio en segundos
injectTheme({
  colors: {
    primary: '#6366f1',    // Tu color principal
    secondary: '#8b5cf6',  // Tu color secundario
    accent: '#f59e0b',     // Color de acento
    background: '#ffffff', // Fondo
    text: '#1f2937'       // Texto
  },
  typography: {
    fontFamily: {
      heading: 'Playfair Display, serif',
      body: 'Inter, sans-serif'
    }
  },
  spacing: {
    section: '80px'
  }
})
```

### 📱 **Responsive por Defecto**

Todos los componentes se adaptan automáticamente a:
- 📱 **Mobile** (< 640px)
- 📱 **Tablet** (640px - 1024px)
- 💻 **Desktop** (> 1024px)

### ♿ **Accesibilidad Integrada**

- ✅ Navegación por teclado
- ✅ Screen readers
- ✅ ARIA labels
- ✅ Contraste de colores WCAG 2.1
- ✅ Focus indicators

### 🎭 **Animaciones Fluidas**

Todos los componentes incluyen animaciones suaves con Framer Motion:
- Fade in/out
- Slide in/out
- Hover effects
- Loading states

### 🔍 **TypeScript Completo**

```tsx
import { HeroProps, FeatureProps, ButtonVariant } from '@imperiohub/ui'

// Autocompletado inteligente en tu IDE
const hero: HeroProps = {
  title: 'Mi título',
  variant: 'split' // Tu IDE te muestra: 'centered' | 'split'
}
```

---

## 🧩 Componentes Disponibles

### 🔹 **Átomos** (Componentes Básicos)

| Componente | Uso | Variantes |
|------------|-----|-----------|
| **Button** | Botones interactivos | `primary`, `secondary`, `outline`, `ghost`, `danger`, `success` |
| **Input** | Campos de texto | Con iconos, validación, placeholders |
| **Textarea** | Áreas de texto | Auto-resize, contador de caracteres |
| **Select** | Selectores dropdown | Con iconos, placeholders |
| **Checkbox** | Casillas de verificación | Estado indeterminado |
| **Radio** | Botones de opción | Grupos de opciones |
| **Icon** | Iconos de Lucide | 50+ iconos, 6 tamaños |
| **Text** | Textos con estilos | `h1-h6`, `body-lg`, `body`, `body-sm`, `caption` |
| **Image** | Imágenes responsivas | object-fit, rounded |
| **Link** | Enlaces | Underline variants |
| **Badge** | Etiquetas | 7 variantes de color |
| **Spinner** | Indicadores de carga | 4 tamaños |
| **Avatar** | Avatares de usuario | Imagen o iniciales, 5 tamaños |
| **Divider** | Separadores | Horizontal / Vertical |

**Ejemplo de uso:**

```tsx
import { Button, Input, Icon, Text } from '@imperiohub/ui'
import { Mail } from 'lucide-react'

<Button variant="primary" size="lg" leftIcon={<Mail />}>
  Enviar Email
</Button>

<Input
  type="email"
  placeholder="tu@email.com"
  leftIcon={<Mail />}
  helperText="Te enviaremos confirmación"
/>

<Text variant="h1" color="primary" weight="bold">
  Título Principal
</Text>
```

### 🔸 **Moléculas** (Componentes Compuestos)

| Componente | Descripción |
|------------|-------------|
| **FormField** | Input/Textarea/Select con label y validación automática |
| **Card** | Tarjetas versátiles para contenido |
| **PricingCard** | Tarjetas de planes de precio |
| **TestimonialCard** | Tarjetas de testimonios |
| **Alert** | Notificaciones (success, error, warning, info) |

**Ejemplo:**

```tsx
import { FormField, Card, PricingCard, Alert } from '@imperiohub/ui'

<FormField
  type="input"
  label="Email"
  placeholder="tu@email.com"
  validation={[
    { type: 'required', message: 'El email es requerido' },
    { type: 'email', message: 'Email inválido' }
  ]}
/>

<PricingCard
  title="Plan Premium"
  price={99}
  period="/mes"
  features={['Feature 1', 'Feature 2', 'Feature 3']}
  ctaText="Contratar Ahora"
  featured={true}
  badge="MÁS POPULAR"
/>

<Alert
  type="success"
  title="¡Éxito!"
  message="Tu formulario fue enviado correctamente"
/>
```

### 📄 **Secciones** (Secciones Completas)

| Sección | Propósito |
|---------|-----------|
| **Hero** | Sección principal con título, subtítulo, CTAs e imagen |
| **Features** | Grid de características con iconos |
| **Testimonials** | Carrusel de testimonios de clientes |
| **CTA** | Call-to-action con botones |
| **Pricing** | Grid de planes de precios |
| **Contact** | Formulario de contacto con validación |

**Ejemplo:**

```tsx
import { Hero, Features, CTA } from '@imperiohub/ui'
import { Zap, Shield, Heart } from 'lucide-react'

<Hero
  title="Tu Título Impactante"
  subtitle="Descripción que convence"
  primaryCta={{ text: 'Comenzar Ahora', href: '/signup' }}
  secondaryCta={{ text: 'Ver Demo', href: '/demo' }}
  variant="split"
  gradientTitle
/>

<Features
  title="Características Principales"
  features={[
    {
      icon: Zap,
      title: 'Rápido',
      description: 'Velocidad ultrarrápida'
    },
    {
      icon: Shield,
      title: 'Seguro',
      description: 'Protección total'
    }
  ]}
/>

<CTA
  title="¿Listo para comenzar?"
  description="Únete a miles de usuarios satisfechos"
  primaryCta={{ text: 'Prueba Gratis', href: '/signup' }}
/>
```

---

## 🎨 Sistema de Temas

### Opción 1: Temas Globales con CSS Variables

```tsx
import { injectTheme } from '@imperiohub/ui'

// Inyecta tu tema personalizado globalmente
injectTheme({
  colors: {
    primary: '#6366f1',      // Indigo
    secondary: '#8b5cf6',    // Violeta
    accent: '#f59e0b',       // Ámbar
    success: '#10b981',      // Verde
    error: '#ef4444',        // Rojo
    warning: '#f59e0b',      // Ámbar
    background: '#ffffff',   // Blanco
    surface: '#f9fafb',      // Gris claro
    text: '#1f2937'         // Gris oscuro
  },

  typography: {
    fontFamily: {
      heading: 'Playfair Display, serif',
      body: 'Inter, sans-serif'
    },
    fontSize: {
      h1: '4.8rem',
      h2: '3.6rem',
      body: '1.6rem'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },

  spacing: {
    section: '80px',
    container: '120rem'
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  }
})
```

### Opción 2: Temas por Página (con Builder)

```tsx
import { LandingPageBuilder } from '@imperiohub/ui'

const config = {
  theme: {
    colors: {
      primary: '#1e40af',
      secondary: '#7c3aed'
    }
  },
  sections: [/* tus secciones */]
}

<LandingPageBuilder config={config} />
```

### Opción 3: Temas SCSS Personalizados

Crea tu propio tema SCSS:

```scss
// mi-tema.scss
$primary-color: #6366f1;
$secondary-color: #8b5cf6;
$accent-color: #f59e0b;

// Importa las variables base
@import '@imperiohub/ui/styles/variables';

// Personaliza
:root {
  --color-primary: #{$primary-color};
  --color-secondary: #{$secondary-color};
  --color-accent: #{$accent-color};
}
```

Luego importa tu tema:

```tsx
import './mi-tema.scss'
import '@imperiohub/ui/styles.css'
```

---

## 🚀 Construcción JSON (Sin Código)

Una de las características más potentes de ImperioHub UI es la capacidad de crear **páginas completas usando solo JSON**, sin escribir una línea de JSX.

### ¿Por qué es revolucionario?

- ✅ **Ideal para IA**: Las IAs pueden generar JSON fácilmente
- ✅ **CMS friendly**: Guarda configuraciones en bases de datos
- ✅ **No-code**: Personas sin conocimientos técnicos pueden crear páginas
- ✅ **Versionable**: Guarda versiones en Git
- ✅ **Portable**: Mueve configuraciones entre proyectos

### Ejemplo Completo: Landing de Doctor

```tsx
import { LandingPageBuilder } from '@imperiohub/ui'

const doctorLandingConfig = {
  // Meta tags para SEO
  meta: {
    title: 'Dr. Juan Pérez | Medicina General',
    description: 'Atención médica de calidad con más de 20 años de experiencia',
    keywords: ['doctor', 'medicina general', 'consulta médica']
  },

  // Tema personalizado
  theme: {
    colors: {
      primary: '#0ea5e9',    // Azul médico
      secondary: '#06b6d4',  // Cian
      accent: '#10b981'      // Verde
    },
    typography: {
      fontFamily: {
        heading: 'Poppins, sans-serif',
        body: 'Inter, sans-serif'
      }
    }
  },

  // Navegación
  navigation: {
    logo: '/logo-doctor.svg',
    links: [
      { label: 'Servicios', href: '#services' },
      { label: 'Acerca de', href: '#about' },
      { label: 'Testimonios', href: '#testimonials' },
      { label: 'Contacto', href: '#contact' }
    ],
    cta: {
      text: 'Agendar Cita',
      href: '/appointment'
    }
  },

  // Secciones de la landing
  sections: [
    // Hero Section
    {
      type: 'hero',
      data: {
        title: 'Cuidamos tu Salud con Experiencia y Calidez',
        subtitle: 'Más de 20 años brindando atención médica de excelencia',
        primaryCta: {
          text: 'Agendar Consulta',
          onClick: 'handleBookAppointment'
        },
        secondaryCta: {
          text: 'Conocer Servicios',
          href: '#services'
        },
        image: {
          src: '/doctor-hero.jpg',
          alt: 'Dr. Juan Pérez atendiendo paciente'
        },
        variant: 'split',
        gradientTitle: true
      }
    },

    // Features Section
    {
      id: 'services',
      type: 'features',
      data: {
        title: 'Servicios Médicos Integrales',
        subtitle: 'Atención personalizada para toda la familia',
        features: [
          {
            icon: 'Stethoscope',
            title: 'Medicina General',
            description: 'Consultas preventivas y diagnóstico de enfermedades comunes'
          },
          {
            icon: 'Heart',
            title: 'Cardiología',
            description: 'Evaluación cardiovascular y seguimiento de condiciones cardíacas'
          },
          {
            icon: 'Activity',
            title: 'Chequeos Anuales',
            description: 'Exámenes completos para detectar problemas a tiempo'
          },
          {
            icon: 'Users',
            title: 'Medicina Familiar',
            description: 'Atención para todas las edades, desde niños hasta adultos mayores'
          },
          {
            icon: 'Pill',
            title: 'Gestión de Medicamentos',
            description: 'Optimización de tratamientos y seguimiento farmacológico'
          },
          {
            icon: 'FileText',
            title: 'Certificados Médicos',
            description: 'Certificados para escuela, trabajo, deportes y más'
          }
        ],
        columns: 3
      }
    },

    // Testimonials Section
    {
      id: 'testimonials',
      type: 'testimonials',
      data: {
        title: 'Lo que dicen nuestros pacientes',
        subtitle: 'Miles de familias confían en nosotros',
        testimonials: [
          {
            name: 'María Rodríguez',
            role: 'Paciente desde 2018',
            content: 'El Dr. Pérez es excepcional. Siempre se toma el tiempo para escuchar y explicar todo claramente. Mi familia y yo confiamos plenamente en él.',
            rating: 5,
            avatar: '/testimonial-maria.jpg'
          },
          {
            name: 'Carlos Méndez',
            role: 'Paciente desde 2020',
            content: 'Atención de primera calidad. El consultorio es moderno, limpio y el personal es muy amable. Las citas siempre son puntuales.',
            rating: 5,
            avatar: '/testimonial-carlos.jpg'
          },
          {
            name: 'Ana Gómez',
            role: 'Paciente desde 2019',
            content: 'Encontré en el Dr. Pérez un médico que realmente se preocupa. Detectó mi condición a tiempo y gracias a él estoy mucho mejor.',
            rating: 5,
            avatar: '/testimonial-ana.jpg'
          }
        ]
      }
    },

    // Pricing Section
    {
      id: 'pricing',
      type: 'pricing',
      data: {
        title: 'Planes de Atención Médica',
        subtitle: 'Elige el plan que mejor se adapte a tus necesidades',
        plans: [
          {
            title: 'Consulta Individual',
            price: 80,
            period: '/consulta',
            features: [
              'Consulta médica completa',
              'Diagnóstico profesional',
              'Receta médica',
              'Recomendaciones personalizadas'
            ],
            ctaText: 'Agendar Ahora',
            ctaHref: '/appointment'
          },
          {
            title: 'Plan Familiar',
            price: 199,
            period: '/mes',
            features: [
              'Hasta 4 miembros de la familia',
              'Consultas ilimitadas',
              'Descuento en exámenes',
              'Atención prioritaria',
              'Seguimiento continuo',
              'Certificados médicos incluidos'
            ],
            ctaText: 'Contratar Plan',
            ctaHref: '/signup',
            featured: true,
            badge: 'MÁS POPULAR'
          },
          {
            title: 'Plan Premium',
            price: 299,
            period: '/mes',
            features: [
              'Todo del Plan Familiar',
              'Visitas a domicilio (2 al mes)',
              'Telemedicina 24/7',
              'Chequeo anual completo',
              'Especialistas incluidos',
              'Laboratorio con descuento'
            ],
            ctaText: 'Contratar Premium',
            ctaHref: '/signup/premium'
          }
        ]
      }
    },

    // CTA Section
    {
      type: 'cta',
      data: {
        title: '¿Listo para cuidar tu salud?',
        description: 'Agenda tu cita hoy mismo y recibe atención médica de excelencia',
        primaryCta: {
          text: 'Agendar Cita Ahora',
          onClick: 'handleBookAppointment'
        },
        secondaryCta: {
          text: 'Llamar: (555) 123-4567',
          href: 'tel:5551234567'
        }
      }
    },

    // Contact Section
    {
      id: 'contact',
      type: 'contact',
      data: {
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte',
        fields: [
          {
            name: 'name',
            label: 'Nombre completo',
            type: 'text',
            placeholder: 'Juan Pérez',
            required: true
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'juan@email.com',
            required: true
          },
          {
            name: 'phone',
            label: 'Teléfono',
            type: 'tel',
            placeholder: '(555) 123-4567',
            required: true
          },
          {
            name: 'message',
            label: 'Mensaje',
            type: 'textarea',
            placeholder: '¿En qué podemos ayudarte?',
            required: true
          }
        ],
        submitText: 'Enviar Mensaje',
        onSubmit: 'handleContactSubmit'
      }
    }
  ],

  // Footer
  footer: {
    logo: '/logo-doctor.svg',
    description: 'Dr. Juan Pérez - Medicina General',
    copyright: '© 2024 Dr. Juan Pérez. Todos los derechos reservados.',
    links: [
      {
        title: 'Servicios',
        items: [
          { label: 'Medicina General', href: '/services/general' },
          { label: 'Cardiología', href: '/services/cardiology' },
          { label: 'Chequeos', href: '/services/checkups' }
        ]
      },
      {
        title: 'Información',
        items: [
          { label: 'Acerca de', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Preguntas Frecuentes', href: '/faq' }
        ]
      },
      {
        title: 'Legal',
        items: [
          { label: 'Privacidad', href: '/privacy' },
          { label: 'Términos', href: '/terms' }
        ]
      }
    ],
    social: [
      { platform: 'facebook', url: 'https://facebook.com/drjuanperez' },
      { platform: 'instagram', url: 'https://instagram.com/drjuanperez' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/drjuanperez' }
    ],
    contact: {
      address: 'Av. Principal 123, Ciudad, País',
      phone: '(555) 123-4567',
      email: 'contacto@drjuanperez.com'
    }
  },

  // Handlers para eventos
  handlers: {
    handleBookAppointment: () => {
      console.log('Abriendo modal de agendar cita')
      // Aquí puedes abrir un modal, redirigir, etc.
    },
    handleContactSubmit: (formData: any) => {
      console.log('Formulario enviado:', formData)
      // Aquí envías los datos a tu backend
    }
  }
}

// Renderiza toda la landing page con una sola línea
function DoctorLanding() {
  return <LandingPageBuilder config={doctorLandingConfig} />
}

export default DoctorLanding
```

### 🤖 Perfecto para IA

Este enfoque JSON es **ideal para que una IA genere páginas automáticamente**:

```typescript
// Ejemplo: Prompt para ChatGPT/Claude
const aiPrompt = `
Genera una configuración JSON para LandingPageBuilder de ImperioHub UI
para un arquitecto especializado en diseño sustentable.

Incluye:
- Hero section con título impactante
- Features con 6 servicios
- Testimonials con 3 clientes
- Pricing con 3 planes
- Contact form
- Tema con colores verdes/naturales
`

// La IA genera el JSON y tú solo lo pegas
const config = JSON.parse(aiGeneratedJSON)
return <LandingPageBuilder config={config} />
```

---

## 🎯 Plantillas Listas para Usar

### AutonomoPro - Template para Profesionales

Plantilla completa con múltiples páginas para profesionales autónomos:

```tsx
import { AutonomoProTemplate } from '@imperiohub/ui/autonomoPro'

const config = {
  profession: 'Abogado',
  name: 'Lic. María González',
  branding: {
    logo: '/logo.svg',
    colors: {
      primary: '#1e40af',
      secondary: '#7c3aed'
    }
  },

  // Páginas incluidas automáticamente:
  // - Home
  // - Servicios
  // - Blog
  // - Agendar Cita
  // - 404

  services: [
    {
      title: 'Derecho Civil',
      description: 'Contratos, reclamaciones...',
      icon: 'Scale',
      price: 200
    }
  ],

  blog: {
    posts: [
      {
        title: '5 Consejos Legales para Emprendedores',
        excerpt: 'Lo que todo emprendedor debe saber...',
        image: '/blog-1.jpg',
        date: '2024-01-15'
      }
    ]
  }
}

function App() {
  return <AutonomoProTemplate config={config} />
}
```

**Incluye:**
- ✅ Sistema de navegación completo
- ✅ Página de inicio optimizada
- ✅ Página de servicios con filtros
- ✅ Blog con sistema de categorías
- ✅ Formulario de agendar citas
- ✅ Página 404 personalizada
- ✅ Footer con enlaces y redes sociales

---

## 💻 Ejemplos Completos

### Ejemplo 1: Landing de Consultora

```tsx
import '@imperiohub/ui/styles.css'
import { Hero, Features, Testimonials, CTA } from '@imperiohub/ui'
import { TrendingUp, Target, Users, BarChart } from 'lucide-react'

function ConsultoraLanding() {
  return (
    <main>
      <Hero
        title="Transformamos tu Negocio con Estrategias que Funcionan"
        subtitle="Consultoría empresarial especializada con resultados medibles"
        primaryCta={{ text: 'Solicitar Diagnóstico Gratuito', href: '/contact' }}
        secondaryCta={{ text: 'Ver Casos de Éxito', href: '#testimonials' }}
        image={{
          src: '/consultora-hero.jpg',
          alt: 'Equipo de consultores analizando datos'
        }}
        variant="split"
        gradientTitle
      />

      <Features
        title="Nuestros Servicios"
        subtitle="Soluciones integrales para hacer crecer tu empresa"
        features={[
          {
            icon: TrendingUp,
            title: 'Estrategia de Crecimiento',
            description: 'Planes personalizados para escalar tu negocio de forma sostenible'
          },
          {
            icon: Target,
            title: 'Optimización de Procesos',
            description: 'Identifica cuellos de botella y aumenta la eficiencia operativa'
          },
          {
            icon: Users,
            title: 'Desarrollo de Talento',
            description: 'Capacita y retiene a tu equipo con programas especializados'
          },
          {
            icon: BarChart,
            title: 'Análisis de Datos',
            description: 'Toma decisiones basadas en datos con nuestros dashboards'
          }
        ]}
        columns={2}
      />

      <Testimonials
        title="Resultados Comprobados"
        subtitle="Lo que dicen nuestros clientes"
        testimonials={[
          {
            name: 'Roberto Jiménez',
            role: 'CEO, TechStart',
            content: 'En 6 meses aumentamos nuestras ventas un 150%. El equipo de consultoría identificó oportunidades que no veíamos.',
            rating: 5,
            avatar: '/roberto.jpg'
          },
          {
            name: 'Laura Martínez',
            role: 'Directora, RetailPro',
            content: 'Redujimos costos operativos en 30% sin afectar la calidad. Excelente ROI.',
            rating: 5,
            avatar: '/laura.jpg'
          }
        ]}
      />

      <CTA
        title="¿Listo para hacer crecer tu negocio?"
        description="Agenda una consulta gratuita y descubre tu potencial de crecimiento"
        primaryCta={{
          text: 'Agendar Diagnóstico Gratuito',
          href: '/contact'
        }}
        secondaryCta={{
          text: 'Descargar Caso de Estudio',
          href: '/case-study.pdf'
        }}
      />
    </main>
  )
}
```

### Ejemplo 2: Formulario de Contacto Avanzado

```tsx
import { useState } from 'react'
import { FormField, Button, Alert } from '@imperiohub/ui'

function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
        setShowSuccess(true)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>

      {showSuccess && (
        <Alert
          type="success"
          title="¡Mensaje enviado!"
          message="Te responderemos en menos de 24 horas"
        />
      )}

      <FormField
        type="input"
        name="name"
        label="Nombre completo"
        placeholder="Juan Pérez"
        validation={[
          { type: 'required', message: 'El nombre es requerido' },
          { type: 'minLength', value: 3, message: 'Mínimo 3 caracteres' }
        ]}
      />

      <FormField
        type="input"
        name="email"
        label="Email"
        placeholder="juan@empresa.com"
        validation={[
          { type: 'required', message: 'El email es requerido' },
          { type: 'email', message: 'Email inválido' }
        ]}
      />

      <FormField
        type="input"
        name="phone"
        label="Teléfono"
        placeholder="(555) 123-4567"
        validation={[
          {
            type: 'pattern',
            pattern: /^\(\d{3}\) \d{3}-\d{4}$/,
            message: 'Formato: (555) 123-4567'
          }
        ]}
      />

      <FormField
        type="select"
        name="service"
        label="Servicio de interés"
        options={[
          { value: '', label: 'Selecciona un servicio' },
          { value: 'consulting', label: 'Consultoría' },
          { value: 'training', label: 'Capacitación' },
          { value: 'audit', label: 'Auditoría' }
        ]}
        validation={[
          { type: 'required', message: 'Selecciona un servicio' }
        ]}
      />

      <FormField
        type="textarea"
        name="message"
        label="Mensaje"
        placeholder="Cuéntanos sobre tu proyecto..."
        validation={[
          { type: 'required', message: 'El mensaje es requerido' },
          { type: 'minLength', value: 20, message: 'Mínimo 20 caracteres' }
        ]}
      />

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Enviar Mensaje
      </Button>
    </form>
  )
}
```

### Ejemplo 3: Temas Dinámicos por Profesión

```tsx
import { injectTheme } from '@imperiohub/ui'

const themes = {
  abogado: {
    colors: {
      primary: '#1e40af',    // Azul profesional
      secondary: '#7c3aed',  // Púrpura
      accent: '#d97706'      // Ámbar
    }
  },
  doctor: {
    colors: {
      primary: '#0ea5e9',    // Azul cielo
      secondary: '#06b6d4',  // Cian
      accent: '#10b981'      // Verde
    }
  },
  arquitecto: {
    colors: {
      primary: '#059669',    // Verde
      secondary: '#0891b2',  // Teal
      accent: '#f59e0b'      // Ámbar
    }
  }
}

function App({ profession }: { profession: 'abogado' | 'doctor' | 'arquitecto' }) {
  // Inyectar tema según profesión
  injectTheme(themes[profession])

  return (
    <div>
      {/* Tus componentes usan automáticamente el tema correcto */}
    </div>
  )
}
```

---

## 🤖 Integración con IA

ImperioHub UI está diseñado para ser **altamente compatible con sistemas de IA** para generar landing pages automáticamente.

### Esquemas JSON para IA

Cada componente incluye un **esquema JSON** que las IAs pueden usar:

```typescript
import { HeroSchema, FeaturesSchema, PricingSchema } from '@imperiohub/ui/schemas'

// Ejemplo de prompt para IA
const prompt = `
Genera una configuración JSON válida siguiendo este esquema:
${JSON.stringify(HeroSchema)}

Para un abogado especializado en derecho familiar.
`

// La IA genera JSON válido que puedes usar directamente
```

### Ejemplo de Integración con OpenAI

```typescript
import { LandingPageBuilder } from '@imperiohub/ui'
import { OpenAI } from 'openai'

async function generateLanding(profession: string, description: string) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const prompt = `
  Genera una configuración JSON completa para una landing page usando ImperioHub UI.

  Profesión: ${profession}
  Descripción: ${description}

  El JSON debe incluir:
  - meta (title, description, keywords)
  - theme (colors apropiados para la profesión)
  - navigation
  - sections (hero, features, testimonials, pricing, cta, contact)
  - footer

  Usa iconos de lucide-react apropiados (como string).
  `

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'Eres un experto en diseño web y marketing. Generas configuraciones JSON válidas para landing pages.'
      },
      { role: 'user', content: prompt }
    ],
    response_format: { type: 'json_object' }
  })

  const config = JSON.parse(response.choices[0].message.content)

  return <LandingPageBuilder config={config} />
}

// Uso
generateLanding(
  'Abogado',
  'Especializado en derecho familiar con 15 años de experiencia'
)
```

### Validación de Configuraciones

```typescript
import { validateLandingConfig } from '@imperiohub/ui/utils'

const config = { /* tu config */ }

// Valida antes de renderizar
const validation = validateLandingConfig(config)

if (!validation.valid) {
  console.error('Errores:', validation.errors)
} else {
  return <LandingPageBuilder config={config} />
}
```

---

## 📚 Documentación Completa

### Documentos Disponibles

- 📘 [**ATOMS.md**](./docs/ATOMS.md) - Guía completa de componentes básicos
- 📗 [**MOLECULES.md**](./docs/MOLECULES.md) - Componentes compuestos
- 📙 [**SECTIONS.md**](./docs/SECTIONS.md) - Secciones de landing page
- 📕 [**BUILDERS.md**](./docs/BUILDERS.md) - Construcción JSON
- 📔 [**STYLING.md**](./docs/STYLING.md) - Sistema de estilos y temas
- 📓 [**VISION.md**](./docs/VISION.md) - Visión y roadmap del proyecto

### Recursos Adicionales

- 🎨 [Figma Design System](https://figma.com/imperiohub-ui) (próximamente)
- 🎥 [Video Tutoriales](https://youtube.com/@imperiohub) (próximamente)
- 💬 [Discord Community](https://discord.gg/imperiohub) (próximamente)

---

## 🗺️ Roadmap

### ✅ Versión 0.2.x (Actual)

- [x] 28 componentes profesionales
- [x] Sistema de temas con CSS variables
- [x] Construcción JSON (Builders)
- [x] Plantilla AutonomoPro
- [x] TypeScript completo
- [x] Documentación en inglés y español

### 🚧 Versión 0.3.x (Q2 2024)

- [ ] **Sistema de temas multi-archivo SCSS**
  - Temas preconstruidos (light, dark, professional, modern, elegant)
  - Editor visual de temas
  - Exportar/importar temas

- [ ] **Biblioteca de Landing Pages**
  - 10+ templates completos listos para usar
  - Templates por industria (salud, legal, consultoría, etc.)
  - Modo preview de todos los templates

- [ ] **Componentes de Visualización de Datos**
  - LineChart, BarChart, PieChart, AreaChart
  - Comparadores de estadísticas
  - Tablas de datos con filtros
  - Dashboards analíticos
  - Componentes de ROI y rentabilidad

### 🔮 Versión 0.4.x (Q3 2024)

- [ ] **Editor Visual (No-Code)**
  - Arrastra y suelta componentes
  - Preview en tiempo real
  - Exportar a código React
  - Guardar/cargar proyectos

- [ ] **Personalización Avanzada**
  - Variables de diseño personalizadas desde JSON
  - Sistema de tokens de diseño
  - Soporte para CSS-in-JS (styled-components, emotion)
  - Modo oscuro automático

- [ ] **Más Plantillas**
  - SaasPro completo
  - E-commerce
  - Portfolio
  - Blog

### 🚀 Versión 1.0.x (Q4 2024)

- [ ] **AI Builder Integration**
  - Plugin para ChatGPT
  - CLI con IA integrada
  - Generación de código desde lenguaje natural
  - Optimización automática de conversión

- [ ] **Advanced Components**
  - Formularios multi-paso
  - Calendarios de citas
  - Sistema de pagos integrado
  - Chat en vivo

- [ ] **Performance & SEO**
  - Server-side rendering (Next.js)
  - Lazy loading automático
  - Optimización de imágenes
  - Schema markup para SEO

Ver [ROADMAP.md](./docs/ROADMAP.md) para más detalles.

---

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js 18+
- npm, yarn o pnpm

### Clonar y Ejecutar

```bash
# Clonar el repositorio
git clone https://github.com/imperiohub-dev/imperiohub-ui.git
cd imperiohub-ui

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar librería
npm run build

# Crear nuevo componente
./create-component.sh MyComponent atom
```

### Estructura de Carpetas

```
src/
├── atoms/          # Componentes básicos
├── molecules/      # Componentes compuestos
├── sections/       # Secciones completas
├── builders/       # Constructores JSON
├── styles/         # Estilos globales y temas
├── types/          # Definiciones TypeScript
├── utils/          # Utilidades
├── hooks/          # React hooks
└── templates/      # Plantillas completas
```

---

## 🤝 Contribuir

¡Contribuciones son bienvenidas! Por favor lee [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

### Cómo Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Código de Conducta

Este proyecto sigue el [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ver [LICENSE](./LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [React](https://react.dev) - Framework UI
- [Lucide](https://lucide.dev) - Iconos hermosos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Vite](https://vitejs.dev) - Build tool ultrarrápido

---

## 📞 Contacto y Soporte

- 📧 Email: dev@imperiohub.com
- 🐦 Twitter: [@imperiohub](https://twitter.com/imperiohub)
- 💬 Discord: [Únete a la comunidad](https://discord.gg/imperiohub)
- 🐛 Issues: [GitHub Issues](https://github.com/imperiohub-dev/imperiohub-ui/issues)

---

## ⭐ Muéstranos tu Apoyo

Si encuentras útil este proyecto, por favor:

- ⭐ Dale una estrella en GitHub
- 🐦 Comparte en redes sociales
- 📝 Escribe un blog post
- 💬 Cuéntale a tus amigos

---

<div align="center">

**Hecho con ❤️ por el equipo de [ImperioHub](https://imperiohub.com)**

[⬆ Volver arriba](#-imperiohub-ui---biblioteca-de-componentes-react-profesional)

</div>
