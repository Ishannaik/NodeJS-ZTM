const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
  })
);
app.use(express.json());
app.use(planetsRouter); //CHECK THE MIDDLEWARE LECTURE AGAIN REMINDER

module.exports = app;
