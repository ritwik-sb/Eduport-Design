import { define } from '../../utils/define.js';
import { EpRadio } from './radio.js';
import { EpRadioGroup } from './radio-group.js';

export { EpRadio } from './radio.js';
export { EpRadioGroup } from './radio-group.js';
define('ep-radio', EpRadio);
define('ep-radio-group', EpRadioGroup);

declare global {
  interface HTMLElementTagNameMap {
    'ep-radio': EpRadio;
    'ep-radio-group': EpRadioGroup;
  }
}
