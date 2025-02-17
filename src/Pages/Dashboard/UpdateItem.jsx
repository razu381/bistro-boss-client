import React, { useEffect, useState } from "react";
import SharedTitle from "../shared/SharedTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

let imageApi = import.meta.env.VITE_image_api;
console.log("Image api: ", imageApi);

function updateItem() {
  let axiosPublic = useAxiosPublic();
  let axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  let { _id, name, price, recipe, category } = useLoaderData();
  console.log(recipe);

  const onSubmit = async (data) => {
    let imageLink;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    let res = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${imageApi}`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    if (res.data.success) {
      let recipie = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      axiosSecure
        .patch(`/menu/${_id}`, recipie)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire(`${data.name} recipe updated successfully`);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="mx-[10%]">
      <SharedTitle heading="Update Item" subheading="Update recipie" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col w-full"
      >
        <input
          defaultValue={name}
          {...register("name")}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />
        <div className="flex gap-5">
          <select
            defaultValue={category}
            {...register("category")}
            className="select select-primary w-full "
          >
            <option disabled value="default">
              Select Category
            </option>
            <option>Dessert</option>
            <option>Salad</option>
            <option>Pizza </option>
            <option>Soups</option>
            <option>Drink</option>
          </select>
          <input
            defaultValue={price}
            {...register("price")}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
          />
        </div>
        <textarea
          defaultValue={recipe}
          {...register("recipe")}
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full "
        ></textarea>
        <input
          {...register("image")}
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-active btn-primary"
        />
      </form>
    </div>
  );
}

export default updateItem;
