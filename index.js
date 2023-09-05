const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const file = fs.readFileSync("./index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
  })
  .listen(3333);
