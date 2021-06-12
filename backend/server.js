const app = require("./app");
const http = require("http");

const port = process.env.PORT || 4000;

http.createServer(port, () => {
  console.log(`server running at ${port}`);
});
