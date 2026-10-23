import { define } from '../../utils/define.js';
import { EpProgressRing } from './progress-ring.js';

export { EpProgressRing } from './progress-ring.js';
define('ep-progress-ring', EpProgressRing);

declare global {
  interface HTMLElementTagNameMap {
    'ep-progress-ring': EpProgressRing;
  }
}
