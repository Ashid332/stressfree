# 🎨 Visual Reference - 3D Elements

This document provides visual descriptions and ASCII art representations of the 3D elements to be implemented.

---

## Hero Section - Breathing Orb

### Visual Description
The breathing orb is a mesmerizing 3D sphere that embodies calm and mindfulness through gentle, rhythmic animation.

### Appearance
```
        ╭─────────────╮
      ╱               ╲
    ╱    ◉  GLOW  ◉    ╲
   │                     │
   │    ✨  TEAL  ✨    │
   │                     │
    ╲    BREATHING     ╱
      ╲               ╱
        ╰─────────────╯
```

### Color Palette
```
Core:     #4ECFB3 (Teal)      ████████
Rim:      #72A6F5 (Blue)      ████████
Ambient:  #C9B8F0 (Lavender)  ████████
Glow:     Additive blending with bloom
```

### Animation Cycle (8 seconds)
```
Scale Over Time:
  
1.05 ┤     ╱╲     ╱╲     ╱╲
     │    ╱  ╲   ╱  ╲   ╱  ╲
1.00 ┤───●────●─●────●─●────●──
     │         ╱      ╲ 
0.95 ┤        ╱        ╲
     └─────────────────────────
     0s    2s    4s    6s    8s
     
     Inhale (expand) → Hold → Exhale (contract) → Hold → Repeat
```

### Material Properties
```javascript
{
  Type:         "Glass/Crystal"
  Transparency: 80%
  Glow:         Medium (emissive)
  Surface:      Smooth, glossy
  Effect:       Bloom post-processing
}
```

---

## About Section - 3D Avatar

### Visual Description
A stylized 3D representation of the founder Reenu, rendered in a elegant porcelain-like material with soft lavender lighting.

### Appearance
```
           ╭───────╮
          ╱  ◉ ◉  ╲    ← Head/Face
         │    ‿    │
         │         │
         ├─────────┤    ← Shoulders
        ╱           ╲
       │   ELEGANT   │  ← Upper body
       │   POSTURE   │
       ╰─────────────╯
       
    Lavender Glow:  ✨ ✨ ✨
```

### Color Palette
```
Surface:  #F0F4FF (Soft white)  ████████
Shadow:   #9BA8C0 (Cool gray)   ████████
Glow:     #C9B8F0 (Lavender)    ████████
Accent:   #4ECFB3 (Teal rim)    ████████
```

### Lighting Setup
```
        ⚡ KEY LIGHT
          ↙
         ● AVATAR
       ↗  ↑  ↖
  FILL   RIM   BACK
  LIGHT LIGHT LIGHT
  
  Key:  Front-left (45°)  - White
  Fill: Front-right (30°) - Lavender
  Rim:  Back-right        - Teal
```

### Material Properties
```javascript
{
  Type:         "Porcelain/Clay"
  Finish:       Matte (60% roughness)
  Subsurface:   Slight translucency
  Emissive:     Low lavender glow
  Surface:      Smooth, refined
}
```

---

## Interactive States

### Hero Orb - Mouse Hover
```
NORMAL STATE:              HOVER STATE:
    ○                         ◎
  ┌───┐                    ┌─────┐
  │ • │  Size: 1.0x        │ ●●● │  Size: 1.1x
  └───┘                    └─────┘
  Glow: 100%               Glow: 130%
  Rotation: 1x             Rotation: 1.5x
```

### Avatar - Mouse Tracking
```
CURSOR LEFT:          CENTER:           CURSOR RIGHT:
    ╭───╮            ╭───╮              ╭───╮
   ╱ ◉ ◉╲          ╱ ◉ ◉╲            ╱ ◉ ◉╲
   │  ⌢  │◀───     │  ⌢  │           ───▶│  ⌢  │
   ╰─────╯          ╰─────╯              ╰─────╯
   
   Avatar subtly rotates to "look" at cursor position
```

---

## Size Specifications

### Desktop (1440px)
```
┌─────────────────────────────────────┐
│                                     │
│         ╭─────────────╮             │
│        ╱               ╲            │
│       │    600 x 600   │           │
│       │      px        │           │
│        ╲               ╱            │
│         ╰─────────────╯             │
│                                     │
└─────────────────────────────────────┘
   Canvas: 600x600px | Orb: ~200px diameter
```

### Mobile (390px)
```
┌─────────────────┐
│                 │
│   ╭─────────╮   │
│  ╱           ╲  │
│ │   400x400  │ │
│  ╲           ╱  │
│   ╰─────────╯   │
│                 │
└─────────────────┘
   Canvas: 400x400px | Orb: ~120px diameter
```

---

## Glass Container Frame

