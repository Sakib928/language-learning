import AdminNavbar from "../components/AdminNavbar";
import UserNavbar from "../components/UserNavbar";

const Main = () => {
  const role = localStorage.getItem("role");
  return <>{role === "admin" ? <AdminNavbar /> : <UserNavbar />}</>;
};

export default Main;
