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
    <div className='product-item'>
      <div className='product-image'>
        <Link href={`/product/${permalink}`}>
          <a>
            <Image src={productImage} alt='product' width={270} height={352} />
          </a>
        </Link>
      </div>

      <span className="brand">{brand}</span>
      <p>{name}</p>
      <span>{currentPrice}</span>
    </div>
  
  );
};

export default ProductItem;
