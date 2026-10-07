let counter = 0;

/** Returns a document-unique id for ARIA references between light-DOM elements. */
export function uniqueId(prefix = 'ep'): string {
  counter += 1;
  return `${prefix}-${counter}`;
}
