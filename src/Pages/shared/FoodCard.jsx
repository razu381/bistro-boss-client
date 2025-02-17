import React from "react";
import useAuthData from "../../Hooks/useAuthData";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

function FoodCard({ item }) {
  let { name, recipie, image, category, price } = item;
  let { user } = useAuthData();
  let navigate = useNavigate();
  let location = useLocation();
  let axiosSecure = useAxiosSecure();
  let [refetch] = useCart();

  function handleAddtoCart(item) {
    let { _id, name, image, price } = item;
    if (!user) {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    } else {
      let cartItem = {
        email: user.email,
        menuItem: _id,
        name,
        image,
        price,
      };

      axiosSecure
        .post("/cart", cartItem)
        .then((data) => {
          Swal.fire("successfully added to cart");
          refetch();
        })
        .catch((err) => console.log(err));
    }
  }
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
          <button
            className="btn btn-primary"
            onClick={() => handleAddtoCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
