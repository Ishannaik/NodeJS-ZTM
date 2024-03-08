const http = require("http");
const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/secret", (req, res) => {
  return res.send("This is a secret");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
