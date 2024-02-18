import { createServer } from "http";

const PORT = 3000;
const server = createServer();

const friends = [
  {
    id: 0,
    name: "Sir Isaac Newton",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
  {
    id: 2,
    name: "Ishan Naik",
  },
  {
    id: 3,
    name: "Nikola Tesla",
  },
  {
    id: 4,
    name: "Leonardo da Vinci",
  },
  {
    id: 5,
    name: "Galileo Galilei",
  },
  {
    id: 6,
    name: "Marie Curie",
  },
  {
    id: 7,
    name: "Stephen Hawking",
  },
  {
    id: 8,
    name: "Charles Darwin",
  },
  {
    id: 9,
    name: "Aristotle",
  },
  {
    id: 10,
    name: "Pythagoras",
  },
  {
    id: 11,
    name: "Archimedes",
  },
  {
    id: 12,
    name: "Neil deGrasse Tyson",
  },
  {
    id: 13,
    name: "Carl Sagan",
  },
  {
    id: 14,
    name: "Richard Feynman",
  },
  {
    id: 15,
    name: "Isaac Asimov",
  },
  {
    id: 16,
    name: "Bill Nye",
  },
  {
    id: 17,
    name: "Ada Lovelace",
  },
  {
    id: 18,
    name: "Alan Turing",
  },
  {
    id: 19,
    name: "Grace Hopper",
  },
  {
    id: 20,
    name: "Linus Torvalds",
  },
  {
    id: 21,
    name: "Tim Berners-Lee",
  },
  {
    id: 22,
    name: "Margaret Hamilton",
  },
  {
    id: 23,
    name: "Katherine Johnson",
  },
  {
    id: 24,
    name: "Mark Zuckerberg",
  },
  {
    id: 25,
    name: "Elon Musk",
  },
  {
    id: 26,
    name: "Jeff Bezos",
  },
  {
    id: 27,
    name: "Satya Nadella",
  },
  {
    id: 28,
    name: "Sheryl Sandberg",
  },
  {
    id: 29,
    name: "Larry Page",
  },
  {
    id: 30,
    name: "Sundar Pichai",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request:", friend);
      friends.push(JSON.parse(friend));
    });

    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Message 1</li>");
    res.write("<li>Message 2</li>");
    res.write("<li>Message 3</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end("ERROR 404");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); //http://127.0.0.1:8000 => http://localhost:8000
