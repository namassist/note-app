import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./context/app-context";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Login, Error, Notes, Archieved, Detail, New, Register } from "./pages";

// css
import "./assets/css/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/notes",
    element: <Notes />,
    errorElement: <Error />,
  },
  {
    path: "/archieved",
    element: <Archieved />,
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
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
