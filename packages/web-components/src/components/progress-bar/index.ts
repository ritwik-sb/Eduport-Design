import { define } from '../../utils/define.js';
import { EpProgressBar } from './progress-bar.js';

export { EpProgressBar } from './progress-bar.js';
define('ep-progress-bar', EpProgressBar);

declare global {
  interface HTMLElementTagNameMap {
    'ep-progress-bar': EpProgressBar;
  }
}
