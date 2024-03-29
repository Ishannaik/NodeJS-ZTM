const http = require("http");

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData(); //Delete the collection in MongoDB Atlas to clean up launch data

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
    console.log(`The url is http://localhost:${PORT}...`);
  });
}

startServer();
