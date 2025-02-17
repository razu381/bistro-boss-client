import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete, MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";

function AllUsers() {
  let axiosSecure = useAxiosSecure();

  const { data = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      let res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //console.log(data);

  function handleDelete(email) {
    console.log(email);
    axiosSecure
      .delete(`/users/${email}`)
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => console.log(err));
  }

  function handleAdmin(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "User will be admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${id}`)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }
    });
  }

  return (
    <div>
      <div className="flex justify-between  my-10 mx-[5%]">
        <h2 className="font-bold font-2xl">Number of users: {data?.length}</h2>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {item?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <MdOutlineAdminPanelSettings
                        size={30}
                        color="green"
                        onClick={() => handleAdmin(item._id)}
                      />
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(item.email)}
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
export default AllUsers;
