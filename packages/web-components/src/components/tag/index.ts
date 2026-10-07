import { define } from '../../utils/define.js';
import { EpTag } from './tag.js';

export { EpTag } from './tag.js';
define('ep-tag', EpTag);

declare global {
  interface HTMLElementTagNameMap {
    'ep-tag': EpTag;
  }
}
