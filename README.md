# Aigenix Labs - AI Agent Solutions Website

A modern, high-end tech website for Aigenix Labs, showcasing domain-specific AI agents that automate business workflows.

## Features

- 🎨 Modern, futuristic design with glassmorphism and gradient backgrounds
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design for desktop and mobile
- 🌙 Dark theme with toggle functionality
- 🎯 Animated hero section with scroll effects
- 🧩 AI Agents Marketplace showcasing 7 different agents
- 🏢 Industries and Integrations sections
- 📧 Contact form with glassmorphism styling
- 🎭 Animated navbar that shrinks on scroll
- 🔮 Particle animations and neural network effects

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── ui/               # Reusable UI components
│   │   └── container-scroll-animation.tsx
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section with scroll animation
│   ├── About.tsx         # About section
│   ├── AIAgents.tsx      # AI Agents marketplace
│   ├── Industries.tsx    # Industries we serve
│   ├── Integrations.tsx  # Integration partners
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer with animations
└── lib/
    └── utils.ts          # Utility functions
```

## Components

### Hero Section
Features the `ContainerScroll` component with 3D scroll animations, particle effects, and gradient backgrounds.

### AI Agents
Showcases 7 different AI agents:
- LeadGen Agent (Sales & Marketing)
- VoiceCare Agent (Customer Support)
- Insight Agent (Business Intelligence)
- OpsFlow Agent (Operations)
- Talent Agent (HR & Recruitment)
- Eduyar/Sahayak Agent (Education)
- ReviewSense Agent (Product Analytics)

### Industries
Displays 8 industry sectors with animated icons.

### Integrations
Shows integration partners with hover effects.

## Customization

- Colors: Modify gradient colors in component files
- Content: Update text and data in component files
- Animations: Adjust Framer Motion animations in component files
- Images: Replace Unsplash images with your own in `Hero.tsx`

## License

MIT

