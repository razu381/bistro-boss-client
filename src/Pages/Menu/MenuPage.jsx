import React from "react";
import MenuCover from "./MenuCover";
import SharedTitle from "../shared/SharedTitle";
import UseMenu from "../../Hooks/useMenu";
import MenuItem from "../shared/MenuItem";
import { Link } from "react-router-dom";

function MenuPage() {
  let menu = UseMenu();
  let popular = UseMenu("popular");
  let dessert = UseMenu("dessert");
  let pizza = UseMenu("pizza");
  let salads = UseMenu("salad");
  let soup = UseMenu("soup");

  return (
    <div className="-mt-24">
      <MenuCover
        title="our menu"
        subtitle="would you like to try a dish?"
        img="/assets/menu/banner3.jpg"
      />
      <SharedTitle heading="---Don't miss---" subheading="Today's offer" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-5 lg:mx-auto mt-5 mb-20">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* DESSERTS */}
      <MenuCover
        title="Desserts"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/assets/menu/dessert-bg.jpeg"
      />
      <SharedTitle heading="---Desserts---" subheading="Our Desserts" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-5 lg:mx-auto mt-5 mb-20">
        {dessert.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        to="/shop/desserts"
        className="btn btn-outline border border-black flex flex-col items-center my-10"
      >
        Order now
      </Link>
      {/* PIZZA */}
      <MenuCover
        title="Pizza"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/assets/menu/dessert-bg.jpeg"
      />
      <SharedTitle heading="--- Pizza ---" subheading="Our Pizza" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-5 lg:mx-auto mt-5 mb-20">
        {pizza.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        to="/shop/pizza"
        className="btn btn-outline border border-black flex flex-col items-center my-10"
      >
        Order now
      </Link>
      {/* Salads */}
      <MenuCover
        title="Salads"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/assets/menu/dessert-bg.jpeg"
      />
      <SharedTitle heading="--- Salads ---" subheading="Our Salads" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-5 lg:mx-auto mt-5 mb-20">
        {salads.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        to="/shop/salads"
        className="btn btn-outline border border-black flex flex-col items-center my-10"
      >
        Order now
      </Link>
      {/* Soups */}
      <MenuCover
        title="Soups"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/assets/menu/dessert-bg.jpeg"
      />
      <SharedTitle heading="--- Soups ---" subheading="Our Souops" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-5 lg:mx-auto mt-5 mb-20">
        {soup.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        to="/shop/soups"
        className="btn btn-outline border border-black flex flex-col items-center my-10"
      >
        Order now
      </Link>
    </div>
  );
}

export default MenuPage;
