import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../layout/Dashboard";
import Lessons from "../components/Lessons";
import AddLessons from "../components/AddLessons";
import AddVocabs from "../components/AddVocabs";
import ManageUsers from "../components/ManageUsers";
import ManageLessons from "../components/ManageLessons";
import ManageVocabs from "../components/ManageVocabs";
import ViewLessons from "../pages/ViewLessons";
import LessonDetails from "../components/LessonDetails";
import Tutorials from "../pages/Tutorials";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <ViewLessons></ViewLessons>
      </PrivateRoute>
    ),
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
    path: "/view-lessons",
    element: (
      <PrivateRoute>
        <ViewLessons />
      </PrivateRoute>
    ),
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: "/view-lessons/lessondetails/:id",
    element: (
      <PrivateRoute>
        <LessonDetails />
      </PrivateRoute>
    ),
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: "tutorials",
    element: (
      <PrivateRoute>
        <Tutorials />
      </PrivateRoute>
    ),
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    errorElement: <h1>Something went wrong</h1>,
    children: [
      {
        path: "lessons",
        element: (
          <AdminRoute>
            <Lessons />
          </AdminRoute>
        ),
        errorElement: <h1>Something went wrong</h1>,
      },
      {
        path: "addlessons",
        element: (
          <AdminRoute>
            <AddLessons />
          </AdminRoute>
        ),
        errorElement: <h1>Something went wrong</h1>,
      },
      {
        path: "addvocabs",
        element: (
          <AdminRoute>
            <AddVocabs />
          </AdminRoute>
        ),
        errorElement: <h1>Something went wrong</h1>,
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
        errorElement: <h1>Something went wrong</h1>,
      },
      {
        path: "managelessons",
        element: (
          <AdminRoute>
            <ManageLessons />
          </AdminRoute>
        ),
        errorElement: <h1>Something went wrong</h1>,
      },
      {
        path: "managevocabs",
        element: (
          <AdminRoute>
            <ManageVocabs />
          </AdminRoute>
        ),
        errorElement: <h1>Something went wrong</h1>,
      },
    ],
  },
]);
