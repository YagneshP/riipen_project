import Link from "next/link";
import Image from "next/image";

const ProductItem = ({
  discount,
  productImage,
  id,
  brand,
  name,
  price,
  currentPrice,
  permalink,
}) => {
  return (
    <div className='new-arrival-product'>
      <div className='product__image'>
        <Link href={`/product/${permalink}`}>
          <a>
            <Image src={productImage} alt='product' width={200} height={200} />
          </a>
        </Link>

        {discount && <p className='product__discount'>{discount}%</p>}
      </div>

      <div className='product__description'>
        <h3>{brand}</h3>
        <h4>{name}</h4>
        <div
          className={
            "product__price " + (discount ? "product__price--discount" : "")
          }
        >
          <h4>{currentPrice}</h4>

          {discount && <span>${price}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
