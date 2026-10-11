import { define } from '../../utils/define.js';
import { EpBreadcrumbs } from './breadcrumbs.js';
import { EpBreadcrumbItem } from './breadcrumb-item.js';

export { EpBreadcrumbs } from './breadcrumbs.js';
export { EpBreadcrumbItem } from './breadcrumb-item.js';
define('ep-breadcrumbs', EpBreadcrumbs);
define('ep-breadcrumb-item', EpBreadcrumbItem);

declare global {
  interface HTMLElementTagNameMap {
    'ep-breadcrumbs': EpBreadcrumbs;
    'ep-breadcrumb-item': EpBreadcrumbItem;
  }
}
