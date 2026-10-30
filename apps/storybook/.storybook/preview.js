import '@fontsource-variable/inter';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/nunito';
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';
import '@eduportdesign/tokens/css/corners-sharp';
import '@eduportdesign/tokens/css/style-playground';
import '@eduportdesign/web-components';
import './preview.css';

/** @type {import('@storybook/web-components-vite').Preview} */
export default {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: { title: 'Theme', icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true },
    },
    style: {
      description: 'Style (playground sets data-style="playground")',
      toolbar: { title: 'Style', icon: 'paintbrush', items: ['signal', 'playground'], dynamicTitle: true },
    },
    corners: {
      description: 'Corner style',
      toolbar: { title: 'Corners', icon: 'component', items: ['soft', 'sharp'], dynamicTitle: true },
    },
    motion: {
      description: 'Motion (reduced sets data-motion="reduced")',
      toolbar: { title: 'Motion', icon: 'play', items: ['full', 'reduced'], dynamicTitle: true },
    },
    contrast: {
      description: 'Contrast (more sets data-contrast="more")',
      toolbar: { title: 'Contrast', icon: 'contrast', items: ['standard', 'more'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light', style: 'signal', corners: 'soft', motion: 'full', contrast: 'standard' },
  decorators: [
    (story, { globals }) => {
      document.documentElement.dataset.theme = globals.theme;
      document.documentElement.dataset.corners = globals.corners;
      // Signal is the default style, so it has no attribute.
      if (globals.style === 'playground') document.documentElement.dataset.style = 'playground';
      else delete document.documentElement.dataset.style;
      if (globals.motion === 'reduced') document.documentElement.dataset.motion = 'reduced';
      else delete document.documentElement.dataset.motion;
      if (globals.contrast === 'more') document.documentElement.dataset.contrast = 'more';
      else delete document.documentElement.dataset.contrast;
      return story();
    },
  ],
  parameters: {
    // Fail stories on accessibility violations.
    a11y: { test: 'error' },
    controls: { expanded: true },
  },
};
