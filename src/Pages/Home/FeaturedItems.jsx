import React from "react";
import SharedTitle from "../shared/SharedTitle";

function FeaturedItems() {
  return (
    <div className="py-10 lg:py-20 featured-item text-white px-5 mt-10">
      <SharedTitle
        heading="Featured from our menu"
        subheading="--- check it out ---"
      />
      <div className="grid grid-cols-2 gap-10 items-center">
        <img src="assets/home/featured.jpg" alt="" />
        <div className="text-white">
          <h5>March 20, 2023</h5>
          <h2 className="font-bold text-2xl">Where can i get some? </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-white text-white mt-2">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItems;
