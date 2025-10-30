# Sistema de Temas - TodoApp React

## Descripción
Este proyecto implementa un sistema completo de temas claro/oscuro usando Ant Design y SCSS con variables CSS personalizadas.

## Estructura del Sistema de Temas

### 1. Contexto de Tema (`src/shared/contexts/ThemeContext.tsx`)
- Proporciona el estado global del tema (claro/oscuro)
- Maneja el cambio de tema con `toggleTheme()`
- Configura Ant Design con el algoritmo de tema correspondiente
- Aplica el atributo `data-theme` al body del documento

### 2. Variables de Tema (`src/shared/styles/variables.scss`)
- Define variables CSS para modo claro y oscuro
- Incluye colores, fondos, bordes y sombras
- Proporciona mixins para transiciones y estilos base

### 3. Plantillas de Componentes (`src/shared/styles/component-templates.scss`)
- Plantillas reutilizables para diferentes tipos de componentes
- Incluye estilos para tarjetas, botones, formularios, listas, modales y tablas
- Utilidades de tema para aplicar estilos rápidamente

## Cómo Usar

### En Componentes React
```tsx
import { useTheme } from '../shared/contexts/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
}
```

### En Archivos SCSS
```scss
@import "../../shared/styles/variables.scss";

.my-component {
  @include theme-transition;
  background: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  
  &:hover {
    background: var(--background-secondary);
  }
}
```

### Usando Plantillas
```scss
@import "../../shared/styles/component-templates.scss";

.my-card {
  @extend .card-template;
  
  .my-title {
    @extend .card-title;
  }
}
```

## Variables Disponibles

### Colores
- `--primary-color`: Color primario del tema
- `--secondary-color`: Color secundario
- `--warning-color`: Color de advertencia
- `--error-color`: Color de error
- `--text-color`: Color de texto principal
- `--text-secondary`: Color de texto secundario

### Fondos
- `--background-color`: Fondo principal
- `--background-secondary`: Fondo secundario
- `--card-bg`: Fondo de tarjetas
- `--header-bg`: Fondo del header

### Bordes y Sombras
- `--border-color`: Color de bordes
- `--shadow-color`: Color de sombras
- `--card-shadow`: Sombra de tarjetas
- `--card-shadow-hover`: Sombra de tarjetas al hacer hover

## Mixins Disponibles

- `@include theme-transition`: Transiciones suaves para cambios de tema
- `@include card-base`: Estilos base para tarjetas
- `@include text-primary`: Texto principal
- `@include text-secondary`: Texto secundario
- `@include background-primary`: Fondo principal
- `@include background-secondary`: Fondo secundario

## Mejores Prácticas

1. **Siempre importar variables**: Incluir `@import "../../shared/styles/variables.scss"` en cada archivo SCSS
2. **Usar variables CSS**: Preferir `var(--variable-name)` sobre valores hardcodeados
3. **Aplicar transiciones**: Usar `@include theme-transition` para cambios suaves
4. **Seguir plantillas**: Usar las plantillas existentes como base para nuevos componentes
5. **Consistencia**: Mantener el mismo patrón de colores y estilos en toda la aplicación

## Ejemplo Completo

```scss
@import "../../shared/styles/variables.scss";
@import "../../shared/styles/component-templates.scss";

.my-dashboard-card {
  @extend .card-template;
  border-radius: 12px;
  padding: 24px;
  
  .card-header {
    @include text-primary;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .card-content {
    @include text-secondary;
    line-height: 1.6;
  }
  
  .card-actions {
    margin-top: 20px;
    display: flex;
    gap: 12px;
    
    .action-button {
      @extend .button-template;
      padding: 8px 16px;
      border-radius: 6px;
    }
  }
}
```

Este sistema asegura que todos los componentes mantengan consistencia visual y soporten ambos modos de tema de manera automática.