### Hero Section Container
```
╔═══════════════════════════════════════╗
║  Glassmorphism Card                   ║
║  ┌───────────────────────────────┐   ║
║  │                               │   ║
║  │     3D CANVAS RENDERS HERE    │   ║
║  │                               │   ║
║  │  (Transparent background)     │   ║
║  │                               │   ║
║  └───────────────────────────────┘   ║
║                                       ║
║  [DEV NOTE: 3D Implementation]        ║
╚═══════════════════════════════════════╝

Border:  2px solid #4ECFB3 with 30% opacity
Glow:    60px spread with teal color
Padding: 32px (p-8)
Radius:  32px outer, 16px inner
```

### About Section Container
```
╔═══════════════════════════════════════╗
║  Glassmorphism Card                   ║
║  ┌───────────────────────────────┐   ║
║  │                               │   ║
║  │   [Founder Portrait/Avatar]   │   ║
║  │                               │   ║
║  │   (Lavender ambient glow)     │   ║
║  │                               │   ║
║  └───────────────────────────────┘   ║
║                                       ║
║  [DEV NOTE: 3D Avatar Model]          ║
╚═══════════════════════════════════════╝

Border:  2px solid #C9B8F0 with 30% opacity
Glow:    60px spread with lavender color
Padding: 32px (p-8)
Radius:  32px outer, 16px inner
```

---

## Animation Curves

### Breathing Easing (Sine Wave)
```
    ╱╲      ╱╲      ╱╲
   ╱  ╲    ╱  ╲    ╱  ╲
──╯    ╰──╯    ╰──╯    ╰──

Smooth, organic breathing rhythm
Like meditation breathing exercises
```

### Rotation Easing (Linear)
```
───────────────────────────▶
Continuous, never-ending rotation
Subtle and calming
```

### Hover Scale (Ease Out)
```
    ──────●
  ──      ╱
 ╱       ╱
●───────╯

Fast initial response
Gradual deceleration
Feels responsive and polished
```

---

## Color Mood Board

### Hero Orb Palette
```
┌──────────────────────────────────────┐
│  TEAL CORE         BLUE RIM          │
│  ████████          ████████          │
│  #4ECFB3           #72A6F5           │
│  Calm & Trust      Depth & Peace     │
│                                      │
│  LAVENDER AMBIENT                    │
│  ████████                            │
│  #C9B8F0                             │
│  Spirituality & Balance              │
└──────────────────────────────────────┘
```

### Avatar Lavender Theme
```
┌──────────────────────────────────────┐
│  LAVENDER GLOW     TEAL ACCENT       │
│  ████████          ████████          │
│  #C9B8F0           #4ECFB3           │
│  Wisdom & Calm     Energy & Growth   │
│                                      │
│  SOFT WHITE                          │
│  ████████                            │
│  #F0F4FF                             │
│  Purity & Clarity                    │
└──────────────────────────────────────┘
```

---

## Particle Systems (Optional Enhancement)

### Orb Particles
```
       •
         ·    •
    •         ·       •
  ·     ╭─────╮    ·
      ╱   ORB   ╲
•    │           │    ·
      ╲         ╱       •
    ·   ╰─────╯   •
  •         ·
     ·            •
```

