import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import {
  Container,
  Icon,
  Image,
  Info,
  Price,
  Currency,
  Amount,
} from "./product_styled";

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Price justify__content="center">
        <Currency>&#x20B9;</Currency>
        <Amount>{item.price}</Amount>
      </Price>
    </Container>
  );
};

export default Product;
