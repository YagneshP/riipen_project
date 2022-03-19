/* eslint-disable */
// fake data
import carts from '../../utils/data/carts';

export default (req, res) => {

  // fake loading time
  setTimeout(() => {
    res.status(200).json(carts);
  }, 800);
};