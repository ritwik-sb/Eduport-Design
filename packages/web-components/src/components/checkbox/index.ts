import { define } from '../../utils/define.js';
import { EpCheckbox } from './checkbox.js';

export { EpCheckbox } from './checkbox.js';
define('ep-checkbox', EpCheckbox);

declare global {
  interface HTMLElementTagNameMap {
    'ep-checkbox': EpCheckbox;
  }
}
