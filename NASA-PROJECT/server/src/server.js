const http = require("http");

const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

mongoose.connection.once("connected", () => {
  console.log("Mongoose connected");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

const MONGO_URL =
  "mongodb+srv://nasa-api:ce4AHw70N45hZDRD@nasacluster.92kmbsl.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

async function startServer() {
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
