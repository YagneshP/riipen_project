/* eslint-disable */

// import useSwr from 'swr';
import ProductItem from "../products-content/ProductItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { commerce } from "../../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}

const ProductsContent = ({ products }) => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr('/api/products', fetcher);

  // console.log("Hello");
  // const [items, setItems] = useState([]);
  // const url = "http://localhost:3000/api/products";
  // useEffect(() => {
  //   axios.get(url).then((data) => {
  //     console.log("data", data);
  //     setItems(data.data);
  //   });
  // }, []);

  return (
    <>
      <section className='products'>
        <h1> Fragrances</h1>
        <div className='new-arrival-products'>
          {products.map((product) => (
            <ProductItem
              // discount={product.discount}
              key={product.id}
              id={product.id}
              permalink={product.permalink}
              price={product.price.formatted_with_symbol}
              currentPrice={product.price.formatted_with_symbol}
              productImage={product.image.url}
              name={product.name}
              brand={product.name}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsContent;
