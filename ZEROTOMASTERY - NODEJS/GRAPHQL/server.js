const path = require("path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync(
  path.join(__dirname, "./**/*.resolvers.js")
);

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("Running GraphQL Server...");
  });
}

startApolloServer();
