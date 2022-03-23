import { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { useCartActions } from "../../context/Cart";
import { commerce } from "../../lib/commerce";

// Pre-render the path of each product
export async function getStaticPaths() {
  //getting all products from commercejs
  const { data: products } = await commerce.products.list();

  const paths = products.map((product) => ({
    params: { pid: product.permalink },
  }));

  return { paths, fallback: false };
}

// // Pre-render the page with data related to each product
export async function getStaticProps({ params }) {
  const { pid } = params;
  const product = await commerce.products.retrieve(pid, {
    type: "permalink",
  });
  return {
    props: {
      product,
    },
  };
}

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const { setCart } = useCartActions();
  const addItemToCart = async () => {
    alert("item added to cart");
    const payload = await commerce.cart.add(product.id, quantity);
    setCart(payload);
  };

  return (
    <>
      <div className='container-products'>
        <div className='image'>
          <img
            src={product.image.url}
            alt={product.name}
            // width={500}
            // height={500}
          />
        </div>

        <div className='details'>
          <h2 className='product-name'>{product.name}</h2>
          <p className='product-price'>{product.price.formatted_with_symbol}</p>
          <div className='item-owner'>
            <p>
              Designer :<span> ABC Art</span>
            </p>
            <p>
              Brand:<span> {product.name}</span>
            </p>
          </div>
          <div className='product-des'> {product.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            finibus ligula a scelerisque gravida. Nullam laoreet tortor ac
            maximus alique met, consectetur adipiscing elit. Vestibulum finibus
            ligula a scelerisque gravida. Nullam */}
          </div>
          <div>
            <h3>Quantity</h3>
            <select
              className='quantity'
              name='qty'
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <br /> <br />
            <h3>Colors</h3>
            <ul className='colors-shop'>
              <li className='color color1'>
                <a href='#.'></a>
              </li>
              <li className='color color2'>
                <a href='#.'></a>
              </li>
              <li className='color color3'>
                <a href='#.'></a>
              </li>
              <li className='color color4'>
                <a href='#.'></a>
              </li>
              <li className='color color5'>
                <a href='#.'></a>
              </li>
              <li className='color color6'>
                <a href='#.'></a>
              </li>
              <li className='color color7'>
                <a href='#.'></a>
              </li>
              <li className='color color8'>
                <a href='#.'></a>
              </li>
            </ul>
          </div>

      
          <br />
          <br />
          <button className='cart-btn' onClick={addItemToCart}>
            Add to cart
          </button>

          <div className='inner-info'>
            <h3>DELIVERY INFORMATION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum finibus ligula a scelerisque gravida. Nullam laoreet
              tortor ac maximus alique met, consectetur adipiscing elit.{" "}
            </p>
            {/* <h4>SHIPPING & RETURNS</h4> */}
            <h4>SHARE THIS PRODUCT</h4>

            <ul className='social_icons'>
              <li>
                <a href='#.'>
                  {" "}
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a href='#.'>
                  {" "}
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a href='#.'>
                  {" "}
                  <FiYoutube />
                </a>
              </li>
              <li>
                <a href='#.'>
                  {" "}
                  <FiDribbble />
                </a>
              </li>
              <li>
                <a href='#.'>
                  {" "}
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
