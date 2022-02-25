import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./productList_styled";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Barber Services</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Services:</FilterText>
          <Select>
            <Option disabled selected>
              All Services
            </Option>
            <Option>Hair Cutting</Option>
            <Option>Massage</Option>
            <Option>Hair Dryer</Option>
            <Option>Hair Color</Option>
            <Option>Facial</Option>
          </Select>

          <Select>
            <Option disabled selected>
              All Price
            </Option>
            <Option>upto 950</Option>
            <Option>upto 850</Option>
            <Option>upto 550</Option>
            <Option>upto 330</Option>
            <Option>upto 100</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Services:</FilterText>
          <Select>
            <Option disabled selected>
              All Availables
            </Option>
            <Option>for Home</Option>
            <Option>on Shop</Option>
            <Option>for out of city</Option>
            <Option>for Marriage</Option>
            <Option>for Engagement</Option>
            <Option>for BirthDay</Option>
            <Option>for Golden Night</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
