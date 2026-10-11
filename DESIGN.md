---
name: StruoLab
description: Cobalt regions, lime for action, extreme grotesque scale; the page proves change by showing it.
colors:
  cobalt: "#1e3bff"
  cobalt-deep: "#1229c4"
  lime: "#d7ff3a"
  ink: "#0b0b0f"
  white: "#ffffff"
  mist: "#eef0ff"
  line: "#d9dbe4"
  ink-soft: "#4a4d57"
  on-cobalt-soft: "#d6dbff"
  on-ink-soft: "#b9bcc8"
  bad: "#a3261a"
  bad-bg: "#ffe3df"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 8.6vw, 8.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  numeral:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(6rem, 13vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  pill: "999px"
  lg: "28px"
  md: "18px"
  sm: "14px"
  xs: "12px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(80px, 11vw, 144px)"
  wrap: "1240px"
  grid-gap: "16px"
  cluster: "12px"
components:
  button-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-lime-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-ink-hover:
    backgroundColor: "{colors.cobalt}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cobalt}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "46px"
  chip-selected:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
  segmented-active:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "40px"
  block-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "clamp(24px, 3vw, 36px)"
  block-mist:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(24px, 3vw, 36px)"
  block-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "clamp(24px, 3vw, 36px)"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 16px"
  status-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "5px 9px 4px"
  nav:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    height: "72px"
---

# Design System: StruoLab

## Overview

**Creative North Star: "Antes / después"**

StruoLab's world is a before-and-after. Cobalt takes whole regions of the page, not accents; white and ink carry reading; acid lime appears only where the visitor acts. The type is one grotesque pushed to extremes: display lines near 8rem sit against 18px body copy, so hierarchy comes from scale and weight rather than from ornament. The page proves change by staging it, and the visual system is built to make that contrast loud.

Density is generous and blocky. Sections alternate full-bleed bands (cobalt, white, ink) and content sits in rounded blocks of deliberately unequal size on a 12-column grid. Surfaces are flat colour fields; depth is barely used and only to lift what floats (the scrolled nav, the contact form). Motion is short and purposeful: a line strikes through a word, a panel wipes from chaos to order, step numerals rise into view.

The world rejects the calm SaaS template: no icon tiles, no colour gradients, no glow.

**Key Characteristics:**
- Cobalt as territory: full-bleed bands and whole blocks, never a thin accent.
- Lime reserved for action and the moment of change.
- One grotesque family at extreme scale contrast; mono only for data.
- Pills for every control; large radii for every container.
- Blocks of unequal size; flat colour fields instead of shadows.

## Colors

A saturated two-colour signal (cobalt and lime) over a strict white-and-ink reading base, with a pale cobalt tint for quiet containers.

### Primary
- **Electric Cobalt** (cobalt): owns the hero, process, and contact bands, the nav, the lead and closing service blocks, selected chips, KPI figures, chart bars, and the "us" column of the comparison. `theme-color` matches it.
- **Deep Cobalt** (cobalt-deep): darker partner defined for pressed or shaded cobalt; currently a reserve token.

### Secondary
- **Acid Lime** (lime): primary action pills, the active segment of a toggle, the struck "change" word in the hero, focus outlines on cobalt and ink, text selection, the skip link, and the last block of the logo.

### Neutral
- **Ink** (ink): body text on white, ink bands (team, footer), ink blocks, secondary pills, the status tag, and 2px outline borders.
- **Paper White** (white): reading surface, text on cobalt and ink, cards inside panels, the contact form.
- **Cobalt Mist** (mist): quiet containers (secondary service block, promises card, a team card, the "after" layer), chip hover, scrollbar track.
- **Hairline** (line): table rules in the comparison and resting input borders.
- **Ink Soft** (ink-soft): secondary text on white and mist.
- **Cobalt Soft** (on-cobalt-soft): secondary text on cobalt.
- **Ink Haze** (on-ink-soft): secondary text on ink, inactive toggle segments, the footer line.
- **Fault Red** (bad) and **Fault Blush** (bad-bg): error cells and invalid inputs; the error state, not a brand colour.

### Named Rules
**The Territory Rule.** Cobalt fills regions: full-bleed bands or whole blocks. It is not a link colour or a thin border.

**The Lime Means Act Rule.** Lime marks what the visitor does (primary pill, active toggle, focus on dark) and the one hero word being changed. It is never a container fill.

**The Paired Soft Text Rule.** Every ground has its own secondary tone: ink-soft on white or mist, on-cobalt-soft on cobalt, on-ink-soft on ink. Do not lower opacity instead.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), variable, optical sizing on
**Body Font:** Bricolage Grotesque
**Label/Mono Font:** JetBrains Mono (with ui-monospace), data only

