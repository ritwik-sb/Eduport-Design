import { define } from '../../utils/define.js';
import { EpToast, EpToaster } from './toast.js';

export { EpToast, EpToaster, toast } from './toast.js';
export type { ToastOptions } from './toast.js';
define('ep-toast', EpToast);
define('ep-toaster', EpToaster);

declare global {
  interface HTMLElementTagNameMap {
    'ep-toast': EpToast;
    'ep-toaster': EpToaster;
  }
}
