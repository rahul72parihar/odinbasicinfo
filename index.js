const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("home.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url == "/about") {
    fs.readFile("about.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url == "/contact") {
    fs.readFile("contact.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else {
    fs.readFile("error404.html", function (err, data) {
      if (err) throw err;
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to 8000");
});
