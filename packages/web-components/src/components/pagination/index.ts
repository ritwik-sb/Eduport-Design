import { define } from '../../utils/define.js';
import { EpPagination } from './pagination.js';

export { EpPagination, pageRange } from './pagination.js';
define('ep-pagination', EpPagination);

declare global {
  interface HTMLElementTagNameMap {
    'ep-pagination': EpPagination;
  }
}
