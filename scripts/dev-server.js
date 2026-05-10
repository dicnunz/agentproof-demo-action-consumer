import http from "node:http";
import { renderPage } from "../src/app.js";

const port = Number(process.env.PORT || 4124);
const host = process.env.HOST || "127.0.0.1";

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${host}:${port}`);
  if (["/", "/fixed"].includes(url.pathname)) {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(renderPage(url.pathname));
    return;
  }
  response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
  response.end("<!doctype html><html lang=\"en\"><title>Not found</title><h1>404 not found</h1></html>");
});

server.listen(port, host, () => {
  console.log(`AgentProof consumer demo listening on http://${host}:${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
