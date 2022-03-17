/* eslint-disable */

// import useSwr from 'swr';
import ProductItem from './ProductItem';
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsContent = () => {
	// const fetcher = (url) => fetch(url).then((res) => res.json());
	// const { data, error } = useSwr('/api/products', fetcher);

console.log("Hello")
	const [items, setItems] = useState([]);
	const url = "http://localhost:3003/api/products";
	useEffect(() => {
		axios.get(url)
			.then((data) => {
				console.log("data", data);
				setItems(data.data);
			});
	}, []);

	return (
		<>
			<section className="products">
				<h1> Fragrances</h1>
				<div className="new-arrival-products">

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
				</div>
			</section>
		</>
	);
};

export default ProductsContent