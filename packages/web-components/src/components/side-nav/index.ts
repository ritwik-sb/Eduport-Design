import { define } from '../../utils/define.js';
import { EpSideNav } from './side-nav.js';
import { EpSideNavItem } from './side-nav-item.js';
import { EpSideNavGroup } from './side-nav-group.js';

export { EpSideNav } from './side-nav.js';
export { EpSideNavItem } from './side-nav-item.js';
export { EpSideNavGroup } from './side-nav-group.js';
define('ep-side-nav', EpSideNav);
define('ep-side-nav-item', EpSideNavItem);
define('ep-side-nav-group', EpSideNavGroup);

declare global {
  interface HTMLElementTagNameMap {
    'ep-side-nav': EpSideNav;
    'ep-side-nav-item': EpSideNavItem;
    'ep-side-nav-group': EpSideNavGroup;
  }
}
