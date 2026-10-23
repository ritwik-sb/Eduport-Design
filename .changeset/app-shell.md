---
"@eduportdesign/web-components": minor
"@eduportdesign/react": minor
"@eduportdesign/tokens": patch
---

Add the app shell: `<ep-app-shell>` (sticky top bar, side navigation that becomes a drawer below 1024px, skip link, `<main>`, page margin and width cap), `<ep-top-bar>`, `<ep-side-nav>` with `<ep-side-nav-item>` and `<ep-side-nav-group>`, and `<ep-page-header>`. React: `AppShell`, `TopBar`, `SideNav`, `SideNavItem`, `SideNavGroup`, `PageHeader`.

`<ep-text-field>` gains `hide-label` for fields whose purpose is clear without a visible label, such as top bar search. The base stylesheet keeps anchor jumps and focused fields clear of the shell's sticky top bar.
