import assert from "node:assert/strict";
import { renderPage } from "../src/app.js";

assert.match(renderPage("/"), /AgentProof consumer demo/);
assert.match(renderPage("/fixed"), /Fixed fixture/);
assert.match(renderPage("/fixed"), /aria-label="Run local proof"/);
console.log("consumer demo tests passed");
