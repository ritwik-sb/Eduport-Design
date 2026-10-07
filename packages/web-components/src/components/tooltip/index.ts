import { define } from '../../utils/define.js';
import { EpTooltip } from './tooltip.js';

export { EpTooltip } from './tooltip.js';
define('ep-tooltip', EpTooltip);

declare global {
  interface HTMLElementTagNameMap {
    'ep-tooltip': EpTooltip;
  }
}
