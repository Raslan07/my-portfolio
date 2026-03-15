# Mostafa Raslan — Portfolio (Next.js 14)

A modern, animated portfolio built with **Next.js 14**, **Framer Motion**, **GSAP**, **Lenis** smooth scroll, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Extract the project folder
# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

## 📁 Project Structure

```
raslan-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav with scroll tracking + mobile menu
│   │   ├── Footer.tsx              # Footer with signature logo
│   │   └── SmoothScrollProvider.tsx # Lenis smooth scroll wrapper
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx         # Hero with signature, GSAP parallax grid, particles
│   │   ├── AboutSection.tsx        # About with profile card and parallax
│   │   ├── SkillsSection.tsx       # Skills with animated progress bars
│   │   ├── ProjectsSection.tsx     # GitHub projects grid with hover effects
│   │   ├── ResumeSection.tsx       # Timeline + mini resume card
│   │   └── ContactSection.tsx      # Contact links + animated form
│   │
│   └── ui/
│       ├── CustomCursor.tsx        # Custom cursor with follower
│       ├── ParticleField.tsx       # Canvas particle animation
│       ├── AnimatedText.tsx        # Word-by-word text reveal
│       ├── ScrollReveal.tsx        # Reusable scroll reveal wrapper
│       ├── SectionLabel.tsx        # Section heading component
│       └── MagneticButton.tsx      # Magnetic hover button effect
│
├── data/
│   └── portfolio.ts        # ✏️ All your content — edit this file!
│
├── hooks/
│   ├── useSmoothScroll.ts  # Lenis hook
│   └── useCustomCursor.ts  # Cursor hook
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
├── styles/
│   └── globals.css         # Global styles, CSS variables, animations
│
├── public/
│   └── signature.png       # Your transparent signature image
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ✏️ Customize Your Content

All portfolio data is in one file — **`data/portfolio.ts`**:
- Edit `personalInfo` for name, email, bio, social links
- Edit `skills` to change your tech stack
- Edit `projects` to add/remove projects
- Edit `education` and `experience` for the resume section

## 🎨 Change Colors

CSS variables are in `styles/globals.css`:
```css
:root {
  --accent: #6c63ff;    /* Purple — main accent */
  --accent2: #ff6584;   /* Pink */
  --accent3: #43e97b;   /* Green */
  --bg: #050508;        /* Background */
}
```

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| Framer Motion | Page/scroll animations |
| GSAP | Hero parallax, advanced tweens |
| Lenis | Buttery smooth scrolling |
| Tailwind CSS | Utility-first styling |
| TypeScript | Type safety |

## 🌐 Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```
