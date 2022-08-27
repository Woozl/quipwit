import fs from "fs";
import path from "path";
import readline from "readline";
import { performance } from "perf_hooks";
import { rejects } from "assert";
import random from "./utils/random.js";
import randomLine from "./utils/randomLine.js";

const PROMPTS_PATH = path.resolve("./prompts/prompts.pg.txt");

const start = process.hrtime();
const line = await randomLine(PROMPTS_PATH);
console.log("Execution time: ", process.hrtime(start)[1] / 1000000, "ms");

console.log(line);
