import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/shared/secret/secret";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : 'menu',
          element : <Menu></Menu>
        },
        {
          path : 'order/:category',
          element : <Order></Order>
        },
        {
          path : 'login',
          element : <Login></Login>
        },
        {
          path : 'signup',
          element : <SignUp></SignUp>
        },
        {
          path : 'contact',
          element : <Contact></Contact>
        },
        {
          path : 'secret',
          element : <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
  ]);