import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/Root";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import "./index.css";
import "./animations.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
	errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
