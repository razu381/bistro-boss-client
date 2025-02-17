import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "../shared/GoogleLogin";
import useAuthData from "../../Hooks/useAuthData";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let { signUp, updateUser } = useAuthData();
  let axiosPublic = useAxiosPublic();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    signUp(user.email, user.pass)
      .then((data) => {
        updateUser(
          user.name,
          "https://avatars.githubusercontent.com/u/60482204?v=4"
        )
          .then(() => {
            axiosPublic
              .post("/users", {
                name: user.name,
                email: user.email,
              })
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire("user signed up successfully");
                  navigate("/");
                }
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  // console.log(watch("pass"));

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true, minLength: 4 })}
              />
              {errors.name?.type == "minLength" && (
                <p className="text-red-600">
                  Name should be at least 4 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600">Email field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("pass", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
                })}
              />
              {errors.pass?.type === "pattern" && (
                <p className="text-red-600 ">
                  Password must contain one uppercase, one lowercase, one digit
                  and one special character
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
            <GoogleLogin title="Sign up" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
