import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root";
import AddCoffee from "./Component/AddCoffee";
import UpdateCoffee from "./Component/UpdateCoffee";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AuthProvider from "./Provider/AuthProvider";
import User from "./User";
import UserID from "./UserID";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://coffee-store-server-mocha-nine.vercel.app/coffees"),
        element: <Home></Home>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        loader: () =>
          fetch("https://coffee-store-server-mocha-nine.vercel.app/users"),
        element: <User></User>,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-mocha-nine.vercel.app/users/${params.id}`
          ),
        element: <UserID></UserID>,
      },
      {
        path: `/updatecoffees/:id`,
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-mocha-nine.vercel.app/updatecoffee/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
