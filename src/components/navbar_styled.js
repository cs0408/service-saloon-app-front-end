import styled from "styled-components";
import { Mobile380 } from "../responsive/responsive";

// styled components
export const Container = styled.div`
  height: 60px;
  display: flex;
  border-bottom: 1px solid lightgray;
  /* for media query */
  ${Mobile380({
    backgroundColor: "red",
  })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

// Left

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
`;

// Center

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: 900;
  color: #78be20;
  cursor: pointer;
`;

// Right

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
`;
