import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { ROUTE_CHECKOUT, ROUTE_SIGN_IN, ROUTE_SIGN_UP } from "./constants/route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ROUTE_SIGN_UP,
    element: <SignUp />,
  },
  {
    path: ROUTE_SIGN_IN,
    element: <SignIn />,
  },
  {
    path: ROUTE_CHECKOUT,
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>
);