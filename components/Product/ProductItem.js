import Link from "next/link";
import Image from "next/image";

const ProductItem = ({
  discount,
  id,
  brand,
  name,
  price,
  currentPrice,
  permalink,
  image,
}) => {
  return (
    <div className='product-item'>
      <div className='product-image'>
        <Link href={`/product/${permalink}`}>
          <a>
            <Image src={image.url} alt={name} width={200} height={200} />
          </a>
        </Link>
      </div>

      <span className='brand'>{brand}</span>
      <p>{name}</p>
      <span>{price.formatted_with_code}</span>
    </div>
  );
};

export default ProductItem;
