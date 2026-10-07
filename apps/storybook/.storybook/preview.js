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
  },
  initialGlobals: { theme: 'light', corners: 'soft' },
  decorators: [
    (story, { globals }) => {
      document.documentElement.dataset.theme = globals.theme;
      document.documentElement.dataset.corners = globals.corners;
      return story();
    },
  ],
  parameters: {
    // Fail stories on accessibility violations.
    a11y: { test: 'error' },
    controls: { expanded: true },
  },
};
