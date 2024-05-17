import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.scss";
import Contact from "./pages/contact/contact.jsx";
import Error from "./pages/error/error.jsx";
import Home from "./pages/home/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/leda",
        element: <Home />,
      },
      {
        path: "/leda/contact",
        element: <Contact />,
      },
      {
        path: "/leda/*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
