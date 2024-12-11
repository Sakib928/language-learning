import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/random",
    element: <div>Random path</div>,
  },
]);
