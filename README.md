# AIgree Landing Page

## Overview
AIgree Landing Page is a modern, responsive web application showcasing a futuristic design based on a Figma template. The project demonstrates the integration of cutting-edge web technologies to create a seamless user experience with beautiful UI components.

## Features
- 🎨 Modern UI design with Figma integration
- 📱 Fully responsive layout
- 🎯 Optimized performance with Vite
- 🔒 Type-safe development with TypeScript
- 🎁 Rich component library with shadcn-ui
- 🎭 Custom styling with Tailwind CSS

## Technology Stack
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[shadcn-ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework

## Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd AIgree_landing
```

2. Install dependencies
```bash
npm install
```

### Development
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build
Create a production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Project Structure
```
AIgree_landing/
├── public/              # Static assets
├── src/
│   ├── assets/         # Project assets (images, etc.)
│   ├── components/     # React components
│   │   └── ui/        # shadcn-ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and Figma styles
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.