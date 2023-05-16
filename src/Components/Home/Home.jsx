import React from "react";
import HomeCarouselSlider from "./HomeCarousel/HomeCarouselSlider";
import PopularPackages from "./PopularPackages/PopularPackages";

const Home = () => {
  return (
    <div style={{ backgroundColor: "azure" }}>
      <HomeCarouselSlider />
      <PopularPackages />
    </div>
  );
};

export default Home;
