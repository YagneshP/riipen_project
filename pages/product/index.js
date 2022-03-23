import ProductItem from "../../components/Product/ProductItem";
import ProductsList from "../../components/Product/ProductsList";
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
          <ProductsList products={products} />
        </div>
      </section>
    </>
  );
};

export default ProductsContent;
