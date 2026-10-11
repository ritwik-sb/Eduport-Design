import { define } from '../../utils/define.js';
import { EpPopover } from './popover.js';

export { EpPopover } from './popover.js';
define('ep-popover', EpPopover);

declare global {
  interface HTMLElementTagNameMap {
    'ep-popover': EpPopover;
  }
}
