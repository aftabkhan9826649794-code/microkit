const test = require("node:test");
const assert = require("node:assert/strict");
const { createServer } = require("./server");

test("serves the Developer Kit page", async () => {
  const server = createServer();

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  try {
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}`);

    assert.equal(response.status, 200);
    assert.match(await response.text(), /Developer Kit Web App/);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});
