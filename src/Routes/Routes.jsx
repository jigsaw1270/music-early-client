import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'classes',
            element: <Classes></Classes>
        },
        {
            path: 'instructors',
            element: <Instructors></Instructors>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path:'signup',
            element:<Signup></Signup>
        }

      ]
    },
  ]);
  