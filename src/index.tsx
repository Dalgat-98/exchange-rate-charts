import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
