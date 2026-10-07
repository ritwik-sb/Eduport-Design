import { html } from 'lit';

export default {
  title: 'Actions/Button',
  component: 'ep-button',
  args: { label: 'Button', variant: 'primary', size: 'md', disabled: false, fullWidth: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  render: ({ label, variant, size, disabled, fullWidth }) =>
    html`<ep-button variant=${variant} size=${size} ?disabled=${disabled} ?full-width=${fullWidth}>${label}</ep-button>`,
};

export const Playground = {};

export const Variants = {
  render: () => html`<div class="sb-row">
    <ep-button>Primary</ep-button>
    <ep-button variant="secondary">Secondary</ep-button>
    <ep-button variant="tertiary">Tertiary</ep-button>
    <ep-button variant="ghost">Ghost</ep-button>
    <ep-button variant="danger">Danger</ep-button>
  </div>`,
};

export const Sizes = {
  render: () => html`<div class="sb-row">
    <ep-button size="sm">Small</ep-button>
    <ep-button>Medium</ep-button>
    <ep-button size="lg">Large</ep-button>
  </div>`,
};

export const WithIcons = {
  render: () => html`<div class="sb-row">
    <ep-button><ep-icon slot="prefix" name="plus"></ep-icon>New course</ep-button>
    <ep-button variant="tertiary">Next<ep-icon slot="suffix" name="arrow-right"></ep-icon></ep-button>
  </div>`,
};

export const Disabled = {
  render: () => html`<div class="sb-row">
    <ep-button disabled>Primary</ep-button>
    <ep-button variant="secondary" disabled>Secondary</ep-button>
  </div>`,
};
