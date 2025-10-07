 import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/home";
import Categories from "../Pages/CategoryNews";
import CategoryNews from "../Pages/CategoryNews";
import Authlayout from "../Layouts/Authlayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/newsDetails";
import PrivetRouters from "../provider/PrivetRouters";

 const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
      {
       path:"",
       Component:Home
      },
      {
       path:"/category/:id",
       Component:CategoryNews,
       loader: () => fetch('/news.json')
      },
     
    ]
  },
  {
    path: "/auth",
    Component: Authlayout,
    children: [
      {
        path:"/auth/login",
        Component:Login
      },
      {
        path:"/auth/register",
        Component:Register
      }
    ]
  },
  {
    path: "/news-details/:id",
    element:<PrivetRouters><NewsDetails></NewsDetails></PrivetRouters>,
    loader: () => fetch('/news.json')
  },
  {
    path: "/*",
    element: <div>error 404</div>,
  },
]);

export default router