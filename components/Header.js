import Head from 'next/head';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header-1 light-head">
    <div className="sticky">
      <div className="container"> 
        
        {/* <!-- Logo --> */}
        {/* <div className="logo"> <a href="index.html"><Image className="img-responsive" src="images/logo-1.png" alt="" /></a> </div> */}
        <nav className="navbar ownmenu">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-open-btn" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"><i className="fa fa-navicon"></i></span> </button>
          </div>
          
           {/* <!-- NAV --> */}
          <div className="collapse navbar-collapse" id="nav-open-btn">
            <ul className="nav">
              <li className="dropdown active"> <a href="#." className="dropdown-toggle" data-toggle="dropdown">Home</a>
                <ul className="dropdown-menu">
                  <li> <a href="index.html">Index Default</a> </li>
                  <li> <a href="index-1.html">Index 2</a> </li>
                  <li> <a href="index-2.html">Index 3</a></li>
                  <li> <a href="index-header-1.html">Index Header 1</a></li>
                  <li> <a href="index-header-2.html">Index Header 2</a></li>
                  <li> <a href="index-header-3.html">Index Header 3</a></li>
                  <li> <a href="index-header-4.html">Index Header 4</a></li>
                </ul>
              </li>
              <li className="dropdown"> <a href="#." className="dropdown-toggle" data-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li> <a href="shop_01.html">Shop 01 </a> </li>
                  <li> <a href="shop_02.html">Shop 02</a> </li>
                  <li> <a href="shop_03.html">Shop 03 </a> </li>
                  <li> <a href="shop_04.html">Shop 04 </a> </li>
                  <li> <a href="product-detail_01.html">Product Detail 01</a> </li>
                  <li> <a href="product-detail_02.html">Product Detail 02</a> </li>
                  <li> <a href="shopping-cart.html">Shopping Cart</a> </li>
                  <li> <a href="checkout.html">Checkout</a> </li>
                  <li> <a href="about-us_01.html">About 01</a> </li>
                  <li> <a href="about-us_02.html">About 02</a> </li>
                  <li> <a href="contact.html">Contact</a> </li>
                  <li> <a href="blog-list_01.html">Blog List 01</a> </li>
                  <li> <a href="blog-list_02.html">Blog List 02</a> </li>
                  <li> <a href="blog-list_03.html">Blog List 03 </a> </li>
                  <li> <a href="blog-detail_01.html">Blog Detail 01 </a> </li>
                </ul>
              </li>
              <li> <a href="about-us_01.html">About </a> </li>
              
              {/* <!-- MEGA MENU --> */}
              <li className="dropdown megamenu"> <a href="#." className="dropdown-toggle" data-toggle="dropdown">store</a>
                <div className="dropdown-menu">
                  <div className="row"> 
                    
                    {/* <!-- Shop Pages --> */}
                    <div className="col-md-3">
                      <h6>Shop Pages</h6>
                      <ul>
                        <li> <a href="shop_01.html">Shop 01 </a> </li>
                        <li> <a href="shop_02.html">Shop 02</a> </li>
                        <li> <a href="shop_03.html">Shop 03 </a> </li>
                        <li> <a href="shop_04.html">Shop 04 </a> </li>
                        <li> <a href="product-detail_01.html">Product Detail 01</a> </li>
                        <li> <a href="product-detail_02.html">Product Detail 02</a> </li>
                        <li> <a href="shopping-cart.html">Shopping Cart</a> </li>
                        <li> <a href="checkout.html">Checkout</a> </li>
                      </ul>
                    </div>
                    
                    {/* <!-- TOp Rate Products --> */}
                    <div className="col-md-4">
                      <h6>TOp Rate Products</h6>
                      <div className="top-rated">
                        <ul>
                          <li>
                            <div className="media-left">
                              {/* <div className="cart-img"> <a href="#"> <Image className="media-object img-responsive" src="images/cart-img-1.jpg" alt="..." /> </a> </div> */}
                            </div>
                            <div className="media-body">

                              <h6 className="media-heading">WOOD CHAIR</h6>
                              <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                              <span className="price">129.00 USD</span> </div>
                          </li>
                          <li>
                            <div className="media-left">
                              {/* <div className="cart-img"> <a href="#"> <Image className="media-object img-responsive" src="images/cart-img-2.jpg" alt="..." /> </a> </div> */}
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">STOOL</h6>
                              <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                              <span className="price">129.00 USD</span> </div>
                          </li>
                          <li>
                            <div className="media-left">
                              {/* <div className="cart-img"> <a href="#"> <Image className="media-object img-responsive" src="images/cart-img-3.jpg" alt="..." /> </a> </div> */}
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading">WOOD SPOON</h6>
                              <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                              <span className="price">129.00 USD</span> </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* <!-- New Arrival --> */}
                    <div className="col-md-5">
                      <h5>NEW ARRIVAL 2016 <span>(Best Collection)</span></h5>
                      {/* <Image className="nav-img" src="images/nav-img.png" alt="" /> */}
                      <p>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit. <br />
                        Donec faucibus maximus<br />
                        vehicula.</p>
                      <a href="#." className="btn btn-small btn-round">SHOP NOW</a> </div>
                  </div>
                </div>
              </li>
              <li> <a href="contact.html"> contact</a> </li>
            </ul>
          </div>
          
          {/* <!-- Nav Right --> */}
          <div className="nav-right">
            <ul className="navbar-right">
              
              {/* <!-- USER INFO --> */}
              <li className="dropdown user-acc"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" ><i className="icon-user"></i> </a>
                <ul className="dropdown-menu">
                  <li>
                    <h6>HELLO! Jhon Smith</h6>
                  </li>
                  <li><a href="#">MY CART</a></li>
                  <li><a href="#">ACCOUNT INFO</a></li>
                  <li><a href="#">LOG OUT</a></li>
                </ul>
              </li>
              
              {/* <!-- USER BASKET --> */}
              <li className="dropdown user-basket"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><i className="icon-basket-loaded"></i> </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="media-left">
                      {/* <div className="cart-img"> <a href="#"> <Image className="media-object img-responsive" src="images/cart-img-1.jpg" alt="..." /> </a> </div> */}
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">WOOD CHAIR</h6>
                      <span className="price">129.00 USD</span> <span className="qty">QTY: 01</span> </div>
                  </li>
                  <li>
                    <div className="media-left">
                      {/* <div className="cart-img"> <a href="#"> <Image className="media-object img-responsive" src="images/cart-img-2.jpg" alt="..." /> </a> </div> */}
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">WOOD STOOL</h6>
                      <span className="price">129.00 USD</span> <span className="qty">QTY: 01</span> </div>
                  </li>
                  <li>
                    <h5 className="text-center">SUBTOTAL: 258.00 USD</h5>
                  </li>
                  <li className="margin-0">
                    <div className="row">
                      <div className="col-xs-6"> <a href="shopping-cart.html" className="btn">VIEW CART</a></div>
                      <div className="col-xs-6 "> <a href="checkout.html" className="btn">CHECK OUT</a></div>
                    </div>
                  </li>
                </ul>
              </li>
              
              {/* <!-- SEARCH BAR --> */}
              <li className="dropdown"> <a href="javascript:void(0);" className="search-open"><i className=" icon-magnifier"></i></a>
                <div className="search-inside animated bounceInUp"> <i className="icon-close search-close"></i>
                  <div className="search-overlay"></div>
                  <div className="position-center-center">
                    <div className="search">
                      <form>
                        <input type="search" placeholder="Search Shop" />
                        <button type="submit"><i className="icon-check"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  );
};

export default Header;
