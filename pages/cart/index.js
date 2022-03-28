import CartItem from "./CartItem";
import GrandTotal from "./GrandTotal";
import { useRouter } from "next/router";
import { useCart } from "../../context/Cart";
import Link from "next/link";
const Cart = () => {
  const router = useRouter();
  const { line_items, subtotal } = useCart();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/products-content");
  };
  return (
    <div>
      <main>
        <section className='padding-top-100 padding-bottom-100 pages-in chart-page'>
          <div className='main'>
            {/* <!-- Payments Steps --> */}
            <div className='shopping-cart text-center'>
              <div className='cart-head'>
                <ul className='row'>
                  {/* <!-- PRODUCTS --> */}
                  <li className='col-sm-2 text-left'>
                    <h6>PRODUCTS</h6>
                  </li>
                  {/* <!-- NAME --> */}
                  <li className='col-sm-4 text-left'>
                    <h6>NAME</h6>
                  </li>
                  {/* <!-- PRICE --> */}
                  <li className='col-sm-2'>
                    <h6>PRICE</h6>
                  </li>
                  {/* <!-- QTY --> */}
                  <li className='col-sm-1'>
                    <h6>QTY</h6>
                  </li>

                  {/* <!-- TOTAL PRICE --> */}
                  <li className='col-sm-2'>
                    <h6>TOTAL</h6>
                  </li>
                  <li className='col-sm-1'> </li>
                </ul>
              </div>
              {/* Print data  */}
              {line_items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  line_total={item.line_total.formatted_with_symbol}
                  price={item.price.formatted_with_symbol}
                  quantity={item.quantity}
                  image={item.image.url}
                />
              ))}
            </div>
          </div>
        </section>
        {/* <!--======= PAGES INNER =========--> */}
        <section className='padding-top-100 padding-bottom-100 light-gray-bg shopping-cart small-cart'>
          <div className='main'>
            {/* <!-- SHOPPING INFORMATION --> */}
            <div className='cart-ship-info margin-top-0'>
              <div className='row'>
                {/* <!-- DISCOUNT CODE --> */}
                <div className='col-md-7'>
                  <h6>DISCOUNT CODE</h6>
                  <form className="cartform">
                    <input
                      type='text'
                      placeholder='ENTER YOUR CODE IF YOU HAVE ONE'
                    />
                    <button type='submit' className='btn btn-small btn-dark'>
                      APPLY CODE
                    </button>
                  </form>
                  <div className='coupn-btn'>
                    {" "}
                    <a onClick={handleClick} className='btn shop_action'>
                      continue shopping
                    </a>{" "}
                    <Link href='/checkout'>
                      <a className='btn shop_action'>Checkout</a>
                    </Link>
                  </div>
                </div>
                <div className='col-md-5'>
                  <h6>GRAND TOTAL</h6>
                  <div className='grand-total'>
                    <div className='order-detail'></div>

                    {line_items.map((item) => (
                      <GrandTotal
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        line_total={item.line_total.formatted_with_symbol}
                      />
                    ))}

                    {/* <!-- SUB TOTAL --> */}
                    <p className='all-total'>
                      TOTAL COST <span> {subtotal.formatted_with_symbol}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Cart;







