import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 12px;
  color: white;
`;

export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 12px;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  margin-top: 10px;
  background-color: white;
  display: flex;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px 20px;
  font-weight: 900;
  color: lightgrey;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  width: 30%;
  border: none;
  outline: none;
  background: yellowgreen;

  &:hover {
    cursor: pointer;
  }
`;
