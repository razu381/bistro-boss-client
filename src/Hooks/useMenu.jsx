import { useEffect, useState } from "react";

let UseMenu = (category = "all") => {
  let [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  if (category === "all") return menu;
  else {
    let sortedData = menu.filter((item) => item.category === category);
    return sortedData;
  }
};

export default UseMenu;
