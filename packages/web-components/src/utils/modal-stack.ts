/**
 * Open modals, newest last. A modal dialog makes everything outside it inert, so layers that must stay usable
 * while one is open (toasts) move inside the newest modal and back out when it closes.
 */
const stack: HTMLElement[] = [];
const listeners = new Set<() => void>();

export const topModal = (): HTMLElement | null => stack.at(-1) ?? null;

export function modalOpened(modal: HTMLElement) {
  if (!stack.includes(modal)) stack.push(modal);
  listeners.forEach((listener) => listener());
}

export function modalClosed(modal: HTMLElement) {
  const index = stack.indexOf(modal);
  if (index === -1) return;
  stack.splice(index, 1);
  listeners.forEach((listener) => listener());
}

/** Calls `listener` whenever a modal opens or closes. Returns a function that stops listening. */
export function onModalChange(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
