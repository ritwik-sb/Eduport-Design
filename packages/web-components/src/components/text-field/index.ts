import { define } from '../../utils/define.js';
import { EpTextField } from './text-field.js';

export { EpTextField } from './text-field.js';
export type { TextFieldType } from './text-field.js';
define('ep-text-field', EpTextField);

declare global {
  interface HTMLElementTagNameMap {
    'ep-text-field': EpTextField;
  }
}
