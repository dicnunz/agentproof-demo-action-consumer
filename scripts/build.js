import { mkdir, writeFile } from "node:fs/promises";
import { renderPage } from "../src/app.js";

await mkdir("dist", { recursive: true });
await writeFile("dist/index.html", renderPage("/"), "utf8");
await writeFile("dist/fixed.html", renderPage("/fixed"), "utf8");
console.log("consumer demo build complete");
