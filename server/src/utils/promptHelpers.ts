import { Player } from "../types.js";
import random from "./random.js";

export const replaceNames = (raw: string, players: Player[]): string => {
  while (raw.includes("{ANYPLAYER}")) {
    raw = raw.replace(
      "{ANYPLAYER}",
      players[random(0, players.length - 1)].name
    );
  }
  return raw;
};

export const replaceBlanksWithUnderscores = (raw: string): string => {
  return raw.replace(/\{[0-9]+?\}/g, "_____");
};

export const replaceBlanksWithResponses = (
  raw: string,
  ...responses: string[]
): string => {
  const numResponses = responses.length;

  if (responses.length === 0) return raw;
  if (raw.match(/\{[0-9]+?\}/g) === null) return raw;

  for (let i = 0; i < numResponses; ++i) {
    raw = raw.replace(/\{[0-9]+?\}/, responses[i]);
  }

  return raw;
};
