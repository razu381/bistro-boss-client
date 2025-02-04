import React, { useEffect, useState } from "react";
import SharedTitle from "../shared/SharedTitle";
import MenuItem from "../shared/MenuItem";
import UseMenu from "../../Hooks/useMenu";

function Menu() {
  let menu = UseMenu();
  let popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SharedTitle subheading="Check it out" heading="From our menu" />
      <div className="grid grid-cols-2 gap-4">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
