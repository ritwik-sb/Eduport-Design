import { define } from '../../utils/define.js';
import { EpSwitch } from './switch.js';

export { EpSwitch } from './switch.js';
define('ep-switch', EpSwitch);

declare global {
  interface HTMLElementTagNameMap {
    'ep-switch': EpSwitch;
  }
}
