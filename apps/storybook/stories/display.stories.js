import { html } from 'lit';
import { iconNames } from '@eduportdesign/web-components';

export default { title: 'Display' };

const variants = ['neutral', 'accent', 'info', 'success', 'warning', 'danger'];

export const Badge = {
  render: () => html`<div class="sb-row">
    ${variants.map((v) => html`<ep-badge variant=${v}>${v}</ep-badge>`)}
    <ep-badge variant="success" dot>Online</ep-badge>
  </div>`,
};

export const Tag = {
  render: () => html`<div class="sb-row" @ep-remove=${(e) => e.target.remove()}>
    ${variants.map((v) => html`<ep-tag variant=${v} removable>${v}</ep-tag>`)}
  </div>`,
};

export const Avatar = {
  render: () => html`<div class="sb-row">
    ${['xs', 'sm', 'md', 'lg', 'xl'].map((s) => html`<ep-avatar size=${s} name="Anjali Menon"></ep-avatar>`)}
    <ep-avatar></ep-avatar>
  </div>`,
};

export const Card = {
  render: () => html`<div class="sb-row" style="align-items: stretch">
    ${['outlined', 'elevated', 'filled'].map(
      (v) => html`<ep-card variant=${v} style="width: 260px">
        <h3 slot="heading">Physics for Class 11</h3>
        Motion, forces and energy, with weekly practice tests.
        <ep-button slot="footer" size="sm" variant="tertiary">Open</ep-button>
      </ep-card>`,
    )}
  </div>`,
};

export const Icons = {
  render: () => html`<div class="sb-row" style="font-size: 24px">
    ${iconNames().map((name) => html`<ep-icon name=${name} label=${name}></ep-icon>`)}
  </div>`,
};
