import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure, { axiosSecure } from "../../Hooks/useAxiosSecure";
import SharedTitle from "../shared/SharedTitle";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ManageItems() {
  let axiosSecure = useAxiosSecure();
  let { refetch, data: recipies = [] } = useQuery({
    queryKey: ["recipieItem"],
    queryFn: async () => {
      let result = await axiosSecure.get("/menu");
      return result.data;
    },
  });

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the recipie forever!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${id}`).then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              Swal.fire("Recipie deleted successfully");
              refetch();
            }
          });
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <SharedTitle
        heading="Manage Items"
        subheading="Update or delete items from here"
      />
      <div className="flex justify-between  my-10 mx-[5%]">
        <h2 className="font-bold font-2xl">
          Number of items: {recipies.length}
        </h2>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recipies.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/update-item/${item._id}`}>
                      <FaEdit size={30} color="black" />
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDelete size={30} color="#ff0000" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageItems;
