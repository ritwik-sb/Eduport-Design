import '@fontsource-variable/inter';
import '@fontsource-variable/noto-sans-malayalam';
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';
import '@eduportdesign/tokens/css/corners-sharp';
import { iconNames, toast } from '@eduportdesign/web-components';
import logoManifest from '@eduportdesign/logos/logos.json';
import './gallery.css';

const root = document.documentElement;

// Theme and corner switches, remembered between visits.
const store = {
  get: (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* storage unavailable */
    }
  },
};

function apply(attr, value) {
  root.setAttribute(`data-${attr}`, value);
  for (const button of document.querySelectorAll(`[data-set-${attr}]`)) {
    button.setAttribute('aria-pressed', String(button.getAttribute(`data-set-${attr}`) === value));
  }
  store.set(`ep-gallery-${attr}`, value);
}

const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
apply('theme', store.get('ep-gallery-theme') ?? root.dataset.theme ?? (prefersDark ? 'dark' : 'light'));
apply('corners', store.get('ep-gallery-corners') ?? 'soft');

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-set-theme], [data-set-corners], [data-open], [data-close], [data-toast]');
  if (!target) return;
  if (target.dataset.setTheme) apply('theme', target.dataset.setTheme);
  if (target.dataset.setCorners) apply('corners', target.dataset.setCorners);
  if (target.dataset.open) document.getElementById(target.dataset.open).show();
  if (target.hasAttribute('data-close')) target.closest('ep-modal').close();
  if (target.dataset.toast) showToast(target.dataset.toast);
});

const toasts = {
  success: { variant: 'success', heading: 'Assignment submitted', message: 'Your teacher will review it by Thursday.' },
  info: { variant: 'info', message: 'A new lesson was added to Physics for Class 11.' },
  warning: { variant: 'warning', heading: 'Storage almost full', message: 'You have used 90% of your 5 GB.' },
  danger: { variant: 'danger', heading: "Couldn't save", message: 'Check your connection and try again.', duration: 0 },
  'danger-deleted': { variant: 'success', message: 'Course deleted.' },
  invite: { variant: 'success', heading: 'Invite sent', message: 'They will get an email with a join link.' },
};

function showToast(kind) {
  if (toasts[kind]) toast(toasts[kind]);
}

// Example form
const form = document.getElementById('doubt-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  toast({
    variant: 'success',
    heading: 'Question sent',
    message: `Your ${data.get('subject') ?? ''} question on "${data.get('topic')}" is in the queue.`,
  });
  form.reset();
});

// Select all
const all = document.querySelector('#select-all-demo [data-all]');
const items = [...document.querySelectorAll('#select-all-demo [data-item]')];
function syncAll() {
  const checked = items.filter((item) => item.checked).length;
  all.checked = checked === items.length;
  all.indeterminate = checked > 0 && checked < items.length;
}
all.addEventListener('change', () => {
  for (const item of items) item.checked = all.checked;
});
for (const item of items) item.addEventListener('change', syncAll);

// Removable tags
document.getElementById('filter-tags').addEventListener('ep-remove', (event) => {
  const tag = event.target;
  const next = tag.nextElementSibling ?? tag.previousElementSibling;
  tag.remove();
  next?.focus();
});

// Icon grid
const grid = document.getElementById('icon-grid');
for (const name of iconNames()) {
  const figure = document.createElement('figure');
  figure.innerHTML = `<ep-icon name="${name}"></ep-icon><figcaption>${name}</figcaption>`;
  grid.append(figure);
}

// Logos, generated from the package manifest
const logoGroups = [
  ['core', 'Core marks', 'The logo on a transparent background. Use these in most places.'],
  ['icon', 'App icons and tiles', 'For app launchers, favicons, system avatars and square placeholders.'],
  ['social', 'Social avatars', 'Extra padding so the mark survives a circular crop.'],
  ['card', 'Cards', 'A plate for photos and busy backgrounds. The sizes differ only in how much of the card the wordmark fills.'],
  ['badge', 'Pills', "Badges, stickers and 'powered by Eduport' marks."],
  ['tab', 'Hanging tabs', 'Hang from the top edge of a page, letterhead or slide.'],
];
const logoUrls = import.meta.glob('../../../packages/logos/svg/*.svg', { query: '?url', import: 'default', eager: true });
const logoUrl = (name) => logoUrls[`../../../packages/logos/svg/${name}.svg`];
const logoHost = document.getElementById('logo-groups');
for (const [group, title, description] of logoGroups) {
  const block = document.createElement('div');
  block.className = 'demo logo-group';
  block.innerHTML = `<h3>${title}</h3><p>${description}</p><div class="logo-grid"></div>`;
  for (const logo of logoManifest.logos.filter((l) => l.group === group)) {
    const figure = document.createElement('figure');
    figure.className = 'logo-card';
    figure.innerHTML = `
      <div class="logo-preview" data-preview="${logo.preview ?? 'neutral'}" data-mark="${logo.mark}">
        <img src="${logoUrl(logo.name)}" alt="" />
      </div>
      <figcaption>
        <strong>${logo.title}</strong>
        <span>${logo.use}</span>
        <a href="${logoUrl(logo.name)}" download="eduport-${logo.name}.svg"><ep-icon name="download"></ep-icon>${logo.name}.svg</a>
      </figcaption>`;
    block.querySelector('.logo-grid').append(figure);
  }
  logoHost.append(block);
}

// Highlight the section in view
const links = new Map([...document.querySelectorAll('.toc a')].map((a) => [a.hash.slice(1), a]));
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links.values()) link.removeAttribute('aria-current');
      links.get(entry.target.id)?.setAttribute('aria-current', 'true');
    }
  },
  { rootMargin: '-80px 0px -70% 0px' },
);
for (const id of links.keys()) {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
}
