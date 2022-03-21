import ProductItem from "../products-content/ProductItem";
import { commerce } from "../../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}

const ProductsContent = ({ products }) => {
  return (
    <>
      <section className='products'>
        <h1> Fragrances</h1>
        <div className='new-arrival-products'>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              permalink={product.permalink}
              price={product.price.formatted_with_symbol}
              currentPrice={product.price.formatted_with_symbol}
              productImage={product.image.url}
              name={product.name}
              brand={product.name}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsContent;
