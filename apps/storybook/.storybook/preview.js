import '@fontsource-variable/onest';
import '@fontsource-variable/gabarito';
import '@fontsource-variable/nunito';
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';
import '@eduportdesign/tokens/css/corners-sharp';
import '@eduportdesign/tokens/css/palette-sage';
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
    palette: {
      description: 'Palette of the Signal style (sage sets data-palette="sage")',
      toolbar: { title: 'Palette', icon: 'paintbrush', items: ['clay', 'sage'], dynamicTitle: true },
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
  initialGlobals: { theme: 'light', style: 'signal', palette: 'clay', corners: 'soft', motion: 'full', contrast: 'standard' },
  decorators: [
    (story, { globals }) => {
      document.documentElement.dataset.theme = globals.theme;
      document.documentElement.dataset.corners = globals.corners;
      // Signal is the default style, so it has no attribute.
      if (globals.style === 'playground') document.documentElement.dataset.style = 'playground';
      else delete document.documentElement.dataset.style;
      // Clay is the default palette, so it has no attribute.
      if (globals.palette === 'sage') document.documentElement.dataset.palette = 'sage';
      else delete document.documentElement.dataset.palette;
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
