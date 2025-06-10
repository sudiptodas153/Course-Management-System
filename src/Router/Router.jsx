import { createBrowserRouter } from "react-router";
import layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddCourse from "../Pages/AddCourse/AddCourse";




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
          path:'addCourse',
          Component: AddCourse
        },
        {
          path: "register",
          Component: Register
        },
        {
          path: "login",
          Component: Login
        }
    ]
  },
]);