**Character:** One condensed-feeling grotesque carries everything from 10rem numerals to 16px labels; weight 800 and tight negative tracking make the headlines feel built from blocks. Mono appears only where the content is data: spreadsheet cells, timestamps, KPI captions.

### Hierarchy
- **Display** (800, clamp(3.4rem, 8.6vw, 8.5rem), 0.9): the hero headline only. The contact headline is a smaller sibling (clamp(3rem, 7.5vw, 6.2rem), 0.95).
- **Numeral** (800, clamp(6rem, 13vw, 10.5rem), 0.82, tabular): process step numbers. Team initials use the same voice at clamp(4.5rem, 8vw, 6.5rem).
- **Headline** (800, clamp(2.6rem, 6vw, 5rem), 0.95, -0.035em): section titles.
- **Title** (800, clamp(1.6rem, 2.4vw, 2rem), 1, -0.03em): block, step, and person titles; the lead block scales up to clamp(2.2rem, 4vw, 3.4rem).
- **Lead** (400, clamp(1.15rem, 1.7vw, 1.35rem), 1.45): hero and section intros, 40 to 48ch.
- **Body** (400, 1.125rem, 1.6): running copy, 44 to 46ch inside blocks.
- **Label** (700, 1.0625rem, 1, -0.01em): pills; chips, nav links, and form labels use 600 to 700 at about 1rem.
- **Data** (JetBrains Mono 400, 0.85rem, 1.4): tables, captions and timestamps inside the demo panel.

### Named Rules
**The Scale Gap Rule.** Hierarchy is made by size jumps of 3x or more and weight 800, not by colour, caps, or decoration. Headlines balance, paragraphs wrap pretty.

**The Mono Is Data Rule.** JetBrains Mono appears only on data: cells, figures' captions, timestamps. Never on headings, buttons, or labels.

## Layout

Content sits in a centred column of min(1240px, 100% minus two gutters), with a fluid gutter of clamp(16px, 4vw, 40px). Sections breathe with clamp(80px, 11vw, 144px) vertical padding and alternate full-bleed grounds: cobalt, white, cobalt, white, ink, cobalt, ink footer.

Two-part sections split asymmetrically at 5fr/7fr or 7fr/5fr, never 50/50 except the team head and contact. Service blocks sit on a 12-column grid with a 16px gap, spanning 7+5, 4+8, 6+6 so no two neighbours match. Card rows use the same 16px gap. Clusters of controls use 10 to 12px gaps.

Breakpoints: the nav collapses into a cobalt drop-down at 1080px; two-column splits stack and blocks reflow to 12+6+6 at 1000px; at 640px everything is single-column, hero pills go full-width, and the comparison columns narrow to 72px.

## Elevation & Depth

Flat by default. Depth comes from colour fields: a white card on a mist layer, a mist block next to an ink block. Shadows exist only for things that float above the page.

### Shadow Vocabulary
- **Nav lift** (`box-shadow: 0 8px 24px -16px rgba(11, 11, 15, .6)`): added to the sticky nav once the page scrolls.
- **Form lift** (`box-shadow: 0 24px 48px -28px rgba(11, 11, 15, .6)`): the white contact form over cobalt.
- **Focus halo** (`box-shadow: 0 0 0 4px rgba(30, 59, 255, .2)`): inputs on focus, with a cobalt border.

### Named Rules
**The Float-Only Shadow Rule.** A shadow means "this sits above the page" (sticky nav, form over a band). Blocks and cards stay flat.

## Shapes

Every interactive control is a full pill (999px): buttons, chips, toggles, status tags, the skip link. Containers use large, soft corners: 28px for blocks, panels, cards, and the form; 18px for the inner stage of a panel; 14px for inputs and small inner cards; 12px for list rows. Container and control borders are a confident 2px in ink or the hairline tone; 1px appears only in demo table cells and mobile menu row rules. Outline blocks (2px ink, white ground) are the quiet counterpart to filled ones. The logo echoes the world: an "S" stacked from rounded blocks, the last one lime.

