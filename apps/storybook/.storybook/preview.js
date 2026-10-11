import '@fontsource-variable/inter';
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';
import '@eduportdesign/tokens/css/corners-sharp';
import '@eduportdesign/web-components';
import './preview.css';

/** @type {import('@storybook/web-components-vite').Preview} */
export default {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: { title: 'Theme', icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true },
    },
    corners: {
      description: 'Corner style',
      toolbar: { title: 'Corners', icon: 'component', items: ['soft', 'sharp'], dynamicTitle: true },
    },
    motion: {
      description: 'Motion (reduced sets data-motion="reduced")',
      toolbar: { title: 'Motion', icon: 'play', items: ['full', 'reduced'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light', corners: 'soft', motion: 'full' },
  decorators: [
    (story, { globals }) => {
      document.documentElement.dataset.theme = globals.theme;
      document.documentElement.dataset.corners = globals.corners;
      if (globals.motion === 'reduced') document.documentElement.dataset.motion = 'reduced';
      else delete document.documentElement.dataset.motion;
      return story();
    },
  ],
  parameters: {
    // Fail stories on accessibility violations.
    a11y: { test: 'error' },
    controls: { expanded: true },
  },
};
