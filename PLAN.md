# BitStat Frontend Plan (Next.js + TS)

## Goal
Recreate the provided desktop design **pixel‑faithful** for the BitStat web3 game analytics SaaS landing page, including the purple hero video section.

## Scope
- Desktop‑first exact clone of `examples/Desktop.png` (and `examples/desktop3x.png` for higher fidelity).
- Placeholder art for cards/logos/images where needed.
- Autoplay, loop, muted hero video using `public/assets/hero.mp4`.
- Modular component structure for easy updates.

## Approach (Modular)
1. **Project Setup**
   - Initialize Next.js (App Router) + TypeScript.
   - Global styles: reset + CSS variables for colors, spacing, typography.

2. **Design Tokens**
   - Define CSS variables for:
     - Neutrals, accent purples, gradients.
     - Spacing scale (4/8/12/16/24/32/48/64).
     - Type scale (hero, h2, body, caption).

3. **Layout Skeleton**
   - Page wrapper (centered container, max‑width).
   - Sections stack matching the screenshot structure.
   - Grid system for 2‑column and card rows.

4. **Component Breakdown**
   - `Hero` (headline, CTA, video block).
   - `LogoStrip`.
   - `FeatureGrid` (cards + overlays).
   - `StatsSection`.
   - `ReasonsSection`.
   - `PricingSection`.
   - `Footer`.

5. **Visual Fidelity Pass**
   - Match spacing, font sizes, shadows, gradients, borders.
   - Calibrate to screenshot using `desktop3x.png`.
   - Iterate until pixel‑close.

6. **Content**
   - Use exact text from the screenshot (if provided).
   - If text is unreadable, use placeholder copy with a follow‑up pass to replace.

## Assets
- `examples/Desktop.png`
- `examples/desktop3x.png`
- `public/assets/hero.mp4` (hero video)

## Deliverables
- Next.js app with modular components.
- Accurate page layout with matching visuals.
- `TASKLIST.md` and `GUARDRAILS.md` for maintenance.
