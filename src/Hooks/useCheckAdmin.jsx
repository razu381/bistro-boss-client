import { useQuery } from "@tanstack/react-query";
import useAuthData from "./useAuthData";
import useAxiosSecure from "./useAxiosSecure";

function useCheckAdmin() {
  const { user } = useAuthData();
  const axiosSecure = useAxiosSecure();
  let { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/is-admin?email=${user?.email}`
      );
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
}

export default useCheckAdmin;
