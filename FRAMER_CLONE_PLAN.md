# Framer Website Clone - Implementation Plan

## Overview
Clone the "Limitless" Framer template (https://splendid-performance-131999.framer.app/) using the existing Next.js + Tailwind CSS codebase.

## Tech Stack
- Next.js 16.1.6 with App Router
- React 19.2.3
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

## Color Palette
```
Background: #07070b
Primary Purple: #7C5CFF
Gradient: #7C5CFF → #8B6BFF → #BFA8FF
Border: rgba(255, 255, 255, 0.10)
Text Muted: rgba(255, 255, 255, 0.65)
```

---

## Section-by-Section Implementation

### 1. Navigation Bar
**Location:** `components/landing/Navigation.tsx` (NEW)

**Elements:**
- Logo "Limitless" with purple dot indicator
- Nav links: About, Blog, Features, Pricing, Coming Soon, Legal, 404
- CTA buttons: "Tutorials" (secondary), "Book a call" (primary)

**Styling:**
- Fixed/sticky positioning
- Backdrop blur
- Minimal border bottom

---

### 2. Hero Section
**Location:** `components/landing/Hero.tsx` (UPDATE)

**Current Status:** Partially implemented with BitStat branding

**Required Updates:**
- Change headline to "The truly Limitless design subscription."
- Subtitle: "Say goodbye to expensive freelancers, and hello to limitless, lightning fast design."
- Update CTA buttons: "Book a call" (primary), "See plans" (ghost)
- Update urgency banner: "Hurry, only 3 spots left."
- Add social proof logos row: "Our designs are featured on:" with 18 logo placeholders

**Key Elements:**
- Purple radial gradient background effects
- Video/image showcase with "Limitless" badge
- Partner logo marquee

---

### 3. Testimonial Section
**Location:** `components/landing/TestimonialSection.tsx` (NEW)

**Content:**
- Quote from "Tony Saoprano, CEO of Tryal"
- 5-star rating visual
- Headshot image
- Testimonial text about Hamza/Limitless

**Layout:**
- Split layout: image left, text right
- Decorative elements: 5 purple circles on left

---

### 4. Process Section (Your Designs, Effortlessly)
**Location:** `components/landing/DesignEffortless.tsx` (UPDATE)

**Current Status:** Has basic structure, needs updates

**Required Updates:**
- Section label: "Process"
- Headline: "Your designs, effortlessly."
- 3 Steps:
  1. Subscribe - "Subscribe to a plan & request as many designs as you'd like."
  2. Receive - "Receive your design as fast as two business days on average."
  3. Revise - "We'll revise the designs until you're 100% satisfied."
- Each step needs an icon/illustration

**Layout:**
- Horizontal 3-column layout
- CTA: "Book a 15-min call"

---

### 5. Marquee Sections (Multiple)
**Location:** `components/landing/MarqueeSection.tsx` (NEW)

**Content:** 3 marquee strips with scrolling text:
- "Our designs are featured on:" - 18 logos
- "Designs trusted by companies like:" - 18 logos
- Company names repeated

**Implementation:**
- CSS animation for infinite scroll
- Duplicate content for seamless loop

---

### 6. Benefits Section (Fast, Quality & Limitless)
**Location:** `components/landing/QualitySection.tsx` (UPDATE)

**Current Status:** Needs restructure

**Required Updates:**
- Section label: "Benefits"
- Headline: "Fast, quality & limitless."
- Subhead: "Limitless replaces unreliable freelancers and expensive agencies for one flat monthly fee..."
- Layout: Split - testimonial left, benefits list right

**Benefits List:**
1. Submit Unlimited Requests - "Submit as many design requests as you like and we'll get to work on them, one by one."
2. Manage with Trello - "Manage your design board using Trello. View active, queued and completed tasks with ease."
3. Pause Anytime - "No more requests for the now? Just hit pause and resume your subscription at a future date."

**Testimonial:**
- Jenny London, Founder of Kinect
- 5-star rating
- Quote about the service

---

### 7. Features Section (Reasons You Will Love Us)
**Location:** `components/landing/ReasonsSection.tsx` (UPDATE)

**Current Status:** Needs restructure

**Required Updates:**
- Section label: "Features"
- Headline: "Reasons you will love us."
- Subhead: "Once you try Limitless, you'll never go anywhere else for design. Seriously."
- 6 feature cards in 2x3 grid:

**Features:**
1. Design Board - "Request as many designs as you like on your own design board."
2. Lightning Fast Delivery - "Receive your designs one at a time in just a few days."
3. Fixed Monthly Rate - "No surprises. Pay the same fixed price every month."
4. Award-Winning Designs - "Leave your customers in awe with award-winning designs."
5. Unlimited Revisions - "Revise your designs until you're 100% satisfied. No limits."
6. Unique & All Yours - "All your designs are crafted especially for you."

**Layout:**
- Each card: icon on top, title, description
- CTA: "Book a 15-min call"

---

### 8. All Your Design Needs (Services Grid)
**Location:** `components/landing/NeedsSection.tsx` (UPDATE)

**Current Status:** Needs complete rewrite

**Required Updates:**
- Section label: "Solution"
- Headline: "All your design needs."
- Subhead: "Running a successful business means more than just a website..."
- 4x4 grid of service categories with icons:

**Services (16 total):**
- Logos (4x)
- Landing Pages (4x)
- Websites (4x)
- Digital Products (4x)
- Pitch Decks
- Mobile Apps
- Email Design
- Product Design
- Social Media

---

### 9. Pricing Section
**Location:** `components/landing/PricingSection.tsx` (UPDATE)

**Current Status:** Partially implemented

**Required Updates:**
- Section label: "Pricing"
- Headline: "Pricing that's so simple."
- Subhead: "We like to keep things simple with one, limitless plan."

**Pricing Card:**
- Urgency badge: "3 spots left"
- Price: "$2,989/month"
- Note: "One request at a time. Pause or cancel anytime."
- CTAs: "Subscribe" (primary), "Book a call" (secondary)
- Add-on: "Framer Development + $500"

**Features List (with checkmark icons):**
- Unlimited design requests
- One request at a time
- Average 48 hours delivery
- Unlimited revisions
- Unlimited brands
- Invite unlimited users
- Pause or cancel anytime
- (and more)

**Social Proof:** "Designs trusted by companies like:" + logos

---

### 10. Tutorials Section
**Location:** `components/landing/TutorialsSection.tsx` (NEW)

**Content:**
- Headline: "Limitless Tutorials"
- Description: "Limitless comes with a complimentary 8-part video tutorial series to help you get set up and customise your template."
- CTAs: "Buy template" (primary), "See tutorials" (ghost)

---

### 11. FAQ Accordion Footer
**Location:** `components/landing/FaqSection.tsx` (UPDATE)

**Current Status:** Needs implementation

**Required Updates:**
- Section acts as footer with accordion FAQs
- Questions:
  1. "Why wouldn't I just hire a full-time designer?"
  2. "Is there a limit to how many requests I can have?"
  3. "How fast will I receive my designs?"
  4. "Who are the designers?"
  5. "What if I don't like the design?"
  6. "Are there any refunds if I don't like the service?"

**Implementation:**
- Use Radix UI Accordion or custom implementation

---

### 12. Final CTA Section
**Location:** `components/landing/FinalCta.tsx` (UPDATE)

**Required Updates:**
- Urgency badge: "Hurry, only 3 spots left."
- Headline: "Are you ready?"
- Subhead: "This could be the start of something big."
- CTAs: "Book a call" (primary), "See plans" (ghost)

---

### 13. Footer
**Location:** `components/landing/FooterSection.tsx` (UPDATE)

**Required Updates:**
- Navigation links: About, Blog, Features, Pricing, Legal
- Credit: "Created by Hamza Ehsan"
- Social link: Twitter/X profile

---

## Additional Components Needed

### Icons/Graphics
- **Checkmark icon** for feature lists
- **Star rating** component for testimonials
- **Logo placeholders** for social proof sections
- **Service icons** for the needs section

### Utilities
- **Marquee animation** utility
- **Accordion component** (from shadcn)
- **Gradient backgrounds** utility

---

## Assets Required

### Images
- Hero image/video placeholder
- Testimonial avatars (Tony Saoprano, Jenny London)
- 18+ partner logos for social proof
- 16 service category icons
- Feature icons (6)

### Framer Site Reference Images
The site uses:
- Purple gradient background effects
- Rounded cards with subtle borders
- Blur/backdrop effects
- Consistent spacing and typography

---

## Implementation Order

### Phase 1: Foundation (High Priority)
1. Update global styles if needed (already has good foundation)
2. Create Navigation component
3. Update Hero section to match Framer design
4. Create Marquee component for social proof

### Phase 2: Core Sections (High Priority)
5. Update Process section (DesignEffortless)
6. Update Benefits section (QualitySection)
7. Update Features section (ReasonsSection)
8. Create Testimonial section

### Phase 3: Services & Pricing (Medium Priority)
9. Update Services grid (NeedsSection)
10. Update Pricing section
11. Create Tutorials section

### Phase 4: Final Elements (Medium Priority)
12. Update FAQ section
13. Update Final CTA
14. Update Footer

### Phase 5: Polish (Low Priority)
15. Add hover animations
16. Add scroll animations
17. Responsive testing
18. Performance optimization

---

## Design System Updates

### CSS Classes (Already in globals.css)
```css
.container-tight  /* max-w-[1100px] container */
.section          /* py-20 spacing */
.card             /* rounded-2xl border border-white/10 bg-white/5 backdrop-blur */
.btn-primary      /* purple gradient button */
.btn-outline      /* outlined button */
.btn-ghost        /* ghost button */
.eyebrow          /* uppercase tracking label */
.text-gradient    /* purple gradient text */
```

### New Classes Needed
```css
.marquee           /* infinite scroll animation */
.marquee-content   /* inner content wrapper */
.star-rating       /* 5-star visual */
.logo-grid         /* logo marquee grid */
```

---

## Checklist

- [ ] Update Hero section
- [ ] Create Navigation component
- [ ] Create Marquee component
- [ ] Update DesignEffortless (Process)
- [ ] Update QualitySection (Benefits)
- [ ] Create TestimonialSection
- [ ] Update ReasonsSection (Features)
- [ ] Update NeedsSection (Services)
- [ ] Update PricingSection
- [ ] Create TutorialsSection
- [ ] Update FaqSection (FAQ Footer)
- [ ] Update FinalCta
- [ ] Update FooterSection
- [ ] Add all placeholder images/logos
- [ ] Test responsiveness
- [ ] Add animations
- [ ] Final polish

---

## Notes

1. The existing codebase already has a solid foundation with the right color scheme and styling utilities
2. Most component files already exist - they need content updates to match the Framer design
3. Focus on pixel-perfect replication of the layout and spacing
4. Use placeholder images initially, replace with actual assets when available
5. Maintain the existing TypeScript patterns and component structure
