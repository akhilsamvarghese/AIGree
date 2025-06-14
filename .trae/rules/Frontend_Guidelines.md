# Frontend Guidelines for AIgree MVP

This document serves as a comprehensive guide for maintaining visual and structural consistency between the AIgree landing page and MVP frontend implementation.

## Design System

### Color Palette

#### Primary Colors
- **Background:** Dark Purple (`#0B0121`, `--figma-background`)
- **Primary Purple:** Vibrant Purple (`#eb49ff`, `--figma-pink`)
- **Purple Gradient:**
  - Dark: `#1e0938` (`--figma-purple-dark`)
  - Medium: `#3a0f63` (`--figma-purple-medium`)
  - Light: `#5f2d9a` (`--figma-purple-light`)

#### Text Colors
- **Primary Text:** White (`#ECECEC`, `--figma-text-primary`)
- **Secondary Text:** Semi-transparent white (`rgba(236, 236, 236, 0.65)`, `--figma-text-secondary`)

#### Accent Colors
- **Pink Accent:** Light Pink (`#f87dff`, `--figma-pink-light`)
- **Magenta:** Semi-transparent (`rgba(201, 37, 171, 0.75)`, `--figma-magenta`)

### Typography

```css
/* Font Family */
font-family: 'Montserrat', sans-serif;

/* Font Weights */
- Light: 300
- Regular: 400
- Medium: 500
- Bold: 700
```

### Spacing System

Follow Tailwind's spacing scale for consistency:

- **Extra Small:** `space-x-2` (0.5rem, 8px)
- **Small:** `space-x-4` (1rem, 16px)
- **Medium:** `space-x-6` (1.5rem, 24px)
- **Large:** `space-x-8` (2rem, 32px)
- **Extra Large:** `space-x-12` (3rem, 48px)

### Border Radius

- **Default:** `rounded-lg` (0.5rem)
- **Buttons:** `rounded-full`
- **Cards:** `rounded-lg`

## Component Guidelines

### Buttons

#### Primary Button
```css
@apply bg-white text-aigree-purple-dark hover:bg-opacity-90 font-medium rounded-full px-6 py-2 transition-opacity duration-150 will-change-[opacity,transform] hover:scale-[1.02] transform-gpu;
```

#### Secondary Button
```css
@apply bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 font-medium rounded-full px-6 py-2 transition-[background,transform] duration-150 will-change-[background,transform] hover:scale-[1.02] transform-gpu;
```

### Cards

```css
@apply rounded-lg bg-black bg-opacity-20 border border-white border-opacity-10 shadow-feature-card backdrop-blur-sm;
```

### Input Fields (using shadcn-ui)

- Use dark theme variants
- Apply consistent border colors (`--border: 267 30% 15%`)
- Maintain hover and focus states with primary accent color

## Reusable Components

### Navigation
- Navbar with logo, navigation links, and CTA buttons
- Mobile-responsive hamburger menu
- Consistent header spacing and alignment

### Common UI Elements
1. **Upload Panel**
   - Clear drop zone area
   - File type indicators
   - Upload progress feedback

2. **Result Cards**
   - Consistent padding and spacing
   - Clear hierarchy of information
   - Action buttons placement

3. **Modal/Dialog**
   - Centered content
   - Backdrop blur effect
   - Consistent close button placement

## Layout Principles

### Section Hierarchy
1. **Hero Section**
   - Full-width background
   - Centered content with max-width
   - Clear CTA placement

2. **Feature Sections**
   - Alternating layouts
   - Consistent spacing between sections
   - Visual hierarchy with headings

3. **Content Sections**
   - Grid-based layouts
   - Responsive column arrangements
   - Consistent gutters

### Responsive Design

- Mobile-first approach
- Breakpoints:
  ```css
  sm: '640px'
  md: '768px'
  lg: '1024px'
  xl: '1280px'
  2xl: '1536px'
  ```

## Design Principles

1. **Minimalism**
   - Clean, uncluttered layouts
   - Purposeful white space
   - Clear visual hierarchy

2. **Consistency**
   - Uniform spacing
   - Consistent color usage
   - Matching component styles

3. **Accessibility**
   - High contrast text
   - Clear focus states
   - Adequate text sizing

4. **Animation & Interaction**
   - Subtle hover effects
   - Smooth transitions
   - Purposeful animations

## Implementation Notes

### TailwindCSS Utilities

- Use `@apply` directives for repeated utility combinations
- Maintain consistent class ordering
- Leverage Tailwind's configuration for custom values

### shadcn-ui Integration

- Customize component themes to match design system
- Maintain consistent form control styling
- Use provided hooks and utilities

### Best Practices

1. **Component Organization**
   - Group related components
   - Maintain consistent file structure
   - Document component props

2. **Code Style**
   - Follow TypeScript best practices
   - Maintain consistent naming conventions
   - Document complex implementations

3. **Performance**
   - Optimize images and assets
   - Implement lazy loading
   - Monitor bundle size

This guide should be treated as a living document and updated as the design system evolves. Always ensure new components and features align with these guidelines to maintain consistency across the application.