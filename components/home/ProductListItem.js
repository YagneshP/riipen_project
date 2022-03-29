import Image from "next/image";

const ProductListItem = ({ itemName, itemPrice, image }) => {
  return ( 
    <div className="new-arrival-product">
      <Image 
        src= {image}
        alt="Logo"
        width="360px"
        height="360px"
      />
      <p className="item-name">{itemName}</p>
      <p className="item-price">{itemPrice}</p>
    </div>
   );
}
 
export default ProductListItem;