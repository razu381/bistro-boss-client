import React, { useState } from "react";
import MenuCover from "../Menu/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/useMenu";
import FoodCard from "../shared/FoodCard";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function ShopPage() {
  let categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  let selectedCategory = useParams();
  let indexOfSelected = categories.indexOf(selectedCategory.category);
  let [tabIndex, setTabIndex] = useState(indexOfSelected);

  let menu = UseMenu();
  let drinks = UseMenu("drinks");
  let dessert = UseMenu("dessert");
  let pizza = UseMenu("pizza");
  let salads = UseMenu("salad");
  let soup = UseMenu("soup");

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="-mt-20">
      <MenuCover
        title="Our Shop"
        subtitle={"Oder from our vast shop and get it delivered instantly"}
        img="/assets/shop/banner2.jpg"
      />

      <div className="my-10 flex flex-col items-center justify-center w-full">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="tab tabs-bordered">
            <Tab className="tab">Salads</Tab>
            <Tab className="tab">Piza</Tab>
            <Tab className="tab">Soups</Tab>
            <Tab className="tab">Dessert</Tab>
            <Tab className="tab">Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salads.map((item) => (
                <FoodCard item={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizza.map((item) => (
                <FoodCard item={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soup.map((item) => (
                <FoodCard item={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dessert.map((item) => (
                <FoodCard item={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drinks.map((item) => (
                <FoodCard item={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default ShopPage;
