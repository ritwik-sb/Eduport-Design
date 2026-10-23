import { define } from '../../utils/define.js';
import { EpIconTile } from './icon-tile.js';

export { EpIconTile } from './icon-tile.js';
define('ep-icon-tile', EpIconTile);

declare global {
  interface HTMLElementTagNameMap {
    'ep-icon-tile': EpIconTile;
  }
}
