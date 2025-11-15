# Guía de Publicación a NPM

Este documento contiene las instrucciones para publicar **@imperiohub/ui** en npm.

## 📋 Pre-requisitos

1. **Cuenta de npm** con permisos para publicar en el scope `@imperiohub`
2. **Autenticación** en npm CLI:
   ```bash
   npm login
   ```
3. **Verificar configuración** del package:
   ```bash
   npm whoami
   # Debe mostrar tu usuario de npm
   ```

## 🚀 Proceso de Publicación

### Opción A: Publicación Automática con Git Tag (Recomendada)

Esta es la forma más segura ya que crea un registro permanente en git.

1. **Verificar que todo está commiteado:**
   ```bash
   git status
   # Debe estar limpio (working tree clean)
   ```

2. **Crear y push del tag de versión:**
   ```bash
   # La versión actual es 0.2.0 (ver package.json)
   git tag v0.2.0
   git push origin v0.2.0
   ```

3. **El workflow de CI/CD publicará automáticamente** el paquete en npm cuando detecte el nuevo tag.

### Opción B: Publicación Manual

Si necesitas publicar manualmente:

1. **Asegurar que el build está actualizado:**
   ```bash
   npm run build
   ```

2. **Verificar el contenido del paquete:**
   ```bash
   npm pack --dry-run
   ```

   Esto mostrará qué archivos se incluirán en el paquete sin crear el archivo.

3. **Publicar a npm:**
   ```bash
   # Para primera publicación o versión pública
   npm publish --access public

   # Para actualizaciones subsecuentes
   npm publish
   ```

## 📦 Contenido del Paquete

El paquete incluye:

```
dist/
├── atoms/          # Componentes atómicos
├── builders/       # Sistema de builders (JSON-driven)
├── molecules/      # Componentes moleculares
├── sections/       # Secciones de landing pages
├── types/          # TypeScript definitions
├── utils/          # Utilidades
├── index.cjs.js    # CommonJS bundle
├── index.es.js     # ES Module bundle
├── index.cjs.js.map
├── index.es.js.map
└── ui.css          # Estilos bundled
```

## ✅ Verificaciones Post-Publicación

1. **Verificar en npm:**
   ```bash
   npm view @imperiohub/ui
   ```

2. **Probar instalación:**
   ```bash
   # En un proyecto de prueba
   npm install @imperiohub/ui@latest
   ```

3. **Verificar que se puede importar:**
   ```javascript
   import { Button, Hero, LandingPageBuilder } from '@imperiohub/ui';
   import '@imperiohub/ui/styles.css';
   ```

## 🔄 Versionado

Seguimos [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Cambios incompatibles con versiones anteriores
- **MINOR** (0.X.0): Nueva funcionalidad compatible hacia atrás
- **PATCH** (0.0.X): Corrección de bugs compatible hacia atrás

### Para Actualizar la Versión:

```bash
# Patch (0.2.0 → 0.2.1)
npm version patch

# Minor (0.2.0 → 0.3.0)
npm version minor

# Major (0.2.0 → 1.0.0)
npm version major
```

Esto automáticamente:
- Actualiza el `package.json`
- Crea un commit
- Crea un tag git

Luego solo necesitas:
```bash
git push --follow-tags
```

## 🐛 Troubleshooting

### Error: "You do not have permission to publish"

Solución:
```bash
# Verificar usuario
npm whoami

# Re-autenticar
npm logout
npm login
```

### Error: "version already exists"

Solución:
```bash
# Incrementar la versión
npm version patch  # o minor/major según corresponda
```

### Error: "Missing required field"

Verificar que `package.json` tiene todos los campos requeridos:
- `name`
- `version`
- `description`
- `license`
- `repository`

## 📝 Checklist Pre-Publicación

Antes de publicar, verificar:

- [ ] Todos los tests pasan (cuando estén implementados)
- [ ] El build se completa sin errores: `npm run build`
- [ ] El `CHANGELOG.md` está actualizado
- [ ] La versión en `package.json` es correcta
- [ ] No hay secretos o archivos sensibles en el paquete
- [ ] La documentación (README.md) está actualizada
- [ ] Los cambios están commiteados en git

## 🎯 Versiones Futuras

### v0.2.1 (Próximo Patch)
- Correcciones de bugs menores
- Mejoras de documentación

### v0.3.0 (Próximo Minor)
- Templates completos (AutonomoPro)
- Sistema de temas
- Nuevas variantes de secciones

### v1.0.0 (Primer Major Release)
- API estable y completa
- Testing completo
- Documentación exhaustiva
- Performance optimizado

## 📚 Recursos

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Repository](https://github.com/imperiohub-dev/imperiohub-ui)
- [npm Package Page](https://www.npmjs.com/package/@imperiohub/ui)

---

**Nota:** Asegúrate de que tienes configurado el workflow de CI/CD en GitHub Actions si quieres usar la publicación automática con git tags.
