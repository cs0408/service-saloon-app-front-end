import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductType,
  PriceDetail,
  ProductAmountContainer,
  ProductAmmount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./cart_styled";
import { CartData } from "../dummy_data/slide_dummy_data";
import { Add, Remove } from "@material-ui/icons";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      // <Announcement />
      <Wrapper>
        <Title>YOUR SERVICES</Title>
        <Top>
          <TopButton>CONTINUE BOOKING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {CartData.map((item) => {
              return (
                <Product key={item.id}>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.name}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item.id}
                      </ProductId>
                      <ProductType>
                        <b>Type:</b> {item.type}
                      </ProductType>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmmount>{item.items}</ProductAmmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>&#x20B9; {item.price}</ProductPrice>
                  </PriceDetail>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>&#x20B9; 456</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimate Shipping</SummaryItemText>
              <SummaryItemPrice>&#x20B9; 23.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>&#x20B9; -45.2</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>&#x20B9; 34234</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
