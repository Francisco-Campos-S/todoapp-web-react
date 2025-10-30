# 🎨 **Template System Documentation**

## **📋 Available Templates**

### **1. Content Templates (`_content.scss`)**
```scss
// Content containers
.theme-content-container

// Content titles
.theme-content-title

// Content text
.theme-content-text

// Content headers with gradient
.theme-content-header
```

**Usage Example:**
```tsx
<Card className="work-content">
  <Title className="content-title">Title</Title>
  <Text className="content-text">Content text</Text>
</Card>
```

```scss
.work-content {
  @extend .theme-content-container;
  
  .content-title {
    @extend .theme-content-title;
  }
  
  .content-text {
    @extend .theme-content-text;
  }
}
```

### **2. Statistics Templates (`_statistics.scss`)**
```scss
// Base statistics card
.theme-statistics-card

// Status-specific statistics
.theme-statistics-completed
.theme-statistics-in-progress
.theme-statistics-pending
.theme-statistics-error
```

**Usage Example:**
```tsx
<Card className="stat-card completed-stat">
  <div className="stat-content">
    <div className="stat-icon"><CheckCircleOutlined /></div>
    <div className="stat-info">
      <div className="stat-number">5</div>
      <div className="stat-label">Completed</div>
    </div>
  </div>
</Card>
```

```scss
.stat-card {
  @extend .theme-statistics-card;
  
  &.completed-stat {
    @extend .theme-statistics-completed;
  }
}
```

### **3. Project Templates (`_projects.scss`)**
```scss
// Project items
.theme-project-item

// Status icons
.theme-status-icon

// Action buttons
.theme-action-button

// Priority badges
.theme-priority-badge
```

**Usage Example:**
```tsx
<Card className="project-item">
  <div className="project-header">
    <div className="project-info">
      <div className="project-title-section">
        <CheckCircleOutlined className="status-icon completed" />
        <Title className="project-title">Project Name</Title>
      </div>
      <Text className="project-description">Description</Text>
    </div>
    <div className="project-actions">
      <Button className="action-btn edit-btn">Edit</Button>
      <Button className="action-btn delete-btn">Delete</Button>
    </div>
  </div>
</Card>
```

```scss
.project-item {
  @extend .theme-project-item;
  
  .status-icon {
    @extend .theme-status-icon;
  }
  
  .action-btn {
    @extend .theme-action-button;
  }
}
```

### **4. Navigation Templates (`_navigation.scss`)**
```scss
// Navigation containers
.theme-navigation-container

// Navigation items
.theme-navigation-item

// Breadcrumbs
.theme-breadcrumb

// Tabs
.theme-tabs

// Pagination
.theme-pagination
```

**Usage Example:**
```tsx
<div className="navigation-container">
  <a className="navigation-item active">
    <HomeOutlined className="nav-icon" />
    <span className="nav-text">Home</span>
  </a>
  <a className="navigation-item">
    <UserOutlined className="nav-icon" />
    <span className="nav-text">Profile</span>
  </a>
</div>
```

```scss
.navigation-container {
  @extend .theme-navigation-container;
  
  .navigation-item {
    @extend .theme-navigation-item;
  }
}
```

### **5. Status Templates (`_status.scss`)**
```scss
// Status badges
.theme-status-badge
.theme-status-success
.theme-status-warning
.theme-status-error
.theme-status-info

// Progress bars
.theme-progress-bar

// Loading spinners
.theme-loading-spinner

// Tooltips
.theme-tooltip
```

**Usage Example:**
```tsx
<span className="status-badge success">
  <CheckCircleOutlined className="status-icon" />
  <span className="status-text">Success</span>
</span>

<div className="progress-bar">
  <div className="progress-fill" style={{width: '75%'}}></div>
</div>

<div className="loading-spinner"></div>
```

```scss
.status-badge {
  @extend .theme-status-badge;
  
  &.success {
    @extend .theme-status-success;
  }
}

.progress-bar {
  @extend .theme-progress-bar;
}

.loading-spinner {
  @extend .theme-loading-spinner;
}
```

## **🔧 How to Use Templates**

### **Step 1: Import Templates**
```scss
@import "../../../shared/styles/variables.scss";
@import "../../../shared/styles/component-templates.scss";
```

### **Step 2: Extend Templates**
```scss
.my-component {
  @extend .theme-content-container;
  
  .my-title {
    @extend .theme-content-title;
  }
  
  .my-text {
    @extend .theme-content-text;
  }
}
```

### **Step 3: Use in JSX**
```tsx
<div className="my-component">
  <h2 className="my-title">Title</h2>
  <p className="my-text">Text content</p>
</div>
```

## **🎯 Benefits**

1. **Consistency**: All components use the same styling patterns
2. **Maintainability**: Changes to templates affect all components
3. **Theme Support**: Automatic light/dark mode switching
4. **Reusability**: Templates can be used across different components
5. **Performance**: CSS is optimized and minimal

## **📝 Best Practices**

1. **Always use `@extend`** instead of duplicating CSS
2. **Use semantic class names** that describe the purpose
3. **Combine templates** for complex components
4. **Test both themes** to ensure proper styling
5. **Document custom modifications** when needed

## **🚀 Example: Complete Component**

```tsx
// Component.tsx
import { Card, Typography, Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './Component.scss';

const { Title, Text } = Typography;

export function Component() {
  return (
    <div className="component-container">
      <Card className="component-header">
        <Title className="header-title">Component Title</Title>
        <Text className="header-subtitle">Subtitle</Text>
      </Card>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card className="stat-card completed-stat">
            <div className="stat-content">
              <CheckCircleOutlined className="stat-icon" />
              <div className="stat-info">
                <div className="stat-number">5</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Card className="component-content">
        <Title className="content-title">Content Title</Title>
        <Text className="content-text">Content text</Text>
      </Card>
    </div>
  );
}
```

```scss
// Component.scss
@import "../../../shared/styles/variables.scss";
@import "../../../shared/styles/component-templates.scss";

.component-container {
  @extend .theme-page-container;
}

.component-header {
  @extend .theme-content-header;
}

.stat-card {
  @extend .theme-statistics-card;
  
  &.completed-stat {
    @extend .theme-statistics-completed;
  }
}

.component-content {
  @extend .theme-content-container;
  
  .content-title {
    @extend .theme-content-title;
  }
  
  .content-text {
    @extend .theme-content-text;
  }
}
```

## **🎨 Available Template Categories**

- **Content**: Headers, containers, titles, text
- **Statistics**: Cards with numbers and status colors
- **Projects**: Project items, status icons, action buttons
- **Navigation**: Menus, breadcrumbs, tabs, pagination
- **Status**: Badges, progress bars, loading spinners, tooltips
- **Forms**: Inputs, labels, buttons, validation
- **Cards**: Basic card styling with hover effects
- **Buttons**: Various button styles and states
- **Pages**: Page containers and layouts
- **Dashboard**: Dashboard-specific components
- **Header**: Header components and elements
- **Sider**: Sidebar menu styling
- **Footer**: Footer components and elements
- **Login**: Login form styling

## **🔄 Theme Switching**

All templates automatically support light/dark mode switching through CSS variables:

```scss
// Light theme
:root {
  --text-color: #262626;
  --background-color: #ffffff;
  --primary-color: #1677ff;
}

// Dark theme
[data-theme="dark"] {
  --text-color: #ffffff;
  --background-color: #141414;
  --primary-color: #177ddc;
}
```

The templates use these variables, so switching themes automatically updates all components!