20-30 small particles orbiting the main orb
Color: Teal (#4ECFB3) with 40% opacity
Size: 2-4px diameter
Orbit: Slow, circular paths

---

## Scene Composition

### Hero Section Full View
```
┌─────────────────────────────────────────────────┐
│  LEFT SIDE                RIGHT SIDE             │
│  ┌──────────────┐        ┌──────────────┐      │
│  │ MINDFULNESS  │        │   ╭─────╮    │      │
│  │  COACHING    │        │  ╱  ●●●  ╲   │      │
│  │  WELLBEING   │        │ │  GLOW   │  │      │
│  │              │        │  ╲  ✨  ╱   │      │
│  │ [Headline]   │        │   ╰─────╯    │      │
│  │              │        │   3D ORB     │      │
│  │ [Subtext]    │        │   CANVAS     │      │
│  │              │        │              │      │
│  │ [CTA Btns]   │        │ [Dev Note]   │      │
│  │              │        │              │      │
│  │ [Trust Bar]  │        │              │      │
│  └──────────────┘        └──────────────┘      │
│                                                 │
└─────────────────────────────────────────────────┘
      55% width              45% width
```

### About Section Full View
```
┌─────────────────────────────────────────────────┐
│  LEFT SIDE                RIGHT SIDE             │
│  ┌──────────────┐        ┌──────────────┐      │
│  │ MEET YOUR    │        │   ╭─────╮    │      │
│  │ GUIDE        │        │  ╱ ◉   ◉ ╲   │      │
│  │              │        │ │    ⌢    │  │      │
│  │ Coached by   │        │ │  AVATAR │  │      │
│  │ Reenu        │        │  ╲       ╱   │      │
│  │              │        │   ╰─────╯    │      │
│  │ [Bio Card]   │        │   3D MODEL   │      │
│  │              │        │   CANVAS     │      │
│  │ [Credentials]│        │              │      │
│  │              │        │ [Dev Note]   │      │
│  │ [Stats]      │        │              │      │
│  │              │        │ ✨ Lavender  │      │
│  │ [CTA Button] │        │    Glow      │      │
│  └──────────────┘        └──────────────┘      │
│                                                 │
└─────────────────────────────────────────────────┘
      55% width              45% width
```

---

## WebGL Detection & Fallback

### Detection Flow
```
┌──────────────┐
│ Page Loads   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Check WebGL  │◀─── canvas.getContext('webgl')
└──────┬───────┘
       │
       ├──── YES ──▶ Load 3D Canvas
       │
       └──── NO ───▶ Show 2D Fallback
                     (Current implementation)
```

### Visual States
```
WEBGL SUPPORTED:          NO WEBGL:
┌──────────────┐         ┌──────────────┐
│   ╭──────╮   │         │   ╭──────╮   │
│  ╱ 3D ORB ╲  │         │  ╱ 2D CSS ╲  │
│ │  GLOW   │ │         │ │  ANIM   │ │
│  ╲  ✨   ╱  │         │  ╲  ●●   ╱  │
│   ╰──────╯   │         │   ╰──────╯   │
└──────────────┘         └──────────────┘
 Full 3D scene            Fallback 2D
```

---

## Performance Targets

### Frame Rate Display
```
Desktop Target:              Mobile Target:
┌─────────────────┐         ┌─────────────────┐
│ FPS: 60 ███████ │         │ FPS: 30 ████    │
│                 │         │                 │
│ Smooth, fluid   │         │ Acceptable,     │
│ animations      │         │ battery-friendly│
└─────────────────┘         └─────────────────┘
```

### Quality Settings
```
HIGH QUALITY          LOW QUALITY          FALLBACK
(Desktop)             (Mobile)             (No WebGL)

• High-res textures   • Lower-res          • Static image
• Full particles      • Fewer particles    • CSS animation
• Post-processing     • No post-proc       • No 3D
• Shadows enabled     • No shadows         • Basic effect
• 60 FPS              • 30 FPS             • 60 FPS CSS
```

---

## Implementation Checklist

### Hero Orb
- [ ] Install Three.js or Spline
- [ ] Create sphere geometry
- [ ] Apply glass material with glow
- [ ] Implement breathing animation (scale)
- [ ] Add subtle rotation
- [ ] Add mouse parallax effect
- [ ] Implement hover interactions
- [ ] Add particle system (optional)
- [ ] Configure bloom post-processing
- [ ] Test on mobile devices
- [ ] Add WebGL fallback
- [ ] Optimize performance

### Avatar Model
- [ ] Source or create 3D model (GLB format)
- [ ] Import model into scene
- [ ] Apply porcelain material
- [ ] Set up lavender lighting
- [ ] Implement idle animation
- [ ] Add mouse tracking interaction
- [ ] Configure camera framing
- [ ] Optimize model polycount
- [ ] Test on mobile devices
- [ ] Add loading state
- [ ] Implement fallback image
- [ ] Performance optimization

---

## Final Visual Goal

### Hero Section (Completed)
```
┌───────────────────────────────────────────────────────┐
│                    STRESS FREE ALL                    │
│                   Navigation Bar                      │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│   "Experience the Joy of Living"                     │
│                                                       │
│   [Headline] [Subtext]          ╭─────────────╮     │
│                                 ╱    3D ORB     ╲    │
│   [Book a Call] [Watch Story]  │  ✨ GLOWING ✨ │    │
│                                 ╲   BREATHING   ╱    │
│   [Trust Bar: 500+ Lives]       ╰─────────────╯     │
│                                  Interactive 3D      │
└───────────────────────────────────────────────────────┘
```

### About Section (Completed)
```
┌───────────────────────────────────────────────────────┐
│                                                       │
│   "Meet Your Guide"                                  │
│   Coached by Reenu                                   │
│                                                       │
│   [Bio Text]                   ╭─────────────╮     │
│   [Credentials Pills]          │  3D AVATAR  │     │
│   [12+ Years | 500+ Clients]   │   REENU     │     │
│   [Learn More Button]          │ ✨ Lavender │     │
│                                 ╰─────────────╯     │
│                                  Gentle Glow        │
└───────────────────────────────────────────────────────┘
```

---

**Remember**: The 3D elements should enhance the brand story of mindfulness, calm, and sophistication. Every animation should feel intentional, smooth, and peaceful—never janky or overwhelming.

**Guiding Principle**: *"Make it feel like a breath of fresh air."*

---

**Last Updated**: March 28, 2026  
**Document**: Visual Reference for 3D Elements  
**Status**: Ready for Implementation 🎨
