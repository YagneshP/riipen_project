import Link from "next/link";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  const mappedItems = products.slice(0, 6).map((item) => {
    return (
      <Link key={item.id} href="/product" passHref>
        <a>
          <ProductListItem
            key={item.id}
            itemName={item.price.formatted_with_symbol}
            itemDesc={item.name}
            image={item.image.url}
          />
        </a>
      </Link>
    )
  });

  if (!products) {
    return null;
  }

  return ( 
    <div className="new-arrival-products">
      {mappedItems}
    </div>
   );
}
 
export default ProductList;