# BitStat Frontend Guardrails

## Visual Fidelity
- Match spacing, typography, and colors to the reference.
- Avoid new layout ideas; replicate the design exactly.
- Use `desktop3x.png` for final alignment checks.

## Assets
- Use placeholder art only where the reference is ambiguous.
- Hero video must autoplay, loop, and be muted.

## CSS Discipline
- Keep styles modular per section/component.
- Use CSS variables for palette + spacing for easy tuning.
- Avoid inline styles except for one‑off tweaks.

## Performance
- Use optimized video settings (muted, loop, playsInline).
- Avoid heavy JS; keep the page mostly static.

## Content
- Do not invent new layout structure.
- Replace placeholder copy with exact text once provided.

