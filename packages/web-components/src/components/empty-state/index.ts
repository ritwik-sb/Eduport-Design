import { define } from '../../utils/define.js';
import { EpEmptyState } from './empty-state.js';

export { EpEmptyState } from './empty-state.js';
define('ep-empty-state', EpEmptyState);

declare global {
  interface HTMLElementTagNameMap {
    'ep-empty-state': EpEmptyState;
  }
}
