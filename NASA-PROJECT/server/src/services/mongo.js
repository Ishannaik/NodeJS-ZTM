const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://nasa-api:ce4AHw70N45hZDRD@nasacluster.92kmbsl.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
