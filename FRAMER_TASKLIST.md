# Framer Clone - Task List

## Phase 1: Foundation
- [ ] Create Navigation component (`components/landing/Navigation.tsx`)
  - Logo with purple dot
  - Nav links: About, Blog, Features, Pricing, Coming Soon, Legal, 404
  - CTAs: Tutorials, Book a call
- [ ] Update Hero section (`components/landing/Hero.tsx`)
  - Update headline and copy
  - Add urgency banner "3 spots left"
  - Add social proof logos row "Our designs are featured on:"
  - Update CTAs to "Book a call" and "See plans"
- [ ] Create Marquee component (`components/landing/MarqueeSection.tsx`)
  - CSS infinite scroll animation
  - Support for logo/content rows

## Phase 2: Core Sections
- [ ] Update DesignEffortless (`components/landing/DesignEffortless.tsx`)
  - Change to "Process" section
  - 3 steps: Subscribe, Receive, Revise
  - Add icons for each step
- [ ] Create TestimonialSection (`components/landing/TestimonialSection.tsx`)
  - Tony Saoprano quote
  - 5-star rating
  - Headshot image
  - Decorative circles
- [ ] Update QualitySection (`components/landing/QualitySection.tsx`)
  - Change to "Benefits" section
  - Split layout with testimonial
  - 3 benefits: Submit Unlimited Requests, Manage with Trello, Pause Anytime
  - Jenny London testimonial
- [ ] Update ReasonsSection (`components/landing/ReasonsSection.tsx`)
  - Change to "Features" section
  - 6 feature cards in 2x3 grid
  - Icons for each feature

## Phase 3: Services & Pricing
- [ ] Update NeedsSection (`components/landing/NeedsSection.tsx`)
  - Change to "All your design needs"
  - 4x4 grid of service categories
  - 16 service cards with icons
- [ ] Update PricingSection (`components/landing/PricingSection.tsx`)
  - Update headline and copy
  - $2,989/month pricing
  - Add "3 spots left" badge
  - Framer Development add-on
  - Features list with checkmarks
  - Social proof logos

## Phase 4: Final Elements
- [ ] Create TutorialsSection (`components/landing/TutorialsSection.tsx`)
  - "Limitless Tutorials" headline
  - Description about 8-part video series
  - Buy template and See tutorials CTAs
- [ ] Update FaqSection (`components/landing/FaqSection.tsx`)
  - Accordion with 6 FAQ items
  - Footer-style layout
- [ ] Update FinalCta (`components/landing/FinalCta.tsx`)
  - "Are you ready?" headline
  - 3 spots left badge
  - Book a call and See plans CTAs
- [ ] Update FooterSection (`components/landing/FooterSection.tsx`)
  - Nav links
  - "Created by" credit
  - Social links

## Phase 5: Assets & Polish
- [ ] Create placeholder images/logos
  - Partner logos (18+)
  - Testimonial avatars
  - Service icons (16)
  - Feature icons (6)
- [ ] Add CSS animations
  - Marquee scroll animation
  - Hover effects
  - Scroll reveal animations
- [ ] Responsive testing
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (> 1024px)
- [ ] Performance optimization
  - Image optimization
  - Code splitting
  - Lazy loading

## Component Status

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| Navigation | Navigation.tsx | ❌ Not started | New component |
| Hero | Hero.tsx | ⚠️ Partial | Has structure, needs content update |
| Testimonial | TestimonialSection.tsx | ❌ Not started | New component |
| Marquee | MarqueeSection.tsx | ❌ Not started | New component |
| DesignEffortless | DesignEffortless.tsx | ⚠️ Partial | Has structure, needs update |
| QualitySection | QualitySection.tsx | ⚠️ Partial | Has structure, needs update |
| ReasonsSection | ReasonsSection.tsx | ⚠️ Partial | Has structure, needs update |
| NeedsSection | NeedsSection.tsx | ⚠️ Partial | Has structure, needs update |
| PricingSection | PricingSection.tsx | ⚠️ Partial | Has structure, needs update |
| TutorialsSection | TutorialsSection.tsx | ❌ Not started | New component |
| FaqSection | FaqSection.tsx | ⚠️ Partial | Needs implementation |
| FinalCta | FinalCta.tsx | ⚠️ Partial | Needs update |
| FooterSection | FooterSection.tsx | ⚠️ Partial | Needs update |

## Quick Reference - Framer Design Specs

**Colors:**
- Background: #07070b
- Primary: #7C5CFF
- Gradient: #7C5CFF → #8B6BFF → #BFA8FF
- Border: rgba(255, 255, 255, 0.10)

**Typography:**
- Headlines: font-display, semibold
- Eyebrows: uppercase, tracking-[0.35em]
- Body: text-white/65 for muted

**Spacing:**
- Section padding: py-20
- Container: max-w-[1100px]
- Card gaps: gap-4 to gap-6

**Border Radius:**
- Cards: rounded-2xl
- Buttons: rounded-full
- Video/image: rounded-[22px] to rounded-[28px]
