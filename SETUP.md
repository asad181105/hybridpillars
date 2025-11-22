# Setup Instructions

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

This project follows the shadcn/ui structure:

- `/components/ui` - Reusable UI components (like `container-scroll-animation.tsx`)
- `/components` - Feature components (Navbar, Hero, etc.)
- `/app` - Next.js App Router pages and layouts
- `/lib` - Utility functions

## Key Features Implemented

✅ Next.js 14 with TypeScript
✅ Tailwind CSS with custom configuration
✅ Framer Motion for animations
✅ shadcn/ui compatible structure
✅ Dark theme with toggle
✅ Responsive design
✅ Container scroll animation component
✅ All requested sections (Hero, About, AI Agents, Industries, Integrations, Contact, Footer)

## Customization

- **Colors**: Modify gradient classes in component files (e.g., `from-blue-500 to-purple-600`)
- **Content**: Update text in component files
- **Images**: Replace Unsplash image URLs in `components/Hero.tsx`
- **Animations**: Adjust Framer Motion props in component files

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The project uses Next.js Image component for optimized images
- All components are client-side rendered where needed (`"use client"`)
- The dark theme toggle is implemented in the Navbar component
- Particle animations are SSR-safe with window checks

