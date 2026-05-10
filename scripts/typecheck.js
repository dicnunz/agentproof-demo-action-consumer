import { renderPage } from "../src/app.js";

if (typeof renderPage("/") !== "string") {
  throw new Error("renderPage must return HTML.");
}
console.log("consumer demo typecheck passed");
