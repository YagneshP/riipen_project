import Link from "next/link";
import Image from "next/image";

const ProductItem = ({
  discount,
  // productImage,
  id,
  brand,
  name,
  price,
  currentPrice,
  permalink,
  image,
}) => {
  console.log();
  return (
    <div className='product-item'>
      <div className='product-image'>
        <Link href={`/product/${permalink}`}>
          <a>
            <Image src={image.url} alt='product' width={200} height={200} />
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
