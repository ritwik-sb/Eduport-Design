import { define } from '../../utils/define.js';
import { EpPageHeader } from './page-header.js';

export { EpPageHeader } from './page-header.js';
define('ep-page-header', EpPageHeader);

declare global {
  interface HTMLElementTagNameMap {
    'ep-page-header': EpPageHeader;
  }
}
