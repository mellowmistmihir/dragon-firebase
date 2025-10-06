 import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/home";
import Categories from "../Pages/CategoryNews";
import CategoryNews from "../Pages/CategoryNews";

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
    element: <div>authentication</div>,
  },
  {
    path: "/news",
    element: <div>Hello i am news</div>,
  },
  {
    path: "/*",
    element: <div>error 404</div>,
  },
]);

export default router