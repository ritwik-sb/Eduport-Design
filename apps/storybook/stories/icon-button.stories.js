import { html } from 'lit';

export default {
  title: 'Actions/Icon button',
  component: 'ep-icon-button',
  args: { icon: 'settings', label: 'Settings', variant: 'ghost', size: 'md', disabled: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  render: (a) =>
    html`<ep-tooltip content=${a.label}
      ><ep-icon-button icon=${a.icon} label=${a.label} variant=${a.variant} size=${a.size} ?disabled=${a.disabled}></ep-icon-button
    ></ep-tooltip>`,
};

export const Playground = {};

export const Variants = {
  render: () => html`<div class="sb-row">
    <ep-icon-button icon="plus" label="Add" variant="primary"></ep-icon-button>
    <ep-icon-button icon="settings" label="Settings" variant="secondary"></ep-icon-button>
    <ep-icon-button icon="share" label="Share" variant="tertiary"></ep-icon-button>
    <ep-icon-button icon="dots-vertical" label="More options"></ep-icon-button>
    <ep-icon-button icon="trash" label="Delete" variant="danger"></ep-icon-button>
  </div>`,
};