## Components

### Buttons
Pills with a sliding arrow; tactile and loud.
- **Shape:** full pill (999px), 2px transparent border, 56px tall; small 44px, large adds padding and 1.15rem.
- **Lime (primary):** lime ground, ink text. The main conversion action on every band.
- **Ink:** ink ground, white text, for a secondary action on white.
- **Cobalt:** cobalt ground, white text, available for action on white or mist.
- **Ghost:** transparent with a white 2px border, on cobalt only.
- **Hover / Focus:** on fine pointers lime goes white, ink goes cobalt, cobalt goes ink, ghost fills white with cobalt text; the arrow slides 4px right. Press scales to 0.97. Focus is a 3px outline, lime on dark grounds and cobalt on light.

### Chips
- **Style:** pill, 46px, 2px ink border, a small ring dot before the label.
- **State:** checked fills cobalt with white text and a filled white dot; hover on unchecked tints mist. Backed by real checkboxes.

### Segmented toggle
- **Style:** a dark (#22232b) pill track holding pill segments; the pressed segment is lime with ink text, others use ink-haze text. Used for the Antes / Después switch.

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** cobalt, mist, ink, white, or white with a 2px ink outline.
- **Shadow Strategy:** flat (see Elevation).
- **Internal Padding:** clamp(24px, 3vw, 36px).
- Tags or meta lines sit at the bottom via auto margin.

### Inputs / Fields
- **Style:** white, 2px hairline border, 14px radius, 13px 16px padding, labels above in 700.
- **Focus:** border turns cobalt with a 4px translucent cobalt halo.
- **Error:** border turns fault red; status text in fault red, success in green (#1c6b34).

### Navigation
- **Style:** sticky cobalt bar, 72px, wordmark (800 with "Lab" at 500) left, 600-weight links right ending in a small lime pill.
- **Hover:** a 2px underline grows from the left.
- **Mobile:** below 1080px a two-bar toggle opens a cobalt drop-down with ruled rows and the pill at the bottom.

### Status tag
- Small ink pill (0.74rem, 700, uppercase) set after a heading to mark provisional content ("Borrador", "Por confirmar"); inverts to white with cobalt text on cobalt. It flags open product decisions; it is not a section label.

### Before / after panel (signature)
An ink frame (28px) with a title bar and segmented toggle over an 18px-radius stage. The "before" layer imitates the visitor's mess (spreadsheet in mono with error cells, chat bubbles, a tilted sticky note) in borrowed off-palette tones that stay confined to that layer. The "after" layer is mist with white cards, cobalt figures and bars, and an ink alert. Switching wipes the after layer in from the right with clip-path over 0.55s (cubic-bezier(0.77, 0, 0.175, 1)); reduced motion cross-fades instead.

### Comparison table
Ruled rows (2px hairline, ink under the head) with masked SVG marks (check, dash, cross). The StruoLab column is a continuous cobalt strip with rounded top and bottom ends and white checks.

## Do's and Don'ts

### Do:
- **Do** give cobalt whole bands and whole blocks; let lime appear only on actions, active states, and focus on dark grounds.
- **Do** build hierarchy with weight 800 and negative tracking (-0.03em to -0.04em) at large size jumps.
- **Do** make every control a pill and every container a 28px block.
- **Do** vary block sizes on the 12-column grid so neighbours never match.
- **Do** pair each ground with its own soft text tone (ink-soft, on-cobalt-soft, on-ink-soft).
- **Do** keep motion short and eased with cubic-bezier(0.23, 1, 0.32, 1), and give every animation a reduced-motion fallback.
- **Do** mark illustrative data and unconfirmed facts visibly (panel note, status tag).

### Don't:
- **Don't** use colour gradients or glows; the only shadows are the float shadows listed above.
- **Don't** put icons in tiles or decorate blocks with icons; icons are inline SVG strokes (arrows, marks) only.
- **Don't** use JetBrains Mono outside data.
- **Don't** fill containers with lime.
- **Don't** let the "before" props' off-palette tones (sheet greys, sticky yellow, chat green) leave the demo panel.
- **Don't** outline blocks, cards or chips with 1px strokes; container and control borders are 2px. (1px stays for table cells inside the demo and the mobile menu row rules.)
