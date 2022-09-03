/**
 * @returns random integer between `min` (inclusive) and `max` (inclusive)
 */
export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @returns random integer between `min` (inclusive) and `max` (exclusive)
 */
export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;
