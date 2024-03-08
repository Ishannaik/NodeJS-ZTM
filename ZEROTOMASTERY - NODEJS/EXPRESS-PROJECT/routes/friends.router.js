const express = require("express");

const friendsController = require("../controllers/friends.controller");
const friends = require("../models/friends.model");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("IP Address: ", req.ip);

  next();
});

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
