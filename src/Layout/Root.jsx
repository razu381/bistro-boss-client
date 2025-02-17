import React from "react";
import Header from "../Pages/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
