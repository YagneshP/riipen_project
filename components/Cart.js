import Image from "next/image";
// import '../styles/cart'

const Cart = () => {
    return (
        <div>
            <main>
            <section className="padding-top-100 padding-bottom-100 pages-in chart-page">
  
            <div className="container"> 
        
        {/* <!-- Payments Steps --> */}
        <div className="shopping-cart text-center">
          <div className="cart-head">
            <ul className="row">
              {/* <!-- PRODUCTS --> */}
              <li className="col-sm-2 text-left">
                <h6>PRODUCTS</h6>
              </li>
              {/* <!-- NAME --> */}
              <li class="col-sm-4 text-left">
                <h6>NAME</h6>
              </li>
              {/* <!-- PRICE --> */}
              <li class="col-sm-2">
                <h6>PRICE</h6>
              </li>
              {/* <!-- QTY --> */}
              <li class="col-sm-1">
                <h6>QTY</h6>
              </li>
              
              {/* <!-- TOTAL PRICE --> */}
              <li class="col-sm-2">
                <h6>TOTAL</h6>
              </li>
              <li class="col-sm-1"> </li>
            </ul>
          </div>
          
          {/* <!-- Cart Details --> */}
          <ul class="row cart-details">
            <li class="col-sm-6">
              <div class="media"> 
                {/* <!-- Media Image --> */}
                <div class="media-left media-middle"> <a href="#." class="item-img"> <img class="media-object" src="images/cart-img-1.jpg" alt="" /> </a> </div>
                
                {/* <!-- Item Name --> */}
                <div class="media-body">
                  <div class="position-center-center">
                    <h5>wood chair</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </li>
            
            {/* <!-- PRICE --> */}
            <li class="col-sm-2">
              <div class="position-center-center"> <span class="price"><small>$</small>299</span> </div>
            </li>
            
            {/* <!-- QTY --> */}
            <li class="col-sm-1">
              <div class="position-center-center">
                <div class="quinty"> 
                  {/* <!-- QTY --> */}
                  <select class="selectpicker">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </li>
            
            {/* <!-- TOTAL PRICE --> */}
            <li class="col-sm-2">
              <div class="position-center-center"> <span class="price"><small>$</small>299</span> </div>
            </li>
            
            {/* <!-- REMOVE --> */}
            <li class="col-sm-1">
              <div class="position-center-center"> <a href="#."><i class="icon-close"></i></a> </div>
            </li>
          </ul>
          
        </div>
      </div>
 </section>
    
    {/* <!--======= PAGES INNER =========--> */}
    <section class="padding-top-100 padding-bottom-100 light-gray-bg shopping-cart small-cart">
      <div class="container"> 
        
        {/* <!-- SHOPPING INFORMATION --> */}
        <div class="cart-ship-info margin-top-0">
          <div class="row"> 
            
            {/* <!-- DISCOUNT CODE --> */}
            <div class="col-sm-7">
              <h6>DISCOUNT CODE</h6>
              <form>
                <input type="text" value="" placeholder="ENTER YOUR CODE IF YOU HAVE ONE"/>
                <button type="submit" class="btn btn-small btn-dark">APPLY CODE</button>
              </form>
              <div class="coupn-btn"> <a href="#." class="btn">continue shopping</a> <a href="#." class="btn">update cart</a> </div>
            </div>
            
            {/* <!-- SUB TOTAL --> */}
            <div class="col-sm-5">
              <h6>grand total</h6>
              <div class="grand-total">
                <div class="order-detail">
                  <p>WOOD CHAIR <span>$598 </span></p>
                  <p>STOOL <span>$199 </span></p>
                  <p>WOOD SPOON <span> $139</span></p>
                  
                  {/* <!-- SUB TOTAL --> */}
                  <p class="all-total">TOTAL COST <span> $998</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
            </main>
        </div>
    )
}
export default Cart;