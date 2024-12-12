import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../layout/Dashboard";
import Lessons from "../components/Lessons";
import AddLessons from "../components/AddLessons";
import AddVocabs from "../components/AddVocabs";
import ManageUsers from "../components/ManageUsers";
import ManageLessons from "../components/ManageLessons";
import ManageVocabs from "../components/ManageVocabs";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "lessons",
        element: <Lessons />,
      },
      {
        path: "addlessons",
        element: <AddLessons />,
      },
      {
        path: "addvocabs",
        element: <AddVocabs />,
      },
      {
        path: "manageusers",
        element: <ManageUsers />,
      },
      {
        path: "managelessons",
        element: <ManageLessons />,
      },
      {
        path: "managevocabs",
        element: <ManageVocabs />,
      },
    ],
  },
]);
