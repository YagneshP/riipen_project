import { useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import ProductListItem from "./ProductListItem";

const ProductCarousel = ({ products }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  
  const chevronWidth = 40;
  const wrapperStyle = `
    "padding": "0 ${chevronWidth}px", 
    "max-width": "1200px", 
    "margin": "0 auto",
  `;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 767 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const mappedItems = products.map((item) => {
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
    <div className="product-carousel" style={{ wrapperStyle }}>
      <Carousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        responsive={responsive}
        infinite={true}
      >
        {mappedItems}
      </Carousel>
    </div>
   );
}
 
export default ProductCarousel;