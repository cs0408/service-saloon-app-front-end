import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  margin: 20px 0;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;
