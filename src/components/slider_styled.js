import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* if used - position: absolute ==> so, should be parent position:relative */
  top: 0;
  bottom: 0;
  /* left or right side - used props */
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  z-index: 4; /** This is rewuired property when be used absolute etc. or slider */
  opacity: 0.5;
  margin: auto;
  background-color: yellowgreen;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease; /** For scroll in 2 second */
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 80%;
  border-radius: 2.5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #78be20;
  color: black;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
