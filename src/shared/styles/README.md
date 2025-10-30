# 🎨 Sistema de Estilos Modular

## 📁 Estructura de Carpetas

```
src/shared/styles/
├── variables.scss                    # Variables base globales
├── component-templates.scss          # Archivo principal que importa todo
├── templates/                        # Plantillas por componente
│   ├── header/
│   │   └── _header-templates.scss
│   ├── sider/
│   │   └── _sider-templates.scss
│   ├── footer/
│   │   └── _footer-templates.scss
│   ├── dashboard/
│   │   └── _dashboard-templates.scss
│   ├── login/
│   │   └── _login-templates.scss
│   ├── pages/
│   │   └── _pages-templates.scss
│   ├── forms/
│   │   └── _forms-templates.scss
│   ├── buttons/
│   │   └── _buttons-templates.scss
│   └── cards/
│       └── _cards-templates.scss
└── variables/                        # Variables específicas por componente
    ├── header/
    │   └── _header-variables.scss
    ├── sider/
    │   └── _sider-variables.scss
    ├── footer/
    │   └── _footer-variables.scss
    ├── dashboard/
    │   └── _dashboard-variables.scss
    ├── login/
    │   └── _login-variables.scss
    ├── pages/
    │   └── _pages-variables.scss
    ├── forms/
    │   └── _forms-variables.scss
    ├── buttons/
    │   └── _buttons-variables.scss
    └── cards/
        └── _cards-variables.scss
```

## 🚀 Cómo Usar

### 1. Importar en tu archivo SCSS
```scss
@import "../../shared/styles/component-templates.scss";
```

### 2. Usar las plantillas
```scss
.mi-componente {
  @extend .theme-header;           // Para header
  @extend .theme-sider;            // Para sider
  @extend .theme-footer;           // Para footer
  @extend .theme-dashboard-card;   // Para tarjetas de dashboard
  @extend .theme-login-form;       // Para formularios de login
  @extend .theme-page-container;   // Para contenedores de página
  @extend .theme-button;           // Para botones
  @extend .theme-card;             // Para tarjetas generales
}
```

### 3. Usar utilidades básicas
```scss
.mi-texto {
  @extend .theme-text-primary;     // Texto primario
  @extend .theme-text-secondary;   // Texto secundario
  @extend .theme-bg-primary;       // Fondo primario
  @extend .theme-bg-secondary;     // Fondo secundario
  @extend .theme-transition;       // Transiciones
}
```

## 🎯 Beneficios

### ✅ **Separación por Componentes**
- Cada componente tiene sus propias variables y plantillas
- Fácil mantenimiento y escalabilidad
- No hay conflictos entre componentes

### ✅ **Reutilización Máxima**
- Una sola importación para todo
- Plantillas específicas para cada tipo de componente
- Utilidades globales disponibles

### ✅ **Consistencia Total**
- Todas las variables están centralizadas
- Modo claro y oscuro automático
- Transiciones uniformes en toda la app

### ✅ **Escalabilidad**
- Agregar nuevos componentes es súper fácil
- Cada carpeta es independiente
- Estructura clara y organizada

## 🔧 Agregar Nuevo Componente

### 1. Crear variables específicas
```scss
// src/shared/styles/variables/mi-componente/_mi-componente-variables.scss
:root {
  --mi-componente-bg: #ffffff;
  --mi-componente-text: #262626;
}

[data-theme="dark"] {
  --mi-componente-bg: #141414;
  --mi-componente-text: #ffffff;
}

@mixin mi-componente-base {
  background-color: var(--mi-componente-bg);
  color: var(--mi-componente-text);
}
```

### 2. Crear plantillas específicas
```scss
// src/shared/styles/templates/mi-componente/_mi-componente-templates.scss
@import "../../variables/mi-componente/mi-componente-variables";

.mi-componente-template {
  @include mi-componente-base;
}

.theme-mi-componente {
  @extend .mi-componente-template;
}
```

### 3. Importar en el archivo principal
```scss
// src/shared/styles/component-templates.scss
@import "./templates/mi-componente/mi-componente-templates";
```

### 4. Usar en tu componente
```scss
// src/components/MiComponente.scss
@import "../../shared/styles/component-templates.scss";

.mi-componente {
  @extend .theme-mi-componente;
}
```

## 🎨 Variables Disponibles

### **Variables Base (variables.scss)**
- `--primary-color` - Color primario
- `--secondary-color` - Color secundario
- `--text-color` - Color de texto
- `--background-color` - Color de fondo
- `--border-color` - Color de borde
- `--shadow-color` - Color de sombra

### **Variables por Componente**
Cada componente tiene sus propias variables específicas:
- `--header-bg`, `--header-text`, `--header-icon`
- `--sider-bg`, `--sider-text`, `--sider-border`
- `--footer-bg`, `--footer-text`, `--footer-icon-size`
- `--dashboard-bg`, `--dashboard-padding`, `--dashboard-card-height`
- Y muchas más...

## 🌙 Modo Oscuro Automático

Todas las variables cambian automáticamente cuando se activa el modo oscuro:
```scss
[data-theme="dark"] {
  --header-bg: #141414;        // Cambia de #ffffff a #141414
  --text-color: #ffffff;       // Cambia de #262626 a #ffffff
  --background-color: #141414; // Cambia de #ffffff a #141414
}
```

¡El sistema es completamente automático! 🚀
