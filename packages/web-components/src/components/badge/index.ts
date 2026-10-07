import { define } from '../../utils/define.js';
import { EpBadge } from './badge.js';

export { EpBadge } from './badge.js';
export type { StatusVariant } from './badge.js';
define('ep-badge', EpBadge);

declare global {
  interface HTMLElementTagNameMap {
    'ep-badge': EpBadge;
  }
}
