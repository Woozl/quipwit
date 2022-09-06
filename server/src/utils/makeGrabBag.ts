import { randomInt } from "./random";

/**
 * Creates a generator which randomly picks items from an array,
 * but does not pick the same item again until all other items have
 * been picked.
 * @param items array of items to be picked from
 */
export default function* makeGrabBag<T>(
  items: T[]
): Generator<NonNullable<T>, void, unknown> {
  if (items.length === 0)
    throw new Error("Length of items array must be greater than 0.");

  let done = false;

  while (!done) {
    const bag = Array.from(items);

    // Durstenfeld shuffle
    for (let i = bag.length - 1; i >= 0; --i) {
      const randomIndex = randomInt(0, i);
      const tmp = bag[randomIndex];
      bag[randomIndex] = bag[i];
      bag[i] = tmp;
    }

    while (bag.length > 0) {
      done = (yield bag.pop()!) === true ? true : false;
      if (done) break;
    }
  }
}
