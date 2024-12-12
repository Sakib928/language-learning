import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const userRole = localStorage.getItem("role");
  if (userRole === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default AdminRoute;
