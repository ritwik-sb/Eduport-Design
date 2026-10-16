import { define } from '../../utils/define.js';
import { EpDatePicker } from './date-picker.js';

export { EpDatePicker } from './date-picker.js';
define('ep-date-picker', EpDatePicker);

declare global {
  interface HTMLElementTagNameMap {
    'ep-date-picker': EpDatePicker;
  }
}
