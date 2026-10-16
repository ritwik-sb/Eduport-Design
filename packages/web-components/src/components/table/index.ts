import { define } from '../../utils/define.js';
import { EpTable } from './table.js';

export { EpTable } from './table.js';
define('ep-table', EpTable);

declare global {
  interface HTMLElementTagNameMap {
    'ep-table': EpTable;
  }
}
