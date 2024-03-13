const orders = [
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
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
