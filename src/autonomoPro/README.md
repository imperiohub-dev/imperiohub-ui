# AutonomoPro - Guía de Uso

Biblioteca de componentes UI para crear sitios web profesionales de servicios (legal, consultoría, etc.).

## Instalación

```bash
npm install imperiohub-ui
```

## Componentes Disponibles

### 1. NavBar

Barra de navegación responsive con logo y enlaces.

**Importación:**
```tsx
import { NavBar } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import NavBar from './components/NavBar';
import logoImage from './assets/logo.svg';

function App() {
  return (
    <NavBar
      brand={{
        title: "Mi Empresa",
        img: { src: logoImage },
        navigate: "/",
      }}
      links={[
        { label: "Inicio", href: "/", navigate: "/" },
        { label: "Servicios", href: "/servicios", navigate: "/servicios" },
        { label: "Blog", href: "/blog", navigate: "/blog" },
        { label: "Contacto", href: "/contacto", navigate: "/contacto" },
      ]}
    />
  );
}
```

**Propiedades:**
- `brand.title` (string): Nombre de tu marca/empresa
- `brand.img.src` (string): Ruta o import de tu logo
- `brand.navigate` (string): Ruta a donde navega al hacer click en el logo
- `links` (array): Array de objetos con `label`, `href` y `navigate`

---

### 2. BoxServices

Muestra una lista de servicios en formato de tarjetas.

**Importación:**
```tsx
import { BoxServices } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import BoxServices from './components/BoxServices';
import iconoServicio from './assets/icono.svg';

function Servicios() {
  const servicios = [
    {
      title: "Consultoría Legal",
      text: "Asesoramiento jurídico personalizado para tu caso.",
      cta: "Más información",
      img: { src: iconoServicio, alt: "Icono legal" }
    },
    {
      title: "Derecho Laboral",
      text: "Protegemos tus derechos como trabajador o empleador.",
      cta: "Conocer más",
      img: { src: iconoServicio, alt: "Icono laboral" }
    }
  ];

  return <BoxServices services={servicios} />;
}
```

**Propiedades del array `services`:**
- `title` (string): Título del servicio
- `text` (string): Descripción del servicio
- `cta` (string): Texto del botón de acción
- `img.src` (string): Ruta del ícono/imagen
- `img.alt` (string): Texto alternativo de la imagen

---

### 3. BoxBlog

Muestra artículos de blog en formato de tarjetas.

**Importación:**
```tsx
import { BoxBlog } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import BoxBlog from './components/BoxBlog';

function Blog() {
  const articulos = [
    {
      autor: "Juan Pérez",
      date: "15 Ene 2025",
      title: "Nuevas leyes laborales 2025",
      description: "Conoce los cambios más importantes...",
      cta: "Leer más",
      onClick: () => {
        // Navegar al artículo completo
        console.log('Ir al artículo');
      }
    }
  ];

  return <BoxBlog blogs={articulos} />;
}
```

**Propiedades del array `blogs`:**
- `autor` (string): Nombre del autor
- `date` (string): Fecha de publicación
- `title` (string): Título del artículo
- `description` (string): Resumen del artículo
- `cta` (string): Texto del enlace (ej: "Leer más")
- `onClick` (función): Función que se ejecuta al hacer click

---

### 4. FirstTitle

Sección de título principal con descripción.

**Importación:**
```tsx
import { FirstTitle } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import FirstTitle from './components/utils/FirstTitle';

function MiPagina() {
  return (
    <FirstTitle
      title="Nuestros Servicios"
      text="Ofrecemos soluciones integrales para todas tus necesidades legales."
    />
  );
}
```

**Propiedades:**
- `title` (string): Título principal de la sección
- `text` (string): Texto descriptivo o subtítulo

---

### 5. CallToActionHome

Banner hero principal con imagen de fondo y llamada a la acción.

**Importación:**
```tsx
import { CallToActionHome } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import CallToActionHome from './components/utils/CallToActionHome';
import bgImage from './assets/hero-bg.jpg';

function Home() {
  return (
    <CallToActionHome
      title="Defensa Legal Profesional"
      text="Protegemos tus derechos con experiencia y dedicación."
      img={{ src: bgImage, alt: "Fondo legal" }}
      cta={{
        title: "Agenda tu Consulta Gratuita",
        navigate: "/contacto",
        cb: () => {
          console.log('Click en CTA');
          // Aquí puedes navegar o ejecutar cualquier acción
        }
      }}
    />
  );
}
```

**Propiedades:**
- `title` (string): Título principal del hero
- `text` (string): Texto descriptivo
- `img.src` (string): Imagen de fondo
- `img.alt` (string): Texto alternativo
- `cta.title` (string): Texto del botón
- `cta.navigate` (string): Ruta de navegación
- `cta.cb` (función): Función callback al hacer click

---

