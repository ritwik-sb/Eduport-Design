import '@eduportdesign/tokens/css';
import '../src/index.js';
import { afterEach } from 'vitest';

afterEach(() => {
  document.body.replaceChildren();
});
