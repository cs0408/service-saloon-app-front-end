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

const Register = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={logo} />
      </WrapperLogo>
      <WrapperCredential>
        <Wrapper width={80}>
          <Title>SIGN UP</Title>
          <Form>
            <Input placeholder="Enter First Name" />
            <Input placeholder="Enter Last Name" />
            <Input placeholder="Enter Email" />
            <Input placeholder="Enter Phone" />
            <Input placeholder="Enter Password" />
            <Input placeholder="Enter Confirm Password" />
            <Agreement>
              <Checkbox />I understand and agree to the
              <AgreementTextHighlight>
                Term &amp; Condition
              </AgreementTextHighlight>
              of use and
              <AgreementTextHighlight>Privacy Policy.</AgreementTextHighlight>
            </Agreement>
            <Button type="submit">CREATE ACCOUNT</Button>
          </Form>
          <LinkWrap>
            Already Registered ? <Link href="#Sign_in"> Sign In </Link>
          </LinkWrap>
        </Wrapper>
      </WrapperCredential>
    </Container>
  );
};

export default Register;
