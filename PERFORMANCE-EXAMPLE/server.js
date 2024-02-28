const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() < startTime + duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  //   json.stringify({ name: "John", age: 30 });
  //   json.parse('{"name":"John","age":30}');
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Timer example ${process.pid}`);
});

console.log("Running server.js now...");

if (cluster.isMaster) {
  console.log("Master has been started...");
  const NUM_WORKERS = os.cpus().length;
  console.log(NUM_WORKERS, "CPUs available.");
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started.");

  app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
  });
}
