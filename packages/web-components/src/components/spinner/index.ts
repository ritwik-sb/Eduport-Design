import { define } from '../../utils/define.js';
import { EpSpinner } from './spinner.js';

export { EpSpinner } from './spinner.js';
define('ep-spinner', EpSpinner);

declare global {
  interface HTMLElementTagNameMap {
    'ep-spinner': EpSpinner;
  }
}
