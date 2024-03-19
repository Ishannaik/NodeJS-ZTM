const fs = require("fs");
const https = require("http");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const port = process.env.PORT || 3000;

const app = express();

app.use(helmet());

function checkLoggedIn(req, res, next) => {
  const isLoggedIn = true; //TODO
  if (isLoggedIn) {
    return res.status(401).json({ error: "You are not logged in" });
  }
  next();
};

app.get("/secret", checkLoggedIn, (req, res) => {
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
