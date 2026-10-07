import { define } from '../../utils/define.js';
import { EpCard } from './card.js';

export { EpCard } from './card.js';
define('ep-card', EpCard);

declare global {
  interface HTMLElementTagNameMap {
    'ep-card': EpCard;
  }
}
