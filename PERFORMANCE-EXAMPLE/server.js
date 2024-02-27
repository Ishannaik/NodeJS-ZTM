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
  //   json.parse('{"name":"John","age":30}');
  res.send("Performance example");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Timer example");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
