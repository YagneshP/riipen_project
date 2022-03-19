import Image from "next/image";
// import '../styles/cart'

import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import GrandTotal from "./GrandTotal";
// import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Link } from "@mui/material";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/products-content")
  }
 
  console.log("Hello");

const cart = useSelector((state) => state.cart);


  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  console.log("gettotal",getTotalPrice());
  return (
   
    <div>
      <main>
        <section className="padding-top-100 padding-bottom-100 pages-in chart-page">
          <div className="main">

            {/* <!-- Payments Steps --> */}
            <div className="shopping-cart text-center">
              <div className="cart-head">
                <ul className="row">
                  {/* <!-- PRODUCTS --> */}
                  <li className="col-sm-2 text-left">
                    <h6>PRODUCTS</h6>
                  </li>
                  {/* <!-- NAME --> */}
                  <li className="col-sm-4 text-left">
                    <h6>NAME</h6>
                  </li>
                  {/* <!-- PRICE --> */}
                  <li className="col-sm-2">
                    <h6>PRICE</h6>
                  </li>
                  {/* <!-- QTY --> */}
                  <li className="col-sm-1">
                    <h6>QTY</h6>
                  </li>

                  {/* <!-- TOTAL PRICE --> */}
                  <li className="col-sm-2">
                    <h6>TOTAL</h6>
                  </li>
                  <li className="col-sm-1"> </li>
                </ul>
              </div>
              {/* Print data  */}
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  quantity={item.quantity}
                  image={"https://via.placeholder.com/90x65.png"}

                />
              ))}
              
              
            </div>
          </div>
        </section>
        {/* <!--======= PAGES INNER =========--> */}
        <section className="padding-top-100 padding-bottom-100 light-gray-bg shopping-cart small-cart">
          <div className="main">

            {/* <!-- SHOPPING INFORMATION --> */}
            <div className="cart-ship-info margin-top-0">
              <div className="row">

                {/* <!-- DISCOUNT CODE --> */}
                <div className="col-sm-7">
                  <h6>DISCOUNT CODE</h6>
                  <form>
                    <input type="text" placeholder="ENTER YOUR CODE IF YOU HAVE ONE" />
                    <button type="submit" className="btn btn-small btn-dark">APPLY CODE</button>
                  </form>
                  <div className="coupn-btn"> <a onClick={handleClick} className="btn">continue shopping</a> <a href="#." className="btn">Checkout</a> </div>
                </div>
                <div className="col-sm-5">
                  <h6>GRAND TOTAL</h6>
                  <div className="grand-total">
                    <div className="order-detail"></div>
                   
                    {  cart.map(item => (
                      <GrandTotal
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quntity={item.quantity}
                      />
                      
                    ))}

                    {/* <!-- SUB TOTAL --> */}
                    <p className="all-total">TOTAL COST <span> ${getTotalPrice()}</span></p>
                  </div>
                </div>
              </div>

            </div>
        
        </div>
      </section>


    </main>
    </div >
    
  )
}
export default Cart;