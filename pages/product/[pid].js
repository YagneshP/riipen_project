/* eslint-disable */

import { useState, useEffect } from "react";

export async function getServerSideProps({ query }) {
	const pid = query.pid;
	const res = await fetch(`http://localhost:3000/api/product/${pid}`);
	const product = await res.json();
	return {
	props: {
		product,
	},
	}
}

const Product = ({ product }) => {

	return (
    <>
	
		<div className="container">
      <div className="image">
			<img src={"https://dummyimage.com/700x710/967396/fff"} alt="product" />
			</div>
			<div className="description">
        <h3>{product.brand}</h3>
        <h4>{product.name}</h4>
				<h4>{product.price}</h4>
				</div>
				</div>
		</>
	)
}

export default Product





