import React from "react";
import ReactDOM from "react-dom/client";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home, Error, Archieve, Detail, New } from "./pages";

// css
import "./assets/css/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/archieve",
    element: <Archieve />,
    errorElement: <Error />,
  },
  {
    path: "/notes/detail/:id",
    element: <Detail />,
    errorElement: <Error />,
  },
  {
    path: "/notes/new",
    element: <New />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
