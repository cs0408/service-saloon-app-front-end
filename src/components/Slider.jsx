import React, { useState } from "react";
import {
  Container,
  Arrow,
  Wrapper,
  ImageContainer,
  InfoContainer,
  Image,
  Slide,
  Title,
  Description,
  Button,
} from "./slider_styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// dummy data
import { SlideData } from "../dummy_data/slide_dummy_data";

const Slider = () => {
  // state for slide index
  const [slideIndex, setSlideIndex] = useState(0);
  // handle click
  const handleClick = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SlideData.map((item) => {
          return (
            <Slide key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
