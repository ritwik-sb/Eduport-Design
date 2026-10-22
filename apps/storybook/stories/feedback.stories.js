import { html } from 'lit';
import { onPrimaryContrastException } from './on-primary-exception.js';
import { toast } from '@eduportdesign/web-components';

export default { title: 'Feedback and overlays' };

export const Alert = {
  render: () => html`<div class="sb-stack" style="max-width: 640px">
    <ep-alert variant="info" heading="Scheduled maintenance">The portal will be unavailable on Sunday from 2 to 4 AM.</ep-alert>
    <ep-alert variant="success" heading="Assignment submitted">Your teacher will review it by Thursday.</ep-alert>
    <ep-alert variant="warning" heading="Fee due in 3 days" dismissible>
      Pay before the due date to avoid a late fee.
      <ep-button slot="actions" size="sm" variant="secondary">Pay now</ep-button>
    </ep-alert>
    <ep-alert variant="danger" heading="Upload failed" dismissible>The file is larger than 25 MB.</ep-alert>
  </div>`,
};

export const Toast = {
  render: () => html`<div class="sb-row">
    ${['success', 'info', 'warning', 'danger'].map(
      (variant) =>
        html`<ep-button variant="secondary" @click=${() => toast({ variant, heading: variant, message: 'This is a toast.' })}
          >${variant}</ep-button
        >`,
    )}
  </div>`,
};

/** A toast with an action stays until it is dismissed. */
export const ToastWithUndo = {
  render: () => html`<ep-button
    variant="secondary"
    @click=${() => {
      const element = toast({ variant: 'success', message: 'Course deleted.' });
      const undo = document.createElement('ep-button');
      undo.slot = 'action';
      undo.size = 'sm';
      undo.variant = 'ghost';
      undo.textContent = 'Undo';
      undo.addEventListener('click', () => element.close());
      element.append(undo);
    }}
    >Delete course</ep-button
  >`,
};

export const Tooltip = {
  render: () => html`<div class="sb-row" style="padding: 48px">
    ${['top', 'bottom', 'left', 'right'].map(
      (p) => html`<ep-tooltip content=${`Shown on ${p}`} placement=${p}><ep-button variant="secondary">${p}</ep-button></ep-tooltip>`,
    )}
  </div>`,
};

/** Hover waits 500ms; once one is open, moving to a neighbor opens it at once. Keyboard focus never waits. */
export const TooltipToolbar = {
  render: () => html`<div class="sb-row" style="padding: 48px; gap: 4px" role="toolbar" aria-label="Formatting">
    ${['edit', 'copy', 'link', 'trash'].map(
      (icon) => html`<ep-tooltip content=${icon}><ep-icon-button icon=${icon} label=${icon}></ep-icon-button></ep-tooltip>`,
    )}
  </div>`,
};

export const Modal = {
  parameters: onPrimaryContrastException,
  render: () => html`<ep-button @click=${(e) => e.target.nextElementSibling.show()}>Open modal</ep-button>
    <ep-modal heading="Delete this course?" size="sm">
      All its lessons, tests and submissions will be deleted. This can't be undone.
      <ep-button slot="footer" variant="ghost" @click=${(e) => e.target.closest('ep-modal').close()}>Cancel</ep-button>
      <ep-button slot="footer" variant="danger" @click=${(e) => e.target.closest('ep-modal').close()}>Delete course</ep-button>
    </ep-modal>`,
};
