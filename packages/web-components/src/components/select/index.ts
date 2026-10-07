import { define } from '../../utils/define.js';
import { EpSelect } from './select.js';

export { EpSelect } from './select.js';
define('ep-select', EpSelect);

declare global {
  interface HTMLElementTagNameMap {
    'ep-select': EpSelect;
  }
}
