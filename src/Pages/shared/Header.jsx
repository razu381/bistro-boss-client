import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let li = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/contact">Contact us</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salads">Our Shop</Link>
      </li>
      <li>
        <Link>Sign out</Link>
      </li>
    </>
  );
  return (
    <div className="navbar  sticky bg-black bg-opacity-30 text-white z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {li}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
    </div>
  );
}

export default Header;
