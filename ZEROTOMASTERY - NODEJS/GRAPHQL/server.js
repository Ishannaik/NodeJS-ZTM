const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
    description: String
    price: Float
}
`);
const root = {
  description: "Red Shoes",
  price: 123.45,
};

const app = express();

app.listen(3000, () => {
  console.log("Running GraphQL Server...");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
