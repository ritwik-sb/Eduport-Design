import { define } from '../../utils/define.js';
import { EpAccordion } from './accordion.js';
import { EpAccordionItem } from './accordion-item.js';

export { EpAccordion } from './accordion.js';
export { EpAccordionItem } from './accordion-item.js';
define('ep-accordion', EpAccordion);
define('ep-accordion-item', EpAccordionItem);

declare global {
  interface HTMLElementTagNameMap {
    'ep-accordion': EpAccordion;
    'ep-accordion-item': EpAccordionItem;
  }
}
