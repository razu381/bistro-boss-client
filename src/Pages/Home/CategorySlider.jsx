// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import SharedTitle from "../shared/SharedTitle";

function CategorySlider() {
  return (
    <div>
      <SharedTitle
        heading="order online"
        subheading="From 11:00am to 10:00pm"
      />
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          // When the window width is >= 640px
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img src="/assets/home/slide1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/home/slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/home/slide3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/home/slide4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/home/slide5.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategorySlider;
