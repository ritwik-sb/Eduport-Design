import { define } from '../../utils/define.js';
import { EpTextarea } from './textarea.js';

export { EpTextarea } from './textarea.js';
define('ep-textarea', EpTextarea);

declare global {
  interface HTMLElementTagNameMap {
    'ep-textarea': EpTextarea;
  }
}
