# Project Context - Interior Design Studio

## Business Overview

This project is for an interior design and architecture studio that wants to expand their online presence with both a landing page and an e-commerce platform. The business offers:

1. Interior design and architecture services
2. Custom-made furniture (made to order)
3. Ready-to-buy décor items and home accessories

## Project Scope

The project has two main components:

### Landing Page (Current Development Focus)

- Brand presentation
- Services showcase
- Portfolio of projects
- Contact information
- Preview/link to the e-commerce section ("Buy what we use")

### E-commerce (WooCommerce Integration)

- Will be built on WooCommerce platform
- No custom development needed for the e-commerce functionality
- Will integrate with the main landing page for a cohesive brand experience

## Design Inspiration

- [Laura O](https://laurao.com/)
- [Himera Estudio](https://himeraestudio.com/portfolio)
- [Sarah's Day](https://sarahsday.com/collections/workout-programs)

## Technical Implementation

### Tech Stack

The project is built using:

- **Frontend Framework**: Next.js 13+ (with App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **TypeScript** for type safety
- **Deployment**: Planned for Vercel

### Project Structure

The project follows a modular component-based architecture:

```
├── src
│   ├── app
│   │   ├── call
│   │   │   └── page.tsx
│   │   ├── ClientBody.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── nosotras
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── proyecto
│   │       ├── [slug]
│   │       │   ├── generateStaticParams.ts
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── benefits.tsx
│   │   ├── design-showcase.tsx
│   │   ├── faq.tsx
│   │   ├── featured-work.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── pricing.tsx
│   │   ├── project
│   │   ├── services.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── container.tsx
│   │       ├── dialog.tsx
│   │       └── sheet.tsx
│   ├── data
│   │   └── project.ts
│   └── lib
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json
```

### UI Design System

The project uses a clean, minimalist design system with:

- **Colors**: Black and white color scheme for a timeless, elegant aesthetic
- **Typography**:
  - Instrument Serif for headings
  - Figtree for body text
- **Components**: Custom-styled shadcn/ui components

### Key Components

1. **Header**: Navigation bar with links to key sections
2. **Hero**: Main banner with value proposition
3. **Featured Work**: Portfolio showcase with image galleries
4. **Services**: Service offerings with descriptions
5. **Benefits**: Key advantages of working with the studio
6. **Pricing**: Service packages and pricing information
7. **CTA**: Call-to-action sections for booking calls
8. **Footer**: Site navigation and contact information

### Custom UI Elements

- Custom card components for showcasing projects
- Image galleries with hover effects
- Custom buttons and interactive elements
- Responsive design for all screen sizes

## Development Guidelines

### Current Focus (Landing Page)

1. Complete the core sections of the landing page
2. Ensure responsive design works on all devices
3. Implement animations and transitions for better UX
4. Add content management capabilities for easy updates
5. Optimize images and performance

### Implementation Principles

1. **Mobile-first approach**: Design for mobile devices first, then expand to larger screens
2. **Performance optimization**: Keep bundle size small, optimize images
3. **Accessibility**: Ensure the site is accessible to all users
4. **SEO friendly**: Implement proper meta tags and semantic HTML

### Next Steps

1. Gather content for all sections (text and images)
2. Implement the main landing page sections
3. Add animations and interactions
4. Test on various devices and browsers
5. Deploy a preview version for client feedback
6. Prepare for Phase 2 (e-commerce) by setting up architecture

## E-commerce Integration (WooCommerce)

For the e-commerce component, we'll be using WooCommerce:

1. **Integration Points**:

   - Visual design consistency between landing page and store
   - Seamless navigation between landing page and store
   - Shared branding elements

2. **Product Categories**:

   - Custom Furniture (made-to-order items)
   - Ready-to-ship decor and accessories

3. **Key Requirements**:
   - Custom form for furniture specifications
   - Clear product categorization
   - Simple checkout process
   - Mobile-friendly shopping experience

## Branding Guidelines

The site reflects the studio's brand identity:

- **Voice**: Professional, creative, design-focused
- **Visual identity**: Clean, modern, with focus on portfolio work
- **User experience**: Intuitive navigation, clear calls to action

## Project Management

- **Development Approach**: Modular, component-based development
- **Version Control**: GitHub repository
- **Deployment**: Continuous deployment via Vercel
- **Testing**: Cross-browser and device testing

## Resources Needed

1. Complete brand guidelines
2. High-quality project images
3. Detailed service descriptions
4. Team information and bios
5. Form specifications for contact and custom orders
