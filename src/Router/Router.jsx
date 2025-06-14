import { createBrowserRouter } from "react-router";
import layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddCourse from "../Pages/AddCourse/AddCourse";
import Course from "../Pages/Course/Course";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageCourse from "../Pages/ManageCourse/ManageCourse";
import MyEnroll from "../Pages/MyEnroll/MyEnroll";
import ManageCourseWithEmail from "../Shared/ManageCourseWithEmail/ManageCourseWithEmail";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: layout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/last-added'),
        Component: Home
      },
      {
        path: 'addCourse',
        Component: AddCourse
      },
      
      {
        path:'Manage-courses',
        Component: ManageCourse
      },
      {
        path:'My-enrolled-courses',
        Component: MyEnroll
      },
      {
        path: 'course',
        loader: () => fetch('http://localhost:3000/course'),
        Component: Course
      },
      {
        path: 'courses/:id',
        loader: ({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
        Component: Details
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