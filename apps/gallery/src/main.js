import '@fontsource-variable/inter';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/nunito';
import '@fontsource-variable/noto-sans-malayalam';
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';
import '@eduportdesign/tokens/css/corners-sharp';
import '@eduportdesign/tokens/css/style-playground';
import { iconNames, toast } from '@eduportdesign/web-components';
import logoManifest from '@eduportdesign/logos/logos.json';
import wordmarkWhite from '@eduportdesign/logos/wordmark-white.svg?raw';
import './gallery.css';

const root = document.documentElement;

// Theme, style and corner switches, remembered between visits.
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
apply('style', store.get('ep-gallery-style') ?? 'signal');
apply('corners', store.get('ep-gallery-corners') ?? 'soft');

// Turning it off removes the attribute, so the OS reduced-motion setting still applies underneath.
const reduceMotion = document.getElementById('reduce-motion');
function applyMotion(reduced) {
  if (reduced) root.dataset.motion = 'reduced';
  else delete root.dataset.motion;
  reduceMotion.checked = reduced;
  store.set('ep-gallery-motion', reduced ? 'reduced' : 'full');
}
applyMotion(store.get('ep-gallery-motion') === 'reduced');
reduceMotion.addEventListener('change', () => applyMotion(reduceMotion.checked));

document.addEventListener('click', (event) => {
  const target = event.target.closest(
    '[data-set-theme], [data-set-style], [data-set-corners], [data-open], [data-close], [data-toast], [data-toast-undo], [data-fake-save]',
  );
  if (!target) return;
  if (target.dataset.setTheme) apply('theme', target.dataset.setTheme);
  if (target.dataset.fakeSave) fakeSave(target, Number(target.dataset.fakeSave));
  if (target.hasAttribute('data-toast-undo')) showUndoToast();
  if (target.dataset.setStyle) apply('style', target.dataset.setStyle);
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
  long: {
    variant: 'info',
    heading: 'Timetable updated',
    message:
      'Physics for Class 11 moves from Monday to Wednesday at 10 AM starting next week. Students and parents have been told by email, and the change shows in everyone\'s calendar. Lab sessions stay on Friday as before.',
  },
};

// Loading buttons for the motion demos. The click listener only runs while the button isn't loading.
function fakeSave(button, ms) {
  button.loading = true;
  setTimeout(() => {
    button.loading = false;
    toast({ variant: 'success', message: 'Saved.' });
  }, ms);
}

function showUndoToast() {
  const element = toast({ variant: 'success', message: 'Lesson deleted.' });
  const undo = document.createElement('ep-button');
  undo.slot = 'action';
  undo.size = 'sm';
  undo.variant = 'ghost';
  undo.textContent = 'Undo';
  undo.addEventListener('click', () => {
    element.close();
    toast({ variant: 'info', message: 'Lesson restored.' });
  });
  element.append(undo);
}

function showToast(kind) {
  if (toasts[kind]) toast(toasts[kind]);
}

// Menu and popover demos
document.getElementById('menu-demo').addEventListener('ep-select', (event) => {
  toast({ variant: 'info', message: `You chose ${event.detail.value}.` });
});
document.addEventListener('click', (event) => {
  event.target.closest('[data-close-popover]')?.closest('ep-popover').hide();
});

// Sortable table
const students = [
  { name: 'Ananya Menon', section: '11 A', score: 92, fee: 'Paid' },
  { name: 'Rahul Nair', section: '11 A', score: 78, fee: 'Due' },
  { name: 'Fatima Rasheed', section: '11 B', score: 85, fee: 'Paid' },
  { name: 'Arjun Pillai', section: '11 B', score: 64, fee: 'Overdue' },
  { name: 'Diya Krishnan', section: '11 C', score: 88, fee: 'Paid' },
];
const feeVariant = { Paid: 'success', Due: 'warning', Overdue: 'danger' };
const tableDemo = document.getElementById('table-demo');
let sort = { key: 'name', direction: 'ascending' };
function renderStudents() {
  const sorted = [...students].sort((a, b) => {
    const order = a[sort.key] < b[sort.key] ? -1 : a[sort.key] > b[sort.key] ? 1 : 0;
    return sort.direction === 'ascending' ? order : -order;
  });
  tableDemo.querySelector('tbody').innerHTML = sorted
    .map(
      (s) => `<tr>
        <td>${s.name}</td><td>${s.section}</td><td style="text-align: end">${s.score}</td>
        <td><ep-badge variant="${feeVariant[s.fee]}">${s.fee}</ep-badge></td>
        <td style="text-align: end"><ep-icon-button icon="dots-vertical" label="Actions for ${s.name}" size="sm"></ep-icon-button></td>
      </tr>`,
    )
    .join('');
  for (const button of tableDemo.querySelectorAll('th button')) {
    const th = button.parentElement;
    if (button.dataset.sort === sort.key) th.setAttribute('aria-sort', sort.direction);
    else th.removeAttribute('aria-sort');
  }
}
tableDemo.addEventListener('click', (event) => {
  const button = event.target.closest('th button');
  if (!button) return;
  const key = button.dataset.sort;
  sort = { key, direction: sort.key === key && sort.direction === 'ascending' ? 'descending' : 'ascending' };
  renderStudents();
});
renderStudents();

// Date picker: no weekends
document.getElementById('exam-date').isDateDisabled = (date) => date.getDay() === 0 || date.getDay() === 6;

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

// Spacing scale
const spaceScale = [
  ['0', '0', 'Resetting; flush edges'],
  ['25', '2px', 'Optical nudges, badge and tag padding'],
  ['50', '4px', 'Icon to text in small items; label to helper text'],
  ['100', '8px', 'Icon to text in buttons; between buttons in a group; label to field'],
  ['150', '12px', 'Padding in menus, tooltips and list rows'],
  ['200', '16px', 'Card padding; related controls in a row; phone margin and gutter'],
  ['300', '24px', 'Between form fields; heading to its content'],
  ['400', '32px', 'Between groups inside a section; phone section gap'],
  ['500', '40px', 'Page header to content on large screens; tablet section gap'],
  ['600', '48px', 'Between major page sections on desktop; between form sections'],
  ['800', '64px', 'Empty states; generous page padding'],
];
const scaleBody = document.getElementById('space-scale');
for (const [step, value, use] of spaceScale) {
  const row = scaleBody.insertRow();
  row.innerHTML = `<td><code>--ep-space-${step}</code></td><td>${value}</td><td><span class="space-bar" style="width: var(--ep-space-${step})"></span></td><td>${use}</td>`;
}

// Layout grid readout, following the same breakpoints as the tokens
const breakpoints = [
  ['xl', matchMedia('(min-width: 1440px)')],
  ['lg', matchMedia('(min-width: 1024px)')],
  ['md', matchMedia('(min-width: 600px)')],
];
const overlay = document.getElementById('grid-overlay');
const readout = document.getElementById('grid-readout');
function updateGrid() {
  const current = breakpoints.find(([, query]) => query.matches)?.[0] ?? 'base';
  const style = getComputedStyle(root);
  const read = (name) => style.getPropertyValue(`--ep-layout-${name}`).trim();
  const columns = Number(read('columns'));
  overlay.replaceChildren(
    ...Array.from({ length: columns }, (_, i) => Object.assign(document.createElement('span'), { textContent: i + 1 })),
  );
  // Layout tokens reference space tokens, so measure resolved lengths instead of printing var(...).
  const probe = Object.assign(document.createElement('div'), { style: 'position:absolute;visibility:hidden' });
  document.body.append(probe);
  const px = (name) => {
    probe.style.width = `var(--ep-layout-${name})`;
    return `${Math.round(probe.getBoundingClientRect().width)}px`;
  };
  readout.textContent = `Breakpoint ${current}: ${columns} columns, ${px('margin')} margin, ${px('gutter')} gutter, ${px('section-gap')} section gap.`;
  probe.remove();
  for (const row of document.querySelectorAll('.token-table tr[data-bp]')) {
    row.toggleAttribute('data-active', row.dataset.bp === current);
  }
}
for (const [, query] of breakpoints) query.addEventListener('change', updateGrid);
updateGrid();

// Highlight the section in view
const links = new Map([...document.querySelectorAll('.toc li a')].map((a) => [a.hash.slice(1), a]));
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

// Landing: copy the install command, jump to the dashboard
document.querySelector('.copy')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    toast({ variant: 'success', message: 'Install command copied.' });
  } catch {
    toast({ variant: 'warning', message: 'Could not copy. Select the command and copy it.' });
  }
});
document.getElementById('see-dashboard')?.addEventListener('click', () => {
  document.getElementById('dashboard').scrollIntoView({ block: 'start' });
});

