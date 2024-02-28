const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() < startTime + duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  //   json.stringify({ name: "John", age: 30 });
  //   json.parse('{"name":"ohn","age":30}');
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(4000);
  res.send(`Timer example ${process.pid}`);
});

console.log("Running server.js now...");

console.log("Worker process started.");
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
