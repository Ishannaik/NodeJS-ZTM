const fs = require("fs");
const https = require("http");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const passport = require("passport-google-oauth20");
const { Stratergy } = require("passport-google-oauth20");

const port = process.env.PORT || 3000;

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

passport.use(
  new Stratergy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  })
),
  function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);
    console.log("profile", profile);
    done(null, profile);
  };

const app = express();

app.use(helmet());
app.use(passport.initialize());

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; //TODO
  if (isLoggedIn) {
    return res.status(401).json({ error: "You are not logged in" });
  }
  next();
}

app.get("auth/google", (req, res) => {
  //TODO
  return res.send("You are logged in with Google");
});

app.get("auth/google/callback", (req, res) => {});

app.get("auth/logout", (req, res) => {});

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
