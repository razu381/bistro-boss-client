import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useCheckAdmin from "../Hooks/useCheckAdmin";

function Dashboard() {
  let [isAdmin] = useCheckAdmin();
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-yellow-700">
        {isAdmin ? (
          <ul className="flex flex-col gap-5">
            <NavLink to="/dashboard/admin-home">Dashboard </NavLink>
            <NavLink to="/dashboard/add-item">Add items</NavLink>
            <NavLink to="/dashboard/manage-items">Manage items</NavLink>
            <NavLink to="/dashboard/payment-history">Payment History</NavLink>
            <NavLink to="/dashboard/all-users">All Users</NavLink>
          </ul>
        ) : (
          <ul className="flex flex-col gap-5">
            <NavLink to="/dashboard/user-home">Dashboard</NavLink>
            <NavLink>Home </NavLink>
            <NavLink>Menu</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Contact</NavLink>
          </ul>
        )}
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
