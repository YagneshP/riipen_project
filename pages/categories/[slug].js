import React from "react";
import { commerce } from "../../lib/commerce";
import ProductsContent from "../../components/Product/ProductsList";
import ProductItem from "../../components/Product/ProductItem";
import ProductsList from "../../components/Product/ProductsList";

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();
  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });
  return {
    props: {
      products,
      slug,
    },
  };
}

const CategoryPage = ({ products, slug }) => {
  console.log("Products", products);
  return (
    <section className='products'>
      <h1>{`${slug}'s Fragnance`}</h1>
      <div className='new-arrival-products'>
        <ProductsList products={products} />
      </div>
    </section>
  );
};

export default CategoryPage;
