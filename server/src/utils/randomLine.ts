import fs from "fs";
import random from "./random.js";

/**
 * Returns a random line from a text file
 * @param path path to file to read from
 * @param readSize chunk size to use for readStream, default is 64 bytes
 * @returns a string representing the line that was returned
 */
const randomLine = (path: fs.PathLike, readSize = 64): Promise<string> => {
  return new Promise((res, rej) => {
    const getLine = (recurseDepth = 256) => {
      // choose a random byte offset to read from
      const stats = fs.statSync(path);
      const start = random(0, stats.size);

      let foundLine = false;

      // create a ReadStream object in paused mode
      // read `readSize` bytes at a time
      const readStream = fs
        .createReadStream(path, {
          encoding: "utf8",
          highWaterMark: readSize,
          start,
        })
        .on("error", (err) => rej(err))
        .pause();

      readStream
        .on("open", () => {
          // when readStream is ready, create a buffer string in memory
          let str = "";

          readStream.on("readable", () => {
            let chunk: string | null;

            // while there is still data in the stream, add the chunk
            // to the buffer string
            while ((chunk = readStream.read(readSize)) !== null) {
              str = str + chunk;

              // if the buffer string contains a complete line, resolve
              // the promise with the trimmed line
              const match = str.match(/\n.+?\r?\n/g);
              if (match !== null) {
                readStream.close();
                foundLine = true;
                res(match[0].trim());
                return;
              }

              chunk = readStream.read(readSize);
            }
          });

          readStream.on("end", () => {
            readStream.close();
            // The random byte offset picked was in the last line, so
            // a complete line couldn't be matched by the regex.
            // If this is the case, restart with a different offset
            if (!foundLine && recurseDepth > 0) {
              getLine(recurseDepth - 1);
            }

            if (recurseDepth <= 0) {
              rej(
                "Maximum recursion depth reached.\nIs the file empty, is there a newline at the beginning and end?"
              );
            }
          });
        })
        .on("error", (err) => rej(err));
    };

    getLine();
  });
};

export default randomLine;
