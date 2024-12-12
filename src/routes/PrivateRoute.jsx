import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("email");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
