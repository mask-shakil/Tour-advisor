import React from "react";
import HomeCarouselSlider from "./HomeCarousel/HomeCarouselSlider";
import PopularPackages from "./PopularPackages/PopularPackages";
import ChooseUs from "./WhyChooseUs/ChooseUs";

const Home = () => {
  return (
    <div style={{ backgroundColor: "azure" }}>
      <HomeCarouselSlider />
      <PopularPackages />
      <ChooseUs />
    </div>
  );
};

export default Home;
