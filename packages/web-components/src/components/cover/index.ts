import { define } from '../../utils/define.js';
import { EpCover } from './cover.js';

export { EpCover } from './cover.js';
define('ep-cover', EpCover);

declare global {
  interface HTMLElementTagNameMap {
    'ep-cover': EpCover;
  }
}
