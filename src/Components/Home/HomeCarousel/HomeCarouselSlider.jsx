import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const HomeCarouselSlider = () => {
  const [carousels, setCarousel] = useState([]);
  useEffect(() => {
    fetch("HomeCarouselData.json")
      .then((Response) => Response.json())
      .then((data) => setCarousel(data));
  }, []);
  return (
    <div>
      <Carousel>
        {carousels.map((homeCarousel) => (
          <Carousel.Item>
            <img
              style={{ maxHeight: "370px" }}
              className="d-block w-100"
              src={homeCarousel.img}
            />
            <Carousel.Caption>
              <h3>{homeCarousel.title}</h3>
              <p>{homeCarousel.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarouselSlider;
