import React from "react";

function MenuCover({ title, subtitle, img }) {
  return (
    <div
      className="hero min-h-[700px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      <div className="px-[20%] text-white  text-center bg-black opacity-70 py-20">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCover;
