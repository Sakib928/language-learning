import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
