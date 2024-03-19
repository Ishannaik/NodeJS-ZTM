const fs = require("fs");
const https = require("http");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20").Strategy;

const port = process.env.PORT || 3000;

const config = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

passport.use(
  new Strategy(config, function (accessToken, refreshToken, profile, done) {
    // This is the verifyCallback
    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);
    console.log("profile", profile);
    done(null, profile);
  })
);

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

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: false,
  }),
  (req, res) => {
    return res.send("You are logged in with Google");
  }
);
app.get("/failure", (req, res) => {
  return res.send("Failed to log in");
});
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
