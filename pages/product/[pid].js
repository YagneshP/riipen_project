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
			<div className="details">
				<h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
					<div className="item-owner">
                <p>Designer :<span> ABC Art</span></p>
                <p>Brand:<span> {product.brand}</span></p>
          </div>
				<p className="product-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ligula a scelerisque gravida. Nullam laoreet tortor ac maximus alique met, consectetur adipiscing elit. Vestibulum finibus ligula a scelerisque gravida. Nullam</p>
				<div > 
						<h3>Quantity</h3>
								<select className="quantity">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
						<br /> 	<br />
						<h3>Colors</h3>
						<ul className="colors-shop">	
							<li className="color color1"><a href="#." ></a></li>
							<li className="color color2"><a href="#." ></a></li>
							<li className="color color3"><a href="#." ></a></li>
							<li className="color color4"><a href="#." ></a></li>
							<li className="color color5"><a href="#." ></a></li>
							<li className="color color6"><a href="#." ></a></li>
							<li className="color color7"><a href="#." ></a></li>
							<li className="color color8" ><a href="#." ></a></li>
						</ul>

				</div>
				<br/><br/><br/><br/>
				<button className="cart-btn">Add to cart</button>
			</div>
		</div>
		</>
	)
}

export default Product





