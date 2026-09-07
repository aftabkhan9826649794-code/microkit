const http = require("node:http");

const port = Number(process.env.PORT || 3000);

function createServer() {
  return http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end("<!doctype html><html><body><h1>Developer Kit Web App</h1><p>Web server is running.</p></body></html>");
  });
}

if (require.main === module) {
  createServer().listen(port, "127.0.0.1", () => {
    console.log(`Web app running at http://127.0.0.1:${port}`);
  });
}

module.exports = { createServer };
