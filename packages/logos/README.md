# @eduportdesign/logos

Every Eduport logo as an optimized SVG, plus `logos.json`, which lists each file with where to use it. See them all in the [gallery](https://ritwik-sb.github.io/Eduport-Design/#logos).

> Not published yet (`"private": true`). It ships with the next release once versioning is settled.

```js
// Bundlers (Vite, webpack, Next.js) turn the import into a URL
import logoUrl from '@eduportdesign/logos/wordmark-orange.svg';
```

```html
<a href="/"><img src="/assets/wordmark-orange.svg" alt="Eduport" height="32" /></a>
```

## Which file do I need?

- **Most places:** `wordmark-orange` on light backgrounds, `wordmark-white` on orange or dark ones.
- **Dark theme UI:** switch to `wordmark-white` (see [Theme switching](#theme-switching)).
- **App icon or favicon:** `symbol-tile-brand`.
- **Eduport as a sender in the product** (notifications, chat): `symbol-circle-brand`.
- **Social media profile picture:** `symbol-avatar-brand` or `wordmark-avatar-brand`.
- **On a photo or busy background:** a white card or pill.
- **Black-and-white print:** `wordmark-black`.

### Core marks

The logo itself, on a transparent background. Use these in most places.

| File | Use it for |
| --- | --- |
| [`wordmark-orange.svg`](svg/wordmark-orange.svg) | The primary logo. Use it whenever the background is white or a light neutral: app and website headers, sign-in screens, emails, documents and slides. |
| [`wordmark-white.svg`](svg/wordmark-white.svg) | On brand orange, dark surfaces (dark theme headers) and dark photos or video. Check the background behind it is dark enough to read the cap and tassel. |
| [`wordmark-black.svg`](svg/wordmark-black.svg) | One-color reproduction only: black-and-white print, stamps, engraving and embossing, fax, and partner lockups that require a mono logo. |
| [`symbol-orange.svg`](svg/symbol-orange.svg) (cut from the round icon; not its own artboard in the source file) | The cap-and-e mark alone, for tight spaces where Eduport is already named nearby: a collapsed sidebar, a loading screen, a watermark. |
| [`symbol-white.svg`](svg/symbol-white.svg) (cut from the round icon; not its own artboard in the source file) | The symbol on brand orange or dark surfaces, for the same tight spaces as the orange symbol. |

### App icons and tiles

The logo inside a 250 × 250 container (16 px radius on the square tiles).

| File | Use it for |
| --- | --- |
| [`symbol-tile-brand.svg`](svg/symbol-tile-brand.svg) | The default app icon: iOS and Android launcher icons, PWA manifest icons, favicons, and app store listings. |
| [`symbol-tile-light.svg`](svg/symbol-tile-light.svg) | Alternate app icon for orange or dark backgrounds where the orange tile would disappear, such as a tile on a brand-colored page or a dark-mode home screen preview. |
| [`symbol-circle-brand.svg`](svg/symbol-circle-brand.svg) | Eduport as the sender inside a product: the avatar on system messages, notifications, comments and chat, and map pins. |
| [`symbol-circle-light.svg`](svg/symbol-circle-light.svg) | The round icon on orange or dark backgrounds, for example a system avatar inside an orange banner. |
| [`wordmark-tile-brand.svg`](svg/wordmark-tile-brand.svg) | Square spaces big enough to read the name: default cover images for courses and videos, square ads, social post templates and end cards. |
| [`wordmark-tile-light.svg`](svg/wordmark-tile-light.svg) | The wordmark tile on orange or dark backgrounds, or where a lighter placeholder image reads better. |

### Social avatars

494 × 494 squares with extra padding, so the mark survives a circular crop.

| File | Use it for |
| --- | --- |
| [`symbol-avatar-brand.svg`](svg/symbol-avatar-brand.svg) | Profile pictures on platforms that crop to a circle and show them small: WhatsApp, YouTube, Instagram, X. The extra padding keeps the mark inside the circle. |
| [`wordmark-avatar-brand.svg`](svg/wordmark-avatar-brand.svg) | Profile pictures shown large enough to read the name, such as a LinkedIn or Facebook page. Safe for circular crops. |

### Cards

The wordmark on a 390 × 148 rounded plate. The three sizes differ only in how much of the card the wordmark fills.

| File | Use it for |
| --- | --- |
| [`wordmark-card-light-lg.svg`](svg/wordmark-card-light-lg.svg) | Places the logo on photos, colored or busy backgrounds where it needs its own plate. Use the large mark when the card is shown small, such as a partner logo strip or a sponsor row. |
| [`wordmark-card-light-md.svg`](svg/wordmark-card-light-md.svg) | The same white card at mid size, such as a logo on an event banner or certificate. |
| [`wordmark-card-light-sm.svg`](svg/wordmark-card-light-sm.svg) | The white card shown large, where the generous padding reads as breathing room: a hero banner or a printed backdrop. |
| [`wordmark-card-brand-lg.svg`](svg/wordmark-card-brand-lg.svg) | A solid brand block on white, neutral or dark backgrounds. Use the large mark when the card is shown small, such as an email header or a footer. |
| [`wordmark-card-brand-md.svg`](svg/wordmark-card-brand-md.svg) | The orange card at mid size, such as a presentation title slide or a web banner. |
| [`wordmark-card-brand-sm.svg`](svg/wordmark-card-brand-sm.svg) | The orange card shown large, where the padding reads as breathing room: a hero, a stage screen or a printed backdrop. |

### Pills

The wordmark on a fully rounded 390 × 144 plate.

| File | Use it for |
| --- | --- |
| [`wordmark-pill-light.svg`](svg/wordmark-pill-light.svg) | A floating badge over photos and video, a 'powered by Eduport' mark on partner pages, and stickers or merchandise. |
| [`wordmark-pill-brand.svg`](svg/wordmark-pill-brand.svg) | The pill on white or neutral backgrounds, for the same badge, sticker and co-branding uses. |

### Hanging tabs

Flat on top and rounded or angled below, so they hang from the top edge of a page.

| File | Use it for |
| --- | --- |
| [`wordmark-tab-brand.svg`](svg/wordmark-tab-brand.svg) | Hangs from the top edge of a page: landing page headers, letterheads, certificates and slide masters. Align its flat top edge with the edge of the page. |
| [`wordmark-tab-light.svg`](svg/wordmark-tab-light.svg) | The hanging tab on orange, dark or photo backgrounds. |
| [`wordmark-tab-angled-brand.svg`](svg/wordmark-tab-angled-brand.svg) | A more expressive hanging tab for marketing: posters, social graphics, event banners and campaign pages. Keep it out of product UI. |
| [`wordmark-tab-angled-light.svg`](svg/wordmark-tab-angled-light.svg) | The angled tab on orange, dark or photo backgrounds, for the same marketing uses. |
## Rules

- **Clear space:** keep empty space around the wordmark at least half its height on every side. The containers (tiles, cards, pills, tabs) already include it.
- **Minimum size:** the wordmark at least 80 px wide on screen (20 mm in print); the symbol at least 24 px. Below that the cap and tassel blur, so use a tile or circle icon instead.
- **Alt text:** `alt="Eduport"`. Inside a link to the home page that's enough; don't add "logo" or "home". If the name is already in text right next to it, use `alt=""`.
- **Contrast:** orange `#ff6518` on white is 2.95:1. Logos are exempt from the WCAG contrast rules, but don't place the orange wordmark on mid-tone or orange backgrounds; use white there.
- **Don't** recolor the logo beyond the orange, white and black files, stretch or rotate it, add outlines or drop shadows, rebuild it in a font, or put it inside a button shape.

### Theme switching

The core marks are fixed-color files, so swap them with the theme:

```html
<picture>
  <source srcset="wordmark-white.svg" media="(prefers-color-scheme: dark)" />
  <img src="wordmark-orange.svg" alt="Eduport" height="32" />
</picture>
```

If your app sets `data-theme` instead of following the OS, render both and hide one with CSS:

```css
[data-theme='dark'] .logo-light,
:root:not([data-theme='dark']) .logo-dark { display: none; }
```

## Source

Cut from the master `Logos.svg` artboard file. The logo orange is `#ff6518`; the token `color.brand.50` is `#fb6514`. They look the same, and the logo files keep the artwork's value.

Not included: three "button" versions (the wordmark in a rectangle or pill with a black outline and offset shadow) and an illustrated halftone tile, which embeds 1.5 MB of raster images.

Run `npm test` to check that `logos.json` and `svg/` agree and that every file is a clean, scalable SVG.
