import { Send } from "@material-ui/icons";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./newsletter_styled";

const Newsletter = () => {
  return (
    <Container>
      <Title>Services &amp; Booked</Title>
      <Description>Get timely updates from your favorite services.</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
