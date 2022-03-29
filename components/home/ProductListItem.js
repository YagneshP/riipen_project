import Image from "next/image";

const ProductListItem = ({ itemName, itemDesc, image }) => {
  return ( 
    <div className="new-arrival-product">
      <Image 
        src= {image}
        alt="Logo"
        width="360px"
        height="360px"
      />
      <p>{itemDesc}</p>
      <a>{itemName}</a>
    </div>
   );
}
 
export default ProductListItem;