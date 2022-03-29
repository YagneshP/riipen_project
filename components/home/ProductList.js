import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  const mappedItems = products.slice(0, 6).map((item) => {
    return (
      <ProductListItem
        key={item.id}
        itemName={item.price.formatted_with_symbol}
        itemDesc={item.name}
        image={item.image.url}
      />
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