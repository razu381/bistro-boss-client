import React from "react";
import useCart from "../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

function MyCart() {
  let [refetch, cart] = useCart();
  let total = 0;
  if (cart.length > 0) {
    total = cart.reduce((sum, curr) => sum + curr.price, 0);
  }
  let axiosSecure = useAxiosSecure();

  function handleDelete(id) {
    axiosSecure
      .delete(`/cart/${id}`)
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="flex justify-between  my-10 mx-[5%]">
        <h2 className="font-bold font-2xl">Number of items: {cart.length}</h2>

        <h2 className="font-bold font-2xl">Total price: {total}</h2>

        {cart ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled>Pay</button>
        )}
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item) => (
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
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDelete size={30} color="#ff0000" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default MyCart;
