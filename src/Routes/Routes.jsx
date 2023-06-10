import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../layout/Dashboard";
import Alluser from "../pages/Alluser";
import PrivateRoute from "./PrivateRoute";

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
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'alluser',
          element: <Alluser></Alluser>
        }
      ]
    }
  ]);
  