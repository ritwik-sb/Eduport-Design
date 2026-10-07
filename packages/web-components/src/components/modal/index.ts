import { define } from '../../utils/define.js';
import { EpModal } from './modal.js';

export { EpModal } from './modal.js';
define('ep-modal', EpModal);

declare global {
  interface HTMLElementTagNameMap {
    'ep-modal': EpModal;
  }
}
