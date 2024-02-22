const http = require("http");

const PORT = process.env.PORT || 8000;

const app = require("./app");

const planetsModel = require("./models/planets.model");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
