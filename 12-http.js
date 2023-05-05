const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our history");
  }
  res.end(`
  <h1>OOPS!</h1>`);
});

server.listen(5000);
