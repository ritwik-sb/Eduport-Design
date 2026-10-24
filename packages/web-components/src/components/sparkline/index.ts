import { define } from '../../utils/define.js';
import { EpSparkline } from './sparkline.js';

export { EpSparkline } from './sparkline.js';
define('ep-sparkline', EpSparkline);

declare global {
  interface HTMLElementTagNameMap {
    'ep-sparkline': EpSparkline;
  }
}
