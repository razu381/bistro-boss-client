import React from "react";

function MenuItem({ item }) {
  let { name, image, price, recipe } = item;

  return (
    <div className=" flex gap-5">
      <img
        src={image}
        alt={name}
        className="max-w-32"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div>
        <h3>{name}-----------------</h3>
        <p>{recipe}</p>
      </div>
      <h5>{price}</h5>
    </div>
  );
}

export default MenuItem;
