import { define } from '../../utils/define.js';
import { EpTopBar } from './top-bar.js';

export { EpTopBar } from './top-bar.js';
define('ep-top-bar', EpTopBar);

declare global {
  interface HTMLElementTagNameMap {
    'ep-top-bar': EpTopBar;
  }
}
