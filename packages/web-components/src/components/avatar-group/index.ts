import { define } from '../../utils/define.js';
import { EpAvatarGroup } from './avatar-group.js';

export { EpAvatarGroup } from './avatar-group.js';
define('ep-avatar-group', EpAvatarGroup);

declare global {
  interface HTMLElementTagNameMap {
    'ep-avatar-group': EpAvatarGroup;
  }
}
