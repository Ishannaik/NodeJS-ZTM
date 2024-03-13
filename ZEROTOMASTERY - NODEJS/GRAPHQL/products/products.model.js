const products = [
  {
    id: "redshoe",
    description: "A red shoe",
    price: 10.0,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.0,
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductByID(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductByID,
};
