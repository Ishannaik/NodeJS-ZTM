const fs = require("fs");
const https = require("http");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20").Strategy;
const cookieSession = require("cookie-session");

require("dotenv").config();

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

//save the user to the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// read the user from the session
passport.deserializeUser((obj, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
  //   done(null, obj);
});
const app = express();

app.use(helmet());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
  })
);
app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true;
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
    session: true,
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
  return res.send("This is a secret 42");
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