// Dashboard
for (const el of document.querySelectorAll('.wordmark')) el.innerHTML = wordmarkWhite;
const courses = [
  { tone: '1', icon: 'atom', name: 'Physics', meta: 'Class 11 · 32 students', value: 68, due: 4, pattern: 'orbit', seed: 7, people: ['Rahul Kumar', 'Sana Noor', 'Arun Joseph', 'Meera Varma', 'Priya Thomas'] },
  { tone: '2', icon: 'flask', name: 'Chemistry', meta: 'Class 12 · 29 students', value: 54, due: 6, pattern: 'rings', seed: 12, people: ['Faisal Ali', 'Priya Thomas', 'Sana Noor', 'Arun Joseph'] },
  { tone: '3', icon: 'math-function', name: 'Mathematics', meta: 'Class 10 · 35 students', value: 81, due: 2, pattern: 'blocks', seed: 21, people: ['Meera Varma', 'Rahul Kumar', 'Faisal Ali', 'Sana Noor', 'Arun Joseph', 'Priya Thomas'] },
  { tone: '4', icon: 'leaf', name: 'Biology', meta: 'Class 9 · 32 students', value: 47, due: 4, pattern: 'waves', seed: 4, people: ['Priya Thomas', 'Arun Joseph', 'Rahul Kumar'] },
];
document.getElementById('course-grid').innerHTML = courses
  .map(
    (c) => `<ep-card class="course" tone="${c.tone}" interactive>
      <ep-cover slot="media" pattern="${c.pattern}" tone="${c.tone}" seed="${c.seed}">
        <span class="cover-row">
          <ep-icon-tile tone="${c.tone}" icon="${c.icon}"></ep-icon-tile>
          <ep-progress-ring tone="${c.tone}" value="${c.value}" label="${c.name} completion"></ep-progress-ring>
        </span>
      </ep-cover>
      <h4 slot="heading"><a href="#dashboard">${c.name}</a></h4>
      ${c.meta}
      <div slot="footer" class="course-foot">
        <ep-avatar-group label="Students in ${c.name}" max="3">${c.people.map((p) => `<ep-avatar name="${p}"></ep-avatar>`).join('')}</ep-avatar-group>
        <ep-badge variant="accent">${c.due} due</ep-badge>
      </div>
    </ep-card>`,
  )
  .join('');

