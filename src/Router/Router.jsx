import { createBrowserRouter } from "react-router";
import layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Course from "../Pages/Course/Course";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageCourse from "../Pages/ManageCourse/ManageCourse";
import MyEnroll from "../Pages/MyEnroll/MyEnroll";
import ManageCourseWithEmail from "../Shared/ManageCourseWithEmail/ManageCourseWithEmail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddCourse from "../Pages/AddCourse/AddCourse";
import Loader from "../Shared/Loader/Loader";
import EditCourse from "../Pages/EditCourse/EditCourse";
import Community from "../Pages/Community/Community";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: layout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('https://server-side-taupe-three.vercel.app/last-added'),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home
      },
      {
        path: 'addCourse',
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
      },

      {
        path: 'Manage-courses',
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute><ManageCourse></ManageCourse></PrivateRoute>
      },
      {
        path: 'My-enrolled-courses',
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute><MyEnroll></MyEnroll></PrivateRoute>
      },
      {
        path: 'community',
        hydrateFallbackElement: <Loader></Loader>,
        Component: Community
      },
      {
        path: 'course',
        loader: () => fetch('https://server-side-taupe-three.vercel.app/course'),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Course
      },
      {
        path: 'courses/:id',
        loader: ({ params }) => fetch(`https://server-side-taupe-three.vercel.app/courses/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Details
      },
      {
        path: 'courses/edit/:id',
        loader: ({ params }) => fetch(`https://server-side-taupe-three.vercel.app/courses/edit/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        Component: EditCourse
      },
      {
        path: "register",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Register
      },
      {
        path: "login",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Login
      }
    ]
  },
]);