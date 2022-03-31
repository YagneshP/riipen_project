import ProductItem from "./ProductItem";
import React from "react";

const ProductsList = ({ products }) => {
  if (!products) {
    return null;
  }
  return (
    <>
      {products.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default ProductsList;
