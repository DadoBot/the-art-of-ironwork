---
name: Forged Heritage
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#161717'
  on-primary: '#ffffff'
  primary-container: '#2b2b2b'
  on-primary-container: '#939292'
  inverse-primary: '#c8c6c5'
  secondary: '#8c4f10'
  on-secondary: '#ffffff'
  secondary-container: '#fdad67'
  on-secondary-container: '#763f00'
  tertiary: '#2e0c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f1a00'
  on-tertiary-container: '#d47b52'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77b'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#76320f'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  title-lg:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies the soul of artisanal metalwork—striking a balance between the raw strength of the forge and the meticulous refinement of high-end wrought iron artistry. It targets discerning collectors and architects who value heritage, durability, and the human touch.

The visual style is **Tactile & Refined**, drawing inspiration from traditional atelier aesthetics. It avoids the coldness of modern minimalism in favor of a "Handcrafted Luxury" feel. Key characteristics include:
- **Materiality:** UI elements should feel like physical objects (parchment, iron, bronze).
- **Precision:** While the materials are rustic, the execution is disciplined, using clean lines and generous white space to signal premium quality.
- **Crafted Details:** Subtle use of hairline strokes and etched textures to mimic the engraver’s mark.

## Colors
The palette is rooted in the earth and the anvil:
- **Base Surface:** Warm Parchment (#FDFBF7) serves as the primary canvas, providing a softer, more historical feel than stark white.
- **Primary Ink:** Matte Anthracite (#2B2B2B) is used for all primary text and structural boundaries, providing the "weight" of wrought iron.
- **Accent Bronze:** Antique Bronze (#B87333) is reserved for interactive states, highlighting key craftsmanship details and brand accents.
- **Secondary Earth:** Walnut Wood (#A0522D) is used sparingly for semantic secondary information or background depth in decorative elements.

## Typography
The typography strategy pairings classic editorial elegance with industrial clarity:
- **Headlines:** Use *Libre Caslon Text*. Its high contrast and traditional serifs evoke the feeling of old-world catalogs and engraved metal plates.
- **Body & Functional UI:** Use *Work Sans*. Its clean, grounded geometry ensures legibility against textured backgrounds and provides a contemporary professional counterpoint to the serif headlines.
- **Micro-copy:** Small labels and headers should often use uppercase *Work Sans* with increased letter spacing to mimic serial numbers stamped into metal.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, "book-like" feel.
- **Structure:** Use a 12-column grid with wide gutters (24px) to allow the parchment background to breathe.
- **Margins:** Desktop margins are generous (64px) to frame content like a piece of art. On mobile, this tightens to 16px to maximize the display of intricate metalwork photos.
- **Rhythm:** Vertical rhythm is strictly based on 8px increments. Large sections should be separated by clear, thin Anthracite horizontal rules (0.5pt - 1pt) rather than heavy color blocks.

## Elevation & Depth
Depth is created through **Tonal Layering and Material Texture** rather than standard drop shadows.
- **Surface Depth:** Use subtle grain textures on the #FDFBF7 background. 
- **Shadows:** When necessary, use "Soot Shadows"—very low-opacity (#2B2B2B at 10-15%), highly diffused blurs that feel like ambient light in a workshop.
- **Etched Lines:** Use inset shadows or 1px darker borders (#DED9D0) on input fields to make them appear stamped or carved into the parchment surface.
- **Interactions:** Hover states should feel "magnetic," using a slight shift in the Bronze accent or a subtle darken of the Anthracite surface.

## Shapes
Shapes are **Soft (0.25rem)**, reflecting the "hand-filed" edge of a finished iron piece. 
- Avoid perfect circles or razor-sharp corners. 
- Use the 4px (Soft) radius for primary buttons and cards to suggest a handcrafted object that has been smoothed by a master’s touch.
- Rule lines and borders should use a slightly irregular, "inked" appearance where possible to reinforce the traditional aesthetic.

## Components
- **Buttons:** Primary buttons are Solid Anthracite (#2B2B2B) with White or Bronze text. Secondary buttons are "Ghost" style with a 1px Bronze border and uppercase spaced labels.
- **Cards:** Use very subtle 1px borders in a darker parchment shade (#E8E4DB) instead of shadows. Card headers should use the Walnut Wood color for a touch of warmth.
- **Inputs:** Fields should be styled with a "Paper" background, slightly darker than the page background, with a bottom-only border to mimic traditional ledger lines.
- **Chips/Badges:** Use the Bronze accent for "Available" or "Hand-forged" status indicators. These should be rectangular with the Soft (1) corner radius.
- **Dividers:** Use a decorative "Forced Break"—a 1px line that tapers off at the ends or features a small geometric diamond (rhombus) in the center, reminiscent of iron scrollwork.
- **Icons:** Use thin-stroke, monolinear icons in Anthracite. The icons should have slightly rounded terminals to match the shape language.