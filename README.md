# Chaostudio · Design System

The single source of truth for Chaostudio's visual language. Every Chaostudio
project — the [portfolio / Zayn Archive Interface](https://github.com/EpocheDrift/portfolio-pord),
sketches in the [Random sandbox](https://github.com/EpocheDrift/Chaostudios-Random),
and whatever comes next — is a **consumer** of this repo. This is where the
language is *maintained*; nowhere else.

```
.
├── tokens.css       ← CANONICAL. All values, as CSS custom properties (--cs-*).
├── tokens.ts        ← JS mirror of the same values (Three.js, future Figma sync).
├── PRINCIPLES.md    ← The "why". Aesthetic rules + do/don't. The tiebreaker.
├── styleguide.html  ← Living styleguide. Renders straight from tokens.css.
└── README.md        ← You are here.
```

## View the styleguide

Static page, no build step.

```bash
git clone git@github.com:EpocheDrift/Chaostudio-DesignSystem.git
cd Chaostudio-DesignSystem
open styleguide.html          # or: npx serve .
```

It reads every token's *computed* value at runtime, so it can never drift from
`tokens.css`. It's our tuning fork — when we disagree on a value, we change the
token and look at this page together.

## Use it in a project

Pick whichever fits the project's ceremony level:

**Submodule** (stays linked to this repo, updatable with `git submodule update --remote`):
```bash
git submodule add git@github.com:EpocheDrift/Chaostudio-DesignSystem.git design-system
```
```css
@import "./design-system/tokens.css";
```

**Copy** (fine for a quick sandbox sketch — but it's a snapshot, it will drift):
just copy `tokens.css` in and link it.

Then reference `var(--cs-*)` everywhere:
```css
.thing {
  color: var(--cs-ink);
  font-family: var(--cs-font-condensed);
  letter-spacing: var(--cs-track-wide);   /* the signature */
  padding: var(--cs-space-lg);
  border: var(--cs-border);
  transition: opacity var(--cs-dur-3) var(--cs-ease);
}
```
For JS/canvas/Three.js, import from `tokens.ts` instead.

**Rule:** components reference `var(--cs-*)` only. No raw hex / px / easing in
component CSS — if a value isn't a token yet, add it to the token layer here first.

## Working on it together

1. Read [`PRINCIPLES.md`](./PRINCIPLES.md) before proposing a visual change — it
   settles most taste arguments before they start.
2. A change to the visual language = **a change to `tokens.css`** (and the
   `tokens.ts` mirror), in a PR against this repo. Not a one-off tweak in some
   consuming project.
3. `styleguide.html` updates automatically — review it in the PR.
4. Keep `tokens.css` ⇆ `tokens.ts` in sync. They're hand-maintained mirrors.

## Provenance

These values aren't invented — they were extracted from the de-facto language
already living in the Zayn Archive Interface (colors, fonts, and the measured
type / tracking / spacing / radius / motion scales) and normalized here.

## Roadmap

- [x] Extract tokens + principles from the portfolio.
- [x] Lift into a standalone, maintained repo (this one).
- [ ] Make the portfolio consume this repo (submodule) instead of its own
      `src/styles/tokens.css` — deferred so adoption can't break the live build.
- [ ] Generate a Figma variable library from `tokens.ts` so any future designer
      shares the exact same values.
- [ ] Publish as a package once a second project needs versioned installs.
