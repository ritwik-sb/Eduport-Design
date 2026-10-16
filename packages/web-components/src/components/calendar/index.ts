import { define } from '../../utils/define.js';
import { EpCalendar } from './calendar.js';

export { EpCalendar } from './calendar.js';
define('ep-calendar', EpCalendar);

declare global {
  interface HTMLElementTagNameMap {
    'ep-calendar': EpCalendar;
  }
}
