import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  height: 90vh;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Description = styled.p`
  margin: 20px 0;
`;

export const FilterContainer = styled.div`
  width: 75%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: 200;
`;

export const FilterTitleTypes = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterTitleTypeOption = styled.option``;

export const AddContainer = styled.div`
  width: 25%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PeopleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const AddAmount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid yellowgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 15px 10px;
  margin-top: 20px;
  background-color: yellowgreen;
  opacity: 0.7;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    color: white;
    font-weight: bold;
    opacity: 1;
  }
`;
