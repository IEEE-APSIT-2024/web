import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../img/carousal.jpeg';
import slide2 from '../img/slide2.jpg';

const TwoSlideCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TwoSlideCarousel;
