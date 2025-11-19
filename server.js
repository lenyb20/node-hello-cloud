const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({ message: "Hello Cloud", author: "Your Name" }));
  } else {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello Cloud from Node.js!");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
