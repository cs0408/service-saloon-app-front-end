import React from "react";
import { CategoriesData } from "../dummy_data/slide_dummy_data";
import CategoryItem from "./CategoryItem";
import { Container } from "./categories_styled";

const Categories = () => {
  return (
    <Container>
      {CategoriesData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
