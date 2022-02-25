import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterTitleTypes,
  FilterTitleTypeOption,
  AddContainer,
  PeopleContainer,
  AddAmount,
  Button,
} from "./singleProduct_styled";
import { Amount, Currency, Price } from "../components/product_styled";
import img122 from "../assets/img1.jpg";
import { Add, Remove } from "@material-ui/icons";

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={img122} />
        </ImageContainer>
        <InfoContainer>
          <Title>Hair Cutting</Title>
          <Description>
            With minimum cost. With minimum cost. With minimum cost. With
            minimum cost. With minimum cost. With minimum cost. With minimum
            cost. With minimum cost. With minimum cost. With minimum cost.
          </Description>
          <Price justify__content="left">
            <Currency>&#x20B9;</Currency>
            <Amount>345</Amount>
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Price</FilterTitle>
              <FilterTitleTypes>
                <FilterTitleTypeOption>upto 950</FilterTitleTypeOption>
                <FilterTitleTypeOption>upto 850</FilterTitleTypeOption>
                <FilterTitleTypeOption>upto 550</FilterTitleTypeOption>
                <FilterTitleTypeOption>upto 330</FilterTitleTypeOption>
                <FilterTitleTypeOption>upto 100</FilterTitleTypeOption>
              </FilterTitleTypes>
            </Filter>
            <Filter>
              <FilterTitle>Types of Service</FilterTitle>
              <FilterTitleTypes>
                <FilterTitleTypeOption>Murga Chhap</FilterTitleTypeOption>
                <FilterTitleTypeOption>Katora Cutting</FilterTitleTypeOption>
                <FilterTitleTypeOption>Murga Hair</FilterTitleTypeOption>
                <FilterTitleTypeOption>Medak Uchkau</FilterTitleTypeOption>
              </FilterTitleTypes>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <PeopleContainer>
              <Remove style={{ cursor: "pointer" }} />
              <AddAmount>1</AddAmount>
              <Add style={{ cursor: "pointer" }} />
            </PeopleContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
