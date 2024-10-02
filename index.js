const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

console.log(path.join(__dirname, "index.html"));

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "content-Type": "text/plain" });
        res.end("Internal Server Error 1 ");
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "content-Type": "text/plain" });
        res.end("Internal Server Error 2 ");
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(path.join(__dirname, "contact-me.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "content-Type": "text/plain" });
        res.end("Internal Server Error 3 ");
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    fs.readFile(path.join(__dirname, "contac.html"), (err, data) => {
      if (err) {
        res.writeHead(404, { "content-Type": "text/plain" });
        res.end("Internal Server Error  ");
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

server.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
