import { define } from '../../utils/define.js';
import { EpSkeleton } from './skeleton.js';

export { EpSkeleton } from './skeleton.js';
define('ep-skeleton', EpSkeleton);

declare global {
  interface HTMLElementTagNameMap {
    'ep-skeleton': EpSkeleton;
  }
}
