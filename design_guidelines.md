# Design Guidelines: Kunal Malviya's 3D Software Engineer Portfolio

## Design Approach

**Selected Approach:** Custom 3D Interactive Experience  
**Justification:** This portfolio demands a cutting-edge, immersive design that showcases technical prowess through visual innovation. The 3D elements, dark futuristic aesthetic, and interactive animations position Kunal as a forward-thinking developer.

**Key Design Principles:**
- Futuristic minimalism with depth and dimension
- Performance-optimized 3D effects that enhance, not distract
- Glassmorphism with strategic transparency for modern appeal
- Smooth, purposeful animations that guide user attention

## Color System

**Primary Palette (Quadratic Scheme):**
- Electric Blue: `#00BFFF` - Primary accents, CTAs, interactive elements
- Violet: `#7B68EE` - Secondary highlights, gradients, skill badges
- Neon Purple: `#8A2BE2` - Tertiary accents, hover states, glows
- Jet Black: `#0A0A0A` - Primary background, card bases

**Supporting Colors:**
- Dark Gray: `#1a1a1a` - Secondary backgrounds
- Translucent White: `rgba(255,255,255,0.1)` - Glass effects
- Glow Effects: Gradient combinations of primary palette with blur

**Gradient Applications:**
- Hero text: Electric blue → Neon purple
- Buttons: Violet → Electric blue (diagonal 45deg)
- Cards: Subtle dark gray → jet black with colored borders
- Background particles: All three colors with varying opacity

## Typography

**Font Stack:**
- **Primary (Headings):** 'Orbitron' or 'Rajdhani' (futuristic, tech-forward)
- **Secondary (Body):** 'Inter' or 'Poppins' (clean, readable)
- **Accent (Code/Tech):** 'Fira Code' or 'JetBrains Mono'

**Hierarchy:**
- Hero Name: 4xl-6xl, bold, gradient fill, 3D text shadow
- Section Headers: 3xl-4xl, semibold, colored underline/glow
- Project Titles: xl-2xl, medium
- Body Text: base-lg, regular, rgba(255,255,255,0.8)
- Labels: sm-base, medium, uppercase tracking

## Layout System

**Spacing Units:** Tailwind spacing: 4, 8, 12, 16, 24, 32 for consistent rhythm

**Container Strategy:**
- Max-width: 1280px for content
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card spacing: gap-8 (desktop), gap-6 (mobile)

**Grid Systems:**
- Skills: 4-column grid (lg), 3-col (md), 2-col (sm)
- Projects: 3-column cards, stagger on scroll reveal
- Experience: Single column vertical timeline with alternating sides

## Component Library

### Navigation
- Fixed glassmorphic header with backdrop blur
- 3D rotating developer logo (left)
- Menu links with glow-on-hover (center/right)
- Dark/light mode toggle (top-right, default dark)
- Mobile: Animated hamburger menu with slide-in drawer

### Hero Section
**Layout:** Full viewport height (min-h-screen), centered content
- Animated greeting: "Hi, I'm Kunal Malviya 👋"
- 3D floating name with subtle rotation/scale on mouse movement
- Typing animation cycling through roles: "Software Engineer | MERN Developer | Java Specialist"
- CTA buttons in horizontal row with glassmorphic background, gradient borders
- Particle background using Three.js with floating geometric shapes

### About Section
- Glassmorphic card with frosted background blur
- Profile photo with 3D tilt effect on hover
- Summary text in two-column layout (desktop)
- Subtle gradient border animation

### Skills Section
- Icon grid with hover scale + glow effect
- Each skill: icon, name label, circular progress indicator
- Tech stack: MERN, Java, Spring Boot, MySQL, MongoDB, AWS, Git, Docker, Swagger, DSA
- Stagger animation on scroll-in

### Projects Section
**3D Animated Cards:**
- Perspective card rotation on hover
- Project thumbnail/gradient background
- Title, tech stack badges, description
- GitHub link with icon glow
- Projects: Employee Complaint Portal, OnlineRoomWala, Smart Inventory Management
- Grid layout with depth shadow effects

### Experience Timeline
- Vertical timeline with animated line progress
- IT Intern – Indore Municipal Corporation (Jul 2024 – Sep 2024)
- Cards alternate left/right with connecting dots
- Scroll-triggered reveal animations

### Education Section
- Animated cards with gradient borders
- Integrated MCA – IIPS DAVV Indore (2021–Present)
- School education with icons
- Hover lift effect

### Contact Section
**Layout:** Two-column (desktop) - form left, info right
- Glassmorphic contact form with floating labels
- Input fields with glow-on-focus
- Animated submit button
- Contact info cards: Email (malviyakunal90@gmail.com), Location (Indore, MP)
- Social icons with pulse animation

### Footer
- Glassmorphic footer with backdrop blur
- Social links: GitHub, LinkedIn, Portfolio (icon buttons with glow)
- Copyright with auto-updating year
- Animated gradient divider line

## Interactive Elements

**3D Effects:**
- Hero name: Float/rotate on mouse parallax
- Profile image: Tilt with depth shadow
- Project cards: Perspective rotation hover
- Developer logo: Continuous smooth rotation
- Skill icons: Pop-out on hover with shadow

**Cursor Effects:**
- Custom cursor with gradient glow trail
- Enlarge on interactive elements
- Color shift based on hover target

**Scroll Animations:**
- Smooth scroll behavior throughout
- Fade-up + slide for section reveals
- Stagger delays for card grids
- Parallax for background elements
- Progress indicator for page position

**Page Transitions:**
- Framer Motion or GSAP for route changes
- Fade + scale for modal/overlay appearances
- Smooth height transitions for accordions

## Glassmorphism Implementation

**Standard Glass Card:**
- Background: `rgba(255, 255, 255, 0.05)` to `0.1`
- Backdrop blur: 10-20px
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Shadow: Colored glow matching section theme

**Variations:**
- Intense glass (header): Higher opacity, stronger blur
- Subtle glass (backgrounds): Lower opacity, minimal blur
- Colored glass: Tinted with primary palette colors

## Responsive Breakpoints

- **Mobile:** < 640px - Single column, stacked navigation, reduced animations
- **Tablet:** 640-1024px - Two columns where appropriate, simplified 3D effects
- **Desktop:** > 1024px - Full multi-column grids, complete animation suite

## Performance Considerations

- Lazy load 3D effects below fold
- Reduce particle count on mobile
- Use CSS transforms for animations (GPU acceleration)
- Implement intersection observer for scroll animations
- Optimize Three.js scene complexity for Replit deployment

## Images

**Profile Photo:** Professional headshot with transparent or gradient background for Hero/About sections - apply 3D tilt hover effect

**Project Thumbnails:** Screenshot or mockup images for each project card - use gradient overlay for text contrast

**Background Elements:** Geometric shapes, particles, and abstract patterns generated via Three.js - no static background images needed

This portfolio prioritizes immersive 3D interactions while maintaining performance and usability. Every animation serves a purpose - either guiding attention, providing feedback, or showcasing technical capability.