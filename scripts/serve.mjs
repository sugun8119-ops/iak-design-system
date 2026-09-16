import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    const f = path.resolve(
      root,
      "." + (pathname.endsWith("/") ? pathname + "index.html" : pathname),
    );
    if (!f.startsWith(root)) throw Error();
    const real = await fs.realpath(f);
    if (!real.startsWith(root)) throw Error();
    res.setHeader(
      "Content-Type",
      types[path.extname(f)] || "text/plain; charset=utf-8",
    );
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.end(await fs.readFile(real));
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
server.on("error", (e) => {
  console.error(e.message);
  process.exitCode = 1;
});
server.listen(Number(process.env.PORT || 4175), "127.0.0.1", () =>
  console.log("IAK Library: http://127.0.0.1:" + server.address().port),
);
