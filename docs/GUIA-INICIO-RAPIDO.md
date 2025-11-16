# 🚀 Guía de Inicio Rápido - ImperioHub UI

**¿Primera vez usando ImperioHub UI? ¡Esta guía es para ti!**

Esta guía te llevará de **cero a tu primera landing page funcionando en menos de 10 minutos**, incluso si nunca has programado antes.

---

## 📖 Tabla de Contenidos

- [Paso 1: Configurar tu Proyecto](#paso-1-configurar-tu-proyecto)
- [Paso 2: Instalar ImperioHub UI](#paso-2-instalar-imperiohub-ui)
- [Paso 3: Crear tu Primera Página](#paso-3-crear-tu-primera-página)
- [Paso 4: Personalizar Colores](#paso-4-personalizar-colores)
- [Paso 5: Ver tu Página](#paso-5-ver-tu-página)
- [Siguiente Nivel](#siguiente-nivel)

---

## Paso 1: Configurar tu Proyecto

### Opción A: Si ya tienes un proyecto React

Si ya tienes un proyecto React, salta directamente al [Paso 2](#paso-2-instalar-imperiohub-ui).

### Opción B: Crear un nuevo proyecto desde cero

**1. Abre tu terminal** (en Windows: Command Prompt o PowerShell, en Mac/Linux: Terminal)

**2. Navega a donde quieres crear tu proyecto:**

```bash
cd Documentos
# O donde prefieras guardar tu proyecto
```

**3. Crea un nuevo proyecto React con Vite:**

```bash
npm create vite@latest mi-landing -- --template react-ts
```

**4. Entra a la carpeta de tu proyecto:**

```bash
cd mi-landing
```

**5. Instala las dependencias:**

```bash
npm install
```

**¡Listo!** Ya tienes un proyecto React funcionando. 🎉

---

## Paso 2: Instalar ImperioHub UI

En tu terminal, dentro de la carpeta de tu proyecto, ejecuta:

```bash
npm install @imperiohub/ui
```

Espera unos segundos mientras se instala... ✅

---

## Paso 3: Crear tu Primera Página

### Opción 1: Página Simple (Componentes Tradicionales)

**1. Abre el archivo `src/App.tsx`** (o `src/App.jsx` si no usas TypeScript)

**2. Borra todo el contenido** y pega esto:

```tsx
// Importar los estilos (¡MUY IMPORTANTE!)
import '@imperiohub/ui/styles.css'

// Importar los componentes que necesitas
import { Hero, Features, CTA } from '@imperiohub/ui'
import { Zap, Heart, Shield } from 'lucide-react'

function App() {
  return (
    <div>
      {/* Sección Principal */}
      <Hero
        title="¡Bienvenido a mi Sitio Web!"
        subtitle="Servicios profesionales que transforman tu negocio"
        primaryCta={{ text: 'Comenzar Ahora', href: '/contact' }}
        secondaryCta={{ text: 'Saber Más', href: '#features' }}
        variant="centered"
        gradientTitle
      />

      {/* Sección de Características */}
      <Features
        title="¿Por qué elegirnos?"
        subtitle="Las mejores soluciones para ti"
        features={[
          {
            icon: Zap,
            title: 'Rápido',
            description: 'Resultados en tiempo récord'
          },
          {
            icon: Heart,
            title: 'Confiable',
            description: 'Más de 1000 clientes satisfechos'
          },
          {
            icon: Shield,
            title: 'Seguro',
            description: 'Protección total garantizada'
          }
        ]}
      />

      {/* Llamado a la Acción */}
      <CTA
        title="¿Listo para comenzar?"
        description="Únete a miles de clientes felices hoy mismo"
        primaryCta={{ text: 'Prueba Gratis', href: '/signup' }}
      />
    </div>
  )
}

export default App
```

**3. Guarda el archivo** (Ctrl+S o Cmd+S)

**¡Eso es todo!** Ya tienes una landing page funcionando. 🎊

### Opción 2: Página Completa con JSON (Sin Código)

Si prefieres un enfoque **sin código**, usa el **LandingPageBuilder**:

**1. Abre `src/App.tsx`** y pega esto:

```tsx
import { LandingPageBuilder } from '@imperiohub/ui'

// Tu configuración en formato JSON
const miConfig = {
  // Información para motores de búsqueda
  meta: {
    title: 'Mi Sitio Profesional | Servicios de Calidad',
    description: 'Los mejores servicios para tu negocio'
  },

  // Colores de tu marca
  theme: {
    colors: {
      primary: '#3b82f6',    // Azul
      secondary: '#8b5cf6',  // Morado
      accent: '#f59e0b'      // Naranja
    }
  },

  // Menú de navegación
  navigation: {
    logo: '/logo.svg',
    links: [
      { label: 'Inicio', href: '#home' },
      { label: 'Servicios', href: '#services' },
      { label: 'Contacto', href: '#contact' }
    ]
  },

  // Las secciones de tu página
  sections: [
    // Sección Hero (Principal)
    {
      type: 'hero',
      data: {
        title: '¡Transforma tu Negocio Hoy!',
        subtitle: 'Soluciones profesionales que generan resultados',
        primaryCta: { text: 'Empezar Ahora', href: '/contact' },
        secondaryCta: { text: 'Ver Más', href: '#services' },
        variant: 'centered',
        gradientTitle: true
      }
    },

    // Sección de Características
    {
      id: 'services',
      type: 'features',
      data: {
        title: 'Nuestros Servicios',
        subtitle: 'Todo lo que necesitas en un solo lugar',
        features: [
          {
            icon: 'Zap',
            title: 'Servicio Rápido',
            description: 'Entregamos resultados en tiempo récord'
          },
          {
            icon: 'Heart',
            title: 'Atención Personalizada',
            description: 'Cada cliente es único para nosotros'
          },
          {
            icon: 'Shield',
            title: 'Garantía Total',
            description: 'Tu satisfacción es nuestra prioridad'
          }
        ]
      }
    },

    // Llamado a la Acción
    {
      type: 'cta',
      data: {
        title: '¿Listo para dar el siguiente paso?',
        description: 'Contáctanos hoy y recibe una consulta gratuita',
        primaryCta: { text: 'Contactar Ahora', href: '/contact' }
      }
    }
  ],

  // Pie de página
  footer: {
    copyright: '© 2024 Mi Empresa. Todos los derechos reservados.',
    social: [
      { platform: 'facebook', url: 'https://facebook.com/miempresa' },
      { platform: 'instagram', url: 'https://instagram.com/miempresa' }
    ]
  }
}

function App() {
  return <LandingPageBuilder config={miConfig} />
}

export default App
```

**2. Guarda el archivo**

**¡Listo!** Tienes una landing page completa con navegación y footer. 🚀

---

## Paso 4: Personalizar Colores

### Cambiar los Colores de tu Sitio

Es **súper fácil** cambiar todos los colores de tu sitio:

**Método 1: Con LandingPageBuilder (JSON)**

Si usaste la Opción 2, solo cambia estos valores:

```tsx
theme: {
  colors: {
    primary: '#e11d48',    // Rojo (cambia por el color que quieras)
    secondary: '#7c3aed',  // Morado
    accent: '#f59e0b'      // Naranja
  }
}
```

**Método 2: Con función injectTheme**

Si usaste la Opción 1, agrega esto **antes** de tu componente App:

```tsx
import { injectTheme } from '@imperiohub/ui'

// Inyectar tu tema personalizado
injectTheme({
  colors: {
    primary: '#e11d48',    // Tu color principal
    secondary: '#7c3aed',  // Tu color secundario
    accent: '#f59e0b'      // Color de acento
  }
})

function App() {
  // ... tu código
}
```

### 🎨 ¿Cómo elegir colores?

Usa herramientas gratuitas como:

- [Coolors.co](https://coolors.co) - Generador de paletas de colores
- [Adobe Color](https://color.adobe.com) - Rueda de colores
- [Paletton](https://paletton.com) - Combinaciones de colores

**Tip:** Los códigos de color comienzan con `#` y tienen 6 caracteres (ejemplo: `#3b82f6`)

---

## Paso 5: Ver tu Página

**1. En tu terminal, ejecuta:**

```bash
npm run dev
```

**2. Abre tu navegador** y ve a:

```
http://localhost:5173
```

**¡TA-DA!** 🎉 Deberías ver tu landing page funcionando.

### Solución de Problemas Comunes

❌ **Error: "Cannot find module '@imperiohub/ui'"**
- Solución: Ejecuta `npm install @imperiohub/ui` de nuevo

❌ **Los estilos no se ven**
- Solución: Asegúrate de tener `import '@imperiohub/ui/styles.css'` al inicio de tu archivo

❌ **Error: "lucide-react not found"**
- Solución: Ejecuta `npm install lucide-react`

❌ **La página está en blanco**
- Solución: Abre la consola del navegador (F12) y revisa si hay errores

---

## Siguiente Nivel

¡Felicidades! 🎊 Ya tienes tu primera landing page funcionando. Ahora puedes:

### 1. Agregar Más Secciones

Agrega secciones de **Testimonios** o **Precios**:

```tsx
import { Testimonials, Pricing } from '@imperiohub/ui'

// Dentro de tu App:
<Testimonials
  title="Lo que dicen nuestros clientes"
  testimonials={[
    {
      name: 'Juan Pérez',
      role: 'CEO, Empresa ABC',
      content: 'Excelente servicio, muy recomendado',
      rating: 5
    }
  ]}
/>

<Pricing
  title="Nuestros Planes"
  plans={[
    {
      title: 'Plan Básico',
      price: 29,
      period: '/mes',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      ctaText: 'Comenzar'
    }
  ]}
/>
```

### 2. Agregar un Formulario de Contacto

```tsx
import { Contact } from '@imperiohub/ui'

<Contact
  title="Contáctanos"
  subtitle="Estamos aquí para ayudarte"
  onSubmit={(data) => {
    console.log('Datos del formulario:', data)
    // Aquí envías los datos a tu servidor
  }}
/>
```

### 3. Cambiar Fuentes

```tsx
injectTheme({
  typography: {
    fontFamily: {
      heading: 'Montserrat, sans-serif',
      body: 'Open Sans, sans-serif'
    }
  }
})
```

**No olvides importar las fuentes en tu `index.html`:**

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
```

### 4. Usar Diferentes Iconos

Explora los iconos disponibles en [Lucide Icons](https://lucide.dev/icons):

```tsx
import {
  Heart, Star, Zap, Shield, Users,
  TrendingUp, Target, Award, Clock
} from 'lucide-react'
```

### 5. Aprender Más

Lee la documentación completa:

- [README Completo en Español](../README.es.md)
- [Guía de Componentes Átomos](./ATOMS.md)
- [Guía de Secciones](./SECTIONS.md)
- [Guía de Builders (JSON)](./BUILDERS.md)
- [Guía de Personalización de Estilos](./STYLING.md)

---

## 💡 Consejos Finales

### ✅ Buenas Prácticas

1. **Siempre importa los estilos primero:**
   ```tsx
   import '@imperiohub/ui/styles.css'
   ```

2. **Usa nombres descriptivos** para tus CTAs:
   - ✅ "Agendar Consulta Gratuita"
   - ❌ "Click Aquí"

3. **Mantén tu configuración JSON** en un archivo separado si es grande:
   ```tsx
   // config/landing.config.ts
   export const landingConfig = { /* tu config */ }

   // App.tsx
   import { landingConfig } from './config/landing.config'
   ```

4. **Prueba en móvil:** Abre las herramientas de desarrollador (F12) y activa el modo responsive

### 🎯 Próximos Pasos Recomendados

1. **Personaliza tu página** con tu contenido real
2. **Cambia los colores** para que coincidan con tu marca
3. **Agrega imágenes propias** (reemplaza las URLs de ejemplo)
4. **Conecta el formulario** a tu servidor/email
5. **Despliega tu sitio** en Vercel, Netlify o tu hosting favorito

---

## 🆘 ¿Necesitas Ayuda?

- 📧 Email: dev@imperiohub.com
- 💬 Discord: [Únete a la comunidad](https://discord.gg/imperiohub)
- 🐛 Problemas: [GitHub Issues](https://github.com/imperiohub-dev/imperiohub-ui/issues)
- 📚 Documentación: [Docs completos](../README.es.md)

---

## 🎉 ¡Felicidades!

Has completado la guía de inicio rápido. Ahora tienes las bases para crear landing pages profesionales en minutos.

**Comparte tu creación** con nosotros usando el hashtag **#ImperioHubUI** en redes sociales. ¡Nos encantaría ver qué construyes!

---

<div align="center">

**¿Listo para crear algo increíble?** 🚀

[⬆ Volver arriba](#-guía-de-inicio-rápido---imperiohub-ui)

</div>
