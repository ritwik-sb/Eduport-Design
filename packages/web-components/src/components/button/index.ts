import { define } from '../../utils/define.js';
import { EpButton } from './button.js';

export { EpButton } from './button.js';
export type { ButtonVariant, ButtonSize } from './button.js';
define('ep-button', EpButton);

declare global {
  interface HTMLElementTagNameMap {
    'ep-button': EpButton;
  }
}
