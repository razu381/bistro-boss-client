import React from "react";
import isAdmin from "../../Hooks/useCheckAdmin";
import useAuthData from "../../Hooks/useAuthData";
import useCheckAdmin from "../../Hooks/useCheckAdmin";

function UserHome() {
  let { user } = useAuthData();
  let { isAdmin } = useCheckAdmin();

  return (
    <div>
      <h2 className="text-2xl">Welcome to our dashboard {user?.displayName}</h2>
    </div>
  );
}

export default UserHome;
