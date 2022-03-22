import React from "react";
import { commerce } from "../../lib/commerce";
import ProductsContent from "../products-content";

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();
  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
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
    },
  };
}

const CategoryPage = ({ products }) => {
  return <ProductsContent {...products} />;
};

export default CategoryPage;
