const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
    products: [Product] 
    orders: [Order]
}
type Product {
  id: ID!
    description: String!
    reviews: [Review]
    price: Float
}
type Review {
    rating: Int!
    comment: String!
}
type Order{
  date: String!
  subtotal: Float!
  items: [OrderItem]
}
type OrderItem{
  product: Product!
  quantity: Int!
}
`);
const root = {
  products: [
    {
      id: "redshoe",
      description: "A red shoe",
      price: 10.0,
    },
    {
      id: "bluejean",
      description: "Blue Jeans",
      price: 50.0,
    },
  ],
  orders: [
    {
      date: "2021-01-01",
      subtotal: 60.0,
      items: [
        {
          product: {
            id: "redshoe",
            description: "A red shoe",
            price: 10.0,
          },
          quantity: 2,
        },
        {
          product: {
            id: "bluejean",
            description: "Blue Jeans",
            price: 50.0,
          },
          quantity: 1,
        },
      ],
    },
  ],
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
