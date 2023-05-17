import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const PopularSinglePackage = () => {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    fetch("PopularPackageData.json")
      .then((res) => res.json())
      .then((data) => setCarousels(data));
  }, []);
  return (
    <div>
      <div className="container mt-3">
        {carousels.map((carousel) => (
          <div>
            <h1>{carousel.sortTitle}</h1>
            <Carousel>
              <img src={img}></img>
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSinglePackage;
