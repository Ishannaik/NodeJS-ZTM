const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
