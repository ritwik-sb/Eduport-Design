import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Tracks which named slots have content, so components can hide empty wrappers.
 * Pass `'[default]'` for the default slot.
 */
export class HasSlotController implements ReactiveController {
  #host: ReactiveControllerHost & HTMLElement;
  #names: string[];

  constructor(host: ReactiveControllerHost & HTMLElement, ...names: string[]) {
    this.#host = host;
    this.#names = names;
    host.addController(this);
  }

  test(name: string): boolean {
    if (name === '[default]') {
      return [...this.#host.childNodes].some(
        (node) =>
          (node.nodeType === Node.TEXT_NODE && node.textContent!.trim() !== '') ||
          (node.nodeType === Node.ELEMENT_NODE && !(node as Element).hasAttribute('slot')),
      );
    }
    return this.#host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  #onSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    if (this.#names.includes(slot.name || '[default]')) this.#host.requestUpdate();
  };

  hostConnected() {
    this.#host.shadowRoot?.addEventListener('slotchange', this.#onSlotChange);
  }

  hostDisconnected() {
    this.#host.shadowRoot?.removeEventListener('slotchange', this.#onSlotChange);
  }
}
