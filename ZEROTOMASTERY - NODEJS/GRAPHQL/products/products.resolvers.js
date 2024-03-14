const productsModel = require("./products.model");
module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProductByID(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
  },
};
