import React, { useContext } from "react";
import Slider from "./slider";
import CategorySlider from "./CategorySlider";
import Menu from "./Menu";
import FeaturedItems from "./FeaturedItems";
import Testimonials from "./Testimonials";
import { AuthContext } from "../../Auth/AuthProvider";

function Home() {
  return (
    <div>
      <Slider />
      <div className="lg:max-w-6xl mx-2 lg:mx-auto ">
        <CategorySlider />
        <Menu />
        <FeaturedItems />
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
