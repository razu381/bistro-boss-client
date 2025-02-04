import React, { useEffect, useState } from "react";
import SharedTitle from "../shared/SharedTitle";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function Testimonials() {
  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("this is ", reviews);

  return (
    <div className="mb-10">
      <SharedTitle
        heading="Testimonials"
        subheading="---What Our Clients Say---"
      />

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="py-5  px-[20%] flex flex-col justify-center items-center">
              <Rating
                className="mb-5"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft color="#000" size={50} />
              <p className="my-5">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
