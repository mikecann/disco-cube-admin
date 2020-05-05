export function narray(count: number) {
  return Array.from({ length: count }, (v, i) => i);
}

export function randomOne<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export const dropAlphaChannel = (data: Uint8Array) => {
  const pixelCount = data.length / 4;
  const newArray = new Uint8Array(pixelCount * 3);

  for (let i = 0; i < pixelCount; i++) {
    newArray[i * 3 + 0] = data[i * 4 + 0];
    newArray[i * 3 + 1] = data[i * 4 + 1];
    newArray[i * 3 + 2] = data[i * 4 + 2];
  }

  return newArray;
};
