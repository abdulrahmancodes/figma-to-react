import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
