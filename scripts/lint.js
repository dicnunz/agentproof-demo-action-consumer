import { readFile } from "node:fs/promises";

const source = await readFile("src/app.js", "utf8");
if (source.includes("var ")) {
  throw new Error("Do not use var in the consumer demo.");
}
if (!source.includes("aria-label")) {
  throw new Error("The consumer demo should include a named control.");
}
console.log("consumer demo lint passed");
