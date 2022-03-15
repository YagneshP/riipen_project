
import { useState, useEffect } from "react";

export async function getServerSideProps({ query }) {
	const pid = query.pid;
	console.log("pid",pid);
	const id = Number(pid) - 1;
	const res = await fetch(`http://localhost:3002/api/product/${pid}`);
	const product = await res.json();
	console.log("products",product[id]);
	return {
	props: {
		product,
	},
	}
}

const Product = ({ product }) => {

	return (
    <>
		<h1> helllllooo.....</h1>
	
		<div className="container">
      <div className="image">
			<img src={product.image} alt="product" />
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

