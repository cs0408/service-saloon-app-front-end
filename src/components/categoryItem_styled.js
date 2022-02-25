import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  &:hover {
    transform: scale(1.1);
    margin: 0 30px;
    transition: all 1.1s ease;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  color: black;
  text-shadow: 5px 5px 5px white;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  outline: none;
  color: gray;
  border-radius: 5px;
  opacity: 0.7;
  background-color: yellowgreen;

  &:hover {
    color: white;
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
  }
`;
