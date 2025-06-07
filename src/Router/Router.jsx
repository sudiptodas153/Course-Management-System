import { createBrowserRouter } from "react-router";
import layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: layout,
    children: [
        {
            index:true,
            Component: Home
        },
        {
          path: "/register",
          Component: Register
        },
    ]
  },
]);