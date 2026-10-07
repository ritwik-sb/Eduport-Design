import { define } from '../../utils/define.js';
import { EpIcon } from './icon.js';

export { EpIcon, registerIcons, iconNames } from './icon.js';
define('ep-icon', EpIcon);

declare global {
  interface HTMLElementTagNameMap {
    'ep-icon': EpIcon;
  }
}
