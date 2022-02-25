import { Checkbox } from "@mui/material";
import React from "react";
import {
  Container,
  WrapperLogo,
  Logo,
  WrapperCredential,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  AgreementTextHighlight,
  Button,
  LinkWrap,
  Link,
} from "./userCredential_styled";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={logo} />
      </WrapperLogo>
      <WrapperCredential>
        <Wrapper width={40}>
          <Title>SIGN to ZipIn</Title>
          <Form flex_direction="column">
            <Input placeholder="Email/Phone" />
            <Input placeholder="Password" />
            <LinkWrap>
              <Link href="#forgot_password"> Forgot Password </Link>
            </LinkWrap>
            <Button type="submit">Sign In</Button>
          </Form>
          <LinkWrap>
            New to Zipin ? <Link href="#Sign_up"> Create Account </Link>
          </LinkWrap>
        </Wrapper>
      </WrapperCredential>
    </Container>
  );
};

export default Login;
