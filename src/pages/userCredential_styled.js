import styled from "styled-components";
import { ScaleUpAnimation } from "../animations/scale_up_animation";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #78be20;
  display: flex;
  align-items: center;
`;

export const WrapperLogo = styled.div`
  flex: 1;
  display: block;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 173px;
  height: 173px;
  /* scale-up animation */
  animation-name: ${ScaleUpAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

export const WrapperCredential = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width}%;
  padding: 20px 30px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 5px 5px 25px rgba(255, 255, 255, 0.9),
    8px 8px 25px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-size: 34px;
  line-height: 39px;
  font-weight: 600;
  color: #78be20;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flex_direction};
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  opacity: 0.7;

  &:focus {
    opacity: 1;
  }
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 10px 0px 0px;
  padding: 0 10px;
`;

export const AgreementTextHighlight = styled.b`
  color: #78be20;
  margin: 0px 5px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 50%;
  margin: 20px 0px 0px;
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  background-color: #78be20;
  color: white;
  cursor: pointer;
`;

export const LinkWrap = styled.div`
  margin: 20px 0px 0px;
  padding: 0 5px;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  color: #78be20;
  margin: 0 5px;
`;
