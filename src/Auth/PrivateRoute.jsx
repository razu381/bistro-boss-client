import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useParams } from "react-router-dom";

function PrivateRoute({ children }) {
  let { user, loading } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 lg:py-20">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
}
export default PrivateRoute;
