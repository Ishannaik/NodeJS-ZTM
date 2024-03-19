const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});
