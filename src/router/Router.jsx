import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import MenuPage from "../Pages/Menu/MenuPage";
import ShopPage from "../Pages/Shop/ShopPage";
import MenuProductSlider from "../Pages/Shop/MenuProductSlider";
import Login from "../Pages/Login/Login";

const routerInfo = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:category",
        element: <ShopPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "test",
        element: <MenuProductSlider />,
      },
    ],
  },
]);

export default routerInfo;
