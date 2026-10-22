import { html } from 'lit';

export default {
  title: 'Actions/Button',
  component: 'ep-button',
  args: { label: 'Button', variant: 'primary', size: 'md', disabled: false, loading: false, fullWidth: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  render: ({ label, variant, size, disabled, loading, fullWidth }) =>
    html`<ep-button variant=${variant} size=${size} ?disabled=${disabled} ?loading=${loading} ?full-width=${fullWidth}
      >${label}</ep-button
    >`,
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

/** Fast saves (under 400ms) show no spinner; slow ones show it for at least 500ms. Presses while loading are ignored. */
export const Loading = {
  render: () => {
    const save = (ms) => (event) => {
      const button = event.currentTarget;
      button.loading = true;
      setTimeout(() => (button.loading = false), ms);
    };
    return html`<div class="sb-row">
      <ep-button @click=${save(200)}><ep-icon slot="prefix" name="check"></ep-icon>Fast save (200ms)</ep-button>
      <ep-button @click=${save(2000)}><ep-icon slot="prefix" name="check"></ep-icon>Slow save (2s)</ep-button>
      <ep-button variant="secondary" loading>Always loading</ep-button>
    </div>`;
  },
};
