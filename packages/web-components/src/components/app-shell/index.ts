import { define } from '../../utils/define.js';
import { EpAppShell } from './app-shell.js';
import '../top-bar/index.js';
import '../side-nav/index.js';
import '../page-header/index.js';

export { EpAppShell } from './app-shell.js';
define('ep-app-shell', EpAppShell);

declare global {
  interface HTMLElementTagNameMap {
    'ep-app-shell': EpAppShell;
  }
}
