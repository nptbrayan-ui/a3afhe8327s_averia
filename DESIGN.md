# Design

## Theme

Light theme only. Warm off-white background with beige surface tones.

## Color

### Palette

| Role | Hex | Usage |
|---|---|---|
| Background | #FAF8F4 | Page background, hero |
| Surface | #E8DCCB | Cards, sections, elevated areas |
| Ink | #111111 | Headings, body text, icons |
| Accent | #7C3AED | CTAs, links, highlights, interactive elements |

### Guidelines

- Use OKLCH conversions of the above hex values in implementation.
- Accent appears on interactive elements only. Do not use accent for decorative backgrounds.
- Surface can be lightened or darkened by ~5% for hierarchy within same family.
- All text on Background must meet WCAG AA (4.5:1) against Ink.

## Typography

### Font Stack

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Satoshi | 500 (Medium), 700 (Bold) |
| Body | Satoshi | 400 (Regular), 500 (Medium) |
| Mono (optional) | Geist Mono or JetBrains Mono | 400 |

### Scale

- Display (h1): clamp(2.5rem, 5vw, 4rem)
- Heading (h2): clamp(1.75rem, 3vw, 2.5rem)
- Subheading (h3): clamp(1.25rem, 2vw, 1.75rem)
- Body: 1rem / 1.125rem
- Small / caption: 0.875rem

### Guidelines

- Heading letter-spacing: -0.03em for display, -0.02em for h2
- Body max-width: 65ch
- text-wrap: balance on h1–h3
- text-wrap: pretty on body prose

## Motion

### Intensity

Minimal. Respects `prefers-reduced-motion`.

### Defaults

- Duration: 200–400ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (exponential out)
- Fade-in + translateY(12px) on scroll reveal
- No bounce, no elastic, no infinite loops
- No parallax

## Components

### Buttons

- Rounded: border-radius 12px
- Filled variant: Accent background, Ink text
- Ghost variant: transparent, Accent text, Accent border on hover
- Padding: 12px 24px
- Font: Satoshi Medium, 0.95rem

### Cards

- Background: Surface
- Border-radius: 16px
- Padding: 24px
- Subtle shadow: tinted to background hue
- No nested cards

### Navigation

- Sticky top bar, max 72px height
- Ink text on transparent/Background background
- Single row at desktop, hamburger below lg

### Form Inputs

- Border-radius: 12px
- Label above input
- Background: White, border: Surface
- Focus ring: Accent at 2px

### Team Profile Cards

- Photo at top (circular or rounded), name, role, short bio below
- Easy-to-edit structure (plain data, no complex nesting)

## Layout

### Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Page

- max-width: 1200px centered, with full-bleed sections where appropriate
- Section padding: py-20 to py-32
- Mobile collapses to single column

### Grid

- CSS Grid for feature cards (3-col desktop, 2-col tablet, 1-col mobile)
- Flexbox for single-row layouts (nav, footer links)

## Content Sections

1. **Hero** — Product image + headline + subtext + 2 CTAs
2. **Features** — 3×2 card grid
3. **About** — Project story, text-led
4. **Team** — 4 profile cards in a row
5. **Gallery** — Image grid for product photos
6. **Support** — Donation section with progress bar
7. **Contact** — Form + email + social links
8. **Footer** — Logo + nav + copyright
