import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuthData from "./useAuthData";

function useCart() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthData();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });
  return [refetch, cart];
}

export default useCart;
