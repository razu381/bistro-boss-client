import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthData from "./useAuthData";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

function useAxiosSecure() {
  let navigate = useNavigate();
  let { logOut } = useAuthData();

  axiosSecure.interceptors.request.use(
    function (config) {
      let token = localStorage.getItem("access-token");

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  //intercept the response
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      let status = error.response.status;
      console.log("Status error in the interceptor", status);
      if (status === 401 || status === 403) {
        //await logOut();
        //navigate("/login");
        console.log(error);
      }
    }
  );

  return axiosSecure;
}

export default useAxiosSecure;
