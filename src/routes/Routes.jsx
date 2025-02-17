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
import MyProfile from "../Pages/MyProfile/MyProfile";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/ManageItems/ManageItems";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/UserHome/UserHome";
import AdminHome from "../Pages/AdminHome/AdminHome";


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
        {
          path : 'myProfile',
          element : <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [
        // normal users
        {
          path : 'userHome',
          element : <UserHome></UserHome>
        },
        {
          path : 'cart',
          element : <Cart></Cart>
        },
        {
          path : 'payment',
          element : <Payment></Payment>
        },
        {
          path : 'paymentHistory',
          element : <PaymentHistory></PaymentHistory>
        },

        // Admin Routes
        {
          path : 'addItems',
          element : <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path : 'adminHome',
          element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path : 'manageItems',
          element : <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path : 'updateItem/:id',
          element : <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path : 'users',
          element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    },
  ]);