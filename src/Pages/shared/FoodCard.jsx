import React from "react";

function FoodCard({ item }) {
  let { name, recipie, image, category, price } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipie}</p>
        <p>
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="font-bold"> Price: </span> {price}
        </p>
        <div className="">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
