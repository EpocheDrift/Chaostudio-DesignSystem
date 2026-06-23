/**
 * CHAOSTUDIO · DESIGN TOKENS (JS mirror)
 *
 * `tokens.css` is the CANONICAL source. This file mirrors the same values for
 * JS/TS consumers that can't read CSS custom properties — e.g. Three.js colors,
 * canvas drawing, or a future Figma variable sync. Keep the two in lockstep:
 * if you change a value here, change it in tokens.css too (and vice-versa).
 */

export const color = {
  ground:     "#050605",
  groundSoft: "#0b0d0b",
  ink:        "#eee9dc",
  inkMuted:   "rgba(238, 233, 220, 0.48)",
  inkFaint:   "rgba(238, 233, 220, 0.18)",
  line:       "rgba(238, 233, 220, 0.2)",
  lineStrong: "rgba(238, 233, 220, 0.48)",
  accent:     "#d8aa52", // amber
  signal:     "#78a9a8", // cyan
} as const;

/**
 * Semantic STATE aliases — record/data status as an activity gradient over the
 * primitives above. No new hues: `live` and `routing` share cyan and differ in
 * MOTION (pulse vs steady), not color. Amber is intentionally NOT here — it
 * stays reserved for the interactive/active state (current selection). Encode
 * status with shape (filled/hollow dot) + ink opacity too, never color alone.
 */
export const state = {
  live:     color.signal,
  routing:  color.signal,
  archived: color.inkMuted,
  offline:  color.inkFaint,
} as const;

export const font = {
  display:   '"Archivo", "Arial Narrow", Arial, sans-serif',
  condensed: '"IBM Plex Sans Condensed", "Arial Narrow", Arial, sans-serif',
  body:      "Inter, ui-sans-serif, system-ui, sans-serif",
  cjk:       '"PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif',
} as const;

/** UI type scale (px). Display sizes are fluid — see tokens.css. */
export const text = {
  micro: 9, "2xs": 10, xs: 11, sm: 12, md: 14, lg: 15, xl: 17, "2xl": 18,
} as const;

/** letter-spacing. `wide` (0.16em) is the signature. */
export const track = {
  tight: "0", snug: "0.08em", base: "0.14em", wide: "0.16em", wider: "0.18em",
} as const;

/** spacing scale (px). */
export const space = {
  "3xs": 6, "2xs": 8, xs: 10, sm: 12, md: 14, lg: 18, xl: 24, "2xl": 28, "3xl": 34,
} as const;

export const radius = { none: 0, hair: 2, pill: 999 } as const;

export const motion = {
  ease: "cubic-bezier(0.2, 0.72, 0.18, 1)",
  dur: { 1: 160, 2: 200, 3: 260, 4: 360, 5: 420, 6: 520 },
} as const;
