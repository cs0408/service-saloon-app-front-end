import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 15px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 15px;
  transform: scale(0.9);

  &:hover {
    transform: scale(1);
    transition: all 0.5s ease;
    border-radius: 5px;
  }
`;

export const Circle = styled.div``;

export const Image = styled.img`
  height: 75%;
  width: 100%;
  border-radius: 2px;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  width: 35px;
  height: 35px;
  margin: 0 5px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  border: 0.5px solid yellowgreen;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
    background-color: yellowgreen;
    color: white;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify__content};
`;

export const Currency = styled.span`
  font-weight: 100;
  font-size: 25px;
`;

export const Amount = styled.h2`
  margin: 0 10px;
  font-weight: 100;
  font-size: 30px;
`;
