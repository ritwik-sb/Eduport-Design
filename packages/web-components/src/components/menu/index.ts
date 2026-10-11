import { define } from '../../utils/define.js';
import { EpMenu } from './menu.js';
import { EpMenuItem, EpMenuDivider } from './menu-item.js';

export { EpMenu } from './menu.js';
export type { MenuSelectDetail } from './menu.js';
export { EpMenuItem, EpMenuDivider } from './menu-item.js';
define('ep-menu', EpMenu);
define('ep-menu-item', EpMenuItem);
define('ep-menu-divider', EpMenuDivider);

declare global {
  interface HTMLElementTagNameMap {
    'ep-menu': EpMenu;
    'ep-menu-item': EpMenuItem;
    'ep-menu-divider': EpMenuDivider;
  }
}
