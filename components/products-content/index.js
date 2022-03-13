import useSwr from 'swr';
import ProductItem from './ProductItem';
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsContent = () => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr('/api/products', fetcher);

	const [items, setItems] = useState([]);

  const url = "http://localhost:3000/api/products";
  useEffect(() => {
    axios.get(url)
    .then((data) => {
      console.log("data",data);
      setItems(data.data);
    });
  }, []);

	console.log("itmes", items);
	// console.log(Array.isArray(data));
	// const allItems =	items.map((item) => {
	// 	console.log("item", item);
	// 	return <ProductItem key={item.id} {...item} />;
	// });
  // if (error) return <div>Failed to load data</div>;
  return (
    <>
        <section className="products-list">
					<h1> Frangrances</h1>
					{/* {allItems} */}
          {items.map(item => (
            <ProductItem 
              discount={item.discount} 
              key={item.id}
              id={item.id} 
              price={item.price}
              currentPrice={item.currentPrice}
              productImage={item.image} 
              name={item.name}
							brand={item.brand} 
            />
          ))}
        </section>
    </>
  );
};
  
export default ProductsContent