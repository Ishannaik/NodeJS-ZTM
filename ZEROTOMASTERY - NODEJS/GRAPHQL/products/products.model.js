const products = [
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
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
