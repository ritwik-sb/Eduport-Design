import '@fontsource-variable/inter';
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';
import '@eduportdesign/tokens/css/corners-sharp';
import { iconNames, toast } from '@eduportdesign/web-components';
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
