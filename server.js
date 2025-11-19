const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello bebeb! You are the best husband in the world!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
