import { FcGoogle } from "react-icons/fc";
import useAuthData from "../../Hooks/useAuthData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

function GoogleLogin({ title }) {
  let { googleAuth } = useAuthData();
  let navigate = useNavigate();
  let axiosPublic = useAxiosPublic();

  function handleGoogle() {
    googleAuth()
      .then((data) => {
        axiosPublic
          .post("/users", {
            name: data.user.displayName,
            email: data.user.email,
          })
          .then((data) => {
            console.log(data.data);
          })
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="btn btn-outline border-yellow-600" onClick={handleGoogle}>
      <FcGoogle /> {title} with google
    </div>
  );
}

export default GoogleLogin;
