import { define } from '../../utils/define.js';
import { EpAvatar } from './avatar.js';

export { EpAvatar } from './avatar.js';
define('ep-avatar', EpAvatar);

declare global {
  interface HTMLElementTagNameMap {
    'ep-avatar': EpAvatar;
  }
}
