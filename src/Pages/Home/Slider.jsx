import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div className="-my-20 mb-20 z-0 relative ">
      <Carousel showIndicators={true}>
        <div>
          <img src="/assets/home/01.jpg" />
        </div>
        <div>
          <img src="/assets/home/02.jpg" />
        </div>
        <div>
          <img src="/assets/home/03.png" />
        </div>
        <div>
          <img src="/assets/home/04.jpg" />
        </div>
        <div>
          <img src="/assets/home/05.png" />
        </div>
        <div>
          <img src="/assets/home/06.png" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
