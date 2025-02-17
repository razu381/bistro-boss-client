import React from "react";
import { useLocation } from "react-router-dom";
import useAuthData from "../Hooks/useAuthData";
import useCheckAdmin from "../Hooks/useCheckAdmin";

function AdminRoute({ children }) {
  let { user, loading } = useAuthData();
  let [isAdmin, isAdminLoading] = useCheckAdmin();
  let location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col items-center py-10 lg:py-20">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
}

export default AdminRoute;
