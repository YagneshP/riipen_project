import Link from 'next/link';

const ProductItem = ({ discount, productImage, id, brand, name, price, currentPrice }) => {

  return (
    <div className="product-item">
      <div className="product__image">

        <Link href={`/product/${id}`}>
          <a>
            <img src={productImage} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{brand}</h3>
        <h4>{name}</h4>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>${ currentPrice }</h4>

          {discount &&  
            <span>${ price }</span>
          }
        </div>
      </div>
    </div>
  );
};


export default ProductItem