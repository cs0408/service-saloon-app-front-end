import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid gray;
`;

export const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;

export const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.button`
  padding: 10px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#78BE20" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  &:hover {
    cursor: pointer;
    background-color: #78be20;
    color: white;
    border-color: #78be20;
    font-weight: 600;
  }
`;

export const TopTexts = styled.div``;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  padding: 5px;
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductType = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  margin: 10px 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 15px 0px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #78be20;
  font-weight: bold;
  color: white;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
