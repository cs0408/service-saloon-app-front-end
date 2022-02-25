import React from "react";
import {
  Center,
  Container,
  Language,
  Left,
  Right,
  Wrapper,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./navbar_styled";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { NavLink } from "react-router-dom";

// Main Component
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search
              style={{
                color: "gray",
                fontSize: 18,
                marginLeft: 5,
                cursor: "pointer",
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <NavLink exact activeClassName="active_link_class" to="/">
              Example
            </NavLink>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <NavLink exact activeClassName="active_link_class" to="/register">
              REGISTER
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink exact activeClassName="active_link_class" to="/login">
              SIGN IN
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={5}>
              <NavLink
                exact
                activeClassName="active_link_class"
                to="/cart"
              >
                <ShoppingCartOutlined />
              </NavLink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
