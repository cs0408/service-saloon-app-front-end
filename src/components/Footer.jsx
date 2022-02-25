import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import {
  Container,
  Left,
  Right,
  Title,
  ContactItem,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
} from "./footer_styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Example</Logo>
        <Description>
          There are many facilities for Men and Women. like - Hair cutting,
          Facial, Massage etc.
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#000000">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 82, Karala, New Delhi, India
          110011
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 234 543 4562
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> services@example.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
