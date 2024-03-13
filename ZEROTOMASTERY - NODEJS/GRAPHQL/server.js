const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync(
  path.join(__dirname, "./**/*.resolvers.js")
);

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const app = express();

app.listen(3000, () => {
  console.log("Running GraphQL Server...");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
