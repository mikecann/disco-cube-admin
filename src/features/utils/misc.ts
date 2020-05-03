export function narray(count: number) {
  return Array.from({ length: count }, (v, i) => i);
}

export function randomOne<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