### 6. CallToActionList

Lista de llamadas a la acción con tarjetas destacadas.

**Importación:**
```tsx
import { CallToActionList } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import CallToActionList from './components/utils/CallToActionList';
import iconoServicio from './assets/icon.svg';

function Home() {
  return (
    <CallToActionList
      title="¿Por qué elegirnos?"
      text="Nuestra firma se basa en tres pilares fundamentales."
      ctas={[
        {
          title: "Servicios Legales",
          text: "Explora nuestras áreas de práctica.",
          img: { src: iconoServicio, alt: "Servicios" },
          navigate: "/servicios",
          cta: "Ver Servicios",
          onClick: () => {
            console.log('Click en servicios');
          }
        },
        {
          title: "Blog Jurídico",
          text: "Mantente informado con nuestros análisis.",
          img: { src: iconoServicio, alt: "Blog" },
          navigate: "/blog",
          cta: "Leer Blog",
          onClick: () => {}
        }
      ]}
    />
  );
}
```

**Propiedades:**
- `title` (string): Título de la sección
- `text` (string): Descripción general
- `ctas` (array): Array de objetos con:
  - `title` (string): Título de la tarjeta
  - `text` (string): Descripción
  - `img.src` (string): Ícono/imagen
  - `img.alt` (string): Texto alternativo
  - `navigate` (string): Ruta
  - `cta` (string): Texto del botón
  - `onClick` (función): Función al hacer click

---

### 7. FormAppointment

Formulario para agendar citas o consultas.

**Importación:**
```tsx
import { FormAppointment } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import FormAppointment from './components/utils/FormAppoiment';

function AgendarCita() {
  const handleSubmit = (formData) => {
    console.log('Datos del formulario:', formData);
    // Aquí envías los datos a tu backend
  };

  return (
    <FormAppointment
      areas={[
        "Derecho Civil",
        "Derecho Laboral",
        "Derecho Penal",
        "Derecho Familiar",
        "Otro"
      ]}
      onSubmit={handleSubmit}
    />
  );
}
```

**Propiedades:**
- `areas` (array de strings): Áreas de interés para el selector
- `onSubmit` (función): Función que recibe los datos del formulario

**Campos del formulario:**
- Nombre Completo
- Correo Electrónico
- Área de Interés (selector)
- Descripción del caso (textarea)

---

### 8. Footer

Footer completo con información de contacto, enlaces y redes sociales.

**Importación:**
```tsx
import { Footer } from 'imperiohub-ui/autonomoPro';
```

**Uso:**
```tsx
import Footer from './components/Footer';

function App() {
  return (
    <Footer
      brand={{
        logo: "⚖️",
        name: "Mi Empresa Legal",
        tagline: "Defendiendo tus derechos con experiencia."
      }}
      nav={{
        title: "Navegación",
        links: [
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Blog", href: "/blog" }
        ]
      }}
      contact={{
        title: "Contacto",
        email: "info@miempresa.com",
        phone: "+34 123 456 789",
        address: "Calle Principal 123, Madrid"
      }}
      social={{
        title: "Síguenos",
        items: [
          { name: "twitter", href: "https://twitter.com/..." },
          { name: "linkedin", href: "https://linkedin.com/..." },
          { name: "facebook", href: "https://facebook.com/..." }
        ]
      }}
      legal={{
        rights: "© 2025 Mi Empresa. Todos los derechos reservados.",
        disclaimer: "La información es solo para fines informativos."
      }}
    />
  );
}
```

---

## Páginas Completas (Ejemplos)

También puedes importar páginas completas ya construidas:

```tsx
import {
  HomePage,
  ServicesPage,
  BlogPage,
  AgendarCitaPage,
  NotFoundPage
} from 'imperiohub-ui/autonomoPro';
```

---

## Ejemplo Completo de App

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  NavBar,
  HomePage,
  ServicesPage,
  BlogPage,
  NotFoundPage
} from 'imperiohub-ui/autonomoPro';

function App() {
  return (
    <BrowserRouter>
      <NavBar
        brand={{ title: "Mi Empresa", img: { src: "/logo.svg" }, navigate: "/" }}
        links={[
          { label: "Inicio", href: "/", navigate: "/" },
          { label: "Servicios", href: "/servicios", navigate: "/servicios" }
        ]}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
```

---

## Notas Importantes

1. **Estilos**: Los componentes vienen con estilos predefinidos (SCSS modules)
2. **React Router**: Algunos componentes usan navegación, asegúrate de tener `react-router-dom` instalado
3. **Imágenes**: Importa tus imágenes/SVGs y pásalas como `src` a los componentes
4. **Funciones onClick**: Siempre proporciona una función, aunque sea vacía `() => {}`

---

## Soporte

Si tienes dudas o encuentras algún problema, consulta la documentación completa o contacta al equipo de desarrollo.