// Cover art gallery
const coverHost = document.getElementById('cover-grid');
['waves', 'rings', 'dots', 'blocks', 'orbit', 'mesh'].forEach((pattern, i) => {
  const figure = document.createElement('figure');
  figure.innerHTML = `<ep-cover pattern="${pattern}" tone="${(i % 6) + 1}" seed="${i * 5 + 3}"></ep-cover><figcaption><code>${pattern}</code> tone ${(i % 6) + 1}</figcaption>`;
  coverHost.append(figure);
});

// Color swatches. Each shows the text color that passes AA on it, so the page doubles as a contrast table.
function toRgb(value) {
  const probe = Object.assign(document.createElement('span'), { style: `color: ${value}; display: none` });
  document.body.append(probe);
  const [r, g, b] = getComputedStyle(probe).color.match(/[\d.]+/g).map(Number);
  probe.remove();
  return [r, g, b];
}
const luminance = ([r, g, b]) => {
  const f = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const hex = (rgb) => '#' + rgb.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('');
function swatch(token, label = token) {
  const rgb = toRgb(`var(--ep-color-${token})`);
  const onWhite = ratio(rgb, [255, 255, 255]);
  const onBlack = ratio(rgb, [0, 0, 0]);
  const dark = onBlack > onWhite;
  const best = Math.max(onWhite, onBlack);
  return `<figure class="swatch" style="background: var(--ep-color-${token}); color: ${dark ? '#000' : '#fff'}">
    <b>${label}</b><span>${hex(rgb)}</span><span class="aa">Aa ${best.toFixed(1)}${best >= 4.5 ? '' : ' (large text)'}</span></figure>`;
}
function renderSwatches() {
  const steps = ['10', '20', '30', '40', '50', '55', '57', '58', '60', '70', '80', '90', '100'];
  document.getElementById('swatches-brand').innerHTML = steps.map((s) => swatch(`brand-${s}`, s)).join('');
  const grays = ['10', '15', '20', '30', '40', '50', '60', '70', '80', '90', '95', '100'];
  document.getElementById('swatches-gray').innerHTML = grays.map((s) => swatch(`gray-${s}`, s)).join('');
  document.getElementById('swatches-category').innerHTML = [1, 2, 3, 4, 5, 6]
    .map((n) => `<div class="swatch-tone">${['subtle', 'bold', 'text'].map((k) => swatch(`category-${n}-${k}`, `${n} ${k}`)).join('')}</div>`)
    .join('');
}
renderSwatches();
new MutationObserver(renderSwatches).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

// Phones: the contents rail becomes a drawer behind a menu button
{
  const toggle = document.querySelector('.nav-toggle');
  const toc = document.getElementById('toc');
  const scrim = document.querySelector('.nav-scrim');
  const setOpen = (open, restoreFocus = true) => {
    document.body.toggleAttribute('data-nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    scrim.hidden = !open;
    // Behind the open drawer nothing is reachable, so Tab stays inside it.
    for (const el of [document.querySelector('.content'), toggle]) el.inert = open;
    if (open) toc.querySelector('li a')?.focus();
    else if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(!document.body.hasAttribute('data-nav-open')));
  scrim.addEventListener('click', () => setOpen(false));
  toc.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false, false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.hasAttribute('data-nav-open')) setOpen(false);
  });
  matchMedia('(min-width: 901px)').addEventListener('change', (event) => event.matches && setOpen(false, false));
}
