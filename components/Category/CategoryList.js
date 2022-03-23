import Link from "next/link";
import React from "react";
import Category from "./Category";

const CategoryList = ({ categories }) => {
  if (!categories) {
    return null;
  }
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/categories/${category.slug}`}>
            <a>
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
