import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main/MainLayout";
import Home from "../pages/Home";
import Login from "../components/loginRegister/Login";
import Register from "../components/loginRegister/Register";
import Profile from "../pages/Profile";
import AddJob from "../pages/AddJob";
import Myjob from "../pages/Myjob";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2> error page </h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        {
          path:'/addjob',
          element:<AddJob></AddJob>,
        },
        {
          path:'/my-jobs',
          element:<Myjob></Myjob>
        }
    ]
  },
]);
