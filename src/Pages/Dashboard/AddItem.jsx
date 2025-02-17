import React, { useEffect, useState } from "react";
import SharedTitle from "../shared/SharedTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

let imageApi = import.meta.env.VITE_image_api;
console.log("Image api: ", imageApi);

function AddItem() {
  let axiosPublic = useAxiosPublic();
  let axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  let [recipies, setRecipies] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/menu")
      .then((res) => setRecipies(res.data))
      .catch((err) => console.log(err));
  }, []);

  function generateNewId() {
    let newMenuId = `xysadfakl3432ytr${recipies.length + 1}${Math.random()}`;
    console.log(newMenuId);
    return newMenuId;
  }

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
        _id: generateNewId(),
        name: data.name,
        recipie: data.recipie,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      axiosSecure
        .post("/menu", recipie)
        .then((res) => {
          if (res.data.insertedId) {
            console.log(res.data);
            Swal.fire(`${data.name} recipe added successfully`);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="mx-[10%]">
      <SharedTitle heading="Add Item" subheading="Add new recipie" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col w-full"
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />
        <div className="flex gap-5">
          <select
            defaultValue="default"
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
            {...register("price")}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
          />
        </div>
        <textarea
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

export default AddItem;
