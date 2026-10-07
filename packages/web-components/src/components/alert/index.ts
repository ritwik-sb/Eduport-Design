import { define } from '../../utils/define.js';
import { EpAlert } from './alert.js';

export { EpAlert } from './alert.js';
define('ep-alert', EpAlert);

declare global {
  interface HTMLElementTagNameMap {
    'ep-alert': EpAlert;
  }
}
