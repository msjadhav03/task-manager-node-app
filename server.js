const app = require("./app");
const http = require("http");
const port = process.env.PORT || 4040;

const server = http.createServer(app);

server.listen(port, () => {
  console.log("Connected to the server");
});
