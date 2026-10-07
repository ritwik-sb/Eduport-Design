import { define } from '../../utils/define.js';
import { EpTab, EpTabPanel } from './tab.js';
import { EpTabs } from './tabs.js';

export { EpTab, EpTabPanel } from './tab.js';
export { EpTabs } from './tabs.js';
define('ep-tab', EpTab);
define('ep-tab-panel', EpTabPanel);
define('ep-tabs', EpTabs);

declare global {
  interface HTMLElementTagNameMap {
    'ep-tab': EpTab;
    'ep-tab-panel': EpTabPanel;
    'ep-tabs': EpTabs;
  }
}
