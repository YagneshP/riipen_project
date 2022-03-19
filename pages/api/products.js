/* eslint-disable */
// fake data
import products from '../../utils/data/products';

export function getProducts() {
  return products;
}

export default (req, res) => {

  // fake loading time
  // setTimeout(() => {
  //   res.status(200).json(products);
  // }, 800);
  const products = getProducts();
    res.status(200).json(products);
};