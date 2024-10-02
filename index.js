const http = require("node:http");
const fs = require("node:fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  let filename = "";
  filename = q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;

  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-Type": "text/plain" });
          res.end("Internal Server Error 1 ");
        } else {
          res.writeHead(200, { "content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, { "content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
