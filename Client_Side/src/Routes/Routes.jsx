import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/signup/Signup";
import Add from "../Pages/Add/Add";
import MyDoll from "../Pages/MyDoll/MyDoll";
import AllDoll from "../Pages/AllDoll/AllDoll";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../Pages/Error404/Error404";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/Home/Categories/ViewDetails";
import Update from "../Pages/MyDoll/Update";
import Optinal from "../Layout/Optinal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/viewDetails/:category/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/${params.category}/${params.id}`
          ),
      },

      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add></Add>
          </PrivateRoute>
        ),
      },
      {
        path: "/myDoll",
        element: (
          <PrivateRoute>
            <MyDoll></MyDoll>
          </PrivateRoute>
        ),
      },
      {
        path: "/allDoll",
        element: <AllDoll></AllDoll>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/update/:sub_category/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-fayeja.vercel.app/${params.sub_category}/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <Optinal></Optinal>,
    children: [
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);

export default router;
