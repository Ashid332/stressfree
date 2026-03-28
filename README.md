# Stress Free All (SFA) - 3D Immersive Landing Page

A premium mindfulness, life coaching & wellness brand landing page featuring Modern Zen 3D design with glassmorphism UI, deep spatial depth, soft glowing surfaces, and tactile 3D card elements.

## 🚀 Live Demo
- **Production URL**: Coming soon
- **GitHub Repository**: https://github.com/Ashid332/stressfree

## Design System

### Colors
- **Background**: `#0A0F1E` (deep navy)
- **Primary Accent**: `#4ECFB3` (teal)
- **Secondary Accents**: 
  - `#F4A7A3` (peach)
  - `#C9B8F0` (lavender)
  - `#72A6F5` (blue)
- **Text Colors**:
  - Primary: `#F0F4FF`
  - Secondary: `#9BA8C0`

### Typography
- **Body/UI**: Plus Jakarta Sans
- **Section Headers**: Playfair Display

### Glass Components
- **Cards**: `rgba(255,255,255,0.06)` background with `blur(24px)` and `1px border rgba(255,255,255,0.12)`
- **Border Radius**: 
  - Pills: `100px`
  - Cards: `28px`
  - Inner elements: `16px`

### Shadows
All cards feature multi-layer shadows:
- Depth shadow: `rgba(0,0,0,0.5)`
- Colored glow at 20% opacity specific to each card's theme

## Sections

### 1. Floating Navigation
- Pill-shaped frosted glass bar
- Centered, floating 24px from top
- Contains logo, navigation links, and CTA button
- Responsive mobile menu

### 2. Hero Section
- Full viewport height
- Radial gradient blooms with particle dot field overlay
- Split layout (55/45) with content and 3D canvas
- **3D Canvas Placeholder**: Replace with interactive breathing orb or floating zen stones

### 3. Services Section
Three 3D elevated cards with unique glows:
- Coaching (teal glow)
- Mindfulness (lavender glow)
- Well Being (peach glow)

### 4. About Founder Section
- Asymmetric 55/45 split layout
- Bio card with credential pills
- Statistics display
- **3D Avatar Canvas**: Replace with 3D avatar model with lavender glow

### 5. Testimonials Section
- 3D coverflow carousel with center focus
- 5 cards with depth rotation
- Interactive navigation with dot indicators

### 6. Media & Resources Section
- Bento grid layout (12-column masonry)
- Featured video card
- Webinars and articles cards
- **Audio Player**: Full-featured glassmorphic audio player with waveform visualization

### 7. Footer
- CTA banner with email signup
- 4-column grid: Logo + social, Quick Links, Resources, Contact
- Map placeholder
- Bottom bar with copyright and legal links

## Development Notes

### 3D Canvas Placeholders
Two areas marked for 3D implementation:

1. **Hero Section**: Canvas for interactive breathing orb or floating zen stones
   - Located in `HeroSection.tsx`
   - Current placeholder shows animated 2D canvas breathing effect

2. **About Section**: Canvas for 3D avatar model
   - Located in `AboutSection.tsx`
   - Current placeholder shows particle animation with image overlay

### Technologies Used
- React 18.3.1
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React (icons)
- Canvas API for animations

### Responsive Design
- Desktop: 1440px optimized
- Mobile: 390px optimized
- Fully responsive between breakpoints
- Mobile navigation menu
- Adaptive typography and spacing

### Performance Optimizations
- Lazy-loaded animations with `whileInView`
- GPU-accelerated transforms
- Optimized canvas rendering
- Smooth scroll behavior

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Glassmorphism Effects
Custom CSS classes available:
- `.sfa-glass-card` - Standard glassmorphism card
- `.sfa-3d-card` - 3D elevated card with hover effects
- `.sfa-gradient-btn` - Gradient CTA button
- `.sfa-ghost-btn` - Ghost button with glassmorphism

## Credits
- Design: Modern Zen 3D style
- Images: Unsplash
- Icons: Lucide React
- Fonts: Google Fonts (Plus Jakarta Sans, Playfair Display)

## 🚀 Deployment

### GitHub Repository Setup
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Stress Free All landing page"

# Add remote repository
git remote add origin https://github.com/Ashid332/stressfree.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Deployment Options

#### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite configuration
4. Click "Deploy"
5. Your site will be live at `https://stressfree.vercel.app`

#### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect to GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy site

#### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Environment Variables
No environment variables required for basic deployment. If adding backend features (Supabase, analytics, etc.), create a `.env` file:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 📋 Pre-Deployment Checklist
- [x] Logo updated with brand asset
- [x] All sections responsive on mobile, tablet, desktop
- [x] Dev notes added for 3D canvas placeholders
- [x] Audio player functional
- [x] Glassmorphism styling consistent across components
- [x] Motion animations smooth and performant
- [ ] Update social media links in Footer
- [ ] Add real contact information
- [ ] Test on multiple browsers
- [ ] Optimize images for production
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up custom domain
- [ ] Configure SEO meta tags
- [ ] Add Open Graph images

## 📁 Project Structure
```
stressfree/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── MediaSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingNav.tsx
│   │   └── App.tsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── theme.css
│   │   ├── tailwind.css
│   │   └── fonts.css
│   └── main.tsx
├── public/
├── 3D_DESIGN_HANDOFF.md    # Comprehensive 3D implementation guide
├── README.md
├── package.json
└── vite.config.ts
```

## 🤝 Contributing
This is a private project for Stress Free All. If you'd like to suggest improvements:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📄 License
© 2026 Stress Free All. All rights reserved.

---

**Built with ❤️ by the Stress Free All team**