# TODO App

A simple and efficient TODO application built with modern web technologies. This app allows users to organize their tasks effectively, offering features like task creation, modification, and deletion, with a sleek and responsive user interface.

---

## 📑 Table of Contents

- [TODO App](#todo-app)
  - [📑 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🚀 Getting Started](#-getting-started)
    - [⚙️ Prerequisites](#️-prerequisites)
    - [💾 Installation](#-installation)
    - [🏃 Running the App](#-running-the-app)
  - [🎨 Theme System & Styling](#-theme-system--styling)
    - [🌓 Dark/Light Mode Features](#-darklight-mode-features)
    - [🎨 Color Palette](#-color-palette)
    - [🏗️ SCSS Architecture](#️-scss-architecture)
    - [🧩 Component Templates](#-component-templates)
    - [🎯 Best Practices](#-best-practices)
    - [📚 Documentation](#-documentation)
  - [📝 Configuration](#-configuration)
  - [🔗 Important Links to Have at Hand](#-important-links-to-have-at-hand)
  - [📚 Additional Links](#-additional-links)
  - [🤝 Contributing](#-contributing)

---

## ✨ Features

- Add, update, and delete tasks.
- Mark tasks as completed.
- **Dark/Light Mode Toggle** with automatic theme switching.
- Responsive and mobile-friendly design using **Ant Design**.
- State management with **Redux Toolkit**.
- Fast development and build process with **Vite**.
- **Modular SCSS Architecture** with theme variables and component templates.

[⬆️ Back to Top](#todo-app)

---

## 🛠️ Technologies Used

This project leverages the following technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript.
- [Ant Design](https://ant.design/) - A comprehensive design system for enterprise applications.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, recommended way to write Redux logic.
- [Vite](https://vitejs.dev/) - A fast development build tool optimized for modern web projects.

---

## 🚀 Getting Started

### ⚙️ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/)

### 💾 Installation

```sh
# Clone the repository
git clone https://github.com/<your-account>/todoapp-web-react.git
cd todoapp-web-react

# Install dependencies
npm install
```

[⬆️ Back to Top](#todo-app)

---

### 🏃 Running the App

```sh
# Start the development server
npm run dev
```

Access the app at `http://localhost:5173` (or another specified port).

---

## 🎨 Theme System & Styling

This project includes a comprehensive theme system with both light and dark modes, built using CSS custom properties and SCSS.

### 🌓 Dark/Light Mode Features

- **Automatic Theme Switching**: Toggle between light and dark modes with a single click
- **Persistent Theme State**: Theme preference is maintained across sessions
- **Ant Design Integration**: Seamless integration with Ant Design's theme system
- **CSS Custom Properties**: Dynamic color switching using CSS variables

### 🎨 Color Palette - Optimizado para Ambos Modos

#### Light Mode Colors
```scss
--primary-color: #1677ff;        // Primary blue
--secondary-color: #52c41a;      // Success green
--warning-color: #faad14;        // Warning orange
--error-color: #ff4d4f;          // Error red
--text-color: #262626;           // Primary text
--text-secondary: #8c8c8c;       // Secondary text
--background-color: #ffffff;     // Main background
--background-secondary: #fafafa; // Secondary background
--border-color: #d9d9d9;         // Border color
--shadow-color: rgba(0, 0, 0, 0.1); // Shadow color
--hover-bg: rgba(0, 0, 0, 0.04); // Hover background
--focus-border: #1677ff;         // Focus border
--focus-shadow: rgba(22, 119, 255, 0.2); // Focus shadow
```

#### Dark Mode Colors - Mejorado para Mejor Contraste
```scss
--primary-color: #177ddc;        // Primary blue (darker)
--secondary-color: #49aa19;      // Success green (darker)
--warning-color: #d48806;        // Warning orange (darker)
--error-color: #d32029;          // Error red (darker)
--text-color: #ffffff;           // Primary text (white)
--text-secondary: #a6a6a6;       // Secondary text (gray)
--background-color: #141414;      // Main background (dark)
--background-secondary: #1f1f1f; // Secondary background (darker)
--border-color: #434343;         // Border color (dark gray)
--shadow-color: rgba(0, 0, 0, 0.3); // Shadow color (darker)
--hover-bg: rgba(255, 255, 255, 0.08); // Hover background
--focus-border: #177ddc;         // Focus border
--focus-shadow: rgba(23, 125, 220, 0.3); // Focus shadow
```

### 🏗️ SCSS Architecture

#### File Structure
```
src/
├── shared/
│   ├── styles/
│   │   ├── variables.scss          // Theme variables
│   │   └── component-templates.scss // Reusable component styles
│   └── contexts/
│       └── ThemeContext.tsx        // Theme state management
├── features/
│   └── [feature]/
│       ├── [Component].tsx
│       └── styles/
│           └── [Component].scss
└── components/
    └── layout/
        ├── header/
        │   ├── components/
        │   │   └── Header.tsx
        │   └── styles/
        │       └── Header.scss
        └── sider-menu/
            ├── SiderMenu.tsx
            └── SiderMenu.scss
```

#### Using Theme Variables

**In SCSS files:**
```scss
@import "../../shared/styles/variables.scss";

.my-component {
  background: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  @include theme-transition; // Smooth transitions
}
```

**In React components:**
```tsx
import { useTheme } from '../shared/contexts/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}
```

### 🧩 Component Templates

The project includes pre-built SCSS templates for common components:

- **Card Template**: `.card-template` - For dashboard cards and content containers
- **Button Template**: `.button-template` - For consistent button styling
- **Form Template**: `.form-template` - For form inputs and labels
- **List Template**: `.list-template` - For data lists and navigation
- **Modal Template**: `.modal-template` - For dialogs and popups
- **Table Template**: `.table-template` - For data tables

### 🎯 Best Practices

1. **Always import variables**: Include `@import "../../shared/styles/variables.scss"` in each SCSS file
2. **Use CSS custom properties**: Prefer `var(--variable-name)` over hardcoded values
3. **Apply theme transitions**: Use `@include theme-transition` for smooth theme changes
4. **Follow naming conventions**: Use semantic class names that describe purpose, not appearance
5. **Extend templates**: Use existing templates as base for new components

### 📚 Documentation

For detailed theme system documentation, see:
- [Theme System Guide](./docs/theme-system.md)
- [Component Templates Reference](./src/shared/styles/component-templates.scss)

[⬆️ Back to Top](#todo-app)

---

## 📝 Configuration

The following environment variables are required for the app to run:

- `VITE_API_URL` - The endpoint for the backend API.
- `VITE_APP_PORT` - The port number to run the app.

You can configure these in a `.env` file at the root of the project.

Example `.env` file:

```sh
VITE_API_URL=http://localhost:5173
VITE_APP_PORT=5173
```

[⬆️ Back to Top](#todo-app)

---

## 🔗 Important Links to Have at Hand

- [Production Page](https://todoapp.example.com)
- [Open Issues](https://github.com/EndToEndLabCR/todoapp-web-react/issues)

## 📚 Additional Links

- [Design Documents](./docs/design/overview.md)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

---

[⬆️ Back to Top](#todo-app)

_Built with ❤️ by [EndToEndLabCR](https://github.com/EndToEndLabCR)_
