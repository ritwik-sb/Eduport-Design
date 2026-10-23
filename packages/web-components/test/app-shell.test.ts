import { afterEach, describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import type { EpAppShell } from '../src/components/app-shell/index.js';
import type { EpTopBar } from '../src/components/top-bar/index.js';
import type { EpPageHeader } from '../src/components/page-header/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

const shellMarkup = `<ep-app-shell>
  <ep-top-bar slot="top-bar">
    <a slot="brand" href="/">Eduport</a>
    <ep-icon-button slot="actions" icon="bell" label="Notifications"></ep-icon-button>
  </ep-top-bar>
  <ep-side-nav slot="nav">
    <ep-side-nav-item href="/home" icon="home" current>Home</ep-side-nav-item>
    <ep-side-nav-group heading="Teaching">
      <ep-side-nav-item href="/courses" icon="book">Courses</ep-side-nav-item>
      <ep-side-nav-item href="/grades" icon="certificate">Grades</ep-side-nav-item>
    </ep-side-nav-group>
    <ep-side-nav-item slot="footer" href="/settings" icon="settings">Settings</ep-side-nav-item>
  </ep-side-nav>
  <ep-page-header heading="Courses">Everything you teach this term.
    <ep-button slot="actions">New course</ep-button>
  </ep-page-header>
  <p>Content</p>
</ep-app-shell>`;

const menuButton = (topBar: EpTopBar) => topBar.shadowRoot!.querySelector('.menu') as HTMLElement | null;
const drawer = (shell: EpAppShell) => shell.shadowRoot!.querySelector('dialog');

afterEach(async () => {
  await page.viewport(1280, 800);
});

describe('ep-app-shell', () => {
  it('shows the navigation beside the content on wide screens', async () => {
    await page.viewport(1280, 800);
    const shell = await fixture<EpAppShell>(shellMarkup);
    const topBar = shell.querySelector<EpTopBar>('ep-top-bar')!;
    await settle();
    expect(shadow(shell, '.sidebar')).not.toBeNull();
    expect(drawer(shell)).toBeNull();
    expect(menuButton(topBar)).toBeNull();
    expect(shadow(shell, 'main')).not.toBeNull();
    await expectNoA11yViolations();
  });

  it('moves the navigation into a drawer on narrow screens', async () => {
    await page.viewport(800, 800);
    const shell = await fixture<EpAppShell>(shellMarkup);
    const topBar = shell.querySelector<EpTopBar>('ep-top-bar')!;
    await settle();
    expect(shadow(shell, '.sidebar')).toBeNull();
    const button = menuButton(topBar)!;
    expect(button).not.toBeNull();
    expect(shadow(button, 'button').getAttribute('aria-expanded')).toBe('false');

    await userEvent.click(button);
    await settle();
    expect(shell.navOpen).toBe(true);
    expect(drawer(shell)!.open).toBe(true);
    expect(shadow(button, 'button').getAttribute('aria-expanded')).toBe('true');
    await expectNoA11yViolations();

    // Following a link closes the drawer. (The test stays on the page.)
    shell.addEventListener('click', (event) => event.preventDefault());
    await userEvent.click(shell.querySelector('ep-side-nav-item[href="/courses"]')!);
    await settle();
    expect(shell.navOpen).toBe(false);
    await expect.poll(() => drawer(shell)!.open).toBe(false);
  });

  it('closes the drawer on Escape', async () => {
    await page.viewport(800, 800);
    const shell = await fixture<EpAppShell>(shellMarkup);
    shell.navOpen = true;
    await settle();
    expect(drawer(shell)!.open).toBe(true);
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(shell.navOpen).toBe(false);
    await expect.poll(() => drawer(shell)!.open).toBe(false);
  });

  it('moves focus to the content from the skip link', async () => {
    const shell = await fixture<EpAppShell>(shellMarkup);
    shadow(shell, '.skip').focus();
    await userEvent.keyboard('{Enter}');
    expect(shell.shadowRoot!.activeElement?.localName).toBe('main');
  });
});

describe('ep-side-nav', () => {
  it('marks the current page and exposes a list of links', async () => {
    const nav = await fixture(`<ep-side-nav>
      <ep-side-nav-item href="/" current>Home</ep-side-nav-item>
      <ep-side-nav-item href="/courses">Courses</ep-side-nav-item>
    </ep-side-nav>`);
    const [home, courses] = nav.querySelectorAll('ep-side-nav-item');
    expect(shadow(nav, 'nav').getAttribute('aria-label')).toBe('Main');
    expect(shadow(home, 'a').getAttribute('aria-current')).toBe('page');
    expect(shadow(courses, 'a').hasAttribute('aria-current')).toBe(false);
    expect(shadow(nav, '.footer').hidden).toBe(true);
    await expectNoA11yViolations();
  });
});

describe('ep-page-header', () => {
  it('renders the title at the chosen level and hides empty slots', async () => {
    const header = await fixture<EpPageHeader>('<ep-page-header heading="Grades" heading-level="2"></ep-page-header>');
    const heading = shadow(header, '[role="heading"]');
    expect(heading.getAttribute('aria-level')).toBe('2');
    expect(heading.textContent).toBe('Grades');
    expect(shadow(header, '.actions').hidden).toBe(true);
    expect(shadow(header, '.description').hidden).toBe(true);
    await expectNoA11yViolations();
  });
});
