import React from "react";
import { ProductsData } from "../dummy_data/slide_dummy_data";
import Product from "./Product";
import { Container } from "./products_styled";

const Products = () => {
  return (
    <Container>
      {ProductsData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
