import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const Description = styled.p`
  margin: 20px 0;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  &:hover {
    cursor: pointer;

    transform: scale(1.1);
    transition: all 0.5s ease-in;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
