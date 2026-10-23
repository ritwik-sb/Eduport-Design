import { define } from '../../utils/define.js';
import { EpStat } from './stat.js';

export { EpStat } from './stat.js';
define('ep-stat', EpStat);

declare global {
  interface HTMLElementTagNameMap {
    'ep-stat': EpStat;
  }
}
