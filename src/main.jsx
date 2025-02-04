import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routerInfo from "./router/router.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={routerInfo} />
  </AuthProvider>

  // </StrictMode>
);
