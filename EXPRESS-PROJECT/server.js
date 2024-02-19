const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Ishan Naik",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `${req.method} request received to ${req.url} Delta (${delta}ms)`
  );
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json(friends);
});

app.post("/messages", (req, res) => {
  res.send('<ul>"Updating Messages"</ul>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
});

app.use(express.json());

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});
