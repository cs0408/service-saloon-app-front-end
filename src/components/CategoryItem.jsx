import React from "react";
import { Container, Image, Info, Title, Button } from "./categoryItem_styled";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>BOOK NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
