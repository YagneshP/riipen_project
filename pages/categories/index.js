import React from "react";
import CategoryList from "../../components/Category/CategoryList";
import { commerce } from "../../lib/commerce";
export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  return {
    props: {
      categories,
    },
  };
}
const CategoriesPage = ({ categories }) => {
  return <CategoryList categories={categories} />;
};

export default CategoriesPage;
