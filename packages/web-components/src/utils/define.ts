/** Registers a custom element once. Safe to call twice and on the server, where `customElements` doesn't exist. */
export function define(tag: string, constructor: CustomElementConstructor): void {
  if (typeof customElements === 'undefined') return;
  if (!customElements.get(tag)) customElements.define(tag, constructor);
}
