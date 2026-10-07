import { define } from '../../utils/define.js';
import { EpIconButton } from './icon-button.js';

export { EpIconButton } from './icon-button.js';
define('ep-icon-button', EpIconButton);

declare global {
  interface HTMLElementTagNameMap {
    'ep-icon-button': EpIconButton;
  }
}
