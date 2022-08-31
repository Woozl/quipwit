import random from "./random.js";

const createRoomCode = (length = 4): string => {
  let out = "";
  for (let i = 0; i < length; ++i) {
    out += String.fromCharCode(random(65, 90));
  }
  return out;
};

export default createRoomCode;
