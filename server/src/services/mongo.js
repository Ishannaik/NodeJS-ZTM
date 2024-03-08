const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL; //Rotated the MongoDB Api password to prevent unauthorized access

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